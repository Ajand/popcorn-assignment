import { FC, useContext } from "react";
import { Box, Flex, VStack } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import { ReadingListContext } from "../lib/contexts/ReadingList";
import BookItem from "../components/BookItem";
import ReadingListHeader from "../components/ReadingListHeader";

const ReadingList: FC = () => {
  const { readingList } = useContext(ReadingListContext);

  const readingListBooks = Array.from(readingList.values());
  return (
    <Box className={styles.main} height="100vh">
      <Flex align="center" justify="center" height="100%">
        <Box maxWidth="600px" width="90%" display="inline-block">
          <ReadingListHeader />
          <Box className={styles.searchContainer} borderRadius="lg">
            <Box className={styles.resultContainer}>
              <VStack spacing={0} maxH="calc(95vh - 150px)" overflow="auto">
                {readingListBooks.map((book) => (
                  <BookItem book={book} key={book.id} />
                ))}
              </VStack>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ReadingList;
