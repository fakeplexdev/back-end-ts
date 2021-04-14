import { Database, db } from '../../database'
import { Document, Schema } from 'mongoose'

/*
 * Used to set the intellisense properties 
 */
export interface IMOTD extends Document 
{
   headline: string,
   message: string
}

/*
 * MOTD model 
 */
const MOTD: Schema = new Schema
({
   headline: { type: String },
   message: { type: String },
}, 
{ collection: 'globalMotd', versionKey: false })

export default db(Database.BUNGEE).model<IMOTD>('MOTD', MOTD)
