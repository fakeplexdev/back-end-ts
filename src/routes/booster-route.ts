import { Request, Response } from 'express'
import * as _ from '../controllers/booster-controller'
import Route, { Method } from './Route'

/** @category `Booster` */
class Booster extends Route
{
   constructor()
   {
      super('/booster')
      
      /* Registering events */
      this.registerEvent('/add', Method.POST, this.addBooster)
      this.registerEvent('/get', Method.GET, this.getBoosters)
   }

   /** @event Add */
   addBooster(req: Request, res: Response)
   {
      const { name, unique } = req.body
      _.addBooster(req.body)
      
      /* Response from controller */
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).json(error))
   }

   /** @event Get */
   getBoosters(req: Request, res: Response)
   {
      _.getBoosters()
      
      /* Response from controller */
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).json(error))
   }
}

export default new Booster()