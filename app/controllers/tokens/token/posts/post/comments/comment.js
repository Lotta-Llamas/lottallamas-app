import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class TokensTokenPostsPostCommentsCommentController extends Controller {
	@service router;

	@service store;

	@action closeEdit() {
		this.router.transitionTo('tokens.token.posts.post');
	}

	@action submitComment() {
		this.model.save().then(() => {
			this.router.transitionTo('tokens.token.posts.post');
		});
	}
}
