import EmberRouter from '@ember/routing/router';
import config from 'llamas-app/config/environment';

export default class Router extends EmberRouter {
	location = config.locationType;
	rootURL = config.rootURL;
}

Router.map(function () {
	this.route('tokens', function () {
		this.route('token', { path: '/:token' }, function () {
			this.route('posts', function () {
				this.route('create');
				this.route('index', { path: '/' });
				this.route('post', { path: '/:post_id' });
			});
		});
		this.route('register');
	});
	this.route('settings');
});
