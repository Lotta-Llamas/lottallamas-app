import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class FormsCreatePostComponent extends Component {
	@service router;

	@action save() {
		event.preventDefault();
		const contentId = this.args.post.contentId;
		this.args.post.save();
		this.router.transitionTo('tokens.token', contentId);
	}

	@action cancel() {
		const contentId = this.args.post.contentId;
		// this.args.post.rollbackAttributes();
		this.router.transitionTo('tokens.token', contentId);
	}
}
