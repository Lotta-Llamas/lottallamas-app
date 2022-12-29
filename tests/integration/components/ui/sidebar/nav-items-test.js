import { module, test } from 'qunit';
import { setupRenderingTest } from 'llamas-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { faker } from '@faker-js/faker';

module('Integration | Component | ui/sidebar/nav-items', function (hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function (assert) {
		const items = [
			{
				id: faker.datatype.uuid(),
				token: 'LLAMAS.test1',
				walletId: faker.datatype.uuid(),
			},
			{
				id: faker.datatype.uuid(),
				token: 'LLAMAS.test2',
				walletId: faker.datatype.uuid(),
			},
		];
		this.set('items', items);
		await render(hbs`<Ui::Sidebar::NavItems @items={{this.items}}/>`);
		const h3 = this.element.querySelectorAll('h3');
		const p = this.element.querySelectorAll('p');
		assert.dom(h3[0]).hasText(items[0].token);
		assert.dom(p[0]).hasText(items[0].walletId);
		assert.dom(h3[1]).hasText(items[1].token);
		assert.dom(p[1]).hasText(items[1].walletId);
	});

	test('it renders nothing', async function (assert) {
		await render(hbs`<Ui::Sidebar::NavItems />`);
		const h3 = this.element.querySelector('h3');
		const p = this.element.querySelector('p');
		assert.dom(h3).doesNotExist();
		assert.dom(p).doesNotExist();
		assert.dom(this.element).hasText('');
	});
});
