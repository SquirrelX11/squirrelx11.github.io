/**
 * B-DAY legal/support content (English), wired into the site from the audited
 * drafts in the BirthdayOrganizer repo (website/content/*.en.md).
 *
 * Tokens that depend on owner input remain visible as [BRACKETED] placeholders
 * until provided; resolvable ones are filled from siteConfig. Pages show a
 * clear "draft pending final legal review" banner so nothing reads as final.
 */
import { siteConfig, routes } from "./site";

/** Fill tokens we can resolve; leave true owner-input tokens visible. */
export function fillTokens(md: string): string {
  const email = siteConfig.supportEmail ?? "[SUPPORT EMAIL]";
  return md
    .replaceAll("[SUPPORT EMAIL]", email)
    .replaceAll("[PRIVACY EMAIL]", email)
    .replaceAll("[WEBSITE URL]", siteConfig.siteUrl)
    .replaceAll("[PRIVACY POLICY URL]", routes.privacy)
    .replaceAll("[TERMS URL]", routes.terms);
}

export const legalMeta = {
  // Publication date provided by the owner.
  effectiveDate: "June 22, 2026",
  lastUpdated: "June 22, 2026"
} as const;

export const privacyBody = `B-DAY is a **local-first** birthday organizer for iPhone and Apple Watch. Your information is stored **on your device**, and — only if you choose — in **your own private iCloud**. We do not operate any server, we do not use analytics, advertising, or tracking, and we include no third-party SDKs. We never receive your birthdays, contacts, photos, or notes. This Privacy Policy is provided by Aleksandr Pavlov.

## 1. Who this applies to
This policy covers the B-DAY iPhone app, its widgets, and the Apple Watch app. Information about other people that you add (names, birthdays, etc.) is entered by you; you are responsible for having a reasonable basis to store it.

## 2. Information the app handles
Depending on how you use B-DAY, the app stores: names, birthdays (and whether the year is known), optional photos, phone numbers, email addresses, social handles (Instagram/Telegram/Facebook), relationship type, notes, gift ideas, favorite status, reminder preferences, and app settings. This information is used only to provide the app's features.

## 3. Where your data is stored (local-first)
App data is stored locally on your device using Apple's on-device storage. It is protected by your device passcode and iOS encryption. We do not add separate encryption on top of iOS.

## 4. Contacts import (optional)
If you choose to import from Contacts, the app asks for Contacts permission and lets you select which contacts to import. For the contacts you pick, it copies their name, birthday, phone, email, social handles, and photo thumbnail into the app. The app does not read your contact notes, does not change or delete your contacts, and does not send your contacts to us. You can use the app without granting Contacts access by adding people manually.

## 5. iCloud sync (optional, off by default)
B-DAY includes an optional iCloud Sync that is turned off by default. If you turn it on, your birthday records sync through your own private iCloud account (Apple's CloudKit private database). This data is tied to your Apple ID and handled by Apple's infrastructure; we have no access to your private iCloud data. Sync requires that you are signed in to iCloud. You can turn sync off at any time.

## 6. Notifications (local only)
Reminders are local notifications scheduled on your device. There is no push service and no server involved; we receive nothing. Notification previews can show a person's name, age, and birthday date on your screen, including the Lock Screen. You can hide previews in iOS Settings and disable reminders in the app.

## 7. Widgets
Home Screen and Lock Screen widgets read birthday information (names, dates, a small photo thumbnail, favorite status) from a shared on-device container so they can display upcoming birthdays. Widgets make no network connections.

## 8. Apple Watch
The Apple Watch app and widgets receive only the birthday information needed to display their features — names, dates, a small photo, and reminder summaries. Phone numbers and email addresses are not sent to or stored on the watch. Data moves only between your iPhone and your paired Apple Watch using Apple's WatchConnectivity, and a minimal copy is cached on the watch so it can work on its own. Nothing is sent to any server from the watch.

## 9. Purchases
B-DAY offers a one-time Full Version purchase (not a subscription). Purchases are processed by Apple through the App Store; we do not receive your payment details. The app stores only a local flag indicating whether the Full Version is unlocked. Restoring purchases is handled through Apple.

## 10. Analytics, advertising, tracking
B-DAY contains no analytics, no advertising, and no tracking. There is no IDFA, no ad SDKs, and no third-party analytics. We do not build user profiles and do not sell data.

## 11. Third-party services
The app includes no third-party SDKs. It uses Apple services only: iCloud/CloudKit (if you enable sync), StoreKit (purchases), and Apple Speech (only if you use voice search). When you tap an action like "message" or "open Instagram," iOS opens the relevant app; the phone number or handle is handed to that app by iOS, not to us.

## 12. Voice search (optional)
If you use voice search, the app uses the microphone and Apple's Speech Recognition to turn speech into text. Depending on your device and language, Apple may process the audio to recognize it. The recognized text is used only to fill the search field; it is not stored or sent to us.

## 13. Data sharing
We do not sell or share your personal data. Your data stays on your device and, if you enable sync, in your own iCloud. Apple may process data when you use iCloud, the App Store, or Speech, under Apple's terms.

## 14. Retention and deletion
Your data remains as long as it is on your device or, if sync is enabled, in your iCloud. You can delete a single person, delete all local data, or delete local and iCloud data from within the app. Deleting local data removes only the on-device copy. **Delete local and iCloud data** permanently removes your data from the device and from your private iCloud database — this works whether or not iCloud Sync is turned on, but it requires that you are signed in to iCloud and connected to the internet, and the app confirms completion only after the iCloud deletion succeeds (if it can't reach iCloud, your local data is kept so you can try again). Uninstalling the app removes on-device data but does not delete data stored in your iCloud.

## 15. Export / backup
You can export your data to a JSON file and share it through iOS. Once you share or save it, that file is under your control; manage or delete it like any other file.

## 16. Security
We rely on iOS and iCloud security and your device passcode. No method of storage or transmission is completely secure, so we cannot guarantee absolute security.

## 17. Children
B-DAY is a general-purpose organizer. It can store information you enter about other people, which may include family members. Only add information you have a reasonable basis to store.

## 18. International processing
If you enable iCloud or use Apple services, Apple may process data through its infrastructure in accordance with Apple's terms and privacy practices. Feature availability can vary by region and Apple account.

## 19. Changes
We may update this policy when the app or legal requirements change. The "Last updated" date reflects the latest revision.

## 20. Contact
Questions about privacy: **[SUPPORT EMAIL]**.`;

export const termsBody = `These Terms of Use apply to the B-DAY app and this website, provided by Aleksandr Pavlov. The app is licensed, not sold, and is also subject to Apple's Standard End User License Agreement (EULA). These Terms supplement, and do not replace, the Apple Standard EULA.

## 1. Acceptance
By downloading or using B-DAY, you agree to these Terms and to the Apple Standard EULA. If you do not agree, do not use the app.

## 2. The app and website
B-DAY is a local-first birthday organizer for iPhone and Apple Watch. The website provides information about the app and these legal documents.

## 3. Eligibility
You must be old enough to use the App Store and to enter into these Terms in your jurisdiction.

## 4. Your data and the people you add
You are responsible for the information you enter, including information about other people (names, birthdays, contact details). You confirm you have a reasonable basis to store and manage that information.

## 5. Acceptable use
Use the app only for lawful, personal purposes. Do not misuse it, attempt to break its security, or use it to harm others.

## 6. Free Version
B-DAY is free to use for up to a limited number of people (currently 5).

## 7. Full Version (one-time purchase)
The Full Version is a one-time, non-consumable in-app purchase that unlocks additional capacity and features. It is not a subscription and does not auto-renew.

## 8. Payments, restore and refunds (Apple)
In-app purchases are processed by Apple through the App Store; we do not receive your payment card details. You can restore a previous Full Version purchase using the same Apple ID. Refunds are handled by Apple under Apple's policies.

## 9. Platform availability
Optional features rely on Apple services (iCloud/CloudKit, notifications, widgets, Apple Watch). Their availability depends on your device, settings, and Apple's services, which we do not control. Notifications are local reminders; we do not guarantee delivery timing.

## 10. Backups and your responsibility
You are responsible for your own backups and exported files. We are not responsible for data loss; keeping iCloud and/or device backups is recommended.

## 11. Intellectual property
The app, its design, and content are owned by Aleksandr Pavlov or its licensors and are protected by applicable laws. Except as permitted by the Apple Standard EULA or applicable law, you may not resell, redistribute, or reverse-engineer the app.

## 12. Disclaimer and limitation of liability
The app is provided "as is" and "as available," without warranties of any kind to the maximum extent permitted by law. To the maximum extent permitted by applicable law, we are not liable for indirect, incidental, or consequential damages. Nothing in these Terms limits liability that cannot be limited by law.

## 13. Changes and termination
We may update these Terms; continued use after an update means you accept the revised Terms. You may stop using the app at any time by deleting it.

## 14. Governing law
These Terms are governed by the laws of Georgia, without regard to conflict-of-laws rules, and subject to any mandatory consumer protections in your country of residence.

## 15. Apple Standard EULA
B-DAY is also covered by Apple's Licensed Application End User License Agreement: [Apple Standard EULA](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/).

## 16. Contact
Questions about these Terms: **[SUPPORT EMAIL]**.`;

export const supportBody = `Need help? Email us at **[SUPPORT EMAIL]**. When reporting a problem, please include your device model, iOS/watchOS version, and app version.

**Platforms:** iPhone (iOS 17+), Apple Watch (watchOS 10+). B-DAY has no accounts and no developer server, so there is no server-side account recovery — your data lives on your device and in your own iCloud.

## Notifications
Reminders are local. If they don't appear: in iOS Settings → Notifications → B-DAY, allow notifications; check Focus modes; and confirm reminders are enabled in the app. Previews may show a name, age, and birthday date — to hide details, use iOS Settings → Notifications → Show Previews.

## Contacts permission
Import is optional. Enable Contacts access in iOS Settings → B-DAY → Contacts if you want to import. You can always add people manually without it. The app never changes your contacts.

## iCloud sync
iCloud Sync is optional and off by default. Turn it on in Settings → Backup/iCloud (you must be signed in to iCloud). Use "Sync now" to force a sync.

## Backup & restore
Export your data to a JSON file via Settings → Backup → Export, and share/save it through iOS. With iCloud Sync on, your data restores automatically on a new device after you enable sync.

## Restore a purchase
Tap "Restore Purchases" on the paywall or in Settings, using the Apple ID that made the original Full Version purchase. The Full Version is a one-time purchase, not a subscription.

## Widgets & Apple Watch
Add B-DAY widgets from the Home Screen widget gallery. Install B-DAY on your Apple Watch from the Watch app; reminders and settings are managed on iPhone.

## Deleting your data
Settings → Backup → "Delete local data" removes the on-device copy only. "Delete local and iCloud data" permanently removes your data from this device and your private iCloud database — it works whether or not iCloud Sync is on, but you must be signed in to iCloud and online, and the app confirms completion only after the iCloud deletion succeeds (if it can't reach iCloud, your local data is not removed so you can try again). Uninstalling removes on-device data but not iCloud data.

## Privacy
See our [Privacy Policy]([PRIVACY POLICY URL]). For privacy questions, email **[SUPPORT EMAIL]**.`;

export const privacyChoicesBody = `You control your data in B-DAY. Here is exactly how.

## Contacts
Contacts import is optional and read-only. To disable it: iOS Settings → B-DAY → Contacts → off. You can still add people manually.

## Notifications
In the app: Settings → Reminders → turn off Birthday reminders (and Daily summary). System-wide: iOS Settings → Notifications → B-DAY.

## iCloud Sync
iCloud Sync is off by default. Turn it on or off in Settings → Backup/iCloud → iCloud Sync. With sync off, your data stays only on your device.

## Delete your data
Delete a single person from their detail screen, or use Settings → Backup → "Delete local data" (this device only) or "Delete local and iCloud data" (also removes it from your private iCloud, when signed in to iCloud and online). Uninstalling removes on-device data but not iCloud data.

## Exported backups
If you exported a JSON backup, that file is wherever you saved it. Delete it like any other file to remove that copy.

## Contact
Privacy questions or requests: **[SUPPORT EMAIL]**.`;

/* ============================================================================
 * Renewise — legal/support content (English), based on a technical audit of the
 * Renewise Xcode project (see SOON_LEGAL_FACTS.md). Only audited behaviour is
 * described. Nothing about B-DAY applies here.
 * ==========================================================================*/

export const soonLegalMeta = {
  effectiveDate: "June 26, 2026",
  lastUpdated: "July 3, 2026"
} as const;

export const soonPrivacyBody = `Renewise is a **local-first** subscription organizer for iPhone and Apple Watch. What you enter is stored **on your device**, and — only if you choose — in **your own private iCloud**. We run **no user database and no accounts**, use **no analytics, advertising, or tracking**, and include **no third-party SDKs**. We never receive your subscriptions, prices, notes, photos, or screenshots. The only service we operate is a **logo cache** that returns public brand logos — it receives a service's public domain and nothing about you (see §12). This Privacy Policy is provided by Aleksandr Pavlov (Squirrel Apps), an independent developer.

## 1. Who this applies to
This policy covers the Renewise iPhone app, its widgets, and the Apple Watch app. The information you add (service names, prices, dates, notes) is entered by you, for your own use.

## 2. About Renewise
Renewise helps you keep track of the subscriptions and trials you already pay for: their prices, renewal dates, and reminders. Renewise is **not** a bank, an accounting tool, or a financial-advice service, and it does **not** connect to any bank account or payment provider.

## 3. Information the app handles
Depending on how you use Renewise, it stores: subscription names, plans, prices, currencies, billing periods, renewal and trial dates, categories, notes, custom reminders, renewal/price history, Renewal Check decisions, cancellation status (inside the app), and app settings. This is used only to provide the app's features.

## 4. Where your data is stored (local-first)
Your data is stored **locally on your device** in the app's own files, protected by your device passcode and iOS encryption. There is no developer database and no account or sign-up.

## 5. iCloud sync (optional, off by default)
Renewise includes an optional iCloud Sync that is **off by default** and part of the Full (Pro) version. If you turn it on, your subscription list syncs through **your own private iCloud** (Apple's key-value store) so it stays consistent across your devices. This data is tied to your Apple ID and handled by Apple; **we have no access to it**. You can turn sync off at any time — your local data stays.

## 6. Notifications (local only)
Reminders are **local notifications** scheduled on your device from your own data. There is **no push service, no notification server, and no APNs token** — we receive nothing. A reminder can show a service name, amount, and renewal timing on your screen, including the Lock Screen. You can change or disable reminders in the app and hide previews in iOS Settings.

## 7. Widgets and App Groups
Home Screen and Lock Screen widgets read subscription information from a shared on-device container (an App Group) so they can display upcoming renewals and totals. Widgets make **no network connections**.

## 8. Apple Watch and WatchConnectivity
The Apple Watch app shows a cached snapshot of your subscriptions — names, amounts, dates, categories, a small icon, and renewal summaries — and can queue small actions (Keep / Remind) and Quick Add drafts. Data moves only between **your** iPhone and **your** paired Apple Watch using Apple's WatchConnectivity; **nothing is sent to any server from the watch**. Amounts are hidden on the watch when you turn on "Show Amounts" off.

## 9. Quick Add and voice input
On Apple Watch you can add a subscription by dictating it. Renewise uses the **system dictation** provided by watchOS through a normal text field — it does **not** use the microphone directly or Apple's Speech framework, and asks for no microphone permission. Because dictation is a system feature, **Apple may process it** depending on your device, language, and settings. The recognized **text** is parsed on-device into a draft, sent to your iPhone, and becomes a subscription only when you confirm it. Drafts can be removed.

## 10. Screenshot import and OCR
The optional screenshot import (Full version) lets you pick **one** image with the system photo picker — Renewise receives only that image and does **not** get access to your whole photo library. The text is read **on-device with Apple's Vision framework**; **nothing is uploaded**. The screenshot itself is **not stored**, and only the entries you confirm are added.

## 11. Custom icons and photos
If you choose a custom icon for a subscription, it is stored on your device (and mirrored to the widget/watch as a small image if applicable). No photo-library permission is required.

## 12. Service logos
To show recognizable service logos, Renewise asks **our own logo cache** — a Cloudflare Worker we operate — for a logo by domain. That proxy fetches the logo from **Brandfetch** once and caches it on the edge for everyone, so Brandfetch is not contacted per user. If a logo isn't available there, the app falls back to **Simple Icons** or a site's favicon via **DuckDuckGo**.

To fetch a logo, **only the service's public domain** (for example, "netflix.com") is sent — **no personal data, no account information, no prices, and nothing you typed**. As with any request to any website, our proxy and those fallback providers necessarily see the **IP address** the request comes from; we do not use it to build a profile and we do not link it to any identity — we have no account system to link it to.

Logos are cached on your device, so a given service is normally requested once. If nothing can be fetched, a generated icon is shown instead and no further requests are made.

## 13. Purchases
Renewise offers a **one-time Full (Pro) purchase — not a subscription** — that unlocks extra features. Purchases are processed by **Apple** through the App Store; **we never receive your payment details**. The app stores only a local flag indicating whether Pro is unlocked. Restoring purchases is handled by Apple.

## 14. Renewal Check and savings
Renewal Check helps you decide before a charge (Keep, Remind, or Review). **Mark as Cancelled changes only the status inside Renewise** — it does **not** cancel anything with the third-party provider. **Manage Subscription** opens an external page (the service's site or Apple's system Subscriptions page), which the provider controls. **Confirmed savings** come from renewals you marked as cancelled; **projected savings are an estimate** based on the data you entered — **not a guarantee**.

## 15. Analytics, advertising, and tracking
Renewise contains **no analytics, no advertising, and no tracking**. There is no IDFA, no ad SDK, and no third-party analytics or crash-reporting SDK. We build no profiles and sell no data. No App Tracking Transparency prompt is shown because nothing is tracked.

## 16. Third-party services
The parties involved are:

- **Apple** — App Store purchases and, if you enable it, iCloud sync.
- **Cloudflare** — hosts the logo cache we operate (§12).
- **Brandfetch** — the logo source behind that cache.
- **Simple Icons**, **DuckDuckGo** — fallback logo sources, used only when the cache has no logo.
- **open.er-api.com** — a public exchange-rate table, downloaded once a day only if you track more than one currency. It receives no data about you.

The logo services receive only a service **domain** to return a picture — never personal data. There are no analytics, advertising, tracking, or crash-reporting services, and no user database.

## 17. Data sharing
We do **not** share your data with anyone. Your content stays on your device and, if you enable sync, in your private iCloud that only you can access.

## 18. Retention
Your data stays until you delete it. We hold no copy of it, so there is nothing on our side to expire. If iCloud Sync is on, the synced copy stays in your private iCloud until you delete it. Our logo cache stores brand logos only — never anything of yours.

## 19. Deletion
You can delete a single subscription in the list, or delete everything in **Settings → Security & Privacy → Delete Subscription Data**. When iCloud is reachable, this also removes the synced iCloud copy. **Uninstalling the app does not automatically erase a copy already in your iCloud** — delete synced data in the app (or from iCloud) first if you want it gone.

## 20. Export and backup
The Full version can **export** a backup file (and **import** one back to restore). An exported file is saved or shared by you and lives wherever you put it; delete it like any other file to remove that copy.

## 21. Security
Your data is protected by iOS device encryption and your passcode. You can add an optional Face ID lock in the app. We do not add separate encryption on top of iOS.

## 22. Children
Renewise is a general-audience utility and is not directed to children. It collects no personal information for us and requires no account.

## 23. International processing
Because data stays on your device and in your private iCloud, there is no transfer of your content to us or across our servers (we have none). Apple processes iCloud and dictation under its own terms.

## 24. Changes
If this policy changes materially, we will update this page and the "last updated" date.

## 25. Contact
Privacy questions: **[SUPPORT EMAIL]**.`;

export const soonTermsBody = `These Terms of Use apply to the Renewise app and this website, provided by Aleksandr Pavlov (Squirrel Apps), an independent developer. The app is **licensed, not sold**, and is also subject to Apple's **Standard End User License Agreement (EULA)**. These Terms **supplement**, and do not replace, the Apple Standard EULA.

## 1. Acceptance
By using Renewise, you agree to these Terms. If you do not agree, please do not use the app.

## 2. The app and website
Renewise is a subscription organizer for iPhone and Apple Watch. This website provides information and legal documents about it.

## 3. Eligibility
You must be able to form a binding agreement in your country to use the app.

## 4. License
Subject to these Terms and Apple's Standard EULA, you receive a personal, non-transferable license to use Renewise on Apple devices you own or control.

## 5. Your subscription data
You enter your own subscription information. You are responsible for its accuracy and for having a reasonable basis to store it.

## 6. Accuracy of prices and dates
Renewise displays what you enter and reminders you set. It does **not** verify prices or dates with any provider and does **not** guarantee that a future charge will match what you entered.

## 7. Renewal reminders
Reminders are local notifications and depend on iOS. System settings, Focus modes, low-power conditions, or disabling notifications may delay or prevent a reminder. Do not rely on Renewise as your only safeguard against a charge.

## 8. Renewal Check
Renewal Check helps you decide before a renewal. It is an aid, not financial advice.

## 9. Cancellation limitations
Renewise does **not** cancel any third-party subscription for you. **Mark as Cancelled** changes only the status inside Renewise. **Manage Subscription** may open an external page operated by the service or by Apple; what happens there is controlled by that provider.

## 10. Savings and forecasts
Confirmed and projected savings are estimates based on the data you enter. **Projected savings are not a guarantee.** Renewise is not a bank, accounting, or financial-advice service and does not connect to any bank account.

## 11. Free version
Core tracking and reminders are available for free.

## 12. Full (Pro) version
Some features (such as iCloud Sync, export/import, the review queue, screenshot import, custom categories, and per-item reminders) require a one-time Full (Pro) purchase. This is a **non-consumable purchase, not an auto-renewing subscription**, and it supports **Family Sharing**.

## 13. Payments, restore, and refunds
Purchases and restores are handled by **Apple** through the App Store. We do not receive your payment card details. **Refunds are handled by Apple** under its policies.

## 14. Apple Watch and widgets
The watch app and widgets display a subset of your data and may work from a cached copy. Availability depends on your devices and iOS/watchOS.

## 15. External services and links
Links to service websites or Apple's Subscriptions page open pages operated by others. We are not responsible for third-party content or actions.

## 16. Backups
Exported backup files are under your control. Keep them safe; we cannot recover them.

## 17. Acceptable use
Use Renewise lawfully and do not attempt to disrupt or misuse it.

## 18. Intellectual property
Renewise, its design, and its content are owned by the provider or its licensors. Third-party names and logos, where shown, belong to their owners and are used only to help you identify your own subscriptions.

## 19. Availability
The app and website are provided on an "as available" basis and may change or be discontinued.

## 20. Disclaimers
To the extent permitted by law, Renewise is provided "as is" without warranties of any kind. We do not warrant that reminders will always be delivered or that entered figures are accurate.

## 21. Limitation of liability
To the extent permitted by law, the provider is not liable for indirect or consequential losses, or for missed charges, renewals, or cancellations. Nothing limits liability that cannot be limited by law.

## 22. Changes and termination
We may update these Terms; material changes will be reflected here with a new date. Your license ends if you stop using or delete the app.

## 23. Governing law
These Terms are governed by the laws applicable at the provider's place of residence, without regard to conflict-of-laws rules. This does not remove mandatory consumer-protection rights you have in your country.

## 24. Apple Standard EULA
Unless a custom EULA is presented in the App Store, your use is also governed by Apple's Standard EULA: [apple.com/legal/internet-services/itunes/dev/stdeula](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/). These Terms supplement it.

## 25. Contact
Questions about these Terms: **[SUPPORT EMAIL]**.`;

export const soonSupportBody = `Need help? Email **[SUPPORT EMAIL]**. Renewise has no accounts and holds none of your data, so there is nothing to recover on our side — but we're happy to help.

When reporting a problem, please include your iPhone model, Apple Watch model (if relevant), iOS and watchOS versions, the app version, what you did, and a screenshot **without sensitive details**. Never send passwords, payment card details, or Apple ID credentials.

## Notifications
If reminders don't appear, make sure notifications are allowed for Renewise in iOS Settings, that Focus/Do Not Disturb isn't hiding them, and that reminders are enabled in the app.

## Upcoming renewals
The dashboard shows renewals from the dates you entered. If something looks off, open the subscription and check its renewal date.

## Incorrect renewal date
Open the subscription and edit the date. Renewise never changes dates on its own.

## Trial reminders
Set a trial end date on the subscription to get a reminder before it converts.

## Renewal Check
Renewal Check lists items to decide on before they renew (Keep, Remind, Review). It never cancels anything with a provider.

## Mark as Cancelled
This changes the status **inside Renewise only**. To actually cancel, use **Manage Subscription** to open the service's page or Apple's Subscriptions settings.

## Savings calculation
Confirmed savings come from renewals you marked cancelled; projected savings are an estimate from your data. They are not guarantees.

## iCloud Sync
iCloud Sync (Full version) is off by default. Turn it on in **Settings → iCloud Sync** while signed in to iCloud. It uses your private iCloud; we can't see your data.

## Sync Now
Use **Sync Now** on the iCloud Sync screen to push and pull immediately. Both devices must be signed in to the same iCloud account with sync on.

## Apple Watch
Open the Renewise iPhone app once near your watch so it can send the latest snapshot. The watch shows a cached copy and works offline.

## Watch pending sync
If the watch shows "waiting" or a pending action, open the iPhone app nearby; queued actions sync when the devices are reachable.

## Widgets & complications
Add Renewise widgets from the Home Screen, and complications from your watch face. They read on-device data and update periodically.

## Quick Add / voice
On the watch, dictate a subscription; Renewise parses the text into a draft. Finish or confirm it on the iPhone if needed.

## Screenshot import
In the Full version, pick a screenshot of your subscriptions; Renewise reads it on-device with Vision and shows entries to review. Nothing is uploaded.

## Custom icons
Choose a custom icon for a subscription from its detail screen.

## Restore Purchases / Pro not unlocking
Use **Restore Purchases** while signed in to the Apple ID that made the purchase. If Pro still doesn't unlock, check your internet connection and try again, then contact us.

## Export and restore
The Full version can export a backup file you save yourself, and import it back.

## Delete local data
Use **Settings → Security & Privacy → Delete Subscription Data** to remove everything on the device.

## Delete local and iCloud data
The same action also clears the synced iCloud copy when iCloud is reachable. Uninstalling the app alone does not erase a copy already in iCloud — delete synced data in the app first.

## Privacy
See the [Privacy Policy](/apps/renewise/privacy/) and [Privacy Choices](/apps/renewise/privacy-choices/).`;

export const soonPrivacyChoicesBody = `You control your data in Renewise. Here is exactly how, with the in-app paths.

## Notifications
Turn reminders on or off in the app's Notifications settings, and control system delivery in iOS Settings → Notifications → Renewise.

## iCloud Sync
Turn syncing on or off in **Settings → iCloud Sync** (Full version). It is off by default and uses your private iCloud.

## Apple Watch sync
The watch mirrors your iPhone automatically over WatchConnectivity. Open the iPhone app nearby to send the latest snapshot.

## Show Amounts
Hide all amounts on the watch (and widgets) with the **Show Amounts** toggle in the watch settings.

## Photos access
Renewise uses the system photo picker for screenshot import, so it sees only the image you pick — there is no full photo-library permission to manage.

## Voice and Speech
Quick Add uses watchOS system dictation; Renewise uses no microphone permission. Manage dictation in iOS/watchOS settings.

## Screenshot import
Optional and Full-version only. The image is read on-device and not stored.

## Face ID lock
Turn the optional app lock on or off in **Settings → Security & Privacy**.

## Exported files
If you exported a backup, that file is wherever you saved it. Delete it like any other file.

## Delete one subscription
Swipe or delete a subscription in the list to remove it and its reminders.

## Delete local data
**Settings → Security & Privacy → Delete Subscription Data** removes everything on the device.

## Delete local and iCloud data
The same action clears the iCloud copy when iCloud is reachable. Delete synced data before uninstalling if you want the iCloud copy gone.

## Contact
Privacy questions: **[SUPPORT EMAIL]**.`;

export type FaqItem = { q: string; a: string };

export const soonFaq: FaqItem[] = [
  { q: "What is Renewise?", a: "A private, local-first organizer for the subscriptions and trials you already pay for — with renewal reminders, a review-before-you-pay flow, widgets, and Apple Watch." },
  { q: "Is Renewise itself a subscription?", a: "No. Renewise's Full (Pro) version is a one-time purchase, not an auto-renewing subscription." },
  { q: "Is Pro a one-time purchase?", a: "Yes — a single non-consumable purchase handled by Apple." },
  { q: "Does Renewise connect to my bank?", a: "No. Renewise never connects to a bank or payment account. You enter your subscriptions yourself." },
  { q: "Can Renewise automatically find every subscription?", a: "No. You add subscriptions manually, or import them from a screenshot (Full version) that is read on-device — you confirm what's added." },
  { q: "Can Renewise cancel a subscription for me?", a: "No. Renewise can open the service's page or Apple's Subscriptions settings, but it never cancels on your behalf." },
  { q: "What does “Mark as Cancelled” do?", a: "It changes the status inside Renewise only. It does not cancel anything with the provider." },
  { q: "What is Renewal Check?", a: "A gentle review of upcoming renewals so you can decide — Keep, Remind, or Review — before a charge." },
  { q: "How are projected savings calculated?", a: "As an estimate based on the subscriptions and prices you entered. They are not a guarantee." },
  { q: "What is confirmed savings?", a: "Savings from renewals you actually marked as cancelled in Renewise." },
  { q: "Are savings guaranteed?", a: "No. All savings figures are estimates based on your own data." },
  { q: "Where is my data stored?", a: "On your device, and — only if you turn it on — in your own private iCloud." },
  { q: "Can the developer see my subscriptions?", a: "No. There is no user database and no developer access — your data stays on your device and in your private iCloud. The one service we run is a logo cache, and it only ever receives a service's public domain (like \"netflix.com\") so it can hand back that brand's logo. It never sees your list, your prices, or your notes." },
  { q: "Is iCloud Sync optional?", a: "Yes. It is off by default and part of the Full version." },
  { q: "What happens if I turn off iCloud Sync?", a: "Your local data stays on the device. Nothing is deleted." },
  { q: "What happens if I delete the app?", a: "Local data is removed. A copy already in your iCloud is not automatically erased — delete synced data in the app first if you want it gone." },
  { q: "How do I delete iCloud data?", a: "Use Settings → Security & Privacy → Delete Subscription Data while iCloud is reachable; it clears the synced copy too." },
  { q: "Does Renewise use analytics?", a: "No analytics, and no third-party SDKs at all." },
  { q: "Does Renewise show ads?", a: "No advertising." },
  { q: "Does Renewise track me?", a: "No tracking, no IDFA, and no App Tracking Transparency prompt." },
  { q: "How do reminders work?", a: "They are local notifications scheduled on your device from your data. There is no push server." },
  { q: "Why did a notification not appear?", a: "iOS may delay or hide notifications due to settings, Focus modes, or low power. Check that notifications are allowed for Renewise." },
  { q: "How does Apple Watch sync work?", a: "Your iPhone sends a snapshot to your paired watch over WatchConnectivity; the watch caches it and works offline. No server is involved." },
  { q: "Can I add a subscription from Apple Watch?", a: "Yes — dictate or type it as a Quick Add draft, which syncs to your iPhone." },
  { q: "Does voice Quick Add send audio to the developer?", a: "No. It uses watchOS system dictation; Renewise receives text, not audio, and sends nothing to us. Apple may process dictation as a system feature." },
  { q: "How do widgets work?", a: "They read your on-device data from a shared container to show upcoming renewals and totals. They make no network calls." },
  { q: "How do I hide amounts on Apple Watch?", a: "Turn off Show Amounts in the watch settings to mask amounts on the watch and its widgets." },
  { q: "How do I restore Pro?", a: "Use Restore Purchases while signed in to the Apple ID that bought it." },
  { q: "Can I share Pro with my family?", a: "Yes — the Full (Pro) purchase supports Family Sharing, so your Family Sharing group can use it." },
  { q: "Where do the service logos come from?", a: "Renewise fetches recognizable logos from Brandfetch's logo CDN using only the service's public domain (e.g. netflix.com). No personal data is sent, and logos are cached on your device." },
  { q: "Can I use multiple currencies?", a: "Yes. Each subscription keeps its own currency." },
  { q: "How are annual and monthly equivalents calculated?", a: "Renewise normalizes each subscription's price to monthly and yearly figures based on its billing period." },
  { q: "How do I contact support?", a: "Email [SUPPORT EMAIL]." }
];
