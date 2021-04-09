import Player, { IPlayer } from '../models/player-model'

export const getPlayer = (name: string, unique: string) => 
{
   /**
    * 
    * @description Whenever a player logs in, we don't check whether he
    * has the same name as when he last logged in. Whenever a new player
    * logs in, his name and uuid gets stored in the database. Now when
    * a player leaves, we update his name as well because he may have
    * changed it with Mojang. Also we update the `lastLogin` field.
    *
    * @todo `name` paramater gives NullPointerException in Java, fix it.
    */
   return new Promise<IPlayer>((resolve, reject) =>
   {
      Player.findOneAndUpdate(
      { unique }, { lastLogin: Date.now() }, { useFindAndModify: false, returnOriginal: false }).exec()

      .then(async result => resolve
      (
         result == null ? 
         await Player.create({unique, name}) : 
         result
      ))

      .catch(error => reject(error))
   })
}