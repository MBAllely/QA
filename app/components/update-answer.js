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
      this.toggleProperty('updateAnswerForm');
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
