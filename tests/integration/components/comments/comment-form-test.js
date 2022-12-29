import { module, test } from 'qunit';
import { setupRenderingTest } from 'llamas-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { faker } from '@faker-js/faker';
import EmberObject from '@ember/object';

module('Integration | Component | comments/comment-form', function (hooks) {
	setupRenderingTest(hooks);
	const postId = faker.datatype.uuid();
	const walletId = faker.datatype.uuid();
	test('it renders', async function (assert) {
		const post = EmberObject.create({
			comment: null,
			postId,
			walletId,
		});

		this.set('post', post);
		await render(hbs`<Comments::CommentForm @post={{this.post}} />`);
		assert.dom(this.element.querySelector('button')).hasText('Post');
	});
});
