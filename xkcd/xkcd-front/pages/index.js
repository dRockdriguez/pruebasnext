import fs from "fs/promises";
import { Text, Card, Image } from "@nextui-org/react";
import Link from "next/link";
import Layout from "components/layout";
import { useI18n } from "context/i18n";

export default function Home({ comics }) {
  const { t } = useI18n();

  return (
    <>
      <Layout>
        <Text
          css={{
            mt: "25px",
            textAlign: "center",
          }}
          h2
        >
          {t("latestComics")}
        </Text>
        <div className="container">
          {comics.map((comic) => (
            <Card
              key={comic.id}
              isPressable
              isHoverable
              variant="flat"
              css={{
                borderRadius: "0px",
                p: "1px",
                display: "flex",
                flex: "1 0 auto",
                h: "fit-content",
                width: `${(comic.dimensions.width + 50) / 2}px`,
              }}
            >
              <Card.Body>
                <Link href={`/comic/${comic.id}`}>
                  <Text h4>{comic.title}</Text>
                  <Image
                    src={comic.img}
                    alt={comic.alt}
                    width={comic.dimensions.width / 2}
                    height={comic.dimensions.height / 2}
                  />
                </Link>
              </Card.Body>
            </Card>
          ))}
          <style jsx>{`
            .container {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              gap: 10px;
              width: 60%;
              margin: 0 auto;
            }
          `}</style>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const files = await fs.readdir("./comics");
  const latestComics = files.slice(-9, files.length).reverse();

  const readFiles = latestComics.map(async (file) => {
    const content = await fs.readFile(`./comics/${file}`, "utf-8");

    return JSON.parse(content);
  });

  const comics = await Promise.all(readFiles);

  return {
    props: {
      comics,
    },
  };
}
