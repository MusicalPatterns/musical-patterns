#!/usr/bin/env sh

PATTERN="$1"
PATTERN_DIR=src/${PATTERN}

export PATH=${PATH}:./node_modules/.bin/

cp bin/tsconfig.json ${PATTERN_DIR}

cd ${PATTERN_DIR}

tsc

pushd package
	npm publish --access public
popd

rm tsconfig.json
