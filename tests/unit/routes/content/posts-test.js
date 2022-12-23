import { module, test } from 'qunit';
import { setupTest } from 'llamas-app/tests/helpers';

module('Unit | Route | content/posts', function (hooks) {
	setupTest(hooks);

	test('it exists', function (assert) {
		let route = this.owner.lookup('route:content/posts');
		assert.ok(route);
	});
});
