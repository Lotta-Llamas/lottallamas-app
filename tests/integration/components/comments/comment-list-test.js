import { module, test } from 'qunit';
import { setupRenderingTest } from 'llamas-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { faker } from '@faker-js/faker';
import EmberObject from '@ember/object';

module('Integration | Component | comments/comment-list', function (hooks) {
	setupRenderingTest(hooks);
	test('it renders', async function (assert) {
		const contentId = faker.datatype.uuid();
		const walletId = faker.datatype.uuid();
		const comment = EmberObject.create({
			comment: 'Test comment 1',
			walletId,
			contentId,
		});
		this.set('comments', [comment]);
		await render(hbs`<Comments::CommentList @comments={{this.comments}} />`);
		const h3 = this.element.querySelector('h3');
		const p = this.element.querySelector('p');
		assert.dom(h3).hasText(comment.walletId);
		assert.dom(p).hasText(comment.comment);
	});

	test('nothing renders', async function (assert) {
		await render(hbs`<Comments::CommentList @comments="null" />`);
		const h3 = this.element.querySelector('h3');
		const p = this.element.querySelector('p');
		assert.dom(h3).doesNotExist();
		assert.dom(p).doesNotExist();
	});
});
