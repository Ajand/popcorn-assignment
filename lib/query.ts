import axios from "axios";
import { Book } from "./types";

export default (searchString: string): Promise<Book[]> => {
  const baseUrl = `https://www.googleapis.com/books/v1/volumes`;
  const startIndex = 0;
  const maxResults = 5;
  const printType = "all";
  const orderBy = "relevance";

  interface ResultItem {
    id: string;
    volumeInfo?: Book;
  }

  return new Promise((resolve, reject) => {
    axios
      .get(
        `${baseUrl}?q=${searchString}&startIndex=${startIndex}&maxResults=${maxResults}&printType=${printType}&orderBy=${orderBy}`
      )
      .then((r) => {
        return r.data.items
          ? r.data.items.map((resultItem: ResultItem) => ({
              ...resultItem.volumeInfo,
              id: resultItem.id,
            }))
          : [];
      })
      .then((items) => resolve(items))
      .catch((err) => {
        return reject(err);
      });
  });
};
