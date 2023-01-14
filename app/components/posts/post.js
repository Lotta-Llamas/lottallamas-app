import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PostsPostComponent extends Component {
	@tracked isEditing = false;

	@action editPost() {
		this.isEditing = true;
	}
}
