# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0-alpha] - unreleased

This is an alpha version! The changes listed here are not final.

### Added
- Initial release of the Activity Log package: hosts the in-wp-admin Activity Log UI and its REST endpoints.

### Changed
- Activity Log: opt into `<AdminPage unwrapped>` so DataViews can fill the bounded content slot and scroll its table body internally. Header, date picker, and DataViews toolbar stay pinned on short viewports.

### Fixed
- Activity Log: default the page to the Table layout, load the upsell-callout stylesheet from the main entry, and surface the disabled toolbar + disabled date-range picker on the free tier with upgrade tooltips.

## 0.1.0-alpha - unreleased

Initial release.

[0.2.0-alpha]: https://github.com/Automattic/jetpack-activity-log/compare/v0.1.0-alpha...v0.2.0-alpha
