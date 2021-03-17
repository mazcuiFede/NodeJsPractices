const booksDb = [
    {id: 1, title: 'Clean Code', authorId: 1},
    {id: 2, title: 'The pragmantic programmer', authorId: 2},
    {id: 3, title: 'Web Development with Node.js', authorId: 3},
]

const authorsDb =  [
    {id: 1, name: "Mati"},
    {id: 2, name: "Steve Forest"},
]

function getBookById(id, callBack){
    const book = booksDb.find((book => book.id === id))
    if (!book) {
        const error = new Error()
        error.message = "Book not found"
        return callBack(error)
    }

    callBack(null, book)
}

function getAuthorById(id, callBack){
    const author = authorsDb.find((author => author.id === id))
    if (!author) {
        const error = new Error()
        error.message = "Book not found"
        return callBack(author)
    }

    callBack(null, author)
}

getBookById(1, (err, book) => {
    if (err) 
        return console.log(err.message)
        
    getAuthorById(book.authorId, (err, author) => {
        if (err) 
            return console.log(err.message)
        
        return console.log(author)
    })

    return console.log(book)
})