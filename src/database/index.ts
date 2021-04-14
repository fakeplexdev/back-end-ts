import mongoose, { Connection } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

/* MongoDB options */
const MONGO_OPTIONS = 
{
	useUnifiedTopology: true,
	useNewUrlParser: true,
	keepAlive: true,
	poolSize: 50,
	autoIndex: false,
	retryWrites: false
}

/* MongoDB Connection Holder */
const map: Map<string, Connection> = new Map<string, Connection>()

/* Enumerator for all Databases stored in MongoDB */
const Database = 
{ 
   ACCOUNT: "account", 
   BUNGEE: "bungee", 
   SERVER: "server" 
}

for (const db in Database)
{
	map.set(db, mongoose.createConnection
	(
		//mongodb://<username>:<password>@<host>:<port>/<db>?authSource=<auth_db>
		`${process.env.MONGO_URL!}${db.toLowerCase()}?authSource=${process.env.AUTH_SOURCE!}`, MONGO_OPTIONS
	))
}

function db(type: string): Connection
{
	return map.get(type.toUpperCase())!
}

export { Database, db }