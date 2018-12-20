#!/usr/bin/env sh

set -e

. ./bin/pattern/publish_pattern.sh

if [[ ${PATTERN} == "" ]] ; then
	make update
	make test
	make lint
	make commit
	make push
else
	if [[ ${PATTERN} == "ALL" ]] ; then
		make update PATTERN=ALL
		git submodule foreach make test
		git submodule foreach make lint
		git submodule foreach publish_pattern
		git submodule foreach git add .
		git submodule foreach git commit -m "${VERSION}: ${MSG}"
		git submodule foreach git push
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



