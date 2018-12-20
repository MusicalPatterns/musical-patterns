#!/usr/bin/env sh

set -e

. ./bin/pattern/publish_pattern.sh

ship() {
	make update || return
	make test || return
	make lint || return
	[[ ${PATTERN} == "" ]] || publish_pattern || return
	make commit || return
	make push || return
}
export -f ship

if [[ ${PATTERN} == "" ]] ; then
	ship
else
	if [[ ${PATTERN} == "ALL" ]] ; then
		git submodule foreach ship
	else
		pushd src/${PATTERN}
			ship
		popd
	fi
fi
