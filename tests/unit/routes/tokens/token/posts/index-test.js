import { module, test } from 'qunit';
import { setupTest } from 'llamas-app/tests/helpers';

module('Unit | Route | tokens/token/posts/index', function (hooks) {
	setupTest(hooks);

	test('it exists', function (assert) {
		let route = this.owner.lookup('route:tokens/token/posts/index');
		assert.ok(route);
	});
});
