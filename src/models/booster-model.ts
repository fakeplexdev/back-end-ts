import { Database, db } from '../database'
import { Document, Schema } from 'mongoose'

/*
 * Used to set the intellisense properties 
 */
export interface IBooster extends Document 
{
   boosterGroup: string, 
   activatorUUID: string,
   activatorName: string, 
   startTime: number,
   duration: number
}

/*
 * Booster model
 */
const Booster: Schema = new Schema
({
   boosterGroup: { type: String },
   activatorUUID: { type: String },
   activatorName: { type: String },
   startTime: { type: Number },
   duration: { type: Number }
}, 
{ collection: 'boosters', versionKey: false })

export default db(Database.ACCOUNT).model<IBooster>('Booster', Booster)
