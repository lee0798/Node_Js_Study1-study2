/*//platform 사용하고 있는 시스템이 어떤 운영체제인지
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
let _ = require('underscore');
let arr = [3,6,9,1,21];

console.log(_.first(arr));

//콜백 호출 될  함수 예제에서는 함수 b
a =[3,1,2]; console/log(a);
Uncaught ReferenceError: log is not defined
> a =[3,1,2]; console.log(a);
[ 3, 1, 2 ]
undefined
> a =[3,1,2]; console.log(a.sort);
[Function: sort]
undefined
> a =[3,1,2]; console.log(a);
[ 3, 1, 2 ]
undefined
> a =[3,1,2]; a.sort(); console.log(a);
[ 1, 2, 3 ]
undefined
> a =[3,1,2]; function b(v1,v2){return v2-v1}; a.sort(b); console.log(a);
[ 3, 2, 1 ]
undefined

//sync,async
//async
console.log(2);
var fs = require('fs');
var data = fs.readFile('data.txt',{encoding:'utf8'},function(err,data){
    console.log(3);
    console.log(data);
})
console.log(4);
//express
const http = require('http');
 
const hostname = '127.0.0.1';
const port = 1337;
 
http.createServer((req, res) => {
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello World\n');
}).listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});
//express 활용
let express =require('express');
let app = express();
app.use(express.static('public'));
app.get('/test',function(req,res){
    res.send('');
});


app.get('/',function(req,res){
    res.send('hello home page');
});
app.get('/login',function(req,res){
    res.send('login please');
});
app.listen(3000,function(){
    console.log('connected 3000 port!');
});





