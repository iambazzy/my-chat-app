const path = require('path');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const publicPath = path.join(__dirname, '../public');
const PORT = process.env.PORT || 3000;

// route index.html
app.get('/index',(req,res)=>{
  res.sendFile(publicPath + '/index.html');
});

// connection established
io.on('connection',(socket)=>{
  console.log('New User Connected');


// recieving message from the client
  socket.on('createMessage',(data)=>{
    console.log('got a message',data);
    io.emit('newMessage',{
      from: data.from,
      message: data.message,
      createdAt: new Date().getTime()
    });
  });

// on dis-connection
  socket.on('disconnect',()=>{
    console.log('User Was Disconnected');
  });
});

http.listen(PORT,()=>{
  console.log(`Server Is Running On Port ${PORT}`);
})
