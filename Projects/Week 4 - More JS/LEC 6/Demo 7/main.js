const express = require('express');
const app = express();

let count = 0;


app.get('/', (req, res) => {//function occurs every time the page is loaded in
    count++;//goes up everytime the page is reloaded or someone joins the webpage
    let random = Math.random();
    res.send(`
    <h1>Hello World! People came to this website ${count} times!</h1>
    <img height="200px" width="150px" src="https://s3-alpha.figma.com/hub/file/1951080778/fec78578-013f-4ae5-b9d7-67a6ead97406-cover.png">
    ${random}
    `);
});

app.listen(4242, () => {
    console.log("Server code is running on port 3000");//runs in terminal
})

//http://localhost:4242/
//If you make updates, you have to kill and restart (node main.js)


//get your IP address using "ipconfig", then copy and paste it onto the web browser
//IPv4 Address: 10.142.196.144
//live website: 10.142.196.144:4242