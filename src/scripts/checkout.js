const $ = require('jquery');
import emailCheck from './parts/feedback';
import initRules from './parts/popup-rules';


$(document).ready(() => {
  emailCheck();
  initRules();
});