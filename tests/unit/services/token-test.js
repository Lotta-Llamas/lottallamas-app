import { module, test } from 'qunit';
import { setupTest } from 'llamas-app/tests/helpers';

module('Unit | Service | token', function (hooks) {
	setupTest(hooks);

	// TODO: Replace this with your real tests.
	test('it exists', function (assert) {
		let service = this.owner.lookup('service:token');
		assert.ok(service);
	});
});
