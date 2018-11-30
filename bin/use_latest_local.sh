#!/usr/bin/env sh

set -e

REPO="$1"

rm -rf ../fake_npm_${REPO}

pushd ../${REPO}/
	make build
	npm pack
	mv *.tgz ..
popd

pushd ..
	tar -xvzf *.tgz
	mv package fake_npm_${REPO}
	rm *.tgz
popd

npm i -D ../fake_npm_${REPO}
