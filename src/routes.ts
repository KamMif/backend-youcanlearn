import {Request, Response} from "express";
import {previewRoutes} from "./previewer/routes";

export const routes = (app: any) => {
    previewRoutes(app);
    app.get(
        '/ping',
        (req: Request, res: Response) => {
            return res.status(200).send('pong');
        },
    );
}
