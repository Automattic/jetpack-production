# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.0-alpha] - unreleased

This is an alpha version! The changes listed here are not final.

### Added
- Add the embed block to the comment editor, for links from the providers WordPress trusts.

### Changed
- Match core's busy and disabled button states on the submit buttons, and keep theme button styles off the editor toolbar.
- Match the updated WordPress.com sign-in contract, and keep returning commenters signed in for 30 days.
- Replace the identity menu with one link beside the commenter's name: Change for guests and Log out for anyone signed in. The avatar and name link to a site user's profile, or to a guest's subscriptions where the Newsletter is on.

### Fixed
- Accept a website without "https://" in the guest comment form, and wait for the email check before submitting.
- Hide the plain textarea once the editor mounts, even in themes that style it by ID.
- Identity: refuse a sign-in code posted from another site, take log-out by POST only, verify TLS on the exchange, and count email checks across sites.
- Keep the caret where the reader clicked when the comment editor opens.
- Keep the submit button inside the comment box in themes that offset it.

## [0.4.0] - 2026-10-05
### Added
- Add the block editor to the comment form. [#52971]

### Changed
- Show a Log out link to every recognized commenter, and offer subscriptions only with the comment being posted. [#53155]
- Stop calling guest details a profile, and say they are saved in this browser. [#53160]
- Update package dependencies. [#52999]

### Fixed
- Show the submit row at all times, and stop theme button and field styles clashing with the form. [#53044]

## [0.3.0] - 2026-09-29
### Changed
- Redraw the comment form in the theme's own styles, with a dialog asking new readers for their details when they post. [#52912]

### Removed
- Remove Google and Facebook sign-in from the comment form, and the color scheme setting. [#52912]

## [0.2.0] - 2026-09-21
### Added
- Add WordPress.com, Google and Facebook sign-in to the comment form through a popup. [#52166]

### Changed
- Update package dependencies. [#52187]

## [0.1.3] - 2026-09-15
### Changed
- Update dependencies. [#52269]

## [0.1.2] - 2026-09-08
### Changed
- Update package dependencies. [#51701]

## [0.1.1] - 2026-09-01
### Changed
- Update dependencies. [#51622]

## 0.1.0 - 2026-08-25
### Added
- Add an on-site comment form with a textarea, guest name and email fields, and reply threading when the `jetpack_comments_new_hotness` filter returns true. [#51466]
- Initial version. [#51210]

[0.5.0-alpha]: https://github.com/Automattic/jetpack-comments/compare/v0.4.0...v0.5.0-alpha
[0.4.0]: https://github.com/Automattic/jetpack-comments/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/Automattic/jetpack-comments/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/Automattic/jetpack-comments/compare/v0.1.3...v0.2.0
[0.1.3]: https://github.com/Automattic/jetpack-comments/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/Automattic/jetpack-comments/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/Automattic/jetpack-comments/compare/v0.1.0...v0.1.1
