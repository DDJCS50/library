let Book = class {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
        this.onPage = false;
        this.libraryIndex = 0;
    }

    info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
    }
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
        console.log(newBook.info());
        myLibrary.push(newBook);
    }
}

function displayBooks() {
    myLibrary.forEach((book) => {
        if (book.onPage == false) {
            let displayBox = document.querySelector('#cardBox');
            let newBookCard = document.createElement('div');
            let deleteButton = document.createElement('button');
            let readStatusButton = document.createElement('button');
            let bookInfo = document.createElement('p');
            readStatusButton.innerText = 'Change Read Status';
            readStatusButton.style.backgroundColor = '#94a3b8';
            readStatusButton.style.width = '75%';
            deleteButton.innerText = 'Delete';
            deleteButton.style.backgroundColor = 'red';
            deleteButton.style.width = '50%';
            bookInfo.innerText = `Title: ${book.title} 
                                  By: ${book.author} 
                                  Pages: ${book.pages} 
                                  Has Been Read?: ${book.isRead}`;
            newBookCard.setAttribute('class', 'card');
            newBookCard.setAttribute('id', book.libraryIndex);
            newBookCard.appendChild(bookInfo);
            newBookCard.appendChild(deleteButton);
            newBookCard.appendChild(readStatusButton);
            displayBox.appendChild(newBookCard);
            deleteButton.addEventListener('click', function(event) {
                event.stopPropagation;
                deleteBook(book.libraryIndex);
            });
            readStatusButton.addEventListener('click', function(event) {
                event.stopPropagation;
                changeReadStatus(book.libraryIndex);
            });
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
    assignLibraryIndex();
    displayBooks();
    let bookForm = document.querySelector('form');
    bookForm.style.visibility = 'hidden';
    bookForm.style.display = 'none';
});

function deleteBook(index) {
    card = document.getElementById(index);
    card.remove();
    myLibrary.splice(index, 1)
}

function assignLibraryIndex() {
    for (let i = 0; i < myLibrary.length; i++) {
        myLibrary[i].libraryIndex = i;
    }
}

function changeReadStatus(index) {
    let book = myLibrary[index];
    book.isRead = prompt('New Read Status:');
    
    let card = document.getElementById(index);

    card.firstElementChild.innerText = `Title: ${book.title} 
                                        By: ${book.author} 
                                        Pages: ${book.pages} 
                                        Has Been Read?: ${book.isRead}`;

}