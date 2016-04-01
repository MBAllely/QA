import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions: {
    updateAnswerForm() {
      this.set('updateAnswerForm', true);
    },
    
    updateAnswer(answer) {
      var params = {
        author: this.get('author') ? this.get('author'): "",
        body: this.get('body') ? this.get('body'): "",
        question: this.get('question')
      };
      this.set('updateAnswerForm', false);
      this.sendAction('updateAnswer', answer, params);
    },
    
    deleteAnswer(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('deleteAnswer', answer);
      }
    }
  }
});
