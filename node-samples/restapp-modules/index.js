import express from 'express';
import api from './api-router.js';

const __dirname = new URL('.', import.meta.url).pathname;
const app = express();
const port = 3000;

const APP_HTML = __dirname + "static/app.html";
const STATIC = __dirname + "static";

app.get('/', (req, res) => res.sendFile(APP_HTML));

app.use('/static', express.static(STATIC, {index: false}));

// forward api calls to api-router
app.use('/api', api);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
