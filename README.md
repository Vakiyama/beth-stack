# BETH Stack + Tailwind

## Quickstart

### Configure your .env file

A template .env-template is provided for you that should be filled in.

**.env-template**

```bash
IS_DEV=TRUE
DB_URL= # live turso connection string, can be ignored if not using turso
AUTH_TOKEN=  # for connecting to turso, same as above
LOCAL_DB_URL= # ./database.db (you can run with just this for a while)
```

Rename `.env-template` to `.env`

If you choose not to use SQLite or the Turso ts sdk, feel free to ignore
the db related variables.

```
bun i
bun run dev
```

Your server should be up at `localhost:3000` 🚀

Elysia will autorefresh your browser whenever bun detects a change while
running in dev mode, although it has only been tested on my machine.

## **Bun, Elysia, Turso, HTMX + Tailwind**

For building small to mid scale applications with a pleasant DX.

HTMX powers client side interactivity with a server focused setup.

Setup with an sqlite database that can be used to transition to Turso.
