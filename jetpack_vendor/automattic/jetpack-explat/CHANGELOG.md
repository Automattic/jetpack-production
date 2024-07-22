# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 0.1.0-alpha - unreleased

This is an alpha version! The changes listed here are not final.

### Added
- Adds a new component to fetch experiments specifically for authenticated users
- Initial version.
- Introduce the both the backend layer and frontend components for the ExPlat package.

### Changed
- ExPlat: add condition to prevent fetching the experiment assignment if there's not anon id (meaning that Tracks is likely disabled)
- Updated package dependencies.
