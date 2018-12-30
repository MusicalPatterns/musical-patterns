#!/usr/bin/env sh

git submodule add --force --name ${PATTERN} https://github.com/MusicalPatterns/pattern-${PATTERN}.git src/${PATTERN}
make share_config
