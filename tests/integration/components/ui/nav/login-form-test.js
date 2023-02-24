import { module, test } from 'qunit';
import { setupRenderingTest } from 'llamas-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui/nav/login-form', function (hooks) {
	setupRenderingTest(hooks);
	test('it renders', async function (assert) {
		await render(hbs`<Ui::Nav::LoginForm />`);
		assert.dom(this.element.querySelector('button')).hasText('Validate Wallet');
	});
	// TODO: Add some more test coverage(refactor)
	test('it disabled button if missing inputs', async function (assert) {
		localStorage.clear();
		await render(hbs`<Ui::Nav::LoginForm />`);
		assert.dom(this.element.querySelector('button')).hasClass('opacity-25');
	});
});
