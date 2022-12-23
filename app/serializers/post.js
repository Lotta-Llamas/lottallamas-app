import RESTSerializer, {
	EmbeddedRecordsMixin,
} from '@ember-data/serializer/rest';

export default class PostSerializer extends RESTSerializer.extend(
	EmbeddedRecordsMixin
) {
	attrs = {
		comments: { embedded: 'always' },
	};
}
