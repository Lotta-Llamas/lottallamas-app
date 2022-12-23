import RESTAdapter from '@ember-data/adapter/rest';
import { singularize } from 'ember-inflector';

export default class ApplicationAdapter extends RESTAdapter {
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
