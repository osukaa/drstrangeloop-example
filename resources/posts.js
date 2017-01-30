'use strict';

const Wreck = require('wreck');

exports.register = function register(server, options, next) {

    server.route({
        method: 'GET',
        path:'/posts',
        handler: function (request, reply) {

            Wreck.request('GET', 'https://jsonplaceholder.typicode.com/posts', null, (err, res) => {

                if (err) return reply(err);

                Wreck.read(res, { json: true }, (readErr, payload) => {

                    if (readErr) return reply(readErr);
                    return reply(payload);
                });
            });
        }
    });

    server.route({
        method: 'GET',
        path: '/posts/{id}',
        handler: function (request, reply) {

            Wreck.request('GET', `https://jsonplaceholder.typicode.com/posts/${request.params.id}`, null, (err, res) => {

                if (err) return reply(err);

                Wreck.read(res, { json: true }, (readErr, payload) => {

                    if (readErr) return reply(readErr);
                    return reply(payload);
                });
            });
        }
    });

    next();
};

exports.register.attributes = {
    name: 'posts',
    version: '1.0.0'
}