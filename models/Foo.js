const { Model, compose } = require('objection');
const Guid = require('objection-guid');
const Timestamps = require('objection-timestamps').timestampPlugin;
const BaseModel = require('./BaseModel');

// @ts-ignore
const Plugins = compose(Guid(), Timestamps());

class Foo extends Plugins(BaseModel) {
  static get tableName() {
    return 'foos';
  }
  static get timestamp() {
    return true;
  }
  static get jsonSchema() {
    return {
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
        },
        barId: {
          type: 'integer',
        },
      },
      required: ['barId'],
      type: 'object',
    };
  }

  static get relationMappings() {
    const Bar = require('./Bar');
    return {
      bar: {
        relation: Model.BelongsToOneRelation,
        modelClass: Bar,
        join: {
          from: 'foos.barId',
          to: 'bars.id',
        },
      },
    };
  }
}

module.exports = Foo;
