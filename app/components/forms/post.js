import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class FormsPostComponent extends Component {
	@service router;

	@action save() {
		event.preventDefault();
		const contentId = this.args.post.contentId;
		this.args.post.save().then(() => {
			this.router.transitionTo('tokens.token', contentId);
		});
	}

	@action cancel() {
		this.router.transitionTo('tokens.token', this.args.post.contentId);
	}
}
