import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const updates = await getCollection('updates');
  return rss({
    title: 'Raila Odinga Archive — Updates',
    description: 'Change log for the Raila Odinga reference site.',
    site: context.site ?? 'https://raila-odinga-static-site.example',
    items: updates
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
      .map((entry) => ({
        title: entry.data.title,
        description: entry.data.summary,
        pubDate: entry.data.date,
        link: `/updates/${entry.slug}/`
      }))
  });
}
