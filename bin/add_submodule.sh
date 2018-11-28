#!/usr/bin/env sh

NAME="$1"

git submodule add --name ${NAME} git@github.com:MusicalPatterns/pattern-${NAME}.git src/patterns/${NAME}
