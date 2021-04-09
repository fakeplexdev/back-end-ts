import db_map from '../database'
import { Document, Schema } from 'mongoose'

let db = db_map.get('account')!

export interface IPlayer extends Document 
{
   id?: string,
   unique: string, 
   name: string,
   primary: string, 
   shard: number,
   gem: number, 
   crown: number,
   point: number,
   lastLogin: number, 
   extra: string[]
}

const Player: Schema = new Schema
({
   unique: { type: String, unique: true },
   name: { type: String },
   primary: { type: String, default: 'PLAYER' },
   shard: { type: Number, default: 0 },
   gem: { type: Number, default: 0 },
   crown: { type: Number, default: 0 },
   point: { type: Number, default: 0 },
   lastLogin: { type: Number, default: new Date().getTime() },
   extra: { type: Array, default: [] }
}, 
{ collection: 'player', versionKey: false })

export default db.model<IPlayer>('Player', Player)
