import { module, test } from 'qunit';
import { setupTest } from 'llamas-app/tests/helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { Server, Model, hasMany, belongsTo } from 'miragejs'

module('Unit | Route | tokens', function (hooks) {
	setupTest(hooks);
	setupMirage(hooks);

	test('it exists', async function (assert) {
		let route = this.owner.lookup('route:tokens');
		const record = await route.model();
		// console.log(Server)
		console.log(record[1].id);
		assert.ok(route);
	});
});
