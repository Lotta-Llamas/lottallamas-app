import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class UiNavLogoutFormComponent extends Component {
	@service token;
	@service store;
	@action clearToken() {
		this.token.clear();
		this.args.isLoggedIn();
		this.store.unloadAll();
	}
}
