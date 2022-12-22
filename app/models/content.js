import Model, { attr, hasMany } from '@ember-data/model';

export default class ContentModel extends Model {
	@attr walletId;
	@attr title;
	@attr description;
	@attr isPublic;
	@attr token;
	@hasMany('post') post;
}
