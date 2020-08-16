export default function initRules() {
  const $ = require('jquery');
  require('magnific-popup');

  $('.popup').magnificPopup({
    type: 'inline'
  });
}