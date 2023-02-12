import { module, test } from 'qunit';
import { setupRenderingTest } from 'llamas-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { faker } from '@faker-js/faker';

module('Integration | Component | forms/comment', function (hooks) {
	setupRenderingTest(hooks);
	const walletId = faker.datatype.uuid();
	const comment = {
		id: faker.datatype.uuid(),
		comment: faker.lorem.sentence(5),
		postId: faker.datatype.uuid(),
		walletId,
		createdAt: faker.date.recent(),
		updatedAt: faker.date.recent(),
		post: { id: faker.datatype.uuid(), walletId },
	};

	test('it renders', async function (assert) {
		this.set('comment', comment);
		this.set('hasSaved', () => {
			console.log('has saved');
		});

		await render(hbs`
			<Forms::Comment @comment={{this.comment}} @hasSaved={{this.hasSaved}} as |submit create discard delete|>
				<div class="flex">
					<div class="grow">
						<div class="mt-2 ml-3 flex justify-end">
							<button {{on 'click' create}} class="submit-comment inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" type="button">Add Comment</button>
						</div>
					</div>
				</div>
			</Forms::Comment>
		`);

		// TODO: add saving when Mirage implementation
		// await click('.submit-comment');

		assert.dom(this.element).hasText('Add your comment Add Comment');
	});
});
