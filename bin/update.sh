#!/usr/bin/env sh

set -e

update_package() {
	pushd package
		make update
	popd
}
export -f update_package

if [[ ${PATTERN} == "ALL" ]] ; then
	git submodule foreach update_package
else
	PATTERN_DIR=src/${PATTERN}
	cd ${PATTERN_DIR}
	update_package
fi
