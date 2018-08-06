#!/usr/bin/env sh

set -e

ts-node -O '{"module": "commonjs"}' ./node_modules/jasmine/bin/jasmine.js
