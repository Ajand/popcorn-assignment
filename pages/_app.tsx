import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

import { ReadingListProvider } from "../lib/contexts/ReadingList";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Popcorn Assignment</title>
        <meta
          name="description"
          content="This is an assignment that I have made for popcorn dao."
        />
        <link rel="icon" href="https://popcorndao.finance/favicon.ico" />
      </Head>
      <ChakraProvider>
        <ReadingListProvider>
          <Component {...pageProps} />
        </ReadingListProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
