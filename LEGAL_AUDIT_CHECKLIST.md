# Legal pages — pre-publication audit checklist

The `/privacy` and `/terms` pages currently show **honest placeholders only**.
Do **not** write the final Privacy Policy or Terms of Use until the real B-DAY
iOS/watchOS project has been audited against everything below. Nothing on the
site should claim anything that is not confirmed by the actual code.

## Audit the B-DAY iOS project for:

- [ ] Contacts permission (usage + `NSContactsUsageDescription`)
- [ ] Imported contact fields (what is actually copied into the app)
- [ ] Local storage (what is stored on device, and where)
- [ ] SwiftData / Core Data models and persistence
- [ ] iCloud / CloudKit sync (containers, record types, what syncs)
- [ ] Backup and restore behavior
- [ ] Notification content (what data appears in notifications)
- [ ] Widgets (data exposed on the Home Screen / Lock Screen)
- [ ] Apple Watch synchronization
- [ ] StoreKit purchases (products, restore, receipts)
- [ ] Analytics SDKs
- [ ] Crash reporting SDKs
- [ ] Advertising SDKs
- [ ] Tracking (IDFA / ATT)
- [ ] Exported data (share / export features)
- [ ] Uploaded photos
- [ ] Phone numbers
- [ ] Email addresses
- [ ] Social media links
- [ ] Privacy manifests (`PrivacyInfo.xcprivacy`)
- [ ] App Groups (shared containers between app/widget/watch)
- [ ] UserDefaults / AppStorage keys
- [ ] Account or login functionality
- [ ] Developer-operated servers (any backend the developer runs)
- [ ] Support email (confirm the real address)
- [ ] Data deletion behavior (local + iCloud)

## Then, and only then:

1. Write the final Privacy Policy from confirmed facts.
2. Write the final Terms of Use (Apple Standard EULA + app specifics).
3. Replace the placeholder bodies in `app/privacy/page.tsx` and
   `app/terms/page.tsx` (TODO markers are in those files).
4. Set `NEXT_PUBLIC_SUPPORT_EMAIL` and `NEXT_PUBLIC_SITE_URL` for production.
