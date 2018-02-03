import * as express from 'express';
import * as logger from 'morgan';
// Create Express server
const app = express();

// TODO: Connect to database

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));

// API Routes
// TODO: Split these into separate files
app.get('/', (req, res) => {
  res.send('Conversation Board Server is working!');
});

const server = app.listen(app.get('port'), () => {
  console.log(`  App is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`);
  console.log('  Press CTRL-C to stop\n');
});

module.exports = server;
