const express = require('express');
const path = require('path');

<<<<<<< HEAD
const process = require('process');
=======
const process = require('process')
>>>>>>> 66b1c98600801786a763c5305bcdce36e41db980

const app = express();

app.use( express.static(path.join(__dirname,'dist')));

app.get('*', (req, res, next) => {
    res.sendFile( path.join( __dirname, 'dist/index.html'));
})
<<<<<<< HEAD

const PORT =   8081;

app.listen( PORT, () => {
=======

const PORT =  process.env.PORT;

app.listen(  PORT, () => {
>>>>>>> 66b1c98600801786a763c5305bcdce36e41db980
    console.log(`server started on port = ${PORT}`);
})
