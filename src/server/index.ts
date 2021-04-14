import express, { Router } from 'express'
import helmet from 'helmet'
import * as routes from './routes'

export class Server 
{
	protected app: express.Application
	protected port: number = parseInt(process.env.PORT!) || 3000

	constructor()
	{
		this.app = express()
		this.app.use(express.urlencoded({ extended: true }))
		this.app.use(express.json())
		this.app.use(helmet())
	}

	/* Sets all routes used in the back-end */
	public set_routes = () => 
	{
		const router: Router = express.Router()

		/** Router Initializer */
		Object.entries(routes).forEach(([name, route]) => router.use(route.path, route.router))
		this.app.use('/', router)
	}

	public run_server = () => this.app.listen(this.port, () => console.log(`[Server] Back-end is running on port: ${this.port}`))
}
