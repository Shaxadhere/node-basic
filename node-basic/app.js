const http = require('http');

const server = http.createServer((req, res) => {
    res.end("hello from browser");
});

server.listen(3000)