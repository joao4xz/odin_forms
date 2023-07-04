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

function printInput() {
  document.getElementById("user-form").addEventListener("submit", (event) => {
    event.preventDefault();

    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phone-number").value;

    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Phone Number: ${phoneNumber}`);

    document.getElementById('user-form').reset();
  })
}

validateInput();
printInput();
