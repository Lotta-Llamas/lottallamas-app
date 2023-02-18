import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class FormsPostComponent extends Component {
	isDeletable = false;

	@service router;

	get isDisabled() {
		return !this.args.post.title || !this.args.post.text ? true : false;
	}

	@action save() {
		event.preventDefault();
		this.args.post.save().then(() => {
			this.router.transitionTo('tokens.token.posts.post', this.args.post.id);
		});
	}

	@action cancel() {
		if (this.args.post.id) {
			this.router.transitionTo('tokens.token.posts.post', this.args.post.id);
		} else {
			this.router.transitionTo('tokens.token');
		}
	}

	@action delete() {
		// TODO: Leaving this here for brevity, but should replace this with modal.
		if (confirm('Are you sure you want to delete this post?')) {
			this.args.post.deleteRecord();
			this.args.post.save().then(() => {
				this.router.transitionTo('tokens.token');
			});
		}
	}
}
