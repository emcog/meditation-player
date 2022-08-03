// thanks to https://scottspence.com/posts/make-an-rss-feed-with-sveltekit
import pcast from '$lib/data/podcast';

export async function get() {

	const podcast = await pcast;
	const { title, description, image, about, episodes } = podcast;
	const body = xml(title, description, image, about, episodes)



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
	(title, description, image, about, episodes) =>
			`<rss xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:rawvoice="http://www.rawvoice.com/rawvoiceRssModule/" version="2.0">
  <channel>
    <title>${title}</title>
    <link></link>
    <image>
			<url>${image.url}</url>
			<title>${image.title}</title>
			<link>${image.link}</link>
		</image>
		<description>${description}</description>
		<language>${}</language>
		<copyright>${}</copyright>
		<atom:link href="${}" rel="self" type="application/rss+xml"/>
		<lastBuildDate>${}</lastBuildDate>
		<itunes:author>${}</itunes:author>
		<itunes:summary>${}</itunes:summary>
		<itunes:owner>
			<itunes:name></itunes:name>
			<itunes:email></itunes:email>
		</itunes:owner>
		<itunes:explicit></itunes:explicit>
		<itunes:keywords></itunes:keywords>
		<itunes:image href=""/>
		<rawvoice:rating></rawvoice:rating>
		<rawvoice:location></rawvoice:location>
		<rawvoice:frequency></rawvoice:frequency>
		<itunes:category text=""/>
		<pubDate></pubDate>
		
			
			
			
		
		
		
		
    ${episodes.map(
			episode => 
				`<item>
					<title>${episode.title}</title>
					<description>${episode.description}</description>
					<title></title>
					<link></link>
					<pubDate></pubDate>
					<description></description>
					<enclosure url="" length="" type="audio/mpeg"/>
					<guid></guid>
					<itunes:duration></itunes:duration>
					<itunes:summary></itunes:summary>
					<itunes:image href=""/>
					<itunes:keywords></itunes:keywords>
					<itunes:explicit></itunes:explicit>
				</item>`
			).join('')}
  </channel>
</rss>`

