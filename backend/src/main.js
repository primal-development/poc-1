import express from 'express';
import {connect} from './db';

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    connect();
    res.end();
});

app.listen(PORT, () => {
    console.log('API listening on port 8000');
});