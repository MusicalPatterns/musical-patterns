#!/usr/bin/env sh

set -e

make test
make lint

commit_recursively() {
	git add .
	git commit -m "${MSG}"
	git submodule foreach commit_recursively
}
commit_recursively

make push
