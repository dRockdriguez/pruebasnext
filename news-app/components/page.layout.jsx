import Head from "next/head";
import Link from "next/link";

function PageLayout({ children, title = "📰NewsApp" }) {
  return (
    <>
      <Head>
        <title>📰{title}</title>
        <meta name="description" content="The best app to read news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
      <Link href="/">Home</Link>

        <Link href="/about">About</Link>
      </nav>
      {children}
      <style jsx>
        {`
            nav {
                display: flex;
                justify-content: space-between;
                padding: 20px;
            }
        `}
      </style>
    </>
  );
}

export default PageLayout;
