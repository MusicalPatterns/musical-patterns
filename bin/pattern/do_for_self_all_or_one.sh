#!/usr/bin/env sh

do_for_self_all_or_one() {
	export CMD="${1}"

	if [[ ${PATTERN} == "" ]] ; then
		eval "${CMD}"
	else
		if [[ ${PATTERN} == "ALL" ]] ; then
			git submodule foreach 'eval ${CMD}'
		else
			pushd src/${PATTERN}
				eval "${CMD}"
			popd
		fi
	fi
}
export -f do_for_self_all_or_one
