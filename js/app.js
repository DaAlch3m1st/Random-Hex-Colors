const clicButton = document.querySelector('button');

function randomHexCode(longitud = 6) {
    const hexLetters = 'abcdef0123456789'.toUpperCase();
    let result = '#';
    for (let i = 0; i < longitud; i++) {
        result += hexLetters.charAt(Math.floor(Math.random() * hexLetters.length));
      }
      return result;
}

console.log(randomHexCode())

function randomHexColor() {
    document.addEventListener('DOMContentLoaded', (event) => {
        const clicButton = document.getElementById('button');

    clicButton.addEventListener('click', () => {
        const newColor = randomHexCode()
        document.body.style.backgroundColor = newColor;
        document.getElementById('hexHead').textContent = randomHexCode()
    });
});
}

randomHexColor();