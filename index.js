import express from 'express';
import path from 'path';

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname,'public','konfinity.html'));
})

app.listen(port, () => {
    console.log('server start on '+port);
})