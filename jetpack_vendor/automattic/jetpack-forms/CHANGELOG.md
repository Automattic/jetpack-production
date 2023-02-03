# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0-alpha] - unreleased

This is an alpha version! The changes listed here are not final.

### Added
- Add "watch" entries for both composer and package .json files. This allows us to run `jetpack watch packages/forms` while working on JS things
- Add tooling for building the Jetpack Forms Dashboard
- Moved contact form PHP files to automattic/jetpack-forms
- Move Forms blocks to Forms package

### Changed
- Reorder export columns in 3 groups: response meta (title, source, date), response field values, response extra (consent, ip address)

## [0.2.0] - 2023-01-26
### Added
- Moved contact form static files into the new forms package [#28417]

## 0.1.0 - 2023-01-23
### Added
- Added a new jetpack/forms package [#28409]
- Added a public load_contact_form method for initializing the contact form module. [#28416]

[0.3.0-alpha]: https://github.com/automattic/jetpack-forms/compare/v0.2.0...v0.3.0-alpha
[0.2.0]: https://github.com/automattic/jetpack-forms/compare/v0.1.0...v0.2.0
