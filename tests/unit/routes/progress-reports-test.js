import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | progress-reports', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:progress-reports');
    assert.ok(route);
  });
});
