import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class FormsCommentComponent extends Component {
	@service store;

	@action submit() {
		this.args.comment.save().then((record) => {
			this.args.hasSaved(record);
		});
	}
}
