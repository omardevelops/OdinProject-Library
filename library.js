let myLibrary = [
    {
        title: 'Harry Potter and the Goblet of Fire',
        author: 'JK Rolling',
        pages: '111',
        read: true,
    },

    {
        title: '1',
        author: '#1',
        pages: '111',
        read: true,
    },

    {
        title: '1',
        author: '#1',
        pages: '111',
        read: false,
    },

    {
        title: '1',
        author: '#1',
        pages: '111',
        read: false,
    },

    {
        title: '1',
        author: '#1',
        pages: '111',
        read: false,
    },
];
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
        library.forEach(book => {
            const newBookDiv = document.createElement('div');
            newBookDiv.className = 'book';

            headers = {
                title: `${book.title}`,
                author: `Author: ${book.author}`,
                pages: `${book.pages} Pages`,
                read: book.read ? 'Read✔️' : 'Not Read❌',
            }

            for (const header in headers) {
                const element = document.createElement('h3');
                element.innerText = headers[header];
                newBookDiv.appendChild(element);
            }

            displayContainer.appendChild(newBookDiv);

        });
    }       
}

displayLibrary(myLibrary, booksListDiv);