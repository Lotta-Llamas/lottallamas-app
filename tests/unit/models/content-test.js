import { module, test } from 'qunit';

import { setupTest } from 'llamas-app/tests/helpers';

module('Unit | Model | content', function (hooks) {
	setupTest(hooks);

	// Replace this with your real tests.
	test('it exists', function (assert) {
		let store = this.owner.lookup('service:store');
		let model = store.createRecord('content', {});
		assert.ok(model);
	});
});
