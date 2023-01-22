import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class TokensTokenPostsRoute extends Route {
	@service store;

	model() {
		const token = this.modelFor('tokens.token');
		return hash({
			token,
			posts: this.store.query('post', { contentId: token.id }),
		});
	}
}
