const express = require('express');
const path = require('path');
<<<<<<< HEAD
const process = require('process')
=======
const process = require('process');
>>>>>>> f82888d05f49404b468d79232aeb306f05ec804d
const app = express();

app.use( express.static(path.join(__dirname,'dist')));

app.get('*', (req, res, next) => {
    res.sendFile( path.join( __dirname, 'dist/index.html'));
})
<<<<<<< HEAD
const PORT =  process.env.PORT_NUMBER | 8081;
=======
const PORT =  process.env.PORT;
>>>>>>> f82888d05f49404b468d79232aeb306f05ec804d

app.listen( process.env.PORT | PORT, () => {
    console.log(`server started on port = ${PORT}`);
})
