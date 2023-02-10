import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class TokensTokenPostsPostController extends Controller {
	@action hasSaved() {
		this.model.comments.update();
	}
}
