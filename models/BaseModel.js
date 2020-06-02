const { Model } = require('objection');

class BaseModel extends Model {
  // Objection Model Configs
  static get modelPaths() {
    return [__dirname];
  }
  static get tableName() {
    return this.name;
  }
  static get useLimitInFirst() {
    return true;
  }
  static get timestamp() {
    return true;
  }
}

module.exports = BaseModel;
