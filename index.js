const { resolveSoa } = require('dns');
const http = require('http');
const hostname = 'localhost';

const port = 443;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Primeira API NodeJS')
});

server.listen(port, hostname, () => {

    console.log('Primeira API NodeJS')

});
