import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class PostsPostComponent extends Component {
	@service router;

	@action editPost() {
		this.router.transitionTo('tokens.token.posts.edit', this.args.post.id);
	}
}
