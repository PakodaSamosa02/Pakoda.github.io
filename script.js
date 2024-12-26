document.addEventListener('DOMContentLoaded', function() {
    const message = document.createElement('p');
    message.textContent = "This is a dynamic message!";
    document.querySelector('.container').appendChild(message);
});
