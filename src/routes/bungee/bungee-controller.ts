import MOTD, { IMOTD } from './bungee-model'

const DEFAULT_HEADLINE = "                &9&l&m   &8&l&m[ &r &6&lFakeplex&r &f&lGames&r &8&l&m ]&9&l&m   &r"

/**
 * @returns The global MOTD calleds by BungeeCord
 */
export const getMOTD = () => 
{
   return new Promise<IMOTD | null>((resolve, reject) =>
   {
      MOTD.findOne().exec()

      .then(result => resolve(result))
      .catch(error => reject(error))
   })
}