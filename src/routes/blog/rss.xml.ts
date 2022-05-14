import {getFeed} from "./_feed";

export async function get() {
    const feed = await getFeed()
    const headers = {
        'Cache-Control': `max-age=0, s-max-age=${600}`,
        'Content-Type': 'application/xml',
    };
    return {
        body: feed.rss2(),
        headers,
    };
}
