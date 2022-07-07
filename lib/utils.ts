import { Book } from "./types";

export const mapToString = (mapping: Map<any, any>) => {
  return JSON.stringify(Array.from(mapping));
};

export const stringToMap = (target: string): Map<string, Book> => {
  return new Map(JSON.parse(target));
};
