import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,

  actions: {
    updateAnswerForm() {
      this.set('updateAnswerForm', true);
    },

    updateAnswer(answer) {
      var params = {
        answer_author: this.get('answer_author'),
        notes: this.get('notes'),
        question: this.get('question')
      };
      this.set('updateAnswerForm', false);
      this.sendAction('updateAnswer', answer, params);
    }
  }

});
