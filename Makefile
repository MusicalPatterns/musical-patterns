.PHONY: lint
.PHONY: test

deploy:
	./bin/deploy.sh

setup:
	./bin/setup.sh

snapshot:
	./bin/snapshot.sh

start:
	./bin/start.sh

build:
	musical-patterns build "webpack --config webpack.prod.js"

lint:
	musical-patterns lint

publish:
	musical-patterns publish

pull:
	musical-patterns pull

push:
	musical-patterns push

test:
	musical-patterns test
