#!/usr/bin/env sh

set -e

REPO="$1"

npm uninstall @musical-patterns/${REPO}
npm i -D @musical-patterns/${REPO}@latest
