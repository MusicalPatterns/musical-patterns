#!/usr/bin/env sh

publish_pattern() {
	cp ../../bin/pattern/tsconfig.json .

	rm -r package/dist/* || true
	touch package/dist/.gitkeep
	tsc

	pushd package
		npm version patch
		npm publish --access public
	popd

	rm tsconfig.json
}
export -f publish_pattern
