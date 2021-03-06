import type { NextPage } from "next";
import { Box, Flex, VStack } from "@chakra-ui/react";
import styles from "../styles/Pages.module.css";

import { useBooks } from "../lib/hooks";

import BookInput from "../components/BookInput";
import BookItem from "../components/BookItem";
import BookItemPlaceholder from "../components/BookItemPlaceholder";
import SearchHeader from "../components/SearchHeader";

const Home: NextPage = () => {
  const { searchString, setSearchStr, books, loading } = useBooks();

  return (
    <div>
      <Box className={styles.main} width="100vw" height="100vh">
        <Flex align="center" justify="center" height="100%">
          <Box maxWidth="600px" width="90%" display="inline-block">
            <SearchHeader />
            <Box className={styles.container} borderRadius="lg">
              <BookInput value={searchString} setValue={setSearchStr} />
              <Box
                className={
                  books.length || loading ? styles.list : ""
                }
              >
                <VStack spacing={0} maxH="calc(95vh - 150px)" overflow="auto">
                  {books.length
                    ? books.map((book) => (
                        <BookItem book={book} key={book.id} />
                      ))
                    : loading
                    ? [1, 2, 3, 4, 5].map((item) => (
                        <BookItemPlaceholder key={item} />
                      ))
                    : null}
                </VStack>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Home;
