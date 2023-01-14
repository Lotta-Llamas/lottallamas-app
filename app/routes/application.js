import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
	@service router;
	@service token;

	beforeModel() {
		if (!this.token.token) {
			this.router.transitionTo('/');
		} else {
			this.router.transitionTo('/tokens');
		}
	}
}
