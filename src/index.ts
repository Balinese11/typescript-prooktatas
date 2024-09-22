// src/index.ts
import { Book } from "./classes/book";
import { Library } from "./classes/library";
import { User } from "./classes/user";

// Könyvtár létrehozása
const library = new Library();

// Star Wars könyvek létrehozása
const book1 = new Book("1", "Star Wars: Thrawn", "Timothy Zahn", 15.99);
const book2 = new Book("2", "Star Wars: Ahsoka", "E.K. Johnston", 13.99);
const book3 = new Book("3", "Star Wars: Bloodline", "Claudia Gray", 14.99);

// Könyvek hozzáadása a könyvtárhoz
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Könyvek listázása
console.log("All books in the library:");
library.listAllBooks();

// Felhasználó létrehozása
const user = new User("u1", "Luke Skywalker", "luke.skywalker@jedicouncil.com");

// Könyv kölcsönzése
console.log("User borrowing a book:");
user.borrowBook(library, "1");

// Könyvek listázása a kölcsönzés után
console.log("All books in the library after borrowing:");
library.listAllBooks();