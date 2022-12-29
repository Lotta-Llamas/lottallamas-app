import { module, test } from 'qunit';
import { setupRenderingTest } from 'llamas-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import EmberObject from '@ember/object';

module('Integration | Component | posts/post', function (hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function (assert) {
		const post = EmberObject.create({
			title: 'A Test Title',
			text: 'A made up bunch of words',
		});

		this.set('post', post);
		await render(hbs`<Posts::Post @post={{this.post}}/>`);
		const h1 = this.element.querySelector('h1');
		assert.dom('h1').hasClass('text-xl');
		assert.dom(h1).hasText(post.title);
		assert
			.dom(this.element.querySelector('p'))
			.hasText('A made up bunch of words');
	});
});
