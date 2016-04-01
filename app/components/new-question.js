import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true)
    },

    saveQuestion() {
      var params = {
        author: this.get('author') ? this.get('author'): "",
        title: this.get('title') ? this.get('title'): "",
        body: this.get('body') ? this.get('body'): "",
        category: this.get('category') ? this.get('category'): "",
        answers: []
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
