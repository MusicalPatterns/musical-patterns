#!/usr/bin/env sh

publish_pattern() {
	if [[ ${PATTERN} == "" ]] ; then
		printf "Please specify a pattern to publish with 'PATTERN=my-pattern'"
		exit 1
	fi

	cp ../../bin/pattern/tsconfig.json .

	rm -r package/dist/* || true
	touch package/dist/.gitkeep
	tsc

	pushd package
		export VERSION=$(npm version patch)
		npm publish --access public
	popd

	rm tsconfig.json
}
export -f publish_pattern
