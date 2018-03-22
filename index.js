import express from 'express';

const app = express();
const port = 3000;

app.get('/',(req, res) => {
    res.send('express working');
})

app.listen(port, () => {
    console.log('server start on '+port);
})