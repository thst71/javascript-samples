import express from 'express';
import api from './api-router.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

const STATIC = path.join(__dirname, 'static');
const APP_HTML = path.join(STATIC, 'app.html');


app.get('/', (req, res) => res.sendFile(APP_HTML));

app.use('/static', express.static(STATIC, {index: true}));

// forward api calls to api-router
app.use('/api', api);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});