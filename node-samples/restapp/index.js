import express from 'express';

const __dirname = new URL('.', import.meta.url).pathname;
const app = express();
const port = 3000;

const APP_HTML = __dirname + "static/app.html";
const STATIC = __dirname + "static";

app.get('/', (req, res) => res.sendFile(APP_HTML));

app.use('/static', express.static(STATIC, {index: false}));

// parse the body as json
app.use('/api', express.json());

app.get('/api/hello', (req, res) => {
    res.send('Hello World!')
});
let data = [];
app.post('/api/create', (req, res) => {
    data.push(req.body);
    res.send( {count: data.length} );
});

app.put('/api/update/:id', (req, res) => {
    let dataId = req.params["id"];
    if( dataId in data) {
        data[dataId] = req.body;
        res.sendStatus(200);
    } else {
        res.sendStatus( 404 );
    }
});

app.get('/api/list', (req, res) => {
    res.send( data );
});

app.get('/api/get/:id', (req, res) => {
    let dataId = req.params["id"];
    if( dataId in data) {
        res.send(data[dataId]);
    } else {
        res.sendStatus( 404 );
    }
});

app.delete('/api/delete/:id', (req, res) => {
    let dataId = req.params["id"];
    if( dataId in data) {
        delete data[dataId]; 
        res.sendStatus(200);
    } else {
        res.sendStatus( 404 );
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
