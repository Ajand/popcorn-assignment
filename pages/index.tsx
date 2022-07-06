import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

import { Book } from "../lib/types";
import BookInput from "../components/BookInput";
import BookItem from "../components/BookItem";

const books: Book[] = [
  {
    id: "1",
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    publisher: "W.W.Norton",
  },
  {
    id: "2",
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    publisher: "W.W.Norton",
  },
  {
    id: "3",
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    publisher: "W.W.Norton",
  },
  {
    id: "4",
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    publisher: "W.W.Norton",
  },
  {
    id: "5",
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    publisher: "W.W.Norton",
  },
];

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
        {books.map((book) => (
          <BookItem book={book} key={book.id} />
        ))}
      </Box>
    </div>
  );
};

export default Home;
