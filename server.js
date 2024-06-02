const express = require('express');
const bodyParser = require("body-parser");
const sequelize = require('./config/data-source'); // Ensure the correct path
const cors = require('cors');

const userRouter = require('./api/user/user-route');
const candidateRouter = require('./api/candidate/candidate-route');

const app = express();
const port = 8000;
app.use(cors());
app.use(bodyParser.json());

sequelize.sync()
  .then(() => {
    console.log('Database synced successfully.');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

app.use('/users', userRouter); 
app.use('/candidte', candidateRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
