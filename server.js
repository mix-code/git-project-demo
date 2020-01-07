const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('App Installed!!!');
});

app.listen(3000, () => console.log('Server Is Live On Port 3000'));

