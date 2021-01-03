import {Request, Response} from 'express';
import {linkPreviewService} from "./service";

export async function retrieve(req: Request, res: Response) {
    const { link } = req.body;
    if (!link) {
        return res.status(403).send('empty field `link`');
    }
    const { code, data } = await linkPreviewService(link);
    return res.status(code).send(data);
}
