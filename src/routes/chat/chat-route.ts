import { Request, Response } from 'express'
import Route, { Method } from '../Route'
import Filter from 'bad-words'

const filter: Filter = new Filter()

/** @category `Chat` */
class Chat extends Route
{
   constructor()
   {
      super('/chat')

      /* Registering events */
      this.registerEvent('/filter', Method.POST, this.onChat)
   }

   /** @event Chat */
   async onChat(req: Request, res: Response)
   {
      /* Send back the filtered chat message */
      res.json(filter.clean(req.body.message))
   }
}

export default new Chat()