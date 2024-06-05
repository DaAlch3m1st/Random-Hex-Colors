const clicButton = document.querySelector('body');
const hexLetters = ['A', 'B', 'C', 'D', 'E', 'F'].map(letter => letter.toLowerCase());


function x() {
    clicButton.addEventListener('click', (event) => {
        clicButton.style.backgroundColor = '#000'
    })
}

x();