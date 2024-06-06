const clicButton = document.querySelector('body');
// const hexLetters = ['A', 'B', 'C', 'D', 'E', 'F'].map(letter => letter.toLowerCase());

function randomHexColor(longitud = 6) {
    const hexLetters = 'abcdef0123456789'.toUpperCase();
    let result = '#';
    for (let i = 0; i < longitud; i++) {
        result += hexLetters.charAt(Math.floor(Math.random() * hexLetters.length));
      }
      return result;
}



console.log(randomHexColor())

function x() {
    clicButton.addEventListener('click', (event) => {
        clicButton.style.backgroundColor = randomHexColor();
        document.getElementById('hexHead').textContent = randomHexColor()
    })
}

x();