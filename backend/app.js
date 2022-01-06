const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const { environment } = require('./config');
const isProduction = environment === 'production';

const app = express();

const { ValidationError } = require('sequelize');

const routes = require('./routes')


//Middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());


//Security Middleware

//Only uses CORS in Development
if (!isProduction) {
    app.use(cors());
}

//Helmet helps set headers for better security
app.use(helmet({
    contentSecurityPolicy: false
}));

app.use(
    csurf({
        cookie: {
            secure: isProduction,
            //What is 'Lax' meant to be?
            sameSite: isProduction && 'Lax',
            httpOnly: true,
        },
    })
);

//Route Paths
app.use(routes);


//Error Handling

//Unhandled Requests
app.use((_req, _res, next) => {
    const err = new Error("The requested resource could not be found.");
    err.title = "Resource not found";
    err.errors = ["The requested resource could not be found"];
    err.status = 404;
    next(err);
})

//Sequelize Validation Errors
app.use((err, _req, _res, next) => {
    if(err instanceof ValidationError) {
        err.errors = err.errors.map((e) => e.message);
        err.title = "Validation Error";
    }
    next(err);
})

//Error Formator
app.use((err, _req, res, next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
        title: err.title || "Server Error",
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack,
    });
});

module.exports = app;
