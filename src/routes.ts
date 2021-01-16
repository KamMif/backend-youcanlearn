import {Request, Response} from "express";
import {previewRoutes} from "./previewer/routes";
import { connections } from './database/connection';

export const routes = (app: any) => {
    previewRoutes(app);
    app.get(
        '/ping',
        (req: Request, res: Response) => {
            return res.status(200).send('pong');
        },
    );
    app.get('/test-bd', async (req: Request, res: Response) => {
      const { env } = process;
      try {
        const { rows } = await connections.query('SELECT * FROM users')
        return res.status(200).json({env});
      } catch (error) {
        return res.status(400).send(`Error: ${error}`)
      }

    })
}
