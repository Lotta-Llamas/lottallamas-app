import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

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

	@tracked address = null;

	@tracked signature = null;

	get isDisabled() {
		return !this.address || !this.signature ? true : false;
	}

	@service token;

	@action send() {
		event.preventDefault();
		const payload = {
			message: this.message,
			address: this.address,
			signature: this.signature,
		};
		// TODO: wrap logging in after wallet validates
		this.token.validateWallet(payload);
		this.args.isLoggedIn();
	}
}
