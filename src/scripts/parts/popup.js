export default function initPopUpp() {
  const $ = require('jquery');
  require('magnific-popup');

  $('.popup').magnificPopup({
    type: 'inline'
  });

  $('.item-custom__table').magnificPopup({
    type: 'inline'
  });
}