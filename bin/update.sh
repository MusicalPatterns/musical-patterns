#!/usr/bin/env sh

set -e

. ./bin/pattern/do_for_self_all_or_one.sh

update_with_latest_knowledge() {
	npm i
	npm update
}
export -f update_with_latest_knowledge

update() {
	if [[ ${PATTERN} == "" ]] ; then
		update_with_latest_knowledge
	else
		pushd package
			update_with_latest_knowledge
		popd
	fi
}
export -f update

do_for_self_all_or_one update
