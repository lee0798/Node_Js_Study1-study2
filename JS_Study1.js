//platform 사용하고 있는 시스템이 어떤 운영체제인지
let o = require('os');
console.log(o.platform());

//require함수 http를 요구하여 서버를 다룰수 있도록 한다.
const http = require('http');
 
const hostname = '127.0.0.1';
const port = 1337;
 
http.createServer((req, res) => {
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello World\n');
}).listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});
//NPM