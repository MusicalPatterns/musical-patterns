#!/usr/bin/env sh

set -e

REPO="$1"

mkdir -p ../fake_npm_${REPO}/dist/
pushd ../fake_npm_${REPO}
	rm -rf dist/*
	rm package.json || true
popd

pushd ../${REPO}/
   make build
   cp -r dist/* ../fake_npm_${REPO}/dist/
   cp package.json ../fake_npm_${REPO}/
popd

npm uninstall @musical-patterns/${REPO}
npm i -D ../fake_npm_${REPO}
