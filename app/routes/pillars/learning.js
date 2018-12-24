import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {'name': 'classes', 'content': 'OMS & classes'},
      {'name': 'books', 'content': 'Books & reviews & quotes'},
      {'name': 'languages', 'content': 'languages'}
    ];
  }
});
