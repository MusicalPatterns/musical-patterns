#!/usr/bin/env sh

set -e

make build
gcloud config configurations activate musical-patterns
gcloud app deploy -q
