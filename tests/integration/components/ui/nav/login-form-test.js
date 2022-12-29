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
});
