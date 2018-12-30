#!/usr/bin/env bash

set -e

tsc -p tsconfig-node.json
if [[ $? == 0 ]] ; then
	ts-node -P tsconfig-node.json bin/snapshot.js ${PATTERN}
fi
