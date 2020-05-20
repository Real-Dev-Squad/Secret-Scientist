import { joinArrayAsString } from '../helpers';
import Worker from '../webworker/app.worker';

// const INPUT = 'RAUNAK';
const KEY = 10;
const MAX_TOKEN = 25;

/**
 * Maps alphabets to number equivalent
 * @param {string} value - The input string; "ABC"
 * @return {array} - Mapped array of numbers; [0,1,2]
 */

function mapWordToNumbers(word) {
	if (!word) throw new Error('Please enter a word');
	const numbersArray = [];
	for (let letter of word) {
		numbersArray.push(letter.toLowerCase().charCodeAt(0) - 97);
	}
	return numbersArray;
}

/**
 * Add Key to each number equivalent
 * @param {array} value - The numeric equivalent array; [0,1,2]
 * @param {number} value - Key value that needs to be added; 10
 * @return {array} - Mapped array of numbers with key; [10,11,12]
 */

function addNumbersWithKey(numbersArray, key) {
	if (key > 50) throw new Error("Key can't be more than 50");
	return numbersArray.map((num) => num + Number(key));
}

/**
 * Applies the algorithm and generates encrypted number equivalents
 * @param {array} value -  Mapped array of numbers with key; [10,11,12]
 * @return {array} - Mapped array of encrypted numbers; [153,370,371]
 */

function encryptNumbersWithAlgorithm(numbersWithKey) {
	return new Promise((resolve, reject) => {
		const myWorker = new Worker();
		myWorker.postMessage(numbersWithKey);
		myWorker.addEventListener('message', (event) => resolve(event.data));
		myWorker.addEventListener('error', reject);
	})
		.then((results) => {
			return results;
		})
		.catch((err) => err);
}

/**
 * Divides encrypted numbers string into token blocks
 * @param {string} value -  String of encrypted numbers; 153370371
 * @param {number} value -  Maximum token; 25
 * @return {array} -Array of max token blocks; [[15],[3],[3],[7],[3],[7],[1]]
 */

function convertEncryptedStringToMaxTokenBlocks(str, maxToken) {
	const string = str.trim();
	let i = 0;
	const resultArray = [];
	while (i < string.length) {
		const numPlusOne = Number(string[i] + string[i + 1]);
		if (numPlusOne > maxToken || i === string.length - 1) {
			resultArray.push([Number(string[i])]);
			i = i + 1;
		} else {
			const numString = string[i] + string[i + 1];
			resultArray.push([Number(numString)]);
			i = i + 2;
		}
	}
	return resultArray;
}

/**
 * Maps maximum token blocks to the respective alphabets
 * @param {array} value -  Array of max token blocks; [[15],[3],[3],[7],[3],[7],[1]]
 * @return {string} - Mapped String of alphabets; PDDHDHB
 */

function mapEncryptedKeysToWord(keys) {
	const charactersArray = [];
	for (let key of keys) {
		charactersArray.push(String.fromCharCode(65 + key[0]));
	}
	return joinArrayAsString(charactersArray);
}

function encyptionModule(word) {
	const numberArray = mapWordToNumbers(word);
	const numbersWithKey = addNumbersWithKey(numberArray, KEY);
	console.log(numbersWithKey, 'numbersWithKey');
	return new Promise((resolve, reject) => {
		encryptNumbersWithAlgorithm(numbersWithKey)
			.then((res) => {
				console.log(res, 'RES');
				let encyptedNumbers = res;
				console.log(encyptedNumbers, 'encyptedNumbers');
				const joinedArray = joinArrayAsString(encyptedNumbers);
				console.log(joinedArray, 'joinedArray');
				const encryptedTokenBlocks = convertEncryptedStringToMaxTokenBlocks(
					joinedArray,
					MAX_TOKEN
				);
				console.log(encryptedTokenBlocks, 'encryptedTokenBlocks');
				const encryptedWord = mapEncryptedKeysToWord(encryptedTokenBlocks);
				console.log(encryptedWord, 'encryptedWord');
				resolve(encryptedWord);
			})
			.catch((err) => reject(err));
	});
}

export default encyptionModule;
