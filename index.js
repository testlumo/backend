const express = require('express');

const app = express();
const port = 3000;

app.get('/api/hello', (req, res) => {
    res.send('Hello Worldeeee! teste');
});

app.listen(port, () => {
    console.log(`Server is runneeeing on http://localhost:${port}`);
});
