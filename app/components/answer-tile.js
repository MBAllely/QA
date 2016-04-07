import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteAnswer(answer) {
      this.sendAction('deleteAnswer', answer);
    },
    updateAnswerForm() {
      this.set('updateAnswerForm', true);
    },
    updateAnswer(answer, params) {
      this.sendAction('updateAnswer', answer, params);
    }
  }
});
