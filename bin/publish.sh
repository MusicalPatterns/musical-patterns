#!/usr/bin/env sh

publish_pattern() {
	cp ../../bin/pattern/tsconfig.json .

	rm package/dist/*
	touch package/dist/.gitkeep
	tsc

	pushd package
		npm version patch
		npm publish --access public
	popd

	rm tsconfig.json
}
export -f publish_pattern

if [[ ${PATTERN} == "" ]] ; then
	printf "Please specify a pattern to publish with 'PATTERN=my-pattern'"
	exit 1
else
	if [[ ${PATTERN} == "ALL" ]] ; then
		git submodule foreach publish_pattern
	else
		cd src/${PATTERN}
		publish_pattern
	fi
fi
