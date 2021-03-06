import { FC, useContext } from "react";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReadingListContext } from "../lib/contexts/ReadingList";

const ReadingListHeader: FC = () => {
  const router = useRouter();
  const { readingList } = useContext(ReadingListContext);

  return (
    <Box mb="2">
      <Button
        variant="ghost"
        onClick={(e) => {
          {
            e.preventDefault();
            router.push("/");
          }
        }}
      >
        Back To Search
      </Button>
    </Box>
  );
};

export default ReadingListHeader;
