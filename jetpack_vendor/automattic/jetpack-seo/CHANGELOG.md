# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0-alpha] - unreleased

This is an alpha version! The changes listed here are not final.

### Added
- Add a Canonical URLs toggle to the Settings tab (ports the legacy Traffic-page feature), controlling the canonical-urls module that adds rel="canonical" tags to archive pages.
- Add an AI tab to the SEO dashboard and move the AI SEO Enhancer toggle (auto-generate SEO title, description, and image alt text for new posts) onto it.
- Add Google site auto-verification to the Settings tab: connected sites can verify with Google through a WordPress.com keyring popup (with manual meta-tag entry as a fallback), replacing the legacy Traffic-page UI.

### Changed
- Split the SEO dashboard into per-route wp-build stages (Overview, Settings, AI) with route-based navigation, replacing the single-route tab app. No user-facing change.

## [0.1.1] - 2026-06-15
### Changed
- Update package dependencies. [#49273]

### Fixed
- Remove the package's duplicate snackbar list. [#49470]

## 0.1.0 - 2026-06-08
### Added
- Create an Overview screen with a Site visibility card. [#49203]
- Create a Settings screen with site visibility, post title structure, front-page description, and site verification. [#49256]
- Scaffold the new `jetpack-seo` package and mount its admin page. [#49203]

[0.2.0-alpha]: https://github.com/Automattic/jetpack-seo/compare/0.1.1...0.2.0-alpha
[0.1.1]: https://github.com/Automattic/jetpack-seo/compare/0.1.0...0.1.1
