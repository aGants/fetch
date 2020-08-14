const $ = require('jquery');
import initSliders from './parts/sliders';
import popUp from './parts/popup';

$(document).ready(() => {
  initSliders();
  popUp();
});