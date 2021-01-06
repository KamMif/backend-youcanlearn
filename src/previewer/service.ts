import {
    getLinkPreview,
} from '../utils';
import cheerio from 'cheerio';

export async function linkPreviewService(link: string) {
    const body = await getLinkPreview(link);
    const dom = cheerio.load(body);
    const title = dom("meta[property='og:title']").attr('content');
    const description = dom("meta[property='og:description']").attr('content');
    const type = dom("meta[property='og:type']").attr('content');
    const image = dom("meta[property='og:image']").attr('content');
    return {
        code: 200,
        data: {title, description, type, image},
    }
}
