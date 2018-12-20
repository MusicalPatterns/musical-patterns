#!/usr/bin/env sh

set -e

. ./bin/pattern/publish_pattern.sh

if [[ ${PATTERN} == "" ]] ; then
	publish_pattern
else
	if [[ ${PATTERN} == "ALL" ]] ; then
		git submodule foreach publish_pattern
	else
		pushd src/${PATTERN}
			publish_pattern
		popd
	fi
fi
