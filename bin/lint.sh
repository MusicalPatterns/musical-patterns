#!/usr/bin/env sh

set -e

./node_modules/.bin/musical-patterns lint

git submodule foreach ./node_modules/.bin/musical-patterns lint
