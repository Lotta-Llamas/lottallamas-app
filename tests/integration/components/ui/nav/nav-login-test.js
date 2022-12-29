import { module, test } from 'qunit';
import { setupRenderingTest } from 'llamas-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui/nav/nav-login', function (hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function (assert) {
		window.localStorage.clear();

		await render(hbs`<Ui::Nav::NavLogin />`);
		assert
			.dom(this.element.querySelectorAll('button')[1])
			.hasText('Validate Wallet');

		// TODO: Write test to cover token added to localStorage, i.e, conditional logic
	});
});
