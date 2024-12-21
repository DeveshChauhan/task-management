## Run mongo on windows

Using Services Manager

- Press Win + R to open the Run dialog box.
- Type services.msc and press Enter.
- Look for the MongoDB service in the list.
- Right-click on it and select Start.

## How to setup DB on local

- Download and Install MongoDB & Compass
- open MongoBD Compass
- `use admin` to create a user and database

```
db.createUser({
    user: "admin",
    pwd: "secret",
    roles: [{ role: "readWrite", db: "todoApp" }]
});
```

- run db script to initialize DB

```
cd server/db
node script.js
```

## How it works

- Setup database on local
- run following commands to run server

```
npm install
npm run start
```
