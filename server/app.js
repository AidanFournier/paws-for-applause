const express = require('express');
const morgan = require('morgan');

const petRouter = require('./routes/petRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
};

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
    console.log('Hello from the middleware ');
    next(); 
})

app.use((req, res, next) => {
    req.requestTtime = new Date().toISOString();
    next();
})

// Routers mounted:
app.use('/api/v1/pets', petRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;