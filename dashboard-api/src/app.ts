import express, { Express } from 'express';
import { Server } from 'http';

export class App {
	app: Express;
	port: number;
	server: Server;

	constructor() {
		this.app = express();
		this.port = 8000;
	}

	useRoutes() {
		this.app.use('/users')
	}

	public async init() {
		this.useRoutes();
		this.server = this.app.listen(this.port, () => {
			console.log(`Server start http://localhost:${this.port}`);
		})
	}
}
