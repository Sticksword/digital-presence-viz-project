import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    submit(subroute) {
      this.transitionToRoute(`pillars.${subroute}`);
    }
  }
});
