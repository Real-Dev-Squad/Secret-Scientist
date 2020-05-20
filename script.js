import encyptionModule from './modules/encryption';
import decryptionModule from './modules/decryption';
import './style.css';

function onClick(operationType) {
	const inputVal = document.querySelector('.inputstring').value;
	if (operationType === 'encrypt') {
		if (!/^[a-zA-Z]+$/.test(inputVal)) {
			alert('Please input just characters');
			return;
		}
		document.getElementById('encrypt-input').innerHTML = inputVal;
		document.getElementById('encrypt-output').innerHTML = 'Loading...';
		encyptionModule(inputVal)
			.then((output) => {
				if (output)
					document.getElementById(
						'encrypt-output'
					).innerHTML = `Output: ${output}`;
			})
			.catch((err) => {
				document.getElementById('encrypt-output').innerHTML =
					"Couldn't encrypt the data";
			});
	} else {
		// alert('not supported yet');
		if (inputVal.indexOf('.') < 0) {
			alert('Please input encrypted value with key separated by dot');
			return;
		}
		const inputValueKeyArray = inputVal.split('.');
		const value = inputValueKeyArray[0];
		const key = inputValueKeyArray[1].slice(
			1,
			inputValueKeyArray[1].length - 1
		);
		if (!/^[a-zA-Z]+$/.test(value)) {
			alert('Please input just characters');
			return;
		}
		document.getElementById('decrypt-input').innerHTML = value;
		document.getElementById('decrypt-output').innerHTML = decryptionModule(
			value,
			key
		);
	}
}

document.getElementById('encrypt-button').onclick = () => onClick('encrypt');
document.getElementById('decrypt-button').onclick = () => onClick('decrypt');
