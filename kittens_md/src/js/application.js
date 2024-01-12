import $ from './jquery-2.1.0.min.js'
import '/src/sass/styles.scss';

import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCTabScroller} from '@material/tab-scroller';
import {MDCRipple} from '@material/ripple';



const tabScroller = new MDCTabScroller(document.querySelector('.mdc-tab-scroller'));

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});

console.log("hola");
var names = ['Tiger', 'Samuel', 'Leeloo',
             'Bella', 'Mo', 'Sly',
             'Beezy', 'Maple', 'Rodney',
             'Yonce', 'Reginald', 'Winifred'];

var ages  = ['9 Weeks', '12 Weeks', '3 Months',
             '8 Weeks', '1 Year', '15 Weeks',
             '4 Months', '2 Months', '14 Weeks',
             '6 Months', '10 Weeks', '8 Months'];

             $('.kittens').find('.mdc-card').each( function(i, el) {
              var img = $(el).find('.kitten');
              var name = $(el).find('.name');
              var age = $(el).find('.age');
            
              var w = 250;
              var h = 250;
            
              img.attr('src', 'http://placekitten.com/'+w+'/'+h+'?image='+i);
              name.text(names[i]);
              age.text(ages[i]);
});
            
