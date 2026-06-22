## [2.2.0](https://github.com/bigbluebutton/bbb-ui-components-react/compare/v2.1.0...v2.2.0) (2026-06-22)


### Features

* **BBBModal:** add `testId` and `closeButtonDataTest` props ([062959a](https://github.com/bigbluebutton/bbb-ui-components-react/commit/062959a7f5e61ed152b3040798fa464154f1afef))
* **BBBSearch:** add search component ([4182a58](https://github.com/bigbluebutton/bbb-ui-components-react/commit/4182a586ff38d4e0dbceb173522cef12701c8e93))


### Bug Fixes

* **BBBModal:** enforce footer hide when noFooter is true ([3af4bf9](https://github.com/bigbluebutton/bbb-ui-components-react/commit/3af4bf920b69279c5c419f9ca0a7f0004b7af0d8))
* **BBBModal:** make stickyFooter: false position footer below ([109b745](https://github.com/bigbluebutton/bbb-ui-components-react/commit/109b745b846fbe2d7d8aec7a015ce529d567057e))
* **BBBModal:** replace hardcoded [#fff](https://github.com/bigbluebutton/bbb-ui-components-react/issues/fff) with colorWhite CSS variable ([6cd4e43](https://github.com/bigbluebutton/bbb-ui-components-react/commit/6cd4e43c0e3fd632c49451890f6e3bac980c541d))
* sync package-lock.json with package.json ([2ff2bbb](https://github.com/bigbluebutton/bbb-ui-components-react/commit/2ff2bbb617197a4af5495961d57c17ca11d13356))
* sync package-lock.json with package.json again ([398bcb1](https://github.com/bigbluebutton/bbb-ui-components-react/commit/398bcb14f74c6ddddbeab0fae1684c9b52108788))

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

