import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      var params = {
        question: this.get('question'),
        answer_author: this.get('answer_author') ? this.get('answer_author'): "",
        notes: this.get('notes') ? this.get('notes'): "",
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
