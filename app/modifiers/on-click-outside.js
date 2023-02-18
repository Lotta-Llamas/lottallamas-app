import { modifier } from 'ember-modifier';

export default modifier((element, [safeOutside, callback]) => {
	function handleClick(event) {
		const node = event.target.parentNode.id;
		const tag = event.target.parentNode.tagName;
		if (
			!element.contains(event.target) &&
			node !== safeOutside &&
			tag !== 'svg'
		) {
			callback(false);
		}
	}

	document.addEventListener('click', handleClick);

	return () => {
		document.removeEventListener('click', handleClick);
	};
});
