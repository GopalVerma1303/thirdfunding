var express = require('express');
var Gun = require('gun');
var cors = require('cors');

const app = express();
const port = process.env.PORT || 9000

app.use(cors())

app.use(Gun.serve)

app.get('/', (_, res) => {
    res.status(200).send('> DEBUG: Thirdfunding node is live...')
})

const server = app.listen(port, () => {
    console.log(`> DEBUG: Tihrfunding node is listening at http://localhost:${port}`)
})

Gun({ web: server })