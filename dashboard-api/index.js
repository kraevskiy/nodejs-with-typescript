import http from 'http';

const host = '127.0.0.1';
const port = 8080;

const server = http.createServer(((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-type', 'text/plain');
	res.end('Hello!');
}));

server.listen(port, host, () => {
	console.log(`Server start ${host}:${port}`);
})
