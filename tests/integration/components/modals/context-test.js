import { module, test } from 'qunit';
import { setupRenderingTest } from 'llamas-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | modals/context', function (hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function (assert) {
		// Template block usage:
		await render(hbs`
      <Modals::Context>
        template block text
      </Modals::Context>
    `);

		assert.dom(this.element).hasText('template block text');
	});
});
