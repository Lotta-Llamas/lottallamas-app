import { module, test } from 'qunit';
import { setupTest } from 'llamas-app/tests/helpers';

module('Unit | Controller | tokens/token/posts/post', function (hooks) {
	setupTest(hooks);

	// TODO: Replace this with your real tests.
	test('it exists', function (assert) {
		let controller = this.owner.lookup('controller:tokens/token/posts/post');
		assert.ok(controller);
	});
});
