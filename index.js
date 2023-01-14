// Import packages
const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.get('/api', (req, res) => {
    res.send("Hello from API");
});

const PORT = process.env.PORT || 9001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});