# Multiplayer Memorygame

This repo contains a frontend and backend for a multiplayer memory game. It uses Typescript, Koa, routing-controllers and TypeORM in the backend and React/Redux in the frontend. The backend exposes a REST API but also sends messages over websockets using SocketIO. 

## Getting Started

### Postgres Database

Start a Postgres container using the following Docker command:

```bash
$ docker run \
  --rm \
  -e POSTGRES_PASSWORD=secret \
  -p 5432:5432 \
  postgres
```

### TypeStack Server
Then `cd` into the `server` directory and run `npm install` to install the dependencies.
The first time you run the server, comment out lines 62 and 63 of/server/src/games/entities.ts.After running successfully with no errors, uncomment those lines andrestart the server.

Start the server with the `npm run dev`

### React Client

Open another terminal session and `cd` into the `client` directory, then run `npm install` to install dependencies and run `npm start` to start the dev server.

### Multiplayer
Open a different browser for the second player to join the game.


