import { module, test } from 'qunit';

import { setupTest } from 'llamas-app/tests/helpers';

module('Unit | Adapter | content', function (hooks) {
	setupTest(hooks);

	// Replace this with your real tests.
	test('it exists', function (assert) {
		let adapter = this.owner.lookup('adapter:content');
		assert.ok(adapter);
	});
});
