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

server.get('/player', function( req, res ) {
    
        let query =　"select * from player;";
    console.log( query );
    connection.query( query, (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'player.ejs', { content: rows });
    });
});

server.get('/team', function( req, res ) {
   
        let query =　"select * from team;";
    console.log( query );
    connection.query( query, (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'sql2.ejs', { content: rows });
    });
});

server.get('/batting', function( req, res ) {
   
        let query =　"select * from batting;";
    console.log( query );
    connection.query( query, (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'sql2.ejs', { content: rows });
    });
});

server.get('/create', function( req, res ) {
    let name = req.query.sorting || '';
    if (name.length ! = 0){
        let query =　" insert into player ( name ) values ( '" + name + " ' );";
    console.log( query );
    connection.query( query, (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'sql2.ejs', { content: rows });
    });
    };
});


server.listen( 80, function() {
    console.log( 'listening on port 80' );
});

