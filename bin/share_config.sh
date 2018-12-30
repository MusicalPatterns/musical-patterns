#!/usr/bin/env bash

. ./bin/pattern/do_for_self_all_or_one.sh

share_pattern_file() {
	FILE="$1"
	cp ../../src/template/${FILE} ${FILE} || true
}
export -f share_pattern_file

share_pattern_files() {
	if [[ ${PATTERN} == "" ]] ; then
		echo "Please specify a pattern to share config with 'PATTERN=my-pattern'."
		exit 1
	fi

	mkdir -p test

	share_pattern_file .gitattributes
	share_pattern_file LICENSE
	share_pattern_file Makefile
	share_pattern_file tsconfig.json
	share_pattern_file test/tslint.json
	share_pattern_file test/jasmine.js
}
export -f share_pattern_files

do_for_self_all_or_one share_pattern_files
