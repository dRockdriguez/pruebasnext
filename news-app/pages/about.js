import Head from "next/head";
import PageLayout from "../components/page.layout";

import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <PageLayout title="About">
      <Head>
        <title>📰About</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>hola</h1>
        </main>
      </div>
    </PageLayout>
  );
}
