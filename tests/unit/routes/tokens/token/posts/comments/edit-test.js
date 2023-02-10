import { module, test } from 'qunit';
import { setupTest } from 'llamas-app/tests/helpers';

module('Unit | Route | tokens/token/posts/comments/edit', function (hooks) {
	setupTest(hooks);

	test('it exists', function (assert) {
		let route = this.owner.lookup('route:tokens/token/posts/comments/edit');
		assert.ok(route);
	});
});
