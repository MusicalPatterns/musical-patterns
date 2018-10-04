#!/usr/bin/env sh

set -e

tslint '**/*.ts{,x}' -e **/node_modules/** --fix --project tsconfig.json
