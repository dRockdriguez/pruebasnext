import { Text } from "@nextui-org/react";
import Layout from "components/layout";
import searchComics from "../repositories/search";
import Link from "next/link";

export default function Search({ results, query }) {
  return (
    <Layout>
      <Text
        css={{
          mt: "25px",
          textAlign: "center",
        }}
        h2
      >
        {results.length} results for {query}
      </Text>

      {results.map((result) => {
        return (
          <Link href={`/comic/${result.id}`} key={result.id}>
            <Text
              css={{
                mt: "25px",
                textAlign: "center",
              }}
              h4
            >
              {result.title}
            </Text>
          </Link>
        );
      })}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { q = "" } = query;

  const comics = await searchComics(q);

  return {
    props: {
      query: q,
      results: comics,
    },
  };
}
