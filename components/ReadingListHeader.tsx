import { FC, useContext } from "react";
import { Box, Button } from "@chakra-ui/react";

import { ReadingListContext } from "../lib/contexts/ReadingList";

const ReadingListHeader: FC = () => {
  const { readingList } = useContext(ReadingListContext);

  return (
    <Box mb="2">
      <Button variant="ghost">Reading List ({readingList.size})</Button>
    </Box>
  );
};

export default ReadingListHeader;
