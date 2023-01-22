import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class PostModel extends Model {
	@attr title;
	@attr text;
	@attr walletId;
	@attr contentId;
	@attr createdAt;
	@attr updatedAt;
	@belongsTo('content', { async: true, inverse: 'posts' }) content;
	@hasMany('comment', { async: true, inverse: 'post' }) comments;
}
