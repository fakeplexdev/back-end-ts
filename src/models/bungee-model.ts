import db_map from '../database'
import { Document, Schema } from 'mongoose'

let db = db_map.get('bungee')!

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

const MOTD: Schema = new Schema
({
   headline: { type: String },
   message: { type: String },
}, 
{ collection: 'globalMotd', versionKey: false })

export default db.model<IMOTD>('MOTD', MOTD)
