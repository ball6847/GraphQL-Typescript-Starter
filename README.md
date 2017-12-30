React Node GraphQL TypeScript - Starter Kit
==========================================

As I was bootstraping a webapplication I created this starter kit for my use. The technology stack of this kit is collection of all coolatest technologies which I want to use in my web application.

Getting Started
--------------

To get started using the kit follow following steps:

### Repo Cloning and Setup:

1. Clone the repo and cd to working directory.
2. `yarn`
3. `yarn bootstrap`

\* If you have `lerna` installed globally you can skip step 2, if not, after running step 2, `lerna` command will available for you via `npx`, just prepend it with `npx` like this `npx lerna --version`

### DB Setup: in case you have docker installed on your system

`cd packages/server && docker-compose up -d`

### DB Setup: manually

1. `createuser myuser --password;`
2. `createdb myapp;`
3. Connect to the DB `psql myapp` and run `grant all privileges on database myapp to myuser;`

### DB Migration:

`lerna run --stream --scope myapp-server migrate-up`

### Starting Development Servers:

To start client server in development mode:

`lerna run --stream --scope myapp-client start`

To start graphql server in development mode:

`lerna run --stream --scope myapp-server start:watch`


Libraries used
-------------

Following libraries / utilities have been used in the repo:

### Client

1. ReactJS: 16.2.0
2. Typescript: 2.4.2
3. TSLint: 5.6.0
4. react-apollo: 1.4.14
5. react-router: 4.2.0
6. styled-components: 2.4.0
7. jest: 20.0.3
8. enzyme: 2.9.1
9. prettier: 1.5.3

### Server

1. NodeJS: 7.5.0
2. Express: 4.15.4
3. apollo-server-express: 1.1.0
4. Typescript: 2.4.2
5. TSLint: 5.6.0
6. db-migrate: 0.10.0-beta.23
7. graphql-tools: 1.2.1
8. prettier: 1.5.3
9. mocha: 3.5.0
10. chai: 4.1.1

References:
1. https://github.com/Microsoft/TypeScript-React-Starter
2. https://github.com/Microsoft/TypeScript-Node-Starter
3. https://github.com/facebook/jest/blob/master/examples/typescript
