import {Feed} from "feed";
import {get as getPosts} from "./posts.json"

export async function getFeed() {
    const feed = new Feed({
        title: "tilde.cz",
        author: {
            name: "placeholder",
            email: "kucernak.a@gmail.com",
            // link: ""
        },
        link: "https://tilde.cz/",
        id: "https://tilde.cz/",
        favicon: "https://tilde.cz/favicon.ico",
        feedLinks: {
            "rss": "https://tilde.cz/blog/rss.xml"
        },
        language: "en",

        copyright: "",
        // image: "",
        // description: "",
    })

    const {body: {posts}} = await getPosts()
    console.log(`posts`, posts)
    posts.forEach(post => {
        feed.addItem({
            title: post.title,
            id: `https://tilde.cz/blog/${post.slug}`,
            link: `https://tilde.cz/blog/${post.slug}`,
            description: post.description,
            date: new Date()
        })
    })

    return feed
}
