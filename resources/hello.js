'use strict';

exports.register = function register(server, options, next) {

    server.route({
        method: 'GET',
        path:'/hello',
        handler: function (request, reply) {

            return reply('hello world');
        }
    });

    server.route({
        method: 'GET',
        path: '/hello/{name}',
        handler: function (request, reply) {

            return reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
        }
    });

    next();
};

exports.register.attributes = {
    name: 'hello',
    version: '1.0.0'
}