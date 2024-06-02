const express = require('express');
const bodyParser = require("body-parser");
const sequelize = require('./config/data-source'); // Ensure the correct path
const cors = require('cors');

const userRouter = require('./api/user/user-route');
const candidateRouter = require('./api/candidate/candidate-route');
const candidateAddressRouter = require('./api/candidate-address/candidate-address-route');
const candidateCibilRouter = require('./api/candidate-cibil/candidate-cibil-route');
const candidateDocsRouter = require('./api/candidate-docs/candidate-docs-route');
const candidateEductionRouter = require('./api/candidate-eduction/candidate-eduction-route');
const candidateReferenceRouter = require('./api/candidate-reference/candidate-reference-route');
const candidateVerificationRouter = require('./api/candidate-verification/candidate-verification-route');

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
app.use('/candidte-address', candidateAddressRouter);
app.use('/candidte-cibil', candidateCibilRouter);
app.use('/candidte-docs', candidateDocsRouter);
app.use('/candidte-eduction', candidateEductionRouter);
app.use('/candidte-reference', candidateReferenceRouter);
app.use('/candidte-verrifiction', candidateVerificationRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 
