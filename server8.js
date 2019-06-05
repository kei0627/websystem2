const express = require('express');
const server = express();
const ejs = require('ejs');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'node',
    password: 'websystem',
    database: 'web'
});

server.get('/', function( req, res ) {
    let sorting = req.query.sorting || '人口';
    let number = req.query.number || 10;
    let query = 'select id, 都道府県, ' + sorting + ' as population ' + ' 国立大学'+' from example order by ' + sorting + ' desc limit ' + number + ';';
    console.log( query );
    connection.query( query, (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'sql2.ejs', { content: rows });
    });
});

server.get('/bat', function( req, res ) {
    
    let query = 'select batting.id, batting.year,batting.HR, team.name'+' from batting inner join team on batting.team_id = team.id limit 10 ';';
    console.log( query );
    connection.query( query, (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'sql2.ejs', { content: rows });
    });
});


server.listen( 80, function() {
    console.log( 'listening on port 80' );
});

