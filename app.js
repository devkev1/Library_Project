console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");
const books = [
    {
        title: "Name of the Wind",
        author: "Patrick Rothfuss",
        read: true,
    }
]

class Book {
    constructor(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

class Library {
    constructor(books) {
        this.bookCount = books.length;
        this.books = books;
    }
    addBook() {
        const title = document.getElementById("title");
        const author = document.getElementById("author");
        const read = document.getElementById("read");
        const newBook = new Book(title.value, author.value, read.checked)
        this.books.push(newBook);

        this.bookCount++;

        const tbody = document.getElementById("table");
        const newTr = document.createElement("tr");
        const newTitle = document.createElement("td");
        const newAuthor = document.createElement("td");
        const newRead = document.createElement("td");

        newTitle.textContent = title.value;
        newAuthor.textContent = author.value;
        newRead.textContent = read.checked;

        newTr.appendChild(newTitle);
        newTr.appendChild(newAuthor);
        newTr.appendChild(newRead);
        tbody.appendChild(newTr);
    }

    markRead(checkbox, id) {
        this.books.forEach(book => {
            if (id === book.id) {
                book.read = true;
                checkbox.checked = true;
                checkbox.disabled = true;
            }
        })
    }
}

const library = new Library(books);

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
        library.addBook();
})