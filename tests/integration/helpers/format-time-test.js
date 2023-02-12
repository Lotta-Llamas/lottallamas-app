import { module, test } from 'qunit';
import { setupRenderingTest } from 'llamas-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | format-time', function (hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function (assert) {
		this.set('inputValue', '2023-02-12T05:51:23.289Z');
		await render(hbs`{{format-time this.inputValue}}`);
		assert.dom(this.element).hasText('Sun, Feb 12, 2023, 12:51 AM');
	});

	test('it displays Invalid Date with no input', async function (assert) {
		await render(hbs`{{format-time}}`);
		assert.dom(this.element).hasText('Invalid Date');
	});
});
