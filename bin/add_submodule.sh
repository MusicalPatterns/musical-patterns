#!/usr/bin/env sh

NAME="$1"

git submodule add --force --name ${NAME} git@github.com:MusicalPatterns/pattern-${NAME}.git src/${NAME}