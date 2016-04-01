import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.belongsTo('question', { async: true }),
  author: DS.attr(),
  body: DS.attr(),
  date: DS.attr('date', { defaultValue() { return new Date(); }})
});
