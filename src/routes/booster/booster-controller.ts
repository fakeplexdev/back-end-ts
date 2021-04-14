import Booster, { IBooster } from './booster-model'

/**
 * 
 * @param body The params that are given from the Spigot server
 * @returns A newly created {@linkcode IBooster}
 */
export const addBooster = (body: any) => 
{
   return new Promise<IBooster>(async (resolve, reject) =>
   {
      /* We assign all json values to constants */
		const boosterGroup = body.boosterGroup
		const activatorUUID = body.activatorUUID
		const activatorName = body.activatorName
		const duration = body.duration

		let startTime = new Date().getTime()

      /* Before we add the booster, we want to check if there is one already active*/
      await Booster.find({boosterGroup}).exec()
      .then(result => result.forEach(booster =>
      {
         /* Calculate duration before activation */
         startTime += booster.startTime > new Date().getTime() ? 
         booster.duration * 60 * 1000 : Math.max(0, (booster.startTime + (booster.duration * 60 * 1000)) - startTime)
      }))
      .catch(error => reject(error))

      /* Then we insert the new booster */
      resolve(await Booster.create({ boosterGroup, activatorUUID, activatorName, startTime, duration }))
   })
}

/**
 * @returns All boosters found in the database of type {@linkcode IBooster}
 */
export const getBoosters = () => 
{
   return new Promise<IBooster[]>(async (resolve, reject) =>
   {
      const list: IBooster[] = []

       /* First let's get all known packages */
      await Booster.find().exec()
      .then(boosters => boosters.forEach(booster => list.push(booster)))
      .catch(error => reject(error))

      resolve(list)
   })
}