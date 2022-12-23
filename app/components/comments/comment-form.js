import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CommentsCommentFormComponent extends Component {
	@service store;

	@tracked comment = null;

	@action submitComment() {
		const comment = this.store.createRecord('comment', {
			comment: this.comment,
			postId: this.args.post.id,
			contentId: this.args.post.contentId,
			post: this.args.post,
		});
		comment.save().then(() => {
			this.comment = null;
		});
	}
}
