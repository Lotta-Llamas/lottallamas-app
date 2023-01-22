import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TokensTokenPostsPostEditRoute extends Route {
	@service store;

	model(params) {
		return this.store.findRecord('post', params.post_id);
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
