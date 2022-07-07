import { useContext, createContext, useState, ReactNode, FC } from "react";
import { Book } from "../types";

interface ReadingList {
  readingList: Map<string, Book>;
  addToReadingList: (book: Book) => void;
  deleteFromReadingList: (bookId: string) => void;
  isInReadingList: (bookId: string) => boolean;
}

export const ReadingListContext = createContext<ReadingList>({
  readingList: new Map(),
  addToReadingList: (book) => {},
  deleteFromReadingList: (bookId) => {},
  isInReadingList: (bookId) => false,
});

export const ReadingListProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [readingList, setReadingList] = useState<Map<string, Book>>(new Map());

  const addToReadingList = (book: Book) => {
    const currReadingList = new Map(readingList);
    currReadingList.set(String(book.id), book);
    setReadingList(currReadingList);
  };

  const deleteFromReadingList = (bookId: string) => {
    const currReadingList = new Map(readingList);
    currReadingList.delete(bookId);
    setReadingList(currReadingList);
  };

  const isInReadingList = (bookId: string) => {
    return readingList.has(bookId);
  };

  return (
    <ReadingListContext.Provider
      value={{
        readingList,
        addToReadingList,
        deleteFromReadingList,
        isInReadingList,
      }}
    >
      {children}
    </ReadingListContext.Provider>
  );
};

export default ReadingListContext;
