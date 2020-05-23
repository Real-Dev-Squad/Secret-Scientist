import { LRU_CACHE } from '../cache/lruCache';

import nnGenerator from './workers';
const myCache = LRU_CACHE(50);

self.addEventListener('message', (event) => {
	const numbersWithKey = event.data;

	const resultArray = [];

	for (let num of numbersWithKey) {
		let myCacheValue = myCache.read(num);
		if (myCacheValue) {
			resultArray.push(myCacheValue);
		} else {
			let ans = nnGenerator(num);
			resultArray.push(ans);
			myCache.write(num, ans);
		}
	}
	postMessage(resultArray);
});
