const submit = document.getElementsByClassName('submit');
const email = document.getElementsByClassName('email');
const errIcon = document.getElementsByClassName('errIcon');
const errMsg = document.getElementsByClassName('errMsg');

for (let i = 0; i < submit.length; i++) {
  submit[i].addEventListener('click', (e) => {
    const emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    for (let i = 0; i < submit.length; i++) {
      if (!emailFilter.test(email[i].value)) {
        e.preventDefault();
        email[i].style.border = '3px solid red';
        errIcon[i].style.display = 'block';
        errMsg[i].style.display = 'block';
        errMsg[i].style.color = 'red';
        errMsg[i].style.textAlign = 'left';
        errMsg[i].innerText = 'Please enter vaild email.';
      }
      else {
        e.preventDefault();
        email[i].style.border = '3px solid green';
        errIcon[i].style.display = 'none';
        errMsg[i].style.display = 'block';
        errMsg[i].style.color = 'green';
        errMsg[i].style.textAlign = 'left';
        errMsg[i].innerText = 'Success!';
      }
    }
  });
}