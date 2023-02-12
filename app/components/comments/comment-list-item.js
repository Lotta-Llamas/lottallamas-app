import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class CommentsCommentListItemComponent extends Component {
	get canEdit() {
		return this.token.address === this.args.comment.walletId;
	}

	@service router;

	@service token;

	@action edit(id) {
		this.router.transitionTo('tokens.token.posts.post.comments.comment', id);
	}
}
