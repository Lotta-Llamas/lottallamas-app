import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class CommentsCommentListItemComponent extends Component {
	@service router;

	@action edit(id) {
		this.router.transitionTo('tokens.token.posts.post.comments.comment', id);
	}
}
