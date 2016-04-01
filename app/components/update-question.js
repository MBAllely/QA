import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true)
    },
    updateQuestion(question) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        body: this.get('body'),
        category: this.get('category')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('updateQuestion', question, params)
    }
  }
});
