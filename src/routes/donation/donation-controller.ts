import { KnownPurchase, UnknownPurchase, IReward, GlobalCurrency } from './donation-model'
import Player, { IPlayer } from '../login/login-model'
import * as _ from '../login/login-controller'

/**
 * 
 * @param name The name of the player
 * @param unique The UUID of the player
 * @returns The player's currencies and an array of the known/unknown packages
 */
export const getPackages = (data: any) => 
{
   return new Promise<any>(async (resolve, reject) =>
   {
      const knownPackage: number[] = []
      const unknownPackage: string[] = []

      /* First let's get all known packages */
      await KnownPurchase.find({unique: data.unique, known: true}).exec()
      .then(result => result.forEach(known => knownPackage.push(known.salesPackageId)))
      .catch(error => reject(error))

      /* Now let's get all unkwown packages */
      await UnknownPurchase.find({unique: data.unique, known: false}).exec()
      .then(result => result.forEach(unknown => unknownPackage.push(unknown.packageName)))
      .catch(error => reject(error))

      /* Last but not least, let's get the player's Gems and Shards */
      const player: IPlayer = await _.getPlayer(data.name, data.unique)

      resolve({gems: player.gem, shards: player.shard, unknownPackage, knownPackage})
   })
}

/**
 * 
 * @param data Is a known or an unknown package given in a JSON-form
 * @returns TransactionResponse
 */
export const purchase = (data: any) =>
{
   return new Promise<any>(async (resolve, reject) =>
   {
      resolve((data.known ? await KnownPurchase.create(data) : await UnknownPurchase.create(data)) !== null ? "Success" : "Failed")
   })
}

/**
 * 
 * @param data Holds data of the reward and whether it is Shard or Gem
 * @returns Boolean
 */
export const reward = (data: IReward) =>
{
   return new Promise<any>(async (resolve, reject) =>
   {
      resolve((await Player.updateOne({name: data.name}, { $inc: JSON.parse(`{"${data.type}":${data.amount}}`) })).ok >= 1)
   })
}

/**
 * 
 * @param data Holds data of the reward, this is always of type Immortal Point
 * @returns Boolean
 */
export const point = (data: IReward) =>
{
   return new Promise<any>(async (resolve, reject) =>
   {
      resolve((await Player.updateOne({name: data.name}, { $inc: { point: data.amount } })).ok >= 1)
   })
}