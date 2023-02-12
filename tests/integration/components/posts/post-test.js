import { module, test } from 'qunit';
import { setupRenderingTest } from 'llamas-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import EmberObject from '@ember/object';
import { faker } from '@faker-js/faker';

module('Integration | Component | posts/post', function (hooks) {
	setupRenderingTest(hooks);

	const post = EmberObject.create({
		id: faker.datatype.uuid(),
		title: faker.lorem.sentence(2),
		text: faker.lorem.sentence(5),
		walletId: faker.datatype.uuid(),
	});

	test('it renders', async function (assert) {
		this.set('post', post);
		await render(hbs`<Posts::Post @post={{this.post}}/>`);
		const h1 = this.element.querySelector('h1');
		assert.dom('h1').hasClass('text-xl');
		assert.dom(h1).hasText(post.title);
		assert.dom(this.element.querySelector('p')).hasText(post.text);
	});

	test('it shows edit button', async function (assert) {
		const token = this.owner.lookup('service:token');
		token.address = post.walletId;
		this.set('post', post);
		await render(hbs`<Posts::Post @post={{this.post}}/>`);

		assert.dom(this.element.querySelector('button')).hasClass('edit-post');
	});

	test('it hides edit button', async function (assert) {
		const token = this.owner.lookup('service:token');
		token.address = '1234';
		this.set('post', post);
		await render(hbs`<Posts::Post @post={{this.post}}/>`);

		assert.dom(this.element.querySelector('button')).doesNotExist();
	});
});
