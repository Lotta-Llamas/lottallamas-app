import RESTSerializer, {
	EmbeddedRecordsMixin,
} from '@ember-data/serializer/rest';

export default class ContentSerializer extends RESTSerializer.extend(
	EmbeddedRecordsMixin
) {
	attrs = {
		posts: { embedded: 'always' },
	};
}
