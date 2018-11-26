#!/usr/bin/env sh

set -e

cp ./node_modules/@musical-patterns/utilities/tsconfig-common.json .
cp ./node_modules/@musical-patterns/utilities/tsconfig.json .

trap ctrl_c INT
function ctrl_c() {
	rm tsconfig.json
	rm tsconfig-common.json
}

./node_modules/.bin/webpack-dev-server --config webpack.dev.js

rm tsconfig.json
rm tsconfig-common.json
