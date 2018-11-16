#!/usr/bin/env sh

set -e

mkdir -p ../fake_npm_performer/dist/
pushd ../fake_npm_performer
	rm -rf dist/*
	rm package.json || true
popd

pushd ../performer/
   make build
   cp -r dist/* ../fake_npm_performer/dist/
   cp package.json ../fake_npm_performer/
popd

npm uninstall @musical-patterns/performer
rm -rf node_modules/
npm i -D ../fake_npm_performer
npm i
make start
