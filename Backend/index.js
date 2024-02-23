const express = require('express');
const mainRouter = require('./routes/index');

const app = express();

app.use(express.json());
app.use('/api/v1', mainRouter);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
