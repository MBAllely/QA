import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,

  actions: {
    deleteAnswer(answer) {
    if (confirm('Are you sure you want to delete this answer?')) {
      this.sendAction('deleteAnswer', answer);
      }
    },
    updateAnswerForm() {
      this.set('updateAnswerForm', true);
    },

    updateAnswer(answer) {
      var params = {
        answer_author: this.get('answer_author'),
        notes: this.get('notes'),
        question: this.get('question')
      };
      console.log(params);
      this.set('updateAnswerForm', false);
      this.sendAction('updateAnswer', answer, params);
    }
  }

});
