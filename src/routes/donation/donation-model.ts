import { Database, db } from '../../database'
import { Document, Schema } from 'mongoose'

/**
 * Global Currency
 */
export enum GlobalCurrency { SHARD, GEM, CROWN }

/**
 * Unknown purchases are used for storing Cosmetics
 * and everything else that can be bought with Shards
 */
const UnknownPurchase = db(Database.ACCOUNT)
.model<IUnknownPurchase>('', new Schema(
{
   unique: { type: String, required: true },
   packageName: { type: String, required: true },
   shardPurchase: { type: Boolean, required: true},
   cost: { type: Number, required: true},
   known: { type: Boolean, required: true, default: false }
},
// Properties
{ collection: 'purchases', versionKey: false }))

/**
 * Known purchases are used for storing Game Kits
 */
const KnownPurchase = db(Database.ACCOUNT)
.model<IKnownPurchase>('KnownPurchase', new Schema(
{
   unique: { type: String, required: true },
   salesPackageId: { type: Number, required: true },
   known: { type: Boolean, required: true, default: false }
},
// Properties
{ collection: 'purchases', versionKey: false }))


/**
 * ---------------------------------------
 * Used to set the intellisense properties 
 * ---------------------------------------
 */
export interface IUnknownPurchase extends Document 
{
   unique: string, 
   packageName: string,
   shardPurchase: boolean,
   cost: number,
   known: boolean
}

export interface IKnownPurchase extends Document 
{
   unique: string, 
   salesPackageId: number,
   known: boolean
}

export interface IReward extends Document 
{
   name: string, 
   amount: number,
   type: string
}

export { KnownPurchase, UnknownPurchase }