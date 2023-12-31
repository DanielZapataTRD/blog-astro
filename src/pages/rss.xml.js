import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Daniel Zapata | Blog",
    description: "Mi viaje de aprendizaje de Astro",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.mdx")),
    customData: `<language>es-pe</language>`,
  });
}
