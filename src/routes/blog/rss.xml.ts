import {get as getPosts} from "./posts.json"
import type {Post} from "./posts.json";

export async function get() {
    const {body: {posts}} = await getPosts()
    const headers = {
        'Cache-Control': `max-age=0, s-max-age=${600}`,
        'Content-Type': 'application/xml',
    };
    // language=XML
    const body = `
        <rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
            <channel>
                <title>tilde.cz</title>
                <link>https://tilde.cz/</link>
                <description>undefined</description>
                <lastBuildDate>Sat, 14 May 2022 21:53:44 GMT</lastBuildDate>
                <docs>https://validator.w3.org/feed/docs/rss2.html</docs>
                <generator>https://github.com/jpmonette/feed</generator>
                <language>en</language>
                <atom:link href="https://tilde.cz/blog/rss.xml" rel="self" type="application/rss+xml"/>
                ${posts.map(x => genItem(x))}
            </channel>
        </rss>`
    return {
        body: body,
        headers
    };
}

function genItem(post: Post) {
    // language=XML
    return `
        <item>
            <title>
                <![CDATA[ ${post.title} ]]>
            </title>
            <link>https://tilde.cz/blog/${post.slug}</link>
            <guid>https://tilde.cz/blog/${post.slug}</guid>
            <pubDate>Sat, 14 May 2022 21:53:44 GMT</pubDate>
            <description>
                <![CDATA[ ${post.description} ]]>
            </description>
        </item>`
    // TODO: Fix date
}
