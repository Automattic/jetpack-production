# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0-alpha] - unreleased

This is an alpha version! The changes listed here are not final.

### Security
- Podcast: escape title overrides, descriptions, and iTunes category attribute values for the RSS feed to prevent malformed XML.

### Added
- Add the Podcast Episode block. Embeds a single podcast episode from an audio or video file with Podcasting 2.0 metadata. Registration is gated behind the `jetpack_podcast_untangle` filter (default off).
- Default the untangle gate to enabled for A8C-proxied requests so Automatticians dogfood the new package on Simple and Atomic.
- Pocket Casts: replace the 3-step submit modal with a one-click Relay API flow that reflects pending/submitted state on the button and surfaces rejection reasons inline.
- Podcast: add product-access gate (Podcast_Gate::has_product_access) and grandfather sticker constant.
- Podcast Welcome: require a category when enabling podcasting.
- Posts to Podcast: new Media > Create AI Podcast wp-admin page for generating podcast episode drafts from posts via the wpcom-side pipeline. Pick posts to include or use a recent-posts window, steer the output with a free-form prompt, watch a remaining-credits indicator backed by the quota-snapshot endpoint, and resume polling across page reloads. The page is plain PHP plus a vanilla-JS island — no React or wp-build chassis for this surface. Feature is wpcom-only; self-hosted Jetpack sites don't see the menu.
- Stats tab: render show- and episode-level podcast download stats.

### Changed
- Build: Run webpack and wp-build scripts concurrently.
- Episodes stats: detect 402 responses from the episode stats endpoint as a Premium-required state.
- Podcast: visual polish on the Stats tab — keep horizontal padding at narrow widths, lighter card headers, and integer-only axis ticks on the Downloads chart.
- Podcast dashboard: reorder tabs so Stats appears first, followed by Episodes, Distribution, and Settings.
- Podcast Episode: enrich front-end schema.org markup and make chapter / soundbite list items click-to-seek in the audio player.
- Podcast Episodes: fall back to the show cover image when an episode has no featured image.
- Podcast Episodes: open the episode stats drilldown from a play-count click in the Episodes tab.
- Podcast Settings: create new categories inline without leaving the podcast dashboard.
- Podcast stats: rebuild summary tiles and bar list rows on @wordpress/components primitives.
- Podcast stats dashboard: replace period dropdown with Calypso Stats date range picker (presets, calendar, custom from/to).
- Settings: Add a "Cover image" subheading above the cover image control and rename the "Podcast category" section to "Post category".
- Stats tab: Align Top episodes, By app, and Locations cards with the WordPress.com Stats card module look (real border, larger header, and 24px padding).
- Update welcome screen copy to lead with the blog and newsletter story, and refresh the feature boxes and how-it-works steps.

### Fixed
- Always show the Disable podcasting card on the settings tab, and return the user to the welcome screen after disabling, so the back-out flow works before a category has been chosen.
- Podcast: enqueue WP media library so the cover image selector loads.
- Podcast: skip rewriting the RSS enclosure URL through the stats endpoint when the URL does not resolve to a local attachment, so externally hosted enclosures stay playable.

## 0.1.0 - 2026-05-11
### Added
- Add initial package gated behind the `jetpack_podcast_untangle` filter. [#48556]
- Dashboard: Add an empty wp-build dashboard scaffold and the "Jetpack > Podcast" wp-admin entry. [#48557]
- Dashboard: Fill in the four tab panels: Welcome onboarding, Settings form, Episodes list, and Distribution submission flow. [#48667]
- Feed: Register `<itunes:*>` / `<googleplay:*>` channel and item tags, podcatcher detection, and stats-tracked enclosure URLs for the configured podcast category. [#48658]
- Settings: Register the `podcasting_*` option schema with REST exposure and Jetpack Sync opt-in. [#48597]
- Tracks: Record podcast publishing, media uploads, status changes, podcatcher show-URL submissions, and settings saves. [#48665]

### Changed
- Dashboard: Replace the wp-build placeholder with page chrome and tab navigation. [#48559]
- Dashboard: Slim down wp-build wiring to the Backup pattern. [#48600]

[0.2.0-alpha]: https://github.com/Automattic/jetpack-podcast/compare/v0.1.0...v0.2.0-alpha
