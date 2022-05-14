interface Post {
    title: string
    slug: string
    description: string
    date: string
}

export async function get() {
    const posts = await Promise.all(
        Object.entries(import.meta.glob('./*.md')).map(async ([path, page]) => {
            const { metadata } = await page();
            const slug = path.split('/').pop().split('.').shift();
            return { ...metadata, slug };
        })
    ) as Post[]

    console.log(posts)

    // TODO: Fix sorting by date
    //posts.sort((a, b) => (a.published > b.published ? -1 : 1));

    return {
        status: 200,
        body: { posts },
    };
}
