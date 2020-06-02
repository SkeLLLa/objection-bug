const { Model, knexSnakeCaseMappers } = require('objection');
const knex = require('knex');

Model.knex(
  knex({
    client: 'pg',
    connection: {
      host: 'dbhost',
      port: 25061,
      user: 'dbuser',
      password: 'dbpassword',
      database: 'db-api',
      ssl: {
        rejectUnauthorized: false,
        ca: '-----BEGIN CERTIFICATE-----\n' + '-----END CERTIFICATE-----\n',
      },
    },
    pool: {
      min: 2,
      max: 10,
    },
    ...knexSnakeCaseMappers(),
  })
);

exports.Foo = require('./Foo');
exports.Bar = require('./Bar');
