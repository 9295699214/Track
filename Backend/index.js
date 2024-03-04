const express = require('express');
const mainRouter = require('./routes/index');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http:192.168.223.136:8081'
}));

app.use(express.json());
console.log("Indide Index.js")
app.use('/api/v1', mainRouter);

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});
