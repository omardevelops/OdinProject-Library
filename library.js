let myLibrary = [
    {
        title: '1',
        author: '#1',
        pages: '111',
        read: true,
    }
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
            // Display book code
            const newBookDiv = document.createElement('div');
            newBookDiv.className = 'book';
            const titleHeader = document.createElement('h3');
            titleHeader.innerText = `Title: ${book.title}`;
            newBookDiv.appendChild(titleHeader);
            const authorHeader = document.createElement('h3');
            authorHeader.innerText = `Author: ${book.author}`;
            newBookDiv.appendChild(authorHeader);
            const pagesHeader = document.createElement('h3');
            pagesHeader.innerText = `Number of Pages: ${book.pages}`;
            newBookDiv.appendChild(pagesHeader);
            const readHeader = document.createElement('h3');
            readHeader.innerText = book.read ? 'Read' : 'Not Read';
            newBookDiv.appendChild(readHeader);

            displayContainer.appendChild(newBookDiv);

        });
    }       
}

displayLibrary(myLibrary, booksListDiv);