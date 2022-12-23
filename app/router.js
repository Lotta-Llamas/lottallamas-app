import EmberRouter from '@ember/routing/router';
import config from 'llamas-app/config/environment';

export default class Router extends EmberRouter {
	location = config.locationType;
	rootURL = config.rootURL;
}

Router.map(function () {
	this.route('content', function () {
		this.route('posts', { path: '/:content_id' });
	});
	this.route('post', { path: '/:post_id' });
});
