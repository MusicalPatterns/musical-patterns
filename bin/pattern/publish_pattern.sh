#!/usr/bin/env sh

publish_pattern() {
	if [[ ${PATTERN} == "" ]] ; then
		printf "Please specify a pattern to publish with 'PATTERN=my-pattern'"
		exit 1
	fi
	make publish
}
export -f publish_pattern
