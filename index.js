const express = require('express');
const path = require('path');
const process = require('process');
const app = express();

app.use( express.static(path.join(__dirname,'dist')));

app.get('*', (req, res, next) => {
    res.sendFile( path.join( __dirname, 'dist/index.html'));
})
const PORT =  process.env.PORT_NUMBER | 8081;

app.listen( process.env.PORT | PORT, () => {
    console.log(`server started on port = ${PORT}`);
})
