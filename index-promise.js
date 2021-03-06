const booksDb = [
    {id: 1, title: 'Clean Code', authorId: 1},
    {id: 2, title: 'The pragmantic programmer', authorId: 2},
    {id: 3, title: 'Web Development with Node.js', authorId: 3},
]

const authorsDb =  [
    {id: 1, name: "Mati"},
    {id: 2, name: "Steve Forest"},
]

function getBookById(id){
    return new Promise((resolve, reject) => {
        const book = booksDb.find((book => book.id === id))
        if (!book) {
            const error = new Error()
            error.message = "Book not found"
            reject(error)
        }
        resolve(book)
    })
}

function getAuthorById(id){
    return new Promise((resolve, reject) => {
        const author = authorsDb.find((author => author.id === id))
        if (!author) {
            const error = new Error()
            error.message = "Book not found"
            reject(author)
        }
        resolve(author)
    })
}

getBookById(2)
    .then(book => {
        return getAuthorById(book.id)
    })
    .then(author => {
        console.log(author)
    })
    .catch( error => {
        console.log(error.message)
    })