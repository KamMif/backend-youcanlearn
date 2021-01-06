import {NextFunction, Request, Response} from 'express';
import axios, {Method} from "axios";
import fetch from 'node-fetch';

export const AxiosInstance = axios.create({
    timeout: 5000,
});

export function asyncMiddleware(fn: (req: Request, res: Response, next:NextFunction) => Promise<any>) {
    return async (req:Request, res:Response, next:NextFunction) => {
        try {
            await fn(req, res, next);
        } catch (err) {
            next(err);
        }
    };
}

export async function Requester<T>(url: string, method: Method, requestData: any, headers: any = {}):Promise<T> {
    try {
        const response = await AxiosInstance(url, {
            method,
            headers,
            data: requestData,
        });
        console.log({response});
        return response.data;
    } catch (error) {
        console.log({error});
        return error;
    }
}

export async function getLinkPreview(link: string) {
    try {
        const resp = await fetch(link);
        return await resp.text();
    } catch(error) {
        console.log(error);
    }
}

export function isYoutubeLink(url: string): boolean {
    if (!url) return false;
    const splitUrl = url.split('.');
    return splitUrl[1] === 'youtube';
}

export function getYoutubeVideoId(url: string): string | null {
    const parsed = url.match(
        /^.*((m\.)?youtu\.be\/|vi?\/|u\/\w\/|embed\/|\?vi?=|\&vi?=)([^#\&\?]*).*/
    );

    if (parsed && parsed[3]) {
        return parsed[3];
    } else {
        return null;
    }
}

export function getYoutubePreviewImage(id: string) {
    if (!id) return null;
    return `https://img.youtube.com/vi/${id}/0.jpg`;
}
