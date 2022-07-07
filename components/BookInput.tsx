import { FC, Dispatch, SetStateAction } from "react";
import { Input, Box, Flex } from "@chakra-ui/react";
import styles from "../styles/Book.module.css";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";

const BookInput: FC<{
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}> = ({ value, setValue }) => {
  return (
    <Box borderRadius="lg" className={styles.inputContainer}>
      <Flex align="center" p="3">
        <Box ml={4} mr="3" h={7} w={7}>
          <SearchIcon w="100%" h="100%" color="gray.300" />
        </Box>
        <Input
          placeholder="Search Your Book"
          size="lg"
          value={value}
          variant="unstyled"
          onChange={(e) => setValue(e.target.value)}
          color="gray.50"
          _placeholder={{ opacity: 1, color: "gray.300" }}
          p={4}
          fontSize="24"
          fontWeight="light"
        />
        {value && (
          <Box
            ml={3}
            mt={-1}
            mr="4"
            h={5}
            w={5}
            cursor="pointer"
            _hover={{
              color: "gray.50",
            }}
            color="gray.300"
            onClick={() => setValue("")}
          >
            <CloseIcon w="100%" h="100%" />
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default BookInput;
