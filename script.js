function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
}

let myLibrary = [];

function addBookToLibrary() {
    let title = prompt('What is the title of the book?');
    let author = prompt('Who is the author of the book?');
    let pages = prompt('How many pages are there?');
    let isRead = prompt('Have you read this book?');

    let newBook = new Book(title, author, pages, isRead)
    myLibrary.push(newBook);
}

addBookToLibrary();

function displayBooks() {
    myLibrary.forEach((book) => {
        console.log(book.info());
    });
}

displayBooks();