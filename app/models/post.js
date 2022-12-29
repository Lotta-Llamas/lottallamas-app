import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class PostModel extends Model {
	@attr title;
	@attr text;
	@attr walletId;
	@attr contentId;
	@attr createdAt;
	@attr updatedAt;
	@belongsTo('content') content;
	@hasMany('comment') comments;
}
