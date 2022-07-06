import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import query from "../lib/query";

import { Book } from "../lib/types";
import BookInput from "../components/BookInput";
import BookItem from "../components/BookItem";

const Home: NextPage = () => {
  const [searchString, setSearchStr] = useState("");
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    if (searchString) {
      query(searchString)
        .then((results: Book[]) => {
          console.log(results);
          setBooks(results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchString]);

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
