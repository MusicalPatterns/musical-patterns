#!/usr/bin/env sh

make snapshot

. ./bin/pattern/publish_pattern.sh

if [[ ${PATTERN} == "" ]] ; then
	printf "Please specify a pattern to publish with 'PATTERN=my-pattern'"
	exit 1
else
	if [[ ${PATTERN} == "ALL" ]] ; then
		git submodule foreach publish_pattern
	else
		pushd src/${PATTERN}
			publish_pattern
		popd
	fi
fi
