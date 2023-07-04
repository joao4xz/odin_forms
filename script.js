function validateInput() {
  const inputs = document.getElementsByTagName('input');

  [...inputs].forEach(input => {
    input.addEventListener('invalid', () => {
      input.classList.add('invalid-color');
    });
    input.addEventListener('click', () => {
      input.classList.remove('invalid-color');
    });
  });
}

validateInput();