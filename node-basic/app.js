const http = require('http');

const server = http.createServer((req, res) => {
    res.end("hello from browser updated");
});

server.listen(3000)