import Kit, { IKit } from '../models/kit-model'

/**
 * 
 * @param unique The unique ID of the player
 * @returns The player's data of Kit Progression
 */
export const getProgression = (unique: string) => 
{
   return new Promise<any>(async (resolve, reject) =>
   {
      const kitLevel = new Map()
      const kitXP: Map<string,any> = new Map()
      const kitUpgradeLevel: Map<string,any> = new Map()
      const kitDefaultType: Map<string,any> = new Map()

      /* Fetch all kits and their progression */
      await Kit.find({ unique }).exec()
      .then(result => result.forEach(kit => 
      {
         kitLevel.set(kit.kitId, kit.level)
         kitXP.set(kit.kitId, kit.xp)
         kitUpgradeLevel.set(kit.kitId, kit.upgradeLevel)
         kitDefaultType.set(kit.kitId, kit.defaultType)
      }
      )).catch(error => reject(error))
      
      /* Return all kits and their progression */
      resolve({unique, currentKit: null, kitLevel: [...kitLevel], kitXP: [...kitXP],
               kitUpgradeLevel: [...kitUpgradeLevel], kitDefaultType: [...kitDefaultType]})
   })
}

/**
 * 
 * @param kit The selected kit that needs to be saved
 * @returns The Kit object once it has been processed
 */
export const saveKit = (kit: IKit) =>
{
   return new Promise<any>(async (resolve, reject) =>
   {
      resolve(await Kit.findOneAndUpdate({ unique: kit.unique }, kit, { upsert: true, useFindAndModify: false })
      .catch(error => reject(error)))
   })
}