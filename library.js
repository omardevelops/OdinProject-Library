let myLibrary = [
  {
    title: 'Harry Potter and the Goblet of Fire',
    author: 'JK Rolling',
    pages: '111',
    read: true,
  },
];

let readButtonText = {
  read: 'Read✔️',
  notRead: 'Not Read❌',
};

const booksListDiv = document.querySelector('#books-list');

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info = () =>
    `${title} by ${author}, ${pages} pages, ${
      read ? 'already read.' : 'not read yet.'
    }`;
}

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = () => `${title} by ${author}, ${pages} pages, ${read ? 'already read.' : 'not read yet.'}`;
// }

function addBookToLibrary(library, book) {
  library.push(book);
}

// Removes book with specified index and returns the removed book
function removeBookFromLibrary(library, index) {
  // Remove book code
  return myLibrary.splice(index, 1);
}

function changeReadStatus(book) {
  book.read = !book.read;
}

function displayLibrary(library, displayContainer) {
  if (library.length !== 0) {
    // Clear all elements in container
    booksListDiv.textContent = '';
    library.forEach((book) => {
      const newBookDiv = document.createElement('div');
      newBookDiv.className = 'book';

      let headers = {
        title: `${book.title}`,
        author: `Author: ${book.author}`,
        pages: `${book.pages} Pages`,
        read: book.read ? readButtonText.read : readButtonText.notRead,
      };

      for (const header in headers) {
        let element;
        if (header === 'read') {
          element = document.createElement('button');
          element.classList.add('readButton');
          if (book.read) element.classList.add('read');
          else element.classList.add('notRead');
        } else {
          element = document.createElement('h3');
        }
        element.innerText = headers[header];
        newBookDiv.appendChild(element);
      }

      // Add "Remove" Button
      const removeButton = document.createElement('button');
      removeButton.classList.add('removeButton');
      removeButton.innerText = 'Remove Book🗑️';
      // removeButton.classList.add('book_'+index);
      newBookDiv.appendChild(removeButton);

      displayContainer.appendChild(newBookDiv);
    });
    addEventListenersToButtons();
  } else {
    booksListDiv.textContent = 'There is nothing here...';
  }
}

function addEventListenersToButtons() {
  // Read Buttons
  const readButton = document.querySelectorAll('.readButton');
  readButton.forEach((button, key) => {
    button.addEventListener('click', () => {
      // Clear classes
      button.classList.remove('read');
      button.classList.remove('notRead');

      // Update book value
      let myBook = myLibrary[key];
      myBook.read = !myBook.read;

      // Change View of button
      if (myBook.read) {
        button.classList.add('read');
        button.innerText = readButtonText.read;
      } else {
        button.classList.add('notRead');
        button.innerText = readButtonText.notRead;
      }
    });
  });

  // Remove Book Buttons
  const removeButton = document.querySelectorAll('.removeButton');
  removeButton.forEach((button, key) => {
    button.addEventListener('click', () => {
      // Show confirm pop up

      // Update value in books
      removeBookFromLibrary(myLibrary, key);
      alert('succesfully removed book');
      console.log(myLibrary);
      // Update view
      displayLibrary(myLibrary, booksListDiv);
    });
  });
}

displayLibrary(myLibrary, booksListDiv);

// New Book Button
const newBookButton = document.querySelector('#newBookButton');

// Form Input Validation
const form = document.querySelector('nav form');
const formLabels = document.querySelectorAll('nav form div label');
const formInputs = document.querySelectorAll('nav form div input');
let isFormValid = true;

function checkInputError(input) {
  if (input.validity.valid) {
    input.classList.remove('errorInput');
  } else {
    input.classList.add('errorInput');
    isFormValid = false;
  }
}

formInputs.forEach((input) =>
  input.addEventListener('input', () => {
    checkInputError(input);
  })
);
newBookButton.addEventListener('click', (event) => {
  event.preventDefault();

  formInputs.forEach((input) => checkInputError(input));
  if (isFormValid) {
    console.log('new boy');
    let newBook = new Book(
      formInputs[0].value,
      formInputs[1].value,
      formInputs[2].value,
      formInputs[3].checked
    );

    addBookToLibrary(myLibrary, newBook);
    displayLibrary(myLibrary, booksListDiv);
  } else {
    alert('Invalid Form.');
  }
  isFormValid = true;
});
