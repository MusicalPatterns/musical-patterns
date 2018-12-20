#!/usr/bin/env sh

set -e

. ./bin/pattern/publish_pattern.sh

if [[ ${PATTERN} == "" ]] ; then
	make update PATTERN=ALL
	make test
	make lint
	make commit
	make push
else
	if [[ ${PATTERN} == "ALL" ]] ; then
		git submodule foreach publish_pattern
	else
		make update PATTERN=${PATTERN}
		pushd src/${PATTERN}
			make test
			make lint
			publish_pattern
			git add .
			git commit -m "${VERSION}: ${MSG}"
			git push
		popd
	fi
fi



