import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TokensRoute extends Route {
	constructor() {
		super(...arguments);
		this.token = localStorage.getItem('token');
		this.address = localStorage.getItem('address');
	}

	@service store;
	@service router;
	@service('token') tokenService;

	beforeModel() {
		if (!this.tokenService.token) {
			this.router.transitionTo('/');
		}
	}

	async model() {
		if (!this.token || !this.address) {
			return false;
		}

		const content = await this.store.findAll('content');

		if (content.length) {
			this.router.transitionTo('tokens.token', content[0].id)
		}

		return content;
	}
}
