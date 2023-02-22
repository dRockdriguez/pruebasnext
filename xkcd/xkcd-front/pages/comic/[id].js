import { Container, Text, Pagination } from "@nextui-org/react";
import fs from "fs/promises";
import Image from "next/image";
import { basename } from "path";
import { useRouter } from "next/navigation";
import Layout from "components/layout";

export default function Comic({
  img,
  alt,
  title,
  dimensions,
  pages,
  page,
  files,
}) {
  const router = useRouter();

  const changePage = async (pageNumber) => {
    const file = files[pageNumber - 1];
    const id = basename(file, ".json");

    router.push(`/comic/${id}`);
  };

  return (
    <Layout>
      <Text
        css={{
          mt: "25px",
          textAlign: "center",
        }}
        h2
      >
        {title}
      </Text>
      <div className="imageContainer">
        <Image
          alt={alt}
          src={img}
          width={dimensions.width}
          height={dimensions.height}
          style={{ maxHeight: "500px" }}
        />
        <p className="text">
          <small>{alt}</small>
        </p>
      </div>
      <style jsx>{`
        .imageContainer {
          display: flex;
          flex-flow: column wrap;
          place-items: center;
          justify-content: center;
          min-height: 600px;
        }
        .text {
          margin-top: 15px;
        }
      `}</style>
      <div className="pagination">
        <Pagination total={pages} initialPage={page} onChange={changePage} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths({ locales }) {
  const files = await fs.readdir("./comics");

  let paths = [];

  locales.forEach((locale) => {
    paths = paths.concat(
      files.map((file) => {
        const id = basename(file, ".json");
        return {
          params: { id },
          locale,
        };
      })
    );
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const files = await fs.readdir("./comics");
  const page = files.findIndex((file) => {
    const idFile = basename(file, ".json");
    return idFile === id;
  });

  const content = await fs.readFile(`./comics/${id}.json`, "utf-8");
  const comic = JSON.parse(content);

  const idNumber = +id;
  const nextId = idNumber + 1;
  const prevId = idNumber - 1;

  const [prev, next] = await Promise.allSettled([
    fs.stat(`./comics/${prevId}.json`),
    fs.stat(`./comics/${nextId}.json`),
  ]);

  const hasPrev = prev.status === "fulfilled";
  const hasNext = next.status === "fulfilled";

  return {
    props: {
      ...comic,
      hasPrev,
      hasNext,
      nextId,
      prevId,
      pages: files.length,
      page,
      files,
    },
  };
}
