const express = require('express');
const app = express();

app.get('/greetings/:username', (req, res) => {
    const username = req.params.username;
    res.send(`Hello there, ${username}!`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
