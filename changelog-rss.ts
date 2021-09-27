import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";
import { Language, minify } from "https://deno.land/x/minifier@v1.1.1/mod.ts";
import { Feed } from "https://cdn.skypack.dev/feed?dts";

const changelog = await Deno.readTextFile("./docs/changelog.md");

const posts = changelog.replace(/\r\n/g, "\n").split(/## /g);
posts.shift(); // remove everything above last release

const feed = new Feed({
	title: "Tivoli Cloud VR - Changelog",
	description: "Release notes",
	id: "https://docs.tivolicloud.com/changelog",
	link: "https://docs.tivolicloud.com/changelog",
	language: "en",
	image: "https://docs.tivolicloud.com/assets/favicon.png",
	copyright:
		"Copyright © " +
		new Date().getFullYear() +
		" Tivoli Cloud VR, Inc. All rights reserved.",
});

// https://github.com/Python-Markdown/markdown/blob/7cff3bd5af4a3ebea608b9fc7c48327d67147db0/markdown/extensions/toc.py#L26

const getSlugFromTitle = (title: string) =>
	title
		.replace(/[^\w\s-]/g, "")
		.toLowerCase()
		.trim()
		.replace(/[-\s]+/g, "-");

function getDateFromTitle(title: string) {
	title = title.toLowerCase();

	let month = -1;
	const months = "jan feb mar apr may jun jul aug sep oct nov dec".split(" ");
	for (const i in months) {
		if (title.includes(months[i])) {
			month = parseInt(i);
			break;
		}
	}
	if (month == -1) throw new Error("Month not found: " + title);

	const afterMonth = title.split(months[month])[1];

	const date = parseInt(afterMonth.match(/ ([0-9]{1,2})/)![1]);
	if (Number.isNaN(date)) throw new Error("Date not found: " + title);

	const year = parseInt(afterMonth.match(/ ([0-9]{4})/)![1]);
	if (Number.isNaN(year)) throw new Error("Year not found: " + title);

	return new Date(year, month, date, 0, 0, 0);
}

for (const post of posts) {
	const title = (post.match(/^([^]+?)\n/) ?? [])[1];
	const contentMd = (post.match(/\n([^]+?)$/) ?? [])[1].trim();
	const contentHtml = Marked.parse(contentMd).content;
	const contentHtmlMin = minify(Language.HTML, contentHtml);

	const slug = getSlugFromTitle(title);
	const date = getDateFromTitle(title);

	feed.addItem({
		title,
		id: slug,
		link: "https://docs.tivolicloud.com/changelog/#" + slug,
		content: contentHtmlMin,
		date,
	});
}

try {
	await Deno.mkdir("./public");
} catch (error) {}

await Deno.writeTextFile("./public/changelog.xml", feed.rss2());
