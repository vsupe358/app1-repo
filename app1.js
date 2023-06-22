const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from App1!');
});

app.listen(PORT, () => {
  console.log(`App1 is running on port ${PORT}`);
});

