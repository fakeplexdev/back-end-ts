import { Request, Response } from 'express'
import * as _ from './bungee-controller'
import Route, { Method } from '../Route'

const DEFAULT_HEADLINE = "                &9&l&m   &8&l&m[ &r &6&lFakeplex&r &f&lGames&r &8&l&m ]&9&l&m   &r"

/** @category `Bungee` */
class Bungee extends Route
{
   constructor()
   {
      super('/bungee')
      
      /* Registering events */
      this.registerEvent('/motd', Method.GET, this.onMOTD)
   }

   /** @event MOTD */
   onMOTD(req: Request, res: Response)
   {
      /* Send back the MOTD for BungeeCord */
      _.getMOTD().then(motd => 
      {
         motd ? res.json(motd) : res.json({headline: DEFAULT_HEADLINE, messsage: "            Unable to read message"})
         //res.json(motd)
      })
   }
}

export default new Bungee()