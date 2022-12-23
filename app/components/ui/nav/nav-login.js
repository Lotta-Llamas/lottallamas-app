import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class UiNavNavLoginComponent extends Component {
	constructor() {
		super(...arguments);
		this.isLoggedIn = this.token.token && this.token.address ? true : false;
	}
	@service token;
	@service router;

	@tracked isOpen = false;

	@tracked isLoggedIn = false;

	@action showLogin() {
		this.isOpen = this.isOpen ? false : true;
	}

	@action setLogin() {
		this.isLoggedIn = !this.isLoggedIn;
	}
}
