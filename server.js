const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('App Installed!!!');
});

app.get('/about-us', (req, res) => {
    res.send('About API');
});

app.get('/contact-us', (req, res) => {
    res.send('Contact Us API');
});

app.get('/fqa', (req, res) => {
    res.send('FQA API');
});

app.get('/feedback', (req, res) => {
    res.send('Feedback API');
});

app.get('/profile', (req, res) => {
    res.send('Profile API');
});

app.get('/profile/update-password', (req, res) => {
    res.send('Profile Update Password API');
});

app.listen(3000, () => console.log('Server Is Live On Port 3000'));

