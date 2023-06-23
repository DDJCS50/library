function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet');
console.log(theHobbit.info());

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
console.log(myLibrary);