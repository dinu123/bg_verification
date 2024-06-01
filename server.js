const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

const userRouter = require('./routes/users-route')

const app = express();
const port = 8000;
app.use(cors());
app.use(bodyParser.json());

app.use('/api/users',userRouter);

app.use((error,req,res,next) => {
  if(res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({message: error.message || 'Invalid error occured'});
})
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
