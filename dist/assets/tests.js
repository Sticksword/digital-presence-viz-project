'use strict';

define('digital-presence-viz-project/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/aster-plot.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/aster-plot.js should pass ESLint\n\n3:10 - \'run\' is defined but never used. (no-unused-vars)\n9:10 - \'transition\' is defined but never used. (no-unused-vars)\n10:10 - \'easeCubicInOut\' is defined but never used. (no-unused-vars)\n72:5 - Unexpected console statement. (no-console)\n78:9 - Unexpected console statement. (no-console)\n100:9 - \'path\' is assigned a value but never used. (no-unused-vars)\n110:9 - \'outerPath\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('components/carousel-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/carousel-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/draw-circles-example-plot.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/draw-circles-example-plot.js should pass ESLint\n\n');
  });

  QUnit.test('components/hexagon-tile.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/hexagon-tile.js should pass ESLint\n\n');
  });

  QUnit.test('components/us-map.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/us-map.js should pass ESLint\n\n84:30 - \'d\' is defined but never used. (no-unused-vars)\n86:15 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/pillars/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/pillars/index.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/goals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/goals.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/insights.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/insights.js should pass ESLint\n\n');
  });

  QUnit.test('routes/insights/aster.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/insights/aster.js should pass ESLint\n\n');
  });

  QUnit.test('routes/pillars.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/pillars.js should pass ESLint\n\n');
  });

  QUnit.test('routes/pillars/competing.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/pillars/competing.js should pass ESLint\n\n');
  });

  QUnit.test('routes/pillars/exploring.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/pillars/exploring.js should pass ESLint\n\n');
  });

  QUnit.test('routes/pillars/family.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/pillars/family.js should pass ESLint\n\n');
  });

  QUnit.test('routes/pillars/gaming.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/pillars/gaming.js should pass ESLint\n\n');
  });

  QUnit.test('routes/pillars/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/pillars/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/pillars/learning.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/pillars/learning.js should pass ESLint\n\n');
  });

  QUnit.test('routes/pillars/potatoing.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/pillars/potatoing.js should pass ESLint\n\n');
  });

  QUnit.test('routes/pillars/programming.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/pillars/programming.js should pass ESLint\n\n');
  });

  QUnit.test('routes/progress-reports.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/progress-reports.js should pass ESLint\n\n');
  });

  QUnit.test('transitions.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transitions.js should pass ESLint\n\n');
  });
});
define('digital-presence-viz-project/tests/integration/components/aster-plot-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | real-aster-plot', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "RAQhyBAY",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"real-aster-plot\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "hbpzb9WE",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"real-aster-plot\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('digital-presence-viz-project/tests/integration/components/carousel-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | carousel-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "0r1sORKj",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"carousel-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "gCp1cBMe",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"carousel-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('digital-presence-viz-project/tests/integration/components/draw-circles-example-plot-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | draw-circles-example-plot', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "KYyZAwXd",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"draw-circles-example-plot\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "3/8HESeW",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"draw-circles-example-plot\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('digital-presence-viz-project/tests/integration/components/hexagon-tile-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | hexagon-tile', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "sZHVexZc",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"hexagon-tile\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "3J7Ug2qp",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"hexagon-tile\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('digital-presence-viz-project/tests/integration/components/us-map-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | us-map', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "A2b70Neg",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"us-map\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "jd3d+O8f",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"us-map\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('digital-presence-viz-project/tests/test-helper', ['digital-presence-viz-project/app', 'digital-presence-viz-project/config/environment', '@ember/test-helpers'], function (_app, _environment, _testHelpers) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
});
define('digital-presence-viz-project/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/aster-plot-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/aster-plot-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/carousel-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/carousel-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/draw-circles-example-plot-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/draw-circles-example-plot-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/hexagon-tile-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/hexagon-tile-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/us-map-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/us-map-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/goals-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/goals-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/insights-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/insights-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/insights/aster-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/insights/aster-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/pillars-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/pillars-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/pillars/contributing-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/pillars/contributing-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/pillars/exploring-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/pillars/exploring-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/pillars/family-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/pillars/family-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/pillars/gaming-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/pillars/gaming-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/pillars/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/pillars/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/pillars/learning-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/pillars/learning-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/pillars/programming-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/pillars/programming-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/pillars/winning-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/pillars/winning-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/progress-reports-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/progress-reports-test.js should pass ESLint\n\n');
  });
});
define('digital-presence-viz-project/tests/unit/routes/goals-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | goals', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:goals');
      assert.ok(route);
    });
  });
});
define('digital-presence-viz-project/tests/unit/routes/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('digital-presence-viz-project/tests/unit/routes/insights-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | insights', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:insights');
      assert.ok(route);
    });
  });
});
define('digital-presence-viz-project/tests/unit/routes/insights/aster-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | insights/aster', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:insights/aster');
      assert.ok(route);
    });
  });
});
define('digital-presence-viz-project/tests/unit/routes/pillars-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | pillars', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:pillars');
      assert.ok(route);
    });
  });
});
define('digital-presence-viz-project/tests/unit/routes/pillars/contributing-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | pillars/contributing', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:pillars/contributing');
      assert.ok(route);
    });
  });
});
define('digital-presence-viz-project/tests/unit/routes/pillars/exploring-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | pillars/exploring', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:pillars/exploring');
      assert.ok(route);
    });
  });
});
define('digital-presence-viz-project/tests/unit/routes/pillars/family-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | pillars/family', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:pillars/family');
      assert.ok(route);
    });
  });
});
define('digital-presence-viz-project/tests/unit/routes/pillars/gaming-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | pillars/gaming', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:pillars/gaming');
      assert.ok(route);
    });
  });
});
define('digital-presence-viz-project/tests/unit/routes/pillars/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | pillars/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:pillars/index');
      assert.ok(route);
    });
  });
});
define('digital-presence-viz-project/tests/unit/routes/pillars/learning-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | pillars/learning', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:pillars/learning');
      assert.ok(route);
    });
  });
});
define('digital-presence-viz-project/tests/unit/routes/pillars/programming-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | pillars/programming', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:pillars/programming');
      assert.ok(route);
    });
  });
});
define('digital-presence-viz-project/tests/unit/routes/pillars/winning-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | pillars/winning', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:pillars/winning');
      assert.ok(route);
    });
  });
});
define('digital-presence-viz-project/tests/unit/routes/progress-reports-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | progress-reports', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:progress-reports');
      assert.ok(route);
    });
  });
});
define('digital-presence-viz-project/config/environment', [], function() {
  var prefix = 'digital-presence-viz-project';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('digital-presence-viz-project/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
