## How to run server

The server connects with the postgres database called `goodiesShop` to fetch data.
The database instance is configured on AWS RDS.

Prerequisite:
Create a `.env` file with Params for fetch to work:

```
RDS_HOSTNAME=custom-goodies.c0smf60ezema.us-west-1.rds.amazonaws.com
RDS_PORT=5432
RDS_DB_NAME=goodiesShop
RDS_USERNAME=<name>
RDS_PASSWORD=<password>
```

- Run `npm run dev` to start the local server.
- Point to any API to get the data
