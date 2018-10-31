#!/usr/bin/env sh

NODE_ENV=production ./node_modules/.bin/webpack
gcloud config configurations activate musical-patterns
gcloud app deploy -q
