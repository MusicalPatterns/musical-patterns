#!/usr/bin/env sh

NODE_ENV=production webpack
gcloud config configurations activate fun-musical-tool
gcloud app deploy -q
