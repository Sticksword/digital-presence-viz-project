import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pillars/learning', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pillars/learning');
    assert.ok(route);
  });
});
