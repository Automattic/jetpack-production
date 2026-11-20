# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 0.1.0-alpha - unreleased

This is an alpha version! The changes listed here are not final.

### Added
- Add a per-user preference that turns the teaser off.
- Add the What's new script module, which a host mounts with `mountWhatsNew()`.
- Initial version.
- Serve announcements over REST.
- Show a teaser of the newest announcement, and the announcement in full in a dialog.

### Changed
- Strip styles, classes and ids from the body of an announcement, and keep its URLs to http and https.
