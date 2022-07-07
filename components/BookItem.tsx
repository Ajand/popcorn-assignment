import { FC, Dispatch, SetStateAction } from "react";
import { Box, Text } from "@chakra-ui/react";
import styles from "../styles/Book.module.css";
import { Book } from "../lib/types";

const BookInput: FC<{ book: Book }> = ({ book }) => {
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
    </Box>
  );
};

export default BookInput;
