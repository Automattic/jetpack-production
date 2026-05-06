# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 0.1.0-alpha - unreleased

This is an alpha version! The changes listed here are not final.

### Added
- Add an empty wp-build dashboard scaffold and the "Jetpack > Podcast" wp-admin entry, gated behind the `jetpack_podcast_untangle` filter. With the filter off (default), nothing changes; with it on, a placeholder Podcast page renders inside the standard wp-admin chrome.
- Initial scaffolding for the Jetpack Podcast package. Loads on Simple and Atomic only, gated behind the `jetpack_podcast_untangle` filter (default off) so it stays inert while the legacy podcasting code keeps running.
