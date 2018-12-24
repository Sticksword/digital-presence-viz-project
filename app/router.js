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
  this.route('pillars', function() {
    this.route('learning');
    this.route('exploring');
    this.route('family');
    this.route('contributing');
    this.route('winning');
    this.route('gaming');
    this.route('programming');
  });
  this.route('goals');
  this.route('progress-reports');
});

export default Router;
