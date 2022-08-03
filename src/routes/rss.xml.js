//https://scottspence.com/posts/make-an-rss-feed-with-sveltekit
import pcast from '$lib/data/podcast';

export async function get() {

	const podcast = await pcast;
	const body = xml(podcast)

	console.log('podcast');



	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml',
	}
	return {
		headers,
		body
	}
}

const xml =
	podcast => `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>${podcast.title}</title>
    <description>A blog built with SvelteKit about tech and stuff!</description>
  </channel>
</rss>`

