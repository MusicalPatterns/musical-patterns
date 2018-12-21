# Musical Patterns - lab

A place to submodule all the musical patterns to develop on them all together.

Uses the `@musical-patterns/playroom` to let you hear them.

Uses the `@musical-patterns/compiler` for testing purposes (snapshotting patterns).

If you'd like to provide a whitelist of patterns to work with in the lab, you can do so in `src/selectedPatterns.ts`.
This will override the pattern filter from the `@musical-patterns/pattern` repo.

## development

`make add PATTERN=my-new-pattern`

Install a new pattern repo as a submodule.

`make publish PATTERN=some-pattern`

Publish a pattern to npm.

`make publish PATTERN=ALL`

Publish all patterns to npm.

`make share_config PATTERN=some-pattern`

Replace the basic configuration files in a pattern repo with the standards.

`make share_config PATTERN=ALL`

Replace the basic configuration files in all pattern repos with the standards.

`make ship PATTERN=some-pattern MSG="some message"`

Publish a pattern to npm and commit and push it to GitHub, if it passes its tests and lint check after updating dependencies and standardizing config.

`make ship PATTERN=ALL MSG="some message"`

Ship all patterns, per above.

`make snapshot PATTERN=some-pattern`

Update the snapshot for a pattern. This snapshot is used by the snapshot test to ensure the pattern stays locked down unless you mean to change it.
When you import a published pattern, you can import either the snapshot, or the pattern if you want to customize it before performing by configuring its spec and recompiling it.

`make snapshot PATTERN=ALL`

Update the snapshot for all patterns.

`make update PATTERN=some-pattern`

Update dependencies for a pattern.

`make update PATTERN=ALL`

Update all patterns' dependencies.
