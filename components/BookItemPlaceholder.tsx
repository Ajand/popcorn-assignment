import { FC } from "react";
import { Box } from "@chakra-ui/react";
import PlaceholderLoading from "react-placeholder-loading";
import styles from "../styles/Book.module.css";

const BookItemPlaceholder: FC = () => {
  return (
    <Box
      width="calc(100% - 2em)"
      className={styles.itemContainer}
      padding="1em 2em"
      borderRadius="xl"
    >
      <Box>
        <PlaceholderLoading
          shape="rect"
          width={"90%"}
          height={20}
          colorEnd="#f14bd8"
          colorStart="#4b2b51"
        />
      </Box>
      <Box mt="4">
        <PlaceholderLoading
          shape="rect"
          width={"60%"}
          height={16}
          colorEnd="#f14bd8"
          colorStart="#4b2b51"
        />
      </Box>
      <Box mt="4">
        <PlaceholderLoading
          shape="rect"
          width={"50%"}
          height={12}
          colorEnd="#f14bd8"
          colorStart="#4b2b51"
        />
      </Box>
    </Box>
  );
};

export default BookItemPlaceholder;
