#!/usr/bin/env sh

git submodule add --force --name ${PATTERN} https://github.com/MusicalPatterns/pattern-${PATTERN}.git src/${PATTERN}
git config -f .gitmodules submodule.${PATTERN}.ignore all
make share_config
