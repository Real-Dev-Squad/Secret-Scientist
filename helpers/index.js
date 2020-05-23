export const containsJustCharacters = (inputVal) => {
	if (!/^[a-zA-Z]+$/.test(inputVal)) {
		return false;
	}
	return true;
};
