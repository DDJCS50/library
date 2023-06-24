function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.onPage = false;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
}

let myLibrary = [];

function addBookToLibrary(title, author, pages, isRead) {
    let bookInLibrary = false;
    myLibrary.forEach((book) => {
        if (title == book.title) {
            bookInLibrary = true;
        }
    });
    if (bookInLibrary == false) {
        let newBook = new Book(title, author, pages, isRead)
        myLibrary.push(newBook);
    }
}

function displayBooks() {
    myLibrary.forEach((book) => {
        if (book.onPage == false) {
            let displayBox = document.querySelector('#cardBox');
            let newBookCard = document.createElement('div');
            newBookCard.innerText = `Title: ${book.title} 
                                    By: ${book.author} 
                                    Pages: ${book.pages} 
                                    Has Been Read?: ${book.isRead}`;
            newBookCard.setAttribute('class', 'card');
            displayBox.appendChild(newBookCard);
            book.onPage = true;
        } else {
            return;
        }
    });
}

let bookButton = document.querySelector('#newBookButton');
bookButton.addEventListener('click', function(event) {
    event.stopPropagation();
    let bookForm = document.querySelector('form');
    bookForm.style.visibility = 'visible';
    bookForm.style.display = 'flex';
});

let submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    let title = document.querySelector('#title')
    let author = document.querySelector('#author')
    let pages = document.querySelector('#pages')
    let read = document.querySelector('#readStatus')

    addBookToLibrary(title.value, author.value, pages.value, read.value);
    displayBooks();
    let bookForm = document.querySelector('form');
    bookForm.style.visibility = 'hidden';
    bookForm.style.display = 'none';
});