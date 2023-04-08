import { module, test } from 'qunit';
import { setupRenderingTest } from 'llamas-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { faker } from '@faker-js/faker';

module('Integration | Component | posts/public-posts', function (hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function (assert) {
		const posts = [
			{
				id: faker.datatype.uuid(),
				title: faker.lorem.sentence(2),
				text: faker.lorem.sentence(5),
				walletId: faker.datatype.uuid(),
				isPublic: true,
				createdAt: faker.date.recent(),
				updatedAt: faker.date.recent(),
			},
			{
				id: faker.datatype.uuid(),
				title: faker.lorem.sentence(2),
				text: faker.lorem.sentence(5),
				walletId: faker.datatype.uuid(),
				isPublic: false,
				createdAt: faker.date.recent(),
				updatedAt: faker.date.recent(),
			},
		];
		this.set('posts', posts);

		await render(hbs`<Posts::PublicPosts @posts={{posts}} />`);

		const title = this.element.querySelectorAll('.text-xl');
		const walletId = this.element.querySelectorAll('.wallet-id');
		const paragraph = this.element.querySelectorAll('.post-text');
		assert.dom(title[0]).hasText(posts[0].title);
		assert.dom(walletId[0]).hasText(`Posted By: ${posts[0].walletId}`);
		assert.dom(paragraph[0]).hasText(posts[0].text);
		assert.dom(title[1]).hasText(posts[1].title);
		assert.dom(walletId[1]).hasText(`Posted By: ${posts[1].walletId}`);
		assert.dom(paragraph[1]).hasText(posts[1].text);

	});
});
