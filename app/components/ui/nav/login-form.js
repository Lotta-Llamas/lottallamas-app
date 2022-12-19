import Component from '@glimmer/component';
import fetch from 'fetch';
import { action } from '@ember/object';

// Stolen from https://attacomsian.com/blog/javascript-generate-random-string
const random = (length = 8) => {
	// Declare all characters
	let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
	// Pick characters randomly
	let str = '';
	for (let i = 0; i < length; i++) {
	  str += chars.charAt(Math.floor(Math.random() * chars.length));
	}
  
	return str;
};
  
export default class UiNavLoginFormComponent extends Component {
	constructor() {
		super(...arguments);
		this.message = random();
		this.address = null;
		this.signature = null;
	}
	@action send() {
		event.preventDefault();
		const payload = { message: this.message, address: this.address, signature: this.signature }
		fetch('http://localhost:3100/api/auth/validate-wallet', {
			method: 'POST',
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify(payload)
		}).then( async (response) => {
			const settledResponse = await response.json()
			localStorage.setItem('token', settledResponse.token)
			localStorage.setItem('address', this.address)
			return response.json();
		});
	}
}
