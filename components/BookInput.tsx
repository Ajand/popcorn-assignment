import { FC, Dispatch, SetStateAction } from "react";
import { Input } from "@chakra-ui/react";

const BookInput: FC<{
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}> = ({ value, setValue }) => {
  return (
    <Input
      placeholder="Search Your Book"
      size="lg"
      variant="filled"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default BookInput;
