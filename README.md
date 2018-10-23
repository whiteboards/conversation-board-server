# conversation-board-server

[![master](https://travis-ci.org/whiteboards/conversation-board-server.svg?branch=master)](https://travis-ci.org/whiteboards/conversation-board-server)
[![develop](https://travis-ci.org/whiteboards/conversation-board-server.svg?branch=develop)](https://travis-ci.org/whiteboards/conversation-board-server)

Back end server for Conversation Board

## Description of Project

### Scope

* Users can create Boards and give other Users permission to view them.
* Users can create Posts on Boards.
* Posts consist of a title, description, and a link.
* Each Post has a chat room where Users can discuss the given topic.

### Future Considerations

* Moderation

## Getting Started

### Install

`yarn`

### Configuration

The server can be configured in two ways:

* Environment variables
* A `config.json` file in the root directory containing the variables.

#### Configuration variables

| Variable       | Required | Type   | Example                                                  |
|----------------|----------|--------|----------------------------------------------------------|
| `DATABASE_URI` | Yes      | string | `postgres://<username>@<address>:<port>/<database_name>` |

#### Example `config.js` files

```js
export const config = {
  "DATABASE_URI": "postgres://<username>@<address>:<port>/<database_name>"
};
```

### Running

`yarn start`

### Recommended Visual Studio Code Plugins

* [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
* [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)

## Technologies

* [Node](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [PostgreSQL](https://www.postgresql.org/)

## Tooling

* [Jest](https://facebook.github.io/jest/)
* [TSLint](https://palantir.github.io/tslint/)
