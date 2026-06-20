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
  // Owner input: set the real publication date before release.
  effectiveDate: "[EFFECTIVE DATE]",
  lastUpdated: "[EFFECTIVE DATE]"
} as const;

export const privacyBody = `B-DAY is a **local-first** birthday organizer for iPhone and Apple Watch. Your information is stored **on your device**, and — only if you choose — in **your own private iCloud**. We do not operate any server, we do not use analytics, advertising, or tracking, and we include no third-party SDKs. We never receive your birthdays, contacts, photos, or notes. This Privacy Policy is provided by [DEVELOPER LEGAL NAME].

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
The Apple Watch app shows your upcoming birthdays. Data moves only between your iPhone and your paired Apple Watch using Apple's WatchConnectivity, and a copy is cached on the watch so it can work on its own. Nothing is sent to any server from the watch.

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

export const termsBody = `These Terms of Use apply to the B-DAY app and this website, provided by [DEVELOPER LEGAL NAME]. The app is licensed, not sold, and is also subject to Apple's Standard End User License Agreement (EULA). These Terms supplement, and do not replace, the Apple Standard EULA.

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
The app, its design, and content are owned by [DEVELOPER LEGAL NAME] or its licensors and are protected by applicable laws. Except as permitted by the Apple Standard EULA or applicable law, you may not resell, redistribute, or reverse-engineer the app.

## 12. Disclaimer and limitation of liability
The app is provided "as is" and "as available," without warranties of any kind to the maximum extent permitted by law. To the maximum extent permitted by applicable law, we are not liable for indirect, incidental, or consequential damages. Nothing in these Terms limits liability that cannot be limited by law.

## 13. Changes and termination
We may update these Terms; continued use after an update means you accept the revised Terms. You may stop using the app at any time by deleting it.

## 14. Governing law
These Terms are governed by the laws of [COUNTRY / GOVERNING LAW], without regard to conflict-of-laws rules, and subject to any mandatory consumer protections in your country of residence.

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
