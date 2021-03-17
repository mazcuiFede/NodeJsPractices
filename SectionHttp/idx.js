const http = require('http')
const fs = require('fs')

const home = fs.readFileSync('./index.html')
const about = fs.readFileSync('./about.html')

http.createServer((request, response) => {
    const { url } = request;

    switch (url) {
        case '/':
            response.writeHead(200, {"Content-type": "text/html"})
            response.write(home)               
            break;
    
        case '/about':
            response.writeHead(200, {"Content-type": "text/html"})
            response.write(about)    
            break;
    
        default:
            response.writeHead(404, {"Content-type": "text/html"})
            response.write("Page not found") 
            break;
    }

    response.end()

}).listen(8080)