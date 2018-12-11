#!/usr/bin/env sh

set -e

make update PATTERN=ALL

make test
make lint

make commit

make push
