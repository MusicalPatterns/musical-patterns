#!/usr/bin/env sh

cp node_modules/@musical-patterns/shared/test/tsconfig.json ./test/
cp node_modules/@musical-patterns/shared/test/mockDom.ts ./test/

node_modules/.bin/tsc -p test/tsconfig.json
node_modules/.bin/ts-node -P test/tsconfig.json ./bin/snapshot.js

rm ./test/tsconfig.json
rm ./test/mockDom.ts
