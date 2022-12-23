import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class UiNavLogoutFormComponent extends Component {
	@service token;
	@action clearToken() {
		this.token.clear();
		this.args.isLoggedIn();
	}
}
