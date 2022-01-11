let myLibrary = [{
    title: 'Harry Potter and the Goblet of Fire',
    author: 'JK Rolling',
    pages: '111',
    read: true,
}, ];

let readButtonText = {
    read: 'Read✔️',
    notRead: 'Not Read❌',
}

const booksListDiv = document.querySelector('#books-list');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => `${title} by ${author}, ${pages} pages, ${read ? 'already read.' : 'not read yet.'}`;
}

function addBookToLibrary(library, book) {
    library.push(book);
}

function removeBookFromLibrary(library, book) {
    // Remove book code
}

function changeReadStatus(book) {
    book.read = !book.read;
}

function displayLibrary(library, displayContainer) {
    if (library.length !== 0) {
        // Clear all elements in container
        booksListDiv.textContent = '';
        library.forEach(book => {
            const newBookDiv = document.createElement('div');
            newBookDiv.className = 'book';

            let headers = {
                title: `${book.title}`,
                author: `Author: ${book.author}`,
                pages: `${book.pages} Pages`,
                read: book.read ? readButtonText.read : readButtonText.notRead,
            }

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

            displayContainer.appendChild(newBookDiv);


        });
        addEventListenersToReadButtons();
    }
}

function addEventListenersToReadButtons() {
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
    })
}

displayLibrary(myLibrary, booksListDiv);

// New Book Button
const newBookButton = document.querySelector('#newBookButton');
const formInputs = document.querySelectorAll('nav form div input');
newBookButton.addEventListener('click', () => {
    let isUndefined = false;
    console.log(formInputs);
    for (let input of formInputs) {
        console.log(input);
        if (input.type !== 'checkbox' && !input.value) {
            console.log('chicken');
            isUndefined = true;
            break;
        }
    }
    if (isUndefined === false) {
        console.log('new boy');
        let newBook = new Book(
            formInputs[0].value,
            formInputs[1].value,
            formInputs[2].value,
            formInputs[3].checked,
        );

        addBookToLibrary(myLibrary, newBook);
        displayLibrary(myLibrary, booksListDiv);
    }
});