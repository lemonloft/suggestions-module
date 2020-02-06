# Activites and Listings Suggestions

This suggestions service for Lemon Loft provides the user with things to do and places to stay near the searched location.

## Related Projects
https://github.com/lemonloft/reviews-module
https://github.com/lemonloft/reservation-module
https://github.com/lemonloft/photo-gallery-module-gs
https://github.com/lemonloft/kd-proxy-server

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

### Setting up database/seeding data

mysql -u root -p < server/schema.sql
npm run db:setup

## start script

```sh
npm run start
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 13.1.0

## Development

## Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### CRUD API

Read/GET:
```
server.get('/suggestions/activities/:id')
server.get('/suggestions/listings/:id')
```