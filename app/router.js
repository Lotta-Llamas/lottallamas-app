import EmberRouter from '@ember/routing/router';
import config from 'llamas-app/config/environment';

export default class Router extends EmberRouter {
	location = config.locationType;
	rootURL = config.rootURL;
}

Router.map(function () {
	this.route('tokens', function () {
		this.route('token', { path: '/:token' }, function () {
			this.route('index', { path: '/' });
			this.route('posts', function () {
				this.route('create');
				this.route('edit', { path: '/:post_id/edit' });
				this.route('post', { path: '/:post_id' }, function () {
					this.route('comments', function () {
						this.route('comment', { path: '/:comment_id' }, function () {});
					});
				});
			});
		});
		this.route('register');
	});
	this.route('settings');
	this.route('public', { path: '/' }, function () {
		this.route('index', { path: '/' });
		this.route('post', { path: '/public/:post_id' });
	});
});
