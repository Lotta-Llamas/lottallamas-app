import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class FormsPostComponent extends Component {
	@service router;

	@action save() {
		event.preventDefault();
		this.args.post.save().then(() => {
			this.router.transitionTo('tokens.token.posts.post', this.args.post);
		});
	}

	@action cancel() {
		this.router.transitionTo('tokens.token.posts.post', this.args.post);
	}
}
