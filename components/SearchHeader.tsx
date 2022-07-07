import { FC, useContext } from "react";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReadingListContext } from "../lib/contexts/ReadingList";

const SearchHeader: FC = () => {
  const router = useRouter();
  const { readingList } = useContext(ReadingListContext);

  return (
    <Box mb="2">
      <Button
        variant="ghost"
        onClick={(e) => {
          {
            e.preventDefault();
            router.push("/reading-list");
          }
        }}
      >
        Reading List ({readingList.size})
      </Button>
    </Box>
  );
};

export default SearchHeader;
