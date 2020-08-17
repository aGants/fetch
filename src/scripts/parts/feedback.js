export default function emailCheck() {
  const $ = require('jquery');
  let patternMail = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
  let patternPhone = /^[+]7[\d\(\)\ -]{10,15}\d$/;
  let mail = $('#mail');
  let phone = $('#phone');

  if (localStorage.getItem('person-mail')) {
    mail.val(localStorage.getItem('person-mail'));
  }

   if (localStorage.getItem('person-phone')) {
     phone.val(localStorage.getItem('person-phone'));
   }

  $('.main-order__button').on('click', function () {      
    if (mail.val() == '') { 
      showError(mail); 
      return false; 
    }
    if (mail.val().search(patternMail) != 0) { 
      showError(mail); 
      return false; 
    } else deleteError(mail);

    localSaveMail();

    if (phone.val() == '') { 
      showError(phone); 
      return false; 
    }
    if (phone.val().search(patternPhone) != 0) { 
      showError(phone); 
      return false; 
    } else deleteError(phone);
    localSavePhone(phone);
    document.location.href = "checkout-complete.html";
  });


  function showError(input) {
    input.css('border-color', 'red');
  };

  function deleteError(input) {
    input.css('border-color', '#DDDDDD');
  };

  function localSaveMail() {
    try {
      localStorage.setItem('person-mail', document.querySelector("#mail").value);
    } catch (e) {}
  }

  function localSavePhone() {
    try {
      localStorage.setItem('person-phone', document.querySelector("#phone").value);
    } catch (e) {}
    
  }
};