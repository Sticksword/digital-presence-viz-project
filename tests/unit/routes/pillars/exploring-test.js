import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pillars/exploring', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pillars/exploring');
    assert.ok(route);
  });
});
