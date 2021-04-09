import MOTD, { IMOTD } from '../models/bungee-model'

/**
 * @returns The global MOTD calleds by BungeeCord
 */
export const getMOTD = () => 
{
   return new Promise<IMOTD>((resolve, reject) =>
   {
      MOTD.findOne().exec()

      .then(async result =>  result != null ? resolve(result) : null)
      .catch(error => reject(error))
   })
}