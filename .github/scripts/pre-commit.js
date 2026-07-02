const { execSync } = require('child_process');

// Called by TriPSs/conventional-changelog-action right after it bumps the
// version in package.json/package-lock.json, before committing the release.
// The action only text-replaces the top-level "version" field, so
// package-lock.json's nested packages[""] entry (its own copy of the root
// version) is left stale, requiring a manual fix after every release:
// https://github.com/bigbluebutton/bbb-ui-components-react/commit/2ff2bbb617197a4af5495961d57c17ca11d13356?diff=split#diff-053150b640a7ce75eff69d1a22cae7f0f94ad64ce9a855db544dda0929316519R9
// Regenerating the lockfile here keeps it in sync before the release commit.
exports.preCommit = () => {
  execSync('npm install --package-lock-only', { stdio: 'inherit' });
};
