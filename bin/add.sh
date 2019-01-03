#!/usr/bin/env bash

git submodule add --force --name ${PATTERN} https://github.com/MusicalPatterns/pattern-${PATTERN}.git src/${PATTERN}
