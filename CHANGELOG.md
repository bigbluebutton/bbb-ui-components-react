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

## [1.0.0](https://github.com/bigbluebutton/bbb-ui-components-react/compare/50c8d884c6089d9dcf389ee4d8436bcfd3e739b5...v1.0.0) (2025-08-28)


### Features

* add Modal and Spinner ([0f0d11e](https://github.com/bigbluebutton/bbb-ui-components-react/commit/0f0d11e2876a7a6437b004347f34fd95f0449b78))
* add Navigation component ([2b8b561](https://github.com/bigbluebutton/bbb-ui-components-react/commit/2b8b561a9bfacb8e1995ec4c6074a0abdbd852c8))
* **build:** enable code splitting, optimize bundle, and export theme ([b7af4c6](https://github.com/bigbluebutton/bbb-ui-components-react/commit/b7af4c63ec7e9d54c9f866422f2113dc2cbf9be7))
* **button:** add support for colors ([50c8d88](https://github.com/bigbluebutton/bbb-ui-components-react/commit/50c8d884c6089d9dcf389ee4d8436bcfd3e739b5))
* **button:** add support for sizes ([980a052](https://github.com/bigbluebutton/bbb-ui-components-react/commit/980a0528395039f6f8cdef43200d3247f5af09cb))


### Bug Fixes

* add mapping to core css vars ([1c4a214](https://github.com/bigbluebutton/bbb-ui-components-react/commit/1c4a2141732116fd18e9aaab49de17a3c9bf1e44))
* divider height ([5683cf2](https://github.com/bigbluebutton/bbb-ui-components-react/commit/5683cf20aaf16535bef4ca497d9cf125097b883c))
* linter and pallete color vars ([825db5c](https://github.com/bigbluebutton/bbb-ui-components-react/commit/825db5c5d51813ea83fed5866f3c98571ee08908))
* minor fixes on styles ([fbca8e1](https://github.com/bigbluebutton/bbb-ui-components-react/commit/fbca8e1f8ef37e6c33f0bbab456352614c0e96ef))
* subtle button background color ([c11b0f8](https://github.com/bigbluebutton/bbb-ui-components-react/commit/c11b0f854c39990c7b0b5b4d9559707cbbc77219))
* toggle title alignment ([7634d58](https://github.com/bigbluebutton/bbb-ui-components-react/commit/7634d584c6a954e0b0528410d14cba68eea3cdfb))

