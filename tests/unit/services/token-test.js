import { module, test } from 'qunit';
import { setupTest } from 'llamas-app/tests/helpers';

module('Unit | Service | token', function (hooks) {
	setupTest(hooks);
	test('it exists', function (assert) {
		let service = this.owner.lookup('service:token');
		assert.ok(service);
	});
	// TODO: Decide how the transition should work.  This token service is gross right now
	//
	// test('it clears token', function (assert) {
	// 	let service = this.owner.lookup('service:token');
	// 	localStorage.setItem('token', '1234');
	// 	localStorage.setItem('address', '1234');

	// 	service.clear();

	// 	assert.ok(service);
	// });
});
