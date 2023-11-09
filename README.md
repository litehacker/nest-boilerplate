# Simple REST Api with Role-based authorization NestJS

> Role-based access control (RBAC) is a policy-neutral access-control mechanism defined around roles and privileges. In this section, we'll demonstrate how to implement a very basic RBAC mechanism using Nest guards.

The project is a boilerplate or a simple demonstration of CRUD operations based on authentication cia `/auth/login` credentials. After we get the token, are able to reuse among some operations like `/auth/profile` and CRUD with `/posts` in the project.

The example is called plane/simple, because it doesn't implement the efficient backend, rather than these simple auth tasks. Meaning: no real users, database connections or proper `posts` handling.

#### It is a PoC for CRUD opearations using authorization technics on NestJS using their docs.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
The app runs on port `3001` of `localhost`.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Usage

### Authentication sample

Choose among other users who are statically prewritten in `UsersService` class. 

```bash
curl --location 'http://127.0.0.1:3001/auth/login' \
--header 'Content-Type: application/json' \
--data '{
    "username":"john",
    "password":"changeme"
}'
```

After succesfully retreaving `access_token`, we can reuse it as a Bearer token at any request.

### Listing posts

We need to pass a Bearer token in the header of the request, that we retreated after successful auth, for all opeartions on `/posts` except `GET`, where we only retreave posts that doesn't need authorization and are publicly accessable.

```bash
curl --location --request POST 'http://127.0.0.1:3001/users' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiam9obiIsInJvbGVzIjpbInZlbmRvciIsInVzZXIiXSwiaWF0IjoxNjk5NTYxNzM5LCJleHAiOjE2OTk2MDQ5Mzl9.iV-eF1BzxwHRLMHOt3jMLnm4-WWw4WrtUmRFAG-C-Zc'
```
