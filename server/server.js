const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pool = require('./modules/pool');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/feedback', (req, res) => {
    let feedback = req.body;
    console.log('adding feedback', feedback);
    let sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    pool.query(sqlText, [feedback.feeling, 
        feedback.understanding, 
        feedback.support, 
        feedback.comments]).then( result => {
            res.sendStatus(201);
        }).catch( error => {
            console.log('error adding feedback to server', error);
            res.sendStatus(500);
        });
});

app.get('/feedback', (req, res) => {
    let sqlText = `SELECT * FROM "feedback" ORDER BY "date";`;
    pool.query(sqlText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error getting feedback list', error);
        res.sendStatus(500);
    });
});

app.delete('/feedback/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('delete request for id', reqId);
    let sqlText = 'DELETE FROM "feedback" WHERE id=$1;';
    pool.query(sqlText, [reqId]).then( (result) => {
        console.log('feedback deleted');
        res.sendStatus(200);
    }).catch( (error) => {
        console.log('error deleting feedback', error);
        res.sendStatus(500);
    });
});

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});