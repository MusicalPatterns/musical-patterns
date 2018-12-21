#!/usr/bin/env sh

git submodule add --force --name ${PATTERN} git@github.com:MusicalPatterns/pattern-${PATTERN}.git src/${PATTERN}
make share_config
