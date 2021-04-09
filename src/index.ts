/** 
 * 
 * @author U8Y (Jae)
 * @license MIT
 * @version 1.0
 * 
 * @description A back-end for your server written in TypeScript!
 * This back-end handles the 'heavy' part of the database, so your
 * server can run smoothly.
 * 
 * This back-end currently handles:
 *   - Booster (/amplifier)
 *   - BungeeCord MOTD updater
 *   - Login/Logout of player
 *   - Kit Progression logic
 *   - Donation & Cosmetic items
 *   - Chat-filter in Lobby & Games
 * 
 * @todo Add all other modules
 * 
 * If you are smart enough, you will know exactly
 * how to integrate this code in your Java project.
 */
import { Server } from './server'

/* Create server instance */
const server = new Server()
server.set_routes()
server.run_server()