import express from 'express';

const api = express.Router();

// parse the body as json
api.use('/', express.json());

api.get('/hello', (req, res) => {
    res.send('Hello World!')
});
let data = [];
api.post('/', (req, res) => {
    data.push(req.body);
    res.send( {count: data.length} );
});

api.put('/:id', (req, res) => {
    let dataId = req.params["id"];
    if( dataId in data) {
        data[dataId] = req.body;
        res.sendStatus(200);
    } else {
        res.sendStatus( 404 );
    }
});

api.get('/list', (req, res) => {
    res.send( data );
});

api.get('/:id', (req, res) => {
    let dataId = req.params["id"];
    if( dataId in data) {
        res.send(data[dataId]);
    } else {
        res.sendStatus( 404 );
    }
});

api.delete('/:id', (req, res) => {
    let dataId = req.params["id"];
    if( dataId in data) {
        delete data[dataId]; 
        res.sendStatus(200);
    } else {
        res.sendStatus( 404 );
    }
});

export default api;