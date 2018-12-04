#!/usr/bin/env sh

node_modules/.bin/tsc -p test/tsconfig.json
node_modules/.bin/ts-node -P test/tsconfig.json ./bin/snapshot.js
