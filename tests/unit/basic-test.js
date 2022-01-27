import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import $ from 'jquery';

module(`jquery import`, function (hooks) {
  setupTest(hooks);

  test('it works', function (assert) {
    assert.true($ instanceof Function, 'jquery is a function');
  });
});
