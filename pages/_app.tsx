import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { ReadingListProvider } from "../lib/contexts/ReadingList";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ReadingListProvider>
        <Component {...pageProps} />
      </ReadingListProvider>
    </ChakraProvider>
  );
}

export default MyApp;
