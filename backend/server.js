'use strict';

const Hapi = require('@hapi/hapi');

const mongoose = require('mongoose')

const mongoURL = 'mongodb+srv://devtester:devtester@devtester.5j2jk.mongodb.net/zaplink?retryWrites=true&w=majority'

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('connected',  () => {
    console.log('MongoDB Conectado')
})

mongoose.connection.on('error',  (error) => {
    console.log('MongoDB Com Falha ', + error)
})

const contactRoutes = require('./routes/contact.routes')

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return {
                message: 'Welcome to Zaplink API',
                company: 'HenriqueCervi',
                course: 'DevTester'
            };
        }
    });

    server.route(contactRoutes)
   
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();