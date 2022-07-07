import { createContext, useState, ReactNode, FC, useEffect } from "react";
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

const mapToString = (mapping: Map<any, any>) => {
  return JSON.stringify(Array.from(mapping));
};

const stringToMap = (target: string): Map<string, Book> => {
  return new Map(JSON.parse(target));
};

export const ReadingListProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [readingList, setReadingList] = useState<Map<string, Book>>(new Map());

  useEffect(() => {
    const cachedData = localStorage.getItem("readingList");
    setReadingList(stringToMap(cachedData ? cachedData : "[]"));
  }, []);

  const addToReadingList = (book: Book) => {
    const currReadingList = new Map(readingList);
    currReadingList.set(String(book.id), book);
    const currReadingListString = mapToString(currReadingList);
    localStorage.setItem("readingList", currReadingListString);
    setReadingList(currReadingList);
  };

  const deleteFromReadingList = (bookId: string) => {
    const currReadingList = new Map(readingList);
    currReadingList.delete(bookId);
    const currReadingListString = mapToString(currReadingList);
    localStorage.setItem("readingList", currReadingListString);
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
