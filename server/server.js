const path = require('path');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const publicPath = path.join(__dirname, '../public');
const PORT = process.env.PORT || 3000;


app.get('/index',(req,res)=>{
  res.sendFile(publicPath + '/index.html');
});

io.on('connection',(socket)=>{
  console.log('New User Connected');

  socket.on('disconnect',()=>{
    console.log('User Was Disconnected');
  });
});

http.listen(PORT,()=>{
  console.log(`Server Is Running On Port ${PORT}`);
})
