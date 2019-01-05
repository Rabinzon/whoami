start:
	DEBUG="application:*" npm run nodemon -- --watch .  --ext '.js' --exec npm run gulp -- server

prepare:
	touch .bash_history
	touch .env

build:
	npm run build

test:
	npm run test

test-update:
	npm run test-update

lint:
	npm run lint

check: test lint

server:
	npm run server

.PHONY: test
