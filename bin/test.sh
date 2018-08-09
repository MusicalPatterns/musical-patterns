#!/usr/bin/env sh

set -e

tsc -p ./spec/tsconfig.json --noEmit
ts-node -P ./spec/tsconfig.json ./node_modules/jasmine/bin/jasmine.js
