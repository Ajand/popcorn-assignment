import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

import BookInput from "../components/BookInput";

const Home: NextPage = () => {
  const [searchString, setSearchStr] = useState("");

  return (
    <div>
      <Head>
        <title>Popcorn Assignment</title>
        <meta
          name="description"
          content="This is an assignment that I have made for popcorn dao."
        />
        <link rel="icon" href="https://popcorndao.finance/favicon.ico" />
      </Head>
      <Box>
        <BookInput value={searchString} setValue={setSearchStr} />
      </Box>
    </div>
  );
};

export default Home;
