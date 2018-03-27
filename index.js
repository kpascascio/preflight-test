const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(3002, function(){
	console.log(`app is running on ${3002}`);
})