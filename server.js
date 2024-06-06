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

const clientRouter = require('./api/client/client-route');

const FeatureRouter = require('./api/feature/feature-route');

const InternalTeamRouter = require('./api/internal-team/internal_team-route');



const app = express();
const port = 9000;
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

// Candidate Route
app.use('/candidate', candidateRouter);
app.use('/candidate-address', candidateAddressRouter);
app.use('/candidate-cibil', candidateCibilRouter);
app.use('/candidate-docs', candidateDocsRouter);
app.use('/candidate-eduction', candidateEductionRouter);
app.use('/candidate-reference', candidateReferenceRouter);
app.use('/candidate-verrifiction', candidateVerificationRouter);

//Client Route

app.use('/client', clientRouter);

//Feture Route

app.use('/feature', FeatureRouter);

app.use('/internal-team', InternalTeamRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 
