/**
 * Nook legal/support content (English).
 *
 * Written against the shipping code: the extension's manifest permissions, the
 * preview pipeline in `services/previews`, the CloudKit bridge in
 * `Shared/SyncBridge.swift`, and the native snapshot path. Every claim below
 * is one the build can actually keep — nothing here describes a service that
 * does not exist.
 */

export const nookLegalMeta = {
  effectiveDate: "August 8, 2026",
  lastUpdated: "August 8, 2026"
} as const;

export const nookPrivacyBody = `Nook is a **local-first** start page for Safari on Mac and iPhone. Your sites, collections and settings are stored **on your device**, and — only if you turn it on — in **your own private iCloud**. There are **no accounts**, **no analytics**, **no advertising**, **no trackers** and **no third-party SDKs**. We operate **no server of any kind**: there is nowhere for your data to be sent, because there is nothing on the other end. This Privacy Policy is provided by Aleksandr Pavlov (Squirrel Apps), an independent developer.

## 1. What this covers
This policy covers the Nook Safari extension and the Nook apps for macOS and iOS that install it. It covers both platforms; where behaviour differs, that is stated.

## 2. What Nook stores
Nook stores what you put into it: site addresses, titles, the collection and tab group they belong to, your ordering, and your preferences (columns, card size, wallpaper, theme, search engine). It also caches icons and preview images for the sites you have saved, and — on Mac — snapshots of pages it rendered for you.

All of it is held in the extension's own storage on your device, in a private container that other extensions and websites cannot read.

## 3. What Nook never collects
Nook does not read your browsing history. It does not log what you open, when, or how often. It does not read page content, form fields, passwords, cookies or session data. It has no crash reporter, no telemetry, no unique identifier, and no way to recognise you across devices or launches.

## 4. Open tabs (optional, one permission, only when you ask)
Nook can read your open tabs so it can offer to import them onto your start page — the first-run import, "Save tabs as a group", and the import sheet. This uses Safari's optional **tabs** permission, which Nook requests only at the moment you use one of those features, and which you can decline or revoke.

When you use it, Nook reads only the **title and address** of each open tab, in your browser, to build the list you see. That list is written to your own storage when you confirm the import, and to nowhere else. If you never use the feature, the permission is never granted.

## 5. Network connections
Nook makes a network connection in exactly three situations, all of them to the site involved and none of them to us:

- **Icons.** Nook loads a site's own \`/favicon.ico\` or \`/apple-touch-icon.png\` — the same request your browser makes when you visit it. There is no third-party favicon service.
- **Preview images.** If you grant the optional website-access permission, Nook reads the page's own Open Graph tags to find its preview image. The page HTML is parsed on your device and discarded; only the resulting image address is kept.
- **Search.** Typing in the search bar and pressing Return sends your query to the search engine you chose (DuckDuckGo by default; Google, Bing, Brave and Kagi are also options). That request goes straight from your browser to that engine under its own privacy policy — Nook does not proxy, log or see it.

Nook never uploads your list of sites, your settings, or anything else to a server we run, because there is no such server.

## 6. Page snapshots (Mac only)
On Mac, Nook can render a saved site off-screen inside the Nook app to make its card preview. The page is loaded and drawn locally by the system web view; the resulting image stays on your device. This feature does not exist on iPhone, where the system provides no equivalent.

## 7. iCloud sync (optional, off by default)
If you turn on iCloud Sync, your sites, collections, tab groups and settings are stored in **your own private iCloud database** (Apple's CloudKit private database) under your Apple ID, and synced between your Mac and iPhone. This is Apple's infrastructure; we have no access to it and cannot read what is stored there. Sync requires that you are signed in to iCloud, and can be turned off at any time. Turning it off leaves your local data untouched.

## 8. Backups you create
Nook can export your data to a file and import it back. That file is written wherever you choose and is yours to handle. An imported file is validated before being applied — addresses that are not ordinary web links are rejected rather than saved.

## 9. Third parties
The extension contains no third-party SDKs, libraries-as-a-service, or embedded analytics. The only external systems involved are Apple's (CloudKit, if you enable sync; the App Store, for purchases) and the websites you yourself saved.

## 10. Purchases
Nook is a paid app. Purchases are processed by Apple through the App Store; we never receive your payment details. The app stores only a local flag for what is unlocked.

## 11. Children
Nook is not directed at children and collects nothing from anyone, including children.

## 12. Deleting your data
Everything is under your control on the device:

- **Settings → About → Reset Nook** deletes every site, collection and preference on that device.
- **Settings → About → Clear preview cache** deletes cached icons, previews and snapshots.
- Turning off iCloud Sync stops further syncing; to remove what is already there, delete Nook's data from your iCloud account in **Settings → Apple ID → iCloud → Manage Storage**.
- Deleting the app removes its local storage with it.

Because we hold nothing, there is no data-deletion request to send us — but you can always write and ask a question.

## 13. Changes
If this policy changes, the updated version is published on this page with a new "last updated" date.

## 14. Contact
Questions about privacy: **[SUPPORT EMAIL]**.
`;

export const nookTermsBody = `These Terms of Use apply to the Nook apps and extension and to this website, provided by Aleksandr Pavlov (Squirrel Apps), an independent developer. The app is **licensed, not sold**, and is also subject to Apple's **Standard End User License Agreement (EULA)**. These Terms **supplement**, and do not replace, the Apple Standard EULA.

## 1. The licence
You get a personal, non-transferable licence to use Nook on Apple devices you own or control, as permitted by the App Store Terms of Service. You may not resell it, rent it, or redistribute it as your own.

## 2. What Nook is
Nook replaces Safari's new-tab page with a start page of your own sites. It stores your data on your device and, if you choose, in your private iCloud. It is a utility — it does not host content, and it is not a browser.

## 3. Your content
The sites, names and arrangements you put into Nook are yours. We do not receive them and claim no rights over them. You are responsible for what you save and for having the right to access it.

## 4. Websites you open
Opening a site from Nook is the same as typing its address: you are then dealing with that site under its own terms and privacy policy. We do not operate, endorse, or take responsibility for anything you reach through Nook, including search results from the engine you selected.

## 5. Availability and platform limits
Nook works within what Safari and Apple allow. Some features exist on one platform and not the other — page snapshots are a Mac feature, because iOS provides no equivalent capability. Safari does not expose native tab groups to extensions, so Nook's groups are its own. Apple may change these platforms; we will keep Nook working as best we can but cannot guarantee any specific capability indefinitely.

## 6. Backups are your responsibility
Nook stores data locally and, optionally, in your iCloud. It is not a backup service. Use **Settings → Data → Export** to keep your own copy. We cannot recover data for you, because we never have it.

## 7. Purchases and refunds
Purchases are handled by Apple. Refunds are requested from Apple under the App Store Terms of Service; we cannot issue them ourselves.

## 8. No warranty
The app is provided "as is", without warranties of any kind to the extent permitted by law. We do not warrant that it will be uninterrupted or error-free.

## 9. Limitation of liability
To the extent permitted by law, our total liability relating to the app is limited to the amount you paid for it. We are not liable for indirect or consequential loss, including lost data — see section 6.

## 10. Termination
The licence ends if you stop complying with these Terms or delete the app. Sections 8, 9 and 11 survive.

## 11. Governing law
These Terms are governed by the laws applicable at the developer's place of residence, without limiting any mandatory consumer rights you have where you live.

## 12. Apple
Apple is not a party to these Terms and has no obligation to provide support for the app. Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you.

## 13. Contact
**[SUPPORT EMAIL]**
`;

export const nookSupportBody = `Need help? Email **[SUPPORT EMAIL]**. Nook has no accounts and we hold none of your data, so there is nothing to look up on our side — but we are happy to help. When reporting a problem, please include your device, macOS/iOS version, and the version shown in **Settings → About**.

## Nook does not appear as my new tab page
Safari has to be told to allow it.

**On Mac:** Safari → Settings → Extensions → tick **Nook**, then allow it on the sites you want previews for. If Nook is missing from that list, open the Nook app once — the extension is installed by the app.

**On iPhone:** Settings → Apps → Safari → Extensions → **Nook** → turn it on and set access to **Allow**.

## Previews are grey placeholders
A card falls back to a generated cover when the site gives Nook nothing to show. To let Nook read a site's own preview image, grant website access in Safari's extension settings. Nook still works without it — you just get its own generated covers and the site's favicon.

On Mac, **page snapshots** can fill the gap: the Nook app renders the page off-screen and uses that image. This is a Mac-only feature.

## Importing my open tabs
The first time you open Nook it offers to import the tabs you have open and sort them into collections. You can run it again later from the **+** menu → **Import Open Tabs**. Safari asks for permission to read tab titles and addresses; declining it just means importing by hand instead.

## iCloud sync says it is unavailable
Sync uses your own private iCloud database, so it needs three things:

1. The device is **signed in to iCloud** (Settings → Apple ID).
2. **iCloud Drive** is on.
3. On Mac, the **Nook app** has been opened at least once — the extension talks to iCloud through it.

If the status still does not clear, turn the switch off and on in **Settings → Sync**; Nook retries and reports what it finds.

## Moving my sites to a new device
**Settings → Data → Export** writes a file with everything in it. On the new device, **Settings → Data → Import** reads it back. Import merges by default, so you can combine two devices without losing either side.

## Columns and card size
**Settings → Layout** sets the number of columns per device — 1 to 3 on iPhone, 2 to 6 on Mac — and the card size independently. If a narrow window cannot fit the columns you asked for at the current card size, Nook drops to what fits and returns to your choice when there is room.

## Deleting everything
**Settings → About → Reset Nook** clears every site, collection and preference on that device. Data already in your iCloud is not removed by this — turn off iCloud Sync and remove Nook's data in **Settings → Apple ID → iCloud → Manage Storage**.

## Reporting a bug
Email **[SUPPORT EMAIL]** with what you did, what happened, and what you expected. A screenshot of **Settings → About** helps, since it shows the version and whether the app and iCloud are connected.
`;
