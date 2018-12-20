import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('insights', function() {
    this.route('aster');
  });
  this.route('pillars');
  this.route('goals');
  this.route('progress-reports');
});

export default Router;
