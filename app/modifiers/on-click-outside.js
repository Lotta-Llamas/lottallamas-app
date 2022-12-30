import { modifier } from 'ember-modifier';

export default modifier((element, [safeOutside, callback]) => {
	function handleClick(event) {
		if (!element.contains(event.target) && event.target.id !== safeOutside) {
			callback();
		}
	}

	document.addEventListener('click', handleClick);

	return () => {
		document.removeEventListener('click', handleClick);
	};
});
