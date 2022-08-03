// thanks to https://scottspence.com/posts/make-an-rss-feed-with-sveltekit
import pcast from '$lib/data/podcast';

export async function get() {

	const podcast = await pcast;
	const {title, subtitle, summary, image, episodes } = podcast;
	const body = xml(title, subtitle, summary, image, episodes)



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
	(title, subtitle, summary, image, episodes) =>
			`<rss xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:rawvoice="http://www.rawvoice.com/rawvoiceRssModule/" version="2.0">
  <channel>
    <title>${title}</title>
    <description>${summary}</description>
    <image>
            <url>${image.url}</url>
            <title>${image.title}</title>
            <link>${image.link}</link>
        </image>
    ${episodes.map(
			episode => 
				`<item>
					<title>${episode.title}</title>
					<description>${episode.description}</description>
				</item>`
			).join('')}
  </channel>
</rss>`

