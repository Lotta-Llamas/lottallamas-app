import { module, test } from 'qunit';
import { setupRenderingTest } from 'llamas-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { faker } from '@faker-js/faker';

module(
	'Integration | Component | comments/comment-list-item',
	function (hooks) {
		setupRenderingTest(hooks);

		const comment = {
			id: faker.datatype.uuid(),
			comment: faker.lorem.sentence(5),
			postId: faker.datatype.uuid(),
			walletId: faker.datatype.uuid(),
			createdAt: faker.date.recent(),
			updatedAt: faker.date.recent(),
		};

		test('it renders', async function (assert) {
			this.set('comment', comment);
			await render(hbs`<Comments::CommentListItem  @comment={{this.comment}} />`);

			assert.dom(this.element).hasText(`${comment.walletId} ${comment.comment}`);
		});
	}
);
