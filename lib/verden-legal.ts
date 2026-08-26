/**
 * Verden legal/support content (English).
 *
 * Written against the shipping app, not against an idea of it: the key
 * hierarchy in `SafeHub/Security`, the sync path in `SafeHub/Sync`, the logo
 * provider chain in `SafeHub/BrandCatalog`, and the autofill sub-vault in
 * `SafeHub/Features/AutoFill`. Every claim here is one the build keeps. Where
 * the app cannot do something people assume a security app does, that is said
 * plainly rather than left for someone to discover.
 *
 * Note on names: the app was called SafeHub during development. Its bundle
 * identifier, its iCloud container and its cryptographic identifiers still read
 * `safehub` — changing them would derive different keys and lock every existing
 * vault. Users may see the old name in iCloud storage listings; that is
 * mentioned in the privacy policy rather than hidden.
 */

export const verdenLegalMeta = {
  effectiveDate: "August 26, 2026",
  lastUpdated: "August 26, 2026"
} as const;

export const verdenPrivacyBody = `Verden is a **local-first** vault for the things that get you back into your accounts. What you enter is stored **on your device**, encrypted with a key that never leaves it, and — only if you turn it on — in **your own private iCloud**, still encrypted. There are **no Verden accounts**, **no user database**, **no analytics**, **no advertising**, **no trackers** and **no third-party SDKs**. We cannot read your vault, and no amount of asking us will change that, because we do not hold the key. This Privacy Policy is provided by Aleksandr Pavlov (Squirrel Apps), an independent developer.

There is exactly one service we operate, and it is a logo cache — see §7. It receives a public domain such as \`netflix.com\` and nothing about you.

## 1. What this covers
This policy covers the Verden app for iPhone and iPad and its Password AutoFill extension. Information you record about your own accounts, devices, documents and people is entered by you.

## 2. What Verden stores, and where
Verden holds what you put into it: services and how you get back into them, recovery addresses and phone numbers, backup codes, security-key details, device passports, documents and their attachments, notes, Wi-Fi credentials, software licences, developer secrets, seed phrases and private keys, emergency plans, trusted contacts, travel plans and a digital legacy plan.

All of it is encrypted on the device with your Vault Encryption Key using AES-256-GCM. That key is generated on the device, is never written to disk in the clear, and is never sent anywhere. It exists in memory only while your vault is unlocked.

If you turn on iCloud Sync, the same encrypted records are stored in **your own private iCloud database** under your Apple ID. Apple receives ciphertext, opaque identifiers, record sizes and timestamps — never content. We have no access to that database at all.

A few things are deliberately kept outside the vault because they contain nothing of yours: which categories Travel Mode hides on this device, the history of your last twenty recovery drills (the scenario, when you ran it and four counts — never an account or a label), and the cache of service logos.

## 3. What is never stored anywhere
Your **Master Recovery Phrase** is generated on the device, shown to you once, and stored nowhere — not on the device, not in iCloud, not with us. The same is true of the key that opens a **Recovery Capsule** you export. If you lose them, there is no escrow and no reset. That is the point of them, and it is stated in the app before you are asked to write one down.

## 4. Password AutoFill
AutoFill is **off until you turn it on**, in *Settings → Password AutoFill*. While it is off, no key and no file exist for the extension to read.

When it is on, Verden writes a second, much smaller store that the extension can open. It contains one record per account **that has a password saved in Verden** — five fields: an identifier, the service name, its domain, the username and the password. Nothing else from your vault is in it: not the recovery map, not your Master Recovery Phrase, not backup codes, seed phrases, private keys, documents, notes, attachments, device passports, plans or contacts.

That store stays on the device and is never synchronised. Its key is **derived** from your vault key rather than copied from it, and is held behind Face ID / Touch ID, so the extension must confirm it is you every time it fills something in.

Turning AutoFill off deletes the store and the key together.

The system tells the extension which website or app is asking for a password. The extension cannot see the rest of the screen, cannot read what you type, and cannot act on its own.

## 5. What Verden cannot see
Verden cannot read Apple Passwords, list the passkeys on your device, enumerate your accounts, or check with any service whether you have two-factor authentication switched on. Everything the app shows you — the Readiness score, the recovery map, every drill result — is built from what **you** entered or confirmed, and the app says so where it shows it.

Verden also has no way of knowing that anything has happened to you. The digital legacy plan is a document you prepare and hand over deliberately. Nothing is released on a timer, on a signal, or on inactivity.

## 6. Passwords, compared on the device
Passwords saved in Verden are compared with each other **on the device**, by fingerprint, so the app can tell you a password is reused. Those fingerprints exist only in memory while the comparison runs: they are never written to disk, never synchronised and never sent anywhere. We will not tell you they are irreversible — an unsalted hash of a weak password is not — which is exactly why they are never stored. The finding names the affected services, never the password. No breach database is consulted; Verden has no network path that could reach one.

## 7. Service logos (optional, switchable)
To show a recognisable logo next to a service, Verden can ask **our own logo cache** — a Cloudflare Worker we operate — for a logo by domain. That cache fetches from **Brandfetch** once and keeps the result for everyone, so Brandfetch is not contacted per user. If it has nothing, the app falls back to a site's favicon via **DuckDuckGo**.

The request carries **only the service's public domain** — for example \`netflix.com\`. No account data, no username, no identifier, nothing you typed into a record. As with any request to any website, our cache and those fallbacks necessarily see the **IP address** it came from; there is no account to attach it to and no profile is built.

Stated plainly, because it is the honest cost of the feature: a logo request tells that host **which service one of your records concerns**. Each domain is asked for at most once and then cached on your device, so it is not a running commentary on what you open — but it is not nothing either, and you should know it before deciding.

**Privacy & Security → Load service logos** turns this off entirely and clears the cache. Monograms are drawn instead, and the app is otherwise unchanged.

## 8. Network connections
Apart from the logo cache above, Verden makes exactly one kind of outbound connection: **iCloud (CloudKit)**, and only when you have turned sync on. It carries ciphertext, opaque identifiers and timestamps, and is governed by Apple's privacy policy.

There is no other connection. The app is fully usable with the network off — the recovery map, the drills, emergency playbooks, Travel Mode and the legacy plan are all computed on the device.

## 9. Permissions
- **Face ID / Touch ID** — to unlock the vault and to authorise revealing, copying, exporting or deleting anything sensitive.
- **Camera** — only inside the QR scanner, to read a Master Recovery Phrase while restoring.
- **Photos / Files** — only through the system picker, which grants access to the one file you chose.
- **Notifications** — only if you turn reminders on. The text is fixed and contains no name, count or identifier; nothing derived from your vault reaches the lock screen.

Verden never writes to Photos or Files by itself. Exporting a Recovery Kit or an encrypted archive happens through the system share sheet, after authentication and an explicit warning.

## 10. Purchases
Verden Pro is sold through the App Store. Apple processes the payment; we never receive your card details, billing address or Apple ID. The app keeps a local flag for what is unlocked, and nothing else about the transaction.

Nothing to do with regaining access is ever behind the paywall. Your Master Recovery Phrase, your backup codes and exporting an encrypted archive work whether or not you have paid, and will continue to. A subscription that could lock you out of your own recovery data would defeat the purpose of the app.

## 11. Third parties
- **Apple** — CloudKit, if you enable sync; the App Store, for purchases.
- **Cloudflare** — hosts the logo cache we operate (§7).
- **Brandfetch** — the logo source behind that cache.
- **DuckDuckGo** — favicon fallback, used only when the cache has nothing.

There are no analytics, advertising, attribution or crash-reporting services, and no user database.

## 12. Deleting your data
- **Settings → Privacy & Security → Delete local cache** removes the local records and keeps the encrypted iCloud copy.
- **Delete all vault data** destroys the local records, every key envelope, the device key in the Keychain and — if sync is on — the iCloud zone. After that the data is unrecoverable, **including by us**.
- Turning AutoFill off deletes the password store and its key.
- Deleting the app removes its local container. If sync was on, the encrypted copy stays in your iCloud until you remove it in **Settings → Apple ID → iCloud → Manage Storage**.

Because we hold nothing of yours, there is no data-deletion request to send us. You are welcome to write with a question all the same.

## 13. A note on the name
Verden was called **SafeHub** while it was being built. Its bundle identifier, its iCloud container and the identifiers inside its cryptography still read \`safehub\`, and they will stay that way: changing them would derive different keys and every vault already in existence would stop opening. You may see the old name in iCloud storage listings. It is the same app.

## 14. Children
Verden is not directed at children and collects nothing from anyone, including children. It has no messaging, sharing or social features.

## 15. Changes
If this policy changes, the date at the top changes with it, and the previous text remains in the site's public history.

## 16. Contact
Questions about privacy: [SUPPORT EMAIL].
`;

export const verdenSecurityBody = `This page describes what Verden actually does with your data, in enough detail to be checked rather than believed. It is written against the shipping code and is kept in step with it. Where a protection stops, that is said.

## 1. What the encryption is
Every record is encrypted on your device with **AES-256-GCM**, using your Vault Encryption Key. Only Apple's CryptoKit primitives are used; nothing cryptographic is written by hand. Every seal uses a fresh random nonce.

The Vault Encryption Key is generated once, on the device, at 256 bits. It is never written to disk in the clear, never placed in \`UserDefaults\`, never sent to iCloud, and never logged. It lives in memory only while your vault is unlocked. It is stored only **wrapped**, inside key envelopes.

## 2. The three ways in
A key envelope is your vault key encrypted under a wrapping key. There are three, and they are independent.

**The device envelope — ordinary unlocking.** A random 256-bit device key is held in the Keychain as *when unlocked, this device only*, so it is never included in a backup and never restored onto another device. Reading it requires Face ID, Touch ID or your passcode. Because that protection rests entirely on the device credential, **Verden refuses to create a vault on a device with no passcode** and says why, rather than quietly falling back to something weaker.

**The recovery envelope — a new device.** A **240-bit Master Recovery Phrase** is generated with the system random source and shown to you as twelve groups of four characters. The wrapping key is derived from it with HKDF-SHA256 and a random salt. The phrase itself is stored nowhere. Regenerating it deletes the previous envelope everywhere, so the old phrase then opens nothing.

**Backup codes — single use.** Eight independent 100-bit codes, each with its own salt and its own envelope. Redeeming one marks it consumed locally and in iCloud, and the envelope is deleted, so a used code stops working on every device.

## 3. What iCloud holds
If sync is on, iCloud holds ciphertext, opaque identifiers, record kinds, versions and timestamps — in **your own private database**, under your Apple ID. Apple cannot read the content. Neither can we; we have no access to that database at all.

We will not describe this as "zero knowledge", because that would be inaccurate: an observer of the iCloud zone can see **how many** records exist and **when** they changed, even though they cannot see what any of them says. That is metadata, and it is the honest limit of the design.

## 4. Recovery Capsules
A Recovery Capsule is a file you can hand to someone or store away from your device. It is sealed with its own **200-bit key**, shown once, stored nowhere by Verden, and unrelated to your vault key.

Nothing readable sits outside the sealed payload — no service name, no address, no note, no file name. The header is bound as authenticated data, so editing it breaks the seal rather than changing what opens. A capsule file on its own is inert.

What goes into a capsule is chosen per capsule. Recovery addresses and phone numbers are off by default; including live secret material requires a separate confirmation and a fresh authentication.

## 5. Password AutoFill
The autofill extension runs inside whatever app asked for a password, and that app is not trusted. The design assumes the extension can be attacked, and bounds what sits behind it.

It is given a **separate store**, not the vault: one record per account that has a password, five fields each. Its key is **derived** from the vault key with HKDF — reading it does not yield the vault key — and is held behind a user-presence check, so every fill needs Face ID, Touch ID or the passcode. A silent background read returns nothing.

Out of reach of the extension, by construction: the vault key, the recovery map, the Master Recovery Phrase, backup codes, seed phrases, private keys, documents, notes, attachments, device passports, plans, contacts, and every account with no password stored.

The feature is off until you turn it on, and turning it off deletes both halves.

**Where this stops:** if you are shown a look-alike domain and pick a credential for it anyway, autofill will fill it. The system reports the requesting domain and Verden shows it; recognising it is a judgement you make.

## 6. On the screen
The app relocks on a timeout you choose and always after launch. Secrets stay concealed even inside an unlocked session; revealing, copying, exporting or deleting each require a fresh check. A revealed value re-conceals itself after 30 seconds, and the clipboard is cleared on the interval you choose — thirty seconds, a minute, two minutes, or never, if you decide that is what you want.

While the app is not in the foreground it is covered, so the app-switcher snapshot holds nothing — a setting that is on unless you turn it off. While iOS reports active screen recording, views carrying secrets hide themselves.

**Where this stops:** iOS gives an app no way to prevent a screenshot, and no way at all to stop a camera pointed at the screen. Verden does not claim otherwise.

## 7. What leaves the device
Two things, and only if you allow them.

**iCloud**, when sync is on: ciphertext, opaque identifiers and timestamps, over Apple's own transport. Even a successful attack on that transport yields ciphertext, because the payload was already encrypted before it was handed over.

**A logo request**, when *Load service logos* is on: one domain, to a cache we run — and, if that cache has nothing, to DuckDuckGo's favicon service. No account data, no identifier, no vault content. It does tell whichever host answers which service a record of yours concerns, which is why the switch exists and why the Privacy Policy says so rather than burying it.

Nothing else. There is no telemetry, no crash reporter, no attribution and no advertising identifier — and no third-party SDK of any kind is linked into the app, so there is no vendor who could add one in an update we did not read. The whole dependency list is Apple's own frameworks.

## 8. What this design does not survive
A device with malware running as root, or an unlocked device in someone else's hands with your face or passcode. Once the vault is unlocked, its contents are readable by definition — that is what unlocking means. Verden shortens the window with a relock timeout, concealed values and a fresh check before each reveal, but it cannot defend a device that is already lost while open.

## 9. What Verden will not claim
- It cannot read Apple Passwords, list your passkeys, scan your device for accounts, or check with a service whether two-factor is on. Everything in the Readiness score comes from what you entered or confirmed.
- It cannot prevent screenshots.
- It cannot detect that something has happened to you. The digital legacy plan is handed over deliberately; nothing releases on a timer.
- Travel Mode hides categories **on the device it was switched on**. It deletes nothing and changes nothing on your other devices.
- It cannot recover a lost Master Recovery Phrase. There is no escrow, no backdoor and no support procedure that can substitute for it.
- It holds seed phrases and private keys — behind an explicit tap, never in a form that opens by default. It is not a hardware wallet: a phrase kept on a phone is only as safe as the phone.

## 10. Reporting something
If you believe you have found a vulnerability, write to [SUPPORT EMAIL] with enough detail to reproduce it. Please give us a reasonable period to fix it before publishing. There is no bounty programme; there is a developer who will read it and answer.
`;

export const verdenTermsBody = `These Terms of Use govern your use of the Verden app for iPhone and iPad, provided by Aleksandr Pavlov (Squirrel Apps), an independent developer.

## 1. Acceptance and licence
By downloading or using Verden, you agree to these Terms. If you do not agree, do not use the app.

You get a personal, non-transferable licence to use Verden on Apple devices you own or control, as permitted by the App Store Terms of Service. You may not resell it, rent it, or redistribute it as your own.

## 2. What Verden is
Verden is a tool for recording, encrypting and organising the information you would need to regain access to your own accounts. It stores what you enter. It does not act on your behalf, does not contact any service for you, and does not verify anything with anyone.

## 3. What Verden is not
Verden is not a backup of your accounts, not a password manager for someone else's system of record, and not a guarantee that you will recover access to anything. Whether a service lets you back in is that service's decision, under its own rules. Verden helps you be prepared for that conversation; it cannot have it for you.

Verden is not legal, financial or estate-planning advice. A digital legacy plan you write in Verden is a document, not a will, and has whatever legal force your jurisdiction gives such a document — which may be none.

## 4. Your keys are yours
Your Master Recovery Phrase, your backup codes and any capsule key you generate are stored **nowhere but with you**. We cannot recover them, reset them, or open your vault without them. This is a deliberate property of the design and not a limitation we can waive on request. **If you lose them and lose access to your device, your data is unrecoverable.**

You are responsible for writing down your recovery material and keeping it somewhere you will still have it. The app asks you to confirm you have done so; that confirmation is you telling us, not us checking.

## 5. Your content
Everything you put into Verden remains yours. We claim no rights over it and, in the ordinary case, no ability to read it.

You are responsible for what you record. If you store information about other people — a recovery contact, a family member's details — you are responsible for having a reasonable basis to do so.

## 6. Purchases and subscriptions
Verden Pro is sold through the App Store, as a monthly subscription, a yearly subscription, or a one-time lifetime purchase. Prices are shown in the app in your own currency before you buy.

A subscription renews automatically unless it is cancelled at least 24 hours before the period ends. You manage and cancel it in your Apple ID settings, not in the app; cancelling stops the next renewal and leaves the current period running. Where a free trial is offered, it converts into a paid period unless cancelled before it ends. A lifetime purchase does not renew and is not a subscription.

Apple takes the payment and issues refunds under the App Store Terms of Service. We never see your card details and cannot refund a purchase ourselves.

Features that concern regaining access — your Master Recovery Phrase, your backup codes and exporting an encrypted archive — are never behind the paywall and will not be moved behind it.

## 7. Acceptable use
Do not use Verden to store material that is unlawful to possess, and do not use it to hold credentials you have no right to. Do not attempt to interfere with the app or with the logo cache described in the Privacy Policy.

## 8. Availability
The app is provided as it is. We may update it, change what it does, or stop distributing it. If the logo cache is unavailable the app keeps working; you see generated icons instead. Nothing about your vault depends on a service we run.

## 9. Disclaimers and liability
To the fullest extent the law allows, Verden is provided **"as is"**, without warranties of any kind. We do not warrant that the app will be uninterrupted or error-free, or that it will enable you to recover access to anything.

To the fullest extent the law allows, our total liability arising from your use of Verden is limited to the amount you paid for it in the twelve months before the claim. Nothing here limits liability that cannot be limited by law.

## 10. Termination
The licence ends if you stop complying with these Terms or delete the app. Sections 4, 9 and 12 survive.

Deleting the app removes its local data. It does not cancel a subscription — that is done in your Apple ID settings.

## 11. Changes
We may revise these Terms. The date above changes when we do, and continuing to use the app means accepting the revision.

## 12. Governing law
These Terms are governed by the laws applicable at the developer's place of residence, without limiting any mandatory consumer rights you have where you live.

## 13. Apple
Apple is not a party to these Terms and has no obligation to provide support for the app. Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you.

## 14. Contact
[SUPPORT EMAIL]
`;

export const verdenSupportBody = `Verden is made by one developer. Write with a question and a person reads it — usually within a couple of days, though that is an intention rather than a guarantee.

**[SUPPORT EMAIL]**

## Before you write
A few answers that come up most often.

**I lost my Master Recovery Phrase. Can you reset it?**
No — and no one can. It is generated on your device, shown once and stored nowhere: not on the device, not in iCloud, not with us. There is no escrow and no support procedure that substitutes for it. If you still have access to your vault on a device, open *Plans → Recovery Phrase* and write down a fresh one now.

**Where do I find the passwords AutoFill can offer?**
*Settings → Password AutoFill → the counter*. It lists every account and says whether a password is saved for it; tapping one without a password opens it so you can add one. It never shows the passwords themselves.

**AutoFill does not appear above my keyboard.**
Two switches have to be on, and the second is easy to miss: *Verden → Settings → Password AutoFill*, then **Settings → General → AutoFill & Passwords → Verden**. Without the second, iOS never asks the extension for anything.

**The counter says 0 of 25 accounts.**
That is not a fault. Verden is built for recording *where* a password lives at least as often as the password itself, so an account with no password saved is a normal account. Add one in the account's Security section and the counter moves.

**Does Verden check my accounts?**
No. It cannot read Apple Passwords, list your passkeys, or ask a service whether your two-factor is on. Everything it shows is built from what you entered or confirmed, and it says so on the screen where it shows it.

**Is my data on your server?**
No, and there is nowhere for it to go: your vault is encrypted on your device with a key we do not have, and — only if you switch sync on — stored in your own private iCloud, still encrypted. We have no user database and no account system.

We do run one thing, and it is fair to know about it: a cache that returns a brand logo for a public domain, so services look like themselves in the app. It receives a domain such as \`netflix.com\` — never your records, your usernames or your passwords — and *Privacy & Security → Load service logos* turns it off.

**I deleted the app. Is my data gone?**
The local copy is. If sync was on, the encrypted copy is still in your own iCloud; remove it in **Settings → Apple ID → iCloud → Manage Storage**, or reinstall and use *Delete all vault data*.

**Why does iCloud call it SafeHub?**
That was the app's name while it was being built. Its identifiers were left alone deliberately — changing them would derive different keys and lock every existing vault. Same app.

## Reporting a security issue
Write to the address above with enough detail to reproduce it, and please allow a reasonable period for a fix before publishing.

## What to include
The device and iOS version, what you did, what happened and what you expected. **Never include a password, a recovery phrase, a backup code or a seed phrase in an email** — not to us, not to anyone. We will never ask for one.
`;
