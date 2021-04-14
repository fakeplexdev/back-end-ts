import { Request, Response } from 'express'
import * as _ from './donation-controller'
import Route, { Method } from '../Route'

/** @category `Account` */
class Donation extends Route
{
   constructor()
   {
      super('/donation')
      
      /* Registering events */
      this.registerEvent('/', Method.POST, this.onLogin)
      this.registerEvent('/purchase', Method.POST, this.onPurchase)
      this.registerEvent('/reward', Method.POST, this.onReward)
   }

   /** @event Login */
   onLogin(req: Request, res: Response)
   {
      /* Send JSON */
      _.getPackages(req.body)
      
      /* Response from controller */
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).json(error))
   }

   /** @event Purchase */
   onPurchase(req: Request, res: Response)
   {
      /* Send JSON */
      _.purchase(req.body)
      
      /* Response from controller */
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).json(error))
   }

   /** @event Reward */
   onReward(req: Request, res: Response)
   {
      /* Send JSON */
      _.reward(req.body)
      
      /* Response from controller */
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).json(error))
   }
}

export default new Donation()