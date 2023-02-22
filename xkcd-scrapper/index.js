import fs from "fs-extra";
import axios from "axios";
import { getImageSize } from "./getImageSize.js";

const INITIAL_ID = 2500;
const MAX = 100;
const URL = "https://xkcd.com/#id/info.0.json";

const DIR = "./comics";

if (!fs.existsSync(DIR)) {
  fs.mkdir(DIR, (err) => {
    if (err) {
      return console.error("No se ha podido crear el directorio");
    }
    return console.log("Directorio creado correctamente");
  });
}

const indexFile = [];

for (let id = INITIAL_ID; id < INITIAL_ID + MAX; id++) {
  const url = URL.replace("#id", id);

  try {
    const { data } = await axios.get(url);
    const { num, news, transcript, img, ...restOfComic } = data;
    const dimensions = await getImageSize({ url: img });
    const comic = {
      id,
      img,
      dimensions,
      ...restOfComic,
    };

    await fs.writeJSON(`./comics/${id}.json`, comic);
    indexFile.push(comic);

    console.log(`Comic ${id} descargado`);
  } catch {
    console.error(`Ha ocurrido un error con el comic ${id}`);
  }

  await fs.writeJSON(`./comics/index.json`, indexFile);

}
