import { FC, useContext } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import styles from "../styles/Book.module.css";
import { Book } from "../lib/types";

import { ReadingListContext } from "../lib/contexts/ReadingList";

const BookInput: FC<{ book: Book }> = ({ book }) => {
  const {
    readingList,
    addToReadingList,
    deleteFromReadingList,
    isInReadingList,
  } = useContext(ReadingListContext);

  console.log(readingList);

  return (
    <Box
      width="calc(100% - 2em)"
      className={styles.itemContainer}
      padding="1em 2em"
      borderRadius="xl"
    >
      <Text fontSize="2xl" color="white">
        {book.title}
      </Text>
      <Text color="gray.100" fontSize="lg">
        {book.authors?.join(", ")}
      </Text>
      <Text color="gray.300" fontSize="md">
        {book.publisher}
      </Text>

      {isInReadingList(String(book.id)) ? (
        <Button
          onClick={() => deleteFromReadingList(String(book.id))}
          size="xs"
          colorScheme="orange"
          mt="2"
        >
          Remove From Reading List
        </Button>
      ) : (
        <Button
          onClick={() => addToReadingList(book)}
          size="xs"
          colorScheme="purple"
          mt="2"
        >
          Add To Reading List
        </Button>
      )}
    </Box>
  );
};

export default BookInput;
