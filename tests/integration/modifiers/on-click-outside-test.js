import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | on-click-outside', function (hooks) {
	setupRenderingTest(hooks);
	// Replace this with your real tests.
	test('it renders', async function (assert) {
		assert.expect(1);
		this.set('deployDropdown', () => {
			assert.ok(true);
		});

		this.set('safeOutside', 'login');
		await render(hbs`
			<div class="outside"></div>
			<div id="login"></div>
			<div class="thing" {{on-click-outside this.safeOutside this.deployDropdown}}></div>
		`);

		await click('.outside');
	});
});
