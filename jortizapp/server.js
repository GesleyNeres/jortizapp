var express = require('express');
const path = require('path')

var server = express();

server.use(express.static(path.join(__dirname, '/dist')));

server.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});
server.listen(8080);