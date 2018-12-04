#!/usr/bin/env sh

node_modules/.bin/tsc -p tsconfig-node.json
if [[ $? == 0 ]] ; then
	node_modules/.bin/ts-node -P tsconfig-node.json ./bin/snapshot.js
fi
