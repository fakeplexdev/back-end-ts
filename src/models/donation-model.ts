import db_map from '../database'
import { Document, Schema } from 'mongoose'

const db = db_map.get('account')!

/**
 * Global Currency
 */
export enum GlobalCurrency
{
   SHARD, GEM, CROWN
}

/**
 * Unknown purchases are used for storing Cosmetics
 * and everything else that can be bought with Shards
 */
const UnknownPurchase = db.model<IUnknownPurchase>('', new Schema
({
   unique: { type: String, required: true },
   packageName: { type: String, required: true },
   shardPurchase: { type: Boolean, required: true},
   cost: { type: Number, required: true},
   known: { type: Boolean, required: true, default: false }
}, 
{ collection: 'purchases', versionKey: false }))

/**
 * Known purchases are used for storing Game Kits
 */
const KnownPurchase = db.model<IKnownPurchase>('KnownPurchase', new Schema
({
   unique: { type: String, required: true },
   salesPackageId: { type: Number, required: true },
   known: { type: Boolean, required: true, default: false }
}, 
{ collection: 'purchases', versionKey: false }))

/* Used to set the intellisense properties */
export interface IUnknownPurchase extends Document 
{
   unique: string, 
   packageName: string,
   shardPurchase: boolean,
   cost: number,
   known: boolean
}

/* Used to set the intellisense properties */
export interface IKnownPurchase extends Document 
{
   unique: string, 
   salesPackageId: number,
   known: boolean
}

/* Used to set the intellisense properties */
export interface IReward extends Document 
{
   name: string, 
   amount: number,
   type: string
}

export { KnownPurchase, UnknownPurchase }