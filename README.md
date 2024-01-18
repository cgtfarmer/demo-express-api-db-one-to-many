# Getting Started

### Installation

1. Clone this project
1. Run: `docker-compose run --rm app npm install`
1. Run: `docker-compose up -d` to bring up container(s)
1. Run: `docker-compose logs -f` to tail logs
1. Navigate to `http://localhost:3000/users` in your browser or Postman

### Development

Not all code changes will be automatically recognized, so you'll need to restart the stack:

Run: `docker-compose down; docker-compose up -d; docker-compose logs -f`

Alternatively, restart just the `app` service:

`docker-compose restart app; docker-compose logs -f`

### Run Playwright Tests

Run: `docker-compose down; docker-compose up -d db; sleep 20; docker-compose run --rm app bash -c "npm install; npm run start & sleep 5; npm run test-e2e"`

## Run Playwright Tests (w/ Stack Reuse)

Run: `docker-compose restart app; docker-compose logs -f`

Run in another terminal: `docker-compose app npm run test-e2e`

### Endpoints

#### State CRUD

```
GET /states
POST /states

GET /states/:id
PUT /states/:id
DELETE /states/:id
```

#### User CRUD

```
GET /users
POST /users

GET /users/:id
PUT /users/:id
DELETE /users/:id
```

#### User Retrieval by State ID

```
GET /states/:id/users
```

#### State Summary Retrieval

(Aggregated User data by State)

```
GET /states/summary
GET /states/:id/summary
```
