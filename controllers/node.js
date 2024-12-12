const express = require('express');
const app = express();

app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working' });
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
