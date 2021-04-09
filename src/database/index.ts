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

const db_array: string[] = ['account', 'bungee', 'server']
const db_map: Map<string, Connection> = new Map<string, Connection>()

db_array.forEach(db => 
{
	db_map.set(db, mongoose.createConnection
	(
		//mongodb://<username>:<password>@<host>:<port>/<db>?authSource=<auth_db>
		`${process.env.MONGO_URL!}${db}?authSource=${process.env.AUTH_SOURCE!}`, MONGO_OPTIONS
	))
})

export default db_map