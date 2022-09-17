/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
	if (obj === null) {
		return {};
	}

	if (obj === undefined) {
		return undefined;
	}

	const arr = [];

	for (let [key, value] of Object.entries(obj)) {
		arr.push([value, key]);
	}

	return Object.fromEntries(arr);
}
