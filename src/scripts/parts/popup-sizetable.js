export default function initSizeTable() {
  const $ = require('jquery');
  require('magnific-popup');

  $('.item-custom__table').magnificPopup({
    type: 'inline'
  });
}