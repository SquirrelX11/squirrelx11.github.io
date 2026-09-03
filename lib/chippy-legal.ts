/**
 * Chippy legal/support content (English).
 *
 * Written against the shipping build: the listen-only CGEventTap in
 * `Sources/Core/KeyEventMonitor.swift`, the preferences in `AppSettings`, the
 * trial date in `Trial`, and the StoreKit unlock in `Store`. Every claim here
 * is one the app can actually keep.
 */

export const chippyLegalMeta = {
  effectiveDate: "August 31, 2026",
  lastUpdated: "September 3, 2026"
} as const;

export const chippyPrivacyBody = `Chippy **collects nothing**. There is no account, no analytics, no advertising, no tracker and no third-party SDK in the app, and there is **no server on our side** — nowhere for anything to be sent. This Privacy Policy is provided by Aleksandr Pavlov (Squirrel Apps), an independent developer.

## 1. What this covers
This policy covers the Chippy app for macOS.

## 2. What Chippy reads while you type
Chippy plays a sound for each key press. To know that a key moved it observes keyboard events through a **listen-only** system facility, which macOS gates behind the **Input Monitoring** permission you grant in System Settings. That permission covers exactly this: watching input without acting on it.

From each event it reads exactly two things: the **numeric code** of the key, and whether it went **down or up**.

That is all. Characters are never decoded, so the app has no idea what you typed. It does not look at which application you are using, what is on screen, or anything about the document you are working in. The information picks a sound and is discarded immediately — never written to disk, never sent anywhere.

## 3. Password fields
In secure text fields macOS withholds keyboard events from **every** listener on the system, Chippy included. Typing there is silent by design, and the app cannot observe it even in principle.

## 4. What is stored on your Mac
- **Your settings** — the chosen profile, volume and the other switches — in the app's own preferences.
- **A keystroke count**, shown to you inside the app. It is a number, not a record of what was typed.
- **The date your trial began**, in your Mac's keychain, so that reinstalling does not hand out a second trial.

All of it stays on your computer, and removing the app removes it.

## 5. Purchases
The one-time unlock is sold through the App Store. **Apple** processes the payment and tells the app whether the purchase exists. Chippy never sees your name, your payment details or your Apple Account.

## 6. Children
The app is suitable for all ages and collects nothing from anyone, children included.

## 7. Changes
If this policy changes, the updated version appears on this page with a new date above.

## 8. Contact
Questions about privacy: [PRIVACY EMAIL]`;

export const chippySupportBody = `Chippy gives your Mac keyboard the sound of a mechanical one. Write to [SUPPORT EMAIL] and a person will answer.

## I hear nothing when I type
Chippy needs permission to notice key presses. Open **System Settings → Privacy & Security → Input Monitoring** and switch Chippy on. If it is already listed, switch it off and on again — macOS sometimes holds on to a stale entry after an update.

Sound inside the app's own window but nowhere else means exactly this: the permission has not been granted yet.

## It goes quiet in password fields
That is macOS, not a fault. While a secure text field is focused the system withholds key events from every listener, Chippy included.

## Where is the app?
It lives in the menu bar, at the top right of the screen. Click the squirrel for the quick panel; right-click, or hold Control and click, for the full settings window. A Dock icon can be turned on in **General**.

## What the profiles are
Six mechanical switches and five typewriters. On a typewriter, Return runs the whole carriage home and the margin bell rings a few characters before the edge of the paper — both can be switched off in **Switches → Machine**.

## The trial ended
The Cashew profile keeps working for nothing. A single payment unlocks the other ten permanently — no subscription, nothing to renew. Already bought it on another Mac? Use **About → Restore purchase**.

## Something else
Bugs, ideas, a switch you would like to hear: [SUPPORT EMAIL]`;
