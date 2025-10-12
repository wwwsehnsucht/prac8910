const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    console.log('АЛЕ ТУТ НА САЙТ ЗАШЛИл!л!л!л!л!!л!');

    const parsedUrl = url.parse(request.url, true);
    const pathname = parsedUrl.pathname;
    const queryParams = parsedUrl.query;

    response.setHeader('Content-Type', 'application/json');

    if (pathname === '/about') {
        response.end(JSON.stringify({ message: "о нас? обо мне!" }));
    } else if (pathname === '/user') {
        response.end(JSON.stringify({
            username: queryParams.name || "Неизвестный пользователь",
            age: queryParams.age
        }));
    } else {
        response.end(JSON.stringify({
            name: queryParams.name || "wwwsehnsucht",
            desire: queryParams.desire || "ничего",
            mood: queryParams.mood || "нормик",
            timestamp: new Date().toISOString()
        }));
    }
});

server.listen(3000, () => {
    console.log('сервер запущен на http://localhost:3000/, тест: http://localhost:3000/about, http://localhost:3000/user?name=wwwsehnsucht&age=17, http://localhost:3000/?name=wwwsehnsucht&desire=пахать в google&mood=no mood');
    console.log('Чтобы остановить сервер: Ctrl+C');
});