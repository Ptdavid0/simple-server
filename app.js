const http = require('http');

http.createServer((req,res) => {
	res.write('ON the way to being a FSE')
	res.end();
}).listen(3000)

console.log('Server Started on port 3000')
