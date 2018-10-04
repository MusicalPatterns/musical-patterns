#!/usr/bin/env sh

set -e

tslint '**/*.ts{,x}' -e **/node_modules/** --fix --project tsconfig.json

tslint 'spec/**/*.ts' --fix --project spec/tsconfig.json

tslint 'songs/**/*.ts' --fix --project songs/tsconfig.json
