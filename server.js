const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/data-source');
const cors = require('cors');
const passport = require('./config/auth'); // Import your Passport configuration
const unless = require('express-unless'); // Import express-unless

const userRouter = require('./api/user/user-route');
const candidateRouter = require('./api/candidate/candidate-route');
const candidateAddressRouter = require('./api/candidate-address/candidate-address-route');
const candidateCibilRouter = require('./api/candidate-cibil/candidate-cibil-route');
const candidateDocsRouter = require('./api/candidate-docs/candidate-docs-route');
const candidateEductionRouter = require('./api/candidate-eduction/candidate-eduction-route');
const candidateReferenceRouter = require('./api/candidate-reference/candidate-reference-route');
const candidateVerificationRouter = require('./api/candidate-verification/candidate-verification-route');
const clientRouter = require('./api/client/client-route');
const featureRouter = require('./api/feature/feature-route');
const internalTeamRouter = require('./api/internal-team/internal_team-route');

const app = express();
const port = 9000;

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());

// Create a custom middleware that uses Passport to authenticate, unless the path matches
const authenticate = (req, res, next) => {
  // Define paths to exclude from authentication
  const excludePaths = ['/users', '/users/login'];
  const shouldExclude = excludePaths.some(path => req.path.startsWith(path) && (path === req.path || path === '/users/login' || path === '/users' && req.method === 'POST'));

  if (shouldExclude) {
    return next();
  } else {
    return passport.authenticate('bearer', { session: false })(req, res, next);
  }
};

app.use(authenticate);

sequelize.sync()
  .then(() => {
    console.log('Database synced successfully.');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

app.use('/users', userRouter);
app.use('/candidate', candidateRouter);
app.use('/candidate-address', candidateAddressRouter);
app.use('/candidate-cibil', candidateCibilRouter);
app.use('/candidate-docs', candidateDocsRouter);
app.use('/candidate-eduction', candidateEductionRouter);
app.use('/candidate-reference', candidateReferenceRouter);
app.use('/candidate-verification', candidateVerificationRouter);
app.use('/client', clientRouter);
app.use('/feature', featureRouter);
app.use('/internal-team', internalTeamRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
