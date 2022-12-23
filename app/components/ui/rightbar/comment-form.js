import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
export default class UiRightbarCommentFormComponent extends Component {
	constructor() {
		super(...arguments);
		this.comment = null;
	}

	@service store;

	@action submitComment() {
		const comment = this.store.createRecord('comment', {
			comment: this.comment,
			postId: '6b62fa2a-13d1-465e-bd1d-7442b89cb47a',
			contentId: '1d1015e4-acb0-44ba-ae9c-556bb5d34ff4',
			post: this.args.post,
		});
		comment.save();
	}
}
