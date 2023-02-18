import { module, test } from 'qunit';
import { setupRenderingTest } from 'llamas-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui/nav/logout-form', function (hooks) {
	setupRenderingTest(hooks);
	test('it renders', async function (assert) {
		localStorage.setItem('token', '1234');
		localStorage.setItem('address', '1234');

		await render(hbs`<Ui::Nav::LogoutForm />`);

		assert
			.dom(this.element.querySelector('.text-center'))
			.hasText('Wallet ID: 1234');
		assert.dom(this.element.querySelector('button')).hasText('Logout');
	});
});
