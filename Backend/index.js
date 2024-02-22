const express = require('express');
app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello")
})

app.post('/todo', (req, res)=>{

})

app.listen(3001);