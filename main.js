{
    'use strict';
    const MODEL = (() => {
        const alaphabets = [
            'A', 'B', 'C', 'D', 'E', 'F',
            'G', 'H', 'I', 'J', 'K', 'L',
            'M', 'N', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'W', 'X',
            'Y', 'Z'
        ];

        return {
            getAlphabetSequence: (alphabet) => alaphabets.indexOf(alphabet),
            encrypt: (message, key) => `${message} is encrypted with key ${key}!`,
            decrypt: (message) => `${message} is decrypted!`
        };
    })();

    const VIEW = (() => {
        const DOMStrings = {
            messageInput: document.querySelector('.message-in'),
            resultSpan: document.querySelector('.result-sp'),
            encDecButton: document.querySelector('.en-dec-btn'),
        };

        return {
            getMessageDetails: () => DOMStrings.messageInput.value.split('.'),
            showResult: (text) => DOMStrings.resultSpan.textContent = text,
            getDOMStrings: () => DOMStrings,
        };
    })();

    const CONTROLLER = ((model, view) => {
        const processMessage = () => {
            const [message, key] = view.getMessageDetails();
            const processedString = key ? model.encrypt(message, key) : model.decrypt(message);
            view.showResult(processedString);
        };
        return {
            setupEventListeners: () => {
                view.getDOMStrings().encDecButton.addEventListener('click', processMessage);
            }
        };
    })(MODEL, VIEW);

    CONTROLLER.setupEventListeners();
}