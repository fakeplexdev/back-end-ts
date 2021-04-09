import db_map from '../database'
import { Document, Schema } from 'mongoose'

let db = db_map.get('server')!

interface IBooster extends Document 
{
   boosterGroup: string, 
   activatorUUID: string,
   activatorName: string, 
   startTime: number,
   duration: number
}

export { IBooster }

const Booster: Schema = new Schema
({
   boosterGroup: { type: String },
   activatorUUID: { type: String },
   activatorName: { type: String },
   startTime: { type: Number },
   duration: { type: Number }
}, 
{ collection: 'boosters', versionKey: false })

export default db.model<IBooster>('Booster', Booster)
