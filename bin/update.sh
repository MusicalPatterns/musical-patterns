#!/usr/bin/env sh

set -e

update_package() {
	pushd package
		npm i
		npm update
	popd
}
export -f update_package

if [[ ${PATTERN} == "" ]] ; then
	sh node_modules/@musical-patterns/cli/bin/update.sh
else
	if [[ ${PATTERN} == "ALL" ]] ; then
		git submodule foreach update_package
	else
		PATTERN_DIR=src/${PATTERN}
		cd ${PATTERN_DIR}
		update_package
	fi
fi
