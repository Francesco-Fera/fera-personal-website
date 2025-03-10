export default async function sitemap() {
  const routes = [""];

  return routes.map((route) => ({
    url: `https://francescofera.com${route}`,
    lastModified: new Date(),
  }));
}
