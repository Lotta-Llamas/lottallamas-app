import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UiNavNavLoginFormsComponent extends Component {
	constructor(owner, args) {
		super(owner, args);
		this.safeOutside = 'login';
		this.isLoggedIn = this.token.token && this.token.address ? true : false;
	}
	@service token;
	@service router;

	@tracked isLoggedIn;

	@action deployDropdown() {
		this.args.deployDropdown();
	}

	@action setLogin() {
		this.isLoggedIn = this.isLoggedIn ? false : true;
		this.args.deployDropdown();
	}
}
