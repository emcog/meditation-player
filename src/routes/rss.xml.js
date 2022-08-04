// based on https://scottspence.com/posts/make-an-rss-feed-with-sveltekit
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
    <link>${about.link}</link>
    <image>
			<url>${image.url}</url>
			<title>${image.title}</title>
			<link>${about.link}</link>
		</image>
		<description>${description}</description>
		<language>${about.language}</language>
		<copyright>${about.copyright}</copyright>
		<atom:link href="${about.feedLink}" rel="self" type="application/rss+xml"/>
		<lastBuildDate>${about.buildDate}</lastBuildDate>
		<itunes:author>${about.author}</itunes:author>
		<itunes:summary>${about.description}</itunes:summary>
		<itunes:type>serial</itunes:type>
		<itunes:owner>
			<itunes:name> 
				${about.owner.length === 0 ? about.author : about.owner }
			</itunes:name>
			<itunes:email>${about.email}</itunes:email>
		</itunes:owner>
		<itunes:explicit>${about.explicit}</itunes:explicit>
		<itunes:keywords>${about.keywords}</itunes:keywords>
		<itunes:image href="${image.url}"/>
		<rawvoice:rating>${about.rawvoice.rating}</rawvoice:rating>
		<rawvoice:location>${about.rawvoice.location}</rawvoice:location>
		<rawvoice:frequency>${about.rawvoice.frequency}</rawvoice:frequency>
		<itunes:category text="${about.category}">
			${about.subCategory.length === 0 ? null : `<itunes:category text="${about.subCategory}"/>`}
			${about.moreCategories.map(secondaryCategory =>
				`<itunes:category><itunes:category text="${secondaryCategory.category}"/>`
				`<itunes:category><itunes:category text="${secondaryCategory.subCategory}"/>`
			// secondaryCategory.subCategory
			)
				.join('')}
			<!--			todo replace with each or map-->

		</itunes:category>
		<pubDate>${about.pubDate}</pubDate>
		
		
    ${episodes.map((
			e, index) => 
				`<item>
					${about.serial ? `<itunes:episode>${index + 1}</itunes:episode>` : null }
					<title>${e.title}</title>
					<link>${e.url}</link>
					<pubDate>${e.pubDate}</pubDate>
					<description>${e.description}</description>
					<enclosure url="${e.url}" length="${e.length}" type="audio/mpeg"/>
					<guid></guid>
					<itunes:duration>${e.duration}</itunes:duration>
					<itunes:summary>${e.description}</itunes:summary>
					<itunes:image href="${image.url}"/>
					<itunes:keywords>${e.keywords ? e.keywords : about.keywords}</itunes:keywords>
					<itunes:explicit>${about.explicit}</itunes:explicit>
				</item>`
			).join('')}
  </channel>
</rss>`