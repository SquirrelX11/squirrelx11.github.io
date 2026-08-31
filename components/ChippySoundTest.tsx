"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * The sound test on the Chippy page: pick a profile, type, hear exactly what
 * the app plays.
 *
 * The samples are the app's own, halved to 24 kHz for the web. They stay WAV on
 * purpose — MP3 and AAC both pad the start of a file, and on a 150 ms click that
 * padding is audible as lateness.
 */

type Voices = Record<string, { down: string[]; up: string[] }>;

interface Pack {
  id: string;
  name: string;
  subtitle: string;
  accent: string;
  family: "switch" | "typewriter";
  voices: Voices;
  bell: { file: string; margin: number } | null;
}

interface Loaded {
  voices: Record<string, { down: AudioBuffer[]; up: AudioBuffer[] }>;
  bell: AudioBuffer | null;
}

/** Mirrors the keyboard the app models, so a key is panned to the same place. */
const ROWS: [string, number][][] = [
  [["Backquote", 1], ["Digit1", 1], ["Digit2", 1], ["Digit3", 1], ["Digit4", 1], ["Digit5", 1],
   ["Digit6", 1], ["Digit7", 1], ["Digit8", 1], ["Digit9", 1], ["Digit0", 1], ["Minus", 1],
   ["Equal", 1], ["Backspace", 2]],
  [["Tab", 1.5], ["KeyQ", 1], ["KeyW", 1], ["KeyE", 1], ["KeyR", 1], ["KeyT", 1], ["KeyY", 1],
   ["KeyU", 1], ["KeyI", 1], ["KeyO", 1], ["KeyP", 1], ["BracketLeft", 1], ["BracketRight", 1],
   ["Backslash", 1.5]],
  [["CapsLock", 1.75], ["KeyA", 1], ["KeyS", 1], ["KeyD", 1], ["KeyF", 1], ["KeyG", 1], ["KeyH", 1],
   ["KeyJ", 1], ["KeyK", 1], ["KeyL", 1], ["Semicolon", 1], ["Quote", 1], ["Enter", 2.25]],
  [["ShiftLeft", 2.25], ["KeyZ", 1], ["KeyX", 1], ["KeyC", 1], ["KeyV", 1], ["KeyB", 1],
   ["KeyN", 1], ["KeyM", 1], ["Comma", 1], ["Period", 1], ["Slash", 1], ["ShiftRight", 2.75]],
  [["ControlLeft", 1], ["AltLeft", 1], ["MetaLeft", 1.25], ["Space", 5], ["MetaRight", 1.25],
   ["AltRight", 1], ["ArrowLeft", 1], ["ArrowUp", 1], ["ArrowRight", 1]]
];

const PAN: Record<string, number> = {};
for (const row of ROWS) {
  const total = row.reduce((sum, [, width]) => sum + width, 0);
  let x = (15 - total) / 2;
  for (const [code, width] of row) {
    PAN[code] = ((x + width / 2) / 15 - 0.5) * 2;
    x += width;
  }
}

const WIDE = new Set([
  "Backspace", "Tab", "CapsLock", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight",
  "AltLeft", "AltRight", "MetaLeft", "MetaRight", "Escape", "ArrowLeft", "ArrowRight",
  "ArrowUp", "ArrowDown"
]);

function voiceFor(code: string) {
  if (code === "Space") return "space";
  if (code === "Enter" || code === "NumpadEnter") return "enter";
  return WIDE.has(code) ? "modifier" : "default";
}

const BASE = "/apps/chippy/demo";

export function ChippySoundTest() {
  const [packs, setPacks] = useState<Pack[]>([]);
  const [current, setCurrent] = useState<Pack | null>(null);
  const [status, setStatus] = useState("Pick a profile and start typing");
  const [volume, setVolume] = useState(0.6);
  const [release, setRelease] = useState(true);
  const [bellOn, setBellOn] = useState(true);
  const [lit, setLit] = useState(false);
  const [typed, setTyped] = useState(false);
  const [focused, setFocused] = useState(false);
  const pad = useRef<HTMLTextAreaElement | null>(null);

  const currentRef = useRef<Pack | null>(null);
  const audio = useRef<AudioContext | null>(null);
  const master = useRef<GainNode | null>(null);
  const loaded = useRef<Loaded | null>(null);
  const busy = useRef(false);
  const sinceReturn = useRef(0);
  const nextBell = useRef(0);
  const settings = useRef({ release: true, bell: true });
  const typedRef = useRef(false);

  settings.current = { release, bell: bellOn };
  typedRef.current = typed;

  const context = useCallback(() => {
    if (!audio.current) {
      const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new Ctor();
      const gain = ctx.createGain();
      gain.gain.value = volume;
      gain.connect(ctx.destination);
      audio.current = ctx;
      master.current = gain;
    }
    if (audio.current.state === "suspended") void audio.current.resume();
    return audio.current;
  }, [volume]);

  useEffect(() => {
    if (master.current) master.current.gain.value = volume;
  }, [volume]);

  useEffect(() => {
    let cancelled = false;
    fetch(`${BASE}/packs.json`)
      .then((response) => response.json())
      .then((list: Pack[]) => {
        if (cancelled) return;
        setPacks(list);
      })
      .catch(() => setStatus("The demo could not load its sounds."));
    return () => { cancelled = true; };
  }, []);

  const select = useCallback(async (pack: Pack) => {
    setCurrent(pack);
    currentRef.current = pack;
    busy.current = true;
    setStatus(`Loading ${pack.name}…`);

    const ctx = context();
    const grab = async (file: string) => {
      const response = await fetch(`${BASE}/packs/${pack.id}/${file}`);
      return ctx.decodeAudioData(await response.arrayBuffer());
    };

    try {
      const voices: Loaded["voices"] = {};
      for (const [voice, phases] of Object.entries(pack.voices)) {
        voices[voice] = {
          down: await Promise.all(phases.down.map(grab)),
          up: await Promise.all(phases.up.map(grab))
        };
      }
      loaded.current = { voices, bell: pack.bell ? await grab(pack.bell.file) : null };
      sinceReturn.current = 0;
      nextBell.current = pack.bell ? pack.bell.margin + Math.floor(Math.random() * 9) - 4 : 0;
      setStatus(typedRef.current ? `${pack.name} — ${pack.subtitle}` : "Ready — start typing");
      pad.current?.focus();
    } catch {
      setStatus("That profile could not be loaded.");
    } finally {
      busy.current = false;
    }
  }, [context]);

  useEffect(() => {
    if (packs.length && !current) void select(packs[0]);
  }, [packs, current, select]);

  const shot = useCallback((buffer: AudioBuffer, pan: number, gain: number) => {
    const ctx = audio.current;
    if (!ctx || !master.current) return;
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    // A small random shift keeps a held sentence from repeating itself.
    source.playbackRate.value = 0.94 + Math.random() * 0.12;
    const panner = ctx.createStereoPanner();
    panner.pan.value = Math.max(-1, Math.min(1, pan * 0.6));
    const level = ctx.createGain();
    level.gain.value = gain * (0.92 + Math.random() * 0.08);
    source.connect(level).connect(panner).connect(master.current);
    source.start();
  }, []);

  const strike = useCallback((code: string, phase: "down" | "up") => {
    const bank = loaded.current;
    if (!bank || busy.current) return;
    const voice = bank.voices[voiceFor(code)] ?? bank.voices.default;
    const pool = voice?.[phase];
    if (!pool?.length) return;

    shot(pool[Math.floor(Math.random() * pool.length)], PAN[code] ?? 0.6, phase === "up" ? 0.5 : 1);

    if (phase !== "down" || !bank.bell || !settings.current.bell) return;
    if (voiceFor(code) === "enter") { sinceReturn.current = 0; return; }
    sinceReturn.current += 1;
    if (sinceReturn.current === nextBell.current) shot(bank.bell, 0.3, 0.9);
  }, [shot]);

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.repeat) return;
      context();
      strike(event.code, "down");
      if (!typedRef.current) {
        setTyped(true);
        setStatus(currentRef.current ? `${currentRef.current.name} — ${currentRef.current.subtitle}` : "");
      }
      setLit(true);
      window.setTimeout(() => setLit(false), 90);
    };
    const up = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey) return;
      if (settings.current.release) strike(event.code, "up");
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, [strike, context]);

  const shelf = (family: Pack["family"], title: string) => {
    const list = packs.filter((pack) => pack.family === family);
    if (!list.length) return null;
    return (
      <div style={{ marginTop: 22 }}>
        <p className="eyebrow" style={{ marginBottom: 10 }}>{title}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(178px, 1fr))", gap: 10 }}>
          {list.map((pack) => {
            const active = current?.id === pack.id;
            return (
              <button
                key={pack.id}
                type="button"
                onClick={() => void select(pack)}
                aria-pressed={active}
                style={{
                  textAlign: "left",
                  cursor: "pointer",
                  font: "inherit",
                  color: "inherit",
                  padding: "12px 14px",
                  borderRadius: 14,
                  border: `1px solid ${active ? pack.accent : "rgba(255,255,255,.14)"}`,
                  background: active ? `${pack.accent}22` : "transparent",
                  transition: "border-color .18s, background .18s"
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 9, height: 9, borderRadius: "50%", background: pack.accent, flex: "none" }} />
                  <b style={{ fontSize: 15 }}>{pack.name}</b>
                </span>
                <span style={{ display: "block", marginTop: 5, fontSize: 12, opacity: 0.66, lineHeight: 1.45 }}>
                  {pack.subtitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="glass" style={{ padding: 24, borderRadius: 22 }}>
      <div
        role="presentation"
        onClick={() => pad.current?.focus()}
        style={{
          position: "relative",
          cursor: "text",
          borderRadius: 16,
          padding: "18px 18px 14px",
          background: "rgba(255,255,255,.04)",
          border: `1px solid ${focused ? (current?.accent ?? "#c4763a") : "rgba(255,255,255,.16)"}`,
          transition: "border-color .2s"
        }}
      >
        <textarea
          ref={pad}
          spellCheck={false}
          aria-label="Type here to hear the selected profile"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%",
            minHeight: 104,
            resize: "none",
            border: 0,
            outline: 0,
            // The site's global :focus-visible rule paints a ring on everything.
            // Here the wrapper already lights up in the profile's colour, so a
            // second frame inside the first is just noise.
            boxShadow: "none",
            background: "transparent",
            color: "inherit",
            font: "inherit",
            fontSize: 19,
            lineHeight: 1.55
          }}
        />

        {!typed && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: "18px 18px auto",
              pointerEvents: "none",
              fontSize: 19,
              lineHeight: 1.55,
              opacity: 0.55
            }}
          >
            Type anything — the whole page listens
            <span
              style={{
                display: "inline-block",
                width: 2,
                height: "1.05em",
                marginLeft: 3,
                verticalAlign: "-0.16em",
                background: "currentColor",
                animation: "chippy-caret 1.05s steps(1) infinite"
              }}
            />
          </div>
        )}
      </div>

      <style>{"@keyframes chippy-caret { 50% { opacity: 0 } }"}</style>

      <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13, marginTop: 12, flexWrap: "wrap" }}>
        <button
          type="button"
          onClick={() => pad.current?.focus()}
          style={{
            cursor: "pointer",
            font: "inherit",
            fontSize: 13,
            fontWeight: 600,
            color: "#fff",
            border: 0,
            borderRadius: 10,
            padding: "9px 16px",
            background: current?.accent ?? "#c4763a"
          }}
        >
          Click here, then type
        </button>
        <span
          style={{
            width: 8, height: 8, borderRadius: "50%",
            background: current?.accent ?? "#c4763a",
            opacity: lit ? 1 : 0.25,
            transition: "opacity .09s"
          }}
        />
        <span style={{ opacity: 0.7 }}>{status}</span>
      </div>

      {shelf("switch", "Mechanical switches")}
      {shelf("typewriter", "Typewriters")}

      <div
        style={{
          display: "flex", gap: 22, alignItems: "center", flexWrap: "wrap",
          marginTop: 24, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,.12)", fontSize: 14
        }}
      >
        <label style={{ display: "flex", alignItems: "center", gap: 9 }}>
          Volume
          <input
            type="range" min={0} max={1} step={0.01} value={volume}
            onChange={(event) => setVolume(parseFloat(event.target.value))}
            style={{ width: 140 }}
          />
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <input type="checkbox" checked={release} onChange={(event) => setRelease(event.target.checked)} />
          Key release
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <input type="checkbox" checked={bellOn} onChange={(event) => setBellOn(event.target.checked)} />
          Margin bell
        </label>
      </div>
    </div>
  );
}
