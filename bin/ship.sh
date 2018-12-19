#!/usr/bin/env sh

set -e

ship_pattern() {
	make test
	make lint

	cp ../../bin/pattern/tsconfig.json .

	rm -r package/dist/* || true
	touch package/dist/.gitkeep
	tsc

	pushd package
		VERSION=$(npm version patch)
		npm publish --access public
	popd

	rm tsconfig.json

	git add .
	git commit -m "${VERSION}: ${MSG}"
	git push
}
export -f ship_pattern

if [[ ${PATTERN} == "" ]] ; then
	make update PATTERN=ALL
	make test
	make lint
	make commit
	make push
else
	if [[ ${PATTERN} == "ALL" ]] ; then
		git submodule foreach ship_pattern
	else
		make update PATTERN=${PATTERN}
		cd src/${PATTERN}
		ship_pattern
	fi
fi



