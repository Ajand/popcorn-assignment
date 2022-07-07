import { useState, useEffect } from "react";
import { Book } from "../types";
import query from "../query";

const useBooks = () => {
  const [searchString, setSearchStr] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // should cancel requests if they are no longer being used
    let mounted = true;
    if (searchString) {
      setLoading(true);
      query(searchString)
        .then((results: Book[]) => {
          if (mounted) {
            setLoading(false);
            setBooks(results);
          }
        })
        .catch((err) => {
          // TODO Should have some better error handling
          if (mounted) {
            setLoading(false);
          }
          console.log(err);
        });
    } else {
      setLoading(false);
      setBooks([]);
    }

    return () => {
      mounted = false;
    };
  }, [searchString]);

  return {
    books,
    setSearchStr,
    searchString,
    loading
  };
};

export default useBooks;
