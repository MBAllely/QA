import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.belongsTo('question', { async: true }),
  answer_author: DS.attr(),
  notes: DS.attr(),
  date: DS.attr('date', { defaultValue() { return new Date(); }})
});
