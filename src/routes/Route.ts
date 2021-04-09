import express, { Router } from 'express'

/**
 * @description A simple class which holds the path
 * of the given page, which later gets used in {@linkcode routes} 
 */
 class Route
 {
    public path: string
    public router: Router
 
    constructor(path: string)
    {
       this.path = path
       this.router = express.Router()
    }
 
    registerEvent(path: string, method: Method, call: any)
    {
       method === Method.GET ?
       
       this.router.get(path, (req, res) => call(req, res)) 
       : 
       this.router.post(path, (req, res) => call(req, res))
    }
 }
 
 enum Method { GET, POST }
 
 export { Method }
 export default Route