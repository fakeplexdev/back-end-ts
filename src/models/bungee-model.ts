import { Database, db } from '../database'
import { Document, Schema } from 'mongoose'

/*
 * Used to set the intellisense properties 
 */
export interface IMOTD extends Document 
{
   unique: string, 
   name: string,
   primary: string, 
   shard: number,
   gem: number, 
   crown: number,
   lastLogin: number, 
   extra: string[],
   id?: string
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
