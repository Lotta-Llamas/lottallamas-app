import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class PostsPostComponent extends Component {
	@tracked isEditing = false;

	@service router;

	@action editPost() {
		this.router.transitionTo('tokens.token.posts.edit', this.args.post.id);
	}
}
