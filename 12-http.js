const http = require('http')

const server = http.createServer((req, res)=> {
    if (req.url === '/') {
        res.end('Welcome to our home page');
        return;
    }
    if (req.url === '/About') {
        res.end('Here is our short history');
        return;
    }
    res.end(
        '<h1>Oops!</h1>' +
        '<p>We can\'t seem to find the page you are looking for</p>' +
        '<a href="/">Back home</a>'
    );
})

server.listen(5000)