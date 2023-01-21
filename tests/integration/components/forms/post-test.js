import { module, test } from 'qunit';
import { setupRenderingTest } from 'llamas-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { faker } from '@faker-js/faker';

module('Integration | Component | forms/post', function (hooks) {
	setupRenderingTest(hooks);
	const post = {
		id: faker.datatype.uuid(),
		title: faker.lorem.sentence(2),
		text: faker.lorem.sentence(5),
		walletId: faker.datatype.uuid(),
		contentId: faker.datatype.uuid(),
		createdAt: faker.date.recent(),
		updatedAt: faker.date.recent(),
	};
	test('it renders', async function (assert) {
		this.set('post', post);
		await render(hbs`<Forms::Post @post={{this.post}}/>`);
		assert.dom(this.element.querySelector('#title')).hasValue(post.title);
		assert.dom(this.element.querySelector('textarea')).hasValue(post.text);
		assert.dom(this.element.querySelectorAll('button')[0]).hasText('Cancel');
		assert.dom(this.element.querySelectorAll('button')[1]).hasText('Save');
	});

	test('it displays delete button', async function (assert) {
		this.set('post', post);
		await render(hbs`<Forms::Post @post={{this.post}} @isDeletable={{true}}/>`);
		assert.dom(this.element.querySelectorAll('button')[0]).hasText('Delete post');
	});
});
