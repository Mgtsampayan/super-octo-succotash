const app = require('./app');
const pool = require('./config/db');

const port = process.env.PORT || 5000;

pool.getConnection()
  .then(() => {
    console.log('Connected to the database');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to the database', err);
  });