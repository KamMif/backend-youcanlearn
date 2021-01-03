import {getYoutubeData, getYoutubePreviewImage, getYoutubeVideoId, isYoutubeLink, Requester} from "../utils";
import cheerio from 'cheerio';

export async function linkPreviewService(link: string) {
    if (isYoutubeLink(link)) {
        const id = getYoutubeVideoId(link);
        const image = getYoutubePreviewImage(id);
        // bug - axios cannot get youtube data
        const body = await getYoutubeData(link);
        const dom = cheerio.load(body);
        const title = dom("meta[property='og:title']").attr('content');
        const description = dom("meta[property='og:description']").attr('content');
        const type = dom("meta[property='og:type']").attr('content');
        return {
            code: 200,
            data: {title, description, type, image},
        }
    }
    const resp = await Requester(link, 'GET', {});
    console.log({resp});
    const dom = cheerio.load(resp);
    const title = dom("meta[property='og:title']").attr('content');
    const description = dom("meta[property='og:description']").attr('content');
    const type = dom("meta[property='og:type']").attr('content');
    const image = dom("meta[property='og:image']").attr('content');

    return {
        code: 200,
        data: {title, description, type, image},
    }
}
