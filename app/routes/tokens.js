import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TokensRoute extends Route {
	constructor() {
		super(...arguments);
		this.token = localStorage.getItem('token');
		this.address = localStorage.getItem('address');
	}

	@service store;

	model() {
		if (!this.token || !this.address) {
			return false;
		}

		return this.store.findAll('content');
	}
}
