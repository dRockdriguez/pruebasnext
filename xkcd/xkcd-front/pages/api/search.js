import searchComics from "../../repositories/search";

export default async function handler(req, res) {
  const search = req.query.q;

  const comics = await searchComics(search);

  return res.status(200).json(comics);
}
