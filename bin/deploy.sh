#!/usr/bin/env sh

NODE_ENV=production ./node_modules/.bin/webpack
gcloud config configurations activate fun-musical-tool
gcloud app deploy -q
