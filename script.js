import encyptionModule from './modules/encryption';
import './style.css';
import { containsJustCharacters } from './helpers/index';

function onClick(operationType) {
	const inputVal = document.querySelector('.inputstring').value;
	if (operationType === 'encrypt') {
		// check if input contains just characters
		if (!containsJustCharacters(inputVal)) {
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
	}
}

document.getElementById('encrypt-button').onclick = () => onClick('encrypt');
