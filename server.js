const express = require ('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello from Express' });
});

app.listen(port, function() {
  console.log('Server running on port: ', port);
});