# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 0.1.0-alpha - unreleased

This is an alpha version! The changes listed here are not final.

### Added
- Add an empty wp-build dashboard scaffold and the "Jetpack > Podcast" wp-admin entry, gated behind the `jetpack_podcast_untangle` filter. With the filter off (default), nothing changes; with it on, a placeholder Podcast page renders inside the standard wp-admin chrome.
- Dashboard: fill in the four tab panels (Welcome onboarding, Settings form, Episodes list, Distribution submission flow) behind the `jetpack_podcast_untangle` filter.
- Default the untangle gate to enabled for A8C-proxied requests so Automatticians dogfood the new package on Simple and Atomic.
- Feed: register `<itunes:*>` / `<googleplay:*>` channel + item tags, podcatcher detection, and stats-tracked enclosure URLs for the configured podcast category.
- Initial scaffolding for the Jetpack Podcast package. Loads on Simple and Atomic only, gated behind the `jetpack_podcast_untangle` filter (default off) so it stays inert while the legacy podcasting code keeps running.
- Settings: register the `podcasting_*` option schema with REST exposure and Jetpack Sync opt-in, gated behind the `jetpack_podcast_untangle` filter.
- Stats tab: render show- and episode-level podcast download stats.
- Tracks: record podcast publishing, media uploads, status changes, podcatcher show-URL submissions, and settings saves.

### Changed
- Replace the wp-build placeholder with page chrome (title, tagline) plus tab navigation (Welcome, Settings, Episodes, Distribution). Each tab panel is still empty — PR 4 in the untangle train fills them in.
- Slim down wp-build wiring to the Backup pattern: drop bridge_wp_build_enqueue and fix_boot_import_map_ordering, alias $screen->id via current_screen instead.
