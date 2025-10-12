const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('express короч');
});

app.get('/about', (req, res) => {
    res.send('я изучаю express ну https://github.com/wwwsehnsucht/passwordGen');
});

app.get('/search', (req, res) => {
    const searchQuery = req.query.q;
    if (searchQuery) {
        res.send(`результаты поиска: ${searchQuery}`);
    } else {
        res.send('введите запрос поиска q');
    }
});

app.get('/user/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`пользователь с ID: ${userId}`);
});

app.get('/greet/:name', (req, res) => {
    const userName = req.params.name;
    const city = req.query.city;
    const greeting = `wsp, ${userName}!`;
    const cityMessage = city ? ` ты из ${city}!` : '';
    res.send(greeting + cityMessage);
});

app.listen(PORT, () => {
    console.log(`сервер запущен на  http://localhost:${PORT}`);
});