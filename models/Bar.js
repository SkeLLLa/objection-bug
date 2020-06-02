const { Model, compose } = require('objection');
// const Guid = require('objection-guid');
const Timestamps = require('objection-timestamps').timestampPlugin;
const BaseModel = require('./BaseModel');

// @ts-ignore
const Plugins = compose(Timestamps());

// @ts-ignore
class Bar extends Plugins(BaseModel) {
  static get tableName() {
    return 'bars';
  }
  static get timestamp() {
    return true;
  }
  static get jsonSchema() {
    return {
      properties: {
        id: {
          type: 'integer',
        },
        name: {
          type: 'string',
        },
      },
      type: 'object',
    };
  }

  static get relationMappings() {
    const Foo = require('./Foo');
    return {
      foos: {
        relation: Model.HasManyRelation,
        modelClass: Foo,
        join: {
          from: 'bars.id',
          to: 'foos.barId',
        },
      },
    };
  }
}

module.exports = Bar;
