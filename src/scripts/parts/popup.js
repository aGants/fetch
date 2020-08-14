export default function popUp() {
  const $ = require('jquery');
  require('magnific-popup');
  
  $('.popup').magnificPopup({
    type: 'inline'
  });
}
