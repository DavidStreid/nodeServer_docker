const express = require('express');

// Middleware
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');	// Parse incoming bodies

// Database
const db = require('./db/db');

// API
const routes = require('./api/routes/routes');

function connectToMongo() {
    console.log('Connecting to mongo...');
    return new Promise(function(resolve, reject) {
        // TODO - Configure mongo url w/ conifg
        db.connect('mongodb://localhost:27017', function(err) {
            if (err) {
                reject(Error('Unable to connect to Mongo\n' + JSON.stringify(err) ));
            } else {
                resolve('Mongo listening on port 27017...');
            }
        })
    })
}

function appSetup() {
    const port = process.env.PORT || 4200;
    const app = express();

    // Middleware
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cookieParser());

    app.listen(port, function() {
        console.log(`Simple server started on port: ${port}`);

        routes(app);
        // Connect to mongo
        connectToMongo().then( function() {
            routes(app);
        });
    });
}

appSetup();
