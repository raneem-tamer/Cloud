const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Cloud App!');
});

app.get('/about', (req, res) => {
    res.send('This is the About Page!');
});

app.use(express.static('public'));

app.get('/api/data', (req, res) => {
    res.json({ message: 'API is working!' });
});

app.use(express.json()); // Middleware to parse JSON body

app.post('/api/data', (req, res) => {
    const data = req.body;
    res.json({ message: 'Data received!', data });
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
