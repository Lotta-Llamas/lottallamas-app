import Service from '@ember/service';
import fetch from 'fetch';
import { service } from '@ember/service';

export default class TokenService extends Service {
	constructor() {
		super(...arguments);
		this.token = localStorage.getItem('token');
		this.address = localStorage.getItem('address');
	}

	@service router;

	validateWallet(payload) {
		fetch('http://localhost:3100/api/auth/validate-wallet', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(payload),
		}).then(async (response) => {
			const settledResponse = await response.json();
			localStorage.setItem('token', settledResponse.token);
			localStorage.setItem('address', settledResponse.address);
			this.router.transitionTo('/content');
			return;
		});
	}

	clear() {
		localStorage.removeItem('token');
		localStorage.removeItem('address');
		this.router.transitionTo('/');
	}
}
