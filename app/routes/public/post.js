import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class PublicPostRoute extends Route {
	@service store;

	model(params) {
		return hash({
			post: this.store.peekRecord('post', params.post_id),
		});
	}
}
