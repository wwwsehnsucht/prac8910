const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('главная страница');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('обо мне');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('где?');
    }
});

server.listen(3000, () => {
    console.log('порт 3000 короче ну http://localhost:3000');
});