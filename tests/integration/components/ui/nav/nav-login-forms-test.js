import { module, test } from 'qunit';
import { setupRenderingTest } from 'llamas-app/tests/helpers';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui/nav/nav-login-forms', function (hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function (assert) {
		this.set('deployDropdown', () => {
			assert.expect();
		});
		await render(hbs`
			<Ui::Nav::NavLoginForms @deployDropdown={{this.deployDropdown}}/>
		`);
		assert.dom('.nav-login').exists();
		await click('.nav-login');
		assert.dom(this.element.querySelector('form')).exists();
	});
});
