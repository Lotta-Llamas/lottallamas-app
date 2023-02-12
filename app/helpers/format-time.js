import { helper } from '@ember/component/helper';

export default helper(function formatTime(positional /*, named*/) {
	const date = new Date(positional).toLocaleDateString('en-us', {
		weekday: 'short',
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		timeZone: 'America/New_York',
	});

	return date;
});
