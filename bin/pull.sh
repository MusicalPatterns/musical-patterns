#!/usr/bin/env sh

set -e

function pull_if_needed {
    if [[ $(git rev-list --left-right --count origin/master...@ | cut -f1) != 0 ]] ; then
        git pull -r
    fi
}

export -f pull_if_needed

pull_if_needed
npm i || true

git submodule update --init --recursive
git submodule foreach git checkout master
git submodule foreach pull_if_needed
