import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import { Box, Flex, VStack } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import query from "../lib/query";

import { Book } from "../lib/types";
import BookInput from "../components/BookInput";
import BookItem from "../components/BookItem";

const Home: NextPage = () => {
  const [searchString, setSearchStr] = useState("");
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    // TODO; handling no search string is buggy
    if (searchString) {
      query(searchString)
        .then((results: Book[]) => {
          console.log(results);
          setBooks(results);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setBooks([]);
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
      <Box className={styles.main} width="100vw" height="100vh">
        <Flex align="center" justify="center" height="100%">
          <Box
            className={styles.searchContainer}
            maxWidth="600px"
            width="90%"
            display="inline-block"
            borderRadius="lg"
          >
            <BookInput value={searchString} setValue={setSearchStr} />
            <Box className={books.length ? styles.resultContainer : ""}>
              <VStack spacing={0}>
                {books.map((book) => (
                  <BookItem book={book} key={book.id} />
                ))}
              </VStack>
            </Box>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Home;
