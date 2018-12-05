#!/usr/bin/env sh

tsc -p tsconfig-node.json
if [[ $? == 0 ]] ; then
	ts-node -P tsconfig-node.json bin/pattern/snapshot.js ${PATTERN}
fi
