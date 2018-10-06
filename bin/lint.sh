#!/usr/bin/env sh

set -e

./node_modules/.bin/tslint '**/*.ts{,x}' -e **/node_modules/** --fix --project tsconfig.json

./node_modules/.bin/tslint 'spec/**/*.ts' --fix --project spec/tsconfig.json

./node_modules/.bin/tslint 'songs/**/*.ts' --fix --project songs/tsconfig.json
