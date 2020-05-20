import { joinArrayAsString } from '../helpers';
import { ENCRYPTED_NUMBERS } from '../constants/narcissistNumbers';

const MAX_TOKEN = 25;

let KEY;

function convertEncryptedStringToMinTokenBlocks(str) {
	const string = str.trim();
	let i = 0;
	const resultArray = [];
	const encryptedNumberValues = Object.values(ENCRYPTED_NUMBERS);

	while (i < string.length) {
		const stringPlusOne = string[i] + string[i + 1];
		if (encryptedNumberValues.indexOf(stringPlusOne) >= 0) {
			resultArray.push(stringPlusOne);
		}
		if (numPlusOne > MAX_TOKEN || i === string.length - 1) {
			resultArray.push([string[i]]);
			i = i + 1;
		} else {
			const numString = string[i] + string[i + 1];
			resultArray.push([numString]);
			i = i + 2;
		}
	}
	return joinArrayAsString(resultArray);
}

function mapEncryptedLetterToNumbers(letters) {
	const numberArray = [];
	for (let letter of letters) {
		numberArray.push(letter.toLowerCase().charCodeAt(0) - 97);
	}
	return joinArrayAsString(numberArray);
}

function decryptionModule(inputValue, key) {
	KEY = key;
	const encryptedNumberBlocks = mapEncryptedLetterToNumbers(
		inputValue.toUpperCase()
	);
	console.log(encryptedNumberBlocks, 'encryptedNumberBlocks');
	const minTokenBlocks = convertEncryptedStringToMinTokenBlocks(
		encryptedNumberBlocks
	);
	console.log(minTokenBlocks, 'minTokenBlocks');
	return minTokenBlocks;
}

export default decryptionModule;
