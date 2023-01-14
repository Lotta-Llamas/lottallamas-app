import { module, test } from 'qunit';
import { setupRenderingTest } from 'llamas-app/tests/helpers';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui/nav/nav-login', function (hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function (assert) {
		localStorage.clear();

		await render(hbs`<Ui::Nav::NavLogin />`);

		await click('#login');

		assert
			.dom(this.element.querySelectorAll('button')[1])
			.hasText('Validate Wallet');
	});

	test('it shows logout if token/address present', async function (assert) {
		localStorage.setItem('token', '1234');
		localStorage.setItem('address', '1234');

		await render(hbs`<Ui::Nav::NavLogin />`);

		await click('#login');

		assert.dom(this.element.querySelectorAll('button')[1]).hasText('Logout');
	});
});
