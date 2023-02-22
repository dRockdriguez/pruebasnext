import Header from "components/header";
import { Container } from "@nextui-org/react";
import Head from "next/head";
import Footer from "components/footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>xkcd</title>
        <meta name="description" content="xkcd"></meta>
      </Head>
      <Header></Header>
      <Container>
        <main>
          <div className="container">
            {children}
            <style jsx>{`
              .container {
                width: 60%;
                margin: 0 auto;
                text-align: center;
              }
            `}</style>
          </div>
        </main>
      </Container>
      <Footer></Footer>
    </>
  );
}
