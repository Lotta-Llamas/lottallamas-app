import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import ENV from 'llamas-app/config/environment';

export default class PublicIndexRoute extends Route {
	@service store;

	async model() {
		const response = await fetch(`${ENV.host}/api/public`)
		const { posts } = await response.json();

		this.store.pushPayload('post', { posts: posts });

		return hash({
			posts
		});
	}
}
