import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationRoute extends Route {
	@service router;
	@service token;

	beforeModel(/* transition */) {
		if (this.token.token && this.token.address) {
			this.router.transitionTo('content');
		}
	}
	@action clearToken() {
		this.router.transitionTo('/');
	}
}
