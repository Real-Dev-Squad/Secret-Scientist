import Worker from './app.worker';

export const encryptNumberWorker = (numbersWithKey) => {
	return new Promise((resolve, reject) => {
		const myWorker = new Worker();
		myWorker.postMessage(numbersWithKey);
		myWorker.addEventListener('message', (event) => resolve(event.data));
		myWorker.addEventListener('error', (err) => reject(err));
	});
};
