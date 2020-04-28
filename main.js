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
            getAlphabetSequence: (alphabet) => alaphabets.indexOf(alphabet)
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
        const encrypt = (message, key) => view.showResult(`${message} encrypted, with key ${key}!!`);
        const decrypt = (message) => view.showResult(`${message} decrypted!!`);
        const processMessage = () => {
            const [message, key] = view.getMessageDetails();
            key ? encrypt(message, key) : decrypt(message);
        };
        return {
            setupEventListeners: () => {
                view.getDOMStrings().encDecButton.addEventListener('click', processMessage);
            }
        };
    })(MODEL, VIEW);

    CONTROLLER.setupEventListeners();
}