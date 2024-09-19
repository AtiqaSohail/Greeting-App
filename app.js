const form = document.getElementById('greeting-form');
const nameInput = document.getElementById('name');
const submitButton = document.getElementById('submit-button');
const greetingMessage = document.getElementById('greeting-message');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    if (name) {
        const greeting = `Hey, ${name}!`;
        greetingMessage.textContent = greeting;
    } else {
        alert('Please enter your name!');
    }
});

