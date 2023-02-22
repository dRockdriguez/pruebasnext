// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs/promises";

const CACHE = {};
const USE_CACHE = Boolean(process.env.USE_CACHE === "true");

export default async function searchComics(search = "") {
  if (!USE_CACHE || !CACHE[search]) {
    const comics = await fs.readFile("./allComics/index.json", "utf-8");
    const comicsParsed = JSON.parse(comics);

    const comicsFound = comicsParsed.filter((comic) => {
      return (
        comic.title.toLowerCase().includes(search.toLowerCase()) ||
        comic.safe_title.toLowerCase().includes(search.toLowerCase()) ||
        comic.alt.toLowerCase().includes(search.toLowerCase())
      );
    });

    CACHE[search] = comicsFound;

    return comicsFound;
  }

  return CACHE[search];
}
