// var path = require('path');
// var express = require('express');
// var app = express();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.use(express.static(path.join(__dirname, '')));

// app.get('/', function(req, res){
//   res.sendFile('index.html');
// });

// // io.on('connection', function(socket){
// //   console.log('a user connected');
// //   socket.on('disconnect', function(){
// //     console.log('user disconnected');
// //   });
// // });

// // function Player(number,type,life)
// // {
// //   this.number = number;
// //   this.type = type;
// //   this.life = life;
// // }

// // var player1 = new Player(1,0,100);
// // var player2 = new Player(2,0,100);

// io.on('connection', function(socket){
//   socket.on('play', function(msg){
//      io.emit('play', msg);
//   });
//      // socket.on('gregsattack', function(data){
//      //  console.log(data.bullshit);
//      //  console.log(data.health);
//      // })
// });

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });