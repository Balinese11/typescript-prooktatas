// src/classes/Library.ts
import { ILibrary } from "../interfaces/iLibrary";
import { Book } from "./book";

export class Library implements ILibrary {
    private books: Book[] = [];

    constructor() {
        this.books = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    removeBook(id: string): void {
        this.books = this.books.filter(book => book.id !== id);
    }

    listAllBooks(): void {
        this.books.forEach(book => {
            console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Price: ${book.price}`);
        });
    }

    findBookById(id: string): Book | undefined {
        return this.books.find(book => book.id === id);
    }
}
