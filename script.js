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
      deleteButton.addEventListener('click', function (event) {
        event.stopPropagation;
        deleteBook(book.libraryIndex);
      });
      readStatusButton.addEventListener('click', function (event) {
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
bookButton.addEventListener('click', function (event) {
  event.stopPropagation();
  let bookForm = document.querySelector('form');
  bookForm.style.visibility = 'visible';
  bookForm.style.display = 'flex';
});

let submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  event.stopPropagation();
  let title = document.querySelector('#title')
  let author = document.querySelector('#author')
  let pages = document.querySelector('#pages')
  let read = document.querySelector('#readStatus')

  if (form.checkValidity()) {
    addBookToLibrary(title.value, author.value, pages.value, read.value);
    assignLibraryIndex();
    displayBooks();
    let bookForm = document.querySelector('form');
    bookForm.style.visibility = 'hidden';
    bookForm.style.display = 'none';
  } else {
    return;
  }
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

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('readStatus');
const form = document.querySelector('form');
const submit = document.getElementById('submitButton');

title.addEventListener('input', (e) => {
  if (title.validity.patternMismatch) {
    title.setCustomValidity('I need a valid title');
    title.reportValidity();
  } else {
    title.setCustomValidity('');
  }
});

author.addEventListener('input', (e) => {
  if (author.validity.patternMismatch) {
    author.setCustomValidity('I need a valid author');
    author.reportValidity();
  } else {
    author.setCustomValidity('');
  }
});

pages.addEventListener('input', (e) => {
  if (pages.validity.patternMismatch) {
    pages.setCustomValidity('I need a valid page number');
    pages.reportValidity();
  } else {
    pages.setCustomValidity('');
  }
});

read.addEventListener('input', (e) => {
  if (read.validity.patternMismatch) {
    read.setCustomValidity('I need a valid read status');
    read.reportValidity();
  } else {
    read.setCustomValidity('');
  }
});

submit.addEventListener('click', (e) => {
  if (form.checkValidity()) {
    alert('New Book Added!');
  } else {
    alert('Invalid Input');
    e.preventDefault();
  }
});