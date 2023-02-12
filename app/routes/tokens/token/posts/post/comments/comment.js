import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TokensTokenPostsPostCommentsCommentRoute extends Route {
	@service store;

	async model({ comment_id }) {
		return await this.store.peekRecord('comment', comment_id);
	}
}
