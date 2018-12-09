#!/usr/bin/env sh

set -e

make test
make lint

make commit_recursively

make push
