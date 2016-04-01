import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  body: DS.attr(),
  category: DS.attr(),
  notes: DS.attr(),
  date: DS.attr('date', { defaultValue() { return new Date(); }}),
  answers: DS.hasMany('answer', { async: true })
});
