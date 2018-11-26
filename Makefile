.PHONY: lint
.PHONY: test

setup:
	./bin/setup.sh

start:
	./bin/start.sh

deploy:
	./bin/deploy.sh

test:
	musical-patterns test && git submodule foreach make test

push:
	./bin/push.sh

pull:
	./bin/pull.sh

lint:
	musical-patterns lint && git submodule foreach make lint

snapshot:
	./bin/snapshot.sh

build:
	musical-patterns build --command "webpack --config webpack.prod.js"
