import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class TokensTokenPostsCreateRoute extends Route {
	@service router;

	@service store;

	@service token;

	model() {
		return this.store.createRecord('post', {
			content: this.modelFor('tokens.token'),
			contentId: this.modelFor('tokens.token').id,
			walletId: this.token.address,
		});
	}

	@action willTransition(transition) {
		// eslint-disable-next-line ember/no-controller-access-in-routes
		const model = this.controller.get('model');
		if (model.hasDirtyAttributes) {
			if (confirm('Are you sure you want to abandon progress?') && model) {
				model.rollbackAttributes();
			} else {
				transition.abort();
			}
		}
	}
}
