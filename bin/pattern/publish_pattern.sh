#!/usr/bin/env sh

publish_pattern() {
	if [[ ${PATTERN} == "" ]] ; then
		printf "Please specify a pattern to publish with 'PATTERN=my-pattern'"
		exit 1
	fi

	cp ../../bin/pattern/tsconfig.json .

	make publish

	rm tsconfig.json
}
export -f publish_pattern
