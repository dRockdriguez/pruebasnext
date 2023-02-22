import styles from "../styles/Home.module.css";
import PageLayout from "../components/page.layout";
import { getNews } from "../repositories/news.repository";
import Image from "next/image";

export default function Home({ articles }) {
  return (
    <>
      <PageLayout title="Home">
        <div className={styles.container}>
          <main className={styles.main}>
            {articles.length === 0 && <p>No hay artículos</p>}
            {articles.length > 0 &&
              articles.map((article, index) => (
                <article key={index}>
                  <div className="image">
                  <Image
                    alt={`Image for the article ${article.title}`}
                    src={article.urlToImage}
                    fill={true}
                  ></Image>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                </article>
              ))}
          </main>
        </div>
      </PageLayout>

      <style jsx>
        {`
            .image {
                position: relative;
                margin: 0 auto;
                max-width:80%;
                max-height: 300px;
                width: 300px;
                height:300px;
            }
        `}
      </style>
    </>
  );
}

export async function getStaticProps() {
  const response = await getNews();
  const { articles } = await response.json();
  return { props: { articles } };
}

/*export async function getServerSideProps() {
  const response = await getNews();
  const { articles } = await response.json();
  return { props: { articles } };
}*/
