import { Request, Response } from 'express'
import { IKit } from './kit-model'
import * as _ from './kit-controller'
import Route, { Method } from '../Route'

/** @category `Kit` */
class Kit extends Route
{
   constructor()
   {
      super('/kit')
      
      /* Registering events */
      this.registerEvent('/', Method.POST, this.onLogin)
      this.registerEvent('/save', Method.POST, this.onSave)
   } 

   /** @event Login */
   onLogin(req: Request, res: Response)
   {  
      /* Receive name and uuid from json */
      const { unique } = req.body
      _.getProgression(unique)

      /* Response from controller */
      .then(kitProgression => res.status(200).json(kitProgression))
      .catch(error => res.status(500).json(error))
      console.log(`[Kit] fetched kit data: ${unique}`)
   }

   /** @event Save */
   onSave(req: Request, res: Response)
   {  
      /* Receive name and uuid from json */
      const kit: IKit = req.body
      _.saveKit(kit)

      /* Response from controller */
      .then(kit => res.status(200).json(kit))
      .catch(error => res.status(500).json(error))
      console.log(`[Kit] saved kit data: ${kit.unique}`)
   }
}

export default new Kit()