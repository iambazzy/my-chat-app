const path = require('path');
const express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.listen(PORT,()=>{
  console.log(`Server Is Running On Port ${PORT}`);
})
