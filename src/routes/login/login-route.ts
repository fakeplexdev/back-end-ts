import { Request, Response } from 'express'
import * as _ from './login-controller'
import Route, { Method } from '../Route'

/** @category `Account` */
class Login extends Route
{
   constructor()
   {
      super('/login')
      
      /* Registering events */
      this.registerEvent('/', Method.POST, this.onLogin)
   } 

   /** @event Login */
   onLogin(req: Request, res: Response)
   {  
      /* Receive name and uuid from json */
      const { name, unique } = req.body
      _.getPlayer(name, unique)
      
      /* Response from controller */
      .then(player => res.status(200).json([player, {id: player.id}]))
      .catch(error => res.status(500).json(error))
      console.log(`[Login] fetched player data: ${name}`)
   }
}

export default new Login()