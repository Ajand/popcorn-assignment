import { FC, Dispatch, SetStateAction } from "react";
import { Box, Text } from "@chakra-ui/react";

import { Book } from "../lib/types";

const BookInput: FC<{ book: Book }> = ({ book }) => {
  return (
    <Box>
      <Text fontSize="4xl">{book.title}</Text>
      <Text fontSize="2xl">{book.authors?.join(', ')}</Text>
      <Text fontSize="lg">{book.publisher}</Text>
    </Box>
  );
};

export default BookInput;
