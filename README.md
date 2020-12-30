# testing

This project was generate with node.js version 12.8.3 and Protractor, Mocha, Chai and Serenity.JS.

## Environment Configuration

you will need to install the dependencies with the command:

`npm i`

## Running automation api tests locally

Run `npm run test:ci` to execute the Api test suite via [Protractor].

## Report

You need to open 'index.html' in the folder 'target/site/serenity' after it run the test suite.
Only if you run the test suite locally.

## Running automation api test in docker

you need to run this command

`docker build -t testing -f Dockerfile .`

when the docker process will finish, you run this command

`docker run testing`

