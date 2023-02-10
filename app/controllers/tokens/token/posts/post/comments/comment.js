import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TokensTokenPostsPostCommentsCommentController extends Controller {
	@service router;

	@service store;

	@tracked commentText = null;

	@action hasSaved() {
		this.router.transitionTo('tokens.token.posts.post');
	}
}
