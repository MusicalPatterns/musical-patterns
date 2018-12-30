#!/usr/bin/env bash

set -e

. ./bin/pattern/do_for_self_all_or_one.sh

update() {
	if [[ ${PATTERN} == "" ]] ; then
		npm update
	else
		make clean_updates DIR=package
		pushd package
			npm update
		popd
	fi
}
export -f update

do_for_self_all_or_one update
