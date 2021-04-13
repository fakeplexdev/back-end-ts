/** 
 * 
 * @author U8Y (Jae)
 * @license MIT
 * @version 1.0
 * 
 * @description A back-end for your server written in TypeScript!
 * This back-end handles the 'heavy' part of the database, so your
 * server can run smoothly.
 */
import { Server } from './server'

/* Create server instance */
const server = new Server()
server.set_routes()
server.run_server()