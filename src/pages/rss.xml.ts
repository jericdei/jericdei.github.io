import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { getCollection } from 'astro:content'
import { site } from '@/data/site'

export async function GET(context: APIContext) {
    const posts = (
        await getCollection('posts', ({ data }) => Boolean(data.publishedDate))
    ).sort(
        (a, b) =>
            b.data.publishedDate!.getTime() - a.data.publishedDate!.getTime(),
    )

    return rss({
        title: `${site.name} — Writing`,
        description:
            'Notes and tutorials on web development, Docker, Laravel and more.',
        site: context.site ?? site.url,
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.publishedDate!,
            link: `/blog/${post.slug}/`,
            categories: post.data.tags,
        })),
        customData: '<language>en</language>',
    })
}
