#!/usr/bin/env sh

set -e

make test
make lint

make commit

make push
