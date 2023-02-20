import Service from '@ember/service';
import fetch from 'fetch';
import { service } from '@ember/service';
import ENV from 'llamas-app/config/environment';

export default class TokenService extends Service {
	constructor() {
		super(...arguments);
		this.token = localStorage.getItem('token');
		this.address = localStorage.getItem('address');
	}

	@service router;

	validateWallet(payload) {
		fetch(`${ENV.host}/api/validate-wallet`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(payload),
		}).then(async (response) => {
			const settledResponse = await response.json();
			localStorage.setItem('token', settledResponse.token);
			this.token = settledResponse.token;
			localStorage.setItem('address', settledResponse.address);
			this.address = settledResponse.address;
			this.router.transitionTo('/tokens');
			return;
		});
	}

	clear() {
		localStorage.removeItem('token');
		localStorage.removeItem('address');
		this.token = null;
		this.address = null;
		this.router.transitionTo('/');
	}
}
