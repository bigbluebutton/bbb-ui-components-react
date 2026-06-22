## [2.1.0](https://github.com/bigbluebutton/bbb-ui-components-react/compare/v2.0.2...v2.1.0) (2026-05-12)


### Features

* expose underlying element props for BBBModal and BBBToggle ([9f67041](https://github.com/bigbluebutton/bbb-ui-components-react/commit/9f67041fe02339ee1bf5aa544f9ccd50bdc8583e))


### Bug Fixes

* **BBBAccordion:** set tooltipLabel default to undefined ([6aa276f](https://github.com/bigbluebutton/bbb-ui-components-react/commit/6aa276ff7926b46a7964276e0edbd251b18ce85f))
* **BBButton:** prevent size change on hover for tertiary variant when focused ([62b3f8c](https://github.com/bigbluebutton/bbb-ui-components-react/commit/62b3f8ca71aa301038192d0bbe08d2153429a752))

## [2.0.2](https://github.com/bigbluebutton/bbb-ui-components-react/compare/v2.0.1...v2.0.2) (2026-04-08)


### Bug Fixes

* **toggle:** id mismatch between toggle and its label ([fa115e0](https://github.com/bigbluebutton/bbb-ui-components-react/commit/fa115e0175ce6f5f5de2a97a68355805657d046a))

## [2.0.1](https://github.com/bigbluebutton/bbb-ui-components-react/compare/v2.0.0...v2.0.1) (2026-01-20)


### Bug Fixes

* move '@mui/icons-material' to `peerDependencies` as intended in v2.0.0 ([035f426](https://github.com/bigbluebutton/bbb-ui-components-react/commit/035f426bfe780d560aa46f34d6e5e9372f24e951))

## [2.0.0](https://github.com/bigbluebutton/bbb-ui-components-react/compare/v1.0.1...v2.0.0) (2026-01-19)


### ⚠ BREAKING CHANGES

* **deps:** @mui/icons-material has been moved from `dependencies` to
`peerDependencies` to prevent version conflicts and reduced bundle size.
Consumers must now install this package manually in their host
application.

### Bug Fixes

* **BBBAccordion:** prevent `scrollHeight` prop leakage to DOM ([b77d979](https://github.com/bigbluebutton/bbb-ui-components-react/commit/b77d979a5e388da7c31afa3e2ba60c5888da54bb))
* **ci:** use NPM access token instead ([36c7eee](https://github.com/bigbluebutton/bbb-ui-components-react/commit/36c7eee62dfc8a289d1ec791523a542a7fa1a735))


### Miscellaneous Chores

* **deps:** move dependencies to peer/dev and fix audit issues ([6009287](https://github.com/bigbluebutton/bbb-ui-components-react/commit/6009287fcd62570421d69dee1526ca5c721aaac2))

## [1.0.1](https://github.com/bigbluebutton/bbb-ui-components-react/compare/v1.0.0...v1.0.1) (2025-12-17)


### Bug Fixes

* **BBButton:** ensure acessibility and stacked layout displacement ([ddd9cb5](https://github.com/bigbluebutton/bbb-ui-components-react/commit/ddd9cb599ca45dc21eb8e09fa696fa50f5d26714))
* **BBButton:** missing import from last commit ([2cf2d3d](https://github.com/bigbluebutton/bbb-ui-components-react/commit/2cf2d3d071ebc7c4bac7ae768c1f9f34a7f661ec))
* **build:** externalize mui and emotion dependencies ([7981a3a](https://github.com/bigbluebutton/bbb-ui-components-react/commit/7981a3a393a4ce273df892cb4293a94d97929dcc))
* **build:** switch to UMD and externalize dependencies ([3009b1e](https://github.com/bigbluebutton/bbb-ui-components-react/commit/3009b1e38d0d84e32ae7c63448313e0bd48e0371))
* main file entry point path ([d8546d4](https://github.com/bigbluebutton/bbb-ui-components-react/commit/d8546d4fd20ef1c5c32e1339a4b18c56f0d997b3))
* prevent props leaking to DOM ([cc174f3](https://github.com/bigbluebutton/bbb-ui-components-react/commit/cc174f3461e26dd49925935d32c899c57384550e))
* **spinner:** wrong prop logic ([728b9cb](https://github.com/bigbluebutton/bbb-ui-components-react/commit/728b9cb1ee900c39d2366cbb833ae6a8ecfc2519))
* **tooltips:** adds missing tippy styles ([44bd58c](https://github.com/bigbluebutton/bbb-ui-components-react/commit/44bd58c1a5f4b3ef832d3814bc3b7d64a85ef3df))

