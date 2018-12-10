#!/usr/bin/env sh

PATTERN_DIR=src/${PATTERN}

if [[ ${PATTERN} == "" ]] ; then
	printf "Please specify a pattern to publish with 'PATTERN=my-pattern'"
	exit 1
fi

export PATH=${PATH}:./node_modules/.bin/

cp bin/pattern/tsconfig.json ${PATTERN_DIR}

cd ${PATTERN_DIR}

rm -rf package/dist

tsc

pushd package
	npm version patch
	npm publish --access public
popd

rm tsconfig.json
