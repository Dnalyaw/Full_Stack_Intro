const express = require('express');

const cors = require("cors");

const app = express();
const sports = [
    {
        id: 1,
        title: 'basketball',
        league: 'NBA',
    },
    {
        id: 2,
        title: 'football',
        league: 'NFL',
    }
]

app.use(cors)

app.get('/', (req,res)=> {
    res.send('Wayland was here');
})

app.get('/sports', (req, res) => {
    res.json(sports);
})


app.listen(2000, ()=> {
    console.log('listening at http://localhost:2000')
})