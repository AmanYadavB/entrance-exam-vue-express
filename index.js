const express = require('express');
const path = require('path');

const app = express();

app.use( express.static(path.join(__dirname,'dist')));

app.get('*', (req, res, next) => {
    res.sendFile( path.join( __dirname, 'dist/index.html'));
})
const PORT =  8082;

app.listen( PORT, () => {
    console.log(`server started on port = ${PORT}`);
})