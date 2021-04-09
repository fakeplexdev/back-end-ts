import db_map from '../database'
import { Document, Schema } from 'mongoose'

let db = db_map.get('account')!

export interface IKit extends Document 
{
   unique: string, 
   kitId: string,
   level: string, 
   xp: number,
   upgradeLevel: number,
   defaultType: boolean
}

const Kit: Schema = new Schema
({
   unique: { type: String },
   kitId: { type: String },
   level: { type: String },
   xp: { type: Number },
   upgradeLevel: { type: Number },
   defaultType: { type: Boolean }
}, 
{ collection: 'kitProgression', versionKey: false })

export default db.model<IKit>('Kit', Kit)
