#!/usr/bin/env sh

. ./bin/pattern/do_for_self_all_or_one.sh

share_pattern_file() {
	FILE="$1"
	cp ../../pattern/${FILE} ${FILE}
}
export -f share_pattern_file

share_pattern_files() {
	if [[ ${PATTERN} == "" ]] ; then
		printf "Please specify a pattern to share config with 'PATTERN=my-pattern'"
		exit 1
	fi

	share_pattern_file .gitattributes
	share_pattern_file .gitignore
	share_pattern_file LICENSE
	share_pattern_file Makefile
	share_pattern_file tsconfig.json
	share_pattern_file test/tslint.json
	share_pattern_file test/jasmine.js
}
export -f share_pattern_files

do_for_self_all_or_one share_pattern_files
