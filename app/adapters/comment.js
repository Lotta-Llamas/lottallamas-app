import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
	namespace = 'api';
	get headers() {
		return {
			Authorization: localStorage.getItem('token'),
			Address: localStorage.getItem('address'),
		};
	}
}
