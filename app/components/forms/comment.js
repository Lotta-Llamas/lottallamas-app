import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class FormsCommentComponent extends Component {
	constructor() {
		super(...arguments);
		this.text = this.args.comment.comment ? this.args.comment.comment : null;
	}
	@tracked text = null;

	@service store;

	@action create() {
		this.store
			.createRecord('comment', {
				comment: this.text,
				walletId: this.args.comment.post.walletId,
				postId: this.args.comment.post.id,
			})
			.save()
			.then((record) => {
				this.text = null;
				this.args.hasSaved(record);
			});
	}

	@action submit() {
		this.args.comment.comment = this.text;
		this.args.comment.save().then((record) => {
			this.args.hasSaved(record);
		});
	}

	@action delete() {
		this.args.comment.destroyRecord().then((record) => {
			this.args.hasSaved(record);
		});
	}

	@action discard() {
		this.text = null;
		this.args.hasSaved();
	}
}
