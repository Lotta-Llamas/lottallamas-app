import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class PostModel extends Model {
	@attr title;
	@attr content;
	@attr walletId;
	@attr contentId;
	// @belongsTo('content') content;
	@hasMany('comment') comments;
}
