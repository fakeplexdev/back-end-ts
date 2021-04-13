import { Database, db } from '../database'
import { Document, Schema } from 'mongoose'

/*
 * Used to set the intellisense properties 
 */
export interface IKit extends Document 
{
   unique: string, 
   kitId: string,
   level: string, 
   xp: number,
   upgradeLevel: number,
   defaultType: boolean
}

/*
 * Kit model
 */
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

export default db(Database.ACCOUNT).model<IKit>('Kit', Kit)
