#!/usr/bin/env sh

set -e

. ./bin/pattern/publish_pattern.sh
. ./bin/pattern/do_for_self_all_or_one.sh

do_for_self_all_or_one publish_pattern
