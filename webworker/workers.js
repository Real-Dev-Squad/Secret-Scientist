const digit_pow = (n, pow = n.toString().length, sum = 0) =>
	n ? digit_pow(Math.floor(n / 10), pow, sum + (n % 10) ** pow) : sum;

function nnGenerator(num) {
	const numberArray = new Array(num);
	let count = 0;
	let i = 1;
	while (i) {
		if (digit_pow(i) === i) {
			if (numberArray[num - 1]) {
				return numberArray[num - 1];
			} else {
				numberArray[count++] = i;
			}
		}
		i++;
	}
	return false;
}

export default nnGenerator;
