import { module, test } from 'qunit';
import { setupRenderingTest } from 'llamas-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui/sidebar/details', function (hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function (assert) {
		const content = { title: 'test title', description: 'test desc'}

		this.set('content', content)

		await render(hbs`<Ui::Sidebar::Details @content={{this.content}} />`);

		const h3 = this.element.querySelector('h3');
		const p = this.element.querySelector('p');
		const button = this.element.querySelector('button');
		assert.dom(h3).hasText('test title');
		assert.dom(p).hasText('test desc');
		assert.dom(button).hasText('Create Post');
	});
});
