import { Request, Response } from 'express'
import * as _ from '../controllers/bungee-controller'
import Route, { Method } from './Route'

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
      _.getMOTD().then(motd => res.json(motd))
   }
}

export default new Bungee()