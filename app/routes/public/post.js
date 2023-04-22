import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import ENV from 'llamas-app/config/environment';

export default class PublicPostRoute extends Route {
	@service store;

	async model(params) {
		const response = await fetch(`${ENV.host}/api/public/${params.post_id}`);
		const { post } = await response.json();
		return hash({
			post,
		});
	}
}
