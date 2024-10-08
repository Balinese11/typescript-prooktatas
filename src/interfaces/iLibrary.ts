// src/interfaces/ILibrary.ts
import { Book } from "../classes/book";

export interface ILibrary {
  addBook(book: Book): void;
  removeBook(id: string): void;
  findBookById(id: string): Book | undefined;
  listAllBooks(): void;
}
