import RESTAdapter from '@ember-data/adapter/rest';
import { singularize } from 'ember-inflector';
import ENV from 'llamas-app/config/environment';

export default class ApplicationAdapter extends RESTAdapter {
	host = ENV.host;
	namespace = 'api';
	pathForType(modelName) {
		return singularize(modelName);
	}
	get headers() {
		return {
			Authorization: localStorage.getItem('token'),
			Address: localStorage.getItem('address'),
		};
	}
}
