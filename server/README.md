# Getting started with your app

## Available Scripts

In the project directory you can run:

### `npm start`

Runs the app in the development mode.
By default, it is accessible at http://localhost:3000

### `npm test`

Launches the test runner.

### `npm run build`

Builds the app for production to the `dist` folder.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Development

Make sure you have Node.js 14, npm, and Docker installed.

- Install dependencies

```
npm install
```

- Generate Prisma client

```
npm run prisma:generate
```

- Start database in Docker

```
npm run docker:db
```

- Initiate the database

```
npm run db:init
```

- Start the server

```
npm start
```

## Running migrations

- Pull Changes

```
git pull
```

- Run prisma migration

```
npx prisma migrate dev --name custom_migration_name
```

- Regenerate prisma client

```
npx prisma generate
```


## Learn more

You can learn more in the [Amplication documentation](https://docs.amplication.com/guides/getting-started).