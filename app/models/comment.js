import Model, { attr, belongsTo } from '@ember-data/model';

export default class CommentModel extends Model {
	@attr comment;
	@attr postId;
	@attr walletId;
	@belongsTo('post', { async: true, inverse: 'comments' }) post;
}
