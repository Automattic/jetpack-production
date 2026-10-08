# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0-alpha] - unreleased

This is an alpha version! The changes listed here are not final.

### Added
- Add a proxy route for the WooCommerce analytics reports of WordPress.com.
- Add the breakdown widgets: new vs returning customer, payment status, orders fulfillment, coupon usage over time and bookings by status, all placed on the WooCommerce tab by default.
- Add the client that reads the WooCommerce analytics reports, for the widgets of the package.
- Add the Net sales over time widget, the first one the package builds and registers.
- Add the time series widgets: total and gross sales, orders, average order value, average items per order, bookings and visitors over time, all placed on the WooCommerce tab by default.
- Place Net sales over time on the WooCommerce tab by default.
- Register the WooCommerce section on the Premium Analytics dashboard.

### Changed
- Rename the Visitors over time widget to Store visitors over time, so it isn't confused with Jetpack Stats visitors.

### Fixed
- Use sentence case in the Store visitors chart tooltip, like the other count labels.

## 0.1.0-alpha - unreleased

- Initial version.

[0.2.0-alpha]: https://github.com/Automattic/jetpack-woocommerce-stats/compare/v0.1.0-alpha...v0.2.0-alpha
