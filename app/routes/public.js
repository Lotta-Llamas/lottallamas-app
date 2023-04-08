import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class PublicRoute extends Route {
	@service store;

	model() {
		return hash({
			posts: this.store.findAll('post'),
		});
	}
}
