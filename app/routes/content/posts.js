import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ContentPostsRoute extends Route {
	@service store;
	model(params) {
		return this.store.query('post', { contentId: params.content_id });
	}
}
