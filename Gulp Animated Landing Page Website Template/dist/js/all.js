@charset "UTF-8";

a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
hr,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  border: 0;
  vertical-align: baseline;
  margin: 0;
  padding: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

li,
ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:after,
blockquote:before,
q:after,
q:before {
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

b,
strong {
  font-weight: 600;
}

html {
  position: static!important;
  top: 0!important;
  box-sizing: border-box;
}

*,
:after,
:before {
  box-sizing: inherit;
}

html {
  margin: 0;
  padding: 0;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

body {
  position: absolute;
  width: 100%;
  height: 100%;
}

body,
html {
  max-width: 100%;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
}

html.scrollable,
html.scrollable body {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

img {
  max-width: 100%;
  display: inline-block;
}

img.round {
  border-radius: 999px;
}

img.rounded {
  border-radius: 6px;
}

.slides {
  color: #fff;
  fill: #fff;
  font-family: Roboto,sans-serif;
  hyphens: none;
  background: #111;
  -webkit-font-smoothing: antialiased;
}

.slides.bodyWhite {
  background: #fff;
}

.slides.desktopSwipe {
  cursor: -webkit-grab;
}

.slides.desktopSwipe:active {
  cursor: -webkit-grabbing;
}

.slides.desktopSwipe .slide .container .wrap {
  cursor: inherit;
}

a {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  transition: .35s;
}

a.underline {
  text-decoration: underline;
}

a:hover {
  transition: .15s;
  opacity: .8;
}

.h1,
h1 {
  font-size: 70px;
  line-height: 1.285;
  font-weight: 300;
  margin-bottom: 20px;
  letter-spacing: -.036em;
}

.h1.big,
h1.big {
  font-size: 58px;
  line-height: 1;
  font-weight: 100;
}

.h1.huge,
h1.huge {
  font-size: 64px;
  line-height: 1.218751;
  letter-spacing: -.04em;
  margin-bottom: 40px;
  font-weight: 100;
}

.h1.small,
h1.small {
  font-size: 46px;
}

.h1.micro,
h1.micro {
  font-size: 34px;
}

.h2,
h2 {
  font-size: 35px;
  line-height: 1.17;
  margin-bottom: 15px;
  font-weight: 400;
}

.h2.uppercase,
h2.uppercase {
  letter-spacing: .2em!important;
}

.h2.small,
h2.small {
  font-size: 28px;
}

.h2.micro,
h2.micro {
  font-size: 19px;
}

.h2.huge,
h2.huge {
  font-size: 42px;
}

.h3,
h3 {
  font-size: 20px;
  margin-bottom: 12px;
  font-weight: 400;
}

.h3.large,
h3.large {
  font-size: 32px;
}

.h3.big,
h3.big {
  font-size: 24px;
}

.h3.small,
h3.small {
  font-size: 20px;
}

.h3.micro,
h3.micro {
  font-size: 16px;
}

.h3+.h1,
.h3+h1,
h3+.h1,
h3+h1 {
  margin-top: 30px;
}

.h4,
h4 {
  font-size: 18px;
  margin-bottom: 10px;
}

.h5,
h5 {
  font-size: 16px;
}

.h6,
h6 {
  font-size: 14px;
}

.p,
blockquote,
p {
  font-size: 22px;
  line-height: 1.6363636364;
  margin-bottom: 30px;
  font-weight: 300;
}

.p.hero,
blockquote.hero,
p.hero {
  font-size: 28px;
  line-height: 1.5;
  margin-bottom: 25px;
}

.p.large,
blockquote.large,
p.large {
  font-size: 32px;
  line-height: 1.4;
}

.p.small,
blockquote.small,
p.small {
  font-size: 18px;
  line-height: 1.36;
  margin-bottom: 20px;
}

.p.tiny,
blockquote.tiny,
p.tiny {
  font-size: 16px;
  line-height: 1.625;
  margin-bottom: 12px;
  font-weight: 400;
}

.p.micro,
blockquote.micro,
p.micro {
  font-size: 14px;
  line-height: 1.5714;
  margin-bottom: 20px;
  margin-top: 2px;
}

blockquote {
  padding-left: 2em;
  border-left: 2px solid;
}

small {
  font-size: 17px;
  line-height: 1.3;
}

small .small {
  font-size: 14px;
  line-height: 1.28;
}

.list.circle li {
  list-style-type: circle;
}

.list.disc li {
  list-style-type: disc;
}

.list.square li {
  list-style-type: square;
}

@media (max-width:1023px) {
  .h1,
  .h1.big,
  .h1.huge,
  h1,
  h1.big,
  h1.huge {
    font-size: 40px;
    margin-bottom: 20px;
  }

  p.hero {
    font-size: 22px;
  }

  .h1.small,
  h1.small {
    font-size: 32px;
  }

  .mobileCrop {
    margin: 0!important;
  }

  .mobileCropBottom {
    margin-bottom: 0!important;
  }

  .mobileCropTop {
    margin-top: 0!important;
  }

  .mobileCropLeft {
    margin-left: 0!important;
  }

  .mobileCropRight {
    margin-right: 0!important;
  }
}

@media (max-width:319px) {
  .h1.big,
  .h1.huge,
  h1.big,
  h1.huge {
    font-size: 32px;
  }
}

.button {
  display: inline-block;
  border-radius: 4px;
  padding: 16px 24px 17px;
  color: #fff;
  border: none;
  outline: 0;
  text-decoration: none;
  background: #202020;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  vertical-align: top;
  cursor: pointer;
  overflow: hidden;
  backface-visibility: hidden;
  letter-spacing: normal!important;
  position: relative;
  white-space: nowrap;
  transform: translate3d(0,0,0);
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
  -webkit-appearance: none;
  margin-bottom: 10px;
  transition: .3s;
  user-select: none!important;
}

.popup .button,
.slide .button {
  margin-left: 5px;
  margin-right: 5px;
}

.popup .button.small,
.slide .button.small {
  margin-left: 4px;
  margin-right: 4px;
}

.button.wide {
  margin-left: 0!important;
  margin-right: 0!important;
}

.button .material-icons {
  vertical-align: bottom;
  margin-top: -5px;
  margin-bottom: -2px;
  margin-right: 8px;
  user-select: none!important;
}

.button .material-icons.small {
  font-size: 18px;
  margin: 0 6px 0 0;
}

.button .material-icons.right {
  margin-left: 11px;
  margin-right: 0;
}

.button svg {
  width: 22px;
  height: 22px;
  margin-top: -3px;
  top: 2px;
  vertical-align: bottom;
  margin-right: 14px;
  pointer-events: none!important;
  position: relative;
}

.button svg * {
  pointer-events: none!important;
}

.button svg.right {
  margin-right: 0;
  margin-left: 14px;
}

.button.actionButton {
  display: inline-block;
  height: 42px;
  width: 42px;
  padding: 12px;
  border-radius: 25px;
  z-index: 999;
  background: rgba(0,0,0,.3);
  line-height: 1;
  box-shadow: 0 0 0 1px rgba(255,255,255,.05);
  cursor: pointer;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  vertical-align: top;
}

.button.actionButton svg {
  width: 18px;
  height: 18px;
}

.button.actionButton .material-icons {
  margin: 0;
  position: relative;
  left: -3px;
  top: -3px;
  font-size: 24px;
}

.button.actionButton.big {
  width: 50px;
  height: 50px;
  padding: 16px;
}

.button.actionButton.big .material-icons {
  font-size: 24px;
}

.button.actionButton.big svg {
  width: 22px;
  height: 22px;
  left: -2px;
  top: 0;
}

.button.actionButton.stroke {
  box-shadow: none;
  padding: 10px;
}

.button.actionButton:hover:not(:active) {
  transform: translateY(0)!important;
}

.button.actionButton.rounded {
  border-radius: 6px;
}

.button.actionButton svg,
.slide.whiteSlide .button.actionButton svg {
  fill: #fff;
}

.button.actionButton.sound [class*=sound-] {
  position: absolute;
  opacity: 0;
  transition: .5s;
  left: 13px;
  top: 16px;
}

.button.actionButton.sound.stroke [class*=sound-] {
  left: 11px;
  top: 14px;
}

.button.actionButton.sound.playing .sound-on,
.button.actionButton.sound:not(.playing) .sound-off {
  opacity: 1;
}

.button.actionButton.transparent {
  background-color: transparent;
}

.button:hover {
  box-shadow: 0 6px 7px 0 rgba(0,0,0,.15),0 0 5px 0 rgba(0,0,0,.1);
  opacity: 1;
  transform: translateY(-2px)!important;
  transition: .35s!important;
}

.button:hover:after {
  opacity: .5;
}

.button:active {
  box-shadow: 0 3px 6px 0 rgba(0,0,0,.1),0 0 10px 0 rgba(0,0,0,.1),0 1px 4px -1px rgba(0,0,0,.1);
  transform: translateY(0)!important;
  transition: .35s!important;
}

.button:active:after {
  opacity: 1;
}

.button.uppercase {
  font-size: 15px;
  font-weight: 700;
  padding-top: 17px;
  padding-bottom: 17px;
}

.button.lowercase {
  text-transform: lowercase;
  letter-spacing: 0;
  font-weight: 300;
}

.button.round {
  border-radius: 99px;
  padding-left: 28px;
  padding-right: 28px;
}

.button.rounded {
  border-radius: 6px;
}

.button.rectangular {
  border-radius: 1px;
}

.button.square {
  border-radius: 0;
}

.button.thin-stroke {
  color: #202020;
  font-weight: 300;
  border: 1px solid;
  background-color: transparent!important;
  padding: 14px 22px 15px;
}

.slide.whiteSlide .button.thin-stroke {
  color: #202020;
}

.button.stroke {
  color: #202020;
  border: 2px solid;
  background-color: transparent!important;
  padding: 14px 22px 15px;
}

.slide.whiteSlide .button.stroke {
  color: #202020;
}

.button.stroke.round {
  padding-left: 26px;
  padding-right: 26px;
}

.button.stroke.uppercase {
  padding-top: 15px;
  padding-bottom: 15px;
}

.button.stroke.uppercase svg {
  margin-bottom: -2px;
}

.button.stroke.uppercase.small {
  padding: 11px 15px;
}

.button.stroke.small {
  border: 1px solid;
  padding-top: 9px;
  padding-bottom: 9px;
}

@media (min-width:768px) {
  .button.stroke.big {
    padding: 19px 30px;
  }

  .button.stroke.big.uppercase {
    padding-top: 21px;
    padding-bottom: 21px;
  }
}

.button.stroke:not(.flat):hover {
  box-shadow: inset 0 -100px 0 rgba(41,41,41,.05),0 4px 6px 0 rgba(0,0,0,.1),0 1px 10px 0 rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.1);
}

.button.flat:not(:hover) {
  box-shadow: none;
}

.button:not(.stroke) svg {
  fill: #fff;
}

.button.small {
  font-size: 15px;
  font-weight: 500;
  padding: 10px 16px 10px;
}

.button.small .material-icons {
  vertical-align: bottom;
  position: relative;
  font-size: 20px;
  margin-right: 8px;
  bottom: 1px;
}

.button.small .material-icons.right {
  margin-left: 8px;
  margin-right: 0;
}

.button.small svg {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  top: 0;
}

.button.small svg.right {
  margin-right: 0;
  margin-left: 10px;
}

.button.small.round {
  padding-left: 18px;
  padding-right: 18px;
}

.button.small.rounded {
  border-radius: 6px;
}

.button.small.uppercase {
  font-size: 12px;
  padding: 12px 16px;
  letter-spacing: .125em;
}

.button.small.uppercase.round {
  padding-left: 19px;
  padding-right: 19px;
}

@media (min-width:768px) {
  .button.big {
    font-size: 20px;
    padding: 21px 32px 21px;
  }

  .button.big.round {
    padding-left: 36px;
    padding-right: 36px;
  }

  .button.big.rounded {
    border-radius: 7px;
  }

  .button.big.uppercase {
    font-size: 17px;
    padding: 23px 32px;
  }

  .button.big.uppercase.round {
    padding-left: 36px;
    padding-right: 36px;
  }

  .button.big .material-icons {
    vertical-align: bottom;
    margin-right: 16px;
    font-size: 30px;
  }

  .button.big .material-icons.right {
    margin-left: 16px;
    margin-right: 0;
  }

  .button.big svg {
    width: 27px;
    height: 27px;
    margin-right: 16px;
    top: 1px;
  }

  .button.big svg.right {
    margin-right: 0;
    margin-left: 16px;
  }
}

.button.empty {
  padding: 0!important;
  background-color: transparent!important;
  font-size: 0!important;
  margin: 0;
  box-shadow: none;
}

.button.hollow {
  padding: 0!important;
  background-color: transparent!important;
  font-size: 0!important;
  box-shadow: none!important;
}

.button.hollow svg {
  margin: 0;
}

.button.shade {
  position: relative;
}

.button.shade:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #292929;
  opacity: 0;
  transition: .25s;
}

.button.shade:hover:after {
  opacity: .15;
}

.button.shade:active:after {
  opacity: .2;
}

.button.play {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  padding: 27px;
  margin-left: 0;
  margin-right: 0;
}

.button.play svg {
  fill: #fff;
  width: 35px;
  height: 36px;
  margin: 0;
}

.button.play.small {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 20px 19px;
}

.button.play.small svg {
  fill: #fff;
  width: 23px;
  height: 23px;
}

.button.play:hover {
  transform: scale(1.05);
}

.button.gradient {
  position: relative;
}

.button.gradient:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: -webkit-gradient(linear,left top,left bottom,from(#fff),to(#000));
  background: linear-gradient(to bottom,#fff 0,#000 100%);
  z-index: -1;
  opacity: .1;
}

.slide.whiteSlide .button.white:hover {
  box-shadow: 0 4px 6px 0 rgba(0,0,0,.1),0 1px 10px 0 rgba(0,0,0,.1);
}

.slide.whiteSlide .button.white:hover:after {
  opacity: .3;
}

.roundButton {
  border-radius: 50px;
  height: 50px;
  width: 50px;
  padding: 14px;
  margin: 5px;
}

.roundButton svg {
  bottom: 2px;
}

@media (max-width:319px) {
  .button.uppercase,
  .uppercase {
    letter-spacing: .07em;
  }
}

.button.uppercase,
.h1.uppercase,
.h2.uppercase,
.h3.uppercase,
.h4.uppercase,
.p.uppercase,
h1.uppercase,
h2.uppercase,
h3.uppercase,
h4.uppercase,
h5.uppercase,
p.uppercase {
  letter-spacing: .125em!important;
  text-indent: -.1em!important;
  font-weight: 700!important;
}

.material-icons {
  font-family: "Material Icons";
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: "liga";
}

.material-icons.md-18 {
  font-size: 18px;
}

.material-icons.md-24 {
  font-size: 24px;
}

.material-icons.md-36 {
  font-size: 36px;
}

.material-icons.md-48 {
  font-size: 48px;
}

.slide.whiteSlide svg {
  fill: #202020;
}

.embedContainer,
.svgContainer {
  position: relative;
  width: 100%;
  height: 0;
  padding: 0;
}

.embedContainer .scale,
.svgContainer svg.scale {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.dots {
  font-size: 0;
}

.dot {
  padding: 7px;
  display: inline-block;
}

.dot:after {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  opacity: .5;
  transition: .25s;
}

.dot.big .dot:after {
  width: 14px;
  height: 14px;
}

.slide.whiteSlide .dot:after {
  background: #202020;
}

.dot:hover:after {
  transform: scale(1.333333);
  opacity: 1;
}

.dot.selected:after,
.dot:active:after {
  opacity: 1;
  transform: scale(1.675);
}

.tabs {
  color: #fff;
  max-width: 260px;
  border-radius: 5px;
}

.tabs li {
  padding: 16px 20px;
  letter-spacing: 2.5px;
  font-size: 12px;
  transition: .15s;
  margin-top: -1px;
  border: 1px solid rgba(255,255,255,.3);
}

.tabs li:not(:last-child) {
  border-bottom: 0;
}

.tabs li:first-child {
  border-radius: 4px 4px 0 0;
}

.tabs li:last-child {
  border-radius: 0 0 4px 4px;
}

.tabs li.selected {
  background: #fff;
  color: #202020;
}

.slide.whiteSlide .tabs li {
  border-color: #e5e5e5;
  color: #202020;
}

.slide.whiteSlide .tabs li.selected {
  background: #202020;
  border-color: #202020;
  color: #fff;
}

.links li {
  font-size: 17px;
  letter-spacing: 0;
  padding: 4px 0;
}

.slides-form {
  font-size: 0;
  margin-top: -5px;
  font-family: inherit;
}

.slides-form button {
  font-family: inherit;
}

.slides-form textarea {
  max-height: 200px;
  max-width: 100%;
  min-height: 130px;
}

.slides-form textarea.d {
  border-radius: 15px!important;
}

.slides-form .label,
.slides-form label {
  display: block;
  font-size: 14px;
  margin-top: 12px;
  margin-bottom: 2px;
}

.slides-form .label.uppercase,
.slides-form label.uppercase {
  font-size: 14px;
}

.slides-form input[type=email],
.slides-form input[type=name],
.slides-form input[type=number],
.slides-form input[type=password],
.slides-form input[type=tel],
.slides-form input[type=text],
.slides-form select,
.slides-form textarea {
  font-family: inherit;
  background-color: #fff;
  position: relative;
  background: #fff;
  padding: 15px 16px 16px;
  border: none;
  font-size: 16px;
  color: #242424;
  outline: 0;
  border-radius: 4px;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid rgba(0,0,0,.1);
  transition: .15s;
}

.slides-form input[type=email].flat,
.slides-form input[type=email]:focus,
.slides-form input[type=name].flat,
.slides-form input[type=name]:focus,
.slides-form input[type=number].flat,
.slides-form input[type=number]:focus,
.slides-form input[type=password].flat,
.slides-form input[type=password]:focus,
.slides-form input[type=tel].flat,
.slides-form input[type=tel]:focus,
.slides-form input[type=text].flat,
.slides-form input[type=text]:focus,
.slides-form select.flat,
.slides-form select:focus,
.slides-form textarea.flat,
.slides-form textarea:focus {
  border-color: rgba(0,0,0,.2);
}

.slides-form input[type=email]:hover,
.slides-form input[type=name]:hover,
.slides-form input[type=number]:hover,
.slides-form input[type=password]:hover,
.slides-form input[type=tel]:hover,
.slides-form input[type=text]:hover,
.slides-form select:hover,
.slides-form textarea:hover {
  border-color: rgba(0,0,0,.2);
}

.slides-form input[type=email]:focus,
.slides-form input[type=name]:focus,
.slides-form input[type=number]:focus,
.slides-form input[type=password]:focus,
.slides-form input[type=tel]:focus,
.slides-form input[type=text]:focus,
.slides-form select:focus,
.slides-form textarea:focus {
  border-color: #2196f3;
  z-index: 10;
}

.slides-form input[type=email]:focus::-webkit-input-placeholder,
.slides-form input[type=name]:focus::-webkit-input-placeholder,
.slides-form input[type=number]:focus::-webkit-input-placeholder,
.slides-form input[type=password]:focus::-webkit-input-placeholder,
.slides-form input[type=tel]:focus::-webkit-input-placeholder,
.slides-form input[type=text]:focus::-webkit-input-placeholder,
.slides-form select:focus::-webkit-input-placeholder,
.slides-form textarea:focus::-webkit-input-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: 0;
}

.slides-form input[type=email]:focus:-moz-placeholder,
.slides-form input[type=name]:focus:-moz-placeholder,
.slides-form input[type=number]:focus:-moz-placeholder,
.slides-form input[type=password]:focus:-moz-placeholder,
.slides-form input[type=tel]:focus:-moz-placeholder,
.slides-form input[type=text]:focus:-moz-placeholder,
.slides-form select:focus:-moz-placeholder,
.slides-form textarea:focus:-moz-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: 0;
}

.slides-form input[type=email]:focus::-moz-placeholder,
.slides-form input[type=name]:focus::-moz-placeholder,
.slides-form input[type=number]:focus::-moz-placeholder,
.slides-form input[type=password]:focus::-moz-placeholder,
.slides-form input[type=tel]:focus::-moz-placeholder,
.slides-form input[type=text]:focus::-moz-placeholder,
.slides-form select:focus::-moz-placeholder,
.slides-form textarea:focus::-moz-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: 0;
}

.slides-form input[type=email]:focus:-ms-input-placeholder,
.slides-form input[type=name]:focus:-ms-input-placeholder,
.slides-form input[type=number]:focus:-ms-input-placeholder,
.slides-form input[type=password]:focus:-ms-input-placeholder,
.slides-form input[type=tel]:focus:-ms-input-placeholder,
.slides-form input[type=text]:focus:-ms-input-placeholder,
.slides-form select:focus:-ms-input-placeholder,
.slides-form textarea:focus:-ms-input-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: 0;
}

.slides-form input[type=email].round,
.slides-form input[type=name].round,
.slides-form input[type=number].round,
.slides-form input[type=password].round,
.slides-form input[type=tel].round,
.slides-form input[type=text].round,
.slides-form select.round,
.slides-form textarea.round {
  border-radius: 50px;
  padding-left: 22px;
  padding-right: 22px;
}

.slides-form input[type=email].rounded,
.slides-form input[type=name].rounded,
.slides-form input[type=number].rounded,
.slides-form input[type=password].rounded,
.slides-form input[type=tel].rounded,
.slides-form input[type=text].rounded,
.slides-form select.rounded,
.slides-form textarea.rounded {
  border-radius: 6px;
}

.slides-form input[type=email]:after,
.slides-form input[type=name]:after,
.slides-form input[type=number]:after,
.slides-form input[type=password]:after,
.slides-form input[type=tel]:after,
.slides-form input[type=text]:after,
.slides-form select:after,
.slides-form textarea:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
}

@media (min-width:768px) {
  .slides-form input[type=email],
  .slides-form input[type=name],
  .slides-form input[type=number],
  .slides-form input[type=password],
  .slides-form input[type=tel],
  .slides-form input[type=text],
  .slides-form select,
  .slides-form textarea {
    max-width: 300px;
  }
}

.slides-form input[type=email]::-webkit-input-placeholder,
.slides-form input[type=name]::-webkit-input-placeholder,
.slides-form input[type=number]::-webkit-input-placeholder,
.slides-form input[type=password]::-webkit-input-placeholder,
.slides-form input[type=tel]::-webkit-input-placeholder,
.slides-form input[type=text]::-webkit-input-placeholder,
.slides-form select::-webkit-input-placeholder,
.slides-form textarea::-webkit-input-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: .5;
}

.slides-form input[type=email]:-moz-placeholder,
.slides-form input[type=name]:-moz-placeholder,
.slides-form input[type=number]:-moz-placeholder,
.slides-form input[type=password]:-moz-placeholder,
.slides-form input[type=tel]:-moz-placeholder,
.slides-form input[type=text]:-moz-placeholder,
.slides-form select:-moz-placeholder,
.slides-form textarea:-moz-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: .5;
}

.slides-form input[type=email]::-moz-placeholder,
.slides-form input[type=name]::-moz-placeholder,
.slides-form input[type=number]::-moz-placeholder,
.slides-form input[type=password]::-moz-placeholder,
.slides-form input[type=tel]::-moz-placeholder,
.slides-form input[type=text]::-moz-placeholder,
.slides-form select::-moz-placeholder,
.slides-form textarea::-moz-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: .5;
}

.slides-form input[type=email]:-ms-input-placeholder,
.slides-form input[type=name]:-ms-input-placeholder,
.slides-form input[type=number]:-ms-input-placeholder,
.slides-form input[type=password]:-ms-input-placeholder,
.slides-form input[type=tel]:-ms-input-placeholder,
.slides-form input[type=text]:-ms-input-placeholder,
.slides-form select:-ms-input-placeholder,
.slides-form textarea:-ms-input-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: .5;
}

.slides-form textarea {
  font-weight: 400;
}

.slides-form textarea.round {
  border-radius: 25px;
}

.slides-form select {
  background-image: url("data:image/svg+xml;charset=UTF-8,<svg xmlns=http://www.w3.org/2000/svg width=37 height=7><path fill=#303030 d=M14.022 0l5.978 6 6-6z	/></svg>");
  background-repeat: no-repeat;
  background-position: right;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.slides-form button[type=submit],
.slides-form input[type=email],
.slides-form input[type=name],
.slides-form input[type=number],
.slides-form input[type=password],
.slides-form input[type=submit],
.slides-form input[type=tel],
.slides-form input[type=text],
.slides-form select,
.slides-form textarea {
  margin: 5px;
}

@media (max-width:768px) {
  .slides-form button[type=submit],
  .slides-form input[type=email],
  .slides-form input[type=name],
  .slides-form input[type=number],
  .slides-form input[type=password],
  .slides-form input[type=submit],
  .slides-form input[type=tel],
  .slides-form input[type=text],
  .slides-form select,
  .slides-form textarea {
    margin-left: auto!important;
    margin-right: auto!important;
    width: 100%;
    display: block!important;
  }
}

.slides-form button[type=submit].wide,
.slides-form input[type=email].wide,
.slides-form input[type=name].wide,
.slides-form input[type=number].wide,
.slides-form input[type=password].wide,
.slides-form input[type=submit].wide,
.slides-form input[type=tel].wide,
.slides-form input[type=text].wide,
.slides-form label.wide,
.slides-form select.wide,
.slides-form textarea.wide {
  max-width: 100%;
  width: 100%;
  margin-left: 0!important;
  margin-right: 0!important;
}

@media (min-width:769px) {
  .slides-form input.pair {
    width: 50%!important;
    max-width: 50%!important;
    border-top-right-radius: 0!important;
    border-bottom-right-radius: 0!important;
    margin-left: 0;
    margin-right: 0;
  }

  .slides-form input.pair+.pair {
    border-top-left-radius: 0!important;
    border-bottom-left-radius: 0!important;
    border-top-right-radius: 4px!important;
    border-bottom-right-radius: 4px!important;
    width: calc(50% + 1px)!important;
    max-width: calc(50% + 1px)!important;
    margin-left: -1px;
  }
}

.slides-form.center input,
.slides-form.center textarea {
  text-align: center;
}

.slide {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #202020;
  color: #fff;
  z-index: 10;
  overflow: hidden;
}

.slide.active {
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.mobile .slide {
  visibility: hidden;
}

.mobile .slide.active {
  visibility: visible;
}

.slide.whiteSlide {
  color: #202020;
  background: #fff;
}

.content {
  overflow: hidden;
  position: absolute;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  -webkit-overflow-scrolling: touch;
}

.content.scrollBar {
  overflow-y: auto;
}

.windows .defaultScroll .content {
  overflow: auto;
  overflow-x: hidden;
}

.mobile .content {
  overflow: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

.fade .content {
  background: rgba(0,0,0,.6);
}

.fade-1 .content {
  background: rgba(0,0,0,.1);
}

.fade-2 .content {
  background: rgba(0,0,0,.2);
}

.fade-3 .content {
  background: rgba(0,0,0,.3);
}

.fade-4 .content {
  background: rgba(0,0,0,.4);
}

.fade-5 .content {
  background: rgba(0,0,0,.5);
}

.fade-6 .content {
  background: rgba(0,0,0,.6);
}

.fade-7 .content {
  background: rgba(0,0,0,.7);
}

.fade-8 .content {
  background: rgba(0,0,0,.8);
}

.fade-9 .content {
  background: rgba(0,0,0,.9);
}

.whiteSlide[class*=fade] .content {
  background: rgba(255,255,255,.85);
}

.container {
  display: table;
  table-layout: fixed;
  position: relative;
  width: 100%;
  height: 100%;
}

.container .wrap {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
}

.container .wrap .spaceWrap,
.container .wrap.spaceWrap,
.container .wrap:not(.noSpaces) {
  padding: 120px calc(8% + 15px);
}

.container .wrap .overflowHidden {
  overflow: hidden;
}

.container .wrap * {
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
}

.popup .background,
.slide .background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.popup .background iframe,
.slide .background iframe {
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
}

.popup:not(.youtube) .background iframe,
.slide:not(.youtube) .background iframe {
  width: 100%;
  height: 100%;
}

.fix-1-12 {
  max-width: 93px!important;
}

.fix-2-12 {
  max-width: 186px!important;
}

.fix-3-12 {
  max-width: 279px!important;
}

.fix-4-12 {
  max-width: 371px!important;
}

.fix-5-12 {
  max-width: 464px!important;
}

.fix-6-12 {
  max-width: 557px!important;
}

.fix-7-12 {
  max-width: 650px!important;
}

.fix-8-12 {
  max-width: 743px!important;
}

.fix-9-12 {
  max-width: 836px!important;
}

.fix-10-12 {
  max-width: 928px!important;
}

.fix-11-12 {
  max-width: 1021px!important;
}

.fix-12-12 {
  max-width: 1114px!important;
}

[class*=fix-] {
  width: 100%!important;
  margin-left: auto!important;
  margin-right: auto!important;
  float: none;
}

.toLeft,
.toLeft[class*=fix-] {
  margin-left: 0!important;
  margin-right: auto!important;
}

.toRight,
.toRight[class*=fix-] {
  margin-right: 0!important;
  margin-left: auto!important;
  float: right;
}

.toCenter {
  margin-left: auto!important;
  margin-right: auto!important;
}

.dropdownTrigger,
.popupTrigger,
.sidebarTrigger {
  cursor: pointer;
}

.shiftImage {
  margin-top: -15%;
  margin-bottom: -100%;
}

.shiftImageVertical {
  margin-right: -100%;
  max-width: none;
}

.slide.video .background {
  overflow: hidden;
}

.slide.video .background video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  transform: translateX(-50%) translateY(-50%);
  background-size: cover;
}

.slide.video .background video::-webkit-media-controls {
  display: none!important;
}

.slide.video .background video::-webkit-media-controls-panel {
  display: none!important;
  -webkit-appearance: none;
}

.slide.video .background video::-webkit-media-controls-start-playback-button {
  display: none!important;
  -webkit-appearance: none;
}

html:not(.mobile) .slide.video .background[style] {
  background: 0 0!important;
}

.mobile .slide.video .background[style] video {
  display: none;
}

.videoThumbnail {
  cursor: pointer;
  position: relative;
  font-size: 0;
  overflow: hidden;
  line-height: 0;
}

.videoThumbnail.rounded {
  border-radius: 6px;
}

.videoThumbnail:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url("../assets/svg/video-icon.svg") no-repeat;
  background-position: center center;
  transition: .5s;
}

.videoThumbnail:not(.noTint):hover:after {
  background-color: rgba(0,0,0,.15);
}

.videoThumbnail:hover:before {
  transform: scale(1.1);
  transition: .25s;
}

.videoThumbnail:active:before {
  opacity: .8;
}

.videoThumbnail.small {
  max-width: 200px;
  display: block;
}

.videoThumbnail.small:before {
  background-size: 44px;
}

.button.empty.shadow:hover,
.shadow {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
}

.pad {
  border-radius: 6px;
  padding: 10%;
  color: #202020;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
}

.pad.shadow {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
}

.pad.shadow.stroke {
  background: 0 0;
  transition: .15s;
  color: #fff;
}

.pad.shadow.stroke:hover {
  background: #fff;
  color: #202020;
  transition: .15s;
}

.pad.shadowHover {
  transition: .5s;
}

.pad.shadowHover:hover {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
}

.pad small {
  font-size: 15px;
  line-height: 1.45;
  margin: 15px 0;
}

@media (max-width:767px) {
  .pad.collapse {
    background: inherit;
    color: inherit;
    border: none;
    padding: 0!important;
    overflow: inherit;
    border-radius: 0;
    box-shadow: none;
    transition: 0s!important;
  }

  .pad.shadow {
    box-shadow: none;
  }
}

.resizing .equalElement {
  transition: 0s!important;
}

.hr {
  position: relative;
  height: 1px;
  width: 100%;
}

@media (max-width:1023px) {
  .shiftImage {
    margin-top: 0!important;
    margin-bottom: 0!important;
  }

  .shiftImageVertical {
    margin-right: 0!important;
    max-width: 100%!important;
  }
}

@media (min-width:1024px) {
  .hideForDesktop {
    display: none!important;
  }
}

@media (min-width:1024px) {
  .showForDesktop {
    display: block!important;
  }
}

@media (max-width:1024px) {
  .hideForTablet {
    display: none!important;
  }
}

@media (max-width:1024px) {
  .showForTablet {
    display: block!important;
  }

  .showForTabletInline {
    display: inline!important;
  }
}

@media (max-width:767px) {
  .hideForPhablet {
    display: none!important;
  }
}

@media (max-width:768px) {
  .showForPhablet {
    display: block!important;
  }

  .showForPhabletInline {
    display: inline!important;
  }
}

@media (max-width:435px) {
  .hideForPhone {
    display: none!important;
  }
}

@media (max-width:435px) {
  .showForPhone {
    display: block!important;
  }

  .showForPhoneInline {
    display: inline!important;
  }
}

html.mobile .hideForMobile {
  display: none!important;
}

html.mobile .showForMobile {
  display: block!important;
}

html.mobile .showForMobileInline {
  display: inline!important;
}

.helpBubble {
  cursor: pointer;
}

.helpBubble:after {
  content: "?";
  font-size: 14px;
  width: 17px;
  height: 17px;
  line-height: 1.2;
  background: #202020;
  opacity: .3;
  color: #fff;
  border-radius: 50%;
  display: inline-block;
  margin-left: 4px;
  font-weight: 700;
  transition: .25s;
}

.helpBubble .helpMessage {
  background: rgba(255,255,255,.98);
  color: #202020;
  font-size: 16px;
  line-height: 1.625;
  position: absolute;
  z-index: 10;
  box-shadow: 0 1px 8px rgba(0,0,0,.07),0 6px 8px rgba(0,0,0,.05);
  padding: 17px;
  text-align: left;
  bottom: 50%;
  margin-bottom: 5px;
  transform: translateY(10px) scale(.95);
  transition: .25s;
  opacity: 0;
  pointer-events: none;
  color: rgba(48,48,48,.7);
}

.helpBubble .helpMessage strong {
  color: #303030;
}

.helpBubble:hover .helpMessage {
  pointer-events: all;
  transform: translateY(0) scale(1);
  opacity: 1;
}

.helpBubble:hover:after {
  opacity: 1;
}

.panel {
  position: fixed;
  left: 0;
  width: 100%;
  padding: 10px 30px;
  z-index: 200;
  text-align: center;
  font-size: 16px;
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  user-select: none;
  transform: translate3d(0,0,0);
}

.panel.top {
  top: 0;
}

.panel.bottom {
  bottom: 0;
}

.panel.white {
  background: rgba(255,255,255,.975)!important;
  box-shadow: 0 1px 1px rgba(0,0,0,.07);
}

.panel.black {
  background-color: rgba(0,0,0,.8)!important;
  box-shadow: 0 1px 1px rgba(0,0,0,.07);
}

.animateOnEvent .panel.top,
.animated .panel.top,
.hidePanel-top .panel.top.hideOnScroll,
.slides.firstSlide .panel.top.exceptFirstSlide,
.slides.lastSlide .panel.top.exceptLastSlide,
.slides:not(.firstSlide) .panel.top.firstSlideOnly,
.slides:not(.firstSlide):not(.lastSlide) .panel.top.firstAndLastSlidesOnly,
.slides:not(.lastSlide) .panel.top.lastSlideOnly {
  transform: translate3d(0,-100%,0);
  opacity: 0;
}

.animateOnEvent .panel.bottom,
.animated .panel.bottom,
.hidePanel-bottom .panel.bottom.hideOnScroll,
.slides.firstSlide .panel.bottom.exceptFirstSlide,
.slides.lastSlide .panel.bottom.exceptLastSlide,
.slides:not(.firstSlide) .panel.bottom.firstSlideOnly,
.slides:not(.firstSlide):not(.lastSlide) .panel.bottom.firstAndLastSlidesOnly,
.slides:not(.lastSlide) .panel.bottom.lastSlideOnly {
  transform: translate3d(0,100%,0);
  opacity: 0;
}

.page-loaded .animateOnEvent .panel,
.page-loaded .animated .panel {
  transition: transform .5s,opacity .5s,padding .5s;
  transform: translate3d(0,0,0);
  opacity: 1;
}

.slides.whiteSlide .panel {
  color: #202020;
}

.mobile .simplifiedMobile .panel.hideOnScroll,
.scroll .panel.hideOnScroll {
  position: fixed;
}

.mobile .simplifiedMobile .panel.hideOnScroll.top.hide,
.scroll .panel.hideOnScroll.top.hide {
  transform: translateY(-100%)!important;
  opacity: 0;
}

.mobile .simplifiedMobile .panel.hideOnScroll.bottom.hide,
.scroll .panel.hideOnScroll.bottom.hide {
  transform: translateY(100%)!important;
  opacity: 0;
}

.panel .sections {
  display: table;
  width: 100%;
  font-size: 0;
}

.panel .sections>div {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 33.33333%;
  white-space: nowrap;
  font-size: 16px;
  height: 50px;
}

.panel .sections>div.auto {
  width: .1%;
}

.panel .sections>div * {
  pointer-events: all;
}

.panel .sections>div.left {
  text-align: left;
}

.panel .sections>div.left ul.crop {
  padding-left: 0;
}

.panel .sections>div.left ul.crop li:first-child {
  margin-left: 0;
}

.panel .sections>div.left.space {
  padding-right: 20px;
}

.panel .sections>div.right {
  text-align: right;
}

.panel .sections>div.right ul.crop {
  padding-right: 0;
}

.panel .sections>div.right ul.crop li:last-child {
  margin-right: 0;
}

.panel .sections>div.right.space {
  padding-left: 20px;
}

.panel .sections>div.center.space {
  padding: 0 20px;
}

.panel .sections.hidden {
  display: none;
}

.panel .sections .menu {
  white-space: nowrap;
  display: inline-block;
  padding: 0 12px;
  font-size: 0;
}

.panel .sections .menu svg {
  width: 20px;
  height: 20px;
  vertical-align: bottom;
}

.panel .sections .menu li {
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
  margin: 0 10px;
}

.panel .sections .menu li a {
  padding: 0 7px;
  opacity: .8;
}

.panel .sections .menu li a:hover {
  opacity: 1;
}

.panel .sections .menu.uppercase li {
  font-size: 12px;
  margin: 0 10px;
  letter-spacing: .125em;
  font-weight: 600!important;
}

.panel .sections .menu.uppercase li svg {
  position: relative;
  top: 2px;
}

.panel .hidden,
.panel .hidden * {
  display: none;
}

.panel svg {
  fill: #fff;
  width: 18px;
  height: 18px;
  vertical-align: bottom;
}

.slides.whiteSlide .panel svg {
  fill: #202020;
}

.panel a:not(.button):hover {
  opacity: .75;
  -webkit-transition: .15s;
  transition: .15s;
}

.panel .button {
  margin: 0;
}

.panel .button+.button {
  margin-left: 10px;
}

.panel .button:not(.actionButton) {
  font-size: 15px;
  vertical-align: middle;
  padding: 12px 17px;
}

.panel .button:not(.actionButton):hover:not(:active) {
  transform: translateY(0)!important;
  box-shadow: 0 0 0 1px rgba(255,255,255,.05),0 4px 6px 0 rgba(0,0,0,.1),0 1px 10px 0 rgba(0,0,0,.1);
}

.panel .nextSlide,
.panel .prevSlide {
  width: 24px;
  height: 24px;
  position: relative;
  top: 5px;
}

.slides.whiteSlide .panel .actionButton svg {
  fill: #fff;
}

.panel .nextSlide,
.panel .prevSlide {
  transition: .25s;
}

.firstSlide .panel .prevSlide,
.lastSlide .panel .nextSlide {
  opacity: 0;
  pointer-events: none;
  cursor: default;
}

.firstSlide .panel.bottom .nextSlide svg {
  animation: animateArrow 4s infinite;
}

.panel .panelIcon {
  position: relative;
  top: 5px;
}

@keyframes animateArrow {
  100%, 80% {
    transform: translateY(0);
  }

  90% {
    transform: translateY(10px);
  }
}

.nextSlide,
.prevSlide {
  cursor: pointer;
}

.nextSlide:hover,
.prevSlide:hover {
  transition: .15s;
}

.nextSlide:active,
.prevSlide:active {
  opacity: .75;
}

.firstSlide.lastSlide .nextSlide,
.firstSlide.lastSlide .prevSlide {
  opacity: 0;
}

.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  width: 0%;
  transition: width 1s,opacity 1s;
  z-index: 1000;
  opacity: 1;
}

.progress-bar.loaded {
  width: 100%;
  opacity: 0;
  transition: width 0s,opacity .25s 1s;
}

.side {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  z-index: 100;
  padding: 70px 4%;
  pointer-events: none;
  opacity: 0;
  transition: opacity .5s;
  transform: translate3d(0,0,0);
}

@media (min-width:1380px) {
  .side {
    padding-left: 55px;
    padding-right: 55px;
  }
}

.page-loaded .side {
  opacity: 1;
}

.side.large {
  padding: calc(5.56% + 50px) 5%;
}

.side.left {
  left: 0;
  right: inherit;
}

.side.right {
  right: 0;
  left: inherit;
}

.side.compact {
  padding: 30px 4%;
}

.side.compact .navigation li {
  width: 15px;
  height: 7px;
  margin: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 0;
  background: #fff;
  opacity: .2;
  padding: 1px;
  cursor: pointer;
}

.side.compact .navigation li.selected,
.side.compact .navigation li:hover {
  opacity: 1;
}

.side.compact .navigation li:after {
  display: none;
}

.side.compact .navigation li:before {
  margin: 0 8px!important;
  top: -10px;
}

.whiteSlide .side.compact .navigation li {
  background: #202020;
}

.side.compact:not(.square) .navigation li:first-child {
  border-radius: 10px 10px 0 0;
}

.side.compact:not(.square) .navigation li:last-child {
  border-radius: 0 0 10px 10px;
}

.panel .side {
  position: relative;
  display: inline;
  height: auto;
  padding: 0;
}

.slides.whiteSlide .side svg:not([fill]) {
  fill: #202020;
}

.navigation {
  display: table;
  height: 100%;
}

.navigation ul {
  display: table-cell;
  vertical-align: middle;
}

.navigation * {
  pointer-events: all;
}

.navigation li {
  fill: #fff;
  display: block;
  background: 0 0;
  padding: 9px;
  margin: 0 -9px;
  cursor: pointer;
  position: relative;
}

.navigation li:after {
  content: "";
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 7px;
  opacity: .5;
  background: #fff;
  box-shadow: 0 0 1px #303030;
  transition: .25s;
}

.navigation li.selected:after {
  opacity: 1;
}

.navigation li:hover:after {
  opacity: 1;
}

.medium .navigation li:after {
  width: 10px;
  height: 10px;
  border-radius: 5px;
}

.small .navigation li:after {
  width: 6px;
  height: 6px;
  border-radius: 4px;
}

.navigation li[data-title]:before {
  content: attr(data-title);
  position: absolute;
  right: 100%;
  top: 1px;
  background: rgba(0,0,0,.7);
  color: #fff;
  font-size: 14px;
  min-width: 50px;
  border-radius: 6px;
  padding: 7px 12px;
  font-weight: 500;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  box-shadow: 0 0 0 1px rgba(255,255,255,.1);
  pointer-events: none;
  visibility: hidden;
}

.navigation li:hover:before {
  visibility: visible;
}

.left .navigation li:before {
  left: 100%;
  right: auto;
}

.panel.bottom .navigation li:before {
  transform: translateY(-100%) translateX(-50%);
  left: 14px;
  top: -2px;
}

.stroke .navigation li:after {
  border-color: #fff;
  border-style: solid;
  border-width: 2px;
  background-color: transparent;
}

.stroke.small .navigation li:after {
  border-width: 1px;
}

.stroke .navigation li.selected:after {
  background: #fff;
}

.stroke .navigation li:hover:after {
  background: #fff;
}

.square .navigation li:after {
  border-radius: 0;
}

.square.small .navigation li:after {
  border-radius: 0;
}

.diamond .navigation li:after {
  border-radius: 0;
  transform: rotate(45deg) scale(.72);
}

.diamond.medium .navigation li:after {
  transform: rotate(45deg) scale(.88);
}

.diamond.small .navigation li:after {
  transform: rotate(45deg) scale(1);
}

.line .navigation li {
  margin: 0 -9px;
  padding: 5px 9px;
  text-align: right;
  font-size: 0;
}

.line .navigation li:after {
  height: 3px;
  display: inline-block;
  text-align: right;
  background: #fff;
  border: none;
}

.line .navigation li:before {
  margin-top: -10px;
}

.line .navigation li.selected:after {
  width: 25px;
}

.line.left .navigation li {
  text-align: left;
}

.line.medium .navigation li {
  margin: 0 -5px;
  padding: 4px 8px;
}

.line.medium .navigation li.selected:after {
  width: 19px;
}

.line.small .navigation li {
  margin: 0;
  padding: 4px 6px;
}

.line.small .navigation li.selected:after {
  width: 13px;
}

.pole .navigation li {
  margin: 0 1px 0 2px;
  padding: 2px 9px;
  text-align: right;
  font-size: 0;
}

.pole .navigation li:after {
  height: 20px;
  width: 4px;
  display: inline-block;
  transition: .5s;
  text-align: right;
  background: #fff;
  border-radius: 1px;
  border: none;
}

.pole .navigation li:before {
  margin-top: -3px;
}

.pole .navigation li.selected:after {
  height: 60px;
}

.pole .navigation li.selected:before {
  margin-top: 19px;
}

.pole.medium .navigation li {
  margin: 0 2px;
}

.pole.medium .navigation li:after {
  height: 15px;
  width: 3px;
}

.pole.medium .navigation li:before {
  margin-top: -5px;
}

.pole.medium .navigation li.selected:after {
  height: 45px;
}

.pole.medium .navigation li.selected:before {
  margin-top: 10px;
}

.pole.small .navigation li {
  margin: 0 2px;
}

.pole.small .navigation li:after {
  height: 10px;
  width: 3px;
}

.pole.small .navigation li:before {
  margin-top: -7px;
}

.pole.small .navigation li.selected:after {
  height: 30px;
}

.pole.small .navigation li.selected:before {
  margin-top: 2px;
}

.slides.whiteSlide .navigation li:after {
  background: #202020;
  box-shadow: 0 0 1px #fff;
}

.slides.whiteSlide .stroke .navigation li:after {
  border-color: #202020;
  background: 0 0;
}

.slides.whiteSlide .stroke .navigation li:hover:after {
  background: #303030;
}

.slides.whiteSlide .stroke .navigation li.selected:after {
  border-color: #303030;
  background: #202020;
}

.panel .navigation,
.panel .navigation ul {
  display: inline;
}

.panel .navigation li {
  display: inline-block;
  margin: -9px 0;
}

.panel .side.small .navigation li {
  margin: 0;
}

.navigation .sideArrow {
  width: 31px;
  height: 72px;
  margin: 0 -9px;
}

@media (max-width:766px) {
  .navigation .sideArrow {
    width: 17px;
    height: 40px;
  }
}

.dropdown {
  position: fixed;
  z-index: 300;
  color: #202020;
  width: 160px;
  background: #fff;
  box-shadow: 0 6px 11px 0 rgba(0,0,0,.15),0 14px 28px rgba(0,0,0,.1),0 0 0 1px rgba(0,0,0,.05);
  margin-bottom: 50px;
  border-radius: 6px;
  text-align: center;
  cursor: default;
  transform: translateY(0) scale(.9);
  transform-origin: top;
  transition: transform .35s,opacity .35s,box-shadow .35s;
}

.dropdown:not(.show) {
  pointer-events: none;
  opacity: 0;
}

.dropdown.rectangular {
  border-radius: 0;
}

.dropdown .title {
  font-size: 17px;
  font-weight: 500;
  margin: 0;
  text-align: center;
  opacity: .8;
}

.dropdown a {
  font-size: 15px;
  opacity: .6;
}

.dropdown a:hover {
  opacity: .8;
}

.dropdown:not(.noArrow):after,
.dropdown:not(.noArrow):before {
  content: "";
  bottom: 100%;
  left: 22px;
  border: solid transparent;
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(255,255,255,0);
  border-bottom-color: #fff;
  border-width: 7px;
  margin-left: -7px;
}

.dropdown:not(.noArrow):before {
  border-bottom-color: rgba(0,0,0,.1);
  border-width: 8px;
  margin-left: -8px;
}

.dropdown.show {
  visibility: visible;
  opacity: 1;
  transform: translateY(20px);
}

.dropdown.show.hide {
  opacity: 0;
  transform: translateY(40px);
  box-shadow: 0 0 0 0 rgba(0,0,0,.15),0 0 0 rgba(0,0,0,.1),0 0 0 1px rgba(0,0,0,.05);
  pointer-events: none;
}

.dropdown .hideDropdown {
  opacity: 0;
  pointer-events: none;
}

.dropdown.bottom {
  transform-origin: bottom;
}

.dropdown.bottom.show {
  transform: translateY(-20px);
}

.dropdown.bottom.show.hide {
  transform: translateY(-40px);
}

.dropdown.bottom:after,
.dropdown.bottom:before {
  top: 100%;
  bottom: initial;
  border-bottom-color: rgba(255,255,255,0);
  border-top-color: #fff;
}

.dropdown.bottom:before {
  border-top-color: rgba(0,0,0,.06);
}

.dropdown.right:after,
.dropdown.right:before {
  right: 18px;
  left: auto;
}

.dropdown.right:before {
  right: 17px;
}

.dropdown.center:after,
.dropdown.center:before {
  left: 50%;
}

.dropdown.share li {
  float: left;
  text-align: center;
  display: block;
  width: 80px;
  height: 50px;
  padding: 14px 0;
  color: #fff;
  position: relative;
  cursor: pointer;
  opacity: .9;
  transition: .15s;
}

.dropdown.share li:hover {
  opacity: 1;
}

.dropdown.share li:after {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  background: rgba(0,0,0,.1);
  transition: .25s;
}

.dropdown.share li:active:after {
  opacity: 1;
  transition: .1s;
}

.dropdown.share li svg {
  width: 20px;
  height: 20px;
  fill: #fff;
}

.dropdown.share li.mail {
  width: 100%;
  height: auto;
  color: #202020;
  opacity: .6;
  font-size: 15px;
  padding: 20px 0;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.dropdown.share li.mail:hover {
  opacity: .8;
}

.scroll .dropdown {
  position: absolute;
  top: 0;
}

.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  max-width: 90%;
  height: 100%;
  color: #fff;
  z-index: 500;
  background: #0e0e0e;
  transition: transform .5s,visibility 0s;
  transform: translateX(100%);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.sidebarShown .sidebar.visible {
  transform: translateX(0);
  opacity: 1;
}

.sidebar .content {
  padding: 40px;
  overflow-y: auto;
  position: relative;
}

.sidebar.small .content {
  padding: 30px;
}

.sidebar .wrap {
  padding: 0;
}

.sidebar.left {
  right: inherit;
  left: 0;
  transform: translateX(-100%);
}

.sidebar.top {
  top: 0;
  width: 100%;
  max-width: 100%;
  height: auto;
  transform: translateY(-100%);
}

.sidebar.bottom {
  bottom: 0;
  top: inherit;
  width: 100%;
  max-width: 100%;
  height: auto;
  transform: translateY(100%);
}

.sidebar .logo {
  padding: 0;
  font-size: 0;
  margin-bottom: 35px;
}

.sidebar .close {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 14px;
  font-size: 0;
  opacity: .5;
  z-index: 101;
  transition: .25s;
}

.sidebar .close:hover {
  opacity: 1;
}

.sidebar .close svg {
  width: 24px;
  height: 24px;
  fill: #fff;
}

.sidebar .close:active svg {
  transform: scale(.92);
}

.sidebar ul.mainMenu,
.sidebar ul.social,
.sidebar ul.subMenu {
  line-height: 1.9;
  margin-bottom: 30px;
  display: block;
}

.sidebar .mainMenu li {
  font-size: 20px;
  line-height: 48px;
}

.sidebar .mainMenu.small li {
  font-size: 18px;
  line-height: 46px;
}

.sidebar .subMenu li {
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
  font-size: 18px;
  line-height: 36px;
}

.sidebar .subMenu.small li {
  font-size: 16px;
  line-height: 34px;
}

.sidebar .social {
  margin-top: 40px;
}

.sidebar .social li {
  display: inline-block;
  margin-right: 20px;
}

.sidebar .social li:last-child {
  margin-right: 0;
}

.sidebar .social li a {
  font-size: 0;
  padding: 0;
}

.sidebar .social li a svg {
  width: 20px;
  height: 20px;
}

.sidebar .social.small li {
  margin-right: 12px;
}

.sidebar .social.small li a svg {
  width: 15px;
  height: 15px;
}

.sidebar .social.big li {
  margin-right: 12px;
}

.sidebar .social.big li a svg {
  width: 22px;
  height: 22px;
}

.sidebar.small .social {
  margin-top: 30px;
}

.sidebar .big li {
  font-size: 32px;
  line-height: 64px;
}

.sidebar .social.medium li a svg {
  width: 18px;
  height: 18px;
}

.sidebar .social.medium li {
  margin-right: 14px;
}

.sidebarShown .slide.selected .content {
  overflow: hidden;
}

.page-loaded.sidebarShown .slide.selected {
  transform: scale(.95)!important;
  pointer-events: none;
  opacity: .5!important;
}

.sidebarShown .panel.top {
  opacity: 0;
}

.sidebarShown .panel.bottom {
  opacity: .5;
  transform: scale(.95) translateY(-10%);
}

.page-loaded.sidebarShown .panel,
.page-loaded.sidebarShown .slide.selected,
.page-loaded.sidebarShown .slide.selected:after,
.sidebar {
  transition: transform .5s,opacity .5s!important;
}

.popup {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  z-index: 1000;
  transition: transform .5s,opacity .5s;
  overflow-y: auto;
  display: none;
  transform: translate3d(0,0,0);
}

.popup:not([class*=fade]) {
  background: rgba(17,17,17,.9);
}

.popupShown .popup.visible {
  display: block;
  animation: popupFadeIn .75s;
}

.popup.hidePopup {
  opacity: 0;
  pointer-events: none;
}

.popup .content {
  overflow-y: auto;
}

.popup .close:not(.button) {
  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 14px;
  font-size: 0;
  opacity: .5;
  z-index: 200;
  transition: .25s;
  margin: 0;
  transform: translate3d(0,0,0);
}

.popup .close:not(.button).left {
  right: inherit;
  left: 0;
}

.popup .close:not(.button):hover {
  opacity: 1;
}

.popup .close:not(.button) svg {
  width: 30px;
  height: 30px;
  fill: #fff;
}

.popup .close.button {
  position: fixed;
  z-index: 200;
  margin: 15px;
}

.popup.white .close svg {
  fill: #202020;
}

.popup .wrap {
  padding: 18px 58px;
}

.popup .wrap.spaces {
  padding: 58px;
}

.popup.fullscreen .wrap {
  padding: 0;
}

.popup.fullscreen .embedVideo {
  height: 100vh;
  padding-bottom: 0;
}

@keyframes popupFadeIn {
  from {
    opacity: 0;
  }
}

.popupShown,
.popupShown body,
.sidebarShown,
.sidebarShown body {
  overflow-y: hidden!important;
}

.embedVideo {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}

.embedVideo embed,
.embedVideo iframe,
.embedVideo object,
.embedVideo video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.embedVideo.size-16x10 {
  padding-bottom: 62.5%;
}

.embedVideo.size-4x3 {
  padding-bottom: 75%;
}

.embedVideo.size-1x1,
.embedVideo.size-square {
  padding-bottom: 100%;
}

.zoom-img,
.zoom-img-wrap {
  position: relative;
  transition: all .5s;
  transition-timing-function: cubic-bezier(.2,0,.3,1)!important;
  z-index: 100;
}

.zoom-img img.zoom-img,
.zoom-img-wrap img.zoom-img {
  margin: 0!important;
}

.zoom-overlay {
  background: #111;
  position: fixed;
  top: -9999px;
  left: -9999px;
  right: -9999px;
  bottom: -9999px;
  pointer-events: none;
  opacity: 0;
  transition: opacity .5s;
  z-index: 99;
}

.zoom-overlay-open .zoom-overlay {
  opacity: .9;
}

.zoom-overlay-open .panel,
.zoom-overlay-open .side {
  opacity: 0;
  transition-delay: 0s;
  transition: .25s;
}

.zoom-overlay-open,
.zoom-overlay-transitioning {
  cursor: default;
}

.zoom-img-parent {
  position: relative;
  z-index: 1000;
}

.slider {
  position: relative;
}

.slider.clickable {
  cursor: pointer;
}

.slider>li {
  display: none;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity .5s;
  pointer-events: none;
}

.slider>li.selected {
  display: block;
  opacity: 1;
  transition: opacity .5s;
  pointer-events: all;
}

.slider.rounded>li>img {
  border-radius: 6px;
  overflow: hidden;
}

.slider.autoHeight {
  transition: .5s;
}

.slider.autoHeight>li {
  display: block;
  position: absolute;
}

.controller li {
  cursor: pointer;
}

.controller li.selected {
  cursor: default;
  pointer-events: none;
}

.tooltip[data-tooltip-title] {
  position: relative;
}

.tooltip[data-tooltip-title]:before {
  content: attr(data-tooltip-title);
  position: absolute;
  background: rgba(40,40,40,.6);
  color: #fff;
  font-size: 12px;
  border-radius: 50px;
  padding: 6px 15px;
  visibility: hidden;
  white-space: nowrap;
  letter-spacing: .04em;
  box-shadow: 0 0 0 1px rgba(255,255,255,.07);
  transform: translateY(100%) translateX(-50%);
  left: 50%;
  top: 0;
}

.tooltip[data-tooltip-title]:hover:before {
  visibility: visible;
  animation: fadeIn .35s backwards;
}

.tooltip[data-tooltip-title].top:before {
  bottom: 0;
  top: auto;
  transform: translateY(-100%) translateX(-50%);
}

.slide.before {
  transform: translate3d(0,-50%,0);
}

.slide.after,
.slide:first-child {
  transform: translate3d(0,50%,0);
  will-change: transform;
}

.slide.after,
.slide.before {
  opacity: 0;
}

.slide.selected {
  -webkit-transform: translate3d(0,0,0)!important;
  -moz-transform: translate3d(0,0,0)!important;
  -ms-transform: translate3d(0,0,0)!important;
  -o-transform: translate3d(0,0,0)!important;
  transform: translate3d(0,0,0)!important;
  z-index: 11;
}

.scroll .slide.selected {
  z-index: 10;
}

.page-loaded .slide.selected {
  opacity: 1!important;
}

.horizontal .slide,
.horizontal .slide.before {
  -ms-transform: translate3D(-50%,0,0);
  transform: translate3D(-50%,0,0);
}

.horizontal .slide.after {
  -ms-transform: translate3D(50%,0,0);
  transform: translate3D(50%,0,0);
}

.film .slide.before {
  -ms-transform: translate3D(-100%,0,0);
  transform: translate3D(0,-100%,0);
}

.film .slide.after {
  -ms-transform: translate3D(0,100%,0);
  transform: translate3D(0,100%,0);
}

.film.horizontal .slide.before {
  -ms-transform: translate3D(-100%,0,0);
  transform: translate3D(-100%,0,0);
}

.film.horizontal .slide,
.film.horizontal .slide.after {
  -ms-transform: translate3D(100%,0,0);
  transform: translate3D(100%,0,0);
}

.chain .slide.before {
  -ms-transform: translate3D(-100%,0,0);
  transform: translate3D(0,-100%,0);
  opacity: 1;
}

.chain .slide.after {
  -ms-transform: translate3D(0,100%,0);
  transform: translate3D(0,100%,0);
  opacity: 1;
}

.chain.horizontal .slide.before {
  -ms-transform: translate3D(-100%,0,0);
  transform: translate3D(-100%,0,0);
  opacity: 1;
}

.chain.horizontal .slide,
.chain.horizontal .slide.after {
  -ms-transform: translate3D(100%,0,0);
  transform: translate3D(100%,0,0);
  opacity: 1;
}

.zen .slide.before {
  -ms-transform: translateY(-100%) scale(.8);
  transform: translateY(-100%) scale(.8);
}

.zen .slide,
.zen .slide.after {
  -ms-transform: translateY(100%) scale(.8);
  transform: translateY(100%) scale(.8);
}

.zen.horizontal .slide.before {
  -ms-transform: translateX(-100%) scale(.8);
  transform: translateX(-100%) scale(.8);
}

.zen.horizontal .slide,
.zen.horizontal .slide.after {
  -ms-transform: translateX(100%) scale(.8);
  transform: translateX(100%) scale(.8);
}

.stack .slide,
.stack .slide.after {
  -ms-transform: translateY(100%);
  transform: translateY(100%);
}

.stack .slide.after {
  opacity: initial;
}

.stack .slide.after.active,
.stack .slide.selected {
  z-index: 11!important;
}

.stack .slide.before {
  -ms-transform: scale(.9);
  transform: scale(.9);
}

.stack.horizontal .slide,
.stack.horizontal .slide.after {
  -ms-transform: translateX(100%);
  transform: translateX(100%);
}

.stack.horizontal .slide.before {
  transform: scale(.9);
}

.cards .slide,
.cards .slide.after {
  -ms-transform: translateY(10%);
  transform: translateY(10%);
  opacity: initial;
}

.cards .slide.after {
  z-index: 8!important;
  opacity: 0;
}

.cards .slide.selected {
  z-index: 9!important;
}

.cards .slide.before {
  -ms-transform: translateY(-100%);
  transform: translateY(-100%);
  z-index: 7;
}

.cards .slide.active.before {
  z-index: 10!important;
}

.cards.horizontal .slide,
.cards.horizontal .slide.after {
  -ms-transform: translateX(10%);
  transform: translateX(10%);
}

.cards.horizontal .slide.before {
  -ms-transform: translateX(-100%);
  transform: translateX(-100%);
}

.zoom .slide.before {
  -ms-transform: scale(1.4);
  transform: scale(1.4);
}

.zoom .slide,
.zoom .slide.after {
  -ms-transform: scale(.8);
  transform: scale(.8);
  opacity: 0;
}

.vertigo .slide.before {
  -ms-transform: scale(1.4) rotate(-2deg);
  transform: scale(1.4) rotate(-2deg);
}

.vertigo .slide,
.vertigo .slide.after {
  -ms-transform: scale(.8) rotate(2deg);
  transform: scale(.8) rotate(2deg);
  opacity: 0;
}

.plain .slide.before {
  -ms-transform: scale(1);
  transform: scale(1);
}

.plain .slide,
.plain .slide.after {
  -ms-transform: scale(1);
  transform: scale(1);
}

.plain .slide.after:after,
.plain .slide.before:after {
  opacity: 1;
  background: #111;
}

.page-loaded .fast .slide.active,
.page-loaded .fast .slide.selected {
  transition: transform .7s,opacity .7s;
}

.page-loaded .slide.active,
.page-loaded .slide.selected {
  transition: transform 1s,opacity 1s;
}

.page-loaded .slow .slide.active,
.page-loaded .slow .slide.selected {
  transition: transform 1.4s,opacity 1.4s;
}

.page-loaded .slide.active.entry,
.page-loaded .slide.selected.entry {
  transition: transform 0s,opacity 1s;
}

.slides.animateOnEvent .panel,
.slides.animated .panel {
  transition: transform,opacity;
  transition-duration: .8s;
}

.slides.animateOnEvent.fast .panel,
.slides.animated.fast .panel {
  transition-duration: .6s;
}

.slides.animateOnEvent .panel,
.slides.animated.slow .panel {
  transition-duration: 1s;
}

.smooth .active,
.smooth .panel,
.smooth .rolling-element,
.smooth .selected,
.smooth .sidebar {
  transition-timing-function: cubic-bezier(.55,.05,.35,.95)!important;
}

.bounce .active,
.bounce .panel,
.bounce .rolling-element,
.bounce .selected,
.bounce .sidebar {
  transition-timing-function: cubic-bezier(.45,1.15,.5,1)!important;
}

.animated [class*=ae-] {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translate3d(0,0,0);
  transition-timing-function: cubic-bezier(.25,.1,.2,1);
}

.animated.animate .fast [class*=ae-]:not(.done),
.animated.animate [class*=ae-].fast:not(.done),
.animated.fast .animate [class*=ae-]:not(.done),
.animated.fast.animate [class*=ae-]:not(.done) {
  transition-duration: .7s;
}

.animated .animate [class*=ae-]:not(.done),
.animated.animate [class*=ae-]:not(.done) {
  transition-duration: .8s;
}

.animated.animate .slow [class*=ae-]:not(.done),
.animated.animate [class*=ae-].slow:not(.done),
.animated.slow .animate [class*=ae-]:not(.done),
.animated.slow.animate [class*=ae-]:not(.done) {
  transition-duration: 1s;
}

.animated .animate .ae-1:not(.done),
.animated.animate .ae-1:not(.done) {
  transition-delay: 10ms;
}

.animated .animate .ae-2:not(.done),
.animated.animate .ae-2:not(.done) {
  transition-delay: 160ms;
}

.animated .animate .ae-3:not(.done),
.animated.animate .ae-3:not(.done) {
  transition-delay: 310ms;
}

.animated .animate .ae-4:not(.done),
.animated.animate .ae-4:not(.done) {
  transition-delay: 460ms;
}

.animated .animate .ae-5:not(.done),
.animated.animate .ae-5:not(.done) {
  transition-delay: 610ms;
}

.animated .animate .ae-6:not(.done),
.animated.animate .ae-6:not(.done) {
  transition-delay: 760ms;
}

.animated .animate .ae-7:not(.done),
.animated.animate .ae-7:not(.done) {
  transition-delay: 910ms;
}

.animated .animate .ae-8:not(.done),
.animated.animate .ae-8:not(.done) {
  transition-delay: 1.06s;
}

.animated .animate .ae-9:not(.done),
.animated.animate .ae-9:not(.done) {
  transition-delay: 1.21s;
}

.animated .animate .ae-10:not(.done),
.animated.animate .ae-10:not(.done) {
  transition-delay: 1.36s;
}

.animated.animate .ae-1.fast:not(.done),
.animated.animate .fast .ae-1:not(.done),
.animated.fast .animate .ae-1:not(.done),
.animated.fast.animate .ae-1:not(.done) {
  transition-delay: 10ms;
}

.animated.animate .ae-2.fast:not(.done),
.animated.animate .fast .ae-2:not(.done),
.animated.fast .animate .ae-2:not(.done),
.animated.fast.animate .ae-2:not(.done) {
  transition-delay: 110ms;
}

.animated.animate .ae-3.fast:not(.done),
.animated.animate .fast .ae-3:not(.done),
.animated.fast .animate .ae-3:not(.done),
.animated.fast.animate .ae-3:not(.done) {
  transition-delay: 210ms;
}

.animated.animate .ae-4.fast:not(.done),
.animated.animate .fast .ae-4:not(.done),
.animated.fast .animate .ae-4:not(.done),
.animated.fast.animate .ae-4:not(.done) {
  transition-delay: 310ms;
}

.animated.animate .ae-5.fast:not(.done),
.animated.animate .fast .ae-5:not(.done),
.animated.fast .animate .ae-5:not(.done),
.animated.fast.animate .ae-5:not(.done) {
  transition-delay: 410ms;
}

.animated.animate .ae-6.fast:not(.done),
.animated.animate .fast .ae-6:not(.done),
.animated.fast .animate .ae-6:not(.done),
.animated.fast.animate .ae-6:not(.done) {
  transition-delay: 510ms;
}

.animated.animate .ae-7.fast:not(.done),
.animated.animate .fast .ae-7:not(.done),
.animated.fast .animate .ae-7:not(.done),
.animated.fast.animate .ae-7:not(.done) {
  transition-delay: 610ms;
}

.animated.animate .ae-8.fast:not(.done),
.animated.animate .fast .ae-8:not(.done),
.animated.fast .animate .ae-8:not(.done),
.animated.fast.animate .ae-8:not(.done) {
  transition-delay: 710ms;
}

.animated.animate .ae-9.fast:not(.done),
.animated.animate .fast .ae-9:not(.done),
.animated.fast .animate .ae-9:not(.done),
.animated.fast.animate .ae-9:not(.done) {
  transition-delay: 810ms;
}

.animated.animate .ae-10.fast:not(.done),
.animated.animate .fast .ae-10:not(.done),
.animated.fast .animate .ae-10:not(.done),
.animated.fast.animate .ae-10:not(.done) {
  transition-delay: 910ms;
}

.animated.animate .ae-1.slow:not(.done),
.animated.animate .slow .ae-1:not(.done),
.animated.slow .animate .ae-1:not(.done),
.animated.slow.animate .ae-1:not(.done) {
  transition-delay: 10ms;
}

.animated.animate .ae-2.slow:not(.done),
.animated.animate .slow .ae-2:not(.done),
.animated.slow .animate .ae-2:not(.done),
.animated.slow.animate .ae-2:not(.done) {
  transition-delay: 210ms;
}

.animated.animate .ae-3.slow:not(.done),
.animated.animate .slow .ae-3:not(.done),
.animated.slow .animate .ae-3:not(.done),
.animated.slow.animate .ae-3:not(.done) {
  transition-delay: 410ms;
}

.animated.animate .ae-4.slow:not(.done),
.animated.animate .slow .ae-4:not(.done),
.animated.slow .animate .ae-4:not(.done),
.animated.slow.animate .ae-4:not(.done) {
  transition-delay: 610ms;
}

.animated.animate .ae-5.slow:not(.done),
.animated.animate .slow .ae-5:not(.done),
.animated.slow .animate .ae-5:not(.done),
.animated.slow.animate .ae-5:not(.done) {
  transition-delay: 810ms;
}

.animated.animate .ae-6.slow:not(.done),
.animated.animate .slow .ae-6:not(.done),
.animated.slow .animate .ae-6:not(.done),
.animated.slow.animate .ae-6:not(.done) {
  transition-delay: 1.01s;
}

.animated.animate .ae-7.slow:not(.done),
.animated.animate .slow .ae-7:not(.done),
.animated.slow .animate .ae-7:not(.done),
.animated.slow.animate .ae-7:not(.done) {
  transition-delay: 1.21s;
}

.animated.animate .ae-8.slow:not(.done),
.animated.animate .slow .ae-8:not(.done),
.animated.slow .animate .ae-8:not(.done),
.animated.slow.animate .ae-8:not(.done) {
  transition-delay: 1.41s;
}

.animated.animate .ae-9.slow:not(.done),
.animated.animate .slow .ae-9:not(.done),
.animated.slow .animate .ae-9:not(.done),
.animated.slow.animate .ae-9:not(.done) {
  transition-delay: 1.61s;
}

.animated.animate .ae-10.slow:not(.done),
.animated.animate .slow .ae-10:not(.done),
.animated.slow .animate .ae-10:not(.done),
.animated.slow.animate .ae-10:not(.done) {
  transition-delay: 1.81s;
}

.animated .fromBottom [class*=ae-]:not(.done),
.animated [class*=ae-]:not(.done),
.animated.fromBottom [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromBottom:not(.done) {
  visibility: hidden;
  transform: translate3d(0,50px,0);
  opacity: 0;
}

.animated .fromTop [class*=ae-]:not(.done),
.animated.fromTop [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromTop:not(.done) {
  transform: translate3d(0,-50px,0);
}

.animated .fromLeft [class*=ae-]:not(.done),
.animated.fromLeft [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromLeft:not(.done) {
  transform: translate3d(-50px,0,0);
}

.animated .fromRight [class*=ae-]:not(.done),
.animated.fromRight [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromRight:not(.done) {
  transform: translate3d(50px,0,0);
}

.animated .fromCenter [class*=ae-]:not(.done),
.animated.fromCenter [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromCenter:not(.done) {
  transform: scale(.9) translate3d(0,0,0);
}

.animated .fromAbove [class*=ae-]:not(.done),
.animated.fromAbove [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromAbove:not(.done) {
  transform: scale(1.1) translate3d(0,0,0);
}

.animated .fromBottomLeft [class*=ae-]:not(.done),
.animated.fromBottomLeft [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromBottomLeft:not(.done) {
  transform: translate3d(-50px,50px,0);
}

.animated .fromTopLeft [class*=ae-]:not(.done),
.animated.fromTopLeft [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromTopLeft:not(.done) {
  -webkit-transform: translate3d(-50px,-50px,0);
  transform: translate3d(-50px,-50px,0);
}

.animated .fromBottomRight [class*=ae-]:not(.done),
.animated.fromBottomRight [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromBottomRight:not(.done) {
  transform: translate3d(50px,50px,0);
}

.animated .fromTopRight [class*=ae-]:not(.done),
.animated.fromTopRight [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromTopRight:not(.done) {
  transform: translate3d(50px,-50px,0);
}

.animated .fadeIn [class*=ae-]:not(.done),
.animated.fadeIn [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fadeIn:not(.done) {
  transform: scale(1) translate3d(0,0,0);
}

.animated .fromBlur [class*=ae-]:not(.done),
.animated.fromBlur [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromBlur:not(.done) {
  transform: scale(1) translate3d(0,0,0);
  filter: blur(10px);
}

.slides .animated.animate.active [class*=ae-]:not(.done),
.slides.animated .animate.active [class*=ae-]:not(.done) {
  opacity: 1;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  visibility: visible;
  transform: translate3d(0,0,0);
  filter: none;
}

.animateOnEvent {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.animateOnEvent [class*=ae-]:not(.done):not(.do) {
  opacity: 0;
  visibility: hidden;
}

.animateOnEvent [class*=ae-].do {
  animation-fill-mode: backwards;
  animation-duration: .8s;
  visibility: visible;
}

.animateOnEvent .fast [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fast,
.animateOnEvent.fast [class*=ae-].do {
  animation-duration: .7s;
}

.animateOnEvent .slow [class*=ae-].do,
.animateOnEvent [class*=ae-].do.slow,
.animateOnEvent.slow [class*=ae-].do {
  animation-duration: 1s;
}

.animateOnEvent [class*=ae-].do {
  animation-name: fromBottom;
}

.animateOnEvent .fromBottom [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromBottom,
.animateOnEvent.fromBottom [class*=ae-].do {
  animation-name: fromBottom;
}

.animateOnEvent .fromTop [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromTop,
.animateOnEvent.fromTop [class*=ae-].do {
  animation-name: fromTop;
}

.animateOnEvent .fromLeft [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromLeft,
.animateOnEvent.fromLeft [class*=ae-].do {
  animation-name: fromLeft;
}

.animateOnEvent .fromRight [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromRight,
.animateOnEvent.fromRight [class*=ae-].do {
  animation-name: fromRight;
}

.animateOnEvent .fromCenter [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromCenter,
.animateOnEvent.fromCenter [class*=ae-].do {
  animation-name: fromCenter;
}

.animateOnEvent .fromAbove [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromAbove,
.animateOnEvent.fromAbove [class*=ae-].do {
  animation-name: fromAbove;
}

.animateOnEvent .fromBottomLeft [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromBottomLeft,
.animateOnEvent.fromBottomLeft [class*=ae-].do {
  animation-name: fromBottomLeft;
}

.animateOnEvent .fromTopLeft [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromTopLeft,
.animateOnEvent.fromTopLeft [class*=ae-].do {
  animation-name: fromTopLeft;
}

.animateOnEvent .fromBottomRight [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromBottomRight,
.animateOnEvent.fromBottomRight [class*=ae-].do {
  animation-name: fromBottomRight;
}

.animateOnEvent .fromTopRight [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromTopRight,
.animateOnEvent.fromTopRight [class*=ae-].do {
  animation-name: fromTopRight;
}

.animateOnEvent .fadeIn [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fadeIn,
.animateOnEvent.fadeIn [class*=ae-].do {
  animation-name: fadeIn;
}

.animateOnEvent .fromBlur [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromBlur,
.animateOnEvent.fromBlur [class*=ae-].do {
  animation-name: fromBlur;
}

@keyframes fromBottom {
  from {
    transform: translate3d(0,50px,0);
    opacity: 0;
  }
}

@keyframes fromTop {
  from {
    transform: translate3d(0,-50px,0);
    opacity: 0;
  }
}

@keyframes fromLeft {
  from {
    transform: translate3d(-25px,0,0);
    opacity: 0;
  }
}

@keyframes fromRight {
  from {
    transform: translate3d(25px,0,0);
    opacity: 0;
  }
}

@keyframes fromCenter {
  from {
    transform: scale(.9) translate3d(0,0,0);
    opacity: 0;
  }
}

@keyframes fromAbove {
  from {
    transform: scale(1.1) translate3d(0,0,0);
    opacity: 0;
  }
}

@keyframes fromBottomLeft {
  from {
    transform: translate3d(-50px,50px,0);
    opacity: 0;
  }
}

@keyframes fromTopLeft {
  from {
    transform: translate3d(-50px,-50px,0);
    opacity: 0;
  }
}

@keyframes fromBottomRight {
  from {
    transform: translate3d(50px,50px,0);
    opacity: 0;
  }
}

@keyframes fromTopRight {
  from {
    transform: translate3d(50px,-50px,0);
    opacity: 0;
  }
}

@keyframes fadeIn {
  from {
    transform: scale(1) translate3d(0,0,0);
    opacity: 0;
  }
}

@keyframes fromBlur {
  from {
    transform: scale(1) translate3d(0,0,0);
    filter: blur(10px);
    opacity: 0;
  }
}

.animateOnEvent .ae-1 {
  animation-delay: 10ms;
}

.animateOnEvent .ae-2 {
  animation-delay: 160ms;
}

.animateOnEvent .ae-3 {
  animation-delay: 310ms;
}

.animateOnEvent .ae-4 {
  animation-delay: 460ms;
}

.animateOnEvent .ae-5 {
  animation-delay: 610ms;
}

.animateOnEvent .ae-6 {
  animation-delay: 760ms;
}

.animateOnEvent .ae-7 {
  animation-delay: 910ms;
}

.animateOnEvent .ae-8 {
  animation-delay: 1.06s;
}

.animateOnEvent .ae-9 {
  animation-delay: 1.21s;
}

.animateOnEvent .ae-10 {
  animation-delay: 1.36s;
}

.animateOnEvent .ae-1,
.animateOnEvent .ae-1.fast,
.animateOnEvent .fast .ae-1.fast,
.animateOnEvent.fast .ae-1 {
  animation-delay: 10ms;
}

.animateOnEvent .ae-2,
.animateOnEvent .ae-2.fast,
.animateOnEvent .fast .ae-2.fast,
.animateOnEvent.fast .ae-2 {
  animation-delay: 110ms;
}

.animateOnEvent .ae-3,
.animateOnEvent .ae-3.fast,
.animateOnEvent .fast .ae-3.fast,
.animateOnEvent.fast .ae-3 {
  animation-delay: 210ms;
}

.animateOnEvent .ae-4,
.animateOnEvent .ae-4.fast,
.animateOnEvent .fast .ae-4.fast,
.animateOnEvent.fast .ae-4 {
  animation-delay: 310ms;
}

.animateOnEvent .ae-5,
.animateOnEvent .ae-5.fast,
.animateOnEvent .fast .ae-5.fast,
.animateOnEvent.fast .ae-5 {
  animation-delay: 410ms;
}

.animateOnEvent .ae-6,
.animateOnEvent .ae-6.fast,
.animateOnEvent .fast .ae-6.fast,
.animateOnEvent.fast .ae-6 {
  animation-delay: 510ms;
}

.animateOnEvent .ae-7,
.animateOnEvent .ae-7.fast,
.animateOnEvent .fast .ae-7.fast,
.animateOnEvent.fast .ae-7 {
  animation-delay: 610ms;
}

.animateOnEvent .ae-8,
.animateOnEvent .ae-8.fast,
.animateOnEvent .fast .ae-8.fast,
.animateOnEvent.fast .ae-8 {
  animation-delay: 710ms;
}

.animateOnEvent .ae-9,
.animateOnEvent .ae-9.fast,
.animateOnEvent .fast .ae-9.fast,
.animateOnEvent.fast .ae-9 {
  animation-delay: 810ms;
}

.animateOnEvent .ae-10,
.animateOnEvent .ae-10.fast,
.animateOnEvent .fast .ae-10.fast,
.animateOnEvent.fast .ae-10 {
  animation-delay: 910ms;
}

.animateOnEvent .ae-1.slow,
.animateOnEvent .slow .ae-1,
.animateOnEvent.slow .ae-1 {
  animation-delay: 10ms;
}

.animateOnEvent .ae-2.slow,
.animateOnEvent .slow .ae-2,
.animateOnEvent.slow .ae-2 {
  animation-delay: 210ms;
}

.animateOnEvent .ae-3.slow,
.animateOnEvent .slow .ae-3,
.animateOnEvent.slow .ae-3 {
  animation-delay: 410ms;
}

.animateOnEvent .ae-4.slow,
.animateOnEvent .slow .ae-4,
.animateOnEvent.slow .ae-4 {
  animation-delay: 610ms;
}

.animateOnEvent .ae-5.slow,
.animateOnEvent .slow .ae-5,
.animateOnEvent.slow .ae-5 {
  animation-delay: 810ms;
}

.animateOnEvent .ae-6.slow,
.animateOnEvent .slow .ae-6,
.animateOnEvent.slow .ae-6 {
  animation-delay: 1.01s;
}

.animateOnEvent .ae-7.slow,
.animateOnEvent .slow .ae-7,
.animateOnEvent.slow .ae-7 {
  animation-delay: 1.21s;
}

.animateOnEvent .ae-8.slow,
.animateOnEvent .slow .ae-8,
.animateOnEvent.slow .ae-8 {
  animation-delay: 1.41s;
}

.animateOnEvent .ae-9.slow,
.animateOnEvent .slow .ae-9,
.animateOnEvent.slow .ae-9 {
  animation-delay: 1.61s;
}

.animateOnEvent .ae-10.slow,
.animateOnEvent .slow .ae-10,
.animateOnEvent.slow .ae-10 {
  animation-delay: 1.81s;
}

.slides:not(.scroll) .rolling-element {
  transition: 1s;
  transform: translate3d(0,0,0);
  will-change: transform;
}

.slides:not(.scroll).fast .rolling-element {
  transition-duration: .7s;
}

.slides:not(.scroll).slow .rolling-element {
  transition-duration: 1.4s;
}

.slides:not(.scroll) .slide.before .rolling-element {
  transform: translateY(100%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-10 {
  transform: translateY(10%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-20 {
  transform: translateY(20%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-30 {
  transform: translateY(30%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-40 {
  transform: translateY(40%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-50 {
  transform: translateY(50%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-60 {
  transform: translateY(60%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-70 {
  transform: translateY(70%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-80 {
  transform: translateY(80%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-90 {
  transform: translateY(90%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse {
  transform: translateY(-100%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-10 {
  transform: translateY(-10%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-20 {
  transform: translateY(-20%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-30 {
  transform: translateY(-30%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-40 {
  transform: translateY(-40%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-50 {
  transform: translateY(-50%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-60 {
  transform: translateY(-60%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-70 {
  transform: translateY(-70%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-80 {
  transform: translateY(-80%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-90 {
  transform: translateY(-90%);
}

.slides:not(.scroll) .slide.after .rolling-element {
  transform: translateY(-100%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-10 {
  transform: translateY(-10%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-20 {
  transform: translateY(-20%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-30 {
  transform: translateY(-30%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-40 {
  transform: translateY(-40%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-50 {
  transform: translateY(-50%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-60 {
  transform: translateY(-60%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-70 {
  transform: translateY(-70%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-80 {
  transform: translateY(-80%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-90 {
  transform: translateY(-90%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse {
  transform: translateY(100%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-10 {
  transform: translateY(10%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-20 {
  transform: translateY(20%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-30 {
  transform: translateY(30%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-40 {
  transform: translateY(40%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-50 {
  transform: translateY(50%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-60 {
  transform: translateY(60%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-70 {
  transform: translateY(70%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-80 {
  transform: translateY(80%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-90 {
  transform: translateY(90%);
}

.slides.animateOnEvent .kenBurns .background,
.slides.animateOnEvent .kenBurns.zoomin .background,
.slides.animated .kenBurns .background,
.slides.animated .kenBurns.zoomin .background {
  transform: scale(1.08) rotate(-.02deg);
  opacity: .2;
  z-index: 1;
}

.slides.animateOnEvent .kenBurns.zoomin:not(.video) .background,
.slides.animateOnEvent .kenBurns:not(.video) .background,
.slides.animated .kenBurns.zoomin:not(.video) .background,
.slides.animated .kenBurns:not(.video) .background {
  transition: transform 5s cubic-bezier(.3,0,.7,1),opacity 1s ease;
}

.animateOnEvent .active .kenBurns.zoomin:not(.video) .background,
.animateOnEvent .active.kenBurns.zoomin:not(.video) .background,
.animateOnEvent .active.kenBurns:not(.video) .background,
.animated .active .kenBurns.zoomin:not(.video) .background,
.animated .active.kenBurns.zoomin:not(.video) .background,
.animated .active.kenBurns:not(.video) .background {
  opacity: 1;
  transform: translate3d(0,0,0);
}

.slides.animateOnEvent .kenBurns.zoomin:not(.video) .background,
.slides.animated .kenBurns.zoomin:not(.video) .background {
  transform: translate3d(0,0,0);
}

.animateOnEvent .active.kenBurns.zoomin:not(.video) .background,
.animated .active.kenBurns.zoomin:not(.video) .background,
.windows .slides.animateOnEvent .active.kenBurns.zoomin:not(.video) .background,
.windows .slides.animated .active.kenBurns.zoomin:not(.video) .background {
  transform: scale(1.08) rotate(-.02deg);
}

.mobile .kenBurns .background,
.mobile .kenBurns.zoomin .background {
  transition: 0s;
  transform: none;
}

.slides.animateOnEvent .parallax:not(.video) .background,
.slides.animated .parallax:not(.video) .background {
  transform: translate3d(0,0,0) scale(1.25);
  transition: transform-origin 1s,transform 1s;
}

.slides.animateOnEvent.fast .parallax:not(.video) .background,
.slides.animated.fast .parallax:not(.video) .background {
  transition: transform-origin .6s,transform .6s;
}

.slides.animateOnEvent.slow .parallax:not(.video) .background,
.slides.animated.slow .parallax:not(.video) .background {
  transition: transform-origin 1.4s,transform 1.4s;
}

.slides.animateOnEvent .parallax.animate:not(.video) .background,
.slides.animated .parallax.animate:not(.video) .background {
  transform-origin: center;
}

.slides.animateOnEvent .slide.after.parallax:not(.video) .background,
.slides.animated .slide.after.parallax:not(.video) .background {
  transform-origin: top center;
}

.slides.animateOnEvent .slide.before.parallax:not(.video) .background,
.slides.animated .slide.before.parallax:not(.video) .background {
  transform-origin: bottom center;
}

.slides.animateOnEvent.horizontal .slide.after.parallax:not(.video) .background,
.slides.animated.horizontal .slide.after.parallax:not(.video) .background {
  transform-origin: left center;
}

.slides.animateOnEvent.horizontal .slide.before.parallax:not(.video) .background,
.slides.animated.horizontal .slide.before.parallax:not(.video) .background {
  transform-origin: right center;
}

.slides.animateOnEvent.zoom .slide.after.parallax:not(.video) .background,
.slides.animated.zoom .slide.after.parallax:not(.video) .background {
  transform-origin: center;
  transform: translate3d(0,0,0) scale(1);
}

.slides.animateOnEvent.zoom .slide.animate.parallax:not(.video) .background,
.slides.animated.zoom .slide.animate.parallax:not(.video) .background {
  transform-origin: center;
  transform: translate3d(0,0,0) scale(1.1);
}

.slides.animateOnEvent.zoom .slide.before.parallax:not(.video) .background,
.slides.animated.zoom .slide.before.parallax:not(.video) .background {
  transform-origin: center;
  transform: translate3d(0,0,0) scale(1);
}

.slides.animateOnEvent.plain .slide.after.parallax:not(.video) .background,
.slides.animated.plain .slide.after.parallax:not(.video) .background {
  transform-origin: center;
  transform: translate3d(0,0,0) scale(1);
}

.slides.animateOnEvent.plain .slide.animate.parallax:not(.video) .background,
.slides.animated.plain .slide.animate.parallax:not(.video) .background {
  transform-origin: center;
  transform: translate3d(0,0,0) scale(1);
}

.slides.animateOnEvent.plain .slide.before.parallax:not(.video) .background,
.slides.animated.plain .slide.before.parallax:not(.video) .background {
  transform-origin: center;
  transform: translate3d(0,0,0) scale(1);
}

.slides.animateOnEvent .scenic:not(.video) .background,
.slides.animated .scenic:not(.video) .background {
  animation: scenic 140s cubic-bezier(.2,0,.8,1) infinite;
}

@keyframes scenic {
  50% {
    transform: scale(1.5) rotate(-.02deg);
  }
}

.mobile .simplifiedMobile,
.scroll {
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.scroll .content .mobile .simplifiedMobile .content {
  -webkit-overflow-scrolling: initial;
  overflow: hidden;
}

.scroll .wrap {
  overflow: hidden;
}

.mobile .simplifiedMobile .container,
.mobile .simplifiedMobile .content,
.mobile .simplifiedMobile .slide,
.scroll .container,
.scroll .slide,
.scroll .slide .content {
  position: relative!important;
  height: auto;
  opacity: 1;
}

.mobile .simplifiedMobile .popup .container,
.mobile .simplifiedMobile .popup .content {
  position: absolute!important;
  height: 100%;
}

.mobile .simplifiedMobile .container,
.scroll .container {
  height: 100vh;
}

.mobile .slide.autoHeight .simplifiedMobile .container,
.scroll .slide.autoHeight .container {
  height: auto;
}

.mobile .simplifiedMobile .slide .background,
.scroll .slide .background {
  position: absolute!important;
}

.mobile .simplifiedMobile .slide:not(.autoHeight) .background,
.scroll .slide:not(.autoHeight) .background {
  min-height: 100vh;
}

.mobile .simplifiedMobile .slide,
.mobile .simplifiedMobile .slide.after,
.mobile .simplifiedMobile .slide.before,
.scroll .slide,
.scroll .slide.after,
.scroll .slide.before {
  visibility: visible;
  transform: none!important;
}

.mobile .simplifiedMobile .slide,
.mobile .simplifiedMobile .slide.after,
.mobile .simplifiedMobile .slide.before {
  opacity: 1!important;
}

.page-loaded.mobile.sidebarShown .simplifiedMobile .slide,
.page-loaded.sidebarShown .scroll .slide {
  transform: translate3d(0,0,0)!important;
  pointer-events: none;
  opacity: .5!important;
}

.page-loaded .scroll .slide {
  transition: transform .5s,opacity .5s!important;
}

.mobile .simplifiedMobile .navigation {
  display: none;
}

.mobile .simplifiedMobile [class*=ae-] {
  visibility: visible!important;
  opacity: 1!important;
  transform: none!important;
}

.mobile .simplifiedMobile [class*=ae-] {
  visibility: visible!important;
  opacity: 1!important;
  transform: none!important;
}

.scroll .parallax:not(.video) .background {
  transform: translate3d(0,0,0) scale(1.25);
  transition: none!important;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
}

@keyframes zoomOut {
  from {
    opacity: 0;
    transform: scale(.86);
  }
}

@keyframes riseUp {
  from {
    opacity: 0;
    transform: scale(.86) translateY(50px);
  }
}

@media (max-width:1023px) {
  .parallaxMotion .parallaxElement:not(.responsive),
  .parallaxMotion:not(.responsive) .parallaxElement {
    transform: none!important;
  }
}

html {
  font-size: 6px;
  font-weight: 400;
  color: #202020;
}

@media (max-width:550px) {
  html {
    font-size: 5px;
  }
}

@media (min-width:767px) {
  html {
    font-size: 7px;
  }
}

@media (min-width:1024px) {
  html {
    font-size: 6px;
  }
}

body {
  font-size: 15px;
}

.typography .h1,
.typography .h2,
.typography .h3,
.typography .h4,
.typography .h5,
.typography .h6,
.typography h1,
.typography h2,
.typography h3,
.typography h4,
.typography h5,
.typography h6 {
  font-style: normal;
  letter-spacing: normal;
}

.typography .h1.ultraLight,
.typography .h2.ultraLight,
.typography .h3.ultraLight,
.typography .h4.ultraLight,
.typography .h5.ultraLight,
.typography .h6.ultraLight,
.typography h1.ultraLight,
.typography h2.ultraLight,
.typography h3.ultraLight,
.typography h4.ultraLight,
.typography h5.ultraLight,
.typography h6.ultraLight {
  font-weight: 100;
}

.typography .h1.light,
.typography .h2.light,
.typography .h3.light,
.typography .h4.light,
.typography .h5.light,
.typography .h6.light,
.typography h1.light,
.typography h2.light,
.typography h3.light,
.typography h4.light,
.typography h5.light,
.typography h6.light {
  font-weight: 300;
}

.typography .h1.normal,
.typography .h2.normal,
.typography .h3.normal,
.typography .h4.normal,
.typography .h5.normal,
.typography .h6.normal,
.typography h1.normal,
.typography h2.normal,
.typography h3.normal,
.typography h4.normal,
.typography h5.normal,
.typography h6.normal {
  font-weight: 400;
}

.typography .h1.semiBold,
.typography .h2.semiBold,
.typography .h3.semiBold,
.typography .h4.semiBold,
.typography .h5.semiBold,
.typography .h6.semiBold,
.typography h1.semiBold,
.typography h2.semiBold,
.typography h3.semiBold,
.typography h4.semiBold,
.typography h5.semiBold,
.typography h6.semiBold {
  font-weight: 500;
  letter-spacing: -.05em;
}

.typography .h1.bold,
.typography .h2.bold,
.typography .h3.bold,
.typography .h4.bold,
.typography .h5.bold,
.typography .h6.bold,
.typography h1.bold,
.typography h2.bold,
.typography h3.bold,
.typography h4.bold,
.typography h5.bold,
.typography h6.bold {
  font-weight: 600;
  letter-spacing: -.04em;
}

.typography .h1.ultraBold,
.typography .h2.ultraBold,
.typography .h3.ultraBold,
.typography .h4.ultraBold,
.typography .h5.ultraBold,
.typography .h6.ultraBold,
.typography h1.ultraBold,
.typography h2.ultraBold,
.typography h3.ultraBold,
.typography h4.ultraBold,
.typography h5.ultraBold,
.typography h6.ultraBold {
  font-weight: 800;
  letter-spacing: -.03em;
}

.typography .h1,
.typography h1 {
  font-size: 8.4rem;
  line-height: 10rem;
  margin-top: 8rem;
  padding-top: .0138rem;
  padding-bottom: .9862rem;
  margin-bottom: 1rem;
}

.typography .h1.small,
.typography h1.small {
  font-size: 6.4rem;
  line-height: 6rem;
  margin-top: 3rem;
  padding-top: .7248rem;
  padding-bottom: .2752rem;
  margin-bottom: 2rem;
}

.typography .h1.large,
.typography h1.large {
  font-size: 9.6rem;
  line-height: 10rem;
  margin-top: 7rem;
  padding-top: .5872rem;
  padding-bottom: .4128rem;
  margin-bottom: 4rem;
}

.typography .h1.huge,
.typography h1.huge {
  font-size: 14.6rem;
  line-height: 15rem;
  margin-top: 10rem;
  padding-top: .3097rem;
  padding-bottom: .6903rem;
  margin-bottom: 3rem;
}

.typography .h2,
.typography h2 {
  font-size: 7.4rem;
  line-height: 8rem;
  margin-top: 6rem;
  padding-top: .3693rem;
  padding-bottom: .6307rem;
  margin-bottom: 1rem;
}

.typography .h2.small,
.typography h2.small {
  font-size: 5.6rem;
  line-height: 6rem;
  margin-top: 4rem;
  padding-top: .0092rem;
  padding-bottom: .9908rem;
  margin-bottom: -1rem;
}

.typography .h2.large,
.typography h2.large {
  font-size: 8.8rem;
  line-height: 9rem;
  margin-top: 6rem;
  padding-top: .3716rem;
  padding-bottom: .6284rem;
  margin-bottom: 1rem;
}

.typography .h2.huge,
.typography h2.huge {
  font-size: 11.2rem;
  line-height: 12rem;
  margin-top: 8rem;
  padding-top: .0184rem;
  padding-bottom: .9816rem;
  margin-bottom: 1rem;
}

.typography .h3,
.typography h3 {
  font-size: 6.4rem;
  line-height: 8rem;
  margin-top: 3rem;
  padding-top: .7248rem;
  padding-bottom: .2752rem;
  margin-bottom: 0;
}

.typography .h3.small,
.typography h3.small {
  font-size: 4.8rem;
  line-height: 6rem;
  margin-top: 2rem;
  padding-top: .2936rem;
  padding-bottom: .7064rem;
  margin-bottom: -1rem;
}

.typography .h3.large,
.typography h3.large {
  font-size: 8rem;
  line-height: 10rem;
  margin-top: 4rem;
  padding-top: .156rem;
  padding-bottom: .844rem;
  margin-bottom: 0;
}

.typography .h3.huge,
.typography h3.huge {
  font-size: 9.6rem;
  line-height: 10rem;
  margin-top: 5rem;
  padding-top: .5872rem;
  padding-bottom: .4128rem;
  margin-bottom: 2rem;
}

.typography .h4,
.typography h4 {
  font-size: 5.2rem;
  line-height: 6rem;
  margin-top: 4rem;
  padding-top: .1514rem;
  padding-bottom: .8486rem;
  margin-bottom: -1rem;
}

.typography .h5,
.typography h5 {
  font-size: 4.4rem;
  line-height: 6rem;
  margin-top: 4rem;
  padding-top: .4358rem;
  padding-bottom: .5642rem;
  margin-bottom: -1rem;
}

.typography .h6,
.typography h6 {
  font-size: 4rem;
  line-height: 4rem;
  margin-top: 3rem;
  padding-top: .578rem;
  padding-bottom: .422rem;
  margin-bottom: 0;
}

.typography .p,
.typography .p:not(.hero)+p,
.typography p,
.typography p:not(.hero)+p {
  font-size: 3.5rem;
  line-height: 5rem;
  margin-top: 0;
  padding-top: .25575rem;
  padding-bottom: .74425rem;
  margin-bottom: 1rem;
  text-rendering: optimizeLegibility;
}

.typography .p.micro,
.typography .p:not(.hero)+p.micro,
.typography p.micro,
.typography p:not(.hero)+p.micro {
  font-size: 2.6rem;
  line-height: 4rem;
  margin-top: 2rem;
  padding-top: .0757rem;
  padding-bottom: .9243rem;
  margin-bottom: -1rem;
}

.typography .p.small,
.typography .p:not(.hero)+p.small,
.typography p.small,
.typography p:not(.hero)+p.small {
  font-size: 3rem;
  line-height: 4rem;
  margin-top: 1rem;
  padding-top: .9335rem;
  padding-bottom: .0665rem;
  margin-bottom: 0;
}

.typography .p.hero,
.typography .p:not(.hero)+p.hero,
.typography p.hero,
.typography p:not(.hero)+p.hero {
  font-size: 5rem;
  line-height: 6rem;
  margin-top: 2rem;
  padding-top: .2225rem;
  padding-bottom: .7775rem;
  margin-bottom: 3rem;
  font-weight: 300;
  letter-spacing: -.16rem;
}

.typography strong {
  font-weight: 600;
}

.typography em {
  font-weight: 500;
}

.typography li {
  font-size: 3.5rem;
  line-height: 4rem;
  margin-top: -1rem;
  padding-top: .75575rem;
  padding-bottom: .24425rem;
  margin-bottom: 1rem;
  opacity: .8;
}

.typography ol,
.typography ul {
  margin: 4rem 4rem 4rem 8rem;
}

.typography ul li {
  list-style: disc;
}

.typography ol li {
  list-style: decimal;
}

.typography blockquote {
  font-size: 3.2rem;
  line-height: 4rem;
  margin-top: 5rem;
  padding-top: .8624rem;
  padding-bottom: .1376rem;
  margin-bottom: 5rem;
  padding-left: 4rem;
  padding-right: 4rem;
  margin-left: 4rem;
  margin-right: 4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  opacity: .9;
  border-left: 5px solid #eee;
}

.typography q {
  font-size: 3.2rem;
  line-height: 4rem;
  margin-top: 5rem;
  padding-top: .8624rem;
  padding-bottom: .1376rem;
  margin-bottom: 6rem;
  padding-left: 4rem;
  padding-right: 4rem;
  opacity: .9;
  display: block;
}

.typography q:after,
.typography q:before {
  font-size: 5rem;
  line-height: .1rem;
  vertical-align: -1rem;
}

.typography q:before {
  content: "“";
  margin-right: 1rem;
}

.typography q:after {
  content: "”";
  margin-left: 1rem;
}

@media (min-width:768px) {
  .article li,
  .article p {
    font-weight: 300;
  }
}

@media (max-width:550px) {
  .article .h2,
  .article .h3,
  .article h1,
  .article h4,
  .article h5,
  .article h6 {
    opacity: .8;
  }
}

.white {
  background: #fff!important;
  color: #202020!important;
}

.white svg {
  fill: #202020!important;
}

.text-white {
  color: #fff!important;
}

.text-white.button svg {
  fill: #fff!important;
}

.stroke.button.white {
  color: #fff!important;
  border-color: #fff!important;
}

.stroke.button.white svg {
  fill: #fff!important;
}

.black {
  background: #202020!important;
  color: #fff!important;
}

.black svg {
  fill: #fff!important;
}

.text-black {
  color: #202020!important;
}

.text-black.button svg {
  fill: #202020!important;
}

.stroke.button.black {
  color: #202020!important;
  border-color: #202020!important;
}

.stroke.button.black svg {
  fill: #202020!important;
}

.red {
  background: #f44336!important;
  color: #fff!important;
}

.red svg {
  fill: #fff!important;
}

.text-red {
  color: #f44336!important;
}

.text-red.button svg {
  fill: #f44336!important;
}

.stroke.button.red {
  color: #f44336!important;
  border-color: #f44336!important;
}

.stroke.button.red svg {
  fill: #f44336!important;
}

.pink {
  background: #e91e63!important;
  color: #fff!important;
}

.pink svg {
  fill: #fff!important;
}

.text-pink {
  color: #e91e63!important;
}

.text-pink.button svg {
  fill: #e91e63!important;
}

.stroke.button.pink {
  color: #e91e63!important;
  border-color: #e91e63!important;
}

.stroke.button.pink svg {
  fill: #e91e63!important;
}

.purple {
  background: #9c27b0!important;
  color: #fff!important;
}

.purple svg {
  fill: #fff!important;
}

.text-purple {
  color: #9c27b0!important;
}

.text-purple.button svg {
  fill: #9c27b0!important;
}

.stroke.button.purple {
  color: #9c27b0!important;
  border-color: #9c27b0!important;
}

.stroke.button.purple svg {
  fill: #9c27b0!important;
}

.deepPurple {
  background: #673ab7!important;
  color: #fff!important;
}

.deepPurple svg {
  fill: #fff!important;
}

.text-deepPurple {
  color: #673ab7!important;
}

.text-deepPurple.button svg {
  fill: #673ab7!important;
}

.stroke.button.deepPurple {
  color: #673ab7!important;
  border-color: #673ab7!important;
}

.stroke.button.deepPurple svg {
  fill: #673ab7!important;
}

.indigo {
  background: #3f51b5!important;
  color: #fff!important;
}

.indigo svg {
  fill: #fff!important;
}

.text-indigo {
  color: #3f51b5!important;
}

.text-indigo.button svg {
  fill: #3f51b5!important;
}

.stroke.button.indigo {
  color: #3f51b5!important;
  border-color: #3f51b5!important;
}

.stroke.button.indigo svg {
  fill: #3f51b5!important;
}

.blue {
  background: #2196f3!important;
  color: #fff!important;
}

.blue svg {
  fill: #fff!important;
}

.text-blue {
  color: #2196f3!important;
}

.text-blue.button svg {
  fill: #2196f3!important;
}

.stroke.button.blue {
  color: #2196f3!important;
  border-color: #2196f3!important;
}

.stroke.button.blue svg {
  fill: #2196f3!important;
}

.cyan {
  background: #00bcd4!important;
  color: #fff!important;
}

.cyan svg {
  fill: #fff!important;
}

.text-cyan {
  color: #00bcd4!important;
}

.text-cyan.button svg {
  fill: #00bcd4!important;
}

.stroke.button.cyan {
  color: #00bcd4!important;
  border-color: #00bcd4!important;
}

.stroke.button.cyan svg {
  fill: #00bcd4!important;
}

.teal {
  background: #009688!important;
  color: #fff!important;
}

.teal svg {
  fill: #fff!important;
}

.text-teal {
  color: #009688!important;
}

.text-teal.button svg {
  fill: #009688!important;
}

.stroke.button.teal {
  color: #009688!important;
  border-color: #009688!important;
}

.stroke.button.teal svg {
  fill: #009688!important;
}

.green {
  background: #4caf50!important;
  color: #fff!important;
}

.green svg {
  fill: #fff!important;
}

.text-green {
  color: #4caf50!important;
}

.text-green.button svg {
  fill: #4caf50!important;
}

.stroke.button.green {
  color: #4caf50!important;
  border-color: #4caf50!important;
}

.stroke.button.green svg {
  fill: #4caf50!important;
}

.lightGreen {
  background: #8bc34a!important;
  color: #fff!important;
}

.lightGreen svg {
  fill: #fff!important;
}

.text-lightGreen {
  color: #8bc34a!important;
}

.text-lightGreen.button svg {
  fill: #8bc34a!important;
}

.stroke.button.lightGreen {
  color: #8bc34a!important;
  border-color: #8bc34a!important;
}

.stroke.button.lightGreen svg {
  fill: #8bc34a!important;
}

.lime {
  background: #cddc39!important;
  color: #fff!important;
}

.lime svg {
  fill: #fff!important;
}

.text-lime {
  color: #cddc39!important;
}

.text-lime.button svg {
  fill: #cddc39!important;
}

.stroke.button.lime {
  color: #cddc39!important;
  border-color: #cddc39!important;
}

.stroke.button.lime svg {
  fill: #cddc39!important;
}

.yellow {
  background: #ffeb3b!important;
  color: #202020!important;
}

.yellow svg {
  fill: #202020!important;
}

.text-yellow {
  color: #ffeb3b!important;
}

.text-yellow.button svg {
  fill: #ffeb3b!important;
}

.stroke.button.yellow {
  color: #ffeb3b!important;
  border-color: #ffeb3b!important;
}

.stroke.button.yellow svg {
  fill: #ffeb3b!important;
}

.amber {
  background: #ffc107!important;
  color: #fff!important;
}

.amber svg {
  fill: #fff!important;
}

.text-amber {
  color: #ffc107!important;
}

.text-amber.button svg {
  fill: #ffc107!important;
}

.stroke.button.amber {
  color: #ffc107!important;
  border-color: #ffc107!important;
}

.stroke.button.amber svg {
  fill: #ffc107!important;
}

.orange {
  background: #ff9800!important;
  color: #fff!important;
}

.orange svg {
  fill: #fff!important;
}

.text-orange {
  color: #ff9800!important;
}

.text-orange.button svg {
  fill: #ff9800!important;
}

.stroke.button.orange {
  color: #ff9800!important;
  border-color: #ff9800!important;
}

.stroke.button.orange svg {
  fill: #ff9800!important;
}

.deepOrange {
  background: #ff5722!important;
  color: #fff!important;
}

.deepOrange svg {
  fill: #fff!important;
}

.text-deepOrange {
  color: #ff5722!important;
}

.text-deepOrange.button svg {
  fill: #ff5722!important;
}

.stroke.button.deepOrange {
  color: #ff5722!important;
  border-color: #ff5722!important;
}

.stroke.button.deepOrange svg {
  fill: #ff5722!important;
}

.brown {
  background: #795548!important;
  color: #fff!important;
}

.brown svg {
  fill: #fff!important;
}

.text-brown {
  color: #795548!important;
}

.text-brown.button svg {
  fill: #795548!important;
}

.stroke.button.brown {
  color: #795548!important;
  border-color: #795548!important;
}

.stroke.button.brown svg {
  fill: #795548!important;
}

.gray {
  background: #9d9d9d!important;
  color: #fff!important;
}

.gray svg {
  fill: #fff!important;
}

.text-gray {
  color: #9d9d9d!important;
}

.text-gray.button svg {
  fill: #9d9d9d!important;
}

.stroke.button.gray {
  color: #9d9d9d!important;
  border-color: #9d9d9d!important;
}

.stroke.button.gray svg {
  fill: #9d9d9d!important;
}

.blueGray {
  background: #607d8b!important;
  color: #fff!important;
}

.blueGray svg {
  fill: #fff!important;
}

.text-blueGray {
  color: #607d8b!important;
}

.text-blueGray.button svg {
  fill: #607d8b!important;
}

.stroke.button.blueGray {
  color: #607d8b!important;
  border-color: #607d8b!important;
}

.stroke.button.blueGray svg {
  fill: #607d8b!important;
}

.social-facebook {
  background: #3b5998!important;
  color: #fff!important;
}

.social-facebook svg {
  fill: #fff!important;
}

.text-social-facebook {
  color: #3b5998!important;
}

.text-social-facebook.button svg {
  fill: #3b5998!important;
}

.stroke.button.social-facebook {
  color: #3b5998!important;
  border-color: #3b5998!important;
}

.stroke.button.social-facebook svg {
  fill: #3b5998!important;
}

.social-twitter {
  background: #55acee!important;
  color: #fff!important;
}

.social-twitter svg {
  fill: #fff!important;
}

.text-social-twitter {
  color: #55acee!important;
}

.text-social-twitter.button svg {
  fill: #55acee!important;
}

.stroke.button.social-twitter {
  color: #55acee!important;
  border-color: #55acee!important;
}

.stroke.button.social-twitter svg {
  fill: #55acee!important;
}

.social-googlePlus {
  background: #dd4330!important;
  color: #fff!important;
}

.social-googlePlus svg {
  fill: #fff!important;
}

.text-social-googlePlus {
  color: #dd4330!important;
}

.text-social-googlePlus.button svg {
  fill: #dd4330!important;
}

.stroke.button.social-googlePlus {
  color: #dd4330!important;
  border-color: #dd4330!important;
}

.stroke.button.social-googlePlus svg {
  fill: #dd4330!important;
}

.social-behance {
  background: #105dfb!important;
  color: #fff!important;
}

.social-behance svg {
  fill: #fff!important;
}

.text-social-behance {
  color: #105dfb!important;
}

.text-social-behance.button svg {
  fill: #105dfb!important;
}

.stroke.button.social-behance {
  color: #105dfb!important;
  border-color: #105dfb!important;
}

.stroke.button.social-behance svg {
  fill: #105dfb!important;
}

.social-medium {
  background: #12100e!important;
  color: #fff!important;
}

.social-medium svg {
  fill: #fff!important;
}

.text-social-medium {
  color: #12100e!important;
}

.text-social-medium.button svg {
  fill: #12100e!important;
}

.stroke.button.social-medium {
  color: #12100e!important;
  border-color: #12100e!important;
}

.stroke.button.social-medium svg {
  fill: #12100e!important;
}

.social-stumbleupon {
  background: #eb4924!important;
  color: #fff!important;
}

.social-stumbleupon svg {
  fill: #fff!important;
}

.text-social-stumbleupon {
  color: #eb4924!important;
}

.text-social-stumbleupon.button svg {
  fill: #eb4924!important;
}

.stroke.button.social-stumbleupon {
  color: #eb4924!important;
  border-color: #eb4924!important;
}

.stroke.button.social-stumbleupon svg {
  fill: #eb4924!important;
}

.social-linkedin {
  background: #0077b5!important;
  color: #fff!important;
}

.social-linkedin svg {
  fill: #fff!important;
}

.text-social-linkedin {
  color: #0077b5!important;
}

.text-social-linkedin.button svg {
  fill: #0077b5!important;
}

.stroke.button.social-linkedin {
  color: #0077b5!important;
  border-color: #0077b5!important;
}

.stroke.button.social-linkedin svg {
  fill: #0077b5!important;
}

.social-pinterest {
  background: #cc2127!important;
  color: #fff!important;
}

.social-pinterest svg {
  fill: #fff!important;
}

.text-social-pinterest {
  color: #cc2127!important;
}

.text-social-pinterest.button svg {
  fill: #cc2127!important;
}

.stroke.button.social-pinterest {
  color: #cc2127!important;
  border-color: #cc2127!important;
}

.stroke.button.social-pinterest svg {
  fill: #cc2127!important;
}

.social-instagram {
  background: #e4405f!important;
  color: #fff!important;
}

.social-instagram svg {
  fill: #fff!important;
}

.text-social-instagram {
  color: #e4405f!important;
}

.text-social-instagram.button svg {
  fill: #e4405f!important;
}

.stroke.button.social-instagram {
  color: #e4405f!important;
  border-color: #e4405f!important;
}

.stroke.button.social-instagram svg {
  fill: #e4405f!important;
}

.social-tumblr {
  background: #34455d!important;
  color: #fff!important;
}

.social-tumblr svg {
  fill: #fff!important;
}

.text-social-tumblr {
  color: #34455d!important;
}

.text-social-tumblr.button svg {
  fill: #34455d!important;
}

.stroke.button.social-tumblr {
  color: #34455d!important;
  border-color: #34455d!important;
}

.stroke.button.social-tumblr svg {
  fill: #34455d!important;
}

.social-dribbble {
  background: #ea4c89!important;
  color: #fff!important;
}

.social-dribbble svg {
  fill: #fff!important;
}

.text-social-dribbble {
  color: #ea4c89!important;
}

.text-social-dribbble.button svg {
  fill: #ea4c89!important;
}

.stroke.button.social-dribbble {
  color: #ea4c89!important;
  border-color: #ea4c89!important;
}

.stroke.button.social-dribbble svg {
  fill: #ea4c89!important;
}

.social-youtube {
  background: #cd201f!important;
  color: #fff!important;
}

.social-youtube svg {
  fill: #fff!important;
}

.text-social-youtube {
  color: #cd201f!important;
}

.text-social-youtube.button svg {
  fill: #cd201f!important;
}

.stroke.button.social-youtube {
  color: #cd201f!important;
  border-color: #cd201f!important;
}

.stroke.button.social-youtube svg {
  fill: #cd201f!important;
}

.social-delicious {
  background: #39f!important;
  color: #fff!important;
}

.social-delicious svg {
  fill: #fff!important;
}

.text-social-delicious {
  color: #39f!important;
}

.text-social-delicious.button svg {
  fill: #39f!important;
}

.stroke.button.social-delicious {
  color: #39f!important;
  border-color: #39f!important;
}

.stroke.button.social-delicious svg {
  fill: #39f!important;
}

.social-digg {
  background: #000!important;
  color: #fff!important;
}

.social-digg svg {
  fill: #fff!important;
}

.text-social-digg {
  color: #000!important;
}

.text-social-digg.button svg {
  fill: #000!important;
}

.stroke.button.social-digg {
  color: #000!important;
  border-color: #000!important;
}

.stroke.button.social-digg svg {
  fill: #000!important;
}

.social-vimeo {
  background: #fff!important;
  color: #1ab7ea!important;
}

.social-vimeo svg {
  fill: #1ab7ea!important;
}

.text-social-vimeo {
  color: #fff!important;
}

.text-social-vimeo.button svg {
  fill: #fff!important;
}

.stroke.button.social-vimeo {
  color: #fff!important;
  border-color: #fff!important;
}

.stroke.button.social-vimeo svg {
  fill: #fff!important;
}

.social-whatsapp {
  background: #25d366!important;
  color: #fff!important;
}

.social-whatsapp svg {
  fill: #fff!important;
}

.text-social-whatsapp {
  color: #25d366!important;
}

.text-social-whatsapp.button svg {
  fill: #25d366!important;
}

.stroke.button.social-whatsapp {
  color: #25d366!important;
  border-color: #25d366!important;
}

.stroke.button.social-whatsapp svg {
  fill: #25d366!important;
}

.social-xing {
  background: #026466!important;
  color: #fff!important;
}

.social-xing svg {
  fill: #fff!important;
}

.text-social-xing {
  color: #026466!important;
}

.text-social-xing.button svg {
  fill: #026466!important;
}

.stroke.button.social-xing {
  color: #026466!important;
  border-color: #026466!important;
}

.stroke.button.social-xing svg {
  fill: #026466!important;
}

.social-youtube {
  background: #fc0d1c!important;
  color: #fff!important;
}

.social-youtube svg {
  fill: #fff!important;
}

.text-social-youtube {
  color: #fc0d1c!important;
}

.text-social-youtube.button svg {
  fill: #fc0d1c!important;
}

.stroke.button.social-youtube {
  color: #fc0d1c!important;
  border-color: #fc0d1c!important;
}

.stroke.button.social-youtube svg {
  fill: #fc0d1c!important;
}

.grid {
  margin-left: -2%;
  margin-right: -2%;
}

.grid [class*=col-] {
  display: block;
  width: 100%;
  padding-left: 2%;
  padding-right: 2%;
  float: left;
}

.grid.fixedSpaces {
  margin-left: -10px;
  margin-right: -10px;
}

.grid.fixedSpaces>[class*=col-] {
  padding-left: 10px;
  padding-right: 10px;
}

.grid.noSpaces {
  margin-left: 0;
  margin-right: 0;
}

.grid.noSpaces>[class*=col-] {
  padding-left: 0;
  padding-right: 0;
}

.grid .toLeft[class*=col-] {
  margin-left: 0!important;
  margin-right: auto!important;
}

.grid .toRight[class*=col-] {
  margin-right: 0!important;
  margin-left: auto!important;
  float: right;
}

.grid .toCenter[class*=col-] {
  margin-left: auto!important;
  margin-right: auto!important;
}

.grid>.col-1-12 {
  max-width: 8.3333333333%;
}

.grid>.col-2-12 {
  max-width: 16.6666666667%;
}

.grid>.col-3-12 {
  max-width: 25%;
}

.grid>.col-4-12 {
  max-width: 33.3333333333%;
}

.grid>.col-5-12 {
  max-width: 41.6666666667%;
}

.grid>.col-6-12 {
  max-width: 50%;
}

.grid>.col-7-12 {
  max-width: 58.3333333333%;
}

.grid>.col-8-12 {
  max-width: 66.6666666667%;
}

.grid>.col-9-12 {
  max-width: 75%;
}

.grid>.col-10-12 {
  max-width: 83.3333333333%;
}

.grid>.col-11-12 {
  max-width: 91.6666666667%;
}

.grid>.col-12-12 {
  max-width: 100%;
}

.grid>.col-1-10 {
  max-width: 10%;
}

.grid>.col-2-10 {
  max-width: 20%;
}

.grid>.col-3-10 {
  max-width: 30%;
}

.grid>.col-4-10 {
  max-width: 40%;
}

.grid>.col-5-10 {
  max-width: 50%;
}

.grid>.col-6-10 {
  max-width: 60%;
}

.grid>.col-7-10 {
  max-width: 70%;
}

.grid>.col-8-10 {
  max-width: 80%;
}

.grid>.col-9-10 {
  max-width: 90%;
}

.grid>.col-10-10 {
  max-width: 100%;
}

.grid+.grid {
  margin-top: 20px;
}

.grid:after {
  content: "";
  display: table;
  clear: both;
}

@media (max-width:1239px) {
  .grid>.col-desktop-1-1 {
    max-width: 100%!important;
  }

  .grid>.col-desktop-1-2 {
    max-width: 50%!important;
  }

  .grid>.col-desktop-1-3 {
    max-width: 33.33333333%!important;
  }

  .grid>.col-desktop-2-3 {
    max-width: 66.66666666%!important;
  }

  .grid>.col-desktop-1-4 {
    max-width: 25%!important;
  }

  .grid>.col-desktop-3-4 {
    max-width: 75%!important;
  }
}

@media (max-width:1023px) {
  .grid:not(.later)>[class*=col-]:not([class*=col-phablet-]):not([class*=col-phone-]) {
    max-width: 100%;
  }

  .grid>.col-tablet-1-1 {
    max-width: 100%!important;
  }

  .grid>.col-tablet-1-2 {
    max-width: 50%!important;
  }

  .grid>.col-tablet-1-3 {
    max-width: 33.33333333%!important;
  }

  .grid>.col-tablet-2-3 {
    max-width: 66.66666666%!important;
  }

  .grid>.col-tablet-1-4 {
    max-width: 25%!important;
  }

  .grid>.col-tablet-3-4 {
    max-width: 75%!important;
  }

  .grid>.col-tablet-1-5 {
    max-width: 20%!important;
  }

  .grid>.col-tablet-2-5 {
    max-width: 40%!important;
  }

  .grid>.col-tablet-3-5 {
    max-width: 60%!important;
  }

  .grid>.col-tablet-4-5 {
    max-width: 80%!important;
  }
}

@media (max-width:767px) {
  .grid.later>[class*=col-]:not([class*=col-phone-]) {
    max-width: 100%;
  }

  .grid>.col-phablet-1-1 {
    max-width: 100%!important;
  }

  .grid>.col-phablet-1-2 {
    max-width: 50%!important;
  }

  .grid>.col-phablet-1-3 {
    max-width: 33.33333333%!important;
  }

  .grid>.col-phablet-1-4 {
    max-width: 25%!important;
  }

  .grid>.col-phablet-3-4 {
    max-width: 75%!important;
  }
}

@media (max-width:435px) {
  .grid>[class*=col-] {
    max-width: 100%;
  }

  .grid>.col-phone-1-1 {
    max-width: 100%!important;
  }

  .grid>.col-phone-1-2 {
    max-width: 50%!important;
  }

  .grid>.col-phone-1-3 {
    max-width: 33.33333333%!important;
  }

  .grid>.col-phone-2-3 {
    max-width: 66.66666666%!important;
  }
}

.flex {
  display: flex;
  flex-wrap: wrap;
  margin-left: -2%;
  margin-right: -2%;
}

.flex>[class*=col-] {
  padding-left: 2%;
  padding-right: 2%;
}

.flex.fixedSpaces {
  margin-left: -14px;
  margin-right: -14px;
}

.flex.fixedSpaces>[class*=col-] {
  padding-left: 14px;
  padding-right: 14px;
}

.flex.noSpaces {
  margin-left: 0;
  margin-right: 0;
}

.flex.noSpaces>[class*=col-] {
  padding-left: 0;
  padding-right: 0;
}

.flex.verticalCenter {
  align-items: center;
}

.flex.verticalBottom {
  align-items: flex-end;
}

.flex.horizontalCenter {
  justify-content: center;
}

.flex.reverse {
  flex-wrap: wrap-reverse;
}

.flex.bottom [class*=col-],
.flex.reverse.top [class*=col-] {
  align-self: flex-end;
}

.flex.reverse.bottom [class*=col-],
.flex.top [class*=col-] {
  align-self: flex-start;
}

.flex>.col-1-12 {
  width: 8.3333333333%;
}

.flex>.col-2-12 {
  width: 16.6666666667%;
}

.flex>.col-3-12 {
  width: 25%;
}

.flex>.col-4-12 {
  width: 33.3333333333%;
}

.flex>.col-5-12 {
  width: 41.6666666667%;
}

.flex>.col-6-12 {
  width: 50%;
}

.flex>.col-7-12 {
  width: 58.3333333333%;
}

.flex>.col-8-12 {
  width: 66.6666666667%;
}

.flex>.col-9-12 {
  width: 75%;
}

.flex>.col-10-12 {
  width: 83.3333333333%;
}

.flex>.col-11-12 {
  width: 91.6666666667%;
}

.flex>.col-12-12 {
  width: 100%;
}

.flex>.col-1-10 {
  width: 10%;
}

.flex>.col-2-10 {
  width: 20%;
}

.flex>.col-3-10 {
  width: 30%;
}

.flex>.col-4-10 {
  width: 40%;
}

.flex>.col-5-10 {
  width: 50%;
}

.flex>.col-6-10 {
  width: 60%;
}

.flex>.col-7-10 {
  width: 70%;
}

.flex>.col-8-10 {
  width: 80%;
}

.flex>.col-9-10 {
  width: 90%;
}

.flex>.col-10-10 {
  width: 100%;
}

@media (max-width:1023px) {
  .flex:not(.later)>[class*=col-]:not([class*=col-phablet-]):not([class*=col-phone-]) {
    width: 100%;
  }

  .flex>.col-tablet-1-1 {
    width: 100%!important;
  }

  .flex>.col-tablet-1-2 {
    width: 50%!important;
  }

  .flex>.col-tablet-1-3 {
    width: 33.33333333%!important;
  }

  .flex>.col-tablet-2-3 {
    width: 66.66666666%!important;
  }

  .flex>.col-tablet-1-4 {
    width: 25%!important;
  }

  .flex>.col-tablet-3-4 {
    width: 75%!important;
  }

  .flex>.col-tablet-1-5 {
    width: 20%!important;
  }

  .flex>.col-tablet-2-5 {
    width: 40%!important;
  }

  .flex>.col-tablet-3-5 {
    width: 60%!important;
  }

  .flex>.col-tablet-4-5 {
    width: 80%!important;
  }
}

@media (max-width:767px) {
  .flex.later>[class*=col-]:not([class*=col-phone-]) {
    width: 100%;
  }

  .flex>.col-phablet-1-1 {
    width: 100%!important;
  }

  .flex>.col-phablet-1-2 {
    width: 50%!important;
  }

  .flex>.col-phablet-1-3 {
    width: 33.33333333%!important;
  }

  .flex>.col-phablet-2-3 {
    width: 66.66666666%!important;
  }

  .flex>.col-phablet-1-4 {
    width: 25%!important;
  }

  .flex>.col-phablet-3-4 {
    width: 75%!important;
  }
}

@media (max-width:435px) {
  .flex>[class*=col-] {
    width: 100%;
  }

  .flex>.col-phone-1-1 {
    width: 100%!important;
  }

  .flex>.col-phone-1-2 {
    width: 50%!important;
  }

  .flex>.col-phone-1-3 {
    width: 33.33333333%!important;
  }

  .flex>.col-phone-2-3 {
    width: 66.66666666%!important;
  }
}

.dialogContainer {
  pointer-events: none;
}

.dialog,
.dialogContainer {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 300;
}

.dialog {
  pointer-events: all;
  color: #303030;
  border-radius: 4px;
  max-width: 350px;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
  cursor: default;
  opacity: .98;
  line-height: 1.3;
  background: #fff;
  margin: 12px 20px;
  overflow: hidden;
  text-align: left;
  transform: translate3d(0,0,0);
  transition: all .75s,height 0s;
  transition-timing-function: cubic-bezier(.25,1.37,.44,.93);
  -webkit-tap-highlight-color: transparent;
}

.dialog.rectangular {
  border-radius: 0;
}

.dialog.rounded {
  border-radius: 6px;
}

.dialog:hover {
  opacity: 1;
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  transition: .35s;
}

.dialog .button.small {
  margin-left: 4px;
  margin-right: 4px;
}

.dialog .button {
  margin-left: 7px;
  margin-right: 7px;
}

.dialogContainer>.dialog {
  position: relative;
}

.dialog.hidden {
  display: none;
}

.dialog.hide {
  transform: scale(.5);
  opacity: 0!important;
  transition: height 0s,opacity .5s,transform .5s!important;
}

.dialog.reveal {
  transition: 0s!important;
}

.dialog .close {
  padding: 12px;
  position: absolute;
  font-size: 0;
  top: 0;
  right: 0;
  cursor: pointer;
  transition: .35s;
  opacity: 0;
  z-index: 10;
}

.dialog .close:after,
.dialog .close:before {
  content: "";
  width: 14px;
  height: 2px;
  border-radius: 2px;
  background: #202020;
  transform: rotate(45deg);
  position: absolute;
  right: 6px;
}

.dialog .close:before {
  transform: rotate(-45deg);
}

.dialog .close:active {
  opacity: 1;
}

.dialog .close.white {
  background: 0 0!important;
}

.dialog .close.white:after,
.dialog .close.white:before {
  background: #fff;
}

.dialog:hover .close {
  opacity: .2;
}

.dialog .close:hover,
.mobile .dialog .close {
  opacity: 1!important;
}

.dialog .dialogContent {
  padding: 20px;
}

.dialog .avatar {
  border-radius: 50px;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 15px;
}

.dialog .avatar+.text {
  width: calc(100% - 70px);
  margin-left: 70px;
}

.dialog .title {
  margin: 8px 0;
  font-weight: 500;
}

.dialog ul {
  display: table;
  width: 100%;
  font-size: 0;
  font-weight: 600;
  box-shadow: 0 1px 0 rgba(0,0,0,.1) inset;
}

.dialog .hiddenContent {
  overflow: hidden;
  display: block;
  max-height: 0;
  opacity: 0;
  transition: .5s;
}

html:not(.page-loaded) .dialog {
  transform: scale(.5) translateY(100%);
  opacity: 0;
}

.dialog.hover .hiddenContent,
.dialog:hover .hiddenContent {
  max-height: 90px;
  opacity: 1;
}

.dialog [data-dialog-action=close],
.dialog [data-href] {
  cursor: pointer;
}

.dialog li {
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  display: table-cell;
  width: 33.33333%;
  text-align: center;
  cursor: pointer;
  line-height: 1;
  vertical-align: middle;
  text-decoration: none;
  border-bottom: none;
  transition: .25s;
  box-shadow: inset 0 -100px 0 rgba(41,41,41,0);
}

.dialog li .material-icons {
  position: relative;
  margin-bottom: 13px;
  top: 6px;
  margin-right: 8px;
}

.dialog li .material-icons.right {
  margin-right: 0;
  margin-left: 8px;
}

.dialog li svg {
  width: 20px;
  height: 20px;
  margin-bottom: -6px;
  margin-right: 8px;
  position: relative;
  top: -2px;
}

.dialog li svg.right {
  margin-right: 0;
  margin-left: 8px;
}

.dialog li {
  border-left: 1px solid rgba(0,0,0,.1);
}

.dialog li:first-child {
  border-left: none;
}

.dialog li:hover {
  box-shadow: inset 0 -100px 0 rgba(0,0,0,.05);
}

.dialog li input {
  font-size: 16px;
  width: 250px;
  border: none;
  padding: 13px 5px 16px 15px;
  outline: 0;
  margin: 1px 0 0 0;
  color: #202020;
  height: 50px;
  box-shadow: none!important;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

@media (max-width:414px) {
  .dialog {
    margin: 10px;
    max-width: 100%;
  }
}

.dialogContainer:not(.bottom) .dialog+.dialog {
  margin-bottom: 0;
}

.dialogContainer.bottom .dialog+.dialog {
  margin-top: 0;
}

.dialog.bottom,
.dialogContainer.bottom {
  top: inherit;
  bottom: 0;
}

.dialog.left,
.dialogContainer.left {
  right: inherit;
  left: 2;
}

.svg-5 {
  padding-bottom: 27%;
}

.iphone-5.shiftImage {
  margin: 0 0 -129%;
}

.ipad-6.shiftImage {
  margin: 0 0 -70%;
}

.button.play.button-7 {
  margin: 0 30px;
}

@media (max-width:1279px) {
  .button.play.button-7 {
    display: block;
    margin: 30px auto;
  }
}

@media (min-width:768px) {
  form.slides-form .input-8 {
    max-width: 220px;
  }
}

@media (min-width:768px) {
  form.slides-form .input-9 {
    max-width: 220px;
  }
}

@media (min-width:768px) {
  form.slides-form .input-12 {
    max-width: 220px;
  }
}

form input[type=email].input-13,
form input[type=name].input-13,
form input[type=text].input-13 {
  max-width: 300px;
}

@media (max-width:1023px) {
  .cell-16 {
    padding-bottom: 35px;
  }
}

.cell-17 {
  padding-bottom: 25px;
}

.header-18 {
  font-size: 70px;
}

.video-18 {
  margin-top: 34px;
}

.icon-26 {
  margin-right: 4px;
}

.app-26 {
  width: 70px;
  position: absolute;
  left: 0;
}

.text-26 {
  margin-left: 95px;
  margin-top: 35px;
}

@media (min-width:1024px) {
  .text-26 {
    max-width: 360px;
  }
}

.cell-26 {
  margin-top: 22px;
}

@media (min-width:1024px) {
  .cell-26 {
    padding-bottom: 40px;
  }
}

.app-27 {
  width: 100px;
  padding-bottom: 20px;
}

.icon-27 {
  margin-right: 4px;
}

.cell-27 {
  margin-top: -22px;
}

@media (max-width:1023px) {
  .cell-27 {
    padding-bottom: 40px;
  }
}

.text-27 {
  margin-left: 95px;
  margin-top: 35px;
}

@media (min-width:1024px) {
  .text-27 {
    max-width: 360px;
  }
}

@media (min-width:768px) {
  .iphone-28 {
    margin-top: -228px;
    margin-bottom: -228px;
  }
}

@media (max-width:767px) {
  .cell-28 {
    padding-bottom: 35px;
  }
}

@media (min-width:768px) {
  .iphone-29 {
    margin-top: -228px;
    margin-bottom: -228px;
  }
}

@media (max-width:767px) {
  .cell-29 {
    padding-bottom: 35px;
  }
}

.quote-31 {
  padding-left: 95px;
}

.image-31 {
  padding-top: 35px;
}

.avatar-31 {
  border-radius: 50px;
  position: absolute;
  margin-left: 7px;
}

@media (min-width:1024px) {
  .ipad-31 {
    margin: -10% 0 -115%;
    max-width: none;
  }
}

@media (min-width:1024px) {
  .ipad-32 {
    margin: -10% 0 -115%;
    max-width: none;
  }
}

@media (max-width:1023px) {
  .cell-32 {
    padding-bottom: 40px;
  }
}

@media (min-width:1024px) {
  .ipad-33 {
    margin: -10% 0 -115%;
    max-width: none;
  }
}

@media (max-width:1023px) {
  .cell-33 {
    padding-bottom: 40px;
  }
}

.iphone-35 {
  margin-bottom: -45%;
}

.ipad-36 {
  margin: -10px 0 -50%;
}

.avatar-41 {
  border-radius: 50px;
  margin: 10px 5px 5px;
}

.form-42 {
  max-width: 500px;
  margin: 0 auto;
}

@media (min-width:1024px) {
  .form-42 .form-42-input-1 input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .form-42 .form-42-input-2 input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    position: relative;
    left: -1px;
  }
}

p.remind-43 {
  max-width: 350px;
  line-height: 1.29;
  margin: 13px auto;
  text-align: center;
}

.fix-45 {
  max-width: 210px;
}

@media (max-width:767px) {
  .box-46 {
    margin-bottom: 30px;
  }
}

.slide.whiteSlide .box-46 .shadow {
  box-shadow: none;
}

.grid-47 .material-icons {
  margin-bottom: 15px;
  margin-top: 15px;
  font-size: 36px;
}

.grid-48 .material-icons {
  margin-bottom: 30px;
  margin-top: 15px;
  font-size: 72px;
}

.grid-49 .material-icons {
  margin-bottom: 10px;
  margin-top: 15px;
  font-size: 72px;
}

.form-55 {
  max-width: 500px;
  margin: 0 auto;
}

@media (min-width:1024px) {
  .form-55 .form-55-input-1 input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-left: 0;
  }

  .form-55 .form-55-input-2 input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: 0;
    position: relative;
    left: -1px;
  }
}

.form-55 [data-success-class=message-sent].message-sent {
  background: #4caf50!important;
}

.pad-59 {
  border-radius: 6px;
  padding: 6%;
}

.grid-61 .material-icons {
  margin-bottom: 10px;
  margin-top: 15px;
  font-size: 36px;
}

@media (min-width:1024px) {
  img.macbook-61 {
    margin: -15% -100% -30% -135%!important;
    width: 225%;
    max-width: none;
  }
}

.grid-62 .material-icons {
  margin-bottom: 10px;
  margin-top: 15px;
  font-size: 48px;
}

@media (min-width:1024px) {
  img.macbook-62 {
    margin: -15% -100% -30% 10%!important;
    width: 225%;
    max-width: none;
  }
}

@media (max-width:1023px) {
  .image-62 {
    padding-top: 35px;
  }
}

.grid-64 {
  padding-top: 15px;
}

.grid-64 .material-icons {
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 36px;
}

.grid-64>li:not(:last-child) {
  margin-bottom: 20px;
}

.grid-64 .cell-64 {
  padding: 20px 30px;
  position: relative;
  display: block;
  transition: .25s;
  border: 1px solid rgba(255,255,255,.3);
  text: #fff;
}

.grid-64 .cell-64.rounded {
  border-radius: 6px;
}

.grid-64 .cell-64:hover {
  background: #fff;
  color: #202020;
  opacity: 1;
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  border-color: transparent!important;
}

.slide.whiteSlide .grid-64 .cell-64 {
  border: 1px solid #e5e5e5;
}

.grid.grid-65>li {
  position: relative;
  padding-left: 55px;
  padding-bottom: 30px;
}

.grid-65 .material-icons {
  position: absolute;
  left: 0;
  top: -5px;
  font-size: 36px;
}

@media (max-width:767px) {
  .grid.grid-65>li {
    padding-left: 60px;
  }

  .grid-65 .material-icons {
    left: 0;
  }
}

.box-67 {
  color: #202020;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
  display: block;
  outline: 0;
  margin-bottom: 35px;
  -webkit-backface-visibility: hidden;
}

.box-67 .thumbnail-67 {
  font-size: 0;
  overflow: hidden;
}

.box-67 .thumbnail-67 img {
  border-radius: 6px 6px 0 0;
  backface-visibility: hidden;
  transition: .35s;
}

.box-67:hover {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  opacity: .95;
}

.box-67:hover .thumbnail-67 img {
  transform: scale(1.0225);
}

.box-67 .name-67 {
  padding: 19px 15px 25px;
  background: #fff;
}

.slide.whiteSlide .tintLogos {
  filter: brightness(.2);
}

.slide:not(.whiteSlide) .tintLogos {
  filter: brightness(1.3);
}

.grid-68 a {
  display: inline-block;
  margin-top: 14px;
  margin-bottom: 14px;
  opacity: .9;
  transition: opacity .1s ease-in,transform .15s cubic-bezier(.5,0,.25,2.5);
}

.grid-68 a:hover {
  opacity: 1;
  transform: scale(1.05);
}

.grid-69 {
  margin-left: -8px;
  margin-right: -8px;
}

.grid-69 [class*=col-] {
  padding-bottom: 10px;
  padding-top: 10px;
}

.grid-69 [class*=col-].selected {
  cursor: pointer;
  pointer-events: all;
}

.grid-69 .box-69 {
  display: block;
  height: 0;
  padding-bottom: 100%;
  position: relative;
  background-size: cover;
  cursor: -webkit-zoom-in;
  color: #fff;
}

.grid-69 .box-69.rounded {
  overflow: hidden;
  border-radius: 6px;
}

.grid-69 .box-69:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #cdced2;
  opacity: 0;
  transition: .5s;
}

.grid-69 .box-69 .cell-69 {
  outline: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 20px;
  z-index: 10;
  opacity: 0;
  transition: .5s;
  color: #202020;
  transform: translateY(10px);
}

.grid-69 .box-69:hover {
  opacity: 1;
}

.grid-69 .box-69:hover .cell-69 {
  opacity: 1;
  transform: translateY(0);
}

.grid-69 .box-69:hover:after {
  opacity: .98;
}

.info-70 {
  padding: 13%;
}

.grid-71 {
  padding-top: 15px;
}

.grid-71 .material-icons {
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 36px;
}

.grid-71>li:not(:last-child) {
  margin-bottom: 20px;
}

.grid-71 .cell-71 {
  padding: 20px 30px;
  position: relative;
  display: block;
  transition: .25s;
  border: 1px solid rgba(255,255,255,.3);
  text: #fff;
}

.grid-71 .cell-71.rounded {
  border-radius: 6px;
}

.grid-71 .cell-71:hover {
  background: #fff;
  color: #202020;
  opacity: 1;
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  border-color: transparent!important;
}

.slide.whiteSlide .grid-71 .cell-71 {
  border: 1px solid #e5e5e5;
}

.grid-73 {
  padding-top: 15px;
}

.grid-73 .material-icons {
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 36px;
}

.grid-73>li:not(:last-child) {
  margin-bottom: 20px;
}

.grid-73 .cell-73 {
  padding: 20px 30px;
  position: relative;
  display: block;
  transition: .25s;
  border: 1px solid rgba(255,255,255,.3);
  text: #fff;
}

.grid-73 .cell-73.rounded {
  border-radius: 6px;
}

.grid-73 .cell-73:hover {
  background: #fff;
  color: #202020;
  opacity: 1;
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  border-color: transparent!important;
}

.slide.whiteSlide .grid-73 .cell-73 {
  border: 1px solid #e5e5e5;
}

.image-73.shiftImageVertical.shiftImage {
  margin: -13% 0 -6%;
}

.grid.grid-74 {
  margin-left: -12px;
  margin-right: -12px;
}

.grid.grid-74>[class*=col-] {
  padding-left: 12px;
  padding-right: 12px;
}

.box-74 {
  color: #202020;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
  display: block;
  outline: 0;
  margin-bottom: 25px;
  -webkit-backface-visibility: hidden;
}

.box-74:hover {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  opacity: .95;
}

.box-74 .name-74 {
  padding: 20px 20px 30px 20px;
  background: #fff;
  border-radius: 0 0 6px 0;
}

.box-74 .thumbnail-74 {
  font-size: 0;
  line-height: 0;
  overflow: hidden;
}

.box-74 .thumbnail-74 img {
  border-radius: 6px 6px 0 0;
  transition: .5s;
}

.slider[data-slider-id="75-0"].animated.fromAbove [class*=ae-]:not(.done) {
  transform: scale(1) translate3d(0,0,0);
}

.button.button-76 {
  width: 54px;
  height: 54px;
  padding: 17px 19px;
  font-size: 0;
}

.button.button-76 svg {
  width: 18px;
  height: 18px;
}

@media (min-width:1024px) {
  .iphone-76 {
    max-width: none;
    margin-top: 60px;
  }
}

.text-76 {
  line-height: 1.75;
  opacity: 1;
  margin: 0;
  margin-left: 77px;
  padding-top: 3px;
}

@media (max-width:569px) {
  .button.button-76,
  .text-76 {
    float: left;
  }

  .text-76 strong {
    display: block;
  }

  .text-76 {
    font-size: 20px;
    top: -4px;
  }
}

.grid.grid-77 {
  margin-left: -12px;
  margin-right: -12px;
}

.grid.grid-77>[class*=col-] {
  padding-left: 12px;
  padding-right: 12px;
}

@media (max-width:1278px) {
  .grid.grid-77>[class*=col-] {
    max-width: 50%;
  }
}

.box-77 {
  color: #202020;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
  display: block;
  outline: 0;
  margin: 10px 0;
  -webkit-backface-visibility: hidden;
}

.box-77:hover {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  opacity: 1;
}

.box-77 .thumbnail-77 {
  font-size: 0;
  line-height: 0;
  overflow: hidden;
  position: relative;
}

.box-77 .thumbnail-77 img {
  border-radius: 6px 6px 0 0;
  -webkit-backface-visibility: hidden;
  transition: .5s;
}

.box-77 .thumbnail-77.video:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/svg/video-icon.svg") no-repeat;
  background-size: 54px;
  background-position: center center;
  transition: .35s;
}

.box-77:hover .thumbnail-77.video:after {
  background-color: rgba(0,0,0,.1);
  transform: scale(1.1);
}

.box-77 .author-77 {
  background: #fff;
  border-top: 1px solid #ebebeb;
  padding-top: 18px;
  margin-top: 25px;
  position: relative;
  padding-left: 40px;
  padding-bottom: 2px;
}

.box-77 .avatar-77 {
  position: absolute;
  top: 15px;
  left: 0;
  border-radius: 50px;
}

.details-77 {
  padding: 20px 18px 15px;
  background: #fff;
  border-radius: 0 0 6px 0;
}

.details-77 .cell {
  text-align: left;
}

.text-78 {
  font-size: 17px;
  letter-spacing: .5px;
  margin-top: 7px;
}

.quote-79 {
  font-size: 85px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 10px;
  font-family: serif;
}

.author-79 {
  position: relative;
  margin: 0 auto;
  max-width: 300px;
  padding-left: 85px;
  padding-top: 5px;
}

.author-79 .avatar-79 {
  position: absolute;
  top: 0;
  left: 0;
}

.author-79 h3 {
  margin-bottom: 10px;
}

.grid-79>[class*=col-] {
  position: relative;
  padding: 5px 30px 0 55px;
}

.grid-79>[class*=col-] .material-icons {
  font-size: 35px;
  margin-bottom: 13px;
  position: absolute;
  left: 0;
  top: 0;
}

.grid-80>[class*=col-] {
  margin-bottom: 25px;
}

.box-80 {
  border: 1px solid rgba(255,255,255,.3);
}

.box-80.rounded {
  border-radius: 6px;
}

.slide.whiteSlide .box-80 {
  border-color: #e5e5e5;
}

.leftControl-82,
.rightControl-82 {
  position: absolute;
  top: 50%;
  margin-top: -56px;
  margin-left: -60px;
  cursor: pointer;
  transition: .35s;
}

.leftControl-82 svg,
.rightControl-82 svg {
  width: 29px;
  height: 56px;
}

.leftControl-82:active,
.leftControl-82:hover,
.rightControl-82:active,
.rightControl-82:hover {
  opacity: .3;
}

@media (max-width:768px) {
  .leftControl-82,
  .rightControl-82 {
    display: none;
  }
}

.rightControl-82 {
  right: 0;
  margin-right: -60px;
}

.grid.grid-83 {
  color: #202020;
  margin-top: 50px;
}

@media (min-width:1024px) {
  .grid.grid-83 {
    border-radius: 6px;
    overflow: hidden;
  }

  .slide.whiteSlide .grid.grid-83 {
    box-shadow: 0 0 1px rgba(48,48,48,.54);
  }
}

@media (max-width:1023px) {
  .grid.grid-83 {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
}

.grid.grid-83>[class*=col-] {
  position: relative;
  background: #fff;
  overflow: hidden;
  box-shadow: -1px 0 0 #ebebeb inset;
}

@media (max-width:1023px) {
  .grid.grid-83>[class*=col-] {
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 0 1px rgba(48,48,48,.54);
    border-radius: 6px;
  }
}

@media (min-width:1024px) {
  .grid.grid-83>[class*=col-] {
    padding: 50px;
    border-radius: 0;
  }

  .grid.grid-83>[class*=col-]:last-child {
    box-shadow: none;
  }
}

.grid.grid-84 {
  color: #202020;
  margin-top: 50px;
}

@media (min-width:1240px) {
  .grid.grid-84 {
    border-radius: 6px;
    overflow: hidden;
  }

  .slide.whiteSlide .grid.grid-84 {
    box-shadow: 0 0 1px rgba(48,48,48,.54);
  }
}

.grid.grid-84>[class*=col-] {
  position: relative;
  background: #fff;
  overflow: hidden;
  padding: 30px;
  box-shadow: -1px 0 0 #ebebeb inset;
}

@media (max-width:1239px) {
  .grid.grid-84>[class*=col-] {
    max-width: calc(50% - 20px)!important;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
    box-shadow: 0 0 1px rgba(48,48,48,.54);
    border-radius: 6px;
  }
}

@media (max-width:767px) {
  .grid.grid-84>[class*=col-] {
    max-width: 100%!important;
    margin-left: 0;
    margin-right: 0;
  }
}

@media (min-width:1240px) {
  .grid.grid-84>[class*=col-] {
    border-radius: 0;
  }

  .grid.grid-84>[class*=col-]:last-child {
    box-shadow: none;
  }
}

.grid.grid-85>[class*=col-] .pad {
  box-shadow: 0 0 1px rgba(48,48,48,.54);
}

.button.button-86 {
  width: 54px;
  height: 54px;
  padding: 17px 19px;
  font-size: 0;
}

.button.button-86 svg {
  width: 18px;
  height: 18px;
}

.text-86 {
  line-height: 1.75;
  opacity: 1;
  margin: 0;
  margin-left: 77px;
  padding-top: 3px;
}

@media (max-width:569px) {
  .button.button-86,
  .text-86 {
    float: left;
  }

  .text-86 strong {
    display: block;
  }

  .text-86 {
    font-size: 20px;
    top: -4px;
  }
}

.frame-93 {
  padding: 50px 40px;
  border: 1px solid rgba(255,255,255,.3);
  text-align: center;
  display: inline-block;
}

.frame-93.rounded {
  border-radius: 6px;
}

.slide.whiteSlide .frame-93 {
  border: 1px solid rgba(0,0,0,.1);
}

@media (max-width:1023px) {
  .frame-93 {
    text-align: center;
  }

  .button.button-93 {
    margin: 30px 0 0;
  }
}

@media (max-width:499px) {
  .slide .frame-93 {
    padding: 30px;
    border: none!important;
  }
}

.quoteBubble {
  padding: 7%;
  background: #fff;
  font-size: 26px;
  border-radius: 6px;
  color: #202020;
  position: relative;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
}

.quoteBubble:after {
  content: "";
  position: absolute;
  bottom: -12px;
  left: 6%;
  border-width: 13px 13px 0;
  border-style: solid;
  border-color: #fff transparent;
  display: block;
  width: 0;
}

.quoteBubble:before {
  content: "";
  position: absolute;
  bottom: -13px;
  left: 6%;
  border-width: 13px 13px 0;
  border-style: solid;
  border-color: rgba(0,0,0,.2) transparent;
  display: block;
  width: 0;
}

.address {
  letter-spacing: -1.5px;
  font-size: 30px;
  line-height: 1.1666;
}

.price {
  font-size: 110px;
  line-height: 1.26;
  margin-bottom: 20px;
  font-weight: 200;
}

.currency {
  font-size: 32px;
  vertical-align: super;
  font-weight: 300;
  padding-right: 10px;
  margin-left: -.8em;
  font-weight: 300;
  opacity: .6;
  position: relative;
  top: -.5em;
}

.social-circles li {
  display: inline-block;
  padding: 5px;
}

.social-circles li a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.social-circles li a svg {
  width: 16px;
  height: 16px;
  fill: #fff;
}

.social-circles li a:hover {
  opacity: 1;
  transform: scale(1.1);
}

.text-justify {
  text-align: justify;
}

.slide.whiteSlide a.button.text-white {
  color: #202020!important;
}

.slide.whiteSlide .thumbnail-98 {
  color: #fff;
}

.slide.whiteSlide .thumbnail-99 {
  color: #fff;
}

.music-96 .sc-artwork-list,
.music-96 .sc-controls .hidden,
.music-96 .sc-info,
.music-96 .sc-info-toggle,
.music-96 .sc-time-indicators,
.music-96 .sc-volume-slider {
  display: none;
}

.music-96 .sc-player:not(:last-child) {
  margin-bottom: 15px;
}

.music-96 .sc-play {
  background-image: url("../assets/svg/play.svg");
  border: 1px solid rgba(0,0,0,.5);
  font-size: 0;
  width: 28px;
  height: 28px;
  display: inline-block;
  float: left;
  margin-right: 12px;
  background-color: #fff;
  border-radius: 20px;
  background-size: 50%;
  background-position: center center;
  background-repeat: no-repeat;
}

.music-96 .sc-track-duration {
  float: right;
  font-size: 20px;
  font-weight: 300;
  opacity: .8;
}

.music-96 .sc-player:not(.playing) .sc-time-span {
  opacity: 0;
}

.music-96 .sc-time-span {
  position: relative;
  display: block;
}

.music-96 .sc-buffer,
.music-96 .sc-played {
  background: rgba(255,255,255,.4);
  position: absolute;
  z-index: 1;
  top: -1px;
}

.music-96 .sc-player .sc-waveform-container {
  position: absolute;
  top: 0;
  font-size: 0;
  background: rgba(255,255,255,.2);
  cursor: pointer;
}

.music-96 .sc-player .sc-waveform-container img {
  opacity: 0;
  width: 100%;
}

.music-96 .sc-trackslist {
  border-bottom: 1px solid rgba(255,255,255,.2);
  margin-top: 15px;
}

.music-96 .sc-trackslist a {
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 15px;
  display: inline-block;
  max-width: 78%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.music-96 .sc-buffer,
.music-96 .sc-played,
.music-96 .sc-player .sc-waveform-container,
.music-96 .sc-trackslist .sc-time-span {
  height: 2px;
}

.music-96 .sc-buffer,
.music-96 .sc-play,
.music-96 .sc-played,
.music-96 .sc-time-span {
  -webkit-transition: .35s;
  transition: .35s;
}

.music-96 .sc-player.playing .sc-play {
  background-color: rgba(255,255,255,.8);
}

.music-96 .sc-player.playing .sc-played {
  background: #fafafa;
  background: -moz-linear-gradient(left,#fafafa 0,#fff 100%);
  background: -webkit-linear-gradient(left,#fafafa 0,#fff 100%);
  background: linear-gradient(to right,#fafafa 0,#fff 100%);
}

.slide.whiteSlide .music-96 .sc-buffer,
.slide.whiteSlide .music-96 .sc-played {
  background: rgba(0,0,0,.2);
  position: absolute;
  z-index: 1;
  top: -1px;
}

.slide.whiteSlide .music-96 .sc-trackslist {
  border-bottom: 1px solid rgba(0,0,0,.2);
}

.slide.whiteSlide .music-96 .sc-player.playing .sc-play {
  background-color: rgba(0,0,0,.1);
}

.slide.whiteSlide .music-96 .sc-player.playing .sc-played {
  background: #050505;
  background: -moz-linear-gradient(left,#050505 0,#000 100%);
  background: -webkit-linear-gradient(left,#050505 0,#000 100%);
  background: linear-gradient(to right,#050505 0,#000 100%);
}

@media (max-width:480px) {
  .music-96 .sc-trackslist a {
    max-width: 67%;
    font-size: 14px;
    margin-top: 5px;
  }
}

.calendar-97 {
  width: 52px;
  height: 52px;
  padding: 8px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,.4);
  left: 0;
  cursor: default;
  pointer-events: none;
}

.calendar-97:hover {
  transform: translateY(0)!important;
}

.slide.whiteSlide .frame-97 {
  border-bottom: 1px solid rgba(0,0,0,.2);
}

.frame-97 {
  width: 100%;
  border-bottom: 1px solid rgba(255,255,255,.3);
}

.frame-97:last-child {
  border-bottom: none;
}

.frame-97 .small .thin-stroke {
  cursor: default;
}

.frame-97 .thin-stroke:hover {
  transform: translateY(0)!important;
}

.calendar-97 .month {
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1px;
  opacity: .8;
}

.calendar-97 .number {
  font-size: 22px;
  line-height: 26px;
  font-weight: 400;
}

.button-buy-97 {
  float: right;
}

.title-group {
  min-width: 49%;
  display: inline-block;
}

.dislocation {
  font-size: 20px;
  display: inline-block;
}

@media (max-width:991px) {
  .title-group {
    min-width: 37%;
    font-size: 22px;
    margin-left: 80px!important;
  }
}

@media (max-width:767px) {
  .frame-97 {
    min-height: 220px;
  }

  .frame-97 h2 {
    text-align: center!important;
  }

  .title-group {
    margin-left: 0!important;
    margin-top: 60px;
    display: block;
  }

  .frame-97 .calendar-97 {
    left: calc(50% - 5px);
    transform: translateX(-50%);
  }

  .dislocation {
    margin-top: 10px;
    display: block;
  }

  .button-buy-97 {
    float: none;
    display: inline-block;
    margin-top: 20px;
  }
}

a.box-98:active,
a.box-98:focus {
  outline: 0;
}

.thumbnail-98 {
  position: relative;
}

.thumbnail-98 img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
}

.wrap-img-100 .blackout {
  height: 100%;
}

.blackout {
  position: absolute;
  top: 0;
  width: 100%;
  height: 99.2%;
  border-radius: 6px;
  border: none;
  background-color: rgba(0,0,0,.4);
  z-index: 10;
}

.title-slide-98 {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  letter-spacing: 2.5px;
  opacity: .6;
  z-index: 15;
}

.subtitle-slide-98 {
  position: absolute;
  width: 70%;
  top: 45%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  line-height: 26px;
  z-index: 15;
}

a.box-99:active,
a.box-99:focus {
  outline: 0;
}

.thumbnail-99 {
  position: relative;
}

.thumbnail-99 img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.thumbnail-99 .date-slide-99 img {
  display: inline-block;
  margin-right: 5px;
  width: 12px;
  height: 12px;
}

.blackout-sl-4 {
  position: absolute;
  top: 0;
  width: 100%;
  height: 99.2%;
  border-radius: 4px;
  border: none;
  background: linear-gradient(to bottom,transparent,rgba(0,0,0,.4));
  z-index: 10;
}

.title-slide-99 {
  position: absolute;
  text-align: left;
  width: 80%;
  bottom: 12%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  line-height: 26px;
  z-index: 15;
}

.date-slide-99 {
  position: absolute;
  bottom: 0;
  z-index: 15;
  text-align: left;
  width: 85%;
  left: 50%;
  transform: translateX(-50%);
}

.date-slide-99 span {
  display: inline-block;
  font-size: 14px;
  opacity: .4;
}

.tiny .small-watch {
  margin-bottom: -2px;
  font-size: 14px;
}

.tiny .date-small {
  font-size: 14px;
  vertical-align: 2px;
}

.cell-100 {
  border: 1px solid rgba(255,255,255,.2);
  transition: .3s;
}

.cell-100:hover {
  transform: translateY(-2px);
}

.cell-100 .tiny {
  font-size: 0;
  line-height: 0;
  margin-bottom: 0;
}

.item-100 {
  width: 100%;
  height: 100%;
  display: block;
  padding: 30px;
}

.slide.whiteSlide .cell-100 {
  border: 1px solid rgba(0,0,0,.2);
}

.slide.whiteSlide .wrap-text-100 {
  color: #fff;
}

.wrap-img-100 {
  position: relative;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/image-100.png");
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center center;
}

.wrap-text-100 {
  position: absolute;
  z-index: 15;
  bottom: 35px;
  padding-right: 40px;
  padding-left: 40px;
}

.wrap-text-100 h3 {
  font-size: 22px;
  line-height: 36px;
  opacity: .8;
  font-weight: 300;
}

@media (max-width:767px) {
  .wrap-text-100 {
    position: relative;
    bottom: 0;
    padding-top: 30px;
    padding-bottom: 20px;
  }

  .wrap-text-100 h1 {
    font-size: 30px;
  }

  .wrap-text-100 h3 {
    font-size: 16px;
    line-height: 20px;
  }

  .flex-slide-100 {
    margin-left: 0;
    margin-right: 0;
    padding-left: 0!important;
  }
}

.slick-dots {
  bottom: -35px!important;
}

.slick-dots li {
  margin: 0!important;
}

.slick-dots li button:before {
  color: #fff!important;
}

.slick-dots li.slick-active button:before {
  color: #fff!important;
}

.whiteSlide .slick-dots li button:before {
  color: #000!important;
}

.whiteSlide .slick-dots li.slick-active button:before {
  color: #000!important;
}

.slick-next,
.slick-prev {
  width: 29px!important;
  height: 55px!important;
}

.slick-prev {
  left: -45px!important;
}

.slick-next {
  right: -45px!important;
}

span.prev-arrow svg {
  position: absolute;
  left: -45px;
  top: 50%;
  transform: translateY(-50%);
  width: 29px;
  height: 55px;
  cursor: pointer;
}

span.next-arrow svg {
  position: absolute;
  right: -45px;
  top: 50%;
  transform: translateY(-50%);
  width: 29px;
  height: 55px;
  cursor: pointer;
}

.swiper-pagination {
  position: static!important;
}

.swiper-container-horizontal>.swiper-pagination-bullets {
  margin-top: 15px;
}

.swiper-pagination-bullet,
.swiper-pagination-bullet-active {
  background-color: #fff!important;
}

.whiteSlide .swiper-pagination-bullet,
.whiteSlide .swiper-pagination-bullet-active {
  background-color: #000!important;
}

.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 8px!important;
}

.swiper-container-2,
.swiper-container-3,
.swiper-container-4 {
  overflow: hidden;
}

.table {
  display: table;
  width: 100%;
  height: 100%;
}

.cell {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.scroll-x {
  overflow-x: scroll;
}

.scroll-y {
  overflow-y: scroll;
}

.overflow-hidden,
.scroll-hidden {
  overflow: hidden;
}

.overflow-reset {
  overflow: auto!important;
}

.uppercase {
  text-transform: uppercase!important;
}

.italic {
  font-style: italic!important;
}

.thin,
.ultraLight {
  font-weight: 100!important;
}

.light {
  font-weight: 300!important;
}

.normal {
  font-weight: 400!important;
}

.semiBold {
  font-weight: 500!important;
}

.bold {
  font-weight: 600!important;
}

.ultraBold {
  font-weight: 900!important;
}

.noText {
  font-size: 0;
}

.align-top,
.top {
  vertical-align: top!important;
}

.align-left,
.left {
  text-align: left!important;
}

.align-right,
.right {
  text-align: right!important;
}

.align-center,
.center {
  text-align: center!important;
}

.middle {
  vertical-align: middle!important;
}

.bottom {
  vertical-align: bottom!important;
}

.rtl {
  direction: rtl;
  unicode-bidi: embed;
}

.position-left {
  left: 0;
}

.position-top {
  top: 0;
}

.position-bottom {
  bottom: 0;
}

.position-right {
  right: 0;
}

.float-right {
  float: right!important;
}

.float-left {
  float: left!important;
}

.float-none {
  float: none!important;
}

.slides.firstSlide .hideForFirstSlide,
.slides.lastSlide .hideForLastSlide {
  display: none;
}

.block {
  display: block!important;
}

.inlineBlock {
  display: inline-block!important;
}

.inline {
  display: inline!important;
}

.relative {
  position: relative!important;
}

.absolute {
  position: absolute!important;
}

.fixed {
  position: fixed!important;
}

.nowrap {
  white-space: nowrap;
}

.wide {
  width: 100%!important;
}

.hidden {
  display: none;
}

.nobr {
  white-space: nowrap;
}

[class*=shift-] {
  position: relative;
}

.shift-up-1 {
  top: -1px;
}

.shift-up-2 {
  top: -2px;
}

.shift-up-3 {
  top: -3px;
}

.shift-up-4 {
  top: -4px;
}

.shift-up-5 {
  top: -5px;
}

.shift-down-1 {
  top: 1px;
}

.shift-down-2 {
  top: 2px;
}

.shift-down-3 {
  top: 3px;
}

.shift-down-4 {
  top: 4px;
}

.shift-down-5 {
  top: 5px;
}

.shift-left-1 {
  left: -1px;
}

.shift-left-2 {
  left: -2px;
}

.shift-left-3 {
  left: -3px;
}

.shift-left-4 {
  left: -4px;
}

.shift-left-5 {
  left: -5px;
}

.shift-right-1 {
  left: 1px;
}

.shift-right-2 {
  left: 2px;
}

.shift-right-3 {
  left: 3px;
}

.shift-right-4 {
  left: 4px;
}

.shift-right-5 {
  left: 5px;
}

@media (max-width:1023px) {
  .wideForTablet {
    width: 100%!important;
    margin-left: 0!important;
    margin-right: 0!important;
  }
}

@media (max-width:767px) {
  .wideForPhablet {
    width: 100%!important;
    margin-left: 0!important;
    margin-right: 0!important;
  }
}

@media (max-width:435px) {
  .wideForPhone {
    width: 100%!important;
    margin-left: 0!important;
    margin-right: 0!important;
  }
}

.round {
  border-radius: 999px!important;
}

.rounded {
  border-radius: 6px!important;
}

.rectangular {
  border-radius: 0!important;
}

.opacity-0 {
  opacity: 0!important;
}

.opacity-1 {
  opacity: .1!important;
}

.opacity-2 {
  opacity: .2!important;
}

.opacity-3 {
  opacity: .3!important;
}

.opacity-4 {
  opacity: .4!important;
}

.opacity-5 {
  opacity: .5!important;
}

.opacity-6 {
  opacity: .6!important;
}

.opacity-7 {
  opacity: .7!important;
}

.opacity-8 {
  opacity: .8!important;
}

.opacity-9 {
  opacity: .9!important;
}

.opacity-10,
.opaque {
  opacity: 1!important;
}

.transparent {
  background: 0 0!important;
}

.crop {
  margin: 0!important;
}

.cropBottom {
  margin-bottom: 0!important;
}

.cropTop {
  margin-top: 0!important;
}

.cropLeft,
.cropSides {
  margin-left: 0!important;
}

.cropRight,
.cropSides {
  margin-right: 0!important;
}

.trim {
  padding: 0!important;
}

.trimBottom {
  padding-bottom: 0!important;
}

.trimTop {
  padding-top: 0!important;
}

.trimLeft,
.trimSides {
  padding-left: 0!important;
}

.trimRight,
.trimSides {
  padding-right: 0!important;
}

.padding-0 {
  padding: 0!important;
}

.padding-1 {
  padding: 10px!important;
}

.padding-2 {
  padding: 20px!important;
}

.padding-3 {
  padding: 30px!important;
}

.padding-4 {
  padding: 40px!important;
}

.padding-5 {
  padding: 50px!important;
}

.padding-6 {
  padding: 60px!important;
}

.padding-7 {
  padding: 70px!important;
}

.padding-8 {
  padding: 80px!important;
}

.padding-9 {
  padding: 90px!important;
}

.padding-10 {
  padding: 100px!important;
}

.padding-11 {
  padding: 110px!important;
}

.padding-12 {
  padding: 120px!important;
}

.padding-13 {
  padding: 130px!important;
}

.padding-14 {
  padding: 140px!important;
}

.padding-15 {
  padding: 150px!important;
}

.padding-16 {
  padding: 160px!important;
}

.padding-17 {
  padding: 170px!important;
}

.padding-18 {
  padding: 180px!important;
}

.padding-19 {
  padding: 190px!important;
}

.padding-20 {
  padding: 200px!important;
}

.padding-top-0 {
  padding-top: 0!important;
}

.padding-top-1 {
  padding-top: 10px!important;
}

.padding-top-2 {
  padding-top: 20px!important;
}

.padding-top-3 {
  padding-top: 30px!important;
}

.padding-top-4 {
  padding-top: 40px!important;
}

.padding-top-5 {
  padding-top: 50px!important;
}

.padding-top-6 {
  padding-top: 60px!important;
}

.padding-top-7 {
  padding-top: 70px!important;
}

.padding-top-8 {
  padding-top: 80px!important;
}

.padding-top-9 {
  padding-top: 90px!important;
}

.padding-top-10 {
  padding-top: 100px!important;
}

.padding-top-11 {
  padding-top: 110px!important;
}

.padding-top-12 {
  padding-top: 120px!important;
}

.padding-top-13 {
  padding-top: 130px!important;
}

.padding-top-14 {
  padding-top: 140px!important;
}

.padding-top-15 {
  padding-top: 150px!important;
}

.padding-top-16 {
  padding-top: 160px!important;
}

.padding-top-17 {
  padding-top: 170px!important;
}

.padding-top-18 {
  padding-top: 180px!important;
}

.padding-top-19 {
  padding-top: 190px!important;
}

.padding-top-20 {
  padding-top: 200px!important;
}

.padding-right-0 {
  padding-right: 0!important;
}

.padding-right-1 {
  padding-right: 10px!important;
}

.padding-right-2 {
  padding-right: 20px!important;
}

.padding-right-3 {
  padding-right: 30px!important;
}

.padding-right-4 {
  padding-right: 40px!important;
}

.padding-right-5 {
  padding-right: 50px!important;
}

.padding-right-6 {
  padding-right: 60px!important;
}

.padding-right-7 {
  padding-right: 70px!important;
}

.padding-right-8 {
  padding-right: 80px!important;
}

.padding-right-9 {
  padding-right: 90px!important;
}

.padding-right-10 {
  padding-right: 100px!important;
}

.padding-right-11 {
  padding-right: 110px!important;
}

.padding-right-12 {
  padding-right: 120px!important;
}

.padding-right-13 {
  padding-right: 130px!important;
}

.padding-right-14 {
  padding-right: 140px!important;
}

.padding-right-15 {
  padding-right: 150px!important;
}

.padding-right-16 {
  padding-right: 160px!important;
}

.padding-right-17 {
  padding-right: 170px!important;
}

.padding-right-18 {
  padding-right: 180px!important;
}

.padding-right-19 {
  padding-right: 190px!important;
}

.padding-right-20 {
  padding-right: 200px!important;
}

.padding-bottom-0 {
  padding-bottom: 0!important;
}

.padding-bottom-1 {
  padding-bottom: 10px!important;
}

.padding-bottom-2 {
  padding-bottom: 20px!important;
}

.padding-bottom-3 {
  padding-bottom: 30px!important;
}

.padding-bottom-4 {
  padding-bottom: 40px!important;
}

.padding-bottom-5 {
  padding-bottom: 50px!important;
}

.padding-bottom-6 {
  padding-bottom: 60px!important;
}

.padding-bottom-7 {
  padding-bottom: 70px!important;
}

.padding-bottom-8 {
  padding-bottom: 80px!important;
}

.padding-bottom-9 {
  padding-bottom: 90px!important;
}

.padding-bottom-10 {
  padding-bottom: 100px!important;
}

.padding-bottom-11 {
  padding-bottom: 110px!important;
}

.padding-bottom-12 {
  padding-bottom: 120px!important;
}

.padding-bottom-13 {
  padding-bottom: 130px!important;
}

.padding-bottom-14 {
  padding-bottom: 140px!important;
}

.padding-bottom-15 {
  padding-bottom: 150px!important;
}

.padding-bottom-16 {
  padding-bottom: 160px!important;
}

.padding-bottom-17 {
  padding-bottom: 170px!important;
}

.padding-bottom-18 {
  padding-bottom: 180px!important;
}

.padding-bottom-19 {
  padding-bottom: 190px!important;
}

.padding-bottom-20 {
  padding-bottom: 200px!important;
}

.padding-left-0 {
  padding-left: 0!important;
}

.padding-left-1 {
  padding-left: 10px!important;
}

.padding-left-2 {
  padding-left: 20px!important;
}

.padding-left-3 {
  padding-left: 30px!important;
}

.padding-left-4 {
  padding-left: 40px!important;
}

.padding-left-5 {
  padding-left: 50px!important;
}

.padding-left-6 {
  padding-left: 60px!important;
}

.padding-left-7 {
  padding-left: 70px!important;
}

.padding-left-8 {
  padding-left: 80px!important;
}

.padding-left-9 {
  padding-left: 90px!important;
}

.padding-left-10 {
  padding-left: 100px!important;
}

.padding-left-11 {
  padding-left: 110px!important;
}

.padding-left-12 {
  padding-left: 120px!important;
}

.padding-left-13 {
  padding-left: 130px!important;
}

.padding-left-14 {
  padding-left: 140px!important;
}

.padding-left-15 {
  padding-left: 150px!important;
}

.padding-left-16 {
  padding-left: 160px!important;
}

.padding-left-17 {
  padding-left: 170px!important;
}

.padding-left-18 {
  padding-left: 180px!important;
}

.padding-left-19 {
  padding-left: 190px!important;
}

.padding-left-20 {
  padding-left: 200px!important;
}

.margin-0 {
  margin: 0!important;
}

.margin-1 {
  margin: 10px!important;
}

.margin-2 {
  margin: 20px!important;
}

.margin-3 {
  margin: 30px!important;
}

.margin-4 {
  margin: 40px!important;
}

.margin-5 {
  margin: 50px!important;
}

.margin-6 {
  margin: 60px!important;
}

.margin-7 {
  margin: 70px!important;
}

.margin-8 {
  margin: 80px!important;
}

.margin-9 {
  margin: 90px!important;
}

.margin-10 {
  margin: 100px!important;
}

.margin-11 {
  margin: 110px!important;
}

.margin-12 {
  margin: 120px!important;
}

.margin-13 {
  margin: 130px!important;
}

.margin-14 {
  margin: 140px!important;
}

.margin-15 {
  margin: 150px!important;
}

.margin-16 {
  margin: 160px!important;
}

.margin-17 {
  margin: 170px!important;
}

.margin-18 {
  margin: 180px!important;
}

.margin-19 {
  margin: 190px!important;
}

.margin-20 {
  margin: 200px!important;
}

.margin-top-0 {
  margin-top: 0!important;
}

.margin-top-1 {
  margin-top: 10px!important;
}

.margin-top-2 {
  margin-top: 20px!important;
}

.margin-top-3 {
  margin-top: 30px!important;
}

.margin-top-4 {
  margin-top: 40px!important;
}

.margin-top-5 {
  margin-top: 50px!important;
}

.margin-top-6 {
  margin-top: 60px!important;
}

.margin-top-7 {
  margin-top: 70px!important;
}

.margin-top-8 {
  margin-top: 80px!important;
}

.margin-top-9 {
  margin-top: 90px!important;
}

.margin-top-10 {
  margin-top: 100px!important;
}

.margin-top-11 {
  margin-top: 110px!important;
}

.margin-top-12 {
  margin-top: 120px!important;
}

.margin-top-13 {
  margin-top: 130px!important;
}

.margin-top-14 {
  margin-top: 140px!important;
}

.margin-top-15 {
  margin-top: 150px!important;
}

.margin-top-16 {
  margin-top: 160px!important;
}

.margin-top-17 {
  margin-top: 170px!important;
}

.margin-top-18 {
  margin-top: 180px!important;
}

.margin-top-19 {
  margin-top: 190px!important;
}

.margin-top-20 {
  margin-top: 200px!important;
}

.margin-right-0 {
  margin-right: 0!important;
}

.margin-right-1 {
  margin-right: 10px!important;
}

.margin-right-2 {
  margin-right: 20px!important;
}

.margin-right-3 {
  margin-right: 30px!important;
}

.margin-right-4 {
  margin-right: 40px!important;
}

.margin-right-5 {
  margin-right: 50px!important;
}

.margin-right-6 {
  margin-right: 60px!important;
}

.margin-right-7 {
  margin-right: 70px!important;
}

.margin-right-8 {
  margin-right: 80px!important;
}

.margin-right-9 {
  margin-right: 90px!important;
}

.margin-right-10 {
  margin-right: 100px!important;
}

.margin-right-11 {
  margin-right: 110px!important;
}

.margin-right-12 {
  margin-right: 120px!important;
}

.margin-right-13 {
  margin-right: 130px!important;
}

.margin-right-14 {
  margin-right: 140px!important;
}

.margin-right-15 {
  margin-right: 150px!important;
}

.margin-right-16 {
  margin-right: 160px!important;
}

.margin-right-17 {
  margin-right: 170px!important;
}

.margin-right-18 {
  margin-right: 180px!important;
}

.margin-right-19 {
  margin-right: 190px!important;
}

.margin-right-20 {
  margin-right: 200px!important;
}

.margin-bottom-0 {
  margin-bottom: 0!important;
}

.margin-bottom-1 {
  margin-bottom: 10px!important;
}

.margin-bottom-2 {
  margin-bottom: 20px!important;
}

.margin-bottom-3 {
  margin-bottom: 30px!important;
}

.margin-bottom-4 {
  margin-bottom: 40px!important;
}

.margin-bottom-5 {
  margin-bottom: 50px!important;
}

.margin-bottom-6 {
  margin-bottom: 60px!important;
}

.margin-bottom-7 {
  margin-bottom: 70px!important;
}

.margin-bottom-8 {
  margin-bottom: 80px!important;
}

.margin-bottom-9 {
  margin-bottom: 90px!important;
}

.margin-bottom-10 {
  margin-bottom: 100px!important;
}

.margin-bottom-11 {
  margin-bottom: 110px!important;
}

.margin-bottom-12 {
  margin-bottom: 120px!important;
}

.margin-bottom-13 {
  margin-bottom: 130px!important;
}

.margin-bottom-14 {
  margin-bottom: 140px!important;
}

.margin-bottom-15 {
  margin-bottom: 150px!important;
}

.margin-bottom-16 {
  margin-bottom: 160px!important;
}

.margin-bottom-17 {
  margin-bottom: 170px!important;
}

.margin-bottom-18 {
  margin-bottom: 180px!important;
}

.margin-bottom-19 {
  margin-bottom: 190px!important;
}

.margin-bottom-20 {
  margin-bottom: 200px!important;
}

.margin-left-0 {
  margin-left: 0!important;
}

.margin-left-1 {
  margin-left: 10px!important;
}

.margin-left-2 {
  margin-left: 20px!important;
}

.margin-left-3 {
  margin-left: 30px!important;
}

.margin-left-4 {
  margin-left: 40px!important;
}

.margin-left-5 {
  margin-left: 50px!important;
}

.margin-left-6 {
  margin-left: 60px!important;
}

.margin-left-7 {
  margin-left: 70px!important;
}

.margin-left-8 {
  margin-left: 80px!important;
}

.margin-left-9 {
  margin-left: 90px!important;
}

.margin-left-10 {
  margin-left: 100px!important;
}

.margin-left-11 {
  margin-left: 110px!important;
}

.margin-left-12 {
  margin-left: 120px!important;
}

.margin-left-13 {
  margin-left: 130px!important;
}

.margin-left-14 {
  margin-left: 140px!important;
}

.margin-left-15 {
  margin-left: 150px!important;
}

.margin-left-16 {
  margin-left: 160px!important;
}

.margin-left-17 {
  margin-left: 170px!important;
}

.margin-left-18 {
  margin-left: 180px!important;
}

.margin-left-19 {
  margin-left: 190px!important;
}

.margin-left-20 {
  margin-left: 200px!important;
}

@media (min-width:1240px) {
  .padding-desktop-0 {
    padding: 0!important;
  }

  .padding-desktop-1 {
    padding: 10px!important;
  }

  .padding-desktop-2 {
    padding: 20px!important;
  }

  .padding-desktop-3 {
    padding: 30px!important;
  }

  .padding-desktop-4 {
    padding: 40px!important;
  }

  .padding-desktop-5 {
    padding: 50px!important;
  }

  .padding-desktop-6 {
    padding: 60px!important;
  }

  .padding-desktop-7 {
    padding: 70px!important;
  }

  .padding-desktop-8 {
    padding: 80px!important;
  }

  .padding-desktop-9 {
    padding: 90px!important;
  }

  .padding-desktop-10 {
    padding: 100px!important;
  }

  .padding-desktop-11 {
    padding: 110px!important;
  }

  .padding-desktop-12 {
    padding: 120px!important;
  }

  .padding-desktop-13 {
    padding: 130px!important;
  }

  .padding-desktop-14 {
    padding: 140px!important;
  }

  .padding-desktop-15 {
    padding: 150px!important;
  }

  .padding-desktop-16 {
    padding: 160px!important;
  }

  .padding-desktop-17 {
    padding: 170px!important;
  }

  .padding-desktop-18 {
    padding: 180px!important;
  }

  .padding-desktop-19 {
    padding: 190px!important;
  }

  .padding-desktop-20 {
    padding: 200px!important;
  }

  .padding-top-desktop-0 {
    padding-top: 0!important;
  }

  .padding-top-desktop-1 {
    padding-top: 10px!important;
  }

  .padding-top-desktop-2 {
    padding-top: 20px!important;
  }

  .padding-top-desktop-3 {
    padding-top: 30px!important;
  }

  .padding-top-desktop-4 {
    padding-top: 40px!important;
  }

  .padding-top-desktop-5 {
    padding-top: 50px!important;
  }

  .padding-top-desktop-6 {
    padding-top: 60px!important;
  }

  .padding-top-desktop-7 {
    padding-top: 70px!important;
  }

  .padding-top-desktop-8 {
    padding-top: 80px!important;
  }

  .padding-top-desktop-9 {
    padding-top: 90px!important;
  }

  .padding-top-desktop-10 {
    padding-top: 100px!important;
  }

  .padding-top-desktop-11 {
    padding-top: 110px!important;
  }

  .padding-top-desktop-12 {
    padding-top: 120px!important;
  }

  .padding-top-desktop-13 {
    padding-top: 130px!important;
  }

  .padding-top-desktop-14 {
    padding-top: 140px!important;
  }

  .padding-top-desktop-15 {
    padding-top: 150px!important;
  }

  .padding-top-desktop-16 {
    padding-top: 160px!important;
  }

  .padding-top-desktop-17 {
    padding-top: 170px!important;
  }

  .padding-top-desktop-18 {
    padding-top: 180px!important;
  }

  .padding-top-desktop-19 {
    padding-top: 190px!important;
  }

  .padding-top-desktop-20 {
    padding-top: 200px!important;
  }

  .padding-right-desktop-0 {
    padding-right: 0!important;
  }

  .padding-right-desktop-1 {
    padding-right: 10px!important;
  }

  .padding-right-desktop-2 {
    padding-right: 20px!important;
  }

  .padding-right-desktop-3 {
    padding-right: 30px!important;
  }

  .padding-right-desktop-4 {
    padding-right: 40px!important;
  }

  .padding-right-desktop-5 {
    padding-right: 50px!important;
  }

  .padding-right-desktop-6 {
    padding-right: 60px!important;
  }

  .padding-right-desktop-7 {
    padding-right: 70px!important;
  }

  .padding-right-desktop-8 {
    padding-right: 80px!important;
  }

  .padding-right-desktop-9 {
    padding-right: 90px!important;
  }

  .padding-right-desktop-10 {
    padding-right: 100px!important;
  }

  .padding-right-desktop-11 {
    padding-right: 110px!important;
  }

  .padding-right-desktop-12 {
    padding-right: 120px!important;
  }

  .padding-right-desktop-13 {
    padding-right: 130px!important;
  }

  .padding-right-desktop-14 {
    padding-right: 140px!important;
  }

  .padding-right-desktop-15 {
    padding-right: 150px!important;
  }

  .padding-right-desktop-16 {
    padding-right: 160px!important;
  }

  .padding-right-desktop-17 {
    padding-right: 170px!important;
  }

  .padding-right-desktop-18 {
    padding-right: 180px!important;
  }

  .padding-right-desktop-19 {
    padding-right: 190px!important;
  }

  .padding-right-desktop-20 {
    padding-right: 200px!important;
  }

  .padding-bottom-desktop-0 {
    padding-bottom: 0!important;
  }

  .padding-bottom-desktop-1 {
    padding-bottom: 10px!important;
  }

  .padding-bottom-desktop-2 {
    padding-bottom: 20px!important;
  }

  .padding-bottom-desktop-3 {
    padding-bottom: 30px!important;
  }

  .padding-bottom-desktop-4 {
    padding-bottom: 40px!important;
  }

  .padding-bottom-desktop-5 {
    padding-bottom: 50px!important;
  }

  .padding-bottom-desktop-6 {
    padding-bottom: 60px!important;
  }

  .padding-bottom-desktop-7 {
    padding-bottom: 70px!important;
  }

  .padding-bottom-desktop-8 {
    padding-bottom: 80px!important;
  }

  .padding-bottom-desktop-9 {
    padding-bottom: 90px!important;
  }

  .padding-bottom-desktop-10 {
    padding-bottom: 100px!important;
  }

  .padding-bottom-desktop-11 {
    padding-bottom: 110px!important;
  }

  .padding-bottom-desktop-12 {
    padding-bottom: 120px!important;
  }

  .padding-bottom-desktop-13 {
    padding-bottom: 130px!important;
  }

  .padding-bottom-desktop-14 {
    padding-bottom: 140px!important;
  }

  .padding-bottom-desktop-15 {
    padding-bottom: 150px!important;
  }

  .padding-bottom-desktop-16 {
    padding-bottom: 160px!important;
  }

  .padding-bottom-desktop-17 {
    padding-bottom: 170px!important;
  }

  .padding-bottom-desktop-18 {
    padding-bottom: 180px!important;
  }

  .padding-bottom-desktop-19 {
    padding-bottom: 190px!important;
  }

  .padding-bottom-desktop-20 {
    padding-bottom: 200px!important;
  }

  .padding-left-desktop-0 {
    padding-left: 0!important;
  }

  .padding-left-desktop-1 {
    padding-left: 10px!important;
  }

  .padding-left-desktop-2 {
    padding-left: 20px!important;
  }

  .padding-left-desktop-3 {
    padding-left: 30px!important;
  }

  .padding-left-desktop-4 {
    padding-left: 40px!important;
  }

  .padding-left-desktop-5 {
    padding-left: 50px!important;
  }

  .padding-left-desktop-6 {
    padding-left: 60px!important;
  }

  .padding-left-desktop-7 {
    padding-left: 70px!important;
  }

  .padding-left-desktop-8 {
    padding-left: 80px!important;
  }

  .padding-left-desktop-9 {
    padding-left: 90px!important;
  }

  .padding-left-desktop-10 {
    padding-left: 100px!important;
  }

  .padding-left-desktop-11 {
    padding-left: 110px!important;
  }

  .padding-left-desktop-12 {
    padding-left: 120px!important;
  }

  .padding-left-desktop-13 {
    padding-left: 130px!important;
  }

  .padding-left-desktop-14 {
    padding-left: 140px!important;
  }

  .padding-left-desktop-15 {
    padding-left: 150px!important;
  }

  .padding-left-desktop-16 {
    padding-left: 160px!important;
  }

  .padding-left-desktop-17 {
    padding-left: 170px!important;
  }

  .padding-left-desktop-18 {
    padding-left: 180px!important;
  }

  .padding-left-desktop-19 {
    padding-left: 190px!important;
  }

  .padding-left-desktop-20 {
    padding-left: 200px!important;
  }

  .margin-desktop-0 {
    margin: 0!important;
  }

  .margin-desktop-1 {
    margin: 10px!important;
  }

  .margin-desktop-2 {
    margin: 20px!important;
  }

  .margin-desktop-3 {
    margin: 30px!important;
  }

  .margin-desktop-4 {
    margin: 40px!important;
  }

  .margin-desktop-5 {
    margin: 50px!important;
  }

  .margin-desktop-6 {
    margin: 60px!important;
  }

  .margin-desktop-7 {
    margin: 70px!important;
  }

  .margin-desktop-8 {
    margin: 80px!important;
  }

  .margin-desktop-9 {
    margin: 90px!important;
  }

  .margin-desktop-10 {
    margin: 100px!important;
  }

  .margin-desktop-11 {
    margin: 110px!important;
  }

  .margin-desktop-12 {
    margin: 120px!important;
  }

  .margin-desktop-13 {
    margin: 130px!important;
  }

  .margin-desktop-14 {
    margin: 140px!important;
  }

  .margin-desktop-15 {
    margin: 150px!important;
  }

  .margin-desktop-16 {
    margin: 160px!important;
  }

  .margin-desktop-17 {
    margin: 170px!important;
  }

  .margin-desktop-18 {
    margin: 180px!important;
  }

  .margin-desktop-19 {
    margin: 190px!important;
  }

  .margin-desktop-20 {
    margin: 200px!important;
  }

  .margin-top-desktop-0 {
    margin-top: 0!important;
  }

  .margin-top-desktop-1 {
    margin-top: 10px!important;
  }

  .margin-top-desktop-2 {
    margin-top: 20px!important;
  }

  .margin-top-desktop-3 {
    margin-top: 30px!important;
  }

  .margin-top-desktop-4 {
    margin-top: 40px!important;
  }

  .margin-top-desktop-5 {
    margin-top: 50px!important;
  }

  .margin-top-desktop-6 {
    margin-top: 60px!important;
  }

  .margin-top-desktop-7 {
    margin-top: 70px!important;
  }

  .margin-top-desktop-8 {
    margin-top: 80px!important;
  }

  .margin-top-desktop-9 {
    margin-top: 90px!important;
  }

  .margin-top-desktop-10 {
    margin-top: 100px!important;
  }

  .margin-top-desktop-11 {
    margin-top: 110px!important;
  }

  .margin-top-desktop-12 {
    margin-top: 120px!important;
  }

  .margin-top-desktop-13 {
    margin-top: 130px!important;
  }

  .margin-top-desktop-14 {
    margin-top: 140px!important;
  }

  .margin-top-desktop-15 {
    margin-top: 150px!important;
  }

  .margin-top-desktop-16 {
    margin-top: 160px!important;
  }

  .margin-top-desktop-17 {
    margin-top: 170px!important;
  }

  .margin-top-desktop-18 {
    margin-top: 180px!important;
  }

  .margin-top-desktop-19 {
    margin-top: 190px!important;
  }

  .margin-top-desktop-20 {
    margin-top: 200px!important;
  }

  .margin-right-desktop-0 {
    margin-right: 0!important;
  }

  .margin-right-desktop-1 {
    margin-right: 10px!important;
  }

  .margin-right-desktop-2 {
    margin-right: 20px!important;
  }

  .margin-right-desktop-3 {
    margin-right: 30px!important;
  }

  .margin-right-desktop-4 {
    margin-right: 40px!important;
  }

  .margin-right-desktop-5 {
    margin-right: 50px!important;
  }

  .margin-right-desktop-6 {
    margin-right: 60px!important;
  }

  .margin-right-desktop-7 {
    margin-right: 70px!important;
  }

  .margin-right-desktop-8 {
    margin-right: 80px!important;
  }

  .margin-right-desktop-9 {
    margin-right: 90px!important;
  }

  .margin-right-desktop-10 {
    margin-right: 100px!important;
  }

  .margin-right-desktop-11 {
    margin-right: 110px!important;
  }

  .margin-right-desktop-12 {
    margin-right: 120px!important;
  }

  .margin-right-desktop-13 {
    margin-right: 130px!important;
  }

  .margin-right-desktop-14 {
    margin-right: 140px!important;
  }

  .margin-right-desktop-15 {
    margin-right: 150px!important;
  }

  .margin-right-desktop-16 {
    margin-right: 160px!important;
  }

  .margin-right-desktop-17 {
    margin-right: 170px!important;
  }

  .margin-right-desktop-18 {
    margin-right: 180px!important;
  }

  .margin-right-desktop-19 {
    margin-right: 190px!important;
  }

  .margin-right-desktop-20 {
    margin-right: 200px!important;
  }

  .margin-bottom-desktop-0 {
    margin-bottom: 0!important;
  }

  .margin-bottom-desktop-1 {
    margin-bottom: 10px!important;
  }

  .margin-bottom-desktop-2 {
    margin-bottom: 20px!important;
  }

  .margin-bottom-desktop-3 {
    margin-bottom: 30px!important;
  }

  .margin-bottom-desktop-4 {
    margin-bottom: 40px!important;
  }

  .margin-bottom-desktop-5 {
    margin-bottom: 50px!important;
  }

  .margin-bottom-desktop-6 {
    margin-bottom: 60px!important;
  }

  .margin-bottom-desktop-7 {
    margin-bottom: 70px!important;
  }

  .margin-bottom-desktop-8 {
    margin-bottom: 80px!important;
  }

  .margin-bottom-desktop-9 {
    margin-bottom: 90px!important;
  }

  .margin-bottom-desktop-10 {
    margin-bottom: 100px!important;
  }

  .margin-bottom-desktop-11 {
    margin-bottom: 110px!important;
  }

  .margin-bottom-desktop-12 {
    margin-bottom: 120px!important;
  }

  .margin-bottom-desktop-13 {
    margin-bottom: 130px!important;
  }

  .margin-bottom-desktop-14 {
    margin-bottom: 140px!important;
  }

  .margin-bottom-desktop-15 {
    margin-bottom: 150px!important;
  }

  .margin-bottom-desktop-16 {
    margin-bottom: 160px!important;
  }

  .margin-bottom-desktop-17 {
    margin-bottom: 170px!important;
  }

  .margin-bottom-desktop-18 {
    margin-bottom: 180px!important;
  }

  .margin-bottom-desktop-19 {
    margin-bottom: 190px!important;
  }

  .margin-bottom-desktop-20 {
    margin-bottom: 200px!important;
  }

  .margin-left-desktop-0 {
    margin-left: 0!important;
  }

  .margin-left-desktop-1 {
    margin-left: 10px!important;
  }

  .margin-left-desktop-2 {
    margin-left: 20px!important;
  }

  .margin-left-desktop-3 {
    margin-left: 30px!important;
  }

  .margin-left-desktop-4 {
    margin-left: 40px!important;
  }

  .margin-left-desktop-5 {
    margin-left: 50px!important;
  }

  .margin-left-desktop-6 {
    margin-left: 60px!important;
  }

  .margin-left-desktop-7 {
    margin-left: 70px!important;
  }

  .margin-left-desktop-8 {
    margin-left: 80px!important;
  }

  .margin-left-desktop-9 {
    margin-left: 90px!important;
  }

  .margin-left-desktop-10 {
    margin-left: 100px!important;
  }

  .margin-left-desktop-11 {
    margin-left: 110px!important;
  }

  .margin-left-desktop-12 {
    margin-left: 120px!important;
  }

  .margin-left-desktop-13 {
    margin-left: 130px!important;
  }

  .margin-left-desktop-14 {
    margin-left: 140px!important;
  }

  .margin-left-desktop-15 {
    margin-left: 150px!important;
  }

  .margin-left-desktop-16 {
    margin-left: 160px!important;
  }

  .margin-left-desktop-17 {
    margin-left: 170px!important;
  }

  .margin-left-desktop-18 {
    margin-left: 180px!important;
  }

  .margin-left-desktop-19 {
    margin-left: 190px!important;
  }

  .margin-left-desktop-20 {
    margin-left: 200px!important;
  }
}

@media (max-width:1023px) {
  .padding-tablet-0 {
    padding: 0!important;
  }

  .padding-tablet-1 {
    padding: 10px!important;
  }

  .padding-tablet-2 {
    padding: 20px!important;
  }

  .padding-tablet-3 {
    padding: 30px!important;
  }

  .padding-tablet-4 {
    padding: 40px!important;
  }

  .padding-tablet-5 {
    padding: 50px!important;
  }

  .padding-tablet-6 {
    padding: 60px!important;
  }

  .padding-tablet-7 {
    padding: 70px!important;
  }

  .padding-tablet-8 {
    padding: 80px!important;
  }

  .padding-tablet-9 {
    padding: 90px!important;
  }

  .padding-tablet-10 {
    padding: 100px!important;
  }

  .padding-tablet-11 {
    padding: 110px!important;
  }

  .padding-tablet-12 {
    padding: 120px!important;
  }

  .padding-tablet-13 {
    padding: 130px!important;
  }

  .padding-tablet-14 {
    padding: 140px!important;
  }

  .padding-tablet-15 {
    padding: 150px!important;
  }

  .padding-tablet-16 {
    padding: 160px!important;
  }

  .padding-tablet-17 {
    padding: 170px!important;
  }

  .padding-tablet-18 {
    padding: 180px!important;
  }

  .padding-tablet-19 {
    padding: 190px!important;
  }

  .padding-tablet-20 {
    padding: 200px!important;
  }

  .padding-top-tablet-0 {
    padding-top: 0!important;
  }

  .padding-top-tablet-1 {
    padding-top: 10px!important;
  }

  .padding-top-tablet-2 {
    padding-top: 20px!important;
  }

  .padding-top-tablet-3 {
    padding-top: 30px!important;
  }

  .padding-top-tablet-4 {
    padding-top: 40px!important;
  }

  .padding-top-tablet-5 {
    padding-top: 50px!important;
  }

  .padding-top-tablet-6 {
    padding-top: 60px!important;
  }

  .padding-top-tablet-7 {
    padding-top: 70px!important;
  }

  .padding-top-tablet-8 {
    padding-top: 80px!important;
  }

  .padding-top-tablet-9 {
    padding-top: 90px!important;
  }

  .padding-top-tablet-10 {
    padding-top: 100px!important;
  }

  .padding-top-tablet-11 {
    padding-top: 110px!important;
  }

  .padding-top-tablet-12 {
    padding-top: 120px!important;
  }

  .padding-top-tablet-13 {
    padding-top: 130px!important;
  }

  .padding-top-tablet-14 {
    padding-top: 140px!important;
  }

  .padding-top-tablet-15 {
    padding-top: 150px!important;
  }

  .padding-top-tablet-16 {
    padding-top: 160px!important;
  }

  .padding-top-tablet-17 {
    padding-top: 170px!important;
  }

  .padding-top-tablet-18 {
    padding-top: 180px!important;
  }

  .padding-top-tablet-19 {
    padding-top: 190px!important;
  }

  .padding-top-tablet-20 {
    padding-top: 200px!important;
  }

  .padding-right-tablet-0 {
    padding-right: 0!important;
  }

  .padding-right-tablet-1 {
    padding-right: 10px!important;
  }

  .padding-right-tablet-2 {
    padding-right: 20px!important;
  }

  .padding-right-tablet-3 {
    padding-right: 30px!important;
  }

  .padding-right-tablet-4 {
    padding-right: 40px!important;
  }

  .padding-right-tablet-5 {
    padding-right: 50px!important;
  }

  .padding-right-tablet-6 {
    padding-right: 60px!important;
  }

  .padding-right-tablet-7 {
    padding-right: 70px!important;
  }

  .padding-right-tablet-8 {
    padding-right: 80px!important;
  }

  .padding-right-tablet-9 {
    padding-right: 90px!important;
  }

  .padding-right-tablet-10 {
    padding-right: 100px!important;
  }

  .padding-right-tablet-11 {
    padding-right: 110px!important;
  }

  .padding-right-tablet-12 {
    padding-right: 120px!important;
  }

  .padding-right-tablet-13 {
    padding-right: 130px!important;
  }

  .padding-right-tablet-14 {
    padding-right: 140px!important;
  }

  .padding-right-tablet-15 {
    padding-right: 150px!important;
  }

  .padding-right-tablet-16 {
    padding-right: 160px!important;
  }

  .padding-right-tablet-17 {
    padding-right: 170px!important;
  }

  .padding-right-tablet-18 {
    padding-right: 180px!important;
  }

  .padding-right-tablet-19 {
    padding-right: 190px!important;
  }

  .padding-right-tablet-20 {
    padding-right: 200px!important;
  }

  .padding-bottom-tablet-0 {
    padding-bottom: 0!important;
  }

  .padding-bottom-tablet-1 {
    padding-bottom: 10px!important;
  }

  .padding-bottom-tablet-2 {
    padding-bottom: 20px!important;
  }

  .padding-bottom-tablet-3 {
    padding-bottom: 30px!important;
  }

  .padding-bottom-tablet-4 {
    padding-bottom: 40px!important;
  }

  .padding-bottom-tablet-5 {
    padding-bottom: 50px!important;
  }

  .padding-bottom-tablet-6 {
    padding-bottom: 60px!important;
  }

  .padding-bottom-tablet-7 {
    padding-bottom: 70px!important;
  }

  .padding-bottom-tablet-8 {
    padding-bottom: 80px!important;
  }

  .padding-bottom-tablet-9 {
    padding-bottom: 90px!important;
  }

  .padding-bottom-tablet-10 {
    padding-bottom: 100px!important;
  }

  .padding-bottom-tablet-11 {
    padding-bottom: 110px!important;
  }

  .padding-bottom-tablet-12 {
    padding-bottom: 120px!important;
  }

  .padding-bottom-tablet-13 {
    padding-bottom: 130px!important;
  }

  .padding-bottom-tablet-14 {
    padding-bottom: 140px!important;
  }

  .padding-bottom-tablet-15 {
    padding-bottom: 150px!important;
  }

  .padding-bottom-tablet-16 {
    padding-bottom: 160px!important;
  }

  .padding-bottom-tablet-17 {
    padding-bottom: 170px!important;
  }

  .padding-bottom-tablet-18 {
    padding-bottom: 180px!important;
  }

  .padding-bottom-tablet-19 {
    padding-bottom: 190px!important;
  }

  .padding-bottom-tablet-20 {
    padding-bottom: 200px!important;
  }

  .padding-left-tablet-0 {
    padding-left: 0!important;
  }

  .padding-left-tablet-1 {
    padding-left: 10px!important;
  }

  .padding-left-tablet-2 {
    padding-left: 20px!important;
  }

  .padding-left-tablet-3 {
    padding-left: 30px!important;
  }

  .padding-left-tablet-4 {
    padding-left: 40px!important;
  }

  .padding-left-tablet-5 {
    padding-left: 50px!important;
  }

  .padding-left-tablet-6 {
    padding-left: 60px!important;
  }

  .padding-left-tablet-7 {
    padding-left: 70px!important;
  }

  .padding-left-tablet-8 {
    padding-left: 80px!important;
  }

  .padding-left-tablet-9 {
    padding-left: 90px!important;
  }

  .padding-left-tablet-10 {
    padding-left: 100px!important;
  }

  .padding-left-tablet-11 {
    padding-left: 110px!important;
  }

  .padding-left-tablet-12 {
    padding-left: 120px!important;
  }

  .padding-left-tablet-13 {
    padding-left: 130px!important;
  }

  .padding-left-tablet-14 {
    padding-left: 140px!important;
  }

  .padding-left-tablet-15 {
    padding-left: 150px!important;
  }

  .padding-left-tablet-16 {
    padding-left: 160px!important;
  }

  .padding-left-tablet-17 {
    padding-left: 170px!important;
  }

  .padding-left-tablet-18 {
    padding-left: 180px!important;
  }

  .padding-left-tablet-19 {
    padding-left: 190px!important;
  }

  .padding-left-tablet-20 {
    padding-left: 200px!important;
  }

  .margin-tablet-0 {
    margin: 0!important;
  }

  .margin-tablet-1 {
    margin: 10px!important;
  }

  .margin-tablet-2 {
    margin: 20px!important;
  }

  .margin-tablet-3 {
    margin: 30px!important;
  }

  .margin-tablet-4 {
    margin: 40px!important;
  }

  .margin-tablet-5 {
    margin: 50px!important;
  }

  .margin-tablet-6 {
    margin: 60px!important;
  }

  .margin-tablet-7 {
    margin: 70px!important;
  }

  .margin-tablet-8 {
    margin: 80px!important;
  }

  .margin-tablet-9 {
    margin: 90px!important;
  }

  .margin-tablet-10 {
    margin: 100px!important;
  }

  .margin-tablet-11 {
    margin: 110px!important;
  }

  .margin-tablet-12 {
    margin: 120px!important;
  }

  .margin-tablet-13 {
    margin: 130px!important;
  }

  .margin-tablet-14 {
    margin: 140px!important;
  }

  .margin-tablet-15 {
    margin: 150px!important;
  }

  .margin-tablet-16 {
    margin: 160px!important;
  }

  .margin-tablet-17 {
    margin: 170px!important;
  }

  .margin-tablet-18 {
    margin: 180px!important;
  }

  .margin-tablet-19 {
    margin: 190px!important;
  }

  .margin-tablet-20 {
    margin: 200px!important;
  }

  .margin-top-tablet-0 {
    margin-top: 0!important;
  }

  .margin-top-tablet-1 {
    margin-top: 10px!important;
  }

  .margin-top-tablet-2 {
    margin-top: 20px!important;
  }

  .margin-top-tablet-3 {
    margin-top: 30px!important;
  }

  .margin-top-tablet-4 {
    margin-top: 40px!important;
  }

  .margin-top-tablet-5 {
    margin-top: 50px!important;
  }

  .margin-top-tablet-6 {
    margin-top: 60px!important;
  }

  .margin-top-tablet-7 {
    margin-top: 70px!important;
  }

  .margin-top-tablet-8 {
    margin-top: 80px!important;
  }

  .margin-top-tablet-9 {
    margin-top: 90px!important;
  }

  .margin-top-tablet-10 {
    margin-top: 100px!important;
  }

  .margin-top-tablet-11 {
    margin-top: 110px!important;
  }

  .margin-top-tablet-12 {
    margin-top: 120px!important;
  }

  .margin-top-tablet-13 {
    margin-top: 130px!important;
  }

  .margin-top-tablet-14 {
    margin-top: 140px!important;
  }

  .margin-top-tablet-15 {
    margin-top: 150px!important;
  }

  .margin-top-tablet-16 {
    margin-top: 160px!important;
  }

  .margin-top-tablet-17 {
    margin-top: 170px!important;
  }

  .margin-top-tablet-18 {
    margin-top: 180px!important;
  }

  .margin-top-tablet-19 {
    margin-top: 190px!important;
  }

  .margin-top-tablet-20 {
    margin-top: 200px!important;
  }

  .margin-right-tablet-0 {
    margin-right: 0!important;
  }

  .margin-right-tablet-1 {
    margin-right: 10px!important;
  }

  .margin-right-tablet-2 {
    margin-right: 20px!important;
  }

  .margin-right-tablet-3 {
    margin-right: 30px!important;
  }

  .margin-right-tablet-4 {
    margin-right: 40px!important;
  }

  .margin-right-tablet-5 {
    margin-right: 50px!important;
  }

  .margin-right-tablet-6 {
    margin-right: 60px!important;
  }

  .margin-right-tablet-7 {
    margin-right: 70px!important;
  }

  .margin-right-tablet-8 {
    margin-right: 80px!important;
  }

  .margin-right-tablet-9 {
    margin-right: 90px!important;
  }

  .margin-right-tablet-10 {
    margin-right: 100px!important;
  }

  .margin-right-tablet-11 {
    margin-right: 110px!important;
  }

  .margin-right-tablet-12 {
    margin-right: 120px!important;
  }

  .margin-right-tablet-13 {
    margin-right: 130px!important;
  }

  .margin-right-tablet-14 {
    margin-right: 140px!important;
  }

  .margin-right-tablet-15 {
    margin-right: 150px!important;
  }

  .margin-right-tablet-16 {
    margin-right: 160px!important;
  }

  .margin-right-tablet-17 {
    margin-right: 170px!important;
  }

  .margin-right-tablet-18 {
    margin-right: 180px!important;
  }

  .margin-right-tablet-19 {
    margin-right: 190px!important;
  }

  .margin-right-tablet-20 {
    margin-right: 200px!important;
  }

  .margin-bottom-tablet-0 {
    margin-bottom: 0!important;
  }

  .margin-bottom-tablet-1 {
    margin-bottom: 10px!important;
  }

  .margin-bottom-tablet-2 {
    margin-bottom: 20px!important;
  }

  .margin-bottom-tablet-3 {
    margin-bottom: 30px!important;
  }

  .margin-bottom-tablet-4 {
    margin-bottom: 40px!important;
  }

  .margin-bottom-tablet-5 {
    margin-bottom: 50px!important;
  }

  .margin-bottom-tablet-6 {
    margin-bottom: 60px!important;
  }

  .margin-bottom-tablet-7 {
    margin-bottom: 70px!important;
  }

  .margin-bottom-tablet-8 {
    margin-bottom: 80px!important;
  }

  .margin-bottom-tablet-9 {
    margin-bottom: 90px!important;
  }

  .margin-bottom-tablet-10 {
    margin-bottom: 100px!important;
  }

  .margin-bottom-tablet-11 {
    margin-bottom: 110px!important;
  }

  .margin-bottom-tablet-12 {
    margin-bottom: 120px!important;
  }

  .margin-bottom-tablet-13 {
    margin-bottom: 130px!important;
  }

  .margin-bottom-tablet-14 {
    margin-bottom: 140px!important;
  }

  .margin-bottom-tablet-15 {
    margin-bottom: 150px!important;
  }

  .margin-bottom-tablet-16 {
    margin-bottom: 160px!important;
  }

  .margin-bottom-tablet-17 {
    margin-bottom: 170px!important;
  }

  .margin-bottom-tablet-18 {
    margin-bottom: 180px!important;
  }

  .margin-bottom-tablet-19 {
    margin-bottom: 190px!important;
  }

  .margin-bottom-tablet-20 {
    margin-bottom: 200px!important;
  }

  .margin-left-tablet-0 {
    margin-left: 0!important;
  }

  .margin-left-tablet-1 {
    margin-left: 10px!important;
  }

  .margin-left-tablet-2 {
    margin-left: 20px!important;
  }

  .margin-left-tablet-3 {
    margin-left: 30px!important;
  }

  .margin-left-tablet-4 {
    margin-left: 40px!important;
  }

  .margin-left-tablet-5 {
    margin-left: 50px!important;
  }

  .margin-left-tablet-6 {
    margin-left: 60px!important;
  }

  .margin-left-tablet-7 {
    margin-left: 70px!important;
  }

  .margin-left-tablet-8 {
    margin-left: 80px!important;
  }

  .margin-left-tablet-9 {
    margin-left: 90px!important;
  }

  .margin-left-tablet-10 {
    margin-left: 100px!important;
  }

  .margin-left-tablet-11 {
    margin-left: 110px!important;
  }

  .margin-left-tablet-12 {
    margin-left: 120px!important;
  }

  .margin-left-tablet-13 {
    margin-left: 130px!important;
  }

  .margin-left-tablet-14 {
    margin-left: 140px!important;
  }

  .margin-left-tablet-15 {
    margin-left: 150px!important;
  }

  .margin-left-tablet-16 {
    margin-left: 160px!important;
  }

  .margin-left-tablet-17 {
    margin-left: 170px!important;
  }

  .margin-left-tablet-18 {
    margin-left: 180px!important;
  }

  .margin-left-tablet-19 {
    margin-left: 190px!important;
  }

  .margin-left-tablet-20 {
    margin-left: 200px!important;
  }
}

@media (max-width:767px) {
  .padding-phablet-0 {
    padding: 0!important;
  }

  .padding-phablet-1 {
    padding: 10px!important;
  }

  .padding-phablet-2 {
    padding: 20px!important;
  }

  .padding-phablet-3 {
    padding: 30px!important;
  }

  .padding-phablet-4 {
    padding: 40px!important;
  }

  .padding-phablet-5 {
    padding: 50px!important;
  }

  .padding-phablet-6 {
    padding: 60px!important;
  }

  .padding-phablet-7 {
    padding: 70px!important;
  }

  .padding-phablet-8 {
    padding: 80px!important;
  }

  .padding-phablet-9 {
    padding: 90px!important;
  }

  .padding-phablet-10 {
    padding: 100px!important;
  }

  .padding-phablet-11 {
    padding: 110px!important;
  }

  .padding-phablet-12 {
    padding: 120px!important;
  }

  .padding-phablet-13 {
    padding: 130px!important;
  }

  .padding-phablet-14 {
    padding: 140px!important;
  }

  .padding-phablet-15 {
    padding: 150px!important;
  }

  .padding-phablet-16 {
    padding: 160px!important;
  }

  .padding-phablet-17 {
    padding: 170px!important;
  }

  .padding-phablet-18 {
    padding: 180px!important;
  }

  .padding-phablet-19 {
    padding: 190px!important;
  }

  .padding-phablet-20 {
    padding: 200px!important;
  }

  .padding-top-phablet-0 {
    padding-top: 0!important;
  }

  .padding-top-phablet-1 {
    padding-top: 10px!important;
  }

  .padding-top-phablet-2 {
    padding-top: 20px!important;
  }

  .padding-top-phablet-3 {
    padding-top: 30px!important;
  }

  .padding-top-phablet-4 {
    padding-top: 40px!important;
  }

  .padding-top-phablet-5 {
    padding-top: 50px!important;
  }

  .padding-top-phablet-6 {
    padding-top: 60px!important;
  }

  .padding-top-phablet-7 {
    padding-top: 70px!important;
  }

  .padding-top-phablet-8 {
    padding-top: 80px!important;
  }

  .padding-top-phablet-9 {
    padding-top: 90px!important;
  }

  .padding-top-phablet-10 {
    padding-top: 100px!important;
  }

  .padding-top-phablet-11 {
    padding-top: 110px!important;
  }

  .padding-top-phablet-12 {
    padding-top: 120px!important;
  }

  .padding-top-phablet-13 {
    padding-top: 130px!important;
  }

  .padding-top-phablet-14 {
    padding-top: 140px!important;
  }

  .padding-top-phablet-15 {
    padding-top: 150px!important;
  }

  .padding-top-phablet-16 {
    padding-top: 160px!important;
  }

  .padding-top-phablet-17 {
    padding-top: 170px!important;
  }

  .padding-top-phablet-18 {
    padding-top: 180px!important;
  }

  .padding-top-phablet-19 {
    padding-top: 190px!important;
  }

  .padding-top-phablet-20 {
    padding-top: 200px!important;
  }

  .padding-right-phablet-0 {
    padding-right: 0!important;
  }

  .padding-right-phablet-1 {
    padding-right: 10px!important;
  }

  .padding-right-phablet-2 {
    padding-right: 20px!important;
  }

  .padding-right-phablet-3 {
    padding-right: 30px!important;
  }

  .padding-right-phablet-4 {
    padding-right: 40px!important;
  }

  .padding-right-phablet-5 {
    padding-right: 50px!important;
  }

  .padding-right-phablet-6 {
    padding-right: 60px!important;
  }

  .padding-right-phablet-7 {
    padding-right: 70px!important;
  }

  .padding-right-phablet-8 {
    padding-right: 80px!important;
  }

  .padding-right-phablet-9 {
    padding-right: 90px!important;
  }

  .padding-right-phablet-10 {
    padding-right: 100px!important;
  }

  .padding-right-phablet-11 {
    padding-right: 110px!important;
  }

  .padding-right-phablet-12 {
    padding-right: 120px!important;
  }

  .padding-right-phablet-13 {
    padding-right: 130px!important;
  }

  .padding-right-phablet-14 {
    padding-right: 140px!important;
  }

  .padding-right-phablet-15 {
    padding-right: 150px!important;
  }

  .padding-right-phablet-16 {
    padding-right: 160px!important;
  }

  .padding-right-phablet-17 {
    padding-right: 170px!important;
  }

  .padding-right-phablet-18 {
    padding-right: 180px!important;
  }

  .padding-right-phablet-19 {
    padding-right: 190px!important;
  }

  .padding-right-phablet-20 {
    padding-right: 200px!important;
  }

  .padding-bottom-phablet-0 {
    padding-bottom: 0!important;
  }

  .padding-bottom-phablet-1 {
    padding-bottom: 10px!important;
  }

  .padding-bottom-phablet-2 {
    padding-bottom: 20px!important;
  }

  .padding-bottom-phablet-3 {
    padding-bottom: 30px!important;
  }

  .padding-bottom-phablet-4 {
    padding-bottom: 40px!important;
  }

  .padding-bottom-phablet-5 {
    padding-bottom: 50px!important;
  }

  .padding-bottom-phablet-6 {
    padding-bottom: 60px!important;
  }

  .padding-bottom-phablet-7 {
    padding-bottom: 70px!important;
  }

  .padding-bottom-phablet-8 {
    padding-bottom: 80px!important;
  }

  .padding-bottom-phablet-9 {
    padding-bottom: 90px!important;
  }

  .padding-bottom-phablet-10 {
    padding-bottom: 100px!important;
  }

  .padding-bottom-phablet-11 {
    padding-bottom: 110px!important;
  }

  .padding-bottom-phablet-12 {
    padding-bottom: 120px!important;
  }

  .padding-bottom-phablet-13 {
    padding-bottom: 130px!important;
  }

  .padding-bottom-phablet-14 {
    padding-bottom: 140px!important;
  }

  .padding-bottom-phablet-15 {
    padding-bottom: 150px!important;
  }

  .padding-bottom-phablet-16 {
    padding-bottom: 160px!important;
  }

  .padding-bottom-phablet-17 {
    padding-bottom: 170px!important;
  }

  .padding-bottom-phablet-18 {
    padding-bottom: 180px!important;
  }

  .padding-bottom-phablet-19 {
    padding-bottom: 190px!important;
  }

  .padding-bottom-phablet-20 {
    padding-bottom: 200px!important;
  }

  .padding-left-phablet-0 {
    padding-left: 0!important;
  }

  .padding-left-phablet-1 {
    padding-left: 10px!important;
  }

  .padding-left-phablet-2 {
    padding-left: 20px!important;
  }

  .padding-left-phablet-3 {
    padding-left: 30px!important;
  }

  .padding-left-phablet-4 {
    padding-left: 40px!important;
  }

  .padding-left-phablet-5 {
    padding-left: 50px!important;
  }

  .padding-left-phablet-6 {
    padding-left: 60px!important;
  }

  .padding-left-phablet-7 {
    padding-left: 70px!important;
  }

  .padding-left-phablet-8 {
    padding-left: 80px!important;
  }

  .padding-left-phablet-9 {
    padding-left: 90px!important;
  }

  .padding-left-phablet-10 {
    padding-left: 100px!important;
  }

  .padding-left-phablet-11 {
    padding-left: 110px!important;
  }

  .padding-left-phablet-12 {
    padding-left: 120px!important;
  }

  .padding-left-phablet-13 {
    padding-left: 130px!important;
  }

  .padding-left-phablet-14 {
    padding-left: 140px!important;
  }

  .padding-left-phablet-15 {
    padding-left: 150px!important;
  }

  .padding-left-phablet-16 {
    padding-left: 160px!important;
  }

  .padding-left-phablet-17 {
    padding-left: 170px!important;
  }

  .padding-left-phablet-18 {
    padding-left: 180px!important;
  }

  .padding-left-phablet-19 {
    padding-left: 190px!important;
  }

  .padding-left-phablet-20 {
    padding-left: 200px!important;
  }

  .margin-phablet-0 {
    margin: 0!important;
  }

  .margin-phablet-1 {
    margin: 10px!important;
  }

  .margin-phablet-2 {
    margin: 20px!important;
  }

  .margin-phablet-3 {
    margin: 30px!important;
  }

  .margin-phablet-4 {
    margin: 40px!important;
  }

  .margin-phablet-5 {
    margin: 50px!important;
  }

  .margin-phablet-6 {
    margin: 60px!important;
  }

  .margin-phablet-7 {
    margin: 70px!important;
  }

  .margin-phablet-8 {
    margin: 80px!important;
  }

  .margin-phablet-9 {
    margin: 90px!important;
  }

  .margin-phablet-10 {
    margin: 100px!important;
  }

  .margin-phablet-11 {
    margin: 110px!important;
  }

  .margin-phablet-12 {
    margin: 120px!important;
  }

  .margin-phablet-13 {
    margin: 130px!important;
  }

  .margin-phablet-14 {
    margin: 140px!important;
  }

  .margin-phablet-15 {
    margin: 150px!important;
  }

  .margin-phablet-16 {
    margin: 160px!important;
  }

  .margin-phablet-17 {
    margin: 170px!important;
  }

  .margin-phablet-18 {
    margin: 180px!important;
  }

  .margin-phablet-19 {
    margin: 190px!important;
  }

  .margin-phablet-20 {
    margin: 200px!important;
  }

  .margin-top-phablet-0 {
    margin-top: 0!important;
  }

  .margin-top-phablet-1 {
    margin-top: 10px!important;
  }

  .margin-top-phablet-2 {
    margin-top: 20px!important;
  }

  .margin-top-phablet-3 {
    margin-top: 30px!important;
  }

  .margin-top-phablet-4 {
    margin-top: 40px!important;
  }

  .margin-top-phablet-5 {
    margin-top: 50px!important;
  }

  .margin-top-phablet-6 {
    margin-top: 60px!important;
  }

  .margin-top-phablet-7 {
    margin-top: 70px!important;
  }

  .margin-top-phablet-8 {
    margin-top: 80px!important;
  }

  .margin-top-phablet-9 {
    margin-top: 90px!important;
  }

  .margin-top-phablet-10 {
    margin-top: 100px!important;
  }

  .margin-top-phablet-11 {
    margin-top: 110px!important;
  }

  .margin-top-phablet-12 {
    margin-top: 120px!important;
  }

  .margin-top-phablet-13 {
    margin-top: 130px!important;
  }

  .margin-top-phablet-14 {
    margin-top: 140px!important;
  }

  .margin-top-phablet-15 {
    margin-top: 150px!important;
  }

  .margin-top-phablet-16 {
    margin-top: 160px!important;
  }

  .margin-top-phablet-17 {
    margin-top: 170px!important;
  }

  .margin-top-phablet-18 {
    margin-top: 180px!important;
  }

  .margin-top-phablet-19 {
    margin-top: 190px!important;
  }

  .margin-top-phablet-20 {
    margin-top: 200px!important;
  }

  .margin-right-phablet-0 {
    margin-right: 0!important;
  }

  .margin-right-phablet-1 {
    margin-right: 10px!important;
  }

  .margin-right-phablet-2 {
    margin-right: 20px!important;
  }

  .margin-right-phablet-3 {
    margin-right: 30px!important;
  }

  .margin-right-phablet-4 {
    margin-right: 40px!important;
  }

  .margin-right-phablet-5 {
    margin-right: 50px!important;
  }

  .margin-right-phablet-6 {
    margin-right: 60px!important;
  }

  .margin-right-phablet-7 {
    margin-right: 70px!important;
  }

  .margin-right-phablet-8 {
    margin-right: 80px!important;
  }

  .margin-right-phablet-9 {
    margin-right: 90px!important;
  }

  .margin-right-phablet-10 {
    margin-right: 100px!important;
  }

  .margin-right-phablet-11 {
    margin-right: 110px!important;
  }

  .margin-right-phablet-12 {
    margin-right: 120px!important;
  }

  .margin-right-phablet-13 {
    margin-right: 130px!important;
  }

  .margin-right-phablet-14 {
    margin-right: 140px!important;
  }

  .margin-right-phablet-15 {
    margin-right: 150px!important;
  }

  .margin-right-phablet-16 {
    margin-right: 160px!important;
  }

  .margin-right-phablet-17 {
    margin-right: 170px!important;
  }

  .margin-right-phablet-18 {
    margin-right: 180px!important;
  }

  .margin-right-phablet-19 {
    margin-right: 190px!important;
  }

  .margin-right-phablet-20 {
    margin-right: 200px!important;
  }

  .margin-bottom-phablet-0 {
    margin-bottom: 0!important;
  }

  .margin-bottom-phablet-1 {
    margin-bottom: 10px!important;
  }

  .margin-bottom-phablet-2 {
    margin-bottom: 20px!important;
  }

  .margin-bottom-phablet-3 {
    margin-bottom: 30px!important;
  }

  .margin-bottom-phablet-4 {
    margin-bottom: 40px!important;
  }

  .margin-bottom-phablet-5 {
    margin-bottom: 50px!important;
  }

  .margin-bottom-phablet-6 {
    margin-bottom: 60px!important;
  }

  .margin-bottom-phablet-7 {
    margin-bottom: 70px!important;
  }

  .margin-bottom-phablet-8 {
    margin-bottom: 80px!important;
  }

  .margin-bottom-phablet-9 {
    margin-bottom: 90px!important;
  }

  .margin-bottom-phablet-10 {
    margin-bottom: 100px!important;
  }

  .margin-bottom-phablet-11 {
    margin-bottom: 110px!important;
  }

  .margin-bottom-phablet-12 {
    margin-bottom: 120px!important;
  }

  .margin-bottom-phablet-13 {
    margin-bottom: 130px!important;
  }

  .margin-bottom-phablet-14 {
    margin-bottom: 140px!important;
  }

  .margin-bottom-phablet-15 {
    margin-bottom: 150px!important;
  }

  .margin-bottom-phablet-16 {
    margin-bottom: 160px!important;
  }

  .margin-bottom-phablet-17 {
    margin-bottom: 170px!important;
  }

  .margin-bottom-phablet-18 {
    margin-bottom: 180px!important;
  }

  .margin-bottom-phablet-19 {
    margin-bottom: 190px!important;
  }

  .margin-bottom-phablet-20 {
    margin-bottom: 200px!important;
  }

  .margin-left-phablet-0 {
    margin-left: 0!important;
  }

  .margin-left-phablet-1 {
    margin-left: 10px!important;
  }

  .margin-left-phablet-2 {
    margin-left: 20px!important;
  }

  .margin-left-phablet-3 {
    margin-left: 30px!important;
  }

  .margin-left-phablet-4 {
    margin-left: 40px!important;
  }

  .margin-left-phablet-5 {
    margin-left: 50px!important;
  }

  .margin-left-phablet-6 {
    margin-left: 60px!important;
  }

  .margin-left-phablet-7 {
    margin-left: 70px!important;
  }

  .margin-left-phablet-8 {
    margin-left: 80px!important;
  }

  .margin-left-phablet-9 {
    margin-left: 90px!important;
  }

  .margin-left-phablet-10 {
    margin-left: 100px!important;
  }

  .margin-left-phablet-11 {
    margin-left: 110px!important;
  }

  .margin-left-phablet-12 {
    margin-left: 120px!important;
  }

  .margin-left-phablet-13 {
    margin-left: 130px!important;
  }

  .margin-left-phablet-14 {
    margin-left: 140px!important;
  }

  .margin-left-phablet-15 {
    margin-left: 150px!important;
  }

  .margin-left-phablet-16 {
    margin-left: 160px!important;
  }

  .margin-left-phablet-17 {
    margin-left: 170px!important;
  }

  .margin-left-phablet-18 {
    margin-left: 180px!important;
  }

  .margin-left-phablet-19 {
    margin-left: 190px!important;
  }

  .margin-left-phablet-20 {
    margin-left: 200px!important;
  }
}

@media (max-width:435px) {
  .padding-phone-0 {
    padding: 0!important;
  }

  .padding-phone-1 {
    padding: 10px!important;
  }

  .padding-phone-2 {
    padding: 20px!important;
  }

  .padding-phone-3 {
    padding: 30px!important;
  }

  .padding-phone-4 {
    padding: 40px!important;
  }

  .padding-phone-5 {
    padding: 50px!important;
  }

  .padding-phone-6 {
    padding: 60px!important;
  }

  .padding-phone-7 {
    padding: 70px!important;
  }

  .padding-phone-8 {
    padding: 80px!important;
  }

  .padding-phone-9 {
    padding: 90px!important;
  }

  .padding-phone-10 {
    padding: 100px!important;
  }

  .padding-phone-11 {
    padding: 110px!important;
  }

  .padding-phone-12 {
    padding: 120px!important;
  }

  .padding-phone-13 {
    padding: 130px!important;
  }

  .padding-phone-14 {
    padding: 140px!important;
  }

  .padding-phone-15 {
    padding: 150px!important;
  }

  .padding-phone-16 {
    padding: 160px!important;
  }

  .padding-phone-17 {
    padding: 170px!important;
  }

  .padding-phone-18 {
    padding: 180px!important;
  }

  .padding-phone-19 {
    padding: 190px!important;
  }

  .padding-phone-20 {
    padding: 200px!important;
  }

  .padding-top-phone-0 {
    padding-top: 0!important;
  }

  .padding-top-phone-1 {
    padding-top: 10px!important;
  }

  .padding-top-phone-2 {
    padding-top: 20px!important;
  }

  .padding-top-phone-3 {
    padding-top: 30px!important;
  }

  .padding-top-phone-4 {
    padding-top: 40px!important;
  }

  .padding-top-phone-5 {
    padding-top: 50px!important;
  }

  .padding-top-phone-6 {
    padding-top: 60px!important;
  }

  .padding-top-phone-7 {
    padding-top: 70px!important;
  }

  .padding-top-phone-8 {
    padding-top: 80px!important;
  }

  .padding-top-phone-9 {
    padding-top: 90px!important;
  }

  .padding-top-phone-10 {
    padding-top: 100px!important;
  }

  .padding-top-phone-11 {
    padding-top: 110px!important;
  }

  .padding-top-phone-12 {
    padding-top: 120px!important;
  }

  .padding-top-phone-13 {
    padding-top: 130px!important;
  }

  .padding-top-phone-14 {
    padding-top: 140px!important;
  }

  .padding-top-phone-15 {
    padding-top: 150px!important;
  }

  .padding-top-phone-16 {
    padding-top: 160px!important;
  }

  .padding-top-phone-17 {
    padding-top: 170px!important;
  }

  .padding-top-phone-18 {
    padding-top: 180px!important;
  }

  .padding-top-phone-19 {
    padding-top: 190px!important;
  }

  .padding-top-phone-20 {
    padding-top: 200px!important;
  }

  .padding-right-phone-0 {
    padding-right: 0!important;
  }

  .padding-right-phone-1 {
    padding-right: 10px!important;
  }

  .padding-right-phone-2 {
    padding-right: 20px!important;
  }

  .padding-right-phone-3 {
    padding-right: 30px!important;
  }

  .padding-right-phone-4 {
    padding-right: 40px!important;
  }

  .padding-right-phone-5 {
    padding-right: 50px!important;
  }

  .padding-right-phone-6 {
    padding-right: 60px!important;
  }

  .padding-right-phone-7 {
    padding-right: 70px!important;
  }

  .padding-right-phone-8 {
    padding-right: 80px!important;
  }

  .padding-right-phone-9 {
    padding-right: 90px!important;
  }

  .padding-right-phone-10 {
    padding-right: 100px!important;
  }

  .padding-right-phone-11 {
    padding-right: 110px!important;
  }

  .padding-right-phone-12 {
    padding-right: 120px!important;
  }

  .padding-right-phone-13 {
    padding-right: 130px!important;
  }

  .padding-right-phone-14 {
    padding-right: 140px!important;
  }

  .padding-right-phone-15 {
    padding-right: 150px!important;
  }

  .padding-right-phone-16 {
    padding-right: 160px!important;
  }

  .padding-right-phone-17 {
    padding-right: 170px!important;
  }

  .padding-right-phone-18 {
    padding-right: 180px!important;
  }

  .padding-right-phone-19 {
    padding-right: 190px!important;
  }

  .padding-right-phone-20 {
    padding-right: 200px!important;
  }

  .padding-bottom-phone-0 {
    padding-bottom: 0!important;
  }

  .padding-bottom-phone-1 {
    padding-bottom: 10px!important;
  }

  .padding-bottom-phone-2 {
    padding-bottom: 20px!important;
  }

  .padding-bottom-phone-3 {
    padding-bottom: 30px!important;
  }

  .padding-bottom-phone-4 {
    padding-bottom: 40px!important;
  }

  .padding-bottom-phone-5 {
    padding-bottom: 50px!important;
  }

  .padding-bottom-phone-6 {
    padding-bottom: 60px!important;
  }

  .padding-bottom-phone-7 {
    padding-bottom: 70px!important;
  }

  .padding-bottom-phone-8 {
    padding-bottom: 80px!important;
  }

  .padding-bottom-phone-9 {
    padding-bottom: 90px!important;
  }

  .padding-bottom-phone-10 {
    padding-bottom: 100px!important;
  }

  .padding-bottom-phone-11 {
    padding-bottom: 110px!important;
  }

  .padding-bottom-phone-12 {
    padding-bottom: 120px!important;
  }

  .padding-bottom-phone-13 {
    padding-bottom: 130px!important;
  }

  .padding-bottom-phone-14 {
    padding-bottom: 140px!important;
  }

  .padding-bottom-phone-15 {
    padding-bottom: 150px!important;
  }

  .padding-bottom-phone-16 {
    padding-bottom: 160px!important;
  }

  .padding-bottom-phone-17 {
    padding-bottom: 170px!important;
  }

  .padding-bottom-phone-18 {
    padding-bottom: 180px!important;
  }

  .padding-bottom-phone-19 {
    padding-bottom: 190px!important;
  }

  .padding-bottom-phone-20 {
    padding-bottom: 200px!important;
  }

  .padding-left-phone-0 {
    padding-left: 0!important;
  }

  .padding-left-phone-1 {
    padding-left: 10px!important;
  }

  .padding-left-phone-2 {
    padding-left: 20px!important;
  }

  .padding-left-phone-3 {
    padding-left: 30px!important;
  }

  .padding-left-phone-4 {
    padding-left: 40px!important;
  }

  .padding-left-phone-5 {
    padding-left: 50px!important;
  }

  .padding-left-phone-6 {
    padding-left: 60px!important;
  }

  .padding-left-phone-7 {
    padding-left: 70px!important;
  }

  .padding-left-phone-8 {
    padding-left: 80px!important;
  }

  .padding-left-phone-9 {
    padding-left: 90px!important;
  }

  .padding-left-phone-10 {
    padding-left: 100px!important;
  }

  .padding-left-phone-11 {
    padding-left: 110px!important;
  }

  .padding-left-phone-12 {
    padding-left: 120px!important;
  }

  .padding-left-phone-13 {
    padding-left: 130px!important;
  }

  .padding-left-phone-14 {
    padding-left: 140px!important;
  }

  .padding-left-phone-15 {
    padding-left: 150px!important;
  }

  .padding-left-phone-16 {
    padding-left: 160px!important;
  }

  .padding-left-phone-17 {
    padding-left: 170px!important;
  }

  .padding-left-phone-18 {
    padding-left: 180px!important;
  }

  .padding-left-phone-19 {
    padding-left: 190px!important;
  }

  .padding-left-phone-20 {
    padding-left: 200px!important;
  }

  .margin-phone-0 {
    margin: 0!important;
  }

  .margin-phone-1 {
    margin: 10px!important;
  }

  .margin-phone-2 {
    margin: 20px!important;
  }

  .margin-phone-3 {
    margin: 30px!important;
  }

  .margin-phone-4 {
    margin: 40px!important;
  }

  .margin-phone-5 {
    margin: 50px!important;
  }

  .margin-phone-6 {
    margin: 60px!important;
  }

  .margin-phone-7 {
    margin: 70px!important;
  }

  .margin-phone-8 {
    margin: 80px!important;
  }

  .margin-phone-9 {
    margin: 90px!important;
  }

  .margin-phone-10 {
    margin: 100px!important;
  }

  .margin-phone-11 {
    margin: 110px!important;
  }

  .margin-phone-12 {
    margin: 120px!important;
  }

  .margin-phone-13 {
    margin: 130px!important;
  }

  .margin-phone-14 {
    margin: 140px!important;
  }

  .margin-phone-15 {
    margin: 150px!important;
  }

  .margin-phone-16 {
    margin: 160px!important;
  }

  .margin-phone-17 {
    margin: 170px!important;
  }

  .margin-phone-18 {
    margin: 180px!important;
  }

  .margin-phone-19 {
    margin: 190px!important;
  }

  .margin-phone-20 {
    margin: 200px!important;
  }

  .margin-top-phone-0 {
    margin-top: 0!important;
  }

  .margin-top-phone-1 {
    margin-top: 10px!important;
  }

  .margin-top-phone-2 {
    margin-top: 20px!important;
  }

  .margin-top-phone-3 {
    margin-top: 30px!important;
  }

  .margin-top-phone-4 {
    margin-top: 40px!important;
  }

  .margin-top-phone-5 {
    margin-top: 50px!important;
  }

  .margin-top-phone-6 {
    margin-top: 60px!important;
  }

  .margin-top-phone-7 {
    margin-top: 70px!important;
  }

  .margin-top-phone-8 {
    margin-top: 80px!important;
  }

  .margin-top-phone-9 {
    margin-top: 90px!important;
  }

  .margin-top-phone-10 {
    margin-top: 100px!important;
  }

  .margin-top-phone-11 {
    margin-top: 110px!important;
  }

  .margin-top-phone-12 {
    margin-top: 120px!important;
  }

  .margin-top-phone-13 {
    margin-top: 130px!important;
  }

  .margin-top-phone-14 {
    margin-top: 140px!important;
  }

  .margin-top-phone-15 {
    margin-top: 150px!important;
  }

  .margin-top-phone-16 {
    margin-top: 160px!important;
  }

  .margin-top-phone-17 {
    margin-top: 170px!important;
  }

  .margin-top-phone-18 {
    margin-top: 180px!important;
  }

  .margin-top-phone-19 {
    margin-top: 190px!important;
  }

  .margin-top-phone-20 {
    margin-top: 200px!important;
  }

  .margin-right-phone-0 {
    margin-right: 0!important;
  }

  .margin-right-phone-1 {
    margin-right: 10px!important;
  }

  .margin-right-phone-2 {
    margin-right: 20px!important;
  }

  .margin-right-phone-3 {
    margin-right: 30px!important;
  }

  .margin-right-phone-4 {
    margin-right: 40px!important;
  }

  .margin-right-phone-5 {
    margin-right: 50px!important;
  }

  .margin-right-phone-6 {
    margin-right: 60px!important;
  }

  .margin-right-phone-7 {
    margin-right: 70px!important;
  }

  .margin-right-phone-8 {
    margin-right: 80px!important;
  }

  .margin-right-phone-9 {
    margin-right: 90px!important;
  }

  .margin-right-phone-10 {
    margin-right: 100px!important;
  }

  .margin-right-phone-11 {
    margin-right: 110px!important;
  }

  .margin-right-phone-12 {
    margin-right: 120px!important;
  }

  .margin-right-phone-13 {
    margin-right: 130px!important;
  }

  .margin-right-phone-14 {
    margin-right: 140px!important;
  }

  .margin-right-phone-15 {
    margin-right: 150px!important;
  }

  .margin-right-phone-16 {
    margin-right: 160px!important;
  }

  .margin-right-phone-17 {
    margin-right: 170px!important;
  }

  .margin-right-phone-18 {
    margin-right: 180px!important;
  }

  .margin-right-phone-19 {
    margin-right: 190px!important;
  }

  .margin-right-phone-20 {
    margin-right: 200px!important;
  }

  .margin-bottom-phone-0 {
    margin-bottom: 0!important;
  }

  .margin-bottom-phone-1 {
    margin-bottom: 10px!important;
  }

  .margin-bottom-phone-2 {
    margin-bottom: 20px!important;
  }

  .margin-bottom-phone-3 {
    margin-bottom: 30px!important;
  }

  .margin-bottom-phone-4 {
    margin-bottom: 40px!important;
  }

  .margin-bottom-phone-5 {
    margin-bottom: 50px!important;
  }

  .margin-bottom-phone-6 {
    margin-bottom: 60px!important;
  }

  .margin-bottom-phone-7 {
    margin-bottom: 70px!important;
  }

  .margin-bottom-phone-8 {
    margin-bottom: 80px!important;
  }

  .margin-bottom-phone-9 {
    margin-bottom: 90px!important;
  }

  .margin-bottom-phone-10 {
    margin-bottom: 100px!important;
  }

  .margin-bottom-phone-11 {
    margin-bottom: 110px!important;
  }

  .margin-bottom-phone-12 {
    margin-bottom: 120px!important;
  }

  .margin-bottom-phone-13 {
    margin-bottom: 130px!important;
  }

  .margin-bottom-phone-14 {
    margin-bottom: 140px!important;
  }

  .margin-bottom-phone-15 {
    margin-bottom: 150px!important;
  }

  .margin-bottom-phone-16 {
    margin-bottom: 160px!important;
  }

  .margin-bottom-phone-17 {
    margin-bottom: 170px!important;
  }

  .margin-bottom-phone-18 {
    margin-bottom: 180px!important;
  }

  .margin-bottom-phone-19 {
    margin-bottom: 190px!important;
  }

  .margin-bottom-phone-20 {
    margin-bottom: 200px!important;
  }

  .margin-left-phone-0 {
    margin-left: 0!important;
  }

  .margin-left-phone-1 {
    margin-left: 10px!important;
  }

  .margin-left-phone-2 {
    margin-left: 20px!important;
  }

  .margin-left-phone-3 {
    margin-left: 30px!important;
  }

  .margin-left-phone-4 {
    margin-left: 40px!important;
  }

  .margin-left-phone-5 {
    margin-left: 50px!important;
  }

  .margin-left-phone-6 {
    margin-left: 60px!important;
  }

  .margin-left-phone-7 {
    margin-left: 70px!important;
  }

  .margin-left-phone-8 {
    margin-left: 80px!important;
  }

  .margin-left-phone-9 {
    margin-left: 90px!important;
  }

  .margin-left-phone-10 {
    margin-left: 100px!important;
  }

  .margin-left-phone-11 {
    margin-left: 110px!important;
  }

  .margin-left-phone-12 {
    margin-left: 120px!important;
  }

  .margin-left-phone-13 {
    margin-left: 130px!important;
  }

  .margin-left-phone-14 {
    margin-left: 140px!important;
  }

  .margin-left-phone-15 {
    margin-left: 150px!important;
  }

  .margin-left-phone-16 {
    margin-left: 160px!important;
  }

  .margin-left-phone-17 {
    margin-left: 170px!important;
  }

  .margin-left-phone-18 {
    margin-left: 180px!important;
  }

  .margin-left-phone-19 {
    margin-left: 190px!important;
  }

  .margin-left-phone-20 {
    margin-left: 200px!important;
  }
}

.pointer-events {
  pointer-events: all!important;
}

.disable-pointer-events {
  pointer-events: none!important;
}

.space {
  padding: 0 20px;
}

.cursorPointer,
.pointer {
  cursor: pointer;
}

.cursorZoomIn,
[data-action=zoom] {
  cursor: pointer;
  cursor: -moz-zoom-in!important;
  cursor: -webkit-zoom-in!important;
}

.cursorZoomOut,
.zoom-img img.zoom-img,
.zoom-img-wrap img.zoom-img {
  cursor: pointer;
  cursor: -moz-zoom-out!important;
  cursor: -webkit-zoom-out!important;
}

.cursorGrab {
  cursor: move;
  cursor: grab!important;
  cursor: -moz-grab!important;
  cursor: -webkit-grab!important;
}

.cursorGrab:active {
  cursor: grabbing!important;
  cursor: -moz-grabbing!important;
  cursor: -webkit-grabbing!important;
}

.pattern .background {
  background-repeat: repeat;
  background-size: auto;
}

.attachment-fixed {
  background-attachment: fixed!important;
  background-size: cover!important;
}

.disableClick {
  pointer-events: none;
}

.cover {
  background-size: cover!important;
}

.disableSelect,
.disableSelect *,
.noSelect,
.noSelect * {
  -webkit-touch-callout: none!important;
  user-select: none!important;
}

.enableSelect,
.enableSelect *,
.selectable,
.selectable * {
  -webkit-touch-callout: auto!important;
  user-select: auto!important;
}

.clearBoth:after {
  content: "";
  clear: both;
  display: table;
}

@charset "UTF-8";

.dialog,
body,
html {
  -webkit-tap-highlight-color: transparent;
}

body,
html,
img {
  max-width: 100%;
}

.button.actionButton svg,
.button.play svg,
.button:not(.stroke) svg,
.slide.whiteSlide .button.actionButton svg,
.slides {
  fill: #fff;
}

.button svg,
.button svg * {
  pointer-events: none!important;
}

.material-icons,
.slides {
  -webkit-font-smoothing: antialiased;
}

.button,
.container .wrap,
.slides-form.center input,
.slides-form.center textarea {
  text-align: center;
}

.button,
.material-icons,
.music-96 .sc-trackslist a,
.navigation li[data-title]:before,
.nobr,
.nowrap,
.panel .sections .menu,
.panel .sections>div {
  white-space: nowrap;
}

a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
hr,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  border: 0;
  vertical-align: baseline;
  margin: 0;
  padding: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

.button,
.button.actionButton,
.dot,
.dot:after,
.material-icons,
img {
  display: inline-block;
}

li,
ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:after,
blockquote:before,
q:after,
q:before {
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

b,
strong {
  font-weight: 600;
}

html {
  position: static!important;
  top: 0!important;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

*,
:after,
:before {
  box-sizing: inherit;
}

body {
  position: absolute;
  width: 100%;
  height: 100%;
}

body,
html {
  overflow-x: hidden;
}

html.scrollable,
html.scrollable body {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.button,
.content,
.slide {
  overflow: hidden;
}

img.round {
  border-radius: 999px;
}

img.rounded {
  border-radius: 6px;
}

.slides {
  color: #fff;
  font-family: Roboto,sans-serif;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  background: #111;
}

.slides.bodyWhite {
  background: #fff;
}

.slides.desktopSwipe {
  cursor: -webkit-grab;
}

.slides.desktopSwipe:active {
  cursor: -webkit-grabbing;
}

.slides.desktopSwipe .slide .container .wrap {
  cursor: inherit;
}

.button,
.dropdownTrigger,
.helpBubble,
.popupTrigger,
.sidebarTrigger,
.videoThumbnail,
a {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
  transition: .35s;
}

a.underline {
  text-decoration: underline;
}

.button,
.dialog li {
  text-decoration: none;
}

a:hover {
  transition: .15s;
  opacity: .8;
}

.h1,
h1 {
  font-size: 42px;
  line-height: 1.285;
  font-weight: 300;
  margin-bottom: 20px;
  letter-spacing: -.036em;
}

.h1.big,
h1.big {
  font-size: 58px;
  line-height: 1;
  font-weight: 100;
}

.h1.huge,
h1.huge {
  font-size: 64px;
  line-height: 1.218751;
  letter-spacing: -.04em;
  margin-bottom: 40px;
  font-weight: 100;
}

.h2,
.h3,
h2,
h3 {
  font-weight: 400;
}

.h1.small,
h1.small {
  font-size: 46px;
}

.h1.micro,
h1.micro {
  font-size: 34px;
}

.h2,
h2 {
  font-size: 35px;
  line-height: 1.17;
  margin-bottom: 15px;
}

.h2.small,
h2.small {
  font-size: 28px;
}

.h2.micro,
h2.micro {
  font-size: 19px;
}

.h2.huge,
h2.huge {
  font-size: 42px;
}

.h3,
h3 {
  font-size: 20px;
  margin-bottom: 12px;
}

.h3.large,
h3.large {
  font-size: 32px;
}

.h3.big,
h3.big {
  font-size: 24px;
}

.h3.small,
h3.small {
  font-size: 20px;
}

.h3.micro,
h3.micro {
  font-size: 16px;
}

.h3+.h1,
.h3+h1,
h3+.h1,
h3+h1 {
  margin-top: 30px;
}

.h4,
h4 {
  font-size: 18px;
  margin-bottom: 10px;
}

.h5,
h5 {
  font-size: 16px;
}

.h6,
h6 {
  font-size: 14px;
}

.p,
blockquote,
p {
  font-size: 22px;
  line-height: 1.6363636364;
  margin-bottom: 30px;
  font-weight: 300;
}

.p.hero,
blockquote.hero,
p.hero {
  font-size: 28px;
  line-height: 1.5;
  margin-bottom: 25px;
}

.p.large,
blockquote.large,
p.large {
  font-size: 32px;
  line-height: 1.4;
}

.p.small,
blockquote.small,
p.small {
  font-size: 18px;
  line-height: 1.36;
  margin-bottom: 20px;
}

.p.tiny,
blockquote.tiny,
p.tiny {
  font-size: 16px;
  line-height: 1.625;
  margin-bottom: 12px;
  font-weight: 400;
}

.p.micro,
blockquote.micro,
p.micro {
  font-size: 14px;
  line-height: 1.5714;
  margin-bottom: 20px;
  margin-top: 2px;
}

blockquote {
  padding-left: 2em;
  border-left: 2px solid;
}

small {
  font-size: 17px;
  line-height: 1.3;
}

small .small {
  font-size: 14px;
  line-height: 1.28;
}

.list.circle li {
  list-style-type: circle;
}

.list.disc li {
  list-style-type: disc;
}

.list.square li {
  list-style-type: square;
}

@media (max-width:1023px) {
  .h1,
  .h1.big,
  .h1.huge,
  h1,
  h1.big,
  h1.huge {
    font-size: 40px;
    margin-bottom: 20px;
  }

  p.hero {
    font-size: 22px;
  }

  .h1.small,
  h1.small {
    font-size: 32px;
  }

  .mobileCrop {
    margin: 0!important;
  }

  .mobileCropBottom {
    margin-bottom: 0!important;
  }

  .mobileCropTop {
    margin-top: 0!important;
  }

  .mobileCropLeft {
    margin-left: 0!important;
  }

  .mobileCropRight {
    margin-right: 0!important;
  }
}

@media (max-width:319px) {
  .h1.big,
  .h1.huge,
  h1.big,
  h1.huge {
    font-size: 32px;
  }
}

.button {
  border-radius: 4px;
  padding: 16px 24px 17px;
  color: #fff;
  border: none;
  outline: 0;
  background: #202020;
  font-size: 16px;
  font-weight: 500;
  vertical-align: top;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  letter-spacing: normal!important;
  position: relative;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
  -webkit-appearance: none;
  margin-bottom: 10px;
  transition: .3s;
  -webkit-user-select: none!important;
  -moz-user-select: none!important;
  -ms-user-select: none!important;
  user-select: none!important;
}

.content,
.slide.active {
  -webkit-backface-visibility: hidden;
}

.popup .button,
.slide .button {
  margin-left: 5px;
  margin-right: 5px;
}

.popup .button.small,
.slide .button.small {
  margin-left: 4px;
  margin-right: 4px;
}

.button.wide {
  margin-left: 0!important;
  margin-right: 0!important;
}

.button .material-icons {
  vertical-align: bottom;
  margin-top: -5px;
  margin-bottom: -2px;
  margin-right: 8px;
  -webkit-user-select: none!important;
  -moz-user-select: none!important;
  -ms-user-select: none!important;
  user-select: none!important;
}

.button .material-icons.small {
  font-size: 18px;
  margin: 0 6px 0 0;
}

.button .material-icons.right {
  margin-left: 11px;
  margin-right: 0;
}

.button svg {
  width: 22px;
  height: 22px;
  margin-top: -3px;
  top: 2px;
  vertical-align: bottom;
  margin-right: 14px;
  position: relative;
}

.button svg.right {
  margin-right: 0;
  margin-left: 14px;
}

.button.actionButton {
  height: 42px;
  width: 42px;
  padding: 12px;
  border-radius: 25px;
  z-index: 999;
  background: rgba(0,0,0,.3);
  line-height: 1;
  box-shadow: 0 0 0 1px rgba(255,255,255,.05);
  cursor: pointer;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  vertical-align: top;
}

.button.actionButton svg {
  width: 18px;
  height: 18px;
}

.button.actionButton .material-icons {
  margin: 0;
  position: relative;
  left: -3px;
  top: -3px;
  font-size: 24px;
}

.button.actionButton.big {
  width: 50px;
  height: 50px;
  padding: 16px;
}

.button.actionButton.big .material-icons {
  font-size: 24px;
}

.button.actionButton.big svg {
  width: 22px;
  height: 22px;
  left: -2px;
  top: 0;
}

.button.actionButton.stroke {
  box-shadow: none;
  padding: 10px;
}

.button.actionButton:hover:not(:active) {
  -webkit-transform: translateY(0)!important;
  transform: translateY(0)!important;
}

.button.actionButton.rounded {
  border-radius: 6px;
}

.button.actionButton.sound [class*=sound-] {
  position: absolute;
  opacity: 0;
  transition: .5s;
  left: 13px;
  top: 16px;
}

.button.actionButton.sound.stroke [class*=sound-] {
  left: 11px;
  top: 14px;
}

.button.actionButton.sound.playing .sound-on,
.button.actionButton.sound:not(.playing) .sound-off {
  opacity: 1;
}

.button.actionButton.transparent {
  background-color: transparent;
}

.button:hover {
  box-shadow: 0 6px 7px 0 rgba(0,0,0,.15),0 0 5px 0 rgba(0,0,0,.1);
  opacity: 1;
  -webkit-transform: translateY(-2px)!important;
  transform: translateY(-2px)!important;
  transition: .35s!important;
}

.button:hover:after {
  opacity: .5;
}

.button:active {
  box-shadow: 0 3px 6px 0 rgba(0,0,0,.1),0 0 10px 0 rgba(0,0,0,.1),0 1px 4px -1px rgba(0,0,0,.1);
  -webkit-transform: translateY(0)!important;
  transform: translateY(0)!important;
  transition: .35s!important;
}

.button.shade:after,
.dot:after {
  transition: .25s;
  content: "";
}

.button:active:after {
  opacity: 1;
}

.button.uppercase {
  font-size: 15px;
  padding-top: 17px;
  padding-bottom: 17px;
}

.button.lowercase {
  text-transform: lowercase;
  letter-spacing: 0;
  font-weight: 300;
}

.button.round {
  border-radius: 99px;
  padding-left: 28px;
  padding-right: 28px;
}

.button.stroke,
.button.thin-stroke {
  background-color: transparent!important;
  padding: 14px 22px 15px;
  color: #202020;
}

.button.rounded {
  border-radius: 6px;
}

.button.rectangular {
  border-radius: 1px;
}

.button.square {
  border-radius: 0;
}

.button.thin-stroke {
  font-weight: 300;
  border: 1px solid;
}

.slide.whiteSlide .button.thin-stroke {
  color: #202020;
}

.button.stroke {
  border: 2px solid;
}

.slide.whiteSlide .button.stroke {
  color: #202020;
}

.button.stroke.round {
  padding-left: 26px;
  padding-right: 26px;
}

.button.stroke.uppercase {
  padding-top: 15px;
  padding-bottom: 15px;
}

.button.stroke.uppercase svg {
  margin-bottom: -2px;
}

.button.stroke.uppercase.small {
  padding: 11px 15px;
}

.button.stroke.small {
  border: 1px solid;
  padding-top: 9px;
  padding-bottom: 9px;
}

@media (min-width:768px) {
  .button.stroke.big {
    padding: 19px 30px;
  }

  .button.stroke.big.uppercase {
    padding-top: 21px;
    padding-bottom: 21px;
  }
}

.button.stroke:not(.flat):hover {
  box-shadow: inset 0 -100px 0 rgba(41,41,41,.05),0 4px 6px 0 rgba(0,0,0,.1),0 1px 10px 0 rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.1);
}

.button.empty,
.button.flat:not(:hover) {
  box-shadow: none;
}

.button.small {
  font-size: 15px;
  font-weight: 500;
  padding: 10px 16px;
}

.button.small .material-icons {
  vertical-align: bottom;
  position: relative;
  font-size: 20px;
  margin-right: 8px;
  bottom: 1px;
}

.button.small .material-icons.right {
  margin-left: 8px;
  margin-right: 0;
}

.button.small svg {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  top: 0;
}

.button.small svg.right {
  margin-right: 0;
  margin-left: 10px;
}

.button.small.round {
  padding-left: 18px;
  padding-right: 18px;
}

.button.small.rounded {
  border-radius: 6px;
}

.button.small.uppercase {
  font-size: 12px;
  padding: 12px 16px;
  letter-spacing: .125em;
}

.button.small.uppercase.round {
  padding-left: 19px;
  padding-right: 19px;
}

@media (min-width:768px) {
  .button.big {
    font-size: 20px;
    padding: 21px 32px;
  }

  .button.big.round {
    padding-left: 36px;
    padding-right: 36px;
  }

  .button.big.rounded {
    border-radius: 7px;
  }

  .button.big.uppercase {
    font-size: 17px;
    padding: 23px 32px;
  }

  .button.big.uppercase.round {
    padding-left: 36px;
    padding-right: 36px;
  }

  .button.big .material-icons {
    vertical-align: bottom;
    margin-right: 16px;
    font-size: 30px;
  }

  .button.big .material-icons.right {
    margin-left: 16px;
    margin-right: 0;
  }

  .button.big svg {
    width: 27px;
    height: 27px;
    margin-right: 16px;
    top: 1px;
  }

  .button.big svg.right {
    margin-right: 0;
    margin-left: 16px;
  }
}

.button.empty,
.button.hollow {
  padding: 0!important;
  background-color: transparent!important;
  font-size: 0!important;
}

.button.play,
.panel .sections>div.right ul.crop li:last-child {
  margin-right: 0;
}

.button.empty {
  margin: 0;
}

.button.hollow {
  box-shadow: none!important;
}

.button.hollow svg {
  margin: 0;
}

.button.shade {
  position: relative;
}

.button.shade:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #292929;
  opacity: 0;
}

.button.shade:hover:after {
  opacity: .15;
}

.button.shade:active:after {
  opacity: .2;
}

.button.play {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  padding: 27px;
  margin-left: 0;
}

.button.play svg {
  width: 35px;
  height: 36px;
  margin: 0;
}

.button.play.small {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 20px 19px;
}

.button.play.small svg {
  fill: #fff;
  width: 23px;
  height: 23px;
}

.button.play:hover {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}

.button.gradient {
  position: relative;
}

.button.gradient:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom,#fff 0,#000 100%);
  z-index: -1;
  opacity: .1;
}

.slide.whiteSlide .button.white:hover {
  box-shadow: 0 4px 6px 0 rgba(0,0,0,.1),0 1px 10px 0 rgba(0,0,0,.1);
}

.slide.whiteSlide .button.white:hover:after {
  opacity: .3;
}

.roundButton {
  border-radius: 50px;
  height: 50px;
  width: 50px;
  padding: 14px;
  margin: 5px;
}

.roundButton svg {
  bottom: 2px;
}

@media (max-width:319px) {
  .button.uppercase,
  .uppercase {
    letter-spacing: .07em;
  }
}

.button.uppercase,
.h1.uppercase,
.h2.uppercase,
.h3.uppercase,
.h4.uppercase,
.p.uppercase,
h1.uppercase,
h2.uppercase,
h3.uppercase,
h4.uppercase,
h5.uppercase,
p.uppercase {
  letter-spacing: .125em!important;
  text-indent: -.1em!important;
  font-weight: 700!important;
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  direction: ltr;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-feature-settings: 'liga';
  font-feature-settings: 'liga';
}

.slides-form,
.slides-form button {
  font-family: inherit;
}

.material-icons.md-18 {
  font-size: 18px;
}

.material-icons.md-24 {
  font-size: 24px;
}

.material-icons.md-36 {
  font-size: 36px;
}

.material-icons.md-48 {
  font-size: 48px;
}

.slide.whiteSlide svg {
  fill: #202020;
}

.embedContainer,
.svgContainer {
  position: relative;
  width: 100%;
  height: 0;
  padding: 0;
}

.embedContainer .scale,
.svgContainer svg.scale {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.dots {
  font-size: 0;
}

.dot {
  padding: 7px;
}

.dot:after {
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  opacity: .5;
}

.dot.big .dot:after {
  width: 14px;
  height: 14px;
}

.slide.whiteSlide .dot:after {
  background: #202020;
}

.dot:hover:after {
  -webkit-transform: scale(1.33333);
  transform: scale(1.33333);
  opacity: 1;
}

.dot.selected:after,
.dot:active:after {
  opacity: 1;
  -webkit-transform: scale(1.675);
  transform: scale(1.675);
}

.tabs {
  color: #fff;
  max-width: 260px;
  border-radius: 5px;
}

.tabs li {
  padding: 16px 20px;
  letter-spacing: 2.5px;
  font-size: 12px;
  transition: .15s;
  margin-top: -1px;
  border: 1px solid rgba(255,255,255,.3);
}

.tabs li:not(:last-child) {
  border-bottom: 0;
}

.tabs li:first-child {
  border-radius: 4px 4px 0 0;
}

.tabs li:last-child {
  border-radius: 0 0 4px 4px;
}

.tabs li.selected {
  background: #fff;
  color: #202020;
}

.slide.whiteSlide .tabs li {
  border-color: #e5e5e5;
  color: #202020;
}

.slide.whiteSlide .tabs li.selected {
  background: #202020;
  border-color: #202020;
  color: #fff;
}

.links li {
  font-size: 17px;
  letter-spacing: 0;
  padding: 4px 0;
}

.slides-form {
  font-size: 0;
  margin-top: -5px;
}

.slides-form textarea {
  max-height: 200px;
  max-width: 100%;
  min-height: 130px;
  font-weight: 400;
}

.slides-form textarea.d {
  border-radius: 15px!important;
}

.slides-form .label,
.slides-form label {
  display: block;
  font-size: 14px;
  margin-top: 12px;
  margin-bottom: 2px;
}

.slides-form .label.uppercase,
.slides-form label.uppercase {
  font-size: 14px;
}

.slides-form input[type=email],
.slides-form input[type=name],
.slides-form input[type=number],
.slides-form input[type=password],
.slides-form input[type=tel],
.slides-form input[type=text],
.slides-form select,
.slides-form textarea {
  font-family: inherit;
  position: relative;
  background: #fff;
  padding: 15px 16px 16px;
  border: none;
  font-size: 16px;
  color: #242424;
  outline: 0;
  border-radius: 4px;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid rgba(0,0,0,.1);
  transition: .15s;
}

.slides-form input[type=email].flat,
.slides-form input[type=email]:focus,
.slides-form input[type=email]:hover,
.slides-form input[type=name].flat,
.slides-form input[type=name]:focus,
.slides-form input[type=name]:hover,
.slides-form input[type=number].flat,
.slides-form input[type=number]:focus,
.slides-form input[type=number]:hover,
.slides-form input[type=password].flat,
.slides-form input[type=password]:focus,
.slides-form input[type=password]:hover,
.slides-form input[type=tel].flat,
.slides-form input[type=tel]:focus,
.slides-form input[type=tel]:hover,
.slides-form input[type=text].flat,
.slides-form input[type=text]:focus,
.slides-form input[type=text]:hover,
.slides-form select.flat,
.slides-form select:focus,
.slides-form select:hover,
.slides-form textarea.flat,
.slides-form textarea:focus,
.slides-form textarea:hover {
  border-color: rgba(0,0,0,.2);
}

.slides-form input[type=email]:focus,
.slides-form input[type=name]:focus,
.slides-form input[type=number]:focus,
.slides-form input[type=password]:focus,
.slides-form input[type=tel]:focus,
.slides-form input[type=text]:focus,
.slides-form select:focus,
.slides-form textarea:focus {
  border-color: #2196f3;
  z-index: 10;
}

.slides-form input[type=email]:focus::-webkit-input-placeholder,
.slides-form input[type=name]:focus::-webkit-input-placeholder,
.slides-form input[type=number]:focus::-webkit-input-placeholder,
.slides-form input[type=password]:focus::-webkit-input-placeholder,
.slides-form input[type=tel]:focus::-webkit-input-placeholder,
.slides-form input[type=text]:focus::-webkit-input-placeholder,
.slides-form select:focus::-webkit-input-placeholder,
.slides-form textarea:focus::-webkit-input-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: 0;
}

.slides-form input[type=email]:focus:-moz-placeholder,
.slides-form input[type=name]:focus:-moz-placeholder,
.slides-form input[type=number]:focus:-moz-placeholder,
.slides-form input[type=password]:focus:-moz-placeholder,
.slides-form input[type=tel]:focus:-moz-placeholder,
.slides-form input[type=text]:focus:-moz-placeholder,
.slides-form select:focus:-moz-placeholder,
.slides-form textarea:focus:-moz-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: 0;
}

.slides-form input[type=email]:focus::-moz-placeholder,
.slides-form input[type=name]:focus::-moz-placeholder,
.slides-form input[type=number]:focus::-moz-placeholder,
.slides-form input[type=password]:focus::-moz-placeholder,
.slides-form input[type=tel]:focus::-moz-placeholder,
.slides-form input[type=text]:focus::-moz-placeholder,
.slides-form select:focus::-moz-placeholder,
.slides-form textarea:focus::-moz-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: 0;
}

.slides-form input[type=email]:focus:-ms-input-placeholder,
.slides-form input[type=name]:focus:-ms-input-placeholder,
.slides-form input[type=number]:focus:-ms-input-placeholder,
.slides-form input[type=password]:focus:-ms-input-placeholder,
.slides-form input[type=tel]:focus:-ms-input-placeholder,
.slides-form input[type=text]:focus:-ms-input-placeholder,
.slides-form select:focus:-ms-input-placeholder,
.slides-form textarea:focus:-ms-input-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: 0;
}

.slides-form input[type=email].round,
.slides-form input[type=name].round,
.slides-form input[type=number].round,
.slides-form input[type=password].round,
.slides-form input[type=tel].round,
.slides-form input[type=text].round,
.slides-form select.round,
.slides-form textarea.round {
  border-radius: 50px;
  padding-left: 22px;
  padding-right: 22px;
}

.slides-form input[type=email].rounded,
.slides-form input[type=name].rounded,
.slides-form input[type=number].rounded,
.slides-form input[type=password].rounded,
.slides-form input[type=tel].rounded,
.slides-form input[type=text].rounded,
.slides-form select.rounded,
.slides-form textarea.rounded {
  border-radius: 6px;
}

.slides-form input[type=email]:after,
.slides-form input[type=name]:after,
.slides-form input[type=number]:after,
.slides-form input[type=password]:after,
.slides-form input[type=tel]:after,
.slides-form input[type=text]:after,
.slides-form select:after,
.slides-form textarea:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
}

@media (min-width:768px) {
  .slides-form input[type=email],
  .slides-form input[type=name],
  .slides-form input[type=number],
  .slides-form input[type=password],
  .slides-form input[type=tel],
  .slides-form input[type=text],
  .slides-form select,
  .slides-form textarea {
    max-width: 300px;
  }
}

.slides-form input[type=email]::-webkit-input-placeholder,
.slides-form input[type=name]::-webkit-input-placeholder,
.slides-form input[type=number]::-webkit-input-placeholder,
.slides-form input[type=password]::-webkit-input-placeholder,
.slides-form input[type=tel]::-webkit-input-placeholder,
.slides-form input[type=text]::-webkit-input-placeholder,
.slides-form select::-webkit-input-placeholder,
.slides-form textarea::-webkit-input-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: .5;
}

.slides-form input[type=email]:-moz-placeholder,
.slides-form input[type=name]:-moz-placeholder,
.slides-form input[type=number]:-moz-placeholder,
.slides-form input[type=password]:-moz-placeholder,
.slides-form input[type=tel]:-moz-placeholder,
.slides-form input[type=text]:-moz-placeholder,
.slides-form select:-moz-placeholder,
.slides-form textarea:-moz-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: .5;
}

.slides-form input[type=email]::-moz-placeholder,
.slides-form input[type=name]::-moz-placeholder,
.slides-form input[type=number]::-moz-placeholder,
.slides-form input[type=password]::-moz-placeholder,
.slides-form input[type=tel]::-moz-placeholder,
.slides-form input[type=text]::-moz-placeholder,
.slides-form select::-moz-placeholder,
.slides-form textarea::-moz-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: .5;
}

.slides-form input[type=email]:-ms-input-placeholder,
.slides-form input[type=name]:-ms-input-placeholder,
.slides-form input[type=number]:-ms-input-placeholder,
.slides-form input[type=password]:-ms-input-placeholder,
.slides-form input[type=tel]:-ms-input-placeholder,
.slides-form input[type=text]:-ms-input-placeholder,
.slides-form select:-ms-input-placeholder,
.slides-form textarea:-ms-input-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: .5;
}

.slides-form textarea.round {
  border-radius: 25px;
}

.slides-form select {
  background-image: url("data:image/svg+xml;charset=UTF-8,<svg xmlns=http://www.w3.org/2000/svg width=37 height=7><path fill=#303030 d=M14.022 0l5.978 6 6-6z /></svg>");
  background-repeat: no-repeat;
  background-position: right;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.slides-form button[type=submit],
.slides-form input[type=email],
.slides-form input[type=name],
.slides-form input[type=number],
.slides-form input[type=password],
.slides-form input[type=submit],
.slides-form input[type=tel],
.slides-form input[type=text],
.slides-form select,
.slides-form textarea {
  margin: 5px;
}

@media (max-width:768px) {
  .slides-form button[type=submit],
  .slides-form input[type=email],
  .slides-form input[type=name],
  .slides-form input[type=number],
  .slides-form input[type=password],
  .slides-form input[type=submit],
  .slides-form input[type=tel],
  .slides-form input[type=text],
  .slides-form select,
  .slides-form textarea {
    margin-left: auto!important;
    margin-right: auto!important;
    width: 100%;
    display: block!important;
  }
}

.slides-form button[type=submit].wide,
.slides-form input[type=email].wide,
.slides-form input[type=name].wide,
.slides-form input[type=number].wide,
.slides-form input[type=password].wide,
.slides-form input[type=submit].wide,
.slides-form input[type=tel].wide,
.slides-form input[type=text].wide,
.slides-form label.wide,
.slides-form select.wide,
.slides-form textarea.wide {
  max-width: 100%;
  width: 100%;
  margin-left: 0!important;
  margin-right: 0!important;
}

@media (min-width:769px) {
  .slides-form input.pair {
    width: 50%!important;
    max-width: 50%!important;
    border-top-right-radius: 0!important;
    border-bottom-right-radius: 0!important;
    margin-left: 0;
    margin-right: 0;
  }

  .slides-form input.pair+.pair {
    width: calc(50% + 1px)!important;
    max-width: calc(50% + 1px)!important;
    margin-left: -1px;
    border-radius: 0 4px 4px 0!important;
  }
}

.container,
.content,
.popup:not(.youtube) .background iframe,
.slide,
.slide:not(.youtube) .background iframe {
  width: 100%;
  height: 100%;
}

.slide {
  position: fixed;
  background: #202020;
  color: #fff;
  z-index: 10;
}

.slide.active {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.mobile .slide {
  visibility: hidden;
}

.mobile .slide.active {
  visibility: visible;
}

.slide.whiteSlide {
  color: #202020;
  background: #fff;
}

.content {
  position: absolute;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  z-index: 100;
  -webkit-overflow-scrolling: touch;
}

.content.scrollBar {
  overflow-y: auto;
}

.windows .defaultScroll .content {
  overflow: auto;
  overflow-x: hidden;
}

.mobile .content {
  overflow: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

.container .wrap .overflowHidden,
.pad,
.slide.video .background,
.videoThumbnail {
  overflow: hidden;
}

.fade .content {
  background: rgba(0,0,0,.6);
}

.dropdown.share li:after,
.fade-1 .content {
  background: rgba(0,0,0,.1);
}

.fade-2 .content {
  background: rgba(0,0,0,.2);
}

.fade-3 .content {
  background: rgba(0,0,0,.3);
}

.fade-4 .content {
  background: rgba(0,0,0,.4);
}

.fade-5 .content {
  background: rgba(0,0,0,.5);
}

.fade-6 .content {
  background: rgba(0,0,0,.6);
}

.fade-7 .content {
  background: rgba(0,0,0,.7);
}

.fade-8 .content {
  background: rgba(0,0,0,.8);
}

.fade-9 .content {
  background: rgba(0,0,0,.9);
}

.whiteSlide[class*=fade] .content {
  background: rgba(255,255,255,.85);
}

.container {
  display: table;
  table-layout: fixed;
  position: relative;
}

.container .wrap {
  display: table-cell;
  vertical-align: middle;
  overflow: hidden;
}

.container .wrap .spaceWrap,
.container .wrap.spaceWrap,
.container .wrap:not(.noSpaces) {
  padding: 120px calc(8% + 15px);
}

.container .wrap * {
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
}

.popup .background,
.slide .background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.popup .background iframe,
.slide .background iframe {
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
}

.pad,
.videoThumbnail.rounded {
  border-radius: 6px;
}

.fix-1-12 {
  max-width: 93px!important;
}

.fix-2-12 {
  max-width: 186px!important;
}

.fix-3-12 {
  max-width: 279px!important;
}

.fix-4-12 {
  max-width: 371px!important;
}

.fix-5-12 {
  max-width: 464px!important;
}

.fix-6-12 {
  max-width: 557px!important;
}

.fix-7-12 {
  max-width: 650px!important;
}

.fix-8-12 {
  max-width: 743px!important;
}

.fix-9-12 {
  max-width: 836px!important;
}

.fix-10-12 {
  max-width: 928px!important;
}

.fix-11-12 {
  max-width: 1021px!important;
}

.fix-12-12 {
  max-width: 1114px!important;
}

[class*=fix-] {
  width: 100%!important;
  margin-left: auto!important;
  margin-right: auto!important;
  float: none;
}

.toLeft,
.toLeft[class*=fix-] {
  margin-left: 0!important;
  margin-right: auto!important;
}

.toRight,
.toRight[class*=fix-] {
  margin-right: 0!important;
  margin-left: auto!important;
  float: right;
}

.toCenter {
  margin-left: auto!important;
  margin-right: auto!important;
}

.shiftImage {
  margin-top: -15%;
  margin-bottom: -100%;
}

.shiftImageVertical {
  margin-right: -100%;
  max-width: none;
}

.slide.video .background video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  background-size: cover;
}

.slide.video .background video::-webkit-media-controls {
  display: none!important;
}

.slide.video .background video::-webkit-media-controls-panel {
  display: none!important;
  -webkit-appearance: none;
}

.slide.video .background video::-webkit-media-controls-start-playback-button {
  display: none!important;
  -webkit-appearance: none;
}

html:not(.mobile) .slide.video .background[style] {
  background: 0 0!important;
}

.mobile .slide.video .background[style] video {
  display: none;
}

.videoThumbnail {
  position: relative;
  font-size: 0;
  line-height: 0;
}

.videoThumbnail:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url("../assets/svg/video-icon.svg") center center no-repeat;
  transition: .5s;
}

.videoThumbnail:not(.noTint):hover:after {
  background-color: rgba(0,0,0,.15);
}

.videoThumbnail:hover:before {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  transition: .25s;
}

.videoThumbnail:active:before {
  opacity: .8;
}

.videoThumbnail.small {
  max-width: 200px;
  display: block;
}

.videoThumbnail.small:before {
  background-size: 44px;
}

.button.empty.shadow:hover,
.shadow {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
}

.pad {
  padding: 10%;
  color: #202020;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
}

.pad.shadow,
.pad.shadowHover:hover {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
}

.pad.shadow.stroke {
  background: 0 0;
  transition: .15s;
  color: #fff;
}

.pad.shadow.stroke:hover {
  background: #fff;
  color: #202020;
  transition: .15s;
}

.pad.shadowHover {
  transition: .5s;
}

.pad small {
  font-size: 15px;
  line-height: 1.45;
  margin: 15px 0;
}

.resizing .equalElement {
  transition: 0s!important;
}

.hr {
  position: relative;
  height: 1px;
  width: 100%;
}

@media (max-width:1023px) {
  .shiftImage {
    margin-top: 0!important;
    margin-bottom: 0!important;
  }

  .shiftImageVertical {
    margin-right: 0!important;
    max-width: 100%!important;
  }
}

@media (min-width:1024px) {
  .hideForDesktop {
    display: none!important;
  }

  .showForDesktop {
    display: block!important;
  }
}

@media (max-width:1024px) {
  .hideForTablet {
    display: none!important;
  }

  .showForTablet {
    display: block!important;
  }

  .showForTabletInline {
    display: inline!important;
  }
}

@media (max-width:767px) {
  .pad.collapse,
  .pad.shadow {
    box-shadow: none;
  }

  .pad.collapse {
    background: inherit;
    color: inherit;
    border: none;
    padding: 0!important;
    overflow: inherit;
    border-radius: 0;
    transition: 0s!important;
  }

  .hideForPhablet {
    display: none!important;
  }
}

@media (max-width:768px) {
  .showForPhablet {
    display: block!important;
  }

  .showForPhabletInline {
    display: inline!important;
  }
}

@media (max-width:435px) {
  .hideForPhone {
    display: none!important;
  }

  .showForPhone {
    display: block!important;
  }

  .showForPhoneInline {
    display: inline!important;
  }
}

html.mobile .hideForMobile {
  display: none!important;
}

html.mobile .showForMobile {
  display: block!important;
}

html.mobile .showForMobileInline {
  display: inline!important;
}

.helpBubble:after {
  content: "?";
  font-size: 14px;
  width: 17px;
  height: 17px;
  line-height: 1.2;
  background: #202020;
  opacity: .3;
  color: #fff;
  border-radius: 50%;
  display: inline-block;
  margin-left: 4px;
  font-weight: 700;
  transition: .25s;
}

.helpBubble .helpMessage {
  background: rgba(255,255,255,.98);
  color: #202020;
  font-size: 16px;
  line-height: 1.625;
  position: absolute;
  z-index: 10;
  box-shadow: 0 1px 8px rgba(0,0,0,.07),0 6px 8px rgba(0,0,0,.05);
  padding: 17px;
  text-align: left;
  bottom: 50%;
  margin-bottom: 5px;
  -webkit-transform: translateY(10px) scale(.95);
  transform: translateY(10px) scale(.95);
  transition: .25s;
  opacity: 0;
  pointer-events: none;
  color: rgba(48,48,48,.7);
}

.mobile .simplifiedMobile .panel.hideOnScroll,
.panel,
.scroll .panel.hideOnScroll {
  position: fixed;
}

.panel.black,
.panel.white {
  box-shadow: 0 1px 1px rgba(0,0,0,.07);
}

.panel.bottom,
.side {
  bottom: 0;
}

.helpBubble .helpMessage strong {
  color: #303030;
}

.helpBubble:hover .helpMessage {
  pointer-events: all;
  -webkit-transform: translateY(0) scale(1);
  transform: translateY(0) scale(1);
  opacity: 1;
}

.helpBubble:hover:after {
  opacity: 1;
}

.panel {
  left: 0;
  width: 100%;
  padding: 10px 30px;
  z-index: 200;
  text-align: center;
  font-size: 16px;
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

.panel.top {
  top: 0;
}

.panel.white {
  background: rgba(255,255,255,.975)!important;
}

.panel.black {
  background-color: rgba(0,0,0,.8)!important;
}

.animateOnEvent .panel.top,
.animated .panel.top,
.hidePanel-top .panel.top.hideOnScroll,
.slides.firstSlide .panel.top.exceptFirstSlide,
.slides.lastSlide .panel.top.exceptLastSlide,
.slides:not(.firstSlide) .panel.top.firstSlideOnly,
.slides:not(.firstSlide):not(.lastSlide) .panel.top.firstAndLastSlidesOnly,
.slides:not(.lastSlide) .panel.top.lastSlideOnly {
  -webkit-transform: translate3d(0,-100%,0);
  transform: translate3d(0,-100%,0);
  opacity: 0;
}

.animateOnEvent .panel.bottom,
.animated .panel.bottom,
.hidePanel-bottom .panel.bottom.hideOnScroll,
.slides.firstSlide .panel.bottom.exceptFirstSlide,
.slides.lastSlide .panel.bottom.exceptLastSlide,
.slides:not(.firstSlide) .panel.bottom.firstSlideOnly,
.slides:not(.firstSlide):not(.lastSlide) .panel.bottom.firstAndLastSlidesOnly,
.slides:not(.lastSlide) .panel.bottom.lastSlideOnly {
  -webkit-transform: translate3d(0,100%,0);
  transform: translate3d(0,100%,0);
  opacity: 0;
}

.page-loaded .animateOnEvent .panel,
.page-loaded .animated .panel {
  transition: opacity .5s,padding .5s,-webkit-transform .5s;
  transition: transform .5s,opacity .5s,padding .5s;
  transition: transform .5s,opacity .5s,padding .5s,-webkit-transform .5s;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  opacity: 1;
}

.slides.whiteSlide .panel {
  color: #202020;
}

.mobile .simplifiedMobile .panel.hideOnScroll.top.hide,
.scroll .panel.hideOnScroll.top.hide {
  -webkit-transform: translateY(-100%)!important;
  transform: translateY(-100%)!important;
  opacity: 0;
}

.mobile .simplifiedMobile .panel.hideOnScroll.bottom.hide,
.scroll .panel.hideOnScroll.bottom.hide {
  -webkit-transform: translateY(100%)!important;
  transform: translateY(100%)!important;
  opacity: 0;
}

.panel .sections {
  display: table;
  width: 100%;
  font-size: 0;
}

.panel .sections>div {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 33.33333%;
  font-size: 16px;
  height: 50px;
}

.panel .sections>div.auto {
  width: .1%;
}

.panel .sections>div * {
  pointer-events: all;
}

.panel .sections>div.left {
  text-align: left;
}

.panel .sections>div.left ul.crop {
  padding-left: 0;
}

.panel .sections>div.left ul.crop li:first-child {
  margin-left: 0;
}

.panel .sections>div.left.space {
  padding-right: 20px;
}

.panel .sections>div.right {
  text-align: right;
}

.panel .sections>div.right ul.crop {
  padding-right: 0;
}

.panel .sections>div.right.space {
  padding-left: 20px;
}

.panel .sections>div.center.space {
  padding: 0 20px;
}

.panel .sections.hidden {
  display: none;
}

.panel .sections .menu {
  display: inline-block;
  padding: 0 12px;
  font-size: 0;
}

.panel .sections .menu svg {
  width: 20px;
  height: 20px;
  vertical-align: bottom;
}

.panel .sections .menu li {
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
  margin: 0 10px;
}

.panel .hidden,
.panel .hidden *,
.side.compact .navigation li:after {
  display: none;
}

.panel .sections .menu li a {
  padding: 0 7px;
  opacity: .8;
}

.panel .sections .menu li a:hover {
  opacity: 1;
}

.panel .sections .menu.uppercase li {
  font-size: 12px;
  margin: 0 10px;
  letter-spacing: .125em;
  font-weight: 600!important;
}

.panel .sections .menu.uppercase li svg {
  position: relative;
  top: 2px;
}

.panel svg {
  fill: #fff;
  width: 18px;
  height: 18px;
  vertical-align: bottom;
}

.slides.whiteSlide .panel svg {
  fill: #202020;
}

.panel a:not(.button):hover {
  opacity: .75;
  transition: .15s;
}

.panel .button {
  margin: 0;
}

.panel .button+.button {
  margin-left: 10px;
}

.panel .button:not(.actionButton) {
  font-size: 15px;
  vertical-align: middle;
  padding: 12px 17px;
}

.panel .button:not(.actionButton):hover:not(:active) {
  -webkit-transform: translateY(0)!important;
  transform: translateY(0)!important;
  box-shadow: 0 0 0 1px rgba(255,255,255,.05),0 4px 6px 0 rgba(0,0,0,.1),0 1px 10px 0 rgba(0,0,0,.1);
}

.panel .nextSlide,
.panel .prevSlide {
  width: 24px;
  height: 24px;
  position: relative;
  top: 5px;
  transition: .25s;
}

.slides.whiteSlide .panel .actionButton svg {
  fill: #fff;
}

.firstSlide .panel .prevSlide,
.lastSlide .panel .nextSlide {
  opacity: 0;
  pointer-events: none;
  cursor: default;
}

.navigation li,
.nextSlide,
.prevSlide {
  cursor: pointer;
}

.firstSlide .panel.bottom .nextSlide svg {
  -webkit-animation: animateArrow 4s infinite;
  animation: animateArrow 4s infinite;
}

.panel .panelIcon {
  position: relative;
  top: 5px;
}

.progress-bar,
.side {
  position: fixed;
  top: 0;
}

@-webkit-keyframes animateArrow {
  100%, 80% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  90% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
}

@keyframes animateArrow {
  100%, 80% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  90% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
}

.popup,
.side {
  -webkit-transform: translate3d(0,0,0);
}

.nextSlide:hover,
.prevSlide:hover {
  transition: .15s;
}

.nextSlide:active,
.prevSlide:active {
  opacity: .75;
}

.firstSlide.lastSlide .nextSlide,
.firstSlide.lastSlide .prevSlide {
  opacity: 0;
}

.progress-bar {
  left: 0;
  height: 4px;
  width: 0%;
  transition: width 1s,opacity 1s;
  z-index: 1000;
  opacity: 1;
}

.progress-bar.loaded {
  width: 100%;
  opacity: 0;
  transition: width 0s,opacity .25s 1s;
}

.side {
  right: 0;
  height: 100%;
  z-index: 100;
  padding: 70px 4%;
  pointer-events: none;
  opacity: 0;
  transition: opacity .5s;
  transform: translate3d(0,0,0);
}

@media (min-width:1380px) {
  .side {
    padding-left: 55px;
    padding-right: 55px;
  }
}

.page-loaded .side {
  opacity: 1;
}

.side.large {
  padding: calc(5.56% + 50px) 5%;
}

.side.left {
  left: 0;
  right: inherit;
}

.side.right {
  right: 0;
  left: inherit;
}

.side.compact {
  padding: 30px 4%;
}

.side.compact .navigation li {
  width: 15px;
  height: 7px;
  margin: 0;
  box-shadow: none;
  border-radius: 0;
  background: #fff;
  opacity: .2;
  padding: 1px;
  cursor: pointer;
}

.side.compact .navigation li.selected,
.side.compact .navigation li:hover {
  opacity: 1;
}

.side.compact .navigation li:before {
  margin: 0 8px!important;
  top: -10px;
}

.whiteSlide .side.compact .navigation li {
  background: #202020;
}

.side.compact:not(.square) .navigation li:first-child {
  border-radius: 10px 10px 0 0;
}

.side.compact:not(.square) .navigation li:last-child {
  border-radius: 0 0 10px 10px;
}

.panel .side {
  position: relative;
  display: inline;
  height: auto;
  padding: 0;
}

.slides.whiteSlide .side svg:not([fill]) {
  fill: #202020;
}

.navigation {
  display: table;
  height: 100%;
}

.navigation ul {
  display: table-cell;
  vertical-align: middle;
}

.navigation * {
  pointer-events: all;
}

.navigation li {
  fill: #fff;
  display: block;
  background: 0 0;
  padding: 9px;
  margin: 0 -9px;
  position: relative;
}

.navigation li:after {
  content: "";
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 7px;
  opacity: .5;
  background: #fff;
  box-shadow: 0 0 1px #303030;
  transition: .25s;
}

.navigation li.selected:after,
.navigation li:hover:after {
  opacity: 1;
}

.medium .navigation li:after {
  width: 10px;
  height: 10px;
  border-radius: 5px;
}

.small .navigation li:after {
  width: 6px;
  height: 6px;
  border-radius: 4px;
}

.navigation li[data-title]:before {
  content: attr(data-title);
  position: absolute;
  right: 100%;
  top: 1px;
  background: rgba(0,0,0,.7);
  color: #fff;
  font-size: 14px;
  min-width: 50px;
  border-radius: 6px;
  padding: 7px 12px;
  font-weight: 500;
  display: inline-block;
  text-align: center;
  box-shadow: 0 0 0 1px rgba(255,255,255,.1);
  pointer-events: none;
  visibility: hidden;
}

.dropdown.show,
.navigation li:hover:before {
  visibility: visible;
}

.left .navigation li:before {
  left: 100%;
  right: auto;
}

.panel.bottom .navigation li:before {
  -webkit-transform: translateY(-100%) translateX(-50%);
  transform: translateY(-100%) translateX(-50%);
  left: 14px;
  top: -2px;
}

.stroke .navigation li:after {
  border-color: #fff;
  border-style: solid;
  border-width: 2px;
  background-color: transparent;
}

.stroke.small .navigation li:after {
  border-width: 1px;
}

.stroke .navigation li.selected:after,
.stroke .navigation li:hover:after {
  background: #fff;
}

.square .navigation li:after,
.square.small .navigation li:after {
  border-radius: 0;
}

.diamond .navigation li:after {
  border-radius: 0;
  -webkit-transform: rotate(45deg) scale(.72);
  transform: rotate(45deg) scale(.72);
}

.diamond.medium .navigation li:after {
  -webkit-transform: rotate(45deg) scale(.88);
  transform: rotate(45deg) scale(.88);
}

.diamond.small .navigation li:after {
  -webkit-transform: rotate(45deg) scale(1);
  transform: rotate(45deg) scale(1);
}

.line .navigation li {
  margin: 0 -9px;
  padding: 5px 9px;
  text-align: right;
  font-size: 0;
}

.line .navigation li:after {
  height: 3px;
  display: inline-block;
  text-align: right;
  background: #fff;
  border: none;
}

.line .navigation li:before {
  margin-top: -10px;
}

.line .navigation li.selected:after {
  width: 25px;
}

.line.left .navigation li {
  text-align: left;
}

.line.medium .navigation li {
  margin: 0 -5px;
  padding: 4px 8px;
}

.line.medium .navigation li.selected:after {
  width: 19px;
}

.line.small .navigation li {
  margin: 0;
  padding: 4px 6px;
}

.line.small .navigation li.selected:after {
  width: 13px;
}

.pole .navigation li {
  margin: 0 1px 0 2px;
  padding: 2px 9px;
  text-align: right;
  font-size: 0;
}

.pole .navigation li:after {
  height: 20px;
  width: 4px;
  display: inline-block;
  transition: .5s;
  text-align: right;
  background: #fff;
  border-radius: 1px;
  border: none;
}

.pole .navigation li:before {
  margin-top: -3px;
}

.pole .navigation li.selected:after {
  height: 60px;
}

.pole .navigation li.selected:before {
  margin-top: 19px;
}

.pole.medium .navigation li {
  margin: 0 2px;
}

.pole.medium .navigation li:after {
  height: 15px;
  width: 3px;
}

.pole.medium .navigation li:before {
  margin-top: -5px;
}

.pole.medium .navigation li.selected:after {
  height: 45px;
}

.pole.medium .navigation li.selected:before {
  margin-top: 10px;
}

.pole.small .navigation li {
  margin: 0 2px;
}

.pole.small .navigation li:after {
  height: 10px;
  width: 3px;
}

.pole.small .navigation li:before {
  margin-top: -7px;
}

.pole.small .navigation li.selected:after {
  height: 30px;
}

.pole.small .navigation li.selected:before {
  margin-top: 2px;
}

.slides.whiteSlide .navigation li:after {
  background: #202020;
  box-shadow: 0 0 1px #fff;
}

.slides.whiteSlide .stroke .navigation li:after {
  border-color: #202020;
  background: 0 0;
}

.slides.whiteSlide .stroke .navigation li:hover:after {
  background: #303030;
}

.slides.whiteSlide .stroke .navigation li.selected:after {
  border-color: #303030;
  background: #202020;
}

.panel .navigation,
.panel .navigation ul {
  display: inline;
}

.panel .navigation li {
  display: inline-block;
  margin: -9px 0;
}

.panel .side.small .navigation li {
  margin: 0;
}

.navigation .sideArrow {
  width: 31px;
  height: 72px;
  margin: 0 -9px;
}

@media (max-width:766px) {
  .navigation .sideArrow {
    width: 17px;
    height: 40px;
  }
}

.dropdown {
  position: fixed;
  z-index: 300;
  color: #202020;
  width: 160px;
  background: #fff;
  box-shadow: 0 6px 11px 0 rgba(0,0,0,.15),0 14px 28px rgba(0,0,0,.1),0 0 0 1px rgba(0,0,0,.05);
  margin-bottom: 50px;
  border-radius: 6px;
  text-align: center;
  cursor: default;
  -webkit-transform: translateY(0) scale(.9);
  transform: translateY(0) scale(.9);
  -webkit-transform-origin: top;
  transform-origin: top;
  transition: opacity .35s,box-shadow .35s,-webkit-transform .35s;
  transition: transform .35s,opacity .35s,box-shadow .35s;
  transition: transform .35s,opacity .35s,box-shadow .35s,-webkit-transform .35s;
}

.dropdown:not(.show) {
  pointer-events: none;
  opacity: 0;
}

.dropdown.rectangular {
  border-radius: 0;
}

.dropdown .title {
  font-size: 17px;
  font-weight: 500;
  margin: 0;
  text-align: center;
  opacity: .8;
}

.dropdown a {
  font-size: 15px;
  opacity: .6;
}

.dropdown a:hover {
  opacity: .8;
}

.dropdown:not(.noArrow):after,
.dropdown:not(.noArrow):before {
  content: "";
  bottom: 100%;
  left: 22px;
  border: solid transparent;
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(255,255,255,0);
  border-bottom-color: #fff;
  border-width: 7px;
  margin-left: -7px;
}

.dropdown:not(.noArrow):before {
  border-bottom-color: rgba(0,0,0,.1);
  border-width: 8px;
  margin-left: -8px;
}

.dropdown.show {
  opacity: 1;
  -webkit-transform: translateY(20px);
  transform: translateY(20px);
}

.dropdown .hideDropdown,
.dropdown.show.hide {
  opacity: 0;
  pointer-events: none;
}

.dropdown.show.hide {
  -webkit-transform: translateY(40px);
  transform: translateY(40px);
  box-shadow: 0 0 0 0 rgba(0,0,0,.15),0 0 0 rgba(0,0,0,.1),0 0 0 1px rgba(0,0,0,.05);
}

.dropdown.bottom {
  -webkit-transform-origin: bottom;
  transform-origin: bottom;
}

.dropdown.bottom.show {
  -webkit-transform: translateY(-20px);
  transform: translateY(-20px);
}

.dropdown.bottom.show.hide {
  -webkit-transform: translateY(-40px);
  transform: translateY(-40px);
}

.dropdown.bottom:after,
.dropdown.bottom:before {
  top: 100%;
  bottom: initial;
  border-bottom-color: rgba(255,255,255,0);
  border-top-color: #fff;
}

.dropdown.bottom:before {
  border-top-color: rgba(0,0,0,.06);
}

.dropdown.right:after,
.dropdown.right:before {
  right: 18px;
  left: auto;
}

.dropdown.right:before {
  right: 17px;
}

.dropdown.center:after,
.dropdown.center:before {
  left: 50%;
}

.dropdown.share li {
  float: left;
  text-align: center;
  display: block;
  width: 80px;
  height: 50px;
  padding: 14px 0;
  color: #fff;
  position: relative;
  cursor: pointer;
  opacity: .9;
  transition: .15s;
}

.dropdown.share li:hover {
  opacity: 1;
}

.dropdown.share li:after {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: .25s;
}

.dropdown.share li:active:after {
  opacity: 1;
  transition: .1s;
}

.dropdown.share li svg {
  width: 20px;
  height: 20px;
  fill: #fff;
}

.dropdown.share li.mail {
  width: 100%;
  height: auto;
  color: #202020;
  opacity: .6;
  font-size: 15px;
  padding: 20px 0;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.dropdown.share li.mail:hover {
  opacity: .8;
}

.scroll .dropdown {
  position: absolute;
  top: 0;
}

.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  max-width: 90%;
  height: 100%;
  color: #fff;
  z-index: 500;
  background: #0e0e0e;
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.sidebar.bottom,
.sidebar.top {
  width: 100%;
  height: auto;
  max-width: 100%;
}

.sidebarShown .sidebar.visible {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
}

.sidebar .content {
  padding: 40px;
  overflow-y: auto;
  position: relative;
}

.sidebar.small .content {
  padding: 30px;
}

.sidebar .wrap {
  padding: 0;
}

.sidebar.left {
  right: inherit;
  left: 0;
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}

.sidebar.top {
  top: 0;
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
}

.sidebar.bottom {
  bottom: 0;
  top: inherit;
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
}

.sidebar .logo {
  padding: 0;
  font-size: 0;
  margin-bottom: 35px;
}

.sidebar .close {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 14px;
  font-size: 0;
  opacity: .5;
  z-index: 101;
  transition: .25s;
}

.sidebar .close:hover {
  opacity: 1;
}

.sidebar .close svg {
  width: 24px;
  height: 24px;
  fill: #fff;
}

.sidebar .close:active svg {
  -webkit-transform: scale(.92);
  transform: scale(.92);
}

.sidebar ul.mainMenu,
.sidebar ul.social,
.sidebar ul.subMenu {
  line-height: 1.9;
  margin-bottom: 30px;
  display: block;
}

.sidebar .mainMenu li {
  font-size: 20px;
  line-height: 48px;
}

.sidebar .mainMenu.small li {
  font-size: 18px;
  line-height: 46px;
}

.sidebar .subMenu li {
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
  font-size: 18px;
  line-height: 36px;
}

.sidebar .subMenu.small li {
  font-size: 16px;
  line-height: 34px;
}

.sidebar .social {
  margin-top: 40px;
}

.sidebar .social li {
  display: inline-block;
  margin-right: 20px;
}

.sidebar .social li:last-child {
  margin-right: 0;
}

.sidebar .social.big li,
.sidebar .social.small li {
  margin-right: 12px;
}

.sidebar .social li a {
  font-size: 0;
  padding: 0;
}

.sidebar .social li a svg {
  width: 20px;
  height: 20px;
}

.sidebar .social.small li a svg {
  width: 15px;
  height: 15px;
}

.sidebar .social.big li a svg {
  width: 22px;
  height: 22px;
}

.sidebar.small .social {
  margin-top: 30px;
}

.sidebar .big li {
  font-size: 32px;
  line-height: 64px;
}

.sidebar .social.medium li a svg {
  width: 18px;
  height: 18px;
}

.sidebar .social.medium li {
  margin-right: 14px;
}

.sidebarShown .slide.selected .content {
  overflow: hidden;
}

.popup,
.popup .content {
  overflow-y: auto;
}

.page-loaded.sidebarShown .slide.selected {
  -webkit-transform: scale(.95)!important;
  transform: scale(.95)!important;
  pointer-events: none;
  opacity: .5!important;
}

.sidebarShown .panel.top {
  opacity: 0;
}

.sidebarShown .panel.bottom {
  opacity: .5;
  -webkit-transform: scale(.95) translateY(-10%);
  transform: scale(.95) translateY(-10%);
}

.page-loaded.sidebarShown .panel,
.page-loaded.sidebarShown .slide.selected,
.page-loaded.sidebarShown .slide.selected:after,
.sidebar {
  transition: opacity .5s,-webkit-transform .5s!important;
  transition: transform .5s,opacity .5s!important;
  transition: transform .5s,opacity .5s,-webkit-transform .5s!important;
}

.popup {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  z-index: 1000;
  transition: opacity .5s,-webkit-transform .5s;
  transition: transform .5s,opacity .5s;
  transition: transform .5s,opacity .5s,-webkit-transform .5s;
  display: none;
  transform: translate3d(0,0,0);
}

.popup:not([class*=fade]) {
  background: rgba(17,17,17,.9);
}

.popupShown .popup.visible {
  display: block;
  -webkit-animation: popupFadeIn .75s;
  animation: popupFadeIn .75s;
}

.popup.hidePopup {
  opacity: 0;
  pointer-events: none;
}

.popup .close:not(.button) {
  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 14px;
  font-size: 0;
  opacity: .5;
  z-index: 200;
  transition: .25s;
  margin: 0;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

.popup .close:not(.button).left {
  right: inherit;
  left: 0;
}

.popup .close:not(.button):hover {
  opacity: 1;
}

.popup .close:not(.button) svg {
  width: 30px;
  height: 30px;
  fill: #fff;
}

.popup .close.button {
  position: fixed;
  z-index: 200;
  margin: 15px;
}

.popup.white .close svg {
  fill: #202020;
}

.popup .wrap {
  padding: 18px 58px;
}

.popup .wrap.spaces {
  padding: 58px;
}

.popup.fullscreen .wrap {
  padding: 0;
}

.popup.fullscreen .embedVideo {
  height: 100vh;
  padding-bottom: 0;
}

@-webkit-keyframes popupFadeIn {
  from {
    opacity: 0;
  }
}

@keyframes popupFadeIn {
  from {
    opacity: 0;
  }
}

.popupShown,
.popupShown body,
.sidebarShown,
.sidebarShown body {
  overflow-y: hidden!important;
}

.embedVideo {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}

.embedVideo embed,
.embedVideo iframe,
.embedVideo object,
.embedVideo video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.embedVideo.size-16x10 {
  padding-bottom: 62.5%;
}

.embedVideo.size-4x3 {
  padding-bottom: 75%;
}

.embedVideo.size-1x1,
.embedVideo.size-square {
  padding-bottom: 100%;
}

.zoom-img,
.zoom-img-wrap {
  position: relative;
  transition: all .5s;
  transition-timing-function: cubic-bezier(.2,0,.3,1)!important;
  z-index: 100;
}

.zoom-img img.zoom-img,
.zoom-img-wrap img.zoom-img {
  margin: 0!important;
}

.zoom-overlay {
  background: #111;
  position: fixed;
  top: -9999px;
  left: -9999px;
  right: -9999px;
  bottom: -9999px;
  pointer-events: none;
  opacity: 0;
  transition: opacity .5s;
  z-index: 99;
}

.slider,
.zoom-img-parent {
  position: relative;
}

.zoom-overlay-open .zoom-overlay {
  opacity: .9;
}

.zoom-overlay-open .panel,
.zoom-overlay-open .side {
  opacity: 0;
  transition: .25s;
}

.zoom-overlay-open,
.zoom-overlay-transitioning {
  cursor: default;
}

.controller li,
.slider.clickable {
  cursor: pointer;
}

.zoom-img-parent {
  z-index: 1000;
}

.slider>li {
  display: none;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity .5s;
  pointer-events: none;
}

.slider>li.selected {
  display: block;
  opacity: 1;
  transition: opacity .5s;
  pointer-events: all;
}

.slider.rounded>li>img {
  border-radius: 6px;
  overflow: hidden;
}

.slider.autoHeight {
  transition: .5s;
}

.slider.autoHeight>li {
  display: block;
  position: absolute;
}

.controller li.selected {
  cursor: default;
  pointer-events: none;
}

.tooltip[data-tooltip-title] {
  position: relative;
}

.tooltip[data-tooltip-title]:before {
  content: attr(data-tooltip-title);
  position: absolute;
  background: rgba(40,40,40,.6);
  color: #fff;
  font-size: 12px;
  border-radius: 50px;
  padding: 6px 15px;
  visibility: hidden;
  white-space: nowrap;
  letter-spacing: .04em;
  box-shadow: 0 0 0 1px rgba(255,255,255,.07);
  -webkit-transform: translateY(100%) translateX(-50%);
  transform: translateY(100%) translateX(-50%);
  left: 50%;
  top: 0;
}

.tooltip[data-tooltip-title]:hover:before {
  visibility: visible;
  -webkit-animation: fadeIn .35s backwards;
  animation: fadeIn .35s backwards;
}

.tooltip[data-tooltip-title].top:before {
  bottom: 0;
  top: auto;
  -webkit-transform: translateY(-100%) translateX(-50%);
  transform: translateY(-100%) translateX(-50%);
}

.slide.before {
  -webkit-transform: translate3d(0,-50%,0);
  transform: translate3d(0,-50%,0);
}

.slide.after,
.slide:first-child {
  -webkit-transform: translate3d(0,50%,0);
  transform: translate3d(0,50%,0);
  will-change: transform;
}

.slide.after,
.slide.before {
  opacity: 0;
}

.slide.selected {
  -webkit-transform: translate3d(0,0,0)!important;
  transform: translate3d(0,0,0)!important;
  z-index: 11;
}

.scroll .slide.selected {
  z-index: 10;
}

.page-loaded .slide.selected {
  opacity: 1!important;
}

.horizontal .slide,
.horizontal .slide.before {
  -webkit-transform: translate3D(-50%,0,0);
  transform: translate3D(-50%,0,0);
}

.horizontal .slide.after {
  -webkit-transform: translate3D(50%,0,0);
  transform: translate3D(50%,0,0);
}

.film .slide.before {
  -webkit-transform: translate3D(0,-100%,0);
  transform: translate3D(0,-100%,0);
}

.film .slide.after {
  -webkit-transform: translate3D(0,100%,0);
  transform: translate3D(0,100%,0);
}

.film.horizontal .slide.before {
  -webkit-transform: translate3D(-100%,0,0);
  transform: translate3D(-100%,0,0);
}

.film.horizontal .slide,
.film.horizontal .slide.after {
  -webkit-transform: translate3D(100%,0,0);
  transform: translate3D(100%,0,0);
}

.chain .slide.before {
  -webkit-transform: translate3D(0,-100%,0);
  transform: translate3D(0,-100%,0);
  opacity: 1;
}

.chain .slide.after {
  -webkit-transform: translate3D(0,100%,0);
  transform: translate3D(0,100%,0);
  opacity: 1;
}

.chain.horizontal .slide.before {
  -webkit-transform: translate3D(-100%,0,0);
  transform: translate3D(-100%,0,0);
  opacity: 1;
}

.chain.horizontal .slide,
.chain.horizontal .slide.after {
  -webkit-transform: translate3D(100%,0,0);
  transform: translate3D(100%,0,0);
  opacity: 1;
}

.zen .slide.before {
  -webkit-transform: translateY(-100%) scale(.8);
  transform: translateY(-100%) scale(.8);
}

.zen .slide,
.zen .slide.after {
  -webkit-transform: translateY(100%) scale(.8);
  transform: translateY(100%) scale(.8);
}

.zen.horizontal .slide.before {
  -webkit-transform: translateX(-100%) scale(.8);
  transform: translateX(-100%) scale(.8);
}

.zen.horizontal .slide,
.zen.horizontal .slide.after {
  -webkit-transform: translateX(100%) scale(.8);
  transform: translateX(100%) scale(.8);
}

.stack .slide,
.stack .slide.after {
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
}

.stack .slide.after {
  opacity: initial;
}

.stack .slide.after.active,
.stack .slide.selected {
  z-index: 11!important;
}

.stack .slide.before {
  -webkit-transform: scale(.9);
  transform: scale(.9);
}

.stack.horizontal .slide,
.stack.horizontal .slide.after {
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}

.stack.horizontal .slide.before {
  -webkit-transform: scale(.9);
  transform: scale(.9);
}

.cards .slide,
.cards .slide.after {
  -webkit-transform: translateY(10%);
  transform: translateY(10%);
  opacity: initial;
}

.cards .slide.after {
  z-index: 8!important;
  opacity: 0;
}

.cards .slide.selected {
  z-index: 9!important;
}

.cards .slide.before {
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
  z-index: 7;
}

.cards .slide.active.before {
  z-index: 10!important;
}

.cards.horizontal .slide,
.cards.horizontal .slide.after {
  -webkit-transform: translateX(10%);
  transform: translateX(10%);
}

.cards.horizontal .slide.before {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}

.zoom .slide.before {
  -webkit-transform: scale(1.4);
  transform: scale(1.4);
}

.zoom .slide,
.zoom .slide.after {
  -webkit-transform: scale(.8);
  transform: scale(.8);
  opacity: 0;
}

.vertigo .slide.before {
  -webkit-transform: scale(1.4) rotate(-2deg);
  transform: scale(1.4) rotate(-2deg);
}

.vertigo .slide,
.vertigo .slide.after {
  -webkit-transform: scale(.8) rotate(2deg);
  transform: scale(.8) rotate(2deg);
  opacity: 0;
}

.plain .slide,
.plain .slide.after,
.plain .slide.before {
  -webkit-transform: scale(1);
  transform: scale(1);
}

.plain .slide.after:after,
.plain .slide.before:after {
  opacity: 1;
  background: #111;
}

.page-loaded .fast .slide.active,
.page-loaded .fast .slide.selected {
  transition: opacity .7s,-webkit-transform .7s;
  transition: transform .7s,opacity .7s;
  transition: transform .7s,opacity .7s,-webkit-transform .7s;
}

.page-loaded .slide.active,
.page-loaded .slide.selected {
  transition: opacity 1s,-webkit-transform 1s;
  transition: transform 1s,opacity 1s;
  transition: transform 1s,opacity 1s,-webkit-transform 1s;
}

.page-loaded .slow .slide.active,
.page-loaded .slow .slide.selected {
  transition: opacity 1.4s,-webkit-transform 1.4s;
  transition: transform 1.4s,opacity 1.4s;
  transition: transform 1.4s,opacity 1.4s,-webkit-transform 1.4s;
}

.page-loaded .slide.active.entry,
.page-loaded .slide.selected.entry {
  transition: opacity 1s,-webkit-transform 0s;
  transition: transform 0s,opacity 1s;
  transition: transform 0s,opacity 1s,-webkit-transform 0s;
}

.slides.animateOnEvent .panel,
.slides.animated .panel {
  transition: opacity,-webkit-transform;
  transition: transform,opacity;
  transition: transform,opacity,-webkit-transform;
  transition-duration: .8s;
}

.slides.animateOnEvent.fast .panel,
.slides.animated.fast .panel {
  transition-duration: .6s;
}

.slides.animateOnEvent .panel,
.slides.animated.slow .panel {
  transition-duration: 1s;
}

.smooth .active,
.smooth .panel,
.smooth .rolling-element,
.smooth .selected,
.smooth .sidebar {
  transition-timing-function: cubic-bezier(.55,.05,.35,.95)!important;
}

.bounce .active,
.bounce .panel,
.bounce .rolling-element,
.bounce .selected,
.bounce .sidebar {
  transition-timing-function: cubic-bezier(.45,1.15,.5,1)!important;
}

.animated [class*=ae-] {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  transition-timing-function: cubic-bezier(.25,.1,.2,1);
}

.animated.animate .fast [class*=ae-]:not(.done),
.animated.animate [class*=ae-].fast:not(.done),
.animated.fast .animate [class*=ae-]:not(.done),
.animated.fast.animate [class*=ae-]:not(.done) {
  transition-duration: .7s;
}

.animated .animate [class*=ae-]:not(.done),
.animated.animate [class*=ae-]:not(.done) {
  transition-duration: .8s;
}

.animated.animate .slow [class*=ae-]:not(.done),
.animated.animate [class*=ae-].slow:not(.done),
.animated.slow .animate [class*=ae-]:not(.done),
.animated.slow.animate [class*=ae-]:not(.done) {
  transition-duration: 1s;
}

.animated .animate .ae-1:not(.done),
.animated.animate .ae-1:not(.done) {
  transition-delay: 10ms;
}

.animated .animate .ae-2:not(.done),
.animated.animate .ae-2:not(.done) {
  transition-delay: 160ms;
}

.animated .animate .ae-3:not(.done),
.animated.animate .ae-3:not(.done) {
  transition-delay: 310ms;
}

.animated .animate .ae-4:not(.done),
.animated.animate .ae-4:not(.done) {
  transition-delay: 460ms;
}

.animated .animate .ae-5:not(.done),
.animated.animate .ae-5:not(.done) {
  transition-delay: 610ms;
}

.animated .animate .ae-6:not(.done),
.animated.animate .ae-6:not(.done) {
  transition-delay: 760ms;
}

.animated .animate .ae-7:not(.done),
.animated.animate .ae-7:not(.done) {
  transition-delay: 910ms;
}

.animated .animate .ae-8:not(.done),
.animated.animate .ae-8:not(.done) {
  transition-delay: 1.06s;
}

.animated .animate .ae-9:not(.done),
.animated.animate .ae-9:not(.done) {
  transition-delay: 1.21s;
}

.animated .animate .ae-10:not(.done),
.animated.animate .ae-10:not(.done) {
  transition-delay: 1.36s;
}

.animated.animate .ae-1.fast:not(.done),
.animated.animate .fast .ae-1:not(.done),
.animated.fast .animate .ae-1:not(.done),
.animated.fast.animate .ae-1:not(.done) {
  transition-delay: 10ms;
}

.animated.animate .ae-2.fast:not(.done),
.animated.animate .fast .ae-2:not(.done),
.animated.fast .animate .ae-2:not(.done),
.animated.fast.animate .ae-2:not(.done) {
  transition-delay: 110ms;
}

.animated.animate .ae-3.fast:not(.done),
.animated.animate .fast .ae-3:not(.done),
.animated.fast .animate .ae-3:not(.done),
.animated.fast.animate .ae-3:not(.done) {
  transition-delay: 210ms;
}

.animated.animate .ae-4.fast:not(.done),
.animated.animate .fast .ae-4:not(.done),
.animated.fast .animate .ae-4:not(.done),
.animated.fast.animate .ae-4:not(.done) {
  transition-delay: 310ms;
}

.animated.animate .ae-5.fast:not(.done),
.animated.animate .fast .ae-5:not(.done),
.animated.fast .animate .ae-5:not(.done),
.animated.fast.animate .ae-5:not(.done) {
  transition-delay: 410ms;
}

.animated.animate .ae-6.fast:not(.done),
.animated.animate .fast .ae-6:not(.done),
.animated.fast .animate .ae-6:not(.done),
.animated.fast.animate .ae-6:not(.done) {
  transition-delay: 510ms;
}

.animated.animate .ae-7.fast:not(.done),
.animated.animate .fast .ae-7:not(.done),
.animated.fast .animate .ae-7:not(.done),
.animated.fast.animate .ae-7:not(.done) {
  transition-delay: 610ms;
}

.animated.animate .ae-8.fast:not(.done),
.animated.animate .fast .ae-8:not(.done),
.animated.fast .animate .ae-8:not(.done),
.animated.fast.animate .ae-8:not(.done) {
  transition-delay: 710ms;
}

.animated.animate .ae-9.fast:not(.done),
.animated.animate .fast .ae-9:not(.done),
.animated.fast .animate .ae-9:not(.done),
.animated.fast.animate .ae-9:not(.done) {
  transition-delay: 810ms;
}

.animated.animate .ae-10.fast:not(.done),
.animated.animate .fast .ae-10:not(.done),
.animated.fast .animate .ae-10:not(.done),
.animated.fast.animate .ae-10:not(.done) {
  transition-delay: 910ms;
}

.animated.animate .ae-1.slow:not(.done),
.animated.animate .slow .ae-1:not(.done),
.animated.slow .animate .ae-1:not(.done),
.animated.slow.animate .ae-1:not(.done) {
  transition-delay: 10ms;
}

.animated.animate .ae-2.slow:not(.done),
.animated.animate .slow .ae-2:not(.done),
.animated.slow .animate .ae-2:not(.done),
.animated.slow.animate .ae-2:not(.done) {
  transition-delay: 210ms;
}

.animated.animate .ae-3.slow:not(.done),
.animated.animate .slow .ae-3:not(.done),
.animated.slow .animate .ae-3:not(.done),
.animated.slow.animate .ae-3:not(.done) {
  transition-delay: 410ms;
}

.animated.animate .ae-4.slow:not(.done),
.animated.animate .slow .ae-4:not(.done),
.animated.slow .animate .ae-4:not(.done),
.animated.slow.animate .ae-4:not(.done) {
  transition-delay: 610ms;
}

.animated.animate .ae-5.slow:not(.done),
.animated.animate .slow .ae-5:not(.done),
.animated.slow .animate .ae-5:not(.done),
.animated.slow.animate .ae-5:not(.done) {
  transition-delay: 810ms;
}

.animated.animate .ae-6.slow:not(.done),
.animated.animate .slow .ae-6:not(.done),
.animated.slow .animate .ae-6:not(.done),
.animated.slow.animate .ae-6:not(.done) {
  transition-delay: 1.01s;
}

.animated.animate .ae-7.slow:not(.done),
.animated.animate .slow .ae-7:not(.done),
.animated.slow .animate .ae-7:not(.done),
.animated.slow.animate .ae-7:not(.done) {
  transition-delay: 1.21s;
}

.animated.animate .ae-8.slow:not(.done),
.animated.animate .slow .ae-8:not(.done),
.animated.slow .animate .ae-8:not(.done),
.animated.slow.animate .ae-8:not(.done) {
  transition-delay: 1.41s;
}

.animated.animate .ae-9.slow:not(.done),
.animated.animate .slow .ae-9:not(.done),
.animated.slow .animate .ae-9:not(.done),
.animated.slow.animate .ae-9:not(.done) {
  transition-delay: 1.61s;
}

.animated.animate .ae-10.slow:not(.done),
.animated.animate .slow .ae-10:not(.done),
.animated.slow .animate .ae-10:not(.done),
.animated.slow.animate .ae-10:not(.done) {
  transition-delay: 1.81s;
}

.animated .fromBottom [class*=ae-]:not(.done),
.animated [class*=ae-]:not(.done),
.animated.fromBottom [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromBottom:not(.done) {
  visibility: hidden;
  -webkit-transform: translate3d(0,50px,0);
  transform: translate3d(0,50px,0);
  opacity: 0;
}

.animated .fromTop [class*=ae-]:not(.done),
.animated.fromTop [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromTop:not(.done) {
  -webkit-transform: translate3d(0,-50px,0);
  transform: translate3d(0,-50px,0);
}

.animated .fromLeft [class*=ae-]:not(.done),
.animated.fromLeft [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromLeft:not(.done) {
  -webkit-transform: translate3d(-50px,0,0);
  transform: translate3d(-50px,0,0);
}

.animated .fromRight [class*=ae-]:not(.done),
.animated.fromRight [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromRight:not(.done) {
  -webkit-transform: translate3d(50px,0,0);
  transform: translate3d(50px,0,0);
}

.animated .fromCenter [class*=ae-]:not(.done),
.animated.fromCenter [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromCenter:not(.done) {
  -webkit-transform: scale(.9) translate3d(0,0,0);
  transform: scale(.9) translate3d(0,0,0);
}

.animated .fromAbove [class*=ae-]:not(.done),
.animated.fromAbove [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromAbove:not(.done) {
  -webkit-transform: scale(1.1) translate3d(0,0,0);
  transform: scale(1.1) translate3d(0,0,0);
}

.animated .fromBottomLeft [class*=ae-]:not(.done),
.animated.fromBottomLeft [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromBottomLeft:not(.done) {
  -webkit-transform: translate3d(-50px,50px,0);
  transform: translate3d(-50px,50px,0);
}

.animated .fromTopLeft [class*=ae-]:not(.done),
.animated.fromTopLeft [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromTopLeft:not(.done) {
  -webkit-transform: translate3d(-50px,-50px,0);
  transform: translate3d(-50px,-50px,0);
}

.animated .fromBottomRight [class*=ae-]:not(.done),
.animated.fromBottomRight [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromBottomRight:not(.done) {
  -webkit-transform: translate3d(50px,50px,0);
  transform: translate3d(50px,50px,0);
}

.animated .fromTopRight [class*=ae-]:not(.done),
.animated.fromTopRight [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromTopRight:not(.done) {
  -webkit-transform: translate3d(50px,-50px,0);
  transform: translate3d(50px,-50px,0);
}

.animated .fadeIn [class*=ae-]:not(.done),
.animated.fadeIn [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fadeIn:not(.done) {
  -webkit-transform: scale(1) translate3d(0,0,0);
  transform: scale(1) translate3d(0,0,0);
}

.animated .fromBlur [class*=ae-]:not(.done),
.animated.fromBlur [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromBlur:not(.done) {
  -webkit-transform: scale(1) translate3d(0,0,0);
  transform: scale(1) translate3d(0,0,0);
  -webkit-filter: blur(10px);
  filter: blur(10px);
}

.slides .animated.animate.active [class*=ae-]:not(.done),
.slides.animated .animate.active [class*=ae-]:not(.done) {
  opacity: 1;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  visibility: visible;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  -webkit-filter: none;
  filter: none;
}

.animateOnEvent,
.box-67,
.box-67 .thumbnail-67 img {
  -webkit-backface-visibility: hidden;
}

.animateOnEvent {
  backface-visibility: hidden;
}

.animateOnEvent [class*=ae-]:not(.done):not(.do) {
  opacity: 0;
  visibility: hidden;
}

.animateOnEvent [class*=ae-].do {
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  -webkit-animation-duration: .8s;
  animation-duration: .8s;
  visibility: visible;
}

.animateOnEvent .fast [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fast,
.animateOnEvent.fast [class*=ae-].do {
  -webkit-animation-duration: .7s;
  animation-duration: .7s;
}

.animateOnEvent .slow [class*=ae-].do,
.animateOnEvent [class*=ae-].do.slow,
.animateOnEvent.slow [class*=ae-].do {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
}

.animateOnEvent .fromBottom [class*=ae-].do,
.animateOnEvent [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromBottom,
.animateOnEvent.fromBottom [class*=ae-].do {
  -webkit-animation-name: fromBottom;
  animation-name: fromBottom;
}

.animateOnEvent .fromTop [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromTop,
.animateOnEvent.fromTop [class*=ae-].do {
  -webkit-animation-name: fromTop;
  animation-name: fromTop;
}

.animateOnEvent .fromLeft [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromLeft,
.animateOnEvent.fromLeft [class*=ae-].do {
  -webkit-animation-name: fromLeft;
  animation-name: fromLeft;
}

.animateOnEvent .fromRight [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromRight,
.animateOnEvent.fromRight [class*=ae-].do {
  -webkit-animation-name: fromRight;
  animation-name: fromRight;
}

.animateOnEvent .fromCenter [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromCenter,
.animateOnEvent.fromCenter [class*=ae-].do {
  -webkit-animation-name: fromCenter;
  animation-name: fromCenter;
}

.animateOnEvent .fromAbove [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromAbove,
.animateOnEvent.fromAbove [class*=ae-].do {
  -webkit-animation-name: fromAbove;
  animation-name: fromAbove;
}

.animateOnEvent .fromBottomLeft [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromBottomLeft,
.animateOnEvent.fromBottomLeft [class*=ae-].do {
  -webkit-animation-name: fromBottomLeft;
  animation-name: fromBottomLeft;
}

.animateOnEvent .fromTopLeft [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromTopLeft,
.animateOnEvent.fromTopLeft [class*=ae-].do {
  -webkit-animation-name: fromTopLeft;
  animation-name: fromTopLeft;
}

.animateOnEvent .fromBottomRight [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromBottomRight,
.animateOnEvent.fromBottomRight [class*=ae-].do {
  -webkit-animation-name: fromBottomRight;
  animation-name: fromBottomRight;
}

.animateOnEvent .fromTopRight [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromTopRight,
.animateOnEvent.fromTopRight [class*=ae-].do {
  -webkit-animation-name: fromTopRight;
  animation-name: fromTopRight;
}

.animateOnEvent .fadeIn [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fadeIn,
.animateOnEvent.fadeIn [class*=ae-].do {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.animateOnEvent .fromBlur [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromBlur,
.animateOnEvent.fromBlur [class*=ae-].do {
  -webkit-animation-name: fromBlur;
  animation-name: fromBlur;
}

@-webkit-keyframes fromBottom {
  from {
    -webkit-transform: translate3d(0,50px,0);
    transform: translate3d(0,50px,0);
    opacity: 0;
  }
}

@keyframes fromBottom {
  from {
    -webkit-transform: translate3d(0,50px,0);
    transform: translate3d(0,50px,0);
    opacity: 0;
  }
}

@-webkit-keyframes fromTop {
  from {
    -webkit-transform: translate3d(0,-50px,0);
    transform: translate3d(0,-50px,0);
    opacity: 0;
  }
}

@keyframes fromTop {
  from {
    -webkit-transform: translate3d(0,-50px,0);
    transform: translate3d(0,-50px,0);
    opacity: 0;
  }
}

@-webkit-keyframes fromLeft {
  from {
    -webkit-transform: translate3d(-25px,0,0);
    transform: translate3d(-25px,0,0);
    opacity: 0;
  }
}

@keyframes fromLeft {
  from {
    -webkit-transform: translate3d(-25px,0,0);
    transform: translate3d(-25px,0,0);
    opacity: 0;
  }
}

@-webkit-keyframes fromRight {
  from {
    -webkit-transform: translate3d(25px,0,0);
    transform: translate3d(25px,0,0);
    opacity: 0;
  }
}

@keyframes fromRight {
  from {
    -webkit-transform: translate3d(25px,0,0);
    transform: translate3d(25px,0,0);
    opacity: 0;
  }
}

@-webkit-keyframes fromCenter {
  from {
    -webkit-transform: scale(.9) translate3d(0,0,0);
    transform: scale(.9) translate3d(0,0,0);
    opacity: 0;
  }
}

@keyframes fromCenter {
  from {
    -webkit-transform: scale(.9) translate3d(0,0,0);
    transform: scale(.9) translate3d(0,0,0);
    opacity: 0;
  }
}

@-webkit-keyframes fromAbove {
  from {
    -webkit-transform: scale(1.1) translate3d(0,0,0);
    transform: scale(1.1) translate3d(0,0,0);
    opacity: 0;
  }
}

@keyframes fromAbove {
  from {
    -webkit-transform: scale(1.1) translate3d(0,0,0);
    transform: scale(1.1) translate3d(0,0,0);
    opacity: 0;
  }
}

@-webkit-keyframes fromBottomLeft {
  from {
    -webkit-transform: translate3d(-50px,50px,0);
    transform: translate3d(-50px,50px,0);
    opacity: 0;
  }
}

@keyframes fromBottomLeft {
  from {
    -webkit-transform: translate3d(-50px,50px,0);
    transform: translate3d(-50px,50px,0);
    opacity: 0;
  }
}

@-webkit-keyframes fromTopLeft {
  from {
    -webkit-transform: translate3d(-50px,-50px,0);
    transform: translate3d(-50px,-50px,0);
    opacity: 0;
  }
}

@keyframes fromTopLeft {
  from {
    -webkit-transform: translate3d(-50px,-50px,0);
    transform: translate3d(-50px,-50px,0);
    opacity: 0;
  }
}

@-webkit-keyframes fromBottomRight {
  from {
    -webkit-transform: translate3d(50px,50px,0);
    transform: translate3d(50px,50px,0);
    opacity: 0;
  }
}

@keyframes fromBottomRight {
  from {
    -webkit-transform: translate3d(50px,50px,0);
    transform: translate3d(50px,50px,0);
    opacity: 0;
  }
}

@-webkit-keyframes fromTopRight {
  from {
    -webkit-transform: translate3d(50px,-50px,0);
    transform: translate3d(50px,-50px,0);
    opacity: 0;
  }
}

@keyframes fromTopRight {
  from {
    -webkit-transform: translate3d(50px,-50px,0);
    transform: translate3d(50px,-50px,0);
    opacity: 0;
  }
}

@-webkit-keyframes fadeIn {
  from {
    -webkit-transform: scale(1) translate3d(0,0,0);
    transform: scale(1) translate3d(0,0,0);
    opacity: 0;
  }
}

@keyframes fadeIn {
  from {
    -webkit-transform: scale(1) translate3d(0,0,0);
    transform: scale(1) translate3d(0,0,0);
    opacity: 0;
  }
}

@-webkit-keyframes fromBlur {
  from {
    -webkit-transform: scale(1) translate3d(0,0,0);
    transform: scale(1) translate3d(0,0,0);
    -webkit-filter: blur(10px);
    filter: blur(10px);
    opacity: 0;
  }
}

@keyframes fromBlur {
  from {
    -webkit-transform: scale(1) translate3d(0,0,0);
    transform: scale(1) translate3d(0,0,0);
    -webkit-filter: blur(10px);
    filter: blur(10px);
    opacity: 0;
  }
}

.animateOnEvent .ae-1,
.animateOnEvent .ae-1.fast,
.animateOnEvent .fast .ae-1.fast,
.animateOnEvent.fast .ae-1 {
  -webkit-animation-delay: 10ms;
  animation-delay: 10ms;
}

.animateOnEvent .ae-2,
.animateOnEvent .ae-2.fast,
.animateOnEvent .fast .ae-2.fast,
.animateOnEvent.fast .ae-2 {
  -webkit-animation-delay: 110ms;
  animation-delay: 110ms;
}

.animateOnEvent .ae-3,
.animateOnEvent .ae-3.fast,
.animateOnEvent .fast .ae-3.fast,
.animateOnEvent.fast .ae-3 {
  -webkit-animation-delay: 210ms;
  animation-delay: 210ms;
}

.animateOnEvent .ae-4,
.animateOnEvent .ae-4.fast,
.animateOnEvent .fast .ae-4.fast,
.animateOnEvent.fast .ae-4 {
  -webkit-animation-delay: 310ms;
  animation-delay: 310ms;
}

.animateOnEvent .ae-5,
.animateOnEvent .ae-5.fast,
.animateOnEvent .fast .ae-5.fast,
.animateOnEvent.fast .ae-5 {
  -webkit-animation-delay: 410ms;
  animation-delay: 410ms;
}

.animateOnEvent .ae-6,
.animateOnEvent .ae-6.fast,
.animateOnEvent .fast .ae-6.fast,
.animateOnEvent.fast .ae-6 {
  -webkit-animation-delay: 510ms;
  animation-delay: 510ms;
}

.animateOnEvent .ae-7,
.animateOnEvent .ae-7.fast,
.animateOnEvent .fast .ae-7.fast,
.animateOnEvent.fast .ae-7 {
  -webkit-animation-delay: 610ms;
  animation-delay: 610ms;
}

.animateOnEvent .ae-8,
.animateOnEvent .ae-8.fast,
.animateOnEvent .fast .ae-8.fast,
.animateOnEvent.fast .ae-8 {
  -webkit-animation-delay: 710ms;
  animation-delay: 710ms;
}

.animateOnEvent .ae-9,
.animateOnEvent .ae-9.fast,
.animateOnEvent .fast .ae-9.fast,
.animateOnEvent.fast .ae-9 {
  -webkit-animation-delay: 810ms;
  animation-delay: 810ms;
}

.animateOnEvent .ae-10,
.animateOnEvent .ae-10.fast,
.animateOnEvent .fast .ae-10.fast,
.animateOnEvent.fast .ae-10 {
  -webkit-animation-delay: 910ms;
  animation-delay: 910ms;
}

.animateOnEvent .ae-1.slow,
.animateOnEvent .slow .ae-1,
.animateOnEvent.slow .ae-1 {
  -webkit-animation-delay: 10ms;
  animation-delay: 10ms;
}

.animateOnEvent .ae-2.slow,
.animateOnEvent .slow .ae-2,
.animateOnEvent.slow .ae-2 {
  -webkit-animation-delay: 210ms;
  animation-delay: 210ms;
}

.animateOnEvent .ae-3.slow,
.animateOnEvent .slow .ae-3,
.animateOnEvent.slow .ae-3 {
  -webkit-animation-delay: 410ms;
  animation-delay: 410ms;
}

.animateOnEvent .ae-4.slow,
.animateOnEvent .slow .ae-4,
.animateOnEvent.slow .ae-4 {
  -webkit-animation-delay: 610ms;
  animation-delay: 610ms;
}

.animateOnEvent .ae-5.slow,
.animateOnEvent .slow .ae-5,
.animateOnEvent.slow .ae-5 {
  -webkit-animation-delay: 810ms;
  animation-delay: 810ms;
}

.animateOnEvent .ae-6.slow,
.animateOnEvent .slow .ae-6,
.animateOnEvent.slow .ae-6 {
  -webkit-animation-delay: 1.01s;
  animation-delay: 1.01s;
}

.animateOnEvent .ae-7.slow,
.animateOnEvent .slow .ae-7,
.animateOnEvent.slow .ae-7 {
  -webkit-animation-delay: 1.21s;
  animation-delay: 1.21s;
}

.animateOnEvent .ae-8.slow,
.animateOnEvent .slow .ae-8,
.animateOnEvent.slow .ae-8 {
  -webkit-animation-delay: 1.41s;
  animation-delay: 1.41s;
}

.animateOnEvent .ae-9.slow,
.animateOnEvent .slow .ae-9,
.animateOnEvent.slow .ae-9 {
  -webkit-animation-delay: 1.61s;
  animation-delay: 1.61s;
}

.animateOnEvent .ae-10.slow,
.animateOnEvent .slow .ae-10,
.animateOnEvent.slow .ae-10 {
  -webkit-animation-delay: 1.81s;
  animation-delay: 1.81s;
}

.slides:not(.scroll) .rolling-element {
  transition: 1s;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  will-change: transform;
}

.slides:not(.scroll).fast .rolling-element {
  transition-duration: .7s;
}

.slides:not(.scroll).slow .rolling-element {
  transition-duration: 1.4s;
}

.slides:not(.scroll) .slide.before .rolling-element {
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-10 {
  -webkit-transform: translateY(10%);
  transform: translateY(10%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-20 {
  -webkit-transform: translateY(20%);
  transform: translateY(20%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-30 {
  -webkit-transform: translateY(30%);
  transform: translateY(30%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-40 {
  -webkit-transform: translateY(40%);
  transform: translateY(40%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-50 {
  -webkit-transform: translateY(50%);
  transform: translateY(50%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-60 {
  -webkit-transform: translateY(60%);
  transform: translateY(60%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-70 {
  -webkit-transform: translateY(70%);
  transform: translateY(70%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-80 {
  -webkit-transform: translateY(80%);
  transform: translateY(80%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-90 {
  -webkit-transform: translateY(90%);
  transform: translateY(90%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse {
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-10 {
  -webkit-transform: translateY(-10%);
  transform: translateY(-10%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-20 {
  -webkit-transform: translateY(-20%);
  transform: translateY(-20%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-30 {
  -webkit-transform: translateY(-30%);
  transform: translateY(-30%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-40 {
  -webkit-transform: translateY(-40%);
  transform: translateY(-40%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-50 {
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-60 {
  -webkit-transform: translateY(-60%);
  transform: translateY(-60%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-70 {
  -webkit-transform: translateY(-70%);
  transform: translateY(-70%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-80 {
  -webkit-transform: translateY(-80%);
  transform: translateY(-80%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-90 {
  -webkit-transform: translateY(-90%);
  transform: translateY(-90%);
}

.slides:not(.scroll) .slide.after .rolling-element {
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-10 {
  -webkit-transform: translateY(-10%);
  transform: translateY(-10%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-20 {
  -webkit-transform: translateY(-20%);
  transform: translateY(-20%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-30 {
  -webkit-transform: translateY(-30%);
  transform: translateY(-30%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-40 {
  -webkit-transform: translateY(-40%);
  transform: translateY(-40%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-50 {
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-60 {
  -webkit-transform: translateY(-60%);
  transform: translateY(-60%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-70 {
  -webkit-transform: translateY(-70%);
  transform: translateY(-70%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-80 {
  -webkit-transform: translateY(-80%);
  transform: translateY(-80%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-90 {
  -webkit-transform: translateY(-90%);
  transform: translateY(-90%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse {
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-10 {
  -webkit-transform: translateY(10%);
  transform: translateY(10%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-20 {
  -webkit-transform: translateY(20%);
  transform: translateY(20%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-30 {
  -webkit-transform: translateY(30%);
  transform: translateY(30%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-40 {
  -webkit-transform: translateY(40%);
  transform: translateY(40%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-50 {
  -webkit-transform: translateY(50%);
  transform: translateY(50%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-60 {
  -webkit-transform: translateY(60%);
  transform: translateY(60%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-70 {
  -webkit-transform: translateY(70%);
  transform: translateY(70%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-80 {
  -webkit-transform: translateY(80%);
  transform: translateY(80%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-90 {
  -webkit-transform: translateY(90%);
  transform: translateY(90%);
}

.slides.animateOnEvent .kenBurns .background,
.slides.animateOnEvent .kenBurns.zoomin .background,
.slides.animated .kenBurns .background,
.slides.animated .kenBurns.zoomin .background {
  -webkit-transform: scale(1.08) rotate(-.02deg);
  transform: scale(1.08) rotate(-.02deg);
  opacity: .2;
  z-index: 1;
}

.slides.animateOnEvent .kenBurns.zoomin:not(.video) .background,
.slides.animateOnEvent .kenBurns:not(.video) .background,
.slides.animated .kenBurns.zoomin:not(.video) .background,
.slides.animated .kenBurns:not(.video) .background {
  transition: opacity 1s ease,-webkit-transform 5s cubic-bezier(.3,0,.7,1);
  transition: transform 5s cubic-bezier(.3,0,.7,1),opacity 1s ease;
  transition: transform 5s cubic-bezier(.3,0,.7,1),opacity 1s ease,-webkit-transform 5s cubic-bezier(.3,0,.7,1);
}

.animateOnEvent .active .kenBurns.zoomin:not(.video) .background,
.animateOnEvent .active.kenBurns.zoomin:not(.video) .background,
.animateOnEvent .active.kenBurns:not(.video) .background,
.animated .active .kenBurns.zoomin:not(.video) .background,
.animated .active.kenBurns.zoomin:not(.video) .background,
.animated .active.kenBurns:not(.video) .background {
  opacity: 1;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

.slides.animateOnEvent .kenBurns.zoomin:not(.video) .background,
.slides.animated .kenBurns.zoomin:not(.video) .background {
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

.animateOnEvent .active.kenBurns.zoomin:not(.video) .background,
.animated .active.kenBurns.zoomin:not(.video) .background,
.windows .slides.animateOnEvent .active.kenBurns.zoomin:not(.video) .background,
.windows .slides.animated .active.kenBurns.zoomin:not(.video) .background {
  -webkit-transform: scale(1.08) rotate(-.02deg);
  transform: scale(1.08) rotate(-.02deg);
}

.mobile .kenBurns .background,
.mobile .kenBurns.zoomin .background {
  transition: 0s;
  -webkit-transform: none;
  transform: none;
}

.slides.animateOnEvent .parallax:not(.video) .background,
.slides.animated .parallax:not(.video) .background {
  -webkit-transform: translate3d(0,0,0) scale(1.25);
  transform: translate3d(0,0,0) scale(1.25);
  transition: -webkit-transform-origin 1s,-webkit-transform 1s;
  transition: transform-origin 1s,transform 1s;
  transition: transform-origin 1s,transform 1s,-webkit-transform-origin 1s,-webkit-transform 1s;
}

.slides.animateOnEvent.fast .parallax:not(.video) .background,
.slides.animated.fast .parallax:not(.video) .background {
  transition: -webkit-transform-origin .6s,-webkit-transform .6s;
  transition: transform-origin .6s,transform .6s;
  transition: transform-origin .6s,transform .6s,-webkit-transform-origin .6s,-webkit-transform .6s;
}

.slides.animateOnEvent.slow .parallax:not(.video) .background,
.slides.animated.slow .parallax:not(.video) .background {
  transition: -webkit-transform-origin 1.4s,-webkit-transform 1.4s;
  transition: transform-origin 1.4s,transform 1.4s;
  transition: transform-origin 1.4s,transform 1.4s,-webkit-transform-origin 1.4s,-webkit-transform 1.4s;
}

.slides.animateOnEvent .parallax.animate:not(.video) .background,
.slides.animated .parallax.animate:not(.video) .background {
  -webkit-transform-origin: center;
  transform-origin: center;
}

.slides.animateOnEvent .slide.after.parallax:not(.video) .background,
.slides.animated .slide.after.parallax:not(.video) .background {
  -webkit-transform-origin: top center;
  transform-origin: top center;
}

.slides.animateOnEvent .slide.before.parallax:not(.video) .background,
.slides.animated .slide.before.parallax:not(.video) .background {
  -webkit-transform-origin: bottom center;
  transform-origin: bottom center;
}

.slides.animateOnEvent.horizontal .slide.after.parallax:not(.video) .background,
.slides.animated.horizontal .slide.after.parallax:not(.video) .background {
  -webkit-transform-origin: left center;
  transform-origin: left center;
}

.slides.animateOnEvent.horizontal .slide.before.parallax:not(.video) .background,
.slides.animated.horizontal .slide.before.parallax:not(.video) .background {
  -webkit-transform-origin: right center;
  transform-origin: right center;
}

.slides.animateOnEvent.zoom .slide.after.parallax:not(.video) .background,
.slides.animated.zoom .slide.after.parallax:not(.video) .background {
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: translate3d(0,0,0) scale(1);
  transform: translate3d(0,0,0) scale(1);
}

.slides.animateOnEvent.zoom .slide.animate.parallax:not(.video) .background,
.slides.animated.zoom .slide.animate.parallax:not(.video) .background {
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: translate3d(0,0,0) scale(1.1);
  transform: translate3d(0,0,0) scale(1.1);
}

.slides.animateOnEvent.plain .slide.after.parallax:not(.video) .background,
.slides.animateOnEvent.plain .slide.animate.parallax:not(.video) .background,
.slides.animateOnEvent.plain .slide.before.parallax:not(.video) .background,
.slides.animateOnEvent.zoom .slide.before.parallax:not(.video) .background,
.slides.animated.plain .slide.after.parallax:not(.video) .background,
.slides.animated.plain .slide.animate.parallax:not(.video) .background,
.slides.animated.plain .slide.before.parallax:not(.video) .background,
.slides.animated.zoom .slide.before.parallax:not(.video) .background {
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: translate3d(0,0,0) scale(1);
  transform: translate3d(0,0,0) scale(1);
}

.slides.animateOnEvent .scenic:not(.video) .background,
.slides.animated .scenic:not(.video) .background {
  -webkit-animation: scenic 140s cubic-bezier(.2,0,.8,1) infinite;
  animation: scenic 140s cubic-bezier(.2,0,.8,1) infinite;
}

@-webkit-keyframes scenic {
  50% {
    -webkit-transform: scale(1.5) rotate(-.02deg);
    transform: scale(1.5) rotate(-.02deg);
  }
}

@keyframes scenic {
  50% {
    -webkit-transform: scale(1.5) rotate(-.02deg);
    transform: scale(1.5) rotate(-.02deg);
  }
}

.mobile .simplifiedMobile,
.scroll {
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.scroll .content .mobile .simplifiedMobile .content {
  -webkit-overflow-scrolling: initial;
  overflow: hidden;
}

.scroll .wrap {
  overflow: hidden;
}

.mobile .simplifiedMobile .container,
.mobile .simplifiedMobile .content,
.mobile .simplifiedMobile .slide,
.scroll .container,
.scroll .slide,
.scroll .slide .content {
  position: relative!important;
  height: auto;
  opacity: 1;
}

.mobile .simplifiedMobile .popup .container,
.mobile .simplifiedMobile .popup .content {
  position: absolute!important;
  height: 100%;
}

.mobile .simplifiedMobile .container,
.scroll .container {
  height: 100vh;
}

.mobile .slide.autoHeight .simplifiedMobile .container,
.scroll .slide.autoHeight .container {
  height: auto;
}

.mobile .simplifiedMobile .slide .background,
.scroll .slide .background {
  position: absolute!important;
}

.mobile .simplifiedMobile .slide:not(.autoHeight) .background,
.scroll .slide:not(.autoHeight) .background {
  min-height: 100vh;
}

.mobile .simplifiedMobile .slide,
.mobile .simplifiedMobile .slide.after,
.mobile .simplifiedMobile .slide.before,
.scroll .slide,
.scroll .slide.after,
.scroll .slide.before {
  visibility: visible;
  -webkit-transform: none!important;
  transform: none!important;
}

.mobile .simplifiedMobile .slide,
.mobile .simplifiedMobile .slide.after,
.mobile .simplifiedMobile .slide.before {
  opacity: 1!important;
}

.page-loaded.mobile.sidebarShown .simplifiedMobile .slide,
.page-loaded.sidebarShown .scroll .slide {
  -webkit-transform: translate3d(0,0,0)!important;
  transform: translate3d(0,0,0)!important;
  pointer-events: none;
  opacity: .5!important;
}

.page-loaded .scroll .slide {
  transition: opacity .5s,-webkit-transform .5s!important;
  transition: transform .5s,opacity .5s!important;
  transition: transform .5s,opacity .5s,-webkit-transform .5s!important;
}

.mobile .simplifiedMobile .navigation {
  display: none;
}

.mobile .simplifiedMobile [class*=ae-] {
  visibility: visible!important;
  opacity: 1!important;
  -webkit-transform: none!important;
  transform: none!important;
}

.scroll .parallax:not(.video) .background {
  -webkit-transform: translate3d(0,0,0) scale(1.25);
  transform: translate3d(0,0,0) scale(1.25);
  transition: none!important;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
}

@-webkit-keyframes zoomOut {
  from {
    opacity: 0;
    -webkit-transform: scale(.86);
    transform: scale(.86);
  }
}

@keyframes zoomOut {
  from {
    opacity: 0;
    -webkit-transform: scale(.86);
    transform: scale(.86);
  }
}

@-webkit-keyframes riseUp {
  from {
    opacity: 0;
    -webkit-transform: scale(.86) translateY(50px);
    transform: scale(.86) translateY(50px);
  }
}

@keyframes riseUp {
  from {
    opacity: 0;
    -webkit-transform: scale(.86) translateY(50px);
    transform: scale(.86) translateY(50px);
  }
}

html {
  font-size: 6px;
  font-weight: 400;
  color: #202020;
}

@media (max-width:550px) {
  html {
    font-size: 5px;
  }
}

@media (min-width:767px) {
  html {
    font-size: 7px;
  }
}

@media (min-width:1024px) {
  html {
    font-size: 6px;
  }
}

body {
  font-size: 15px;
}

.typography .h1,
.typography .h2,
.typography .h3,
.typography .h4,
.typography .h5,
.typography .h6,
.typography h1,
.typography h2,
.typography h3,
.typography h4,
.typography h5,
.typography h6 {
  font-style: normal;
  letter-spacing: normal;
}

.typography .h1.ultraLight,
.typography .h2.ultraLight,
.typography .h3.ultraLight,
.typography .h4.ultraLight,
.typography .h5.ultraLight,
.typography .h6.ultraLight,
.typography h1.ultraLight,
.typography h2.ultraLight,
.typography h3.ultraLight,
.typography h4.ultraLight,
.typography h5.ultraLight,
.typography h6.ultraLight {
  font-weight: 100;
}

.typography .h1.light,
.typography .h2.light,
.typography .h3.light,
.typography .h4.light,
.typography .h5.light,
.typography .h6.light,
.typography h1.light,
.typography h2.light,
.typography h3.light,
.typography h4.light,
.typography h5.light,
.typography h6.light {
  font-weight: 300;
}

.typography .h1.normal,
.typography .h2.normal,
.typography .h3.normal,
.typography .h4.normal,
.typography .h5.normal,
.typography .h6.normal,
.typography h1.normal,
.typography h2.normal,
.typography h3.normal,
.typography h4.normal,
.typography h5.normal,
.typography h6.normal {
  font-weight: 400;
}

.typography .h1.semiBold,
.typography .h2.semiBold,
.typography .h3.semiBold,
.typography .h4.semiBold,
.typography .h5.semiBold,
.typography .h6.semiBold,
.typography h1.semiBold,
.typography h2.semiBold,
.typography h3.semiBold,
.typography h4.semiBold,
.typography h5.semiBold,
.typography h6.semiBold {
  font-weight: 500;
  letter-spacing: -.05em;
}

.typography .h1.bold,
.typography .h2.bold,
.typography .h3.bold,
.typography .h4.bold,
.typography .h5.bold,
.typography .h6.bold,
.typography h1.bold,
.typography h2.bold,
.typography h3.bold,
.typography h4.bold,
.typography h5.bold,
.typography h6.bold {
  font-weight: 600;
  letter-spacing: -.04em;
}

.typography .h1.ultraBold,
.typography .h2.ultraBold,
.typography .h3.ultraBold,
.typography .h4.ultraBold,
.typography .h5.ultraBold,
.typography .h6.ultraBold,
.typography h1.ultraBold,
.typography h2.ultraBold,
.typography h3.ultraBold,
.typography h4.ultraBold,
.typography h5.ultraBold,
.typography h6.ultraBold {
  font-weight: 800;
  letter-spacing: -.03em;
}

.typography .h1,
.typography h1 {
  font-size: 8.4rem;
  line-height: 10rem;
  margin-top: 8rem;
  padding-top: .0138rem;
  padding-bottom: .9862rem;
  margin-bottom: 1rem;
}

.typography .h1.small,
.typography h1.small {
  font-size: 6.4rem;
  line-height: 6rem;
  margin-top: 3rem;
  padding-top: .7248rem;
  padding-bottom: .2752rem;
  margin-bottom: 2rem;
}

.typography .h1.large,
.typography h1.large {
  font-size: 9.6rem;
  line-height: 10rem;
  margin-top: 7rem;
  padding-top: .5872rem;
  padding-bottom: .4128rem;
  margin-bottom: 4rem;
}

.typography .h1.huge,
.typography h1.huge {
  font-size: 14.6rem;
  line-height: 15rem;
  margin-top: 10rem;
  padding-top: .3097rem;
  padding-bottom: .6903rem;
  margin-bottom: 3rem;
}

.typography .h2,
.typography h2 {
  font-size: 7.4rem;
  line-height: 8rem;
  margin-top: 6rem;
  padding-top: .3693rem;
  padding-bottom: .6307rem;
  margin-bottom: 1rem;
}

.typography .h2.small,
.typography h2.small {
  font-size: 5.6rem;
  line-height: 6rem;
  margin-top: 4rem;
  padding-top: .0092rem;
  padding-bottom: .9908rem;
  margin-bottom: -1rem;
}

.typography .h2.large,
.typography h2.large {
  font-size: 8.8rem;
  line-height: 9rem;
  margin-top: 6rem;
  padding-top: .3716rem;
  padding-bottom: .6284rem;
  margin-bottom: 1rem;
}

.typography .h2.huge,
.typography h2.huge {
  font-size: 11.2rem;
  line-height: 12rem;
  margin-top: 8rem;
  padding-top: .0184rem;
  padding-bottom: .9816rem;
  margin-bottom: 1rem;
}

.typography .h3,
.typography h3 {
  font-size: 6.4rem;
  line-height: 8rem;
  margin-top: 3rem;
  padding-top: .7248rem;
  padding-bottom: .2752rem;
  margin-bottom: 0;
}

.typography .h3.small,
.typography h3.small {
  font-size: 4.8rem;
  line-height: 6rem;
  margin-top: 2rem;
  padding-top: .2936rem;
  padding-bottom: .7064rem;
  margin-bottom: -1rem;
}

.typography .h3.large,
.typography h3.large {
  font-size: 8rem;
  line-height: 10rem;
  margin-top: 4rem;
  padding-top: .156rem;
  padding-bottom: .844rem;
  margin-bottom: 0;
}

.typography .h3.huge,
.typography h3.huge {
  font-size: 9.6rem;
  line-height: 10rem;
  margin-top: 5rem;
  padding-top: .5872rem;
  padding-bottom: .4128rem;
  margin-bottom: 2rem;
}

.typography .h4,
.typography h4 {
  font-size: 5.2rem;
  line-height: 6rem;
  margin-top: 4rem;
  padding-top: .1514rem;
  padding-bottom: .8486rem;
  margin-bottom: -1rem;
}

.typography .h5,
.typography h5 {
  font-size: 4.4rem;
  line-height: 6rem;
  margin-top: 4rem;
  padding-top: .4358rem;
  padding-bottom: .5642rem;
  margin-bottom: -1rem;
}

.typography .h6,
.typography h6 {
  font-size: 4rem;
  line-height: 4rem;
  margin-top: 3rem;
  padding-top: .578rem;
  padding-bottom: .422rem;
  margin-bottom: 0;
}

.typography .p,
.typography .p:not(.hero)+p,
.typography p,
.typography p:not(.hero)+p {
  font-size: 3.5rem;
  line-height: 5rem;
  margin-top: 0;
  padding-top: .25575rem;
  padding-bottom: .74425rem;
  margin-bottom: 1rem;
  text-rendering: optimizeLegibility;
}

.typography .p.micro,
.typography .p:not(.hero)+p.micro,
.typography p.micro,
.typography p:not(.hero)+p.micro {
  font-size: 2.6rem;
  line-height: 4rem;
  margin-top: 2rem;
  padding-top: .0757rem;
  padding-bottom: .9243rem;
  margin-bottom: -1rem;
}

.typography .p.small,
.typography .p:not(.hero)+p.small,
.typography p.small,
.typography p:not(.hero)+p.small {
  font-size: 3rem;
  line-height: 4rem;
  margin-top: 1rem;
  padding-top: .9335rem;
  padding-bottom: .0665rem;
  margin-bottom: 0;
}

.typography .p.hero,
.typography .p:not(.hero)+p.hero,
.typography p.hero,
.typography p:not(.hero)+p.hero {
  font-size: 5rem;
  line-height: 6rem;
  margin-top: 2rem;
  padding-top: .2225rem;
  padding-bottom: .7775rem;
  margin-bottom: 3rem;
  font-weight: 300;
  letter-spacing: -.16rem;
}

.typography strong {
  font-weight: 600;
}

.typography em {
  font-weight: 500;
}

.typography li {
  font-size: 3.5rem;
  line-height: 4rem;
  margin-top: -1rem;
  padding-top: .75575rem;
  padding-bottom: .24425rem;
  margin-bottom: 1rem;
  opacity: .8;
}

.typography blockquote,
.typography q {
  font-size: 3.2rem;
  line-height: 4rem;
  opacity: .9;
}

.typography ol,
.typography ul {
  margin: 4rem 4rem 4rem 8rem;
}

.typography ul li {
  list-style: disc;
}

.typography ol li {
  list-style: decimal;
}

.typography blockquote {
  border-left: 5px solid #eee;
  margin: 5rem 4rem;
  padding: 1rem 4rem;
}

.typography q {
  margin-top: 5rem;
  margin-bottom: 6rem;
  display: block;
  padding: .8624rem 4rem .1376rem;
}

.typography q:after,
.typography q:before {
  font-size: 5rem;
  line-height: .1rem;
  vertical-align: -1rem;
}

.typography q:before {
  content: "“";
  margin-right: 1rem;
}

.typography q:after {
  content: "”";
  margin-left: 1rem;
}

.box-77 .thumbnail-77.video:after,
.grid-69 .box-69:after,
.grid:after {
  content: "";
}

@media (min-width:768px) {
  .article li,
  .article p {
    font-weight: 300;
  }
}

@media (max-width:550px) {
  .article .h2,
  .article .h3,
  .article h1,
  .article h4,
  .article h5,
  .article h6 {
    opacity: .8;
  }
}

.white {
  background: #fff!important;
  color: #202020!important;
}

.black,
.stroke.button.white,
.text-white {
  color: #fff!important;
}

.white svg {
  fill: #202020!important;
}

.black svg,
.stroke.button.white svg,
.text-white.button svg {
  fill: #fff!important;
}

.stroke.button.white {
  border-color: #fff!important;
}

.black {
  background: #202020!important;
}

.stroke.button.black,
.text-black {
  color: #202020!important;
}

.stroke.button.black svg,
.text-black.button svg {
  fill: #202020!important;
}

.stroke.button.black {
  border-color: #202020!important;
}

.red {
  background: #f44336!important;
  color: #fff!important;
}

.stroke.button.red,
.text-red {
  color: #f44336!important;
}

.red svg {
  fill: #fff!important;
}

.stroke.button.red svg,
.text-red.button svg {
  fill: #f44336!important;
}

.stroke.button.red {
  border-color: #f44336!important;
}

.pink {
  background: #e91e63!important;
  color: #fff!important;
}

.stroke.button.pink,
.text-pink {
  color: #e91e63!important;
}

.pink svg {
  fill: #fff!important;
}

.stroke.button.pink svg,
.text-pink.button svg {
  fill: #e91e63!important;
}

.stroke.button.pink {
  border-color: #e91e63!important;
}

.purple {
  background: #9c27b0!important;
  color: #fff!important;
}

.stroke.button.purple,
.text-purple {
  color: #9c27b0!important;
}

.purple svg {
  fill: #fff!important;
}

.stroke.button.purple svg,
.text-purple.button svg {
  fill: #9c27b0!important;
}

.stroke.button.purple {
  border-color: #9c27b0!important;
}

.deepPurple {
  background: #673ab7!important;
  color: #fff!important;
}

.deepPurple svg {
  fill: #fff!important;
}

.stroke.button.deepPurple svg,
.text-deepPurple.button svg {
  fill: #673ab7!important;
}

.text-deepPurple {
  color: #673ab7!important;
}

.stroke.button.deepPurple {
  color: #673ab7!important;
  border-color: #673ab7!important;
}

.indigo {
  background: #3f51b5!important;
  color: #fff!important;
}

.stroke.button.indigo,
.text-indigo {
  color: #3f51b5!important;
}

.indigo svg {
  fill: #fff!important;
}

.stroke.button.indigo svg,
.text-indigo.button svg {
  fill: #3f51b5!important;
}

.stroke.button.indigo {
  border-color: #3f51b5!important;
}

.blue {
  background: #2196f3!important;
  color: #fff!important;
}

.stroke.button.blue,
.text-blue {
  color: #2196f3!important;
}

.blue svg {
  fill: #fff!important;
}

.stroke.button.blue svg,
.text-blue.button svg {
  fill: #2196f3!important;
}

.stroke.button.blue {
  border-color: #2196f3!important;
}

.cyan {
  background: #00bcd4!important;
  color: #fff!important;
}

.stroke.button.cyan,
.text-cyan {
  color: #00bcd4!important;
}

.cyan svg {
  fill: #fff!important;
}

.stroke.button.cyan svg,
.text-cyan.button svg {
  fill: #00bcd4!important;
}

.stroke.button.cyan {
  border-color: #00bcd4!important;
}

.teal {
  background: #009688!important;
  color: #fff!important;
}

.stroke.button.teal,
.text-teal {
  color: #009688!important;
}

.teal svg {
  fill: #fff!important;
}

.stroke.button.teal svg,
.text-teal.button svg {
  fill: #009688!important;
}

.stroke.button.teal {
  border-color: #009688!important;
}

.green {
  background: #4caf50!important;
  color: #fff!important;
}

.stroke.button.green,
.text-green {
  color: #4caf50!important;
}

.green svg {
  fill: #fff!important;
}

.stroke.button.green svg,
.text-green.button svg {
  fill: #4caf50!important;
}

.stroke.button.green {
  border-color: #4caf50!important;
}

.lightGreen {
  background: #8bc34a!important;
  color: #fff!important;
}

.lightGreen svg {
  fill: #fff!important;
}

.stroke.button.lightGreen svg,
.text-lightGreen.button svg {
  fill: #8bc34a!important;
}

.text-lightGreen {
  color: #8bc34a!important;
}

.stroke.button.lightGreen {
  color: #8bc34a!important;
  border-color: #8bc34a!important;
}

.lime {
  background: #cddc39!important;
  color: #fff!important;
}

.stroke.button.lime,
.text-lime {
  color: #cddc39!important;
}

.lime svg {
  fill: #fff!important;
}

.stroke.button.lime svg,
.text-lime.button svg {
  fill: #cddc39!important;
}

.stroke.button.lime {
  border-color: #cddc39!important;
}

.yellow {
  background: #ffeb3b!important;
  color: #202020!important;
}

.stroke.button.yellow,
.text-yellow {
  color: #ffeb3b!important;
}

.yellow svg {
  fill: #202020!important;
}

.stroke.button.yellow svg,
.text-yellow.button svg {
  fill: #ffeb3b!important;
}

.stroke.button.yellow {
  border-color: #ffeb3b!important;
}

.amber {
  background: #ffc107!important;
  color: #fff!important;
}

.stroke.button.amber,
.text-amber {
  color: #ffc107!important;
}

.amber svg {
  fill: #fff!important;
}

.stroke.button.amber svg,
.text-amber.button svg {
  fill: #ffc107!important;
}

.stroke.button.amber {
  border-color: #ffc107!important;
}

.orange {
  background: #ff9800!important;
  color: #fff!important;
}

.stroke.button.orange,
.text-orange {
  color: #ff9800!important;
}

.orange svg {
  fill: #fff!important;
}

.stroke.button.orange svg,
.text-orange.button svg {
  fill: #ff9800!important;
}

.stroke.button.orange {
  border-color: #ff9800!important;
}

.deepOrange {
  background: #ff5722!important;
  color: #fff!important;
}

.deepOrange svg {
  fill: #fff!important;
}

.stroke.button.deepOrange svg,
.text-deepOrange.button svg {
  fill: #ff5722!important;
}

.text-deepOrange {
  color: #ff5722!important;
}

.stroke.button.deepOrange {
  color: #ff5722!important;
  border-color: #ff5722!important;
}

.brown {
  background: #795548!important;
  color: #fff!important;
}

.stroke.button.brown,
.text-brown {
  color: #795548!important;
}

.brown svg {
  fill: #fff!important;
}

.stroke.button.brown svg,
.text-brown.button svg {
  fill: #795548!important;
}

.stroke.button.brown {
  border-color: #795548!important;
}

.gray {
  background: #9d9d9d!important;
  color: #fff!important;
}

.stroke.button.gray,
.text-gray {
  color: #9d9d9d!important;
}

.gray svg {
  fill: #fff!important;
}

.stroke.button.gray svg,
.text-gray.button svg {
  fill: #9d9d9d!important;
}

.stroke.button.gray {
  border-color: #9d9d9d!important;
}

.blueGray {
  background: #607d8b!important;
  color: #fff!important;
}

.stroke.button.blueGray,
.text-blueGray {
  color: #607d8b!important;
}

.blueGray svg {
  fill: #fff!important;
}

.stroke.button.blueGray svg,
.text-blueGray.button svg {
  fill: #607d8b!important;
}

.stroke.button.blueGray {
  border-color: #607d8b!important;
}

.social-facebook {
  background: #3b5998!important;
  color: #fff!important;
}

.social-facebook svg {
  fill: #fff!important;
}

.stroke.button.social-facebook svg,
.text-social-facebook.button svg {
  fill: #3b5998!important;
}

.text-social-facebook {
  color: #3b5998!important;
}

.stroke.button.social-facebook {
  color: #3b5998!important;
  border-color: #3b5998!important;
}

.social-twitter {
  background: #55acee!important;
  color: #fff!important;
}

.social-twitter svg {
  fill: #fff!important;
}

.stroke.button.social-twitter svg,
.text-social-twitter.button svg {
  fill: #55acee!important;
}

.text-social-twitter {
  color: #55acee!important;
}

.stroke.button.social-twitter {
  color: #55acee!important;
  border-color: #55acee!important;
}

.social-googlePlus {
  background: #dd4330!important;
  color: #fff!important;
}

.social-googlePlus svg {
  fill: #fff!important;
}

.stroke.button.social-googlePlus svg,
.text-social-googlePlus.button svg {
  fill: #dd4330!important;
}

.text-social-googlePlus {
  color: #dd4330!important;
}

.stroke.button.social-googlePlus {
  color: #dd4330!important;
  border-color: #dd4330!important;
}

.social-behance {
  background: #105dfb!important;
  color: #fff!important;
}

.social-behance svg {
  fill: #fff!important;
}

.stroke.button.social-behance svg,
.text-social-behance.button svg {
  fill: #105dfb!important;
}

.text-social-behance {
  color: #105dfb!important;
}

.stroke.button.social-behance {
  color: #105dfb!important;
  border-color: #105dfb!important;
}

.social-medium {
  background: #12100e!important;
  color: #fff!important;
}

.social-medium svg {
  fill: #fff!important;
}

.stroke.button.social-medium svg,
.text-social-medium.button svg {
  fill: #12100e!important;
}

.text-social-medium {
  color: #12100e!important;
}

.stroke.button.social-medium {
  color: #12100e!important;
  border-color: #12100e!important;
}

.social-stumbleupon {
  background: #eb4924!important;
  color: #fff!important;
}

.social-stumbleupon svg {
  fill: #fff!important;
}

.stroke.button.social-stumbleupon svg,
.text-social-stumbleupon.button svg {
  fill: #eb4924!important;
}

.text-social-stumbleupon {
  color: #eb4924!important;
}

.stroke.button.social-stumbleupon {
  color: #eb4924!important;
  border-color: #eb4924!important;
}

.social-linkedin {
  background: #0077b5!important;
  color: #fff!important;
}

.social-linkedin svg {
  fill: #fff!important;
}

.stroke.button.social-linkedin svg,
.text-social-linkedin.button svg {
  fill: #0077b5!important;
}

.text-social-linkedin {
  color: #0077b5!important;
}

.stroke.button.social-linkedin {
  color: #0077b5!important;
  border-color: #0077b5!important;
}

.social-pinterest {
  background: #cc2127!important;
  color: #fff!important;
}

.social-pinterest svg {
  fill: #fff!important;
}

.stroke.button.social-pinterest svg,
.text-social-pinterest.button svg {
  fill: #cc2127!important;
}

.text-social-pinterest {
  color: #cc2127!important;
}

.stroke.button.social-pinterest {
  color: #cc2127!important;
  border-color: #cc2127!important;
}

.social-instagram {
  background: #e4405f!important;
  color: #fff!important;
}

.social-instagram svg {
  fill: #fff!important;
}

.stroke.button.social-instagram svg,
.text-social-instagram.button svg {
  fill: #e4405f!important;
}

.text-social-instagram {
  color: #e4405f!important;
}

.stroke.button.social-instagram {
  color: #e4405f!important;
  border-color: #e4405f!important;
}

.social-tumblr {
  background: #34455d!important;
  color: #fff!important;
}

.social-tumblr svg {
  fill: #fff!important;
}

.stroke.button.social-tumblr svg,
.text-social-tumblr.button svg {
  fill: #34455d!important;
}

.text-social-tumblr {
  color: #34455d!important;
}

.stroke.button.social-tumblr {
  color: #34455d!important;
  border-color: #34455d!important;
}

.social-dribbble {
  background: #ea4c89!important;
  color: #fff!important;
}

.social-dribbble svg {
  fill: #fff!important;
}

.stroke.button.social-dribbble svg,
.text-social-dribbble.button svg {
  fill: #ea4c89!important;
}

.text-social-dribbble {
  color: #ea4c89!important;
}

.stroke.button.social-dribbble {
  color: #ea4c89!important;
  border-color: #ea4c89!important;
}

.social-delicious {
  background: #39f!important;
  color: #fff!important;
}

.social-delicious svg {
  fill: #fff!important;
}

.stroke.button.social-delicious svg,
.text-social-delicious.button svg {
  fill: #39f!important;
}

.text-social-delicious {
  color: #39f!important;
}

.stroke.button.social-delicious {
  color: #39f!important;
  border-color: #39f!important;
}

.social-digg {
  background: #000!important;
  color: #fff!important;
}

.social-digg svg {
  fill: #fff!important;
}

.stroke.button.social-digg svg,
.text-social-digg.button svg {
  fill: #000!important;
}

.text-social-digg {
  color: #000!important;
}

.stroke.button.social-digg {
  color: #000!important;
  border-color: #000!important;
}

.social-vimeo {
  background: #fff!important;
  color: #1ab7ea!important;
}

.social-whatsapp,
.text-social-vimeo {
  color: #fff!important;
}

.social-vimeo svg {
  fill: #1ab7ea!important;
}

.social-whatsapp svg,
.stroke.button.social-vimeo svg,
.text-social-vimeo.button svg {
  fill: #fff!important;
}

.stroke.button.social-vimeo {
  color: #fff!important;
  border-color: #fff!important;
}

.social-whatsapp {
  background: #25d366!important;
}

.stroke.button.social-whatsapp svg,
.text-social-whatsapp.button svg {
  fill: #25d366!important;
}

.text-social-whatsapp {
  color: #25d366!important;
}

.stroke.button.social-whatsapp {
  color: #25d366!important;
  border-color: #25d366!important;
}

.social-xing {
  background: #026466!important;
  color: #fff!important;
}

.social-xing svg {
  fill: #fff!important;
}

.stroke.button.social-xing svg,
.text-social-xing.button svg {
  fill: #026466!important;
}

.text-social-xing {
  color: #026466!important;
}

.stroke.button.social-xing {
  color: #026466!important;
  border-color: #026466!important;
}

.social-youtube {
  background: #fc0d1c!important;
  color: #fff!important;
}

.social-youtube svg {
  fill: #fff!important;
}

.stroke.button.social-youtube svg,
.text-social-youtube.button svg {
  fill: #fc0d1c!important;
}

.text-social-youtube {
  color: #fc0d1c!important;
}

.stroke.button.social-youtube {
  color: #fc0d1c!important;
  border-color: #fc0d1c!important;
}

.grid {
  margin-left: -2%;
  margin-right: -2%;
}

.grid [class*=col-] {
  display: block;
  width: 100%;
  padding-left: 2%;
  padding-right: 2%;
  float: left;
}

.grid.fixedSpaces {
  margin-left: -10px;
  margin-right: -10px;
}

.grid.fixedSpaces>[class*=col-] {
  padding-left: 10px;
  padding-right: 10px;
}

.grid.noSpaces {
  margin-left: 0;
  margin-right: 0;
}

.grid.noSpaces>[class*=col-] {
  padding-left: 0;
  padding-right: 0;
}

.grid .toLeft[class*=col-] {
  margin-left: 0!important;
  margin-right: auto!important;
}

.grid .toRight[class*=col-] {
  margin-right: 0!important;
  margin-left: auto!important;
  float: right;
}

.grid .toCenter[class*=col-] {
  margin-left: auto!important;
  margin-right: auto!important;
}

.grid>.col-1-12 {
  max-width: 8.33333%;
}

.grid>.col-2-12 {
  max-width: 16.66667%;
}

.grid>.col-3-12 {
  max-width: 25%;
}

.grid>.col-4-12 {
  max-width: 33.33333%;
}

.grid>.col-5-12 {
  max-width: 41.66667%;
}

.grid>.col-6-12 {
  max-width: 50%;
}

.grid>.col-7-12 {
  max-width: 58.33333%;
}

.grid>.col-8-12 {
  max-width: 66.66667%;
}

.grid>.col-9-12 {
  max-width: 75%;
}

.grid>.col-10-12 {
  max-width: 83.33333%;
}

.grid>.col-11-12 {
  max-width: 91.66667%;
}

.grid>.col-12-12 {
  max-width: 100%;
}

.grid>.col-1-10 {
  max-width: 10%;
}

.grid>.col-2-10 {
  max-width: 20%;
}

.grid>.col-3-10 {
  max-width: 30%;
}

.grid>.col-4-10 {
  max-width: 40%;
}

.grid>.col-5-10 {
  max-width: 50%;
}

.grid>.col-6-10 {
  max-width: 60%;
}

.grid>.col-7-10 {
  max-width: 70%;
}

.grid>.col-8-10 {
  max-width: 80%;
}

.grid>.col-9-10 {
  max-width: 90%;
}

.grid>.col-10-10 {
  max-width: 100%;
}

.grid+.grid {
  margin-top: 20px;
}

.grid:after {
  display: table;
  clear: both;
}

@media (max-width:1239px) {
  .grid>.col-desktop-1-1 {
    max-width: 100%!important;
  }

  .grid>.col-desktop-1-2 {
    max-width: 50%!important;
  }

  .grid>.col-desktop-1-3 {
    max-width: 33.33333333%!important;
  }

  .grid>.col-desktop-2-3 {
    max-width: 66.66666666%!important;
  }

  .grid>.col-desktop-1-4 {
    max-width: 25%!important;
  }

  .grid>.col-desktop-3-4 {
    max-width: 75%!important;
  }
}

.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-left: -2%;
  margin-right: -2%;
}

.flex>[class*=col-] {
  padding-left: 2%;
  padding-right: 2%;
}

.flex.fixedSpaces {
  margin-left: -14px;
  margin-right: -14px;
}

.flex.fixedSpaces>[class*=col-] {
  padding-left: 14px;
  padding-right: 14px;
}

.flex.noSpaces {
  margin-left: 0;
  margin-right: 0;
}

.flex.noSpaces>[class*=col-] {
  padding-left: 0;
  padding-right: 0;
}

.flex.verticalCenter {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.flex.verticalBottom {
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
}

.flex.horizontalCenter {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.flex.reverse {
  -ms-flex-wrap: wrap-reverse;
  flex-wrap: wrap-reverse;
}

.flex.bottom [class*=col-],
.flex.reverse.top [class*=col-] {
  -ms-flex-item-align: end;
  align-self: flex-end;
}

.flex.reverse.bottom [class*=col-],
.flex.top [class*=col-] {
  -ms-flex-item-align: start;
  align-self: flex-start;
}

.flex>.col-1-12 {
  width: 8.33333%;
}

.flex>.col-2-12 {
  width: 16.66667%;
}

.flex>.col-3-12 {
  width: 25%;
}

.flex>.col-4-12 {
  width: 33.33333%;
}

.flex>.col-5-12 {
  width: 41.66667%;
}

.flex>.col-6-12 {
  width: 50%;
}

.flex>.col-7-12 {
  width: 58.33333%;
}

.flex>.col-8-12 {
  width: 66.66667%;
}

.flex>.col-9-12 {
  width: 75%;
}

.flex>.col-10-12 {
  width: 83.33333%;
}

.flex>.col-11-12 {
  width: 91.66667%;
}

.flex>.col-12-12 {
  width: 100%;
}

.flex>.col-1-10 {
  width: 10%;
}

.flex>.col-2-10 {
  width: 20%;
}

.flex>.col-3-10 {
  width: 30%;
}

.flex>.col-4-10 {
  width: 40%;
}

.flex>.col-5-10 {
  width: 50%;
}

.flex>.col-6-10 {
  width: 60%;
}

.flex>.col-7-10 {
  width: 70%;
}

.flex>.col-8-10 {
  width: 80%;
}

.flex>.col-9-10 {
  width: 90%;
}

.flex>.col-10-10 {
  width: 100%;
}

@media (max-width:1023px) {
  .parallaxMotion .parallaxElement:not(.responsive),
  .parallaxMotion:not(.responsive) .parallaxElement {
    -webkit-transform: none!important;
    transform: none!important;
  }

  .grid:not(.later)>[class*=col-]:not([class*=col-phablet-]):not([class*=col-phone-]) {
    max-width: 100%;
  }

  .grid>.col-tablet-1-1 {
    max-width: 100%!important;
  }

  .grid>.col-tablet-1-2 {
    max-width: 50%!important;
  }

  .grid>.col-tablet-1-3 {
    max-width: 33.33333333%!important;
  }

  .grid>.col-tablet-2-3 {
    max-width: 66.66666666%!important;
  }

  .grid>.col-tablet-1-4 {
    max-width: 25%!important;
  }

  .grid>.col-tablet-3-4 {
    max-width: 75%!important;
  }

  .grid>.col-tablet-1-5 {
    max-width: 20%!important;
  }

  .grid>.col-tablet-2-5 {
    max-width: 40%!important;
  }

  .grid>.col-tablet-3-5 {
    max-width: 60%!important;
  }

  .grid>.col-tablet-4-5 {
    max-width: 80%!important;
  }

  .flex:not(.later)>[class*=col-]:not([class*=col-phablet-]):not([class*=col-phone-]) {
    width: 100%;
  }

  .flex>.col-tablet-1-1 {
    width: 100%!important;
  }

  .flex>.col-tablet-1-2 {
    width: 50%!important;
  }

  .flex>.col-tablet-1-3 {
    width: 33.33333333%!important;
  }

  .flex>.col-tablet-2-3 {
    width: 66.66666666%!important;
  }

  .flex>.col-tablet-1-4 {
    width: 25%!important;
  }

  .flex>.col-tablet-3-4 {
    width: 75%!important;
  }

  .flex>.col-tablet-1-5 {
    width: 20%!important;
  }

  .flex>.col-tablet-2-5 {
    width: 40%!important;
  }

  .flex>.col-tablet-3-5 {
    width: 60%!important;
  }

  .flex>.col-tablet-4-5 {
    width: 80%!important;
  }
}

@media (max-width:767px) {
  .grid.later>[class*=col-]:not([class*=col-phone-]) {
    max-width: 100%;
  }

  .grid>.col-phablet-1-1 {
    max-width: 100%!important;
  }

  .grid>.col-phablet-1-2 {
    max-width: 50%!important;
  }

  .grid>.col-phablet-1-3 {
    max-width: 33.33333333%!important;
  }

  .grid>.col-phablet-1-4 {
    max-width: 25%!important;
  }

  .grid>.col-phablet-3-4 {
    max-width: 75%!important;
  }

  .flex.later>[class*=col-]:not([class*=col-phone-]) {
    width: 100%;
  }

  .flex>.col-phablet-1-1 {
    width: 100%!important;
  }

  .flex>.col-phablet-1-2 {
    width: 50%!important;
  }

  .flex>.col-phablet-1-3 {
    width: 33.33333333%!important;
  }

  .flex>.col-phablet-2-3 {
    width: 66.66666666%!important;
  }

  .flex>.col-phablet-1-4 {
    width: 25%!important;
  }

  .flex>.col-phablet-3-4 {
    width: 75%!important;
  }
}

@media (max-width:435px) {
  .grid>[class*=col-] {
    max-width: 100%;
  }

  .grid>.col-phone-1-1 {
    max-width: 100%!important;
  }

  .grid>.col-phone-1-2 {
    max-width: 50%!important;
  }

  .grid>.col-phone-1-3 {
    max-width: 33.33333333%!important;
  }

  .grid>.col-phone-2-3 {
    max-width: 66.66666666%!important;
  }

  .flex>[class*=col-] {
    width: 100%;
  }

  .flex>.col-phone-1-1 {
    width: 100%!important;
  }

  .flex>.col-phone-1-2 {
    width: 50%!important;
  }

  .flex>.col-phone-1-3 {
    width: 33.33333333%!important;
  }

  .flex>.col-phone-2-3 {
    width: 66.66666666%!important;
  }
}

.dialogContainer {
  pointer-events: none;
}

.dialog,
.dialogContainer {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 300;
}

.dialog {
  pointer-events: all;
  color: #303030;
  border-radius: 4px;
  max-width: 350px;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
  cursor: default;
  opacity: .98;
  line-height: 1.3;
  background: #fff;
  margin: 12px 20px;
  overflow: hidden;
  text-align: left;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  transition: all .75s,height 0s;
  transition-timing-function: cubic-bezier(.25,1.37,.44,.93);
}

.dialog .close,
.dialog [data-dialog-action=close],
.dialog [data-href],
.dialog li {
  cursor: pointer;
}

.dialog.rectangular {
  border-radius: 0;
}

.dialog.rounded {
  border-radius: 6px;
}

.dialog:hover {
  opacity: 1;
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  transition: .35s;
}

.dialog .button.small {
  margin-left: 4px;
  margin-right: 4px;
}

.dialog .button {
  margin-left: 7px;
  margin-right: 7px;
}

.dialogContainer>.dialog {
  position: relative;
}

.dialog.hidden {
  display: none;
}

.dialog.hide {
  -webkit-transform: scale(.5);
  transform: scale(.5);
  opacity: 0!important;
  transition: height 0s,opacity .5s,-webkit-transform .5s!important;
  transition: height 0s,opacity .5s,transform .5s!important;
  transition: height 0s,opacity .5s,transform .5s,-webkit-transform .5s!important;
}

.dialog.reveal {
  transition: 0s!important;
}

.dialog .close {
  padding: 12px;
  position: absolute;
  font-size: 0;
  top: 0;
  right: 0;
  transition: .35s;
  opacity: 0;
  z-index: 10;
}

.dialog .close:after,
.dialog .close:before {
  content: "";
  width: 14px;
  height: 2px;
  border-radius: 2px;
  background: #202020;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  right: 6px;
}

.dialog .close:before {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.dialog .close:active {
  opacity: 1;
}

.dialog .close.white {
  background: 0 0!important;
}

.dialog .close.white:after,
.dialog .close.white:before {
  background: #fff;
}

.dialog:hover .close {
  opacity: .2;
}

.dialog .close:hover,
.mobile .dialog .close {
  opacity: 1!important;
}

.dialog .dialogContent {
  padding: 20px;
}

.dialog .avatar {
  border-radius: 50px;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 15px;
}

.dialog .avatar+.text {
  width: calc(100% - 70px);
  margin-left: 70px;
}

.dialog .title {
  margin: 8px 0;
  font-weight: 500;
}

.dialog ul {
  display: table;
  width: 100%;
  font-size: 0;
  font-weight: 600;
  box-shadow: 0 1px 0 rgba(0,0,0,.1) inset;
}

.dialog .hiddenContent {
  overflow: hidden;
  display: block;
  max-height: 0;
  opacity: 0;
  transition: .5s;
}

html:not(.page-loaded) .dialog {
  -webkit-transform: scale(.5) translateY(100%);
  transform: scale(.5) translateY(100%);
  opacity: 0;
}

.dialog.hover .hiddenContent,
.dialog:hover .hiddenContent {
  max-height: 90px;
  opacity: 1;
}

.dialog li {
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  display: table-cell;
  width: 33.33333%;
  text-align: center;
  line-height: 1;
  vertical-align: middle;
  border-bottom: none;
  transition: .25s;
  box-shadow: inset 0 -100px 0 rgba(41,41,41,0);
  border-left: 1px solid rgba(0,0,0,.1);
}

.dialog li .material-icons {
  position: relative;
  margin-bottom: 13px;
  top: 6px;
  margin-right: 8px;
}

.dialog li .material-icons.right {
  margin-right: 0;
  margin-left: 8px;
}

.dialog li svg {
  width: 20px;
  height: 20px;
  margin-bottom: -6px;
  margin-right: 8px;
  position: relative;
  top: -2px;
}

.dialog li svg.right {
  margin-right: 0;
  margin-left: 8px;
}

.dialog li:first-child {
  border-left: none;
}

.dialog li:hover {
  box-shadow: inset 0 -100px 0 rgba(0,0,0,.05);
}

.dialog li input {
  font-size: 16px;
  width: 250px;
  border: none;
  padding: 13px 5px 16px 15px;
  outline: 0;
  margin: 1px 0 0;
  color: #202020;
  height: 50px;
  box-shadow: none!important;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

@media (max-width:414px) {
  .dialog {
    margin: 10px;
    max-width: 100%;
  }
}

.dialogContainer:not(.bottom) .dialog+.dialog {
  margin-bottom: 0;
}

.dialogContainer.bottom .dialog+.dialog {
  margin-top: 0;
}

.dialog.bottom,
.dialogContainer.bottom {
  top: inherit;
  bottom: 0;
}

.dialog.left,
.dialogContainer.left {
  right: inherit;
  left: 0;
}

.svg-5 {
  padding-bottom: 27%;
}

.iphone-5.shiftImage {
  margin: 0 0 -129%;
}

.ipad-6.shiftImage {
  margin: 0 0 -70%;
}

.button.play.button-7 {
  margin: 0 30px;
}

@media (max-width:1279px) {
  .button.play.button-7 {
    display: block;
    margin: 30px auto;
  }
}

.icon-26,
.icon-27 {
  margin-right: 4px;
}

@media (min-width:768px) {
  form.slides-form .input-12,
  form.slides-form .input-8,
  form.slides-form .input-9 {
    max-width: 220px;
  }
}

form input[type=email].input-13,
form input[type=name].input-13,
form input[type=text].input-13 {
  max-width: 300px;
}

@media (max-width:1023px) {
  .cell-16 {
    padding-bottom: 35px;
  }
}

.cell-17 {
  padding-bottom: 25px;
}

.header-18 {
  font-size: 70px;
}

.video-18 {
  margin-top: 34px;
}

.app-26 {
  width: 70px;
  position: absolute;
  left: 0;
}

.text-26 {
  margin-left: 95px;
  margin-top: 35px;
}

.cell-26 {
  margin-top: 22px;
}

@media (min-width:1024px) {
  .text-26 {
    max-width: 360px;
  }

  .cell-26 {
    padding-bottom: 40px;
  }

  .text-27 {
    max-width: 360px;
  }
}

.app-27 {
  width: 100px;
  padding-bottom: 20px;
}

.cell-27 {
  margin-top: -22px;
}

@media (max-width:1023px) {
  .cell-27 {
    padding-bottom: 40px;
  }
}

.text-27 {
  margin-left: 95px;
  margin-top: 35px;
}

@media (min-width:768px) {
  .iphone-28,
  .iphone-29 {
    margin-top: -228px;
    margin-bottom: -228px;
  }
}

@media (max-width:767px) {
  .cell-28,
  .cell-29 {
    padding-bottom: 35px;
  }
}

.quote-31 {
  padding-left: 95px;
}

.image-31 {
  padding-top: 35px;
}

.avatar-31 {
  border-radius: 50px;
  position: absolute;
  margin-left: 7px;
}

@media (min-width:1024px) {
  .ipad-31,
  .ipad-32,
  .ipad-33 {
    margin: -10% 0 -115%;
    max-width: none;
  }
}

@media (max-width:1023px) {
  .cell-32,
  .cell-33 {
    padding-bottom: 40px;
  }
}

.iphone-35 {
  margin-bottom: -45%;
}

.ipad-36 {
  margin: -10px 0 -50%;
}

.avatar-41 {
  border-radius: 50px;
  margin: 10px 5px 5px;
}

.form-42 {
  max-width: 500px;
  margin: 0 auto;
}

p.remind-43 {
  max-width: 350px;
  line-height: 1.29;
  margin: 13px auto;
  text-align: center;
}

.fix-45 {
  max-width: 210px;
}

@media (max-width:767px) {
  .box-46 {
    margin-bottom: 30px;
  }
}

.slide.whiteSlide .box-46 .shadow {
  box-shadow: none;
}

.grid-47 .material-icons {
  margin-bottom: 15px;
  margin-top: 15px;
  font-size: 36px;
}

.grid-48 .material-icons {
  margin-bottom: 30px;
  margin-top: 15px;
  font-size: 72px;
}

.grid-49 .material-icons {
  margin-bottom: 10px;
  margin-top: 15px;
  font-size: 72px;
}

.form-55 {
  max-width: 500px;
  margin: 0 auto;
}

@media (min-width:1024px) {
  .form-42 .form-42-input-1 input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .form-42 .form-42-input-2 input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    position: relative;
    left: -1px;
  }

  .form-55 .form-55-input-1 input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-left: 0;
  }

  .form-55 .form-55-input-2 input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: 0;
    position: relative;
    left: -1px;
  }
}

.form-55 [data-success-class=message-sent].message-sent {
  background: #4caf50!important;
}

.pad-59 {
  border-radius: 6px;
  padding: 6%;
}

.grid-61 .material-icons {
  margin-bottom: 10px;
  margin-top: 15px;
  font-size: 36px;
}

@media (min-width:1024px) {
  img.macbook-61 {
    margin: -15% -100% -30% -135%!important;
    width: 225%;
    max-width: none;
  }
}

.grid-62 .material-icons {
  margin-bottom: 10px;
  margin-top: 15px;
  font-size: 48px;
}

@media (min-width:1024px) {
  img.macbook-62 {
    margin: -15% -100% -30% 10%!important;
    width: 225%;
    max-width: none;
  }
}

@media (max-width:1023px) {
  .image-62 {
    padding-top: 35px;
  }
}

.grid-64 {
  padding-top: 15px;
}

.grid-64 .material-icons {
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 36px;
}

.grid-64>li:not(:last-child) {
  margin-bottom: 20px;
}

.grid-64 .cell-64 {
  padding: 20px 30px;
  position: relative;
  display: block;
  transition: .25s;
  border: 1px solid rgba(255,255,255,.3);
  text: #fff;
}

.grid-64 .cell-64.rounded {
  border-radius: 6px;
}

.grid-64 .cell-64:hover {
  background: #fff;
  color: #202020;
  opacity: 1;
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  border-color: transparent!important;
}

.slide.whiteSlide .grid-64 .cell-64 {
  border: 1px solid #e5e5e5;
}

.grid.grid-65>li {
  position: relative;
  padding-left: 55px;
  padding-bottom: 30px;
}

.grid-65 .material-icons {
  position: absolute;
  left: 0;
  top: -5px;
  font-size: 36px;
}

@media (max-width:767px) {
  .grid.grid-65>li {
    padding-left: 60px;
  }

  .grid-65 .material-icons {
    left: 0;
  }
}

.box-67 {
  color: #202020;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
  display: block;
  outline: 0;
  margin-bottom: 35px;
}

.box-67 .thumbnail-67 {
  font-size: 0;
  overflow: hidden;
}

.box-67 .thumbnail-67 img {
  border-radius: 6px 6px 0 0;
  backface-visibility: hidden;
  transition: .35s;
}

.box-74,
.box-77,
.box-77 .thumbnail-77 img {
  -webkit-backface-visibility: hidden;
}

.box-67:hover {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  opacity: .95;
}

.box-67:hover .thumbnail-67 img {
  -webkit-transform: scale(1.0225);
  transform: scale(1.0225);
}

.box-67 .name-67 {
  padding: 19px 15px 25px;
  background: #fff;
}

.slide.whiteSlide .tintLogos {
  -webkit-filter: brightness(.2);
  filter: brightness(.2);
}

.slide:not(.whiteSlide) .tintLogos {
  -webkit-filter: brightness(1.3);
  filter: brightness(1.3);
}

.grid-68 a {
  display: inline-block;
  margin-top: 14px;
  margin-bottom: 14px;
  opacity: .9;
  transition: opacity .1s ease-in,-webkit-transform .15s cubic-bezier(.5,0,.25,2.5);
  transition: opacity .1s ease-in,transform .15s cubic-bezier(.5,0,.25,2.5);
  transition: opacity .1s ease-in,transform .15s cubic-bezier(.5,0,.25,2.5),-webkit-transform .15s cubic-bezier(.5,0,.25,2.5);
}

.grid-68 a:hover {
  opacity: 1;
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}

.grid-69 {
  margin-left: -8px;
  margin-right: -8px;
}

.grid-69 [class*=col-] {
  padding-bottom: 10px;
  padding-top: 10px;
}

.grid-69 [class*=col-].selected {
  cursor: pointer;
  pointer-events: all;
}

.grid-69 .box-69 {
  display: block;
  height: 0;
  padding-bottom: 100%;
  position: relative;
  background-size: cover;
  cursor: -webkit-zoom-in;
  color: #fff;
}

.grid-69 .box-69 .cell-69,
.grid-69 .box-69:after {
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s;
}

.grid-69 .box-69.rounded {
  overflow: hidden;
  border-radius: 6px;
}

.grid-69 .box-69:after {
  top: 0;
  left: 0;
  background: #cdced2;
}

.grid-69 .box-69 .cell-69 {
  outline: 0;
  padding: 20px;
  z-index: 10;
  color: #202020;
  -webkit-transform: translateY(10px);
  transform: translateY(10px);
}

.grid-71 .cell-71,
.grid-73 .cell-73 {
  transition: .25s;
  text: #fff;
  display: block;
  position: relative;
}

.grid-69 .box-69:hover {
  opacity: 1;
}

.grid-69 .box-69:hover .cell-69 {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.grid-69 .box-69:hover:after {
  opacity: .98;
}

.grid-71 .cell-71:hover,
.grid-73 .cell-73:hover {
  background: #fff;
  opacity: 1;
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  color: #202020;
}

.info-70 {
  padding: 13%;
}

.grid-71 {
  padding-top: 15px;
}

.grid-71 .material-icons {
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 36px;
}

.grid-71>li:not(:last-child) {
  margin-bottom: 20px;
}

.grid-71 .cell-71 {
  padding: 20px 30px;
  border: 1px solid rgba(255,255,255,.3);
}

.grid-71 .cell-71.rounded {
  border-radius: 6px;
}

.grid-71 .cell-71:hover {
  border-color: transparent!important;
}

.slide.whiteSlide .grid-71 .cell-71 {
  border: 1px solid #e5e5e5;
}

.grid-73 {
  padding-top: 15px;
}

.grid-73 .material-icons {
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 36px;
}

.grid-73>li:not(:last-child) {
  margin-bottom: 20px;
}

.grid-73 .cell-73 {
  padding: 20px 30px;
  border: 1px solid rgba(255,255,255,.3);
}

.grid-73 .cell-73.rounded {
  border-radius: 6px;
}

.grid-73 .cell-73:hover {
  border-color: transparent!important;
}

.slide.whiteSlide .grid-73 .cell-73 {
  border: 1px solid #e5e5e5;
}

.image-73.shiftImageVertical.shiftImage {
  margin: -13% 0 -6%;
}

.grid.grid-74 {
  margin-left: -12px;
  margin-right: -12px;
}

.grid.grid-74>[class*=col-] {
  padding-left: 12px;
  padding-right: 12px;
}

.box-74 {
  color: #202020;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
  display: block;
  outline: 0;
  margin-bottom: 25px;
}

.box-74:hover {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  opacity: .95;
}

.box-74 .name-74 {
  padding: 20px 20px 30px;
  background: #fff;
  border-radius: 0 0 6px;
}

.box-74 .thumbnail-74 {
  font-size: 0;
  line-height: 0;
  overflow: hidden;
}

.box-74 .thumbnail-74 img {
  border-radius: 6px 6px 0 0;
  transition: .5s;
}

.slider[data-slider-id="75-0"].animated.fromAbove [class*=ae-]:not(.done) {
  -webkit-transform: scale(1) translate3d(0,0,0);
  transform: scale(1) translate3d(0,0,0);
}

.button.button-76 {
  width: 54px;
  height: 54px;
  padding: 17px 19px;
  font-size: 0;
}

.button.button-76 svg {
  width: 18px;
  height: 18px;
}

@media (min-width:1024px) {
  .iphone-76 {
    max-width: none;
    margin-top: 60px;
  }
}

.text-76 {
  line-height: 1.75;
  opacity: 1;
  margin: 0 0 0 77px;
  padding-top: 3px;
}

@media (max-width:569px) {
  .button.button-76,
  .text-76 {
    float: left;
  }

  .text-76 strong {
    display: block;
  }

  .text-76 {
    font-size: 20px;
    top: -4px;
  }
}

.grid.grid-77 {
  margin-left: -12px;
  margin-right: -12px;
}

.grid.grid-77>[class*=col-] {
  padding-left: 12px;
  padding-right: 12px;
}

@media (max-width:1278px) {
  .grid.grid-77>[class*=col-] {
    max-width: 50%;
  }
}

.box-77 {
  color: #202020;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
  display: block;
  outline: 0;
  margin: 10px 0;
}

.box-77:hover {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  opacity: 1;
}

.box-77 .thumbnail-77 {
  font-size: 0;
  line-height: 0;
  overflow: hidden;
  position: relative;
}

.box-77 .thumbnail-77 img {
  border-radius: 6px 6px 0 0;
  transition: .5s;
}

.box-77 .thumbnail-77.video:after {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/svg/video-icon.svg") center center no-repeat;
  background-size: 54px;
  transition: .35s;
}

.box-77:hover .thumbnail-77.video:after {
  background-color: rgba(0,0,0,.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.box-77 .author-77 {
  background: #fff;
  border-top: 1px solid #ebebeb;
  padding-top: 18px;
  margin-top: 25px;
  position: relative;
  padding-left: 40px;
  padding-bottom: 2px;
}

.box-77 .avatar-77 {
  position: absolute;
  top: 15px;
  left: 0;
  border-radius: 50px;
}

.details-77 {
  padding: 20px 18px 15px;
  background: #fff;
  border-radius: 0 0 6px;
}

.details-77 .cell {
  text-align: left;
}

.text-78 {
  font-size: 17px;
  letter-spacing: .5px;
  margin-top: 7px;
}

.quote-79 {
  font-size: 85px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 10px;
  font-family: serif;
}

.author-79 {
  position: relative;
  margin: 0 auto;
  max-width: 300px;
  padding-left: 85px;
  padding-top: 5px;
}

.author-79 .avatar-79 {
  position: absolute;
  top: 0;
  left: 0;
}

.author-79 h3 {
  margin-bottom: 10px;
}

.grid-79>[class*=col-] {
  position: relative;
  padding: 5px 30px 0 55px;
}

.grid-79>[class*=col-] .material-icons {
  font-size: 35px;
  margin-bottom: 13px;
  position: absolute;
  left: 0;
  top: 0;
}

.grid-80>[class*=col-] {
  margin-bottom: 25px;
}

.box-80 {
  border: 1px solid rgba(255,255,255,.3);
}

.box-80.rounded {
  border-radius: 6px;
}

.slide.whiteSlide .box-80 {
  border-color: #e5e5e5;
}

.leftControl-82,
.rightControl-82 {
  position: absolute;
  top: 50%;
  margin-top: -56px;
  margin-left: -60px;
  cursor: pointer;
  transition: .35s;
}

.grid.grid-83,
.grid.grid-84 {
  margin-top: 50px;
  color: #202020;
}

.leftControl-82 svg,
.rightControl-82 svg {
  width: 29px;
  height: 56px;
}

.leftControl-82:active,
.leftControl-82:hover,
.rightControl-82:active,
.rightControl-82:hover {
  opacity: .3;
}

@media (max-width:768px) {
  .leftControl-82,
  .rightControl-82 {
    display: none;
  }
}

.rightControl-82 {
  right: 0;
  margin-right: -60px;
}

@media (min-width:1024px) {
  .grid.grid-83 {
    border-radius: 6px;
    overflow: hidden;
  }

  .slide.whiteSlide .grid.grid-83 {
    box-shadow: 0 0 1px rgba(48,48,48,.54);
  }
}

.grid.grid-83>[class*=col-] {
  position: relative;
  background: #fff;
  overflow: hidden;
  box-shadow: -1px 0 0 #ebebeb inset;
}

@media (max-width:1023px) {
  .grid.grid-83 {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .grid.grid-83>[class*=col-] {
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 0 1px rgba(48,48,48,.54);
    border-radius: 6px;
  }
}

@media (min-width:1024px) {
  .grid.grid-83>[class*=col-] {
    padding: 50px;
    border-radius: 0;
  }

  .grid.grid-83>[class*=col-]:last-child {
    box-shadow: none;
  }
}

@media (min-width:1240px) {
  .grid.grid-84 {
    border-radius: 6px;
    overflow: hidden;
  }

  .slide.whiteSlide .grid.grid-84 {
    box-shadow: 0 0 1px rgba(48,48,48,.54);
  }
}

.grid.grid-84>[class*=col-] {
  position: relative;
  background: #fff;
  overflow: hidden;
  padding: 30px;
  box-shadow: -1px 0 0 #ebebeb inset;
}

@media (max-width:1239px) {
  .grid.grid-84>[class*=col-] {
    max-width: calc(50% - 20px)!important;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
    box-shadow: 0 0 1px rgba(48,48,48,.54);
    border-radius: 6px;
  }
}

@media (max-width:767px) {
  .grid.grid-84>[class*=col-] {
    max-width: 100%!important;
    margin-left: 0;
    margin-right: 0;
  }
}

@media (min-width:1240px) {
  .grid.grid-84>[class*=col-] {
    border-radius: 0;
  }

  .grid.grid-84>[class*=col-]:last-child {
    box-shadow: none;
  }
}

.grid.grid-85>[class*=col-] .pad {
  box-shadow: 0 0 1px rgba(48,48,48,.54);
}

.button.button-86 {
  width: 54px;
  height: 54px;
  padding: 17px 19px;
  font-size: 0;
}

.button.button-86 svg {
  width: 18px;
  height: 18px;
}

.text-86 {
  line-height: 1.75;
  opacity: 1;
  margin: 0 0 0 77px;
  padding-top: 3px;
}

@media (max-width:569px) {
  .button.button-86,
  .text-86 {
    float: left;
  }

  .text-86 strong {
    display: block;
  }

  .text-86 {
    font-size: 20px;
    top: -4px;
  }
}

.frame-93 {
  padding: 50px 40px;
  border: 1px solid rgba(255,255,255,.3);
  text-align: center;
  display: inline-block;
}

.frame-93.rounded {
  border-radius: 6px;
}

.slide.whiteSlide .frame-93 {
  border: 1px solid rgba(0,0,0,.1);
}

@media (max-width:1023px) {
  .frame-93 {
    text-align: center;
  }

  .button.button-93 {
    margin: 30px 0 0;
  }
}

@media (max-width:499px) {
  .slide .frame-93 {
    padding: 30px;
    border: none!important;
  }
}

.quoteBubble {
  padding: 7%;
  background: #fff;
  font-size: 26px;
  border-radius: 6px;
  color: #202020;
  position: relative;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
}

.quoteBubble:after,
.quoteBubble:before {
  position: absolute;
  left: 6%;
  border-width: 13px 13px 0;
  border-style: solid;
  display: block;
  width: 0;
  content: "";
}

.quoteBubble:after {
  bottom: -12px;
  border-color: #fff transparent;
}

.quoteBubble:before {
  bottom: -13px;
  border-color: rgba(0,0,0,.2) transparent;
}

.address {
  letter-spacing: -1.5px;
  font-size: 30px;
  line-height: 1.1666;
}

.price {
  font-size: 110px;
  line-height: 1.26;
  margin-bottom: 20px;
  font-weight: 200;
}

.currency {
  font-size: 32px;
  vertical-align: super;
  padding-right: 10px;
  margin-left: -.8em;
  font-weight: 300;
  opacity: .6;
  position: relative;
  top: -.5em;
}

.social-circles li {
  display: inline-block;
  padding: 5px;
}

.social-circles li a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.social-circles li a svg {
  width: 16px;
  height: 16px;
  fill: #fff;
}

.social-circles li a:hover {
  opacity: 1;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.text-justify {
  text-align: justify;
}

.slide.whiteSlide a.button.text-white {
  color: #202020!important;
}

.slide.whiteSlide .thumbnail-98,
.slide.whiteSlide .thumbnail-99,
.slide.whiteSlide .wrap-text-100 {
  color: #fff;
}

.music-96 .sc-artwork-list,
.music-96 .sc-controls .hidden,
.music-96 .sc-info,
.music-96 .sc-info-toggle,
.music-96 .sc-time-indicators,
.music-96 .sc-volume-slider {
  display: none;
}

.music-96 .sc-player:not(:last-child) {
  margin-bottom: 15px;
}

.music-96 .sc-play {
  background-image: url("../assets/svg/play.svg");
  border: 1px solid rgba(0,0,0,.5);
  font-size: 0;
  width: 28px;
  height: 28px;
  display: inline-block;
  float: left;
  margin-right: 12px;
  background-color: #fff;
  border-radius: 20px;
  background-size: 50%;
  background-position: center center;
  background-repeat: no-repeat;
}

.music-96 .sc-track-duration {
  float: right;
  font-size: 20px;
  font-weight: 300;
  opacity: .8;
}

.music-96 .sc-player:not(.playing) .sc-time-span {
  opacity: 0;
}

.music-96 .sc-time-span {
  position: relative;
  display: block;
}

.music-96 .sc-buffer,
.music-96 .sc-played {
  background: rgba(255,255,255,.4);
  position: absolute;
  z-index: 1;
  top: -1px;
}

.music-96 .sc-player .sc-waveform-container {
  position: absolute;
  top: 0;
  font-size: 0;
  background: rgba(255,255,255,.2);
  cursor: pointer;
}

.calendar-97,
.frame-97 .small .thin-stroke {
  cursor: default;
}

.music-96 .sc-player .sc-waveform-container img {
  opacity: 0;
  width: 100%;
}

.music-96 .sc-trackslist {
  border-bottom: 1px solid rgba(255,255,255,.2);
  margin-top: 15px;
}

.music-96 .sc-trackslist a {
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 15px;
  display: inline-block;
  max-width: 78%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.music-96 .sc-buffer,
.music-96 .sc-played,
.music-96 .sc-player .sc-waveform-container,
.music-96 .sc-trackslist .sc-time-span {
  height: 2px;
}

.music-96 .sc-buffer,
.music-96 .sc-play,
.music-96 .sc-played,
.music-96 .sc-time-span {
  transition: .35s;
}

.music-96 .sc-player.playing .sc-play {
  background-color: rgba(255,255,255,.8);
}

.music-96 .sc-player.playing .sc-played {
  background: #fafafa;
  background: linear-gradient(to right,#fafafa 0,#fff 100%);
}

.slide.whiteSlide .music-96 .sc-buffer,
.slide.whiteSlide .music-96 .sc-played {
  background: rgba(0,0,0,.2);
  position: absolute;
  z-index: 1;
  top: -1px;
}

.slide.whiteSlide .music-96 .sc-trackslist {
  border-bottom: 1px solid rgba(0,0,0,.2);
}

.slide.whiteSlide .music-96 .sc-player.playing .sc-play {
  background-color: rgba(0,0,0,.1);
}

.slide.whiteSlide .music-96 .sc-player.playing .sc-played {
  background: #050505;
  background: linear-gradient(to right,#050505 0,#000 100%);
}

@media (max-width:480px) {
  .music-96 .sc-trackslist a {
    max-width: 67%;
    font-size: 14px;
    margin-top: 5px;
  }
}

.calendar-97 {
  width: 52px;
  height: 52px;
  padding: 8px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,.4);
  left: 0;
  pointer-events: none;
}

.thumbnail-98 img,
.wrap-img-100 .blackout {
  height: 100%;
}

.blackout,
.thumbnail-98 img {
  width: 100%;
  border-radius: 6px;
}

.calendar-97:hover {
  -webkit-transform: translateY(0)!important;
  transform: translateY(0)!important;
}

.slide.whiteSlide .frame-97 {
  border-bottom: 1px solid rgba(0,0,0,.2);
}

.frame-97 {
  width: 100%;
  border-bottom: 1px solid rgba(255,255,255,.3);
}

.frame-97:last-child {
  border-bottom: none;
}

.frame-97 .thin-stroke:hover {
  -webkit-transform: translateY(0)!important;
  transform: translateY(0)!important;
}

.calendar-97 .month {
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1px;
  opacity: .8;
}

.calendar-97 .number {
  font-size: 22px;
  line-height: 26px;
  font-weight: 400;
}

.button-buy-97 {
  float: right;
}

.title-group {
  min-width: 49%;
  display: inline-block;
}

.dislocation {
  font-size: 20px;
  display: inline-block;
}

@media (max-width:991px) {
  .title-group {
    min-width: 37%;
    font-size: 22px;
    margin-left: 80px!important;
  }
}

@media (max-width:767px) {
  .frame-97 {
    min-height: 220px;
  }

  .frame-97 h2 {
    text-align: center!important;
  }

  .title-group {
    margin-left: 0!important;
    margin-top: 60px;
    display: block;
  }

  .frame-97 .calendar-97 {
    left: calc(50% - 5px);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .dislocation {
    margin-top: 10px;
    display: block;
  }

  .button-buy-97 {
    float: none;
    display: inline-block;
    margin-top: 20px;
  }
}

.date-slide-99,
.title-slide-99 {
  text-align: left;
  position: absolute;
  z-index: 15;
}

a.box-98:active,
a.box-98:focus {
  outline: 0;
}

.thumbnail-98 {
  position: relative;
}

.blackout {
  position: absolute;
  top: 0;
  height: 99.2%;
  border: none;
  background-color: rgba(0,0,0,.4);
  z-index: 10;
}

.title-slide-98 {
  position: absolute;
  top: 40%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  font-size: 12px;
  letter-spacing: 2.5px;
  opacity: .6;
  z-index: 15;
}

.subtitle-slide-98,
.title-slide-99 {
  -webkit-transform: translateX(-50%);
  font-size: 20px;
  line-height: 26px;
  left: 50%;
}

.subtitle-slide-98 {
  position: absolute;
  width: 70%;
  top: 45%;
  transform: translateX(-50%);
  z-index: 15;
}

a.box-99:active,
a.box-99:focus {
  outline: 0;
}

.thumbnail-99 {
  position: relative;
}

.thumbnail-99 img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.thumbnail-99 .date-slide-99 img {
  display: inline-block;
  margin-right: 5px;
  width: 12px;
  height: 12px;
}

.blackout-sl-4 {
  position: absolute;
  top: 0;
  width: 100%;
  height: 99.2%;
  border-radius: 4px;
  border: none;
  background: linear-gradient(to bottom,transparent,rgba(0,0,0,.4));
  z-index: 10;
}

.title-slide-99 {
  width: 80%;
  bottom: 12%;
  transform: translateX(-50%);
}

.date-slide-99 {
  bottom: 0;
  width: 85%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.date-slide-99 span {
  display: inline-block;
  font-size: 14px;
  opacity: .4;
}

.tiny .small-watch {
  margin-bottom: -2px;
  font-size: 14px;
}

.tiny .date-small {
  font-size: 14px;
  vertical-align: 2px;
}

.cell-100 {
  border: 1px solid rgba(255,255,255,.2);
  transition: .3s;
}

.cell-100:hover {
  -webkit-transform: translateY(-2px);
  transform: translateY(-2px);
}

.cell-100 .tiny {
  font-size: 0;
  line-height: 0;
  margin-bottom: 0;
}

.item-100 {
  width: 100%;
  height: 100%;
  display: block;
  padding: 30px;
}

.slide.whiteSlide .cell-100 {
  border: 1px solid rgba(0,0,0,.2);
}

.wrap-img-100 {
  position: relative;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/image-100.png");
  background-size: cover;
  background-position: center center;
}

.wrap-text-100 {
  position: absolute;
  z-index: 15;
  bottom: 35px;
  padding-right: 40px;
  padding-left: 40px;
}

.wrap-text-100 h3 {
  font-size: 22px;
  line-height: 36px;
  opacity: .8;
  font-weight: 300;
}

@media (max-width:767px) {
  .wrap-text-100 {
    position: relative;
    bottom: 0;
    padding-top: 30px;
    padding-bottom: 20px;
  }

  .wrap-text-100 h1 {
    font-size: 30px;
  }

  .wrap-text-100 h3 {
    font-size: 16px;
    line-height: 20px;
  }

  .flex-slide-100 {
    margin-left: 0;
    margin-right: 0;
    padding-left: 0!important;
  }
}

.padding-0,
.trim {
  padding: 0!important;
}

.slick-dots {
  bottom: -35px!important;
}

.slick-dots li {
  margin: 0!important;
}

.slick-dots li button:before,
.slick-dots li.slick-active button:before {
  color: #fff!important;
}

.whiteSlide .slick-dots li button:before,
.whiteSlide .slick-dots li.slick-active button:before {
  color: #000!important;
}

.slick-next,
.slick-prev {
  width: 29px!important;
  height: 55px!important;
}

span.next-arrow svg,
span.prev-arrow svg {
  position: absolute;
  top: 50%;
  width: 29px;
  height: 55px;
  cursor: pointer;
}

.slick-prev {
  left: -45px!important;
}

.slick-next {
  right: -45px!important;
}

span.prev-arrow svg {
  left: -45px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

span.next-arrow svg {
  right: -45px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.swiper-pagination {
  position: static!important;
}

.swiper-container-horizontal>.swiper-pagination-bullets {
  margin-top: 15px;
}

.swiper-pagination-bullet,
.swiper-pagination-bullet-active {
  background-color: #fff!important;
}

.whiteSlide .swiper-pagination-bullet,
.whiteSlide .swiper-pagination-bullet-active {
  background-color: #000!important;
}

.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 8px!important;
}

.crop,
.margin-0 {
  margin: 0!important;
}

.swiper-container-2,
.swiper-container-3,
.swiper-container-4 {
  overflow: hidden;
}

.table {
  display: table;
  width: 100%;
  height: 100%;
}

.cell {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.scroll-x {
  overflow-x: scroll;
}

.scroll-y {
  overflow-y: scroll;
}

.overflow-hidden,
.scroll-hidden {
  overflow: hidden;
}

.overflow-reset {
  overflow: auto!important;
}

.uppercase {
  text-transform: uppercase!important;
}

.italic {
  font-style: italic!important;
}

.thin,
.ultraLight {
  font-weight: 100!important;
}

.light {
  font-weight: 300!important;
}

.normal {
  font-weight: 400!important;
}

.semiBold {
  font-weight: 500!important;
}

.bold {
  font-weight: 600!important;
}

.ultraBold {
  font-weight: 900!important;
}

.noText {
  font-size: 0;
}

.align-top,
.top {
  vertical-align: top!important;
}

.align-left,
.left {
  text-align: left!important;
}

.align-right,
.right {
  text-align: right!important;
}

.align-center,
.center {
  text-align: center!important;
}

.middle {
  vertical-align: middle!important;
}

.bottom {
  vertical-align: bottom!important;
}

.rtl {
  direction: rtl;
  unicode-bidi: embed;
}

.position-left {
  left: 0;
}

.position-top {
  top: 0;
}

.position-bottom {
  bottom: 0;
}

.position-right {
  right: 0;
}

.float-right {
  float: right!important;
}

.float-left {
  float: left!important;
}

.float-none {
  float: none!important;
}

.slides.firstSlide .hideForFirstSlide,
.slides.lastSlide .hideForLastSlide {
  display: none;
}

.block {
  display: block!important;
}

.inlineBlock {
  display: inline-block!important;
}

.inline {
  display: inline!important;
}

.relative {
  position: relative!important;
}

.absolute {
  position: absolute!important;
}

.fixed {
  position: fixed!important;
}

.wide {
  width: 100%!important;
}

.hidden {
  display: none;
}

[class*=shift-] {
  position: relative;
}

.shift-up-1 {
  top: -1px;
}

.shift-up-2 {
  top: -2px;
}

.shift-up-3 {
  top: -3px;
}

.shift-up-4 {
  top: -4px;
}

.shift-up-5 {
  top: -5px;
}

.shift-down-1 {
  top: 1px;
}

.shift-down-2 {
  top: 2px;
}

.shift-down-3 {
  top: 3px;
}

.shift-down-4 {
  top: 4px;
}

.shift-down-5 {
  top: 5px;
}

.shift-left-1 {
  left: -1px;
}

.shift-left-2 {
  left: -2px;
}

.shift-left-3 {
  left: -3px;
}

.shift-left-4 {
  left: -4px;
}

.shift-left-5 {
  left: -5px;
}

.shift-right-1 {
  left: 1px;
}

.shift-right-2 {
  left: 2px;
}

.shift-right-3 {
  left: 3px;
}

.shift-right-4 {
  left: 4px;
}

.shift-right-5 {
  left: 5px;
}

@media (max-width:1023px) {
  .wideForTablet {
    width: 100%!important;
    margin-left: 0!important;
    margin-right: 0!important;
  }
}

@media (max-width:767px) {
  .wideForPhablet {
    width: 100%!important;
    margin-left: 0!important;
    margin-right: 0!important;
  }
}

@media (max-width:435px) {
  .wideForPhone {
    width: 100%!important;
    margin-left: 0!important;
    margin-right: 0!important;
  }
}

.round {
  border-radius: 999px!important;
}

.rounded {
  border-radius: 6px!important;
}

.rectangular {
  border-radius: 0!important;
}

.opacity-0 {
  opacity: 0!important;
}

.opacity-1 {
  opacity: .1!important;
}

.opacity-2 {
  opacity: .2!important;
}

.opacity-3 {
  opacity: .3!important;
}

.opacity-4 {
  opacity: .4!important;
}

.opacity-5 {
  opacity: .5!important;
}

.opacity-6 {
  opacity: .6!important;
}

.opacity-7 {
  opacity: .7!important;
}

.opacity-8 {
  opacity: .8!important;
}

.opacity-9 {
  opacity: .9!important;
}

.opacity-10,
.opaque {
  opacity: 1!important;
}

.transparent {
  background: 0 0!important;
}

.cropBottom {
  margin-bottom: 0!important;
}

.cropTop {
  margin-top: 0!important;
}

.cropLeft,
.cropSides {
  margin-left: 0!important;
}

.cropRight,
.cropSides {
  margin-right: 0!important;
}

.trimBottom {
  padding-bottom: 0!important;
}

.trimTop {
  padding-top: 0!important;
}

.trimLeft,
.trimSides {
  padding-left: 0!important;
}

.trimRight,
.trimSides {
  padding-right: 0!important;
}

.padding-1 {
  padding: 10px!important;
}

.padding-2 {
  padding: 20px!important;
}

.padding-3 {
  padding: 30px!important;
}

.padding-4 {
  padding: 40px!important;
}

.padding-5 {
  padding: 50px!important;
}

.padding-6 {
  padding: 60px!important;
}

.padding-7 {
  padding: 70px!important;
}

.padding-8 {
  padding: 80px!important;
}

.padding-9 {
  padding: 90px!important;
}

.padding-10 {
  padding: 100px!important;
}

.padding-11 {
  padding: 110px!important;
}

.padding-12 {
  padding: 120px!important;
}

.padding-13 {
  padding: 130px!important;
}

.padding-14 {
  padding: 140px!important;
}

.padding-15 {
  padding: 150px!important;
}

.padding-16 {
  padding: 160px!important;
}

.padding-17 {
  padding: 170px!important;
}

.padding-18 {
  padding: 180px!important;
}

.padding-19 {
  padding: 190px!important;
}

.padding-20 {
  padding: 200px!important;
}

.padding-top-0 {
  padding-top: 0!important;
}

.padding-top-1 {
  padding-top: 10px!important;
}

.padding-top-2 {
  padding-top: 20px!important;
}

.padding-top-3 {
  padding-top: 30px!important;
}

.padding-top-4 {
  padding-top: 40px!important;
}

.padding-top-5 {
  padding-top: 50px!important;
}

.padding-top-6 {
  padding-top: 60px!important;
}

.padding-top-7 {
  padding-top: 70px!important;
}

.padding-top-8 {
  padding-top: 80px!important;
}

.padding-top-9 {
  padding-top: 90px!important;
}

.padding-top-10 {
  padding-top: 100px!important;
}

.padding-top-11 {
  padding-top: 110px!important;
}

.padding-top-12 {
  padding-top: 120px!important;
}

.padding-top-13 {
  padding-top: 130px!important;
}

.padding-top-14 {
  padding-top: 140px!important;
}

.padding-top-15 {
  padding-top: 150px!important;
}

.padding-top-16 {
  padding-top: 160px!important;
}

.padding-top-17 {
  padding-top: 170px!important;
}

.padding-top-18 {
  padding-top: 180px!important;
}

.padding-top-19 {
  padding-top: 190px!important;
}

.padding-top-20 {
  padding-top: 200px!important;
}

.padding-right-0 {
  padding-right: 0!important;
}

.padding-right-1 {
  padding-right: 10px!important;
}

.padding-right-2 {
  padding-right: 20px!important;
}

.padding-right-3 {
  padding-right: 30px!important;
}

.padding-right-4 {
  padding-right: 40px!important;
}

.padding-right-5 {
  padding-right: 50px!important;
}

.padding-right-6 {
  padding-right: 60px!important;
}

.padding-right-7 {
  padding-right: 70px!important;
}

.padding-right-8 {
  padding-right: 80px!important;
}

.padding-right-9 {
  padding-right: 90px!important;
}

.padding-right-10 {
  padding-right: 100px!important;
}

.padding-right-11 {
  padding-right: 110px!important;
}

.padding-right-12 {
  padding-right: 120px!important;
}

.padding-right-13 {
  padding-right: 130px!important;
}

.padding-right-14 {
  padding-right: 140px!important;
}

.padding-right-15 {
  padding-right: 150px!important;
}

.padding-right-16 {
  padding-right: 160px!important;
}

.padding-right-17 {
  padding-right: 170px!important;
}

.padding-right-18 {
  padding-right: 180px!important;
}

.padding-right-19 {
  padding-right: 190px!important;
}

.padding-right-20 {
  padding-right: 200px!important;
}

.padding-bottom-0 {
  padding-bottom: 0!important;
}

.padding-bottom-1 {
  padding-bottom: 10px!important;
}

.padding-bottom-2 {
  padding-bottom: 20px!important;
}

.padding-bottom-3 {
  padding-bottom: 30px!important;
}

.padding-bottom-4 {
  padding-bottom: 40px!important;
}

.padding-bottom-5 {
  padding-bottom: 50px!important;
}

.padding-bottom-6 {
  padding-bottom: 60px!important;
}

.padding-bottom-7 {
  padding-bottom: 70px!important;
}

.padding-bottom-8 {
  padding-bottom: 80px!important;
}

.padding-bottom-9 {
  padding-bottom: 90px!important;
}

.padding-bottom-10 {
  padding-bottom: 100px!important;
}

.padding-bottom-11 {
  padding-bottom: 110px!important;
}

.padding-bottom-12 {
  padding-bottom: 120px!important;
}

.padding-bottom-13 {
  padding-bottom: 130px!important;
}

.padding-bottom-14 {
  padding-bottom: 140px!important;
}

.padding-bottom-15 {
  padding-bottom: 150px!important;
}

.padding-bottom-16 {
  padding-bottom: 160px!important;
}

.padding-bottom-17 {
  padding-bottom: 170px!important;
}

.padding-bottom-18 {
  padding-bottom: 180px!important;
}

.padding-bottom-19 {
  padding-bottom: 190px!important;
}

.padding-bottom-20 {
  padding-bottom: 200px!important;
}

.padding-left-0 {
  padding-left: 0!important;
}

.padding-left-1 {
  padding-left: 10px!important;
}

.padding-left-2 {
  padding-left: 20px!important;
}

.padding-left-3 {
  padding-left: 30px!important;
}

.padding-left-4 {
  padding-left: 40px!important;
}

.padding-left-5 {
  padding-left: 50px!important;
}

.padding-left-6 {
  padding-left: 60px!important;
}

.padding-left-7 {
  padding-left: 70px!important;
}

.padding-left-8 {
  padding-left: 80px!important;
}

.padding-left-9 {
  padding-left: 90px!important;
}

.padding-left-10 {
  padding-left: 100px!important;
}

.padding-left-11 {
  padding-left: 110px!important;
}

.padding-left-12 {
  padding-left: 120px!important;
}

.padding-left-13 {
  padding-left: 130px!important;
}

.padding-left-14 {
  padding-left: 140px!important;
}

.padding-left-15 {
  padding-left: 150px!important;
}

.padding-left-16 {
  padding-left: 160px!important;
}

.padding-left-17 {
  padding-left: 170px!important;
}

.padding-left-18 {
  padding-left: 180px!important;
}

.padding-left-19 {
  padding-left: 190px!important;
}

.padding-left-20 {
  padding-left: 200px!important;
}

.margin-1 {
  margin: 10px!important;
}

.margin-2 {
  margin: 20px!important;
}

.margin-3 {
  margin: 30px!important;
}

.margin-4 {
  margin: 40px!important;
}

.margin-5 {
  margin: 50px!important;
}

.margin-6 {
  margin: 60px!important;
}

.margin-7 {
  margin: 70px!important;
}

.margin-8 {
  margin: 80px!important;
}

.margin-9 {
  margin: 90px!important;
}

.margin-10 {
  margin: 100px!important;
}

.margin-11 {
  margin: 110px!important;
}

.margin-12 {
  margin: 120px!important;
}

.margin-13 {
  margin: 130px!important;
}

.margin-14 {
  margin: 140px!important;
}

.margin-15 {
  margin: 150px!important;
}

.margin-16 {
  margin: 160px!important;
}

.margin-17 {
  margin: 170px!important;
}

.margin-18 {
  margin: 180px!important;
}

.margin-19 {
  margin: 190px!important;
}

.margin-20 {
  margin: 200px!important;
}

.margin-top-0 {
  margin-top: 0!important;
}

.margin-top-1 {
  margin-top: 10px!important;
}

.margin-top-2 {
  margin-top: 20px!important;
}

.margin-top-3 {
  margin-top: 30px!important;
}

.margin-top-4 {
  margin-top: 40px!important;
}

.margin-top-5 {
  margin-top: 50px!important;
}

.margin-top-6 {
  margin-top: 60px!important;
}

.margin-top-7 {
  margin-top: 70px!important;
}

.margin-top-8 {
  margin-top: 80px!important;
}

.margin-top-9 {
  margin-top: 90px!important;
}

.margin-top-10 {
  margin-top: 100px!important;
}

.margin-top-11 {
  margin-top: 110px!important;
}

.margin-top-12 {
  margin-top: 120px!important;
}

.margin-top-13 {
  margin-top: 130px!important;
}

.margin-top-14 {
  margin-top: 140px!important;
}

.margin-top-15 {
  margin-top: 150px!important;
}

.margin-top-16 {
  margin-top: 160px!important;
}

.margin-top-17 {
  margin-top: 170px!important;
}

.margin-top-18 {
  margin-top: 180px!important;
}

.margin-top-19 {
  margin-top: 190px!important;
}

.margin-top-20 {
  margin-top: 200px!important;
}

.margin-right-0 {
  margin-right: 0!important;
}

.margin-right-1 {
  margin-right: 10px!important;
}

.margin-right-2 {
  margin-right: 20px!important;
}

.margin-right-3 {
  margin-right: 30px!important;
}

.margin-right-4 {
  margin-right: 40px!important;
}

.margin-right-5 {
  margin-right: 50px!important;
}

.margin-right-6 {
  margin-right: 60px!important;
}

.margin-right-7 {
  margin-right: 70px!important;
}

.margin-right-8 {
  margin-right: 80px!important;
}

.margin-right-9 {
  margin-right: 90px!important;
}

.margin-right-10 {
  margin-right: 100px!important;
}

.margin-right-11 {
  margin-right: 110px!important;
}

.margin-right-12 {
  margin-right: 120px!important;
}

.margin-right-13 {
  margin-right: 130px!important;
}

.margin-right-14 {
  margin-right: 140px!important;
}

.margin-right-15 {
  margin-right: 150px!important;
}

.margin-right-16 {
  margin-right: 160px!important;
}

.margin-right-17 {
  margin-right: 170px!important;
}

.margin-right-18 {
  margin-right: 180px!important;
}

.margin-right-19 {
  margin-right: 190px!important;
}

.margin-right-20 {
  margin-right: 200px!important;
}

.margin-bottom-0 {
  margin-bottom: 0!important;
}

.margin-bottom-1 {
  margin-bottom: 10px!important;
}

.margin-bottom-2 {
  margin-bottom: 20px!important;
}

.margin-bottom-3 {
  margin-bottom: 30px!important;
}

.margin-bottom-4 {
  margin-bottom: 40px!important;
}

.margin-bottom-5 {
  margin-bottom: 50px!important;
}

.margin-bottom-6 {
  margin-bottom: 60px!important;
}

.margin-bottom-7 {
  margin-bottom: 70px!important;
}

.margin-bottom-8 {
  margin-bottom: 80px!important;
}

.margin-bottom-9 {
  margin-bottom: 90px!important;
}

.margin-bottom-10 {
  margin-bottom: 100px!important;
}

.margin-bottom-11 {
  margin-bottom: 110px!important;
}

.margin-bottom-12 {
  margin-bottom: 120px!important;
}

.margin-bottom-13 {
  margin-bottom: 130px!important;
}

.margin-bottom-14 {
  margin-bottom: 140px!important;
}

.margin-bottom-15 {
  margin-bottom: 150px!important;
}

.margin-bottom-16 {
  margin-bottom: 160px!important;
}

.margin-bottom-17 {
  margin-bottom: 170px!important;
}

.margin-bottom-18 {
  margin-bottom: 180px!important;
}

.margin-bottom-19 {
  margin-bottom: 190px!important;
}

.margin-bottom-20 {
  margin-bottom: 200px!important;
}

.margin-left-0 {
  margin-left: 0!important;
}

.margin-left-1 {
  margin-left: 10px!important;
}

.margin-left-2 {
  margin-left: 20px!important;
}

.margin-left-3 {
  margin-left: 30px!important;
}

.margin-left-4 {
  margin-left: 40px!important;
}

.margin-left-5 {
  margin-left: 50px!important;
}

.margin-left-6 {
  margin-left: 60px!important;
}

.margin-left-7 {
  margin-left: 70px!important;
}

.margin-left-8 {
  margin-left: 80px!important;
}

.margin-left-9 {
  margin-left: 90px!important;
}

.margin-left-10 {
  margin-left: 100px!important;
}

.margin-left-11 {
  margin-left: 110px!important;
}

.margin-left-12 {
  margin-left: 120px!important;
}

.margin-left-13 {
  margin-left: 130px!important;
}

.margin-left-14 {
  margin-left: 140px!important;
}

.margin-left-15 {
  margin-left: 150px!important;
}

.margin-left-16 {
  margin-left: 160px!important;
}

.margin-left-17 {
  margin-left: 170px!important;
}

.margin-left-18 {
  margin-left: 180px!important;
}

.margin-left-19 {
  margin-left: 190px!important;
}

.margin-left-20 {
  margin-left: 200px!important;
}

@media (min-width:1240px) {
  .padding-desktop-0 {
    padding: 0!important;
  }

  .padding-desktop-1 {
    padding: 10px!important;
  }

  .padding-desktop-2 {
    padding: 20px!important;
  }

  .padding-desktop-3 {
    padding: 30px!important;
  }

  .padding-desktop-4 {
    padding: 40px!important;
  }

  .padding-desktop-5 {
    padding: 50px!important;
  }

  .padding-desktop-6 {
    padding: 60px!important;
  }

  .padding-desktop-7 {
    padding: 70px!important;
  }

  .padding-desktop-8 {
    padding: 80px!important;
  }

  .padding-desktop-9 {
    padding: 90px!important;
  }

  .padding-desktop-10 {
    padding: 100px!important;
  }

  .padding-desktop-11 {
    padding: 110px!important;
  }

  .padding-desktop-12 {
    padding: 120px!important;
  }

  .padding-desktop-13 {
    padding: 130px!important;
  }

  .padding-desktop-14 {
    padding: 140px!important;
  }

  .padding-desktop-15 {
    padding: 150px!important;
  }

  .padding-desktop-16 {
    padding: 160px!important;
  }

  .padding-desktop-17 {
    padding: 170px!important;
  }

  .padding-desktop-18 {
    padding: 180px!important;
  }

  .padding-desktop-19 {
    padding: 190px!important;
  }

  .padding-desktop-20 {
    padding: 200px!important;
  }

  .padding-top-desktop-0 {
    padding-top: 0!important;
  }

  .padding-top-desktop-1 {
    padding-top: 10px!important;
  }

  .padding-top-desktop-2 {
    padding-top: 20px!important;
  }

  .padding-top-desktop-3 {
    padding-top: 30px!important;
  }

  .padding-top-desktop-4 {
    padding-top: 40px!important;
  }

  .padding-top-desktop-5 {
    padding-top: 50px!important;
  }

  .padding-top-desktop-6 {
    padding-top: 60px!important;
  }

  .padding-top-desktop-7 {
    padding-top: 70px!important;
  }

  .padding-top-desktop-8 {
    padding-top: 80px!important;
  }

  .padding-top-desktop-9 {
    padding-top: 90px!important;
  }

  .padding-top-desktop-10 {
    padding-top: 100px!important;
  }

  .padding-top-desktop-11 {
    padding-top: 110px!important;
  }

  .padding-top-desktop-12 {
    padding-top: 120px!important;
  }

  .padding-top-desktop-13 {
    padding-top: 130px!important;
  }

  .padding-top-desktop-14 {
    padding-top: 140px!important;
  }

  .padding-top-desktop-15 {
    padding-top: 150px!important;
  }

  .padding-top-desktop-16 {
    padding-top: 160px!important;
  }

  .padding-top-desktop-17 {
    padding-top: 170px!important;
  }

  .padding-top-desktop-18 {
    padding-top: 180px!important;
  }

  .padding-top-desktop-19 {
    padding-top: 190px!important;
  }

  .padding-top-desktop-20 {
    padding-top: 200px!important;
  }

  .padding-right-desktop-0 {
    padding-right: 0!important;
  }

  .padding-right-desktop-1 {
    padding-right: 10px!important;
  }

  .padding-right-desktop-2 {
    padding-right: 20px!important;
  }

  .padding-right-desktop-3 {
    padding-right: 30px!important;
  }

  .padding-right-desktop-4 {
    padding-right: 40px!important;
  }

  .padding-right-desktop-5 {
    padding-right: 50px!important;
  }

  .padding-right-desktop-6 {
    padding-right: 60px!important;
  }

  .padding-right-desktop-7 {
    padding-right: 70px!important;
  }

  .padding-right-desktop-8 {
    padding-right: 80px!important;
  }

  .padding-right-desktop-9 {
    padding-right: 90px!important;
  }

  .padding-right-desktop-10 {
    padding-right: 100px!important;
  }

  .padding-right-desktop-11 {
    padding-right: 110px!important;
  }

  .padding-right-desktop-12 {
    padding-right: 120px!important;
  }

  .padding-right-desktop-13 {
    padding-right: 130px!important;
  }

  .padding-right-desktop-14 {
    padding-right: 140px!important;
  }

  .padding-right-desktop-15 {
    padding-right: 150px!important;
  }

  .padding-right-desktop-16 {
    padding-right: 160px!important;
  }

  .padding-right-desktop-17 {
    padding-right: 170px!important;
  }

  .padding-right-desktop-18 {
    padding-right: 180px!important;
  }

  .padding-right-desktop-19 {
    padding-right: 190px!important;
  }

  .padding-right-desktop-20 {
    padding-right: 200px!important;
  }

  .padding-bottom-desktop-0 {
    padding-bottom: 0!important;
  }

  .padding-bottom-desktop-1 {
    padding-bottom: 10px!important;
  }

  .padding-bottom-desktop-2 {
    padding-bottom: 20px!important;
  }

  .padding-bottom-desktop-3 {
    padding-bottom: 30px!important;
  }

  .padding-bottom-desktop-4 {
    padding-bottom: 40px!important;
  }

  .padding-bottom-desktop-5 {
    padding-bottom: 50px!important;
  }

  .padding-bottom-desktop-6 {
    padding-bottom: 60px!important;
  }

  .padding-bottom-desktop-7 {
    padding-bottom: 70px!important;
  }

  .padding-bottom-desktop-8 {
    padding-bottom: 80px!important;
  }

  .padding-bottom-desktop-9 {
    padding-bottom: 90px!important;
  }

  .padding-bottom-desktop-10 {
    padding-bottom: 100px!important;
  }

  .padding-bottom-desktop-11 {
    padding-bottom: 110px!important;
  }

  .padding-bottom-desktop-12 {
    padding-bottom: 120px!important;
  }

  .padding-bottom-desktop-13 {
    padding-bottom: 130px!important;
  }

  .padding-bottom-desktop-14 {
    padding-bottom: 140px!important;
  }

  .padding-bottom-desktop-15 {
    padding-bottom: 150px!important;
  }

  .padding-bottom-desktop-16 {
    padding-bottom: 160px!important;
  }

  .padding-bottom-desktop-17 {
    padding-bottom: 170px!important;
  }

  .padding-bottom-desktop-18 {
    padding-bottom: 180px!important;
  }

  .padding-bottom-desktop-19 {
    padding-bottom: 190px!important;
  }

  .padding-bottom-desktop-20 {
    padding-bottom: 200px!important;
  }

  .padding-left-desktop-0 {
    padding-left: 0!important;
  }

  .padding-left-desktop-1 {
    padding-left: 10px!important;
  }

  .padding-left-desktop-2 {
    padding-left: 20px!important;
  }

  .padding-left-desktop-3 {
    padding-left: 30px!important;
  }

  .padding-left-desktop-4 {
    padding-left: 40px!important;
  }

  .padding-left-desktop-5 {
    padding-left: 50px!important;
  }

  .padding-left-desktop-6 {
    padding-left: 60px!important;
  }

  .padding-left-desktop-7 {
    padding-left: 70px!important;
  }

  .padding-left-desktop-8 {
    padding-left: 80px!important;
  }

  .padding-left-desktop-9 {
    padding-left: 90px!important;
  }

  .padding-left-desktop-10 {
    padding-left: 100px!important;
  }

  .padding-left-desktop-11 {
    padding-left: 110px!important;
  }

  .padding-left-desktop-12 {
    padding-left: 120px!important;
  }

  .padding-left-desktop-13 {
    padding-left: 130px!important;
  }

  .padding-left-desktop-14 {
    padding-left: 140px!important;
  }

  .padding-left-desktop-15 {
    padding-left: 150px!important;
  }

  .padding-left-desktop-16 {
    padding-left: 160px!important;
  }

  .padding-left-desktop-17 {
    padding-left: 170px!important;
  }

  .padding-left-desktop-18 {
    padding-left: 180px!important;
  }

  .padding-left-desktop-19 {
    padding-left: 190px!important;
  }

  .padding-left-desktop-20 {
    padding-left: 200px!important;
  }

  .margin-desktop-0 {
    margin: 0!important;
  }

  .margin-desktop-1 {
    margin: 10px!important;
  }

  .margin-desktop-2 {
    margin: 20px!important;
  }

  .margin-desktop-3 {
    margin: 30px!important;
  }

  .margin-desktop-4 {
    margin: 40px!important;
  }

  .margin-desktop-5 {
    margin: 50px!important;
  }

  .margin-desktop-6 {
    margin: 60px!important;
  }

  .margin-desktop-7 {
    margin: 70px!important;
  }

  .margin-desktop-8 {
    margin: 80px!important;
  }

  .margin-desktop-9 {
    margin: 90px!important;
  }

  .margin-desktop-10 {
    margin: 100px!important;
  }

  .margin-desktop-11 {
    margin: 110px!important;
  }

  .margin-desktop-12 {
    margin: 120px!important;
  }

  .margin-desktop-13 {
    margin: 130px!important;
  }

  .margin-desktop-14 {
    margin: 140px!important;
  }

  .margin-desktop-15 {
    margin: 150px!important;
  }

  .margin-desktop-16 {
    margin: 160px!important;
  }

  .margin-desktop-17 {
    margin: 170px!important;
  }

  .margin-desktop-18 {
    margin: 180px!important;
  }

  .margin-desktop-19 {
    margin: 190px!important;
  }

  .margin-desktop-20 {
    margin: 200px!important;
  }

  .margin-top-desktop-0 {
    margin-top: 0!important;
  }

  .margin-top-desktop-1 {
    margin-top: 10px!important;
  }

  .margin-top-desktop-2 {
    margin-top: 20px!important;
  }

  .margin-top-desktop-3 {
    margin-top: 30px!important;
  }

  .margin-top-desktop-4 {
    margin-top: 40px!important;
  }

  .margin-top-desktop-5 {
    margin-top: 50px!important;
  }

  .margin-top-desktop-6 {
    margin-top: 60px!important;
  }

  .margin-top-desktop-7 {
    margin-top: 70px!important;
  }

  .margin-top-desktop-8 {
    margin-top: 80px!important;
  }

  .margin-top-desktop-9 {
    margin-top: 90px!important;
  }

  .margin-top-desktop-10 {
    margin-top: 100px!important;
  }

  .margin-top-desktop-11 {
    margin-top: 110px!important;
  }

  .margin-top-desktop-12 {
    margin-top: 120px!important;
  }

  .margin-top-desktop-13 {
    margin-top: 130px!important;
  }

  .margin-top-desktop-14 {
    margin-top: 140px!important;
  }

  .margin-top-desktop-15 {
    margin-top: 150px!important;
  }

  .margin-top-desktop-16 {
    margin-top: 160px!important;
  }

  .margin-top-desktop-17 {
    margin-top: 170px!important;
  }

  .margin-top-desktop-18 {
    margin-top: 180px!important;
  }

  .margin-top-desktop-19 {
    margin-top: 190px!important;
  }

  .margin-top-desktop-20 {
    margin-top: 200px!important;
  }

  .margin-right-desktop-0 {
    margin-right: 0!important;
  }

  .margin-right-desktop-1 {
    margin-right: 10px!important;
  }

  .margin-right-desktop-2 {
    margin-right: 20px!important;
  }

  .margin-right-desktop-3 {
    margin-right: 30px!important;
  }

  .margin-right-desktop-4 {
    margin-right: 40px!important;
  }

  .margin-right-desktop-5 {
    margin-right: 50px!important;
  }

  .margin-right-desktop-6 {
    margin-right: 60px!important;
  }

  .margin-right-desktop-7 {
    margin-right: 70px!important;
  }

  .margin-right-desktop-8 {
    margin-right: 80px!important;
  }

  .margin-right-desktop-9 {
    margin-right: 90px!important;
  }

  .margin-right-desktop-10 {
    margin-right: 100px!important;
  }

  .margin-right-desktop-11 {
    margin-right: 110px!important;
  }

  .margin-right-desktop-12 {
    margin-right: 120px!important;
  }

  .margin-right-desktop-13 {
    margin-right: 130px!important;
  }

  .margin-right-desktop-14 {
    margin-right: 140px!important;
  }

  .margin-right-desktop-15 {
    margin-right: 150px!important;
  }

  .margin-right-desktop-16 {
    margin-right: 160px!important;
  }

  .margin-right-desktop-17 {
    margin-right: 170px!important;
  }

  .margin-right-desktop-18 {
    margin-right: 180px!important;
  }

  .margin-right-desktop-19 {
    margin-right: 190px!important;
  }

  .margin-right-desktop-20 {
    margin-right: 200px!important;
  }

  .margin-bottom-desktop-0 {
    margin-bottom: 0!important;
  }

  .margin-bottom-desktop-1 {
    margin-bottom: 10px!important;
  }

  .margin-bottom-desktop-2 {
    margin-bottom: 20px!important;
  }

  .margin-bottom-desktop-3 {
    margin-bottom: 30px!important;
  }

  .margin-bottom-desktop-4 {
    margin-bottom: 40px!important;
  }

  .margin-bottom-desktop-5 {
    margin-bottom: 50px!important;
  }

  .margin-bottom-desktop-6 {
    margin-bottom: 60px!important;
  }

  .margin-bottom-desktop-7 {
    margin-bottom: 70px!important;
  }

  .margin-bottom-desktop-8 {
    margin-bottom: 80px!important;
  }

  .margin-bottom-desktop-9 {
    margin-bottom: 90px!important;
  }

  .margin-bottom-desktop-10 {
    margin-bottom: 100px!important;
  }

  .margin-bottom-desktop-11 {
    margin-bottom: 110px!important;
  }

  .margin-bottom-desktop-12 {
    margin-bottom: 120px!important;
  }

  .margin-bottom-desktop-13 {
    margin-bottom: 130px!important;
  }

  .margin-bottom-desktop-14 {
    margin-bottom: 140px!important;
  }

  .margin-bottom-desktop-15 {
    margin-bottom: 150px!important;
  }

  .margin-bottom-desktop-16 {
    margin-bottom: 160px!important;
  }

  .margin-bottom-desktop-17 {
    margin-bottom: 170px!important;
  }

  .margin-bottom-desktop-18 {
    margin-bottom: 180px!important;
  }

  .margin-bottom-desktop-19 {
    margin-bottom: 190px!important;
  }

  .margin-bottom-desktop-20 {
    margin-bottom: 200px!important;
  }

  .margin-left-desktop-0 {
    margin-left: 0!important;
  }

  .margin-left-desktop-1 {
    margin-left: 10px!important;
  }

  .margin-left-desktop-2 {
    margin-left: 20px!important;
  }

  .margin-left-desktop-3 {
    margin-left: 30px!important;
  }

  .margin-left-desktop-4 {
    margin-left: 40px!important;
  }

  .margin-left-desktop-5 {
    margin-left: 50px!important;
  }

  .margin-left-desktop-6 {
    margin-left: 60px!important;
  }

  .margin-left-desktop-7 {
    margin-left: 70px!important;
  }

  .margin-left-desktop-8 {
    margin-left: 80px!important;
  }

  .margin-left-desktop-9 {
    margin-left: 90px!important;
  }

  .margin-left-desktop-10 {
    margin-left: 100px!important;
  }

  .margin-left-desktop-11 {
    margin-left: 110px!important;
  }

  .margin-left-desktop-12 {
    margin-left: 120px!important;
  }

  .margin-left-desktop-13 {
    margin-left: 130px!important;
  }

  .margin-left-desktop-14 {
    margin-left: 140px!important;
  }

  .margin-left-desktop-15 {
    margin-left: 150px!important;
  }

  .margin-left-desktop-16 {
    margin-left: 160px!important;
  }

  .margin-left-desktop-17 {
    margin-left: 170px!important;
  }

  .margin-left-desktop-18 {
    margin-left: 180px!important;
  }

  .margin-left-desktop-19 {
    margin-left: 190px!important;
  }

  .margin-left-desktop-20 {
    margin-left: 200px!important;
  }
}

@media (max-width:1023px) {
  .padding-tablet-0 {
    padding: 0!important;
  }

  .padding-tablet-1 {
    padding: 10px!important;
  }

  .padding-tablet-2 {
    padding: 20px!important;
  }

  .padding-tablet-3 {
    padding: 30px!important;
  }

  .padding-tablet-4 {
    padding: 40px!important;
  }

  .padding-tablet-5 {
    padding: 50px!important;
  }

  .padding-tablet-6 {
    padding: 60px!important;
  }

  .padding-tablet-7 {
    padding: 70px!important;
  }

  .padding-tablet-8 {
    padding: 80px!important;
  }

  .padding-tablet-9 {
    padding: 90px!important;
  }

  .padding-tablet-10 {
    padding: 100px!important;
  }

  .padding-tablet-11 {
    padding: 110px!important;
  }

  .padding-tablet-12 {
    padding: 120px!important;
  }

  .padding-tablet-13 {
    padding: 130px!important;
  }

  .padding-tablet-14 {
    padding: 140px!important;
  }

  .padding-tablet-15 {
    padding: 150px!important;
  }

  .padding-tablet-16 {
    padding: 160px!important;
  }

  .padding-tablet-17 {
    padding: 170px!important;
  }

  .padding-tablet-18 {
    padding: 180px!important;
  }

  .padding-tablet-19 {
    padding: 190px!important;
  }

  .padding-tablet-20 {
    padding: 200px!important;
  }

  .padding-top-tablet-0 {
    padding-top: 0!important;
  }

  .padding-top-tablet-1 {
    padding-top: 10px!important;
  }

  .padding-top-tablet-2 {
    padding-top: 20px!important;
  }

  .padding-top-tablet-3 {
    padding-top: 30px!important;
  }

  .padding-top-tablet-4 {
    padding-top: 40px!important;
  }

  .padding-top-tablet-5 {
    padding-top: 50px!important;
  }

  .padding-top-tablet-6 {
    padding-top: 60px!important;
  }

  .padding-top-tablet-7 {
    padding-top: 70px!important;
  }

  .padding-top-tablet-8 {
    padding-top: 80px!important;
  }

  .padding-top-tablet-9 {
    padding-top: 90px!important;
  }

  .padding-top-tablet-10 {
    padding-top: 100px!important;
  }

  .padding-top-tablet-11 {
    padding-top: 110px!important;
  }

  .padding-top-tablet-12 {
    padding-top: 120px!important;
  }

  .padding-top-tablet-13 {
    padding-top: 130px!important;
  }

  .padding-top-tablet-14 {
    padding-top: 140px!important;
  }

  .padding-top-tablet-15 {
    padding-top: 150px!important;
  }

  .padding-top-tablet-16 {
    padding-top: 160px!important;
  }

  .padding-top-tablet-17 {
    padding-top: 170px!important;
  }

  .padding-top-tablet-18 {
    padding-top: 180px!important;
  }

  .padding-top-tablet-19 {
    padding-top: 190px!important;
  }

  .padding-top-tablet-20 {
    padding-top: 200px!important;
  }

  .padding-right-tablet-0 {
    padding-right: 0!important;
  }

  .padding-right-tablet-1 {
    padding-right: 10px!important;
  }

  .padding-right-tablet-2 {
    padding-right: 20px!important;
  }

  .padding-right-tablet-3 {
    padding-right: 30px!important;
  }

  .padding-right-tablet-4 {
    padding-right: 40px!important;
  }

  .padding-right-tablet-5 {
    padding-right: 50px!important;
  }

  .padding-right-tablet-6 {
    padding-right: 60px!important;
  }

  .padding-right-tablet-7 {
    padding-right: 70px!important;
  }

  .padding-right-tablet-8 {
    padding-right: 80px!important;
  }

  .padding-right-tablet-9 {
    padding-right: 90px!important;
  }

  .padding-right-tablet-10 {
    padding-right: 100px!important;
  }

  .padding-right-tablet-11 {
    padding-right: 110px!important;
  }

  .padding-right-tablet-12 {
    padding-right: 120px!important;
  }

  .padding-right-tablet-13 {
    padding-right: 130px!important;
  }

  .padding-right-tablet-14 {
    padding-right: 140px!important;
  }

  .padding-right-tablet-15 {
    padding-right: 150px!important;
  }

  .padding-right-tablet-16 {
    padding-right: 160px!important;
  }

  .padding-right-tablet-17 {
    padding-right: 170px!important;
  }

  .padding-right-tablet-18 {
    padding-right: 180px!important;
  }

  .padding-right-tablet-19 {
    padding-right: 190px!important;
  }

  .padding-right-tablet-20 {
    padding-right: 200px!important;
  }

  .padding-bottom-tablet-0 {
    padding-bottom: 0!important;
  }

  .padding-bottom-tablet-1 {
    padding-bottom: 10px!important;
  }

  .padding-bottom-tablet-2 {
    padding-bottom: 20px!important;
  }

  .padding-bottom-tablet-3 {
    padding-bottom: 30px!important;
  }

  .padding-bottom-tablet-4 {
    padding-bottom: 40px!important;
  }

  .padding-bottom-tablet-5 {
    padding-bottom: 50px!important;
  }

  .padding-bottom-tablet-6 {
    padding-bottom: 60px!important;
  }

  .padding-bottom-tablet-7 {
    padding-bottom: 70px!important;
  }

  .padding-bottom-tablet-8 {
    padding-bottom: 80px!important;
  }

  .padding-bottom-tablet-9 {
    padding-bottom: 90px!important;
  }

  .padding-bottom-tablet-10 {
    padding-bottom: 100px!important;
  }

  .padding-bottom-tablet-11 {
    padding-bottom: 110px!important;
  }

  .padding-bottom-tablet-12 {
    padding-bottom: 120px!important;
  }

  .padding-bottom-tablet-13 {
    padding-bottom: 130px!important;
  }

  .padding-bottom-tablet-14 {
    padding-bottom: 140px!important;
  }

  .padding-bottom-tablet-15 {
    padding-bottom: 150px!important;
  }

  .padding-bottom-tablet-16 {
    padding-bottom: 160px!important;
  }

  .padding-bottom-tablet-17 {
    padding-bottom: 170px!important;
  }

  .padding-bottom-tablet-18 {
    padding-bottom: 180px!important;
  }

  .padding-bottom-tablet-19 {
    padding-bottom: 190px!important;
  }

  .padding-bottom-tablet-20 {
    padding-bottom: 200px!important;
  }

  .padding-left-tablet-0 {
    padding-left: 0!important;
  }

  .padding-left-tablet-1 {
    padding-left: 10px!important;
  }

  .padding-left-tablet-2 {
    padding-left: 20px!important;
  }

  .padding-left-tablet-3 {
    padding-left: 30px!important;
  }

  .padding-left-tablet-4 {
    padding-left: 40px!important;
  }

  .padding-left-tablet-5 {
    padding-left: 50px!important;
  }

  .padding-left-tablet-6 {
    padding-left: 60px!important;
  }

  .padding-left-tablet-7 {
    padding-left: 70px!important;
  }

  .padding-left-tablet-8 {
    padding-left: 80px!important;
  }

  .padding-left-tablet-9 {
    padding-left: 90px!important;
  }

  .padding-left-tablet-10 {
    padding-left: 100px!important;
  }

  .padding-left-tablet-11 {
    padding-left: 110px!important;
  }

  .padding-left-tablet-12 {
    padding-left: 120px!important;
  }

  .padding-left-tablet-13 {
    padding-left: 130px!important;
  }

  .padding-left-tablet-14 {
    padding-left: 140px!important;
  }

  .padding-left-tablet-15 {
    padding-left: 150px!important;
  }

  .padding-left-tablet-16 {
    padding-left: 160px!important;
  }

  .padding-left-tablet-17 {
    padding-left: 170px!important;
  }

  .padding-left-tablet-18 {
    padding-left: 180px!important;
  }

  .padding-left-tablet-19 {
    padding-left: 190px!important;
  }

  .padding-left-tablet-20 {
    padding-left: 200px!important;
  }

  .margin-tablet-0 {
    margin: 0!important;
  }

  .margin-tablet-1 {
    margin: 10px!important;
  }

  .margin-tablet-2 {
    margin: 20px!important;
  }

  .margin-tablet-3 {
    margin: 30px!important;
  }

  .margin-tablet-4 {
    margin: 40px!important;
  }

  .margin-tablet-5 {
    margin: 50px!important;
  }

  .margin-tablet-6 {
    margin: 60px!important;
  }

  .margin-tablet-7 {
    margin: 70px!important;
  }

  .margin-tablet-8 {
    margin: 80px!important;
  }

  .margin-tablet-9 {
    margin: 90px!important;
  }

  .margin-tablet-10 {
    margin: 100px!important;
  }

  .margin-tablet-11 {
    margin: 110px!important;
  }

  .margin-tablet-12 {
    margin: 120px!important;
  }

  .margin-tablet-13 {
    margin: 130px!important;
  }

  .margin-tablet-14 {
    margin: 140px!important;
  }

  .margin-tablet-15 {
    margin: 150px!important;
  }

  .margin-tablet-16 {
    margin: 160px!important;
  }

  .margin-tablet-17 {
    margin: 170px!important;
  }

  .margin-tablet-18 {
    margin: 180px!important;
  }

  .margin-tablet-19 {
    margin: 190px!important;
  }

  .margin-tablet-20 {
    margin: 200px!important;
  }

  .margin-top-tablet-0 {
    margin-top: 0!important;
  }

  .margin-top-tablet-1 {
    margin-top: 10px!important;
  }

  .margin-top-tablet-2 {
    margin-top: 20px!important;
  }

  .margin-top-tablet-3 {
    margin-top: 30px!important;
  }

  .margin-top-tablet-4 {
    margin-top: 40px!important;
  }

  .margin-top-tablet-5 {
    margin-top: 50px!important;
  }

  .margin-top-tablet-6 {
    margin-top: 60px!important;
  }

  .margin-top-tablet-7 {
    margin-top: 70px!important;
  }

  .margin-top-tablet-8 {
    margin-top: 80px!important;
  }

  .margin-top-tablet-9 {
    margin-top: 90px!important;
  }

  .margin-top-tablet-10 {
    margin-top: 100px!important;
  }

  .margin-top-tablet-11 {
    margin-top: 110px!important;
  }

  .margin-top-tablet-12 {
    margin-top: 120px!important;
  }

  .margin-top-tablet-13 {
    margin-top: 130px!important;
  }

  .margin-top-tablet-14 {
    margin-top: 140px!important;
  }

  .margin-top-tablet-15 {
    margin-top: 150px!important;
  }

  .margin-top-tablet-16 {
    margin-top: 160px!important;
  }

  .margin-top-tablet-17 {
    margin-top: 170px!important;
  }

  .margin-top-tablet-18 {
    margin-top: 180px!important;
  }

  .margin-top-tablet-19 {
    margin-top: 190px!important;
  }

  .margin-top-tablet-20 {
    margin-top: 200px!important;
  }

  .margin-right-tablet-0 {
    margin-right: 0!important;
  }

  .margin-right-tablet-1 {
    margin-right: 10px!important;
  }

  .margin-right-tablet-2 {
    margin-right: 20px!important;
  }

  .margin-right-tablet-3 {
    margin-right: 30px!important;
  }

  .margin-right-tablet-4 {
    margin-right: 40px!important;
  }

  .margin-right-tablet-5 {
    margin-right: 50px!important;
  }

  .margin-right-tablet-6 {
    margin-right: 60px!important;
  }

  .margin-right-tablet-7 {
    margin-right: 70px!important;
  }

  .margin-right-tablet-8 {
    margin-right: 80px!important;
  }

  .margin-right-tablet-9 {
    margin-right: 90px!important;
  }

  .margin-right-tablet-10 {
    margin-right: 100px!important;
  }

  .margin-right-tablet-11 {
    margin-right: 110px!important;
  }

  .margin-right-tablet-12 {
    margin-right: 120px!important;
  }

  .margin-right-tablet-13 {
    margin-right: 130px!important;
  }

  .margin-right-tablet-14 {
    margin-right: 140px!important;
  }

  .margin-right-tablet-15 {
    margin-right: 150px!important;
  }

  .margin-right-tablet-16 {
    margin-right: 160px!important;
  }

  .margin-right-tablet-17 {
    margin-right: 170px!important;
  }

  .margin-right-tablet-18 {
    margin-right: 180px!important;
  }

  .margin-right-tablet-19 {
    margin-right: 190px!important;
  }

  .margin-right-tablet-20 {
    margin-right: 200px!important;
  }

  .margin-bottom-tablet-0 {
    margin-bottom: 0!important;
  }

  .margin-bottom-tablet-1 {
    margin-bottom: 10px!important;
  }

  .margin-bottom-tablet-2 {
    margin-bottom: 20px!important;
  }

  .margin-bottom-tablet-3 {
    margin-bottom: 30px!important;
  }

  .margin-bottom-tablet-4 {
    margin-bottom: 40px!important;
  }

  .margin-bottom-tablet-5 {
    margin-bottom: 50px!important;
  }

  .margin-bottom-tablet-6 {
    margin-bottom: 60px!important;
  }

  .margin-bottom-tablet-7 {
    margin-bottom: 70px!important;
  }

  .margin-bottom-tablet-8 {
    margin-bottom: 80px!important;
  }

  .margin-bottom-tablet-9 {
    margin-bottom: 90px!important;
  }

  .margin-bottom-tablet-10 {
    margin-bottom: 100px!important;
  }

  .margin-bottom-tablet-11 {
    margin-bottom: 110px!important;
  }

  .margin-bottom-tablet-12 {
    margin-bottom: 120px!important;
  }

  .margin-bottom-tablet-13 {
    margin-bottom: 130px!important;
  }

  .margin-bottom-tablet-14 {
    margin-bottom: 140px!important;
  }

  .margin-bottom-tablet-15 {
    margin-bottom: 150px!important;
  }

  .margin-bottom-tablet-16 {
    margin-bottom: 160px!important;
  }

  .margin-bottom-tablet-17 {
    margin-bottom: 170px!important;
  }

  .margin-bottom-tablet-18 {
    margin-bottom: 180px!important;
  }

  .margin-bottom-tablet-19 {
    margin-bottom: 190px!important;
  }

  .margin-bottom-tablet-20 {
    margin-bottom: 200px!important;
  }

  .margin-left-tablet-0 {
    margin-left: 0!important;
  }

  .margin-left-tablet-1 {
    margin-left: 10px!important;
  }

  .margin-left-tablet-2 {
    margin-left: 20px!important;
  }

  .margin-left-tablet-3 {
    margin-left: 30px!important;
  }

  .margin-left-tablet-4 {
    margin-left: 40px!important;
  }

  .margin-left-tablet-5 {
    margin-left: 50px!important;
  }

  .margin-left-tablet-6 {
    margin-left: 60px!important;
  }

  .margin-left-tablet-7 {
    margin-left: 70px!important;
  }

  .margin-left-tablet-8 {
    margin-left: 80px!important;
  }

  .margin-left-tablet-9 {
    margin-left: 90px!important;
  }

  .margin-left-tablet-10 {
    margin-left: 100px!important;
  }

  .margin-left-tablet-11 {
    margin-left: 110px!important;
  }

  .margin-left-tablet-12 {
    margin-left: 120px!important;
  }

  .margin-left-tablet-13 {
    margin-left: 130px!important;
  }

  .margin-left-tablet-14 {
    margin-left: 140px!important;
  }

  .margin-left-tablet-15 {
    margin-left: 150px!important;
  }

  .margin-left-tablet-16 {
    margin-left: 160px!important;
  }

  .margin-left-tablet-17 {
    margin-left: 170px!important;
  }

  .margin-left-tablet-18 {
    margin-left: 180px!important;
  }

  .margin-left-tablet-19 {
    margin-left: 190px!important;
  }

  .margin-left-tablet-20 {
    margin-left: 200px!important;
  }
}

@media (max-width:767px) {
  .padding-phablet-0 {
    padding: 0!important;
  }

  .padding-phablet-1 {
    padding: 10px!important;
  }

  .padding-phablet-2 {
    padding: 20px!important;
  }

  .padding-phablet-3 {
    padding: 30px!important;
  }

  .padding-phablet-4 {
    padding: 40px!important;
  }

  .padding-phablet-5 {
    padding: 50px!important;
  }

  .padding-phablet-6 {
    padding: 60px!important;
  }

  .padding-phablet-7 {
    padding: 70px!important;
  }

  .padding-phablet-8 {
    padding: 80px!important;
  }

  .padding-phablet-9 {
    padding: 90px!important;
  }

  .padding-phablet-10 {
    padding: 100px!important;
  }

  .padding-phablet-11 {
    padding: 110px!important;
  }

  .padding-phablet-12 {
    padding: 120px!important;
  }

  .padding-phablet-13 {
    padding: 130px!important;
  }

  .padding-phablet-14 {
    padding: 140px!important;
  }

  .padding-phablet-15 {
    padding: 150px!important;
  }

  .padding-phablet-16 {
    padding: 160px!important;
  }

  .padding-phablet-17 {
    padding: 170px!important;
  }

  .padding-phablet-18 {
    padding: 180px!important;
  }

  .padding-phablet-19 {
    padding: 190px!important;
  }

  .padding-phablet-20 {
    padding: 200px!important;
  }

  .padding-top-phablet-0 {
    padding-top: 0!important;
  }

  .padding-top-phablet-1 {
    padding-top: 10px!important;
  }

  .padding-top-phablet-2 {
    padding-top: 20px!important;
  }

  .padding-top-phablet-3 {
    padding-top: 30px!important;
  }

  .padding-top-phablet-4 {
    padding-top: 40px!important;
  }

  .padding-top-phablet-5 {
    padding-top: 50px!important;
  }

  .padding-top-phablet-6 {
    padding-top: 60px!important;
  }

  .padding-top-phablet-7 {
    padding-top: 70px!important;
  }

  .padding-top-phablet-8 {
    padding-top: 80px!important;
  }

  .padding-top-phablet-9 {
    padding-top: 90px!important;
  }

  .padding-top-phablet-10 {
    padding-top: 100px!important;
  }

  .padding-top-phablet-11 {
    padding-top: 110px!important;
  }

  .padding-top-phablet-12 {
    padding-top: 120px!important;
  }

  .padding-top-phablet-13 {
    padding-top: 130px!important;
  }

  .padding-top-phablet-14 {
    padding-top: 140px!important;
  }

  .padding-top-phablet-15 {
    padding-top: 150px!important;
  }

  .padding-top-phablet-16 {
    padding-top: 160px!important;
  }

  .padding-top-phablet-17 {
    padding-top: 170px!important;
  }

  .padding-top-phablet-18 {
    padding-top: 180px!important;
  }

  .padding-top-phablet-19 {
    padding-top: 190px!important;
  }

  .padding-top-phablet-20 {
    padding-top: 200px!important;
  }

  .padding-right-phablet-0 {
    padding-right: 0!important;
  }

  .padding-right-phablet-1 {
    padding-right: 10px!important;
  }

  .padding-right-phablet-2 {
    padding-right: 20px!important;
  }

  .padding-right-phablet-3 {
    padding-right: 30px!important;
  }

  .padding-right-phablet-4 {
    padding-right: 40px!important;
  }

  .padding-right-phablet-5 {
    padding-right: 50px!important;
  }

  .padding-right-phablet-6 {
    padding-right: 60px!important;
  }

  .padding-right-phablet-7 {
    padding-right: 70px!important;
  }

  .padding-right-phablet-8 {
    padding-right: 80px!important;
  }

  .padding-right-phablet-9 {
    padding-right: 90px!important;
  }

  .padding-right-phablet-10 {
    padding-right: 100px!important;
  }

  .padding-right-phablet-11 {
    padding-right: 110px!important;
  }

  .padding-right-phablet-12 {
    padding-right: 120px!important;
  }

  .padding-right-phablet-13 {
    padding-right: 130px!important;
  }

  .padding-right-phablet-14 {
    padding-right: 140px!important;
  }

  .padding-right-phablet-15 {
    padding-right: 150px!important;
  }

  .padding-right-phablet-16 {
    padding-right: 160px!important;
  }

  .padding-right-phablet-17 {
    padding-right: 170px!important;
  }

  .padding-right-phablet-18 {
    padding-right: 180px!important;
  }

  .padding-right-phablet-19 {
    padding-right: 190px!important;
  }

  .padding-right-phablet-20 {
    padding-right: 200px!important;
  }

  .padding-bottom-phablet-0 {
    padding-bottom: 0!important;
  }

  .padding-bottom-phablet-1 {
    padding-bottom: 10px!important;
  }

  .padding-bottom-phablet-2 {
    padding-bottom: 20px!important;
  }

  .padding-bottom-phablet-3 {
    padding-bottom: 30px!important;
  }

  .padding-bottom-phablet-4 {
    padding-bottom: 40px!important;
  }

  .padding-bottom-phablet-5 {
    padding-bottom: 50px!important;
  }

  .padding-bottom-phablet-6 {
    padding-bottom: 60px!important;
  }

  .padding-bottom-phablet-7 {
    padding-bottom: 70px!important;
  }

  .padding-bottom-phablet-8 {
    padding-bottom: 80px!important;
  }

  .padding-bottom-phablet-9 {
    padding-bottom: 90px!important;
  }

  .padding-bottom-phablet-10 {
    padding-bottom: 100px!important;
  }

  .padding-bottom-phablet-11 {
    padding-bottom: 110px!important;
  }

  .padding-bottom-phablet-12 {
    padding-bottom: 120px!important;
  }

  .padding-bottom-phablet-13 {
    padding-bottom: 130px!important;
  }

  .padding-bottom-phablet-14 {
    padding-bottom: 140px!important;
  }

  .padding-bottom-phablet-15 {
    padding-bottom: 150px!important;
  }

  .padding-bottom-phablet-16 {
    padding-bottom: 160px!important;
  }

  .padding-bottom-phablet-17 {
    padding-bottom: 170px!important;
  }

  .padding-bottom-phablet-18 {
    padding-bottom: 180px!important;
  }

  .padding-bottom-phablet-19 {
    padding-bottom: 190px!important;
  }

  .padding-bottom-phablet-20 {
    padding-bottom: 200px!important;
  }

  .padding-left-phablet-0 {
    padding-left: 0!important;
  }

  .padding-left-phablet-1 {
    padding-left: 10px!important;
  }

  .padding-left-phablet-2 {
    padding-left: 20px!important;
  }

  .padding-left-phablet-3 {
    padding-left: 30px!important;
  }

  .padding-left-phablet-4 {
    padding-left: 40px!important;
  }

  .padding-left-phablet-5 {
    padding-left: 50px!important;
  }

  .padding-left-phablet-6 {
    padding-left: 60px!important;
  }

  .padding-left-phablet-7 {
    padding-left: 70px!important;
  }

  .padding-left-phablet-8 {
    padding-left: 80px!important;
  }

  .padding-left-phablet-9 {
    padding-left: 90px!important;
  }

  .padding-left-phablet-10 {
    padding-left: 100px!important;
  }

  .padding-left-phablet-11 {
    padding-left: 110px!important;
  }

  .padding-left-phablet-12 {
    padding-left: 120px!important;
  }

  .padding-left-phablet-13 {
    padding-left: 130px!important;
  }

  .padding-left-phablet-14 {
    padding-left: 140px!important;
  }

  .padding-left-phablet-15 {
    padding-left: 150px!important;
  }

  .padding-left-phablet-16 {
    padding-left: 160px!important;
  }

  .padding-left-phablet-17 {
    padding-left: 170px!important;
  }

  .padding-left-phablet-18 {
    padding-left: 180px!important;
  }

  .padding-left-phablet-19 {
    padding-left: 190px!important;
  }

  .padding-left-phablet-20 {
    padding-left: 200px!important;
  }

  .margin-phablet-0 {
    margin: 0!important;
  }

  .margin-phablet-1 {
    margin: 10px!important;
  }

  .margin-phablet-2 {
    margin: 20px!important;
  }

  .margin-phablet-3 {
    margin: 30px!important;
  }

  .margin-phablet-4 {
    margin: 40px!important;
  }

  .margin-phablet-5 {
    margin: 50px!important;
  }

  .margin-phablet-6 {
    margin: 60px!important;
  }

  .margin-phablet-7 {
    margin: 70px!important;
  }

  .margin-phablet-8 {
    margin: 80px!important;
  }

  .margin-phablet-9 {
    margin: 90px!important;
  }

  .margin-phablet-10 {
    margin: 100px!important;
  }

  .margin-phablet-11 {
    margin: 110px!important;
  }

  .margin-phablet-12 {
    margin: 120px!important;
  }

  .margin-phablet-13 {
    margin: 130px!important;
  }

  .margin-phablet-14 {
    margin: 140px!important;
  }

  .margin-phablet-15 {
    margin: 150px!important;
  }

  .margin-phablet-16 {
    margin: 160px!important;
  }

  .margin-phablet-17 {
    margin: 170px!important;
  }

  .margin-phablet-18 {
    margin: 180px!important;
  }

  .margin-phablet-19 {
    margin: 190px!important;
  }

  .margin-phablet-20 {
    margin: 200px!important;
  }

  .margin-top-phablet-0 {
    margin-top: 0!important;
  }

  .margin-top-phablet-1 {
    margin-top: 10px!important;
  }

  .margin-top-phablet-2 {
    margin-top: 20px!important;
  }

  .margin-top-phablet-3 {
    margin-top: 30px!important;
  }

  .margin-top-phablet-4 {
    margin-top: 40px!important;
  }

  .margin-top-phablet-5 {
    margin-top: 50px!important;
  }

  .margin-top-phablet-6 {
    margin-top: 60px!important;
  }

  .margin-top-phablet-7 {
    margin-top: 70px!important;
  }

  .margin-top-phablet-8 {
    margin-top: 80px!important;
  }

  .margin-top-phablet-9 {
    margin-top: 90px!important;
  }

  .margin-top-phablet-10 {
    margin-top: 100px!important;
  }

  .margin-top-phablet-11 {
    margin-top: 110px!important;
  }

  .margin-top-phablet-12 {
    margin-top: 120px!important;
  }

  .margin-top-phablet-13 {
    margin-top: 130px!important;
  }

  .margin-top-phablet-14 {
    margin-top: 140px!important;
  }

  .margin-top-phablet-15 {
    margin-top: 150px!important;
  }

  .margin-top-phablet-16 {
    margin-top: 160px!important;
  }

  .margin-top-phablet-17 {
    margin-top: 170px!important;
  }

  .margin-top-phablet-18 {
    margin-top: 180px!important;
  }

  .margin-top-phablet-19 {
    margin-top: 190px!important;
  }

  .margin-top-phablet-20 {
    margin-top: 200px!important;
  }

  .margin-right-phablet-0 {
    margin-right: 0!important;
  }

  .margin-right-phablet-1 {
    margin-right: 10px!important;
  }

  .margin-right-phablet-2 {
    margin-right: 20px!important;
  }

  .margin-right-phablet-3 {
    margin-right: 30px!important;
  }

  .margin-right-phablet-4 {
    margin-right: 40px!important;
  }

  .margin-right-phablet-5 {
    margin-right: 50px!important;
  }

  .margin-right-phablet-6 {
    margin-right: 60px!important;
  }

  .margin-right-phablet-7 {
    margin-right: 70px!important;
  }

  .margin-right-phablet-8 {
    margin-right: 80px!important;
  }

  .margin-right-phablet-9 {
    margin-right: 90px!important;
  }

  .margin-right-phablet-10 {
    margin-right: 100px!important;
  }

  .margin-right-phablet-11 {
    margin-right: 110px!important;
  }

  .margin-right-phablet-12 {
    margin-right: 120px!important;
  }

  .margin-right-phablet-13 {
    margin-right: 130px!important;
  }

  .margin-right-phablet-14 {
    margin-right: 140px!important;
  }

  .margin-right-phablet-15 {
    margin-right: 150px!important;
  }

  .margin-right-phablet-16 {
    margin-right: 160px!important;
  }

  .margin-right-phablet-17 {
    margin-right: 170px!important;
  }

  .margin-right-phablet-18 {
    margin-right: 180px!important;
  }

  .margin-right-phablet-19 {
    margin-right: 190px!important;
  }

  .margin-right-phablet-20 {
    margin-right: 200px!important;
  }

  .margin-bottom-phablet-0 {
    margin-bottom: 0!important;
  }

  .margin-bottom-phablet-1 {
    margin-bottom: 10px!important;
  }

  .margin-bottom-phablet-2 {
    margin-bottom: 20px!important;
  }

  .margin-bottom-phablet-3 {
    margin-bottom: 30px!important;
  }

  .margin-bottom-phablet-4 {
    margin-bottom: 40px!important;
  }

  .margin-bottom-phablet-5 {
    margin-bottom: 50px!important;
  }

  .margin-bottom-phablet-6 {
    margin-bottom: 60px!important;
  }

  .margin-bottom-phablet-7 {
    margin-bottom: 70px!important;
  }

  .margin-bottom-phablet-8 {
    margin-bottom: 80px!important;
  }

  .margin-bottom-phablet-9 {
    margin-bottom: 90px!important;
  }

  .margin-bottom-phablet-10 {
    margin-bottom: 100px!important;
  }

  .margin-bottom-phablet-11 {
    margin-bottom: 110px!important;
  }

  .margin-bottom-phablet-12 {
    margin-bottom: 120px!important;
  }

  .margin-bottom-phablet-13 {
    margin-bottom: 130px!important;
  }

  .margin-bottom-phablet-14 {
    margin-bottom: 140px!important;
  }

  .margin-bottom-phablet-15 {
    margin-bottom: 150px!important;
  }

  .margin-bottom-phablet-16 {
    margin-bottom: 160px!important;
  }

  .margin-bottom-phablet-17 {
    margin-bottom: 170px!important;
  }

  .margin-bottom-phablet-18 {
    margin-bottom: 180px!important;
  }

  .margin-bottom-phablet-19 {
    margin-bottom: 190px!important;
  }

  .margin-bottom-phablet-20 {
    margin-bottom: 200px!important;
  }

  .margin-left-phablet-0 {
    margin-left: 0!important;
  }

  .margin-left-phablet-1 {
    margin-left: 10px!important;
  }

  .margin-left-phablet-2 {
    margin-left: 20px!important;
  }

  .margin-left-phablet-3 {
    margin-left: 30px!important;
  }

  .margin-left-phablet-4 {
    margin-left: 40px!important;
  }

  .margin-left-phablet-5 {
    margin-left: 50px!important;
  }

  .margin-left-phablet-6 {
    margin-left: 60px!important;
  }

  .margin-left-phablet-7 {
    margin-left: 70px!important;
  }

  .margin-left-phablet-8 {
    margin-left: 80px!important;
  }

  .margin-left-phablet-9 {
    margin-left: 90px!important;
  }

  .margin-left-phablet-10 {
    margin-left: 100px!important;
  }

  .margin-left-phablet-11 {
    margin-left: 110px!important;
  }

  .margin-left-phablet-12 {
    margin-left: 120px!important;
  }

  .margin-left-phablet-13 {
    margin-left: 130px!important;
  }

  .margin-left-phablet-14 {
    margin-left: 140px!important;
  }

  .margin-left-phablet-15 {
    margin-left: 150px!important;
  }

  .margin-left-phablet-16 {
    margin-left: 160px!important;
  }

  .margin-left-phablet-17 {
    margin-left: 170px!important;
  }

  .margin-left-phablet-18 {
    margin-left: 180px!important;
  }

  .margin-left-phablet-19 {
    margin-left: 190px!important;
  }

  .margin-left-phablet-20 {
    margin-left: 200px!important;
  }
}

@media (max-width:435px) {
  .padding-phone-0 {
    padding: 0!important;
  }

  .padding-phone-1 {
    padding: 10px!important;
  }

  .padding-phone-2 {
    padding: 20px!important;
  }

  .padding-phone-3 {
    padding: 30px!important;
  }

  .padding-phone-4 {
    padding: 40px!important;
  }

  .padding-phone-5 {
    padding: 50px!important;
  }

  .padding-phone-6 {
    padding: 60px!important;
  }

  .padding-phone-7 {
    padding: 70px!important;
  }

  .padding-phone-8 {
    padding: 80px!important;
  }

  .padding-phone-9 {
    padding: 90px!important;
  }

  .padding-phone-10 {
    padding: 100px!important;
  }

  .padding-phone-11 {
    padding: 110px!important;
  }

  .padding-phone-12 {
    padding: 120px!important;
  }

  .padding-phone-13 {
    padding: 130px!important;
  }

  .padding-phone-14 {
    padding: 140px!important;
  }

  .padding-phone-15 {
    padding: 150px!important;
  }

  .padding-phone-16 {
    padding: 160px!important;
  }

  .padding-phone-17 {
    padding: 170px!important;
  }

  .padding-phone-18 {
    padding: 180px!important;
  }

  .padding-phone-19 {
    padding: 190px!important;
  }

  .padding-phone-20 {
    padding: 200px!important;
  }

  .padding-top-phone-0 {
    padding-top: 0!important;
  }

  .padding-top-phone-1 {
    padding-top: 10px!important;
  }

  .padding-top-phone-2 {
    padding-top: 20px!important;
  }

  .padding-top-phone-3 {
    padding-top: 30px!important;
  }

  .padding-top-phone-4 {
    padding-top: 40px!important;
  }

  .padding-top-phone-5 {
    padding-top: 50px!important;
  }

  .padding-top-phone-6 {
    padding-top: 60px!important;
  }

  .padding-top-phone-7 {
    padding-top: 70px!important;
  }

  .padding-top-phone-8 {
    padding-top: 80px!important;
  }

  .padding-top-phone-9 {
    padding-top: 90px!important;
  }

  .padding-top-phone-10 {
    padding-top: 100px!important;
  }

  .padding-top-phone-11 {
    padding-top: 110px!important;
  }

  .padding-top-phone-12 {
    padding-top: 120px!important;
  }

  .padding-top-phone-13 {
    padding-top: 130px!important;
  }

  .padding-top-phone-14 {
    padding-top: 140px!important;
  }

  .padding-top-phone-15 {
    padding-top: 150px!important;
  }

  .padding-top-phone-16 {
    padding-top: 160px!important;
  }

  .padding-top-phone-17 {
    padding-top: 170px!important;
  }

  .padding-top-phone-18 {
    padding-top: 180px!important;
  }

  .padding-top-phone-19 {
    padding-top: 190px!important;
  }

  .padding-top-phone-20 {
    padding-top: 200px!important;
  }

  .padding-right-phone-0 {
    padding-right: 0!important;
  }

  .padding-right-phone-1 {
    padding-right: 10px!important;
  }

  .padding-right-phone-2 {
    padding-right: 20px!important;
  }

  .padding-right-phone-3 {
    padding-right: 30px!important;
  }

  .padding-right-phone-4 {
    padding-right: 40px!important;
  }

  .padding-right-phone-5 {
    padding-right: 50px!important;
  }

  .padding-right-phone-6 {
    padding-right: 60px!important;
  }

  .padding-right-phone-7 {
    padding-right: 70px!important;
  }

  .padding-right-phone-8 {
    padding-right: 80px!important;
  }

  .padding-right-phone-9 {
    padding-right: 90px!important;
  }

  .padding-right-phone-10 {
    padding-right: 100px!important;
  }

  .padding-right-phone-11 {
    padding-right: 110px!important;
  }

  .padding-right-phone-12 {
    padding-right: 120px!important;
  }

  .padding-right-phone-13 {
    padding-right: 130px!important;
  }

  .padding-right-phone-14 {
    padding-right: 140px!important;
  }

  .padding-right-phone-15 {
    padding-right: 150px!important;
  }

  .padding-right-phone-16 {
    padding-right: 160px!important;
  }

  .padding-right-phone-17 {
    padding-right: 170px!important;
  }

  .padding-right-phone-18 {
    padding-right: 180px!important;
  }

  .padding-right-phone-19 {
    padding-right: 190px!important;
  }

  .padding-right-phone-20 {
    padding-right: 200px!important;
  }

  .padding-bottom-phone-0 {
    padding-bottom: 0!important;
  }

  .padding-bottom-phone-1 {
    padding-bottom: 10px!important;
  }

  .padding-bottom-phone-2 {
    padding-bottom: 20px!important;
  }

  .padding-bottom-phone-3 {
    padding-bottom: 30px!important;
  }

  .padding-bottom-phone-4 {
    padding-bottom: 40px!important;
  }

  .padding-bottom-phone-5 {
    padding-bottom: 50px!important;
  }

  .padding-bottom-phone-6 {
    padding-bottom: 60px!important;
  }

  .padding-bottom-phone-7 {
    padding-bottom: 70px!important;
  }

  .padding-bottom-phone-8 {
    padding-bottom: 80px!important;
  }

  .padding-bottom-phone-9 {
    padding-bottom: 90px!important;
  }

  .padding-bottom-phone-10 {
    padding-bottom: 100px!important;
  }

  .padding-bottom-phone-11 {
    padding-bottom: 110px!important;
  }

  .padding-bottom-phone-12 {
    padding-bottom: 120px!important;
  }

  .padding-bottom-phone-13 {
    padding-bottom: 130px!important;
  }

  .padding-bottom-phone-14 {
    padding-bottom: 140px!important;
  }

  .padding-bottom-phone-15 {
    padding-bottom: 150px!important;
  }

  .padding-bottom-phone-16 {
    padding-bottom: 160px!important;
  }

  .padding-bottom-phone-17 {
    padding-bottom: 170px!important;
  }

  .padding-bottom-phone-18 {
    padding-bottom: 180px!important;
  }

  .padding-bottom-phone-19 {
    padding-bottom: 190px!important;
  }

  .padding-bottom-phone-20 {
    padding-bottom: 200px!important;
  }

  .padding-left-phone-0 {
    padding-left: 0!important;
  }

  .padding-left-phone-1 {
    padding-left: 10px!important;
  }

  .padding-left-phone-2 {
    padding-left: 20px!important;
  }

  .padding-left-phone-3 {
    padding-left: 30px!important;
  }

  .padding-left-phone-4 {
    padding-left: 40px!important;
  }

  .padding-left-phone-5 {
    padding-left: 50px!important;
  }

  .padding-left-phone-6 {
    padding-left: 60px!important;
  }

  .padding-left-phone-7 {
    padding-left: 70px!important;
  }

  .padding-left-phone-8 {
    padding-left: 80px!important;
  }

  .padding-left-phone-9 {
    padding-left: 90px!important;
  }

  .padding-left-phone-10 {
    padding-left: 100px!important;
  }

  .padding-left-phone-11 {
    padding-left: 110px!important;
  }

  .padding-left-phone-12 {
    padding-left: 120px!important;
  }

  .padding-left-phone-13 {
    padding-left: 130px!important;
  }

  .padding-left-phone-14 {
    padding-left: 140px!important;
  }

  .padding-left-phone-15 {
    padding-left: 150px!important;
  }

  .padding-left-phone-16 {
    padding-left: 160px!important;
  }

  .padding-left-phone-17 {
    padding-left: 170px!important;
  }

  .padding-left-phone-18 {
    padding-left: 180px!important;
  }

  .padding-left-phone-19 {
    padding-left: 190px!important;
  }

  .padding-left-phone-20 {
    padding-left: 200px!important;
  }

  .margin-phone-0 {
    margin: 0!important;
  }

  .margin-phone-1 {
    margin: 10px!important;
  }

  .margin-phone-2 {
    margin: 20px!important;
  }

  .margin-phone-3 {
    margin: 30px!important;
  }

  .margin-phone-4 {
    margin: 40px!important;
  }

  .margin-phone-5 {
    margin: 50px!important;
  }

  .margin-phone-6 {
    margin: 60px!important;
  }

  .margin-phone-7 {
    margin: 70px!important;
  }

  .margin-phone-8 {
    margin: 80px!important;
  }

  .margin-phone-9 {
    margin: 90px!important;
  }

  .margin-phone-10 {
    margin: 100px!important;
  }

  .margin-phone-11 {
    margin: 110px!important;
  }

  .margin-phone-12 {
    margin: 120px!important;
  }

  .margin-phone-13 {
    margin: 130px!important;
  }

  .margin-phone-14 {
    margin: 140px!important;
  }

  .margin-phone-15 {
    margin: 150px!important;
  }

  .margin-phone-16 {
    margin: 160px!important;
  }

  .margin-phone-17 {
    margin: 170px!important;
  }

  .margin-phone-18 {
    margin: 180px!important;
  }

  .margin-phone-19 {
    margin: 190px!important;
  }

  .margin-phone-20 {
    margin: 200px!important;
  }

  .margin-top-phone-0 {
    margin-top: 0!important;
  }

  .margin-top-phone-1 {
    margin-top: 10px!important;
  }

  .margin-top-phone-2 {
    margin-top: 20px!important;
  }

  .margin-top-phone-3 {
    margin-top: 30px!important;
  }

  .margin-top-phone-4 {
    margin-top: 40px!important;
  }

  .margin-top-phone-5 {
    margin-top: 50px!important;
  }

  .margin-top-phone-6 {
    margin-top: 60px!important;
  }

  .margin-top-phone-7 {
    margin-top: 70px!important;
  }

  .margin-top-phone-8 {
    margin-top: 80px!important;
  }

  .margin-top-phone-9 {
    margin-top: 90px!important;
  }

  .margin-top-phone-10 {
    margin-top: 100px!important;
  }

  .margin-top-phone-11 {
    margin-top: 110px!important;
  }

  .margin-top-phone-12 {
    margin-top: 120px!important;
  }

  .margin-top-phone-13 {
    margin-top: 130px!important;
  }

  .margin-top-phone-14 {
    margin-top: 140px!important;
  }

  .margin-top-phone-15 {
    margin-top: 150px!important;
  }

  .margin-top-phone-16 {
    margin-top: 160px!important;
  }

  .margin-top-phone-17 {
    margin-top: 170px!important;
  }

  .margin-top-phone-18 {
    margin-top: 180px!important;
  }

  .margin-top-phone-19 {
    margin-top: 190px!important;
  }

  .margin-top-phone-20 {
    margin-top: 200px!important;
  }

  .margin-right-phone-0 {
    margin-right: 0!important;
  }

  .margin-right-phone-1 {
    margin-right: 10px!important;
  }

  .margin-right-phone-2 {
    margin-right: 20px!important;
  }

  .margin-right-phone-3 {
    margin-right: 30px!important;
  }

  .margin-right-phone-4 {
    margin-right: 40px!important;
  }

  .margin-right-phone-5 {
    margin-right: 50px!important;
  }

  .margin-right-phone-6 {
    margin-right: 60px!important;
  }

  .margin-right-phone-7 {
    margin-right: 70px!important;
  }

  .margin-right-phone-8 {
    margin-right: 80px!important;
  }

  .margin-right-phone-9 {
    margin-right: 90px!important;
  }

  .margin-right-phone-10 {
    margin-right: 100px!important;
  }

  .margin-right-phone-11 {
    margin-right: 110px!important;
  }

  .margin-right-phone-12 {
    margin-right: 120px!important;
  }

  .margin-right-phone-13 {
    margin-right: 130px!important;
  }

  .margin-right-phone-14 {
    margin-right: 140px!important;
  }

  .margin-right-phone-15 {
    margin-right: 150px!important;
  }

  .margin-right-phone-16 {
    margin-right: 160px!important;
  }

  .margin-right-phone-17 {
    margin-right: 170px!important;
  }

  .margin-right-phone-18 {
    margin-right: 180px!important;
  }

  .margin-right-phone-19 {
    margin-right: 190px!important;
  }

  .margin-right-phone-20 {
    margin-right: 200px!important;
  }

  .margin-bottom-phone-0 {
    margin-bottom: 0!important;
  }

  .margin-bottom-phone-1 {
    margin-bottom: 10px!important;
  }

  .margin-bottom-phone-2 {
    margin-bottom: 20px!important;
  }

  .margin-bottom-phone-3 {
    margin-bottom: 30px!important;
  }

  .margin-bottom-phone-4 {
    margin-bottom: 40px!important;
  }

  .margin-bottom-phone-5 {
    margin-bottom: 50px!important;
  }

  .margin-bottom-phone-6 {
    margin-bottom: 60px!important;
  }

  .margin-bottom-phone-7 {
    margin-bottom: 70px!important;
  }

  .margin-bottom-phone-8 {
    margin-bottom: 80px!important;
  }

  .margin-bottom-phone-9 {
    margin-bottom: 90px!important;
  }

  .margin-bottom-phone-10 {
    margin-bottom: 100px!important;
  }

  .margin-bottom-phone-11 {
    margin-bottom: 110px!important;
  }

  .margin-bottom-phone-12 {
    margin-bottom: 120px!important;
  }

  .margin-bottom-phone-13 {
    margin-bottom: 130px!important;
  }

  .margin-bottom-phone-14 {
    margin-bottom: 140px!important;
  }

  .margin-bottom-phone-15 {
    margin-bottom: 150px!important;
  }

  .margin-bottom-phone-16 {
    margin-bottom: 160px!important;
  }

  .margin-bottom-phone-17 {
    margin-bottom: 170px!important;
  }

  .margin-bottom-phone-18 {
    margin-bottom: 180px!important;
  }

  .margin-bottom-phone-19 {
    margin-bottom: 190px!important;
  }

  .margin-bottom-phone-20 {
    margin-bottom: 200px!important;
  }

  .margin-left-phone-0 {
    margin-left: 0!important;
  }

  .margin-left-phone-1 {
    margin-left: 10px!important;
  }

  .margin-left-phone-2 {
    margin-left: 20px!important;
  }

  .margin-left-phone-3 {
    margin-left: 30px!important;
  }

  .margin-left-phone-4 {
    margin-left: 40px!important;
  }

  .margin-left-phone-5 {
    margin-left: 50px!important;
  }

  .margin-left-phone-6 {
    margin-left: 60px!important;
  }

  .margin-left-phone-7 {
    margin-left: 70px!important;
  }

  .margin-left-phone-8 {
    margin-left: 80px!important;
  }

  .margin-left-phone-9 {
    margin-left: 90px!important;
  }

  .margin-left-phone-10 {
    margin-left: 100px!important;
  }

  .margin-left-phone-11 {
    margin-left: 110px!important;
  }

  .margin-left-phone-12 {
    margin-left: 120px!important;
  }

  .margin-left-phone-13 {
    margin-left: 130px!important;
  }

  .margin-left-phone-14 {
    margin-left: 140px!important;
  }

  .margin-left-phone-15 {
    margin-left: 150px!important;
  }

  .margin-left-phone-16 {
    margin-left: 160px!important;
  }

  .margin-left-phone-17 {
    margin-left: 170px!important;
  }

  .margin-left-phone-18 {
    margin-left: 180px!important;
  }

  .margin-left-phone-19 {
    margin-left: 190px!important;
  }

  .margin-left-phone-20 {
    margin-left: 200px!important;
  }
}

.pointer-events {
  pointer-events: all!important;
}

.disable-pointer-events {
  pointer-events: none!important;
}

.space {
  padding: 0 20px;
}

.cursorPointer,
.pointer {
  cursor: pointer;
}

.cursorZoomIn,
[data-action=zoom] {
  cursor: pointer;
  cursor: -webkit-zoom-in!important;
}

.cursorZoomOut,
.zoom-img img.zoom-img,
.zoom-img-wrap img.zoom-img {
  cursor: pointer;
  cursor: -webkit-zoom-out!important;
}

.cursorGrab {
  cursor: move;
  cursor: grab!important;
  cursor: -webkit-grab!important;
}

.cursorGrab:active {
  cursor: grabbing!important;
  cursor: -webkit-grabbing!important;
}

.pattern .background {
  background-repeat: repeat;
  background-size: auto;
}

.attachment-fixed,
.cover {
  background-size: cover!important;
}

.attachment-fixed {
  background-attachment: fixed!important;
}

.disableClick {
  pointer-events: none;
}

.disableSelect,
.disableSelect *,
.noSelect,
.noSelect * {
  -webkit-touch-callout: none!important;
  -webkit-user-select: none!important;
  -moz-user-select: none!important;
  -ms-user-select: none!important;
  user-select: none!important;
}

.enableSelect,
.enableSelect *,
.selectable,
.selectable * {
  -webkit-touch-callout: auto!important;
  -webkit-user-select: auto!important;
  -moz-user-select: auto!important;
  -ms-user-select: auto!important;
  user-select: auto!important;
}

.clearBoth:after {
  content: "";
  clear: both;
  display: table;
}

.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}

.swiper-container-no-flexbox .swiper-slide {
  float: left;
}

.swiper-container-vertical>.swiper-wrapper {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property: transform,-webkit-transform;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

.swiper-container-android .swiper-slide,
.swiper-wrapper {
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

.swiper-container-multirow>.swiper-wrapper {
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.swiper-container-free-mode>.swiper-wrapper {
  -webkit-transition-timing-function: ease-out;
  -o-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  margin: 0 auto;
}

.swiper-slide {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property: transform,-webkit-transform;
}

.swiper-slide-invisible-blank {
  visibility: hidden;
}

.swiper-container-autoheight,
.swiper-container-autoheight .swiper-slide {
  height: auto;
}

.swiper-container-autoheight .swiper-wrapper {
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-transition-property: height,-webkit-transform;
  transition-property: height,-webkit-transform;
  -o-transition-property: transform,height;
  transition-property: transform,height;
  transition-property: transform,height,-webkit-transform;
}

.swiper-container-3d {
  -webkit-perspective: 1200px;
  perspective: 1200px;
}

.swiper-container-3d .swiper-cube-shadow,
.swiper-container-3d .swiper-slide,
.swiper-container-3d .swiper-slide-shadow-bottom,
.swiper-container-3d .swiper-slide-shadow-left,
.swiper-container-3d .swiper-slide-shadow-right,
.swiper-container-3d .swiper-slide-shadow-top,
.swiper-container-3d .swiper-wrapper {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.swiper-container-3d .swiper-slide-shadow-bottom,
.swiper-container-3d .swiper-slide-shadow-left,
.swiper-container-3d .swiper-slide-shadow-right,
.swiper-container-3d .swiper-slide-shadow-top {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}

.swiper-container-3d .swiper-slide-shadow-left {
  background-image: -webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));
  background-image: -webkit-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));
  background-image: -o-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));
  background-image: linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0));
}

.swiper-container-3d .swiper-slide-shadow-right {
  background-image: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));
  background-image: -webkit-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));
  background-image: -o-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));
  background-image: linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0));
}

.swiper-container-3d .swiper-slide-shadow-top {
  background-image: -webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));
  background-image: -webkit-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));
  background-image: -o-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));
  background-image: linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0));
}

.swiper-container-3d .swiper-slide-shadow-bottom {
  background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));
  background-image: -webkit-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));
  background-image: -o-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));
  background-image: linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0));
}

.swiper-container-wp8-horizontal,
.swiper-container-wp8-horizontal>.swiper-wrapper {
  -ms-touch-action: pan-y;
  touch-action: pan-y;
}

.swiper-container-wp8-vertical,
.swiper-container-wp8-vertical>.swiper-wrapper {
  -ms-touch-action: pan-x;
  touch-action: pan-x;
}

.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: 50%;
  width: 27px;
  height: 44px;
  margin-top: -22px;
  z-index: 10;
  cursor: pointer;
  background-size: 27px 44px;
  background-position: center;
  background-repeat: no-repeat;
}

.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
  opacity: .35;
  cursor: auto;
  pointer-events: none;
}

.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3Dhttp%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%20viewBox%3D0%200%2027%2044%3E%3Cpath%20d%3DM0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z%20fill%3D%23007aff%2F%3E%3C%2Fsvg%3E");
  left: 10px;
  right: auto;
}

.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3Dhttp%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%20viewBox%3D0%200%2027%2044%3E%3Cpath%20d%3DM27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z%20fill%3D%23007aff%2F%3E%3C%2Fsvg%3E");
  right: 10px;
  left: auto;
}

.swiper-button-prev.swiper-button-white,
.swiper-container-rtl .swiper-button-next.swiper-button-white {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3Dhttp%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%20viewBox%3D0%200%2027%2044%3E%3Cpath%20d%3DM0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z%20fill%3D%23ffffff%2F%3E%3C%2Fsvg%3E");
}

.swiper-button-next.swiper-button-white,
.swiper-container-rtl .swiper-button-prev.swiper-button-white {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3Dhttp%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%20viewBox%3D0%200%2027%2044%3E%3Cpath%20d%3DM27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z%20fill%3D%23ffffff%2F%3E%3C%2Fsvg%3E");
}

.swiper-button-prev.swiper-button-black,
.swiper-container-rtl .swiper-button-next.swiper-button-black {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3Dhttp%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%20viewBox%3D0%200%2027%2044%3E%3Cpath%20d%3DM0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z%20fill%3D%23000000%2F%3E%3C%2Fsvg%3E");
}

.swiper-button-next.swiper-button-black,
.swiper-container-rtl .swiper-button-prev.swiper-button-black {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3Dhttp%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%20viewBox%3D0%200%2027%2044%3E%3Cpath%20d%3DM27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z%20fill%3D%23000000%2F%3E%3C%2Fsvg%3E");
}

.swiper-button-lock {
  display: none;
}

.swiper-pagination {
  position: absolute;
  text-align: center;
  -webkit-transition: .3s opacity;
  -o-transition: .3s opacity;
  transition: .3s opacity;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  z-index: 10;
}

.swiper-pagination.swiper-pagination-hidden {
  opacity: 0;
}

.swiper-container-horizontal>.swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 10px;
  left: 0;
  width: 100%;
}

.swiper-pagination-bullets-dynamic {
  overflow: hidden;
  font-size: 0;
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  -webkit-transform: scale(.33);
  -ms-transform: scale(.33);
  transform: scale(.33);
  position: relative;
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
  -webkit-transform: scale(.66);
  -ms-transform: scale(.66);
  transform: scale(.66);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
  -webkit-transform: scale(.33);
  -ms-transform: scale(.33);
  transform: scale(.33);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
  -webkit-transform: scale(.66);
  -ms-transform: scale(.66);
  transform: scale(.66);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
  -webkit-transform: scale(.33);
  -ms-transform: scale(.33);
  transform: scale(.33);
}

.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background: #000;
  opacity: .2;
}

button.swiper-pagination-bullet {
  border: none;
  margin: 0;
  padding: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer;
}

.swiper-pagination-bullet-active {
  opacity: 1;
  background: #007aff;
}

.swiper-container-vertical>.swiper-pagination-bullets {
  right: 10px;
  top: 50%;
  -webkit-transform: translate3d(0,-50%,0);
  transform: translate3d(0,-50%,0);
}

.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 6px 0;
  display: block;
}

.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 8px;
}

.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  display: inline-block;
  -webkit-transition: .2s top,.2s -webkit-transform;
  transition: .2s top,.2s -webkit-transform;
  -o-transition: .2s transform,.2s top;
  transition: .2s transform,.2s top;
  transition: .2s transform,.2s top,.2s -webkit-transform;
}

.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 4px;
}

.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  white-space: nowrap;
}

.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  -webkit-transition: .2s left,.2s -webkit-transform;
  transition: .2s left,.2s -webkit-transform;
  -o-transition: .2s transform,.2s left;
  transition: .2s transform,.2s left;
  transition: .2s transform,.2s left,.2s -webkit-transform;
}

.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  -webkit-transition: .2s right,.2s -webkit-transform;
  transition: .2s right,.2s -webkit-transform;
  -o-transition: .2s transform,.2s right;
  transition: .2s transform,.2s right;
  transition: .2s transform,.2s right,.2s -webkit-transform;
}

.swiper-pagination-progressbar {
  background: rgba(0,0,0,.25);
  position: absolute;
}

.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background: #007aff;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  -webkit-transform-origin: left top;
  -ms-transform-origin: left top;
  transform-origin: left top;
}

.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  -webkit-transform-origin: right top;
  -ms-transform-origin: right top;
  transform-origin: right top;
}

.swiper-container-horizontal>.swiper-pagination-progressbar,
.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
  width: 100%;
  height: 4px;
  left: 0;
  top: 0;
}

.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
.swiper-container-vertical>.swiper-pagination-progressbar {
  width: 4px;
  height: 100%;
  left: 0;
  top: 0;
}

.swiper-pagination-white .swiper-pagination-bullet-active {
  background: #fff;
}

.swiper-pagination-progressbar.swiper-pagination-white {
  background: rgba(255,255,255,.25);
}

.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill {
  background: #fff;
}

.swiper-pagination-black .swiper-pagination-bullet-active {
  background: #000;
}

.swiper-pagination-progressbar.swiper-pagination-black {
  background: rgba(0,0,0,.25);
}

.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill {
  background: #000;
}

.swiper-pagination-lock {
  display: none;
}

.swiper-scrollbar {
  border-radius: 10px;
  position: relative;
  touch-action: none;
  background: rgba(0,0,0,.1);
}

.swiper-container-horizontal>.swiper-scrollbar {
  position: absolute;
  left: 1%;
  bottom: 3px;
  z-index: 50;
  height: 5px;
  width: 98%;
}

.swiper-container-vertical>.swiper-scrollbar {
  position: absolute;
  right: 3px;
  top: 1%;
  z-index: 50;
  width: 5px;
  height: 98%;
}

.swiper-scrollbar-drag {
  height: 100%;
  width: 100%;
  position: relative;
  background: rgba(0,0,0,.5);
  border-radius: 10px;
  left: 0;
  top: 0;
}

.swiper-scrollbar-cursor-drag {
  cursor: move;
}

.swiper-scrollbar-lock {
  display: none;
}

.swiper-zoom-container {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
}

.swiper-zoom-container>canvas,
.swiper-zoom-container>img,
.swiper-zoom-container>svg {
  max-width: 100%;
  max-height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
}

.swiper-slide-zoomed {
  cursor: move;
}

.swiper-lazy-preloader {
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -21px;
  margin-top: -21px;
  z-index: 10;
  -webkit-transform-origin: 50%;
  -ms-transform-origin: 50%;
  transform-origin: 50%;
  -webkit-animation: swiper-preloader-spin 1s steps(12,end) infinite;
  animation: swiper-preloader-spin 1s steps(12,end) infinite;
}

.swiper-lazy-preloader:after {
  display: block;
  content: "";
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}

@-webkit-keyframes swiper-preloader-spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes swiper-preloader-spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.swiper-container .swiper-notification {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  opacity: 0;
  z-index: -1000;
}

.swiper-container-fade.swiper-container-free-mode .swiper-slide {
  -webkit-transition-timing-function: ease-out;
  -o-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.swiper-container-fade .swiper-slide {
  pointer-events: none;
  -webkit-transition-property: opacity;
  -o-transition-property: opacity;
  transition-property: opacity;
}

.swiper-container-fade .swiper-slide .swiper-slide {
  pointer-events: none;
}

.swiper-container-fade .swiper-slide-active,
.swiper-container-fade .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}

.swiper-container-cube {
  overflow: visible;
}

.swiper-container-cube .swiper-slide {
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 1;
  visibility: hidden;
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
  width: 100%;
  height: 100%;
}

.swiper-container-cube .swiper-slide .swiper-slide {
  pointer-events: none;
}

.swiper-container-cube.swiper-container-rtl .swiper-slide {
  -webkit-transform-origin: 100% 0;
  -ms-transform-origin: 100% 0;
  transform-origin: 100% 0;
}

.swiper-container-cube .swiper-slide-active,
.swiper-container-cube .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}

.swiper-container-cube .swiper-slide-active,
.swiper-container-cube .swiper-slide-next,
.swiper-container-cube .swiper-slide-next+.swiper-slide,
.swiper-container-cube .swiper-slide-prev {
  pointer-events: auto;
  visibility: visible;
}

.swiper-container-cube .swiper-slide-shadow-bottom,
.swiper-container-cube .swiper-slide-shadow-left,
.swiper-container-cube .swiper-slide-shadow-right,
.swiper-container-cube .swiper-slide-shadow-top {
  z-index: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.swiper-container-cube .swiper-cube-shadow {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: .6;
  -webkit-filter: blur(50px);
  filter: blur(50px);
  z-index: 0;
}

.swiper-container-flip {
  overflow: visible;
}

.swiper-container-flip .swiper-slide {
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 1;
}

.swiper-container-flip .swiper-slide .swiper-slide {
  pointer-events: none;
}

.swiper-container-flip .swiper-slide-active,
.swiper-container-flip .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}

.swiper-container-flip .swiper-slide-shadow-bottom,
.swiper-container-flip .swiper-slide-shadow-left,
.swiper-container-flip .swiper-slide-shadow-right,
.swiper-container-flip .swiper-slide-shadow-top {
  z-index: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.swiper-container-coverflow .swiper-wrapper {
  perspective: 1200px;
}

@charset "UTF-8";

a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
hr,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  border: 0;
  vertical-align: baseline;
  margin: 0;
  padding: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

li,
ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:after,
blockquote:before,
q:after,
q:before {
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

b,
strong {
  font-weight: 600;
}

html {
  position: static!important;
  top: 0!important;
  box-sizing: border-box;
}

*,
:after,
:before {
  box-sizing: inherit;
}

html {
  margin: 0;
  padding: 0;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

body {
  position: absolute;
  width: 100%;
  height: 100%;
}

body,
html {
  max-width: 100%;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
}

html.scrollable,
html.scrollable body {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

img {
  max-width: 100%;
  display: inline-block;
}

img.round {
  border-radius: 999px;
}

img.rounded {
  border-radius: 6px;
}

.slides {
  color: #fff;
  fill: #fff;
  font-family: Roboto,sans-serif;
  hyphens: none;
  background: #111;
  -webkit-font-smoothing: antialiased;
}

.slides.bodyWhite {
  background: #fff;
}

.slides.desktopSwipe {
  cursor: -webkit-grab;
}

.slides.desktopSwipe:active {
  cursor: -webkit-grabbing;
}

.slides.desktopSwipe .slide .container .wrap {
  cursor: inherit;
}

a {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  transition: .35s;
}

a.underline {
  text-decoration: underline;
}

a:hover {
  transition: .15s;
  opacity: .8;
}

.h1,
h1 {
  font-size: 70px;
  line-height: 1.285;
  font-weight: 300;
  margin-bottom: 20px;
  letter-spacing: -.036em;
}

.h1.big,
h1.big {
  font-size: 58px;
  line-height: 1;
  font-weight: 100;
}

.h1.huge,
h1.huge {
  font-size: 64px;
  line-height: 1.218751;
  letter-spacing: -.04em;
  margin-bottom: 40px;
  font-weight: 100;
}

.h1.small,
h1.small {
  font-size: 46px;
}

.h1.micro,
h1.micro {
  font-size: 34px;
}

.h2,
h2 {
  font-size: 35px;
  line-height: 1.17;
  margin-bottom: 15px;
  font-weight: 400;
}

.h2.uppercase,
h2.uppercase {
  letter-spacing: .2em!important;
}

.h2.small,
h2.small {
  font-size: 28px;
}

.h2.micro,
h2.micro {
  font-size: 19px;
}

.h2.huge,
h2.huge {
  font-size: 42px;
}

.h3,
h3 {
  font-size: 20px;
  margin-bottom: 12px;
  font-weight: 400;
}

.h3.large,
h3.large {
  font-size: 32px;
}

.h3.big,
h3.big {
  font-size: 24px;
}

.h3.small,
h3.small {
  font-size: 20px;
}

.h3.micro,
h3.micro {
  font-size: 16px;
}

.h3+.h1,
.h3+h1,
h3+.h1,
h3+h1 {
  margin-top: 30px;
}

.h4,
h4 {
  font-size: 18px;
  margin-bottom: 10px;
}

.h5,
h5 {
  font-size: 16px;
}

.h6,
h6 {
  font-size: 14px;
}

.p,
blockquote,
p {
  font-size: 22px;
  line-height: 1.6363636364;
  margin-bottom: 30px;
  font-weight: 300;
}

.p.hero,
blockquote.hero,
p.hero {
  font-size: 28px;
  line-height: 1.5;
  margin-bottom: 25px;
}

.p.large,
blockquote.large,
p.large {
  font-size: 32px;
  line-height: 1.4;
}

.p.small,
blockquote.small,
p.small {
  font-size: 18px;
  line-height: 1.36;
  margin-bottom: 20px;
}

.p.tiny,
blockquote.tiny,
p.tiny {
  font-size: 16px;
  line-height: 1.625;
  margin-bottom: 12px;
  font-weight: 400;
}

.p.micro,
blockquote.micro,
p.micro {
  font-size: 14px;
  line-height: 1.5714;
  margin-bottom: 20px;
  margin-top: 2px;
}

blockquote {
  padding-left: 2em;
  border-left: 2px solid;
}

small {
  font-size: 17px;
  line-height: 1.3;
}

small .small {
  font-size: 14px;
  line-height: 1.28;
}

.list.circle li {
  list-style-type: circle;
}

.list.disc li {
  list-style-type: disc;
}

.list.square li {
  list-style-type: square;
}

@media (max-width:1023px) {
  .h1,
  .h1.big,
  .h1.huge,
  h1,
  h1.big,
  h1.huge {
    font-size: 40px;
    margin-bottom: 20px;
  }

  p.hero {
    font-size: 22px;
  }

  .h1.small,
  h1.small {
    font-size: 32px;
  }

  .mobileCrop {
    margin: 0!important;
  }

  .mobileCropBottom {
    margin-bottom: 0!important;
  }

  .mobileCropTop {
    margin-top: 0!important;
  }

  .mobileCropLeft {
    margin-left: 0!important;
  }

  .mobileCropRight {
    margin-right: 0!important;
  }
}

@media (max-width:319px) {
  .h1.big,
  .h1.huge,
  h1.big,
  h1.huge {
    font-size: 32px;
  }
}

.button {
  display: inline-block;
  border-radius: 4px;
  padding: 16px 24px 17px;
  color: #fff;
  border: none;
  outline: 0;
  text-decoration: none;
  background: #202020;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  vertical-align: top;
  cursor: pointer;
  overflow: hidden;
  backface-visibility: hidden;
  letter-spacing: normal!important;
  position: relative;
  white-space: nowrap;
  transform: translate3d(0,0,0);
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
  -webkit-appearance: none;
  margin-bottom: 10px;
  transition: .3s;
  user-select: none!important;
}

.popup .button,
.slide .button {
  margin-left: 5px;
  margin-right: 5px;
}

.popup .button.small,
.slide .button.small {
  margin-left: 4px;
  margin-right: 4px;
}

.button.wide {
  margin-left: 0!important;
  margin-right: 0!important;
}

.button .material-icons {
  vertical-align: bottom;
  margin-top: -5px;
  margin-bottom: -2px;
  margin-right: 8px;
  user-select: none!important;
}

.button .material-icons.small {
  font-size: 18px;
  margin: 0 6px 0 0;
}

.button .material-icons.right {
  margin-left: 11px;
  margin-right: 0;
}

.button svg {
  width: 22px;
  height: 22px;
  margin-top: -3px;
  top: 2px;
  vertical-align: bottom;
  margin-right: 14px;
  pointer-events: none!important;
  position: relative;
}

.button svg * {
  pointer-events: none!important;
}

.button svg.right {
  margin-right: 0;
  margin-left: 14px;
}

.button.actionButton {
  display: inline-block;
  height: 42px;
  width: 42px;
  padding: 12px;
  border-radius: 25px;
  z-index: 999;
  background: rgba(0,0,0,.3);
  line-height: 1;
  box-shadow: 0 0 0 1px rgba(255,255,255,.05);
  cursor: pointer;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  vertical-align: top;
}

.button.actionButton svg {
  width: 18px;
  height: 18px;
}

.button.actionButton .material-icons {
  margin: 0;
  position: relative;
  left: -3px;
  top: -3px;
  font-size: 24px;
}

.button.actionButton.big {
  width: 50px;
  height: 50px;
  padding: 16px;
}

.button.actionButton.big .material-icons {
  font-size: 24px;
}

.button.actionButton.big svg {
  width: 22px;
  height: 22px;
  left: -2px;
  top: 0;
}

.button.actionButton.stroke {
  box-shadow: none;
  padding: 10px;
}

.button.actionButton:hover:not(:active) {
  transform: translateY(0)!important;
}

.button.actionButton.rounded {
  border-radius: 6px;
}

.button.actionButton svg,
.slide.whiteSlide .button.actionButton svg {
  fill: #fff;
}

.button.actionButton.sound [class*=sound-] {
  position: absolute;
  opacity: 0;
  transition: .5s;
  left: 13px;
  top: 16px;
}

.button.actionButton.sound.stroke [class*=sound-] {
  left: 11px;
  top: 14px;
}

.button.actionButton.sound.playing .sound-on,
.button.actionButton.sound:not(.playing) .sound-off {
  opacity: 1;
}

.button.actionButton.transparent {
  background-color: transparent;
}

.button:hover {
  box-shadow: 0 6px 7px 0 rgba(0,0,0,.15),0 0 5px 0 rgba(0,0,0,.1);
  opacity: 1;
  transform: translateY(-2px)!important;
  transition: .35s!important;
}

.button:hover:after {
  opacity: .5;
}

.button:active {
  box-shadow: 0 3px 6px 0 rgba(0,0,0,.1),0 0 10px 0 rgba(0,0,0,.1),0 1px 4px -1px rgba(0,0,0,.1);
  transform: translateY(0)!important;
  transition: .35s!important;
}

.button:active:after {
  opacity: 1;
}

.button.uppercase {
  font-size: 15px;
  font-weight: 700;
  padding-top: 17px;
  padding-bottom: 17px;
}

.button.lowercase {
  text-transform: lowercase;
  letter-spacing: 0;
  font-weight: 300;
}

.button.round {
  border-radius: 99px;
  padding-left: 28px;
  padding-right: 28px;
}

.button.rounded {
  border-radius: 6px;
}

.button.rectangular {
  border-radius: 1px;
}

.button.square {
  border-radius: 0;
}

.button.thin-stroke {
  color: #202020;
  font-weight: 300;
  border: 1px solid;
  background-color: transparent!important;
  padding: 14px 22px 15px;
}

.slide.whiteSlide .button.thin-stroke {
  color: #202020;
}

.button.stroke {
  color: #202020;
  border: 2px solid;
  background-color: transparent!important;
  padding: 14px 22px 15px;
}

.slide.whiteSlide .button.stroke {
  color: #202020;
}

.button.stroke.round {
  padding-left: 26px;
  padding-right: 26px;
}

.button.stroke.uppercase {
  padding-top: 15px;
  padding-bottom: 15px;
}

.button.stroke.uppercase svg {
  margin-bottom: -2px;
}

.button.stroke.uppercase.small {
  padding: 11px 15px;
}

.button.stroke.small {
  border: 1px solid;
  padding-top: 9px;
  padding-bottom: 9px;
}

@media (min-width:768px) {
  .button.stroke.big {
    padding: 19px 30px;
  }

  .button.stroke.big.uppercase {
    padding-top: 21px;
    padding-bottom: 21px;
  }
}

.button.stroke:not(.flat):hover {
  box-shadow: inset 0 -100px 0 rgba(41,41,41,.05),0 4px 6px 0 rgba(0,0,0,.1),0 1px 10px 0 rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.1);
}

.button.flat:not(:hover) {
  box-shadow: none;
}

.button:not(.stroke) svg {
  fill: #fff;
}

.button.small {
  font-size: 15px;
  font-weight: 500;
  padding: 10px 16px 10px;
}

.button.small .material-icons {
  vertical-align: bottom;
  position: relative;
  font-size: 20px;
  margin-right: 8px;
  bottom: 1px;
}

.button.small .material-icons.right {
  margin-left: 8px;
  margin-right: 0;
}

.button.small svg {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  top: 0;
}

.button.small svg.right {
  margin-right: 0;
  margin-left: 10px;
}

.button.small.round {
  padding-left: 18px;
  padding-right: 18px;
}

.button.small.rounded {
  border-radius: 6px;
}

.button.small.uppercase {
  font-size: 12px;
  padding: 12px 16px;
  letter-spacing: .125em;
}

.button.small.uppercase.round {
  padding-left: 19px;
  padding-right: 19px;
}

@media (min-width:768px) {
  .button.big {
    font-size: 20px;
    padding: 21px 32px 21px;
  }

  .button.big.round {
    padding-left: 36px;
    padding-right: 36px;
  }

  .button.big.rounded {
    border-radius: 7px;
  }

  .button.big.uppercase {
    font-size: 17px;
    padding: 23px 32px;
  }

  .button.big.uppercase.round {
    padding-left: 36px;
    padding-right: 36px;
  }

  .button.big .material-icons {
    vertical-align: bottom;
    margin-right: 16px;
    font-size: 30px;
  }

  .button.big .material-icons.right {
    margin-left: 16px;
    margin-right: 0;
  }

  .button.big svg {
    width: 27px;
    height: 27px;
    margin-right: 16px;
    top: 1px;
  }

  .button.big svg.right {
    margin-right: 0;
    margin-left: 16px;
  }
}

.button.empty {
  padding: 0!important;
  background-color: transparent!important;
  font-size: 0!important;
  margin: 0;
  box-shadow: none;
}

.button.hollow {
  padding: 0!important;
  background-color: transparent!important;
  font-size: 0!important;
  box-shadow: none!important;
}

.button.hollow svg {
  margin: 0;
}

.button.shade {
  position: relative;
}

.button.shade:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #292929;
  opacity: 0;
  transition: .25s;
}

.button.shade:hover:after {
  opacity: .15;
}

.button.shade:active:after {
  opacity: .2;
}

.button.play {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  padding: 27px;
  margin-left: 0;
  margin-right: 0;
}

.button.play svg {
  fill: #fff;
  width: 35px;
  height: 36px;
  margin: 0;
}

.button.play.small {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 20px 19px;
}

.button.play.small svg {
  fill: #fff;
  width: 23px;
  height: 23px;
}

.button.play:hover {
  transform: scale(1.05);
}

.button.gradient {
  position: relative;
}

.button.gradient:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: -webkit-gradient(linear,left top,left bottom,from(#fff),to(#000));
  background: linear-gradient(to bottom,#fff 0,#000 100%);
  z-index: -1;
  opacity: .1;
}

.slide.whiteSlide .button.white:hover {
  box-shadow: 0 4px 6px 0 rgba(0,0,0,.1),0 1px 10px 0 rgba(0,0,0,.1);
}

.slide.whiteSlide .button.white:hover:after {
  opacity: .3;
}

.roundButton {
  border-radius: 50px;
  height: 50px;
  width: 50px;
  padding: 14px;
  margin: 5px;
}

.roundButton svg {
  bottom: 2px;
}

@media (max-width:319px) {
  .button.uppercase,
  .uppercase {
    letter-spacing: .07em;
  }
}

.button.uppercase,
.h1.uppercase,
.h2.uppercase,
.h3.uppercase,
.h4.uppercase,
.p.uppercase,
h1.uppercase,
h2.uppercase,
h3.uppercase,
h4.uppercase,
h5.uppercase,
p.uppercase {
  letter-spacing: .125em!important;
  text-indent: -.1em!important;
  font-weight: 700!important;
}

.material-icons {
  font-family: "Material Icons";
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: "liga";
}

.material-icons.md-18 {
  font-size: 18px;
}

.material-icons.md-24 {
  font-size: 24px;
}

.material-icons.md-36 {
  font-size: 36px;
}

.material-icons.md-48 {
  font-size: 48px;
}

.slide.whiteSlide svg {
  fill: #202020;
}

.embedContainer,
.svgContainer {
  position: relative;
  width: 100%;
  height: 0;
  padding: 0;
}

.embedContainer .scale,
.svgContainer svg.scale {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.dots {
  font-size: 0;
}

.dot {
  padding: 7px;
  display: inline-block;
}

.dot:after {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  opacity: .5;
  transition: .25s;
}

.dot.big .dot:after {
  width: 14px;
  height: 14px;
}

.slide.whiteSlide .dot:after {
  background: #202020;
}

.dot:hover:after {
  transform: scale(1.333333);
  opacity: 1;
}

.dot.selected:after,
.dot:active:after {
  opacity: 1;
  transform: scale(1.675);
}

.tabs {
  color: #fff;
  max-width: 260px;
  border-radius: 5px;
}

.tabs li {
  padding: 16px 20px;
  letter-spacing: 2.5px;
  font-size: 12px;
  transition: .15s;
  margin-top: -1px;
  border: 1px solid rgba(255,255,255,.3);
}

.tabs li:not(:last-child) {
  border-bottom: 0;
}

.tabs li:first-child {
  border-radius: 4px 4px 0 0;
}

.tabs li:last-child {
  border-radius: 0 0 4px 4px;
}

.tabs li.selected {
  background: #fff;
  color: #202020;
}

.slide.whiteSlide .tabs li {
  border-color: #e5e5e5;
  color: #202020;
}

.slide.whiteSlide .tabs li.selected {
  background: #202020;
  border-color: #202020;
  color: #fff;
}

.links li {
  font-size: 17px;
  letter-spacing: 0;
  padding: 4px 0;
}

.slides-form {
  font-size: 0;
  margin-top: -5px;
  font-family: inherit;
}

.slides-form button {
  font-family: inherit;
}

.slides-form textarea {
  max-height: 200px;
  max-width: 100%;
  min-height: 130px;
}

.slides-form textarea.d {
  border-radius: 15px!important;
}

.slides-form .label,
.slides-form label {
  display: block;
  font-size: 14px;
  margin-top: 12px;
  margin-bottom: 2px;
}

.slides-form .label.uppercase,
.slides-form label.uppercase {
  font-size: 14px;
}

.slides-form input[type=email],
.slides-form input[type=name],
.slides-form input[type=number],
.slides-form input[type=password],
.slides-form input[type=tel],
.slides-form input[type=text],
.slides-form select,
.slides-form textarea {
  font-family: inherit;
  background-color: #fff;
  position: relative;
  background: #fff;
  padding: 15px 16px 16px;
  border: none;
  font-size: 16px;
  color: #242424;
  outline: 0;
  border-radius: 4px;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid rgba(0,0,0,.1);
  transition: .15s;
}

.slides-form input[type=email].flat,
.slides-form input[type=email]:focus,
.slides-form input[type=name].flat,
.slides-form input[type=name]:focus,
.slides-form input[type=number].flat,
.slides-form input[type=number]:focus,
.slides-form input[type=password].flat,
.slides-form input[type=password]:focus,
.slides-form input[type=tel].flat,
.slides-form input[type=tel]:focus,
.slides-form input[type=text].flat,
.slides-form input[type=text]:focus,
.slides-form select.flat,
.slides-form select:focus,
.slides-form textarea.flat,
.slides-form textarea:focus {
  border-color: rgba(0,0,0,.2);
}

.slides-form input[type=email]:hover,
.slides-form input[type=name]:hover,
.slides-form input[type=number]:hover,
.slides-form input[type=password]:hover,
.slides-form input[type=tel]:hover,
.slides-form input[type=text]:hover,
.slides-form select:hover,
.slides-form textarea:hover {
  border-color: rgba(0,0,0,.2);
}

.slides-form input[type=email]:focus,
.slides-form input[type=name]:focus,
.slides-form input[type=number]:focus,
.slides-form input[type=password]:focus,
.slides-form input[type=tel]:focus,
.slides-form input[type=text]:focus,
.slides-form select:focus,
.slides-form textarea:focus {
  border-color: #2196f3;
  z-index: 10;
}

.slides-form input[type=email]:focus::-webkit-input-placeholder,
.slides-form input[type=name]:focus::-webkit-input-placeholder,
.slides-form input[type=number]:focus::-webkit-input-placeholder,
.slides-form input[type=password]:focus::-webkit-input-placeholder,
.slides-form input[type=tel]:focus::-webkit-input-placeholder,
.slides-form input[type=text]:focus::-webkit-input-placeholder,
.slides-form select:focus::-webkit-input-placeholder,
.slides-form textarea:focus::-webkit-input-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: 0;
}

.slides-form input[type=email]:focus:-moz-placeholder,
.slides-form input[type=name]:focus:-moz-placeholder,
.slides-form input[type=number]:focus:-moz-placeholder,
.slides-form input[type=password]:focus:-moz-placeholder,
.slides-form input[type=tel]:focus:-moz-placeholder,
.slides-form input[type=text]:focus:-moz-placeholder,
.slides-form select:focus:-moz-placeholder,
.slides-form textarea:focus:-moz-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: 0;
}

.slides-form input[type=email]:focus::-moz-placeholder,
.slides-form input[type=name]:focus::-moz-placeholder,
.slides-form input[type=number]:focus::-moz-placeholder,
.slides-form input[type=password]:focus::-moz-placeholder,
.slides-form input[type=tel]:focus::-moz-placeholder,
.slides-form input[type=text]:focus::-moz-placeholder,
.slides-form select:focus::-moz-placeholder,
.slides-form textarea:focus::-moz-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: 0;
}

.slides-form input[type=email]:focus:-ms-input-placeholder,
.slides-form input[type=name]:focus:-ms-input-placeholder,
.slides-form input[type=number]:focus:-ms-input-placeholder,
.slides-form input[type=password]:focus:-ms-input-placeholder,
.slides-form input[type=tel]:focus:-ms-input-placeholder,
.slides-form input[type=text]:focus:-ms-input-placeholder,
.slides-form select:focus:-ms-input-placeholder,
.slides-form textarea:focus:-ms-input-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: 0;
}

.slides-form input[type=email].round,
.slides-form input[type=name].round,
.slides-form input[type=number].round,
.slides-form input[type=password].round,
.slides-form input[type=tel].round,
.slides-form input[type=text].round,
.slides-form select.round,
.slides-form textarea.round {
  border-radius: 50px;
  padding-left: 22px;
  padding-right: 22px;
}

.slides-form input[type=email].rounded,
.slides-form input[type=name].rounded,
.slides-form input[type=number].rounded,
.slides-form input[type=password].rounded,
.slides-form input[type=tel].rounded,
.slides-form input[type=text].rounded,
.slides-form select.rounded,
.slides-form textarea.rounded {
  border-radius: 6px;
}

.slides-form input[type=email]:after,
.slides-form input[type=name]:after,
.slides-form input[type=number]:after,
.slides-form input[type=password]:after,
.slides-form input[type=tel]:after,
.slides-form input[type=text]:after,
.slides-form select:after,
.slides-form textarea:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
}

@media (min-width:768px) {
  .slides-form input[type=email],
  .slides-form input[type=name],
  .slides-form input[type=number],
  .slides-form input[type=password],
  .slides-form input[type=tel],
  .slides-form input[type=text],
  .slides-form select,
  .slides-form textarea {
    max-width: 300px;
  }
}

.slides-form input[type=email]::-webkit-input-placeholder,
.slides-form input[type=name]::-webkit-input-placeholder,
.slides-form input[type=number]::-webkit-input-placeholder,
.slides-form input[type=password]::-webkit-input-placeholder,
.slides-form input[type=tel]::-webkit-input-placeholder,
.slides-form input[type=text]::-webkit-input-placeholder,
.slides-form select::-webkit-input-placeholder,
.slides-form textarea::-webkit-input-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: .5;
}

.slides-form input[type=email]:-moz-placeholder,
.slides-form input[type=name]:-moz-placeholder,
.slides-form input[type=number]:-moz-placeholder,
.slides-form input[type=password]:-moz-placeholder,
.slides-form input[type=tel]:-moz-placeholder,
.slides-form input[type=text]:-moz-placeholder,
.slides-form select:-moz-placeholder,
.slides-form textarea:-moz-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: .5;
}

.slides-form input[type=email]::-moz-placeholder,
.slides-form input[type=name]::-moz-placeholder,
.slides-form input[type=number]::-moz-placeholder,
.slides-form input[type=password]::-moz-placeholder,
.slides-form input[type=tel]::-moz-placeholder,
.slides-form input[type=text]::-moz-placeholder,
.slides-form select::-moz-placeholder,
.slides-form textarea::-moz-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: .5;
}

.slides-form input[type=email]:-ms-input-placeholder,
.slides-form input[type=name]:-ms-input-placeholder,
.slides-form input[type=number]:-ms-input-placeholder,
.slides-form input[type=password]:-ms-input-placeholder,
.slides-form input[type=tel]:-ms-input-placeholder,
.slides-form input[type=text]:-ms-input-placeholder,
.slides-form select:-ms-input-placeholder,
.slides-form textarea:-ms-input-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: .5;
}

.slides-form textarea {
  font-weight: 400;
}

.slides-form textarea.round {
  border-radius: 25px;
}

.slides-form select {
  background-image: url("data:image/svg+xml;charset=UTF-8,<svg xmlns=http://www.w3.org/2000/svg width=37 height=7><path fill=#303030 d=M14.022 0l5.978 6 6-6z	/></svg>");
  background-repeat: no-repeat;
  background-position: right;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.slides-form button[type=submit],
.slides-form input[type=email],
.slides-form input[type=name],
.slides-form input[type=number],
.slides-form input[type=password],
.slides-form input[type=submit],
.slides-form input[type=tel],
.slides-form input[type=text],
.slides-form select,
.slides-form textarea {
  margin: 5px;
}

@media (max-width:768px) {
  .slides-form button[type=submit],
  .slides-form input[type=email],
  .slides-form input[type=name],
  .slides-form input[type=number],
  .slides-form input[type=password],
  .slides-form input[type=submit],
  .slides-form input[type=tel],
  .slides-form input[type=text],
  .slides-form select,
  .slides-form textarea {
    margin-left: auto!important;
    margin-right: auto!important;
    width: 100%;
    display: block!important;
  }
}

.slides-form button[type=submit].wide,
.slides-form input[type=email].wide,
.slides-form input[type=name].wide,
.slides-form input[type=number].wide,
.slides-form input[type=password].wide,
.slides-form input[type=submit].wide,
.slides-form input[type=tel].wide,
.slides-form input[type=text].wide,
.slides-form label.wide,
.slides-form select.wide,
.slides-form textarea.wide {
  max-width: 100%;
  width: 100%;
  margin-left: 0!important;
  margin-right: 0!important;
}

@media (min-width:769px) {
  .slides-form input.pair {
    width: 50%!important;
    max-width: 50%!important;
    border-top-right-radius: 0!important;
    border-bottom-right-radius: 0!important;
    margin-left: 0;
    margin-right: 0;
  }

  .slides-form input.pair+.pair {
    border-top-left-radius: 0!important;
    border-bottom-left-radius: 0!important;
    border-top-right-radius: 4px!important;
    border-bottom-right-radius: 4px!important;
    width: calc(50% + 1px)!important;
    max-width: calc(50% + 1px)!important;
    margin-left: -1px;
  }
}

.slides-form.center input,
.slides-form.center textarea {
  text-align: center;
}

.slide {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #202020;
  color: #fff;
  z-index: 10;
  overflow: hidden;
}

.slide.active {
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.mobile .slide {
  visibility: hidden;
}

.mobile .slide.active {
  visibility: visible;
}

.slide.whiteSlide {
  color: #202020;
  background: #fff;
}

.content {
  overflow: hidden;
  position: absolute;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  -webkit-overflow-scrolling: touch;
}

.content.scrollBar {
  overflow-y: auto;
}

.windows .defaultScroll .content {
  overflow: auto;
  overflow-x: hidden;
}

.mobile .content {
  overflow: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

.fade .content {
  background: rgba(0,0,0,.6);
}

.fade-1 .content {
  background: rgba(0,0,0,.1);
}

.fade-2 .content {
  background: rgba(0,0,0,.2);
}

.fade-3 .content {
  background: rgba(0,0,0,.3);
}

.fade-4 .content {
  background: rgba(0,0,0,.4);
}

.fade-5 .content {
  background: rgba(0,0,0,.5);
}

.fade-6 .content {
  background: rgba(0,0,0,.6);
}

.fade-7 .content {
  background: rgba(0,0,0,.7);
}

.fade-8 .content {
  background: rgba(0,0,0,.8);
}

.fade-9 .content {
  background: rgba(0,0,0,.9);
}

.whiteSlide[class*=fade] .content {
  background: rgba(255,255,255,.85);
}

.container {
  display: table;
  table-layout: fixed;
  position: relative;
  width: 100%;
  height: 100%;
}

.container .wrap {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
}

.container .wrap .spaceWrap,
.container .wrap.spaceWrap,
.container .wrap:not(.noSpaces) {
  padding: 120px calc(8% + 15px);
}

.container .wrap .overflowHidden {
  overflow: hidden;
}

.container .wrap * {
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
}

.popup .background,
.slide .background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.popup .background iframe,
.slide .background iframe {
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
}

.popup:not(.youtube) .background iframe,
.slide:not(.youtube) .background iframe {
  width: 100%;
  height: 100%;
}

.fix-1-12 {
  max-width: 93px!important;
}

.fix-2-12 {
  max-width: 186px!important;
}

.fix-3-12 {
  max-width: 279px!important;
}

.fix-4-12 {
  max-width: 371px!important;
}

.fix-5-12 {
  max-width: 464px!important;
}

.fix-6-12 {
  max-width: 557px!important;
}

.fix-7-12 {
  max-width: 650px!important;
}

.fix-8-12 {
  max-width: 743px!important;
}

.fix-9-12 {
  max-width: 836px!important;
}

.fix-10-12 {
  max-width: 928px!important;
}

.fix-11-12 {
  max-width: 1021px!important;
}

.fix-12-12 {
  max-width: 1114px!important;
}

[class*=fix-] {
  width: 100%!important;
  margin-left: auto!important;
  margin-right: auto!important;
  float: none;
}

.toLeft,
.toLeft[class*=fix-] {
  margin-left: 0!important;
  margin-right: auto!important;
}

.toRight,
.toRight[class*=fix-] {
  margin-right: 0!important;
  margin-left: auto!important;
  float: right;
}

.toCenter {
  margin-left: auto!important;
  margin-right: auto!important;
}

.dropdownTrigger,
.popupTrigger,
.sidebarTrigger {
  cursor: pointer;
}

.shiftImage {
  margin-top: -15%;
  margin-bottom: -100%;
}

.shiftImageVertical {
  margin-right: -100%;
  max-width: none;
}

.slide.video .background {
  overflow: hidden;
}

.slide.video .background video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  transform: translateX(-50%) translateY(-50%);
  background-size: cover;
}

.slide.video .background video::-webkit-media-controls {
  display: none!important;
}

.slide.video .background video::-webkit-media-controls-panel {
  display: none!important;
  -webkit-appearance: none;
}

.slide.video .background video::-webkit-media-controls-start-playback-button {
  display: none!important;
  -webkit-appearance: none;
}

html:not(.mobile) .slide.video .background[style] {
  background: 0 0!important;
}

.mobile .slide.video .background[style] video {
  display: none;
}

.videoThumbnail {
  cursor: pointer;
  position: relative;
  font-size: 0;
  overflow: hidden;
  line-height: 0;
}

.videoThumbnail.rounded {
  border-radius: 6px;
}

.videoThumbnail:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url("../assets/svg/video-icon.svg") no-repeat;
  background-position: center center;
  transition: .5s;
}

.videoThumbnail:not(.noTint):hover:after {
  background-color: rgba(0,0,0,.15);
}

.videoThumbnail:hover:before {
  transform: scale(1.1);
  transition: .25s;
}

.videoThumbnail:active:before {
  opacity: .8;
}

.videoThumbnail.small {
  max-width: 200px;
  display: block;
}

.videoThumbnail.small:before {
  background-size: 44px;
}

.button.empty.shadow:hover,
.shadow {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
}

.pad {
  border-radius: 6px;
  padding: 10%;
  color: #202020;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
}

.pad.shadow {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
}

.pad.shadow.stroke {
  background: 0 0;
  transition: .15s;
  color: #fff;
}

.pad.shadow.stroke:hover {
  background: #fff;
  color: #202020;
  transition: .15s;
}

.pad.shadowHover {
  transition: .5s;
}

.pad.shadowHover:hover {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
}

.pad small {
  font-size: 15px;
  line-height: 1.45;
  margin: 15px 0;
}

@media (max-width:767px) {
  .pad.collapse {
    background: inherit;
    color: inherit;
    border: none;
    padding: 0!important;
    overflow: inherit;
    border-radius: 0;
    box-shadow: none;
    transition: 0s!important;
  }

  .pad.shadow {
    box-shadow: none;
  }
}

.resizing .equalElement {
  transition: 0s!important;
}

.hr {
  position: relative;
  height: 1px;
  width: 100%;
}

@media (max-width:1023px) {
  .shiftImage {
    margin-top: 0!important;
    margin-bottom: 0!important;
  }

  .shiftImageVertical {
    margin-right: 0!important;
    max-width: 100%!important;
  }
}

@media (min-width:1024px) {
  .hideForDesktop {
    display: none!important;
  }
}

@media (min-width:1024px) {
  .showForDesktop {
    display: block!important;
  }
}

@media (max-width:1024px) {
  .hideForTablet {
    display: none!important;
  }
}

@media (max-width:1024px) {
  .showForTablet {
    display: block!important;
  }

  .showForTabletInline {
    display: inline!important;
  }
}

@media (max-width:767px) {
  .hideForPhablet {
    display: none!important;
  }
}

@media (max-width:768px) {
  .showForPhablet {
    display: block!important;
  }

  .showForPhabletInline {
    display: inline!important;
  }
}

@media (max-width:435px) {
  .hideForPhone {
    display: none!important;
  }
}

@media (max-width:435px) {
  .showForPhone {
    display: block!important;
  }

  .showForPhoneInline {
    display: inline!important;
  }
}

html.mobile .hideForMobile {
  display: none!important;
}

html.mobile .showForMobile {
  display: block!important;
}

html.mobile .showForMobileInline {
  display: inline!important;
}

.helpBubble {
  cursor: pointer;
}

.helpBubble:after {
  content: "?";
  font-size: 14px;
  width: 17px;
  height: 17px;
  line-height: 1.2;
  background: #202020;
  opacity: .3;
  color: #fff;
  border-radius: 50%;
  display: inline-block;
  margin-left: 4px;
  font-weight: 700;
  transition: .25s;
}

.helpBubble .helpMessage {
  background: rgba(255,255,255,.98);
  color: #202020;
  font-size: 16px;
  line-height: 1.625;
  position: absolute;
  z-index: 10;
  box-shadow: 0 1px 8px rgba(0,0,0,.07),0 6px 8px rgba(0,0,0,.05);
  padding: 17px;
  text-align: left;
  bottom: 50%;
  margin-bottom: 5px;
  transform: translateY(10px) scale(.95);
  transition: .25s;
  opacity: 0;
  pointer-events: none;
  color: rgba(48,48,48,.7);
}

.helpBubble .helpMessage strong {
  color: #303030;
}

.helpBubble:hover .helpMessage {
  pointer-events: all;
  transform: translateY(0) scale(1);
  opacity: 1;
}

.helpBubble:hover:after {
  opacity: 1;
}

.panel {
  position: fixed;
  left: 0;
  width: 100%;
  padding: 10px 30px;
  z-index: 200;
  text-align: center;
  font-size: 16px;
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  user-select: none;
  transform: translate3d(0,0,0);
}

.panel.top {
  top: 0;
}

.panel.bottom {
  bottom: 0;
}

.panel.white {
  background: rgba(255,255,255,.975)!important;
  box-shadow: 0 1px 1px rgba(0,0,0,.07);
}

.panel.black {
  background-color: rgba(0,0,0,.8)!important;
  box-shadow: 0 1px 1px rgba(0,0,0,.07);
}

.animateOnEvent .panel.top,
.animated .panel.top,
.hidePanel-top .panel.top.hideOnScroll,
.slides.firstSlide .panel.top.exceptFirstSlide,
.slides.lastSlide .panel.top.exceptLastSlide,
.slides:not(.firstSlide) .panel.top.firstSlideOnly,
.slides:not(.firstSlide):not(.lastSlide) .panel.top.firstAndLastSlidesOnly,
.slides:not(.lastSlide) .panel.top.lastSlideOnly {
  transform: translate3d(0,-100%,0);
  opacity: 0;
}

.animateOnEvent .panel.bottom,
.animated .panel.bottom,
.hidePanel-bottom .panel.bottom.hideOnScroll,
.slides.firstSlide .panel.bottom.exceptFirstSlide,
.slides.lastSlide .panel.bottom.exceptLastSlide,
.slides:not(.firstSlide) .panel.bottom.firstSlideOnly,
.slides:not(.firstSlide):not(.lastSlide) .panel.bottom.firstAndLastSlidesOnly,
.slides:not(.lastSlide) .panel.bottom.lastSlideOnly {
  transform: translate3d(0,100%,0);
  opacity: 0;
}

.page-loaded .animateOnEvent .panel,
.page-loaded .animated .panel {
  transition: transform .5s,opacity .5s,padding .5s;
  transform: translate3d(0,0,0);
  opacity: 1;
}

.slides.whiteSlide .panel {
  color: #202020;
}

.mobile .simplifiedMobile .panel.hideOnScroll,
.scroll .panel.hideOnScroll {
  position: fixed;
}

.mobile .simplifiedMobile .panel.hideOnScroll.top.hide,
.scroll .panel.hideOnScroll.top.hide {
  transform: translateY(-100%)!important;
  opacity: 0;
}

.mobile .simplifiedMobile .panel.hideOnScroll.bottom.hide,
.scroll .panel.hideOnScroll.bottom.hide {
  transform: translateY(100%)!important;
  opacity: 0;
}

.panel .sections {
  display: table;
  width: 100%;
  font-size: 0;
}

.panel .sections>div {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 33.33333%;
  white-space: nowrap;
  font-size: 16px;
  height: 50px;
}

.panel .sections>div.auto {
  width: .1%;
}

.panel .sections>div * {
  pointer-events: all;
}

.panel .sections>div.left {
  text-align: left;
}

.panel .sections>div.left ul.crop {
  padding-left: 0;
}

.panel .sections>div.left ul.crop li:first-child {
  margin-left: 0;
}

.panel .sections>div.left.space {
  padding-right: 20px;
}

.panel .sections>div.right {
  text-align: right;
}

.panel .sections>div.right ul.crop {
  padding-right: 0;
}

.panel .sections>div.right ul.crop li:last-child {
  margin-right: 0;
}

.panel .sections>div.right.space {
  padding-left: 20px;
}

.panel .sections>div.center.space {
  padding: 0 20px;
}

.panel .sections.hidden {
  display: none;
}

.panel .sections .menu {
  white-space: nowrap;
  display: inline-block;
  padding: 0 12px;
  font-size: 0;
}

.panel .sections .menu svg {
  width: 20px;
  height: 20px;
  vertical-align: bottom;
}

.panel .sections .menu li {
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
  margin: 0 10px;
}

.panel .sections .menu li a {
  padding: 0 7px;
  opacity: .8;
}

.panel .sections .menu li a:hover {
  opacity: 1;
}

.panel .sections .menu.uppercase li {
  font-size: 12px;
  margin: 0 10px;
  letter-spacing: .125em;
  font-weight: 600!important;
}

.panel .sections .menu.uppercase li svg {
  position: relative;
  top: 2px;
}

.panel .hidden,
.panel .hidden * {
  display: none;
}

.panel svg {
  fill: #fff;
  width: 18px;
  height: 18px;
  vertical-align: bottom;
}

.slides.whiteSlide .panel svg {
  fill: #202020;
}

.panel a:not(.button):hover {
  opacity: .75;
  -webkit-transition: .15s;
  transition: .15s;
}

.panel .button {
  margin: 0;
}

.panel .button+.button {
  margin-left: 10px;
}

.panel .button:not(.actionButton) {
  font-size: 15px;
  vertical-align: middle;
  padding: 12px 17px;
}

.panel .button:not(.actionButton):hover:not(:active) {
  transform: translateY(0)!important;
  box-shadow: 0 0 0 1px rgba(255,255,255,.05),0 4px 6px 0 rgba(0,0,0,.1),0 1px 10px 0 rgba(0,0,0,.1);
}

.panel .nextSlide,
.panel .prevSlide {
  width: 24px;
  height: 24px;
  position: relative;
  top: 5px;
}

.slides.whiteSlide .panel .actionButton svg {
  fill: #fff;
}

.panel .nextSlide,
.panel .prevSlide {
  transition: .25s;
}

.firstSlide .panel .prevSlide,
.lastSlide .panel .nextSlide {
  opacity: 0;
  pointer-events: none;
  cursor: default;
}

.firstSlide .panel.bottom .nextSlide svg {
  animation: animateArrow 4s infinite;
}

.panel .panelIcon {
  position: relative;
  top: 5px;
}

@keyframes animateArrow {
  100%, 80% {
    transform: translateY(0);
  }

  90% {
    transform: translateY(10px);
  }
}

.nextSlide,
.prevSlide {
  cursor: pointer;
}

.nextSlide:hover,
.prevSlide:hover {
  transition: .15s;
}

.nextSlide:active,
.prevSlide:active {
  opacity: .75;
}

.firstSlide.lastSlide .nextSlide,
.firstSlide.lastSlide .prevSlide {
  opacity: 0;
}

.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  width: 0%;
  transition: width 1s,opacity 1s;
  z-index: 1000;
  opacity: 1;
}

.progress-bar.loaded {
  width: 100%;
  opacity: 0;
  transition: width 0s,opacity .25s 1s;
}

.side {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  z-index: 100;
  padding: 70px 4%;
  pointer-events: none;
  opacity: 0;
  transition: opacity .5s;
  transform: translate3d(0,0,0);
}

@media (min-width:1380px) {
  .side {
    padding-left: 55px;
    padding-right: 55px;
  }
}

.page-loaded .side {
  opacity: 1;
}

.side.large {
  padding: calc(5.56% + 50px) 5%;
}

.side.left {
  left: 0;
  right: inherit;
}

.side.right {
  right: 0;
  left: inherit;
}

.side.compact {
  padding: 30px 4%;
}

.side.compact .navigation li {
  width: 15px;
  height: 7px;
  margin: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 0;
  background: #fff;
  opacity: .2;
  padding: 1px;
  cursor: pointer;
}

.side.compact .navigation li.selected,
.side.compact .navigation li:hover {
  opacity: 1;
}

.side.compact .navigation li:after {
  display: none;
}

.side.compact .navigation li:before {
  margin: 0 8px!important;
  top: -10px;
}

.whiteSlide .side.compact .navigation li {
  background: #202020;
}

.side.compact:not(.square) .navigation li:first-child {
  border-radius: 10px 10px 0 0;
}

.side.compact:not(.square) .navigation li:last-child {
  border-radius: 0 0 10px 10px;
}

.panel .side {
  position: relative;
  display: inline;
  height: auto;
  padding: 0;
}

.slides.whiteSlide .side svg:not([fill]) {
  fill: #202020;
}

.navigation {
  display: table;
  height: 100%;
}

.navigation ul {
  display: table-cell;
  vertical-align: middle;
}

.navigation * {
  pointer-events: all;
}

.navigation li {
  fill: #fff;
  display: block;
  background: 0 0;
  padding: 9px;
  margin: 0 -9px;
  cursor: pointer;
  position: relative;
}

.navigation li:after {
  content: "";
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 7px;
  opacity: .5;
  background: #fff;
  box-shadow: 0 0 1px #303030;
  transition: .25s;
}

.navigation li.selected:after {
  opacity: 1;
}

.navigation li:hover:after {
  opacity: 1;
}

.medium .navigation li:after {
  width: 10px;
  height: 10px;
  border-radius: 5px;
}

.small .navigation li:after {
  width: 6px;
  height: 6px;
  border-radius: 4px;
}

.navigation li[data-title]:before {
  content: attr(data-title);
  position: absolute;
  right: 100%;
  top: 1px;
  background: rgba(0,0,0,.7);
  color: #fff;
  font-size: 14px;
  min-width: 50px;
  border-radius: 6px;
  padding: 7px 12px;
  font-weight: 500;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  box-shadow: 0 0 0 1px rgba(255,255,255,.1);
  pointer-events: none;
  visibility: hidden;
}

.navigation li:hover:before {
  visibility: visible;
}

.left .navigation li:before {
  left: 100%;
  right: auto;
}

.panel.bottom .navigation li:before {
  transform: translateY(-100%) translateX(-50%);
  left: 14px;
  top: -2px;
}

.stroke .navigation li:after {
  border-color: #fff;
  border-style: solid;
  border-width: 2px;
  background-color: transparent;
}

.stroke.small .navigation li:after {
  border-width: 1px;
}

.stroke .navigation li.selected:after {
  background: #fff;
}

.stroke .navigation li:hover:after {
  background: #fff;
}

.square .navigation li:after {
  border-radius: 0;
}

.square.small .navigation li:after {
  border-radius: 0;
}

.diamond .navigation li:after {
  border-radius: 0;
  transform: rotate(45deg) scale(.72);
}

.diamond.medium .navigation li:after {
  transform: rotate(45deg) scale(.88);
}

.diamond.small .navigation li:after {
  transform: rotate(45deg) scale(1);
}

.line .navigation li {
  margin: 0 -9px;
  padding: 5px 9px;
  text-align: right;
  font-size: 0;
}

.line .navigation li:after {
  height: 3px;
  display: inline-block;
  text-align: right;
  background: #fff;
  border: none;
}

.line .navigation li:before {
  margin-top: -10px;
}

.line .navigation li.selected:after {
  width: 25px;
}

.line.left .navigation li {
  text-align: left;
}

.line.medium .navigation li {
  margin: 0 -5px;
  padding: 4px 8px;
}

.line.medium .navigation li.selected:after {
  width: 19px;
}

.line.small .navigation li {
  margin: 0;
  padding: 4px 6px;
}

.line.small .navigation li.selected:after {
  width: 13px;
}

.pole .navigation li {
  margin: 0 1px 0 2px;
  padding: 2px 9px;
  text-align: right;
  font-size: 0;
}

.pole .navigation li:after {
  height: 20px;
  width: 4px;
  display: inline-block;
  transition: .5s;
  text-align: right;
  background: #fff;
  border-radius: 1px;
  border: none;
}

.pole .navigation li:before {
  margin-top: -3px;
}

.pole .navigation li.selected:after {
  height: 60px;
}

.pole .navigation li.selected:before {
  margin-top: 19px;
}

.pole.medium .navigation li {
  margin: 0 2px;
}

.pole.medium .navigation li:after {
  height: 15px;
  width: 3px;
}

.pole.medium .navigation li:before {
  margin-top: -5px;
}

.pole.medium .navigation li.selected:after {
  height: 45px;
}

.pole.medium .navigation li.selected:before {
  margin-top: 10px;
}

.pole.small .navigation li {
  margin: 0 2px;
}

.pole.small .navigation li:after {
  height: 10px;
  width: 3px;
}

.pole.small .navigation li:before {
  margin-top: -7px;
}

.pole.small .navigation li.selected:after {
  height: 30px;
}

.pole.small .navigation li.selected:before {
  margin-top: 2px;
}

.slides.whiteSlide .navigation li:after {
  background: #202020;
  box-shadow: 0 0 1px #fff;
}

.slides.whiteSlide .stroke .navigation li:after {
  border-color: #202020;
  background: 0 0;
}

.slides.whiteSlide .stroke .navigation li:hover:after {
  background: #303030;
}

.slides.whiteSlide .stroke .navigation li.selected:after {
  border-color: #303030;
  background: #202020;
}

.panel .navigation,
.panel .navigation ul {
  display: inline;
}

.panel .navigation li {
  display: inline-block;
  margin: -9px 0;
}

.panel .side.small .navigation li {
  margin: 0;
}

.navigation .sideArrow {
  width: 31px;
  height: 72px;
  margin: 0 -9px;
}

@media (max-width:766px) {
  .navigation .sideArrow {
    width: 17px;
    height: 40px;
  }
}

.dropdown {
  position: fixed;
  z-index: 300;
  color: #202020;
  width: 160px;
  background: #fff;
  box-shadow: 0 6px 11px 0 rgba(0,0,0,.15),0 14px 28px rgba(0,0,0,.1),0 0 0 1px rgba(0,0,0,.05);
  margin-bottom: 50px;
  border-radius: 6px;
  text-align: center;
  cursor: default;
  transform: translateY(0) scale(.9);
  transform-origin: top;
  transition: transform .35s,opacity .35s,box-shadow .35s;
}

.dropdown:not(.show) {
  pointer-events: none;
  opacity: 0;
}

.dropdown.rectangular {
  border-radius: 0;
}

.dropdown .title {
  font-size: 17px;
  font-weight: 500;
  margin: 0;
  text-align: center;
  opacity: .8;
}

.dropdown a {
  font-size: 15px;
  opacity: .6;
}

.dropdown a:hover {
  opacity: .8;
}

.dropdown:not(.noArrow):after,
.dropdown:not(.noArrow):before {
  content: "";
  bottom: 100%;
  left: 22px;
  border: solid transparent;
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(255,255,255,0);
  border-bottom-color: #fff;
  border-width: 7px;
  margin-left: -7px;
}

.dropdown:not(.noArrow):before {
  border-bottom-color: rgba(0,0,0,.1);
  border-width: 8px;
  margin-left: -8px;
}

.dropdown.show {
  visibility: visible;
  opacity: 1;
  transform: translateY(20px);
}

.dropdown.show.hide {
  opacity: 0;
  transform: translateY(40px);
  box-shadow: 0 0 0 0 rgba(0,0,0,.15),0 0 0 rgba(0,0,0,.1),0 0 0 1px rgba(0,0,0,.05);
  pointer-events: none;
}

.dropdown .hideDropdown {
  opacity: 0;
  pointer-events: none;
}

.dropdown.bottom {
  transform-origin: bottom;
}

.dropdown.bottom.show {
  transform: translateY(-20px);
}

.dropdown.bottom.show.hide {
  transform: translateY(-40px);
}

.dropdown.bottom:after,
.dropdown.bottom:before {
  top: 100%;
  bottom: initial;
  border-bottom-color: rgba(255,255,255,0);
  border-top-color: #fff;
}

.dropdown.bottom:before {
  border-top-color: rgba(0,0,0,.06);
}

.dropdown.right:after,
.dropdown.right:before {
  right: 18px;
  left: auto;
}

.dropdown.right:before {
  right: 17px;
}

.dropdown.center:after,
.dropdown.center:before {
  left: 50%;
}

.dropdown.share li {
  float: left;
  text-align: center;
  display: block;
  width: 80px;
  height: 50px;
  padding: 14px 0;
  color: #fff;
  position: relative;
  cursor: pointer;
  opacity: .9;
  transition: .15s;
}

.dropdown.share li:hover {
  opacity: 1;
}

.dropdown.share li:after {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  background: rgba(0,0,0,.1);
  transition: .25s;
}

.dropdown.share li:active:after {
  opacity: 1;
  transition: .1s;
}

.dropdown.share li svg {
  width: 20px;
  height: 20px;
  fill: #fff;
}

.dropdown.share li.mail {
  width: 100%;
  height: auto;
  color: #202020;
  opacity: .6;
  font-size: 15px;
  padding: 20px 0;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.dropdown.share li.mail:hover {
  opacity: .8;
}

.scroll .dropdown {
  position: absolute;
  top: 0;
}

.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  max-width: 90%;
  height: 100%;
  color: #fff;
  z-index: 500;
  background: #0e0e0e;
  transition: transform .5s,visibility 0s;
  transform: translateX(100%);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.sidebarShown .sidebar.visible {
  transform: translateX(0);
  opacity: 1;
}

.sidebar .content {
  padding: 40px;
  overflow-y: auto;
  position: relative;
}

.sidebar.small .content {
  padding: 30px;
}

.sidebar .wrap {
  padding: 0;
}

.sidebar.left {
  right: inherit;
  left: 0;
  transform: translateX(-100%);
}

.sidebar.top {
  top: 0;
  width: 100%;
  max-width: 100%;
  height: auto;
  transform: translateY(-100%);
}

.sidebar.bottom {
  bottom: 0;
  top: inherit;
  width: 100%;
  max-width: 100%;
  height: auto;
  transform: translateY(100%);
}

.sidebar .logo {
  padding: 0;
  font-size: 0;
  margin-bottom: 35px;
}

.sidebar .close {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 14px;
  font-size: 0;
  opacity: .5;
  z-index: 101;
  transition: .25s;
}

.sidebar .close:hover {
  opacity: 1;
}

.sidebar .close svg {
  width: 24px;
  height: 24px;
  fill: #fff;
}

.sidebar .close:active svg {
  transform: scale(.92);
}

.sidebar ul.mainMenu,
.sidebar ul.social,
.sidebar ul.subMenu {
  line-height: 1.9;
  margin-bottom: 30px;
  display: block;
}

.sidebar .mainMenu li {
  font-size: 20px;
  line-height: 48px;
}

.sidebar .mainMenu.small li {
  font-size: 18px;
  line-height: 46px;
}

.sidebar .subMenu li {
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
  font-size: 18px;
  line-height: 36px;
}

.sidebar .subMenu.small li {
  font-size: 16px;
  line-height: 34px;
}

.sidebar .social {
  margin-top: 40px;
}

.sidebar .social li {
  display: inline-block;
  margin-right: 20px;
}

.sidebar .social li:last-child {
  margin-right: 0;
}

.sidebar .social li a {
  font-size: 0;
  padding: 0;
}

.sidebar .social li a svg {
  width: 20px;
  height: 20px;
}

.sidebar .social.small li {
  margin-right: 12px;
}

.sidebar .social.small li a svg {
  width: 15px;
  height: 15px;
}

.sidebar .social.big li {
  margin-right: 12px;
}

.sidebar .social.big li a svg {
  width: 22px;
  height: 22px;
}

.sidebar.small .social {
  margin-top: 30px;
}

.sidebar .big li {
  font-size: 32px;
  line-height: 64px;
}

.sidebar .social.medium li a svg {
  width: 18px;
  height: 18px;
}

.sidebar .social.medium li {
  margin-right: 14px;
}

.sidebarShown .slide.selected .content {
  overflow: hidden;
}

.page-loaded.sidebarShown .slide.selected {
  transform: scale(.95)!important;
  pointer-events: none;
  opacity: .5!important;
}

.sidebarShown .panel.top {
  opacity: 0;
}

.sidebarShown .panel.bottom {
  opacity: .5;
  transform: scale(.95) translateY(-10%);
}

.page-loaded.sidebarShown .panel,
.page-loaded.sidebarShown .slide.selected,
.page-loaded.sidebarShown .slide.selected:after,
.sidebar {
  transition: transform .5s,opacity .5s!important;
}

.popup {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  z-index: 1000;
  transition: transform .5s,opacity .5s;
  overflow-y: auto;
  display: none;
  transform: translate3d(0,0,0);
}

.popup:not([class*=fade]) {
  background: rgba(17,17,17,.9);
}

.popupShown .popup.visible {
  display: block;
  animation: popupFadeIn .75s;
}

.popup.hidePopup {
  opacity: 0;
  pointer-events: none;
}

.popup .content {
  overflow-y: auto;
}

.popup .close:not(.button) {
  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 14px;
  font-size: 0;
  opacity: .5;
  z-index: 200;
  transition: .25s;
  margin: 0;
  transform: translate3d(0,0,0);
}

.popup .close:not(.button).left {
  right: inherit;
  left: 0;
}

.popup .close:not(.button):hover {
  opacity: 1;
}

.popup .close:not(.button) svg {
  width: 30px;
  height: 30px;
  fill: #fff;
}

.popup .close.button {
  position: fixed;
  z-index: 200;
  margin: 15px;
}

.popup.white .close svg {
  fill: #202020;
}

.popup .wrap {
  padding: 18px 58px;
}

.popup .wrap.spaces {
  padding: 58px;
}

.popup.fullscreen .wrap {
  padding: 0;
}

.popup.fullscreen .embedVideo {
  height: 100vh;
  padding-bottom: 0;
}

@keyframes popupFadeIn {
  from {
    opacity: 0;
  }
}

.popupShown,
.popupShown body,
.sidebarShown,
.sidebarShown body {
  overflow-y: hidden!important;
}

.embedVideo {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}

.embedVideo embed,
.embedVideo iframe,
.embedVideo object,
.embedVideo video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.embedVideo.size-16x10 {
  padding-bottom: 62.5%;
}

.embedVideo.size-4x3 {
  padding-bottom: 75%;
}

.embedVideo.size-1x1,
.embedVideo.size-square {
  padding-bottom: 100%;
}

.zoom-img,
.zoom-img-wrap {
  position: relative;
  transition: all .5s;
  transition-timing-function: cubic-bezier(.2,0,.3,1)!important;
  z-index: 100;
}

.zoom-img img.zoom-img,
.zoom-img-wrap img.zoom-img {
  margin: 0!important;
}

.zoom-overlay {
  background: #111;
  position: fixed;
  top: -9999px;
  left: -9999px;
  right: -9999px;
  bottom: -9999px;
  pointer-events: none;
  opacity: 0;
  transition: opacity .5s;
  z-index: 99;
}

.zoom-overlay-open .zoom-overlay {
  opacity: .9;
}

.zoom-overlay-open .panel,
.zoom-overlay-open .side {
  opacity: 0;
  transition-delay: 0s;
  transition: .25s;
}

.zoom-overlay-open,
.zoom-overlay-transitioning {
  cursor: default;
}

.zoom-img-parent {
  position: relative;
  z-index: 1000;
}

.slider {
  position: relative;
}

.slider.clickable {
  cursor: pointer;
}

.slider>li {
  display: none;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity .5s;
  pointer-events: none;
}

.slider>li.selected {
  display: block;
  opacity: 1;
  transition: opacity .5s;
  pointer-events: all;
}

.slider.rounded>li>img {
  border-radius: 6px;
  overflow: hidden;
}

.slider.autoHeight {
  transition: .5s;
}

.slider.autoHeight>li {
  display: block;
  position: absolute;
}

.controller li {
  cursor: pointer;
}

.controller li.selected {
  cursor: default;
  pointer-events: none;
}

.tooltip[data-tooltip-title] {
  position: relative;
}

.tooltip[data-tooltip-title]:before {
  content: attr(data-tooltip-title);
  position: absolute;
  background: rgba(40,40,40,.6);
  color: #fff;
  font-size: 12px;
  border-radius: 50px;
  padding: 6px 15px;
  visibility: hidden;
  white-space: nowrap;
  letter-spacing: .04em;
  box-shadow: 0 0 0 1px rgba(255,255,255,.07);
  transform: translateY(100%) translateX(-50%);
  left: 50%;
  top: 0;
}

.tooltip[data-tooltip-title]:hover:before {
  visibility: visible;
  animation: fadeIn .35s backwards;
}

.tooltip[data-tooltip-title].top:before {
  bottom: 0;
  top: auto;
  transform: translateY(-100%) translateX(-50%);
}

.slide.before {
  transform: translate3d(0,-50%,0);
}

.slide.after,
.slide:first-child {
  transform: translate3d(0,50%,0);
  will-change: transform;
}

.slide.after,
.slide.before {
  opacity: 0;
}

.slide.selected {
  -webkit-transform: translate3d(0,0,0)!important;
  -moz-transform: translate3d(0,0,0)!important;
  -ms-transform: translate3d(0,0,0)!important;
  -o-transform: translate3d(0,0,0)!important;
  transform: translate3d(0,0,0)!important;
  z-index: 11;
}

.scroll .slide.selected {
  z-index: 10;
}

.page-loaded .slide.selected {
  opacity: 1!important;
}

.horizontal .slide,
.horizontal .slide.before {
  -ms-transform: translate3D(-50%,0,0);
  transform: translate3D(-50%,0,0);
}

.horizontal .slide.after {
  -ms-transform: translate3D(50%,0,0);
  transform: translate3D(50%,0,0);
}

.film .slide.before {
  -ms-transform: translate3D(-100%,0,0);
  transform: translate3D(0,-100%,0);
}

.film .slide.after {
  -ms-transform: translate3D(0,100%,0);
  transform: translate3D(0,100%,0);
}

.film.horizontal .slide.before {
  -ms-transform: translate3D(-100%,0,0);
  transform: translate3D(-100%,0,0);
}

.film.horizontal .slide,
.film.horizontal .slide.after {
  -ms-transform: translate3D(100%,0,0);
  transform: translate3D(100%,0,0);
}

.chain .slide.before {
  -ms-transform: translate3D(-100%,0,0);
  transform: translate3D(0,-100%,0);
  opacity: 1;
}

.chain .slide.after {
  -ms-transform: translate3D(0,100%,0);
  transform: translate3D(0,100%,0);
  opacity: 1;
}

.chain.horizontal .slide.before {
  -ms-transform: translate3D(-100%,0,0);
  transform: translate3D(-100%,0,0);
  opacity: 1;
}

.chain.horizontal .slide,
.chain.horizontal .slide.after {
  -ms-transform: translate3D(100%,0,0);
  transform: translate3D(100%,0,0);
  opacity: 1;
}

.zen .slide.before {
  -ms-transform: translateY(-100%) scale(.8);
  transform: translateY(-100%) scale(.8);
}

.zen .slide,
.zen .slide.after {
  -ms-transform: translateY(100%) scale(.8);
  transform: translateY(100%) scale(.8);
}

.zen.horizontal .slide.before {
  -ms-transform: translateX(-100%) scale(.8);
  transform: translateX(-100%) scale(.8);
}

.zen.horizontal .slide,
.zen.horizontal .slide.after {
  -ms-transform: translateX(100%) scale(.8);
  transform: translateX(100%) scale(.8);
}

.stack .slide,
.stack .slide.after {
  -ms-transform: translateY(100%);
  transform: translateY(100%);
}

.stack .slide.after {
  opacity: initial;
}

.stack .slide.after.active,
.stack .slide.selected {
  z-index: 11!important;
}

.stack .slide.before {
  -ms-transform: scale(.9);
  transform: scale(.9);
}

.stack.horizontal .slide,
.stack.horizontal .slide.after {
  -ms-transform: translateX(100%);
  transform: translateX(100%);
}

.stack.horizontal .slide.before {
  transform: scale(.9);
}

.cards .slide,
.cards .slide.after {
  -ms-transform: translateY(10%);
  transform: translateY(10%);
  opacity: initial;
}

.cards .slide.after {
  z-index: 8!important;
  opacity: 0;
}

.cards .slide.selected {
  z-index: 9!important;
}

.cards .slide.before {
  -ms-transform: translateY(-100%);
  transform: translateY(-100%);
  z-index: 7;
}

.cards .slide.active.before {
  z-index: 10!important;
}

.cards.horizontal .slide,
.cards.horizontal .slide.after {
  -ms-transform: translateX(10%);
  transform: translateX(10%);
}

.cards.horizontal .slide.before {
  -ms-transform: translateX(-100%);
  transform: translateX(-100%);
}

.zoom .slide.before {
  -ms-transform: scale(1.4);
  transform: scale(1.4);
}

.zoom .slide,
.zoom .slide.after {
  -ms-transform: scale(.8);
  transform: scale(.8);
  opacity: 0;
}

.vertigo .slide.before {
  -ms-transform: scale(1.4) rotate(-2deg);
  transform: scale(1.4) rotate(-2deg);
}

.vertigo .slide,
.vertigo .slide.after {
  -ms-transform: scale(.8) rotate(2deg);
  transform: scale(.8) rotate(2deg);
  opacity: 0;
}

.plain .slide.before {
  -ms-transform: scale(1);
  transform: scale(1);
}

.plain .slide,
.plain .slide.after {
  -ms-transform: scale(1);
  transform: scale(1);
}

.plain .slide.after:after,
.plain .slide.before:after {
  opacity: 1;
  background: #111;
}

.page-loaded .fast .slide.active,
.page-loaded .fast .slide.selected {
  transition: transform .7s,opacity .7s;
}

.page-loaded .slide.active,
.page-loaded .slide.selected {
  transition: transform 1s,opacity 1s;
}

.page-loaded .slow .slide.active,
.page-loaded .slow .slide.selected {
  transition: transform 1.4s,opacity 1.4s;
}

.page-loaded .slide.active.entry,
.page-loaded .slide.selected.entry {
  transition: transform 0s,opacity 1s;
}

.slides.animateOnEvent .panel,
.slides.animated .panel {
  transition: transform,opacity;
  transition-duration: .8s;
}

.slides.animateOnEvent.fast .panel,
.slides.animated.fast .panel {
  transition-duration: .6s;
}

.slides.animateOnEvent .panel,
.slides.animated.slow .panel {
  transition-duration: 1s;
}

.smooth .active,
.smooth .panel,
.smooth .rolling-element,
.smooth .selected,
.smooth .sidebar {
  transition-timing-function: cubic-bezier(.55,.05,.35,.95)!important;
}

.bounce .active,
.bounce .panel,
.bounce .rolling-element,
.bounce .selected,
.bounce .sidebar {
  transition-timing-function: cubic-bezier(.45,1.15,.5,1)!important;
}

.animated [class*=ae-] {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translate3d(0,0,0);
  transition-timing-function: cubic-bezier(.25,.1,.2,1);
}

.animated.animate .fast [class*=ae-]:not(.done),
.animated.animate [class*=ae-].fast:not(.done),
.animated.fast .animate [class*=ae-]:not(.done),
.animated.fast.animate [class*=ae-]:not(.done) {
  transition-duration: .7s;
}

.animated .animate [class*=ae-]:not(.done),
.animated.animate [class*=ae-]:not(.done) {
  transition-duration: .8s;
}

.animated.animate .slow [class*=ae-]:not(.done),
.animated.animate [class*=ae-].slow:not(.done),
.animated.slow .animate [class*=ae-]:not(.done),
.animated.slow.animate [class*=ae-]:not(.done) {
  transition-duration: 1s;
}

.animated .animate .ae-1:not(.done),
.animated.animate .ae-1:not(.done) {
  transition-delay: 10ms;
}

.animated .animate .ae-2:not(.done),
.animated.animate .ae-2:not(.done) {
  transition-delay: 160ms;
}

.animated .animate .ae-3:not(.done),
.animated.animate .ae-3:not(.done) {
  transition-delay: 310ms;
}

.animated .animate .ae-4:not(.done),
.animated.animate .ae-4:not(.done) {
  transition-delay: 460ms;
}

.animated .animate .ae-5:not(.done),
.animated.animate .ae-5:not(.done) {
  transition-delay: 610ms;
}

.animated .animate .ae-6:not(.done),
.animated.animate .ae-6:not(.done) {
  transition-delay: 760ms;
}

.animated .animate .ae-7:not(.done),
.animated.animate .ae-7:not(.done) {
  transition-delay: 910ms;
}

.animated .animate .ae-8:not(.done),
.animated.animate .ae-8:not(.done) {
  transition-delay: 1.06s;
}

.animated .animate .ae-9:not(.done),
.animated.animate .ae-9:not(.done) {
  transition-delay: 1.21s;
}

.animated .animate .ae-10:not(.done),
.animated.animate .ae-10:not(.done) {
  transition-delay: 1.36s;
}

.animated.animate .ae-1.fast:not(.done),
.animated.animate .fast .ae-1:not(.done),
.animated.fast .animate .ae-1:not(.done),
.animated.fast.animate .ae-1:not(.done) {
  transition-delay: 10ms;
}

.animated.animate .ae-2.fast:not(.done),
.animated.animate .fast .ae-2:not(.done),
.animated.fast .animate .ae-2:not(.done),
.animated.fast.animate .ae-2:not(.done) {
  transition-delay: 110ms;
}

.animated.animate .ae-3.fast:not(.done),
.animated.animate .fast .ae-3:not(.done),
.animated.fast .animate .ae-3:not(.done),
.animated.fast.animate .ae-3:not(.done) {
  transition-delay: 210ms;
}

.animated.animate .ae-4.fast:not(.done),
.animated.animate .fast .ae-4:not(.done),
.animated.fast .animate .ae-4:not(.done),
.animated.fast.animate .ae-4:not(.done) {
  transition-delay: 310ms;
}

.animated.animate .ae-5.fast:not(.done),
.animated.animate .fast .ae-5:not(.done),
.animated.fast .animate .ae-5:not(.done),
.animated.fast.animate .ae-5:not(.done) {
  transition-delay: 410ms;
}

.animated.animate .ae-6.fast:not(.done),
.animated.animate .fast .ae-6:not(.done),
.animated.fast .animate .ae-6:not(.done),
.animated.fast.animate .ae-6:not(.done) {
  transition-delay: 510ms;
}

.animated.animate .ae-7.fast:not(.done),
.animated.animate .fast .ae-7:not(.done),
.animated.fast .animate .ae-7:not(.done),
.animated.fast.animate .ae-7:not(.done) {
  transition-delay: 610ms;
}

.animated.animate .ae-8.fast:not(.done),
.animated.animate .fast .ae-8:not(.done),
.animated.fast .animate .ae-8:not(.done),
.animated.fast.animate .ae-8:not(.done) {
  transition-delay: 710ms;
}

.animated.animate .ae-9.fast:not(.done),
.animated.animate .fast .ae-9:not(.done),
.animated.fast .animate .ae-9:not(.done),
.animated.fast.animate .ae-9:not(.done) {
  transition-delay: 810ms;
}

.animated.animate .ae-10.fast:not(.done),
.animated.animate .fast .ae-10:not(.done),
.animated.fast .animate .ae-10:not(.done),
.animated.fast.animate .ae-10:not(.done) {
  transition-delay: 910ms;
}

.animated.animate .ae-1.slow:not(.done),
.animated.animate .slow .ae-1:not(.done),
.animated.slow .animate .ae-1:not(.done),
.animated.slow.animate .ae-1:not(.done) {
  transition-delay: 10ms;
}

.animated.animate .ae-2.slow:not(.done),
.animated.animate .slow .ae-2:not(.done),
.animated.slow .animate .ae-2:not(.done),
.animated.slow.animate .ae-2:not(.done) {
  transition-delay: 210ms;
}

.animated.animate .ae-3.slow:not(.done),
.animated.animate .slow .ae-3:not(.done),
.animated.slow .animate .ae-3:not(.done),
.animated.slow.animate .ae-3:not(.done) {
  transition-delay: 410ms;
}

.animated.animate .ae-4.slow:not(.done),
.animated.animate .slow .ae-4:not(.done),
.animated.slow .animate .ae-4:not(.done),
.animated.slow.animate .ae-4:not(.done) {
  transition-delay: 610ms;
}

.animated.animate .ae-5.slow:not(.done),
.animated.animate .slow .ae-5:not(.done),
.animated.slow .animate .ae-5:not(.done),
.animated.slow.animate .ae-5:not(.done) {
  transition-delay: 810ms;
}

.animated.animate .ae-6.slow:not(.done),
.animated.animate .slow .ae-6:not(.done),
.animated.slow .animate .ae-6:not(.done),
.animated.slow.animate .ae-6:not(.done) {
  transition-delay: 1.01s;
}

.animated.animate .ae-7.slow:not(.done),
.animated.animate .slow .ae-7:not(.done),
.animated.slow .animate .ae-7:not(.done),
.animated.slow.animate .ae-7:not(.done) {
  transition-delay: 1.21s;
}

.animated.animate .ae-8.slow:not(.done),
.animated.animate .slow .ae-8:not(.done),
.animated.slow .animate .ae-8:not(.done),
.animated.slow.animate .ae-8:not(.done) {
  transition-delay: 1.41s;
}

.animated.animate .ae-9.slow:not(.done),
.animated.animate .slow .ae-9:not(.done),
.animated.slow .animate .ae-9:not(.done),
.animated.slow.animate .ae-9:not(.done) {
  transition-delay: 1.61s;
}

.animated.animate .ae-10.slow:not(.done),
.animated.animate .slow .ae-10:not(.done),
.animated.slow .animate .ae-10:not(.done),
.animated.slow.animate .ae-10:not(.done) {
  transition-delay: 1.81s;
}

.animated .fromBottom [class*=ae-]:not(.done),
.animated [class*=ae-]:not(.done),
.animated.fromBottom [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromBottom:not(.done) {
  visibility: hidden;
  transform: translate3d(0,50px,0);
  opacity: 0;
}

.animated .fromTop [class*=ae-]:not(.done),
.animated.fromTop [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromTop:not(.done) {
  transform: translate3d(0,-50px,0);
}

.animated .fromLeft [class*=ae-]:not(.done),
.animated.fromLeft [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromLeft:not(.done) {
  transform: translate3d(-50px,0,0);
}

.animated .fromRight [class*=ae-]:not(.done),
.animated.fromRight [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromRight:not(.done) {
  transform: translate3d(50px,0,0);
}

.animated .fromCenter [class*=ae-]:not(.done),
.animated.fromCenter [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromCenter:not(.done) {
  transform: scale(.9) translate3d(0,0,0);
}

.animated .fromAbove [class*=ae-]:not(.done),
.animated.fromAbove [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromAbove:not(.done) {
  transform: scale(1.1) translate3d(0,0,0);
}

.animated .fromBottomLeft [class*=ae-]:not(.done),
.animated.fromBottomLeft [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromBottomLeft:not(.done) {
  transform: translate3d(-50px,50px,0);
}

.animated .fromTopLeft [class*=ae-]:not(.done),
.animated.fromTopLeft [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromTopLeft:not(.done) {
  -webkit-transform: translate3d(-50px,-50px,0);
  transform: translate3d(-50px,-50px,0);
}

.animated .fromBottomRight [class*=ae-]:not(.done),
.animated.fromBottomRight [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromBottomRight:not(.done) {
  transform: translate3d(50px,50px,0);
}

.animated .fromTopRight [class*=ae-]:not(.done),
.animated.fromTopRight [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromTopRight:not(.done) {
  transform: translate3d(50px,-50px,0);
}

.animated .fadeIn [class*=ae-]:not(.done),
.animated.fadeIn [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fadeIn:not(.done) {
  transform: scale(1) translate3d(0,0,0);
}

.animated .fromBlur [class*=ae-]:not(.done),
.animated.fromBlur [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromBlur:not(.done) {
  transform: scale(1) translate3d(0,0,0);
  filter: blur(10px);
}

.slides .animated.animate.active [class*=ae-]:not(.done),
.slides.animated .animate.active [class*=ae-]:not(.done) {
  opacity: 1;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  visibility: visible;
  transform: translate3d(0,0,0);
  filter: none;
}

.animateOnEvent {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.animateOnEvent [class*=ae-]:not(.done):not(.do) {
  opacity: 0;
  visibility: hidden;
}

.animateOnEvent [class*=ae-].do {
  animation-fill-mode: backwards;
  animation-duration: .8s;
  visibility: visible;
}

.animateOnEvent .fast [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fast,
.animateOnEvent.fast [class*=ae-].do {
  animation-duration: .7s;
}

.animateOnEvent .slow [class*=ae-].do,
.animateOnEvent [class*=ae-].do.slow,
.animateOnEvent.slow [class*=ae-].do {
  animation-duration: 1s;
}

.animateOnEvent [class*=ae-].do {
  animation-name: fromBottom;
}

.animateOnEvent .fromBottom [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromBottom,
.animateOnEvent.fromBottom [class*=ae-].do {
  animation-name: fromBottom;
}

.animateOnEvent .fromTop [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromTop,
.animateOnEvent.fromTop [class*=ae-].do {
  animation-name: fromTop;
}

.animateOnEvent .fromLeft [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromLeft,
.animateOnEvent.fromLeft [class*=ae-].do {
  animation-name: fromLeft;
}

.animateOnEvent .fromRight [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromRight,
.animateOnEvent.fromRight [class*=ae-].do {
  animation-name: fromRight;
}

.animateOnEvent .fromCenter [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromCenter,
.animateOnEvent.fromCenter [class*=ae-].do {
  animation-name: fromCenter;
}

.animateOnEvent .fromAbove [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromAbove,
.animateOnEvent.fromAbove [class*=ae-].do {
  animation-name: fromAbove;
}

.animateOnEvent .fromBottomLeft [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromBottomLeft,
.animateOnEvent.fromBottomLeft [class*=ae-].do {
  animation-name: fromBottomLeft;
}

.animateOnEvent .fromTopLeft [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromTopLeft,
.animateOnEvent.fromTopLeft [class*=ae-].do {
  animation-name: fromTopLeft;
}

.animateOnEvent .fromBottomRight [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromBottomRight,
.animateOnEvent.fromBottomRight [class*=ae-].do {
  animation-name: fromBottomRight;
}

.animateOnEvent .fromTopRight [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromTopRight,
.animateOnEvent.fromTopRight [class*=ae-].do {
  animation-name: fromTopRight;
}

.animateOnEvent .fadeIn [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fadeIn,
.animateOnEvent.fadeIn [class*=ae-].do {
  animation-name: fadeIn;
}

.animateOnEvent .fromBlur [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromBlur,
.animateOnEvent.fromBlur [class*=ae-].do {
  animation-name: fromBlur;
}

@keyframes fromBottom {
  from {
    transform: translate3d(0,50px,0);
    opacity: 0;
  }
}

@keyframes fromTop {
  from {
    transform: translate3d(0,-50px,0);
    opacity: 0;
  }
}

@keyframes fromLeft {
  from {
    transform: translate3d(-25px,0,0);
    opacity: 0;
  }
}

@keyframes fromRight {
  from {
    transform: translate3d(25px,0,0);
    opacity: 0;
  }
}

@keyframes fromCenter {
  from {
    transform: scale(.9) translate3d(0,0,0);
    opacity: 0;
  }
}

@keyframes fromAbove {
  from {
    transform: scale(1.1) translate3d(0,0,0);
    opacity: 0;
  }
}

@keyframes fromBottomLeft {
  from {
    transform: translate3d(-50px,50px,0);
    opacity: 0;
  }
}

@keyframes fromTopLeft {
  from {
    transform: translate3d(-50px,-50px,0);
    opacity: 0;
  }
}

@keyframes fromBottomRight {
  from {
    transform: translate3d(50px,50px,0);
    opacity: 0;
  }
}

@keyframes fromTopRight {
  from {
    transform: translate3d(50px,-50px,0);
    opacity: 0;
  }
}

@keyframes fadeIn {
  from {
    transform: scale(1) translate3d(0,0,0);
    opacity: 0;
  }
}

@keyframes fromBlur {
  from {
    transform: scale(1) translate3d(0,0,0);
    filter: blur(10px);
    opacity: 0;
  }
}

.animateOnEvent .ae-1 {
  animation-delay: 10ms;
}

.animateOnEvent .ae-2 {
  animation-delay: 160ms;
}

.animateOnEvent .ae-3 {
  animation-delay: 310ms;
}

.animateOnEvent .ae-4 {
  animation-delay: 460ms;
}

.animateOnEvent .ae-5 {
  animation-delay: 610ms;
}

.animateOnEvent .ae-6 {
  animation-delay: 760ms;
}

.animateOnEvent .ae-7 {
  animation-delay: 910ms;
}

.animateOnEvent .ae-8 {
  animation-delay: 1.06s;
}

.animateOnEvent .ae-9 {
  animation-delay: 1.21s;
}

.animateOnEvent .ae-10 {
  animation-delay: 1.36s;
}

.animateOnEvent .ae-1,
.animateOnEvent .ae-1.fast,
.animateOnEvent .fast .ae-1.fast,
.animateOnEvent.fast .ae-1 {
  animation-delay: 10ms;
}

.animateOnEvent .ae-2,
.animateOnEvent .ae-2.fast,
.animateOnEvent .fast .ae-2.fast,
.animateOnEvent.fast .ae-2 {
  animation-delay: 110ms;
}

.animateOnEvent .ae-3,
.animateOnEvent .ae-3.fast,
.animateOnEvent .fast .ae-3.fast,
.animateOnEvent.fast .ae-3 {
  animation-delay: 210ms;
}

.animateOnEvent .ae-4,
.animateOnEvent .ae-4.fast,
.animateOnEvent .fast .ae-4.fast,
.animateOnEvent.fast .ae-4 {
  animation-delay: 310ms;
}

.animateOnEvent .ae-5,
.animateOnEvent .ae-5.fast,
.animateOnEvent .fast .ae-5.fast,
.animateOnEvent.fast .ae-5 {
  animation-delay: 410ms;
}

.animateOnEvent .ae-6,
.animateOnEvent .ae-6.fast,
.animateOnEvent .fast .ae-6.fast,
.animateOnEvent.fast .ae-6 {
  animation-delay: 510ms;
}

.animateOnEvent .ae-7,
.animateOnEvent .ae-7.fast,
.animateOnEvent .fast .ae-7.fast,
.animateOnEvent.fast .ae-7 {
  animation-delay: 610ms;
}

.animateOnEvent .ae-8,
.animateOnEvent .ae-8.fast,
.animateOnEvent .fast .ae-8.fast,
.animateOnEvent.fast .ae-8 {
  animation-delay: 710ms;
}

.animateOnEvent .ae-9,
.animateOnEvent .ae-9.fast,
.animateOnEvent .fast .ae-9.fast,
.animateOnEvent.fast .ae-9 {
  animation-delay: 810ms;
}

.animateOnEvent .ae-10,
.animateOnEvent .ae-10.fast,
.animateOnEvent .fast .ae-10.fast,
.animateOnEvent.fast .ae-10 {
  animation-delay: 910ms;
}

.animateOnEvent .ae-1.slow,
.animateOnEvent .slow .ae-1,
.animateOnEvent.slow .ae-1 {
  animation-delay: 10ms;
}

.animateOnEvent .ae-2.slow,
.animateOnEvent .slow .ae-2,
.animateOnEvent.slow .ae-2 {
  animation-delay: 210ms;
}

.animateOnEvent .ae-3.slow,
.animateOnEvent .slow .ae-3,
.animateOnEvent.slow .ae-3 {
  animation-delay: 410ms;
}

.animateOnEvent .ae-4.slow,
.animateOnEvent .slow .ae-4,
.animateOnEvent.slow .ae-4 {
  animation-delay: 610ms;
}

.animateOnEvent .ae-5.slow,
.animateOnEvent .slow .ae-5,
.animateOnEvent.slow .ae-5 {
  animation-delay: 810ms;
}

.animateOnEvent .ae-6.slow,
.animateOnEvent .slow .ae-6,
.animateOnEvent.slow .ae-6 {
  animation-delay: 1.01s;
}

.animateOnEvent .ae-7.slow,
.animateOnEvent .slow .ae-7,
.animateOnEvent.slow .ae-7 {
  animation-delay: 1.21s;
}

.animateOnEvent .ae-8.slow,
.animateOnEvent .slow .ae-8,
.animateOnEvent.slow .ae-8 {
  animation-delay: 1.41s;
}

.animateOnEvent .ae-9.slow,
.animateOnEvent .slow .ae-9,
.animateOnEvent.slow .ae-9 {
  animation-delay: 1.61s;
}

.animateOnEvent .ae-10.slow,
.animateOnEvent .slow .ae-10,
.animateOnEvent.slow .ae-10 {
  animation-delay: 1.81s;
}

.slides:not(.scroll) .rolling-element {
  transition: 1s;
  transform: translate3d(0,0,0);
  will-change: transform;
}

.slides:not(.scroll).fast .rolling-element {
  transition-duration: .7s;
}

.slides:not(.scroll).slow .rolling-element {
  transition-duration: 1.4s;
}

.slides:not(.scroll) .slide.before .rolling-element {
  transform: translateY(100%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-10 {
  transform: translateY(10%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-20 {
  transform: translateY(20%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-30 {
  transform: translateY(30%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-40 {
  transform: translateY(40%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-50 {
  transform: translateY(50%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-60 {
  transform: translateY(60%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-70 {
  transform: translateY(70%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-80 {
  transform: translateY(80%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-90 {
  transform: translateY(90%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse {
  transform: translateY(-100%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-10 {
  transform: translateY(-10%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-20 {
  transform: translateY(-20%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-30 {
  transform: translateY(-30%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-40 {
  transform: translateY(-40%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-50 {
  transform: translateY(-50%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-60 {
  transform: translateY(-60%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-70 {
  transform: translateY(-70%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-80 {
  transform: translateY(-80%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-90 {
  transform: translateY(-90%);
}

.slides:not(.scroll) .slide.after .rolling-element {
  transform: translateY(-100%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-10 {
  transform: translateY(-10%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-20 {
  transform: translateY(-20%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-30 {
  transform: translateY(-30%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-40 {
  transform: translateY(-40%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-50 {
  transform: translateY(-50%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-60 {
  transform: translateY(-60%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-70 {
  transform: translateY(-70%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-80 {
  transform: translateY(-80%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-90 {
  transform: translateY(-90%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse {
  transform: translateY(100%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-10 {
  transform: translateY(10%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-20 {
  transform: translateY(20%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-30 {
  transform: translateY(30%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-40 {
  transform: translateY(40%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-50 {
  transform: translateY(50%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-60 {
  transform: translateY(60%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-70 {
  transform: translateY(70%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-80 {
  transform: translateY(80%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-90 {
  transform: translateY(90%);
}

.slides.animateOnEvent .kenBurns .background,
.slides.animateOnEvent .kenBurns.zoomin .background,
.slides.animated .kenBurns .background,
.slides.animated .kenBurns.zoomin .background {
  transform: scale(1.08) rotate(-.02deg);
  opacity: .2;
  z-index: 1;
}

.slides.animateOnEvent .kenBurns.zoomin:not(.video) .background,
.slides.animateOnEvent .kenBurns:not(.video) .background,
.slides.animated .kenBurns.zoomin:not(.video) .background,
.slides.animated .kenBurns:not(.video) .background {
  transition: transform 5s cubic-bezier(.3,0,.7,1),opacity 1s ease;
}

.animateOnEvent .active .kenBurns.zoomin:not(.video) .background,
.animateOnEvent .active.kenBurns.zoomin:not(.video) .background,
.animateOnEvent .active.kenBurns:not(.video) .background,
.animated .active .kenBurns.zoomin:not(.video) .background,
.animated .active.kenBurns.zoomin:not(.video) .background,
.animated .active.kenBurns:not(.video) .background {
  opacity: 1;
  transform: translate3d(0,0,0);
}

.slides.animateOnEvent .kenBurns.zoomin:not(.video) .background,
.slides.animated .kenBurns.zoomin:not(.video) .background {
  transform: translate3d(0,0,0);
}

.animateOnEvent .active.kenBurns.zoomin:not(.video) .background,
.animated .active.kenBurns.zoomin:not(.video) .background,
.windows .slides.animateOnEvent .active.kenBurns.zoomin:not(.video) .background,
.windows .slides.animated .active.kenBurns.zoomin:not(.video) .background {
  transform: scale(1.08) rotate(-.02deg);
}

.mobile .kenBurns .background,
.mobile .kenBurns.zoomin .background {
  transition: 0s;
  transform: none;
}

.slides.animateOnEvent .parallax:not(.video) .background,
.slides.animated .parallax:not(.video) .background {
  transform: translate3d(0,0,0) scale(1.25);
  transition: transform-origin 1s,transform 1s;
}

.slides.animateOnEvent.fast .parallax:not(.video) .background,
.slides.animated.fast .parallax:not(.video) .background {
  transition: transform-origin .6s,transform .6s;
}

.slides.animateOnEvent.slow .parallax:not(.video) .background,
.slides.animated.slow .parallax:not(.video) .background {
  transition: transform-origin 1.4s,transform 1.4s;
}

.slides.animateOnEvent .parallax.animate:not(.video) .background,
.slides.animated .parallax.animate:not(.video) .background {
  transform-origin: center;
}

.slides.animateOnEvent .slide.after.parallax:not(.video) .background,
.slides.animated .slide.after.parallax:not(.video) .background {
  transform-origin: top center;
}

.slides.animateOnEvent .slide.before.parallax:not(.video) .background,
.slides.animated .slide.before.parallax:not(.video) .background {
  transform-origin: bottom center;
}

.slides.animateOnEvent.horizontal .slide.after.parallax:not(.video) .background,
.slides.animated.horizontal .slide.after.parallax:not(.video) .background {
  transform-origin: left center;
}

.slides.animateOnEvent.horizontal .slide.before.parallax:not(.video) .background,
.slides.animated.horizontal .slide.before.parallax:not(.video) .background {
  transform-origin: right center;
}

.slides.animateOnEvent.zoom .slide.after.parallax:not(.video) .background,
.slides.animated.zoom .slide.after.parallax:not(.video) .background {
  transform-origin: center;
  transform: translate3d(0,0,0) scale(1);
}

.slides.animateOnEvent.zoom .slide.animate.parallax:not(.video) .background,
.slides.animated.zoom .slide.animate.parallax:not(.video) .background {
  transform-origin: center;
  transform: translate3d(0,0,0) scale(1.1);
}

.slides.animateOnEvent.zoom .slide.before.parallax:not(.video) .background,
.slides.animated.zoom .slide.before.parallax:not(.video) .background {
  transform-origin: center;
  transform: translate3d(0,0,0) scale(1);
}

.slides.animateOnEvent.plain .slide.after.parallax:not(.video) .background,
.slides.animated.plain .slide.after.parallax:not(.video) .background {
  transform-origin: center;
  transform: translate3d(0,0,0) scale(1);
}

.slides.animateOnEvent.plain .slide.animate.parallax:not(.video) .background,
.slides.animated.plain .slide.animate.parallax:not(.video) .background {
  transform-origin: center;
  transform: translate3d(0,0,0) scale(1);
}

.slides.animateOnEvent.plain .slide.before.parallax:not(.video) .background,
.slides.animated.plain .slide.before.parallax:not(.video) .background {
  transform-origin: center;
  transform: translate3d(0,0,0) scale(1);
}

.slides.animateOnEvent .scenic:not(.video) .background,
.slides.animated .scenic:not(.video) .background {
  animation: scenic 140s cubic-bezier(.2,0,.8,1) infinite;
}

@keyframes scenic {
  50% {
    transform: scale(1.5) rotate(-.02deg);
  }
}

.mobile .simplifiedMobile,
.scroll {
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.scroll .content .mobile .simplifiedMobile .content {
  -webkit-overflow-scrolling: initial;
  overflow: hidden;
}

.scroll .wrap {
  overflow: hidden;
}

.mobile .simplifiedMobile .container,
.mobile .simplifiedMobile .content,
.mobile .simplifiedMobile .slide,
.scroll .container,
.scroll .slide,
.scroll .slide .content {
  position: relative!important;
  height: auto;
  opacity: 1;
}

.mobile .simplifiedMobile .popup .container,
.mobile .simplifiedMobile .popup .content {
  position: absolute!important;
  height: 100%;
}

.mobile .simplifiedMobile .container,
.scroll .container {
  height: 100vh;
}

.mobile .slide.autoHeight .simplifiedMobile .container,
.scroll .slide.autoHeight .container {
  height: auto;
}

.mobile .simplifiedMobile .slide .background,
.scroll .slide .background {
  position: absolute!important;
}

.mobile .simplifiedMobile .slide:not(.autoHeight) .background,
.scroll .slide:not(.autoHeight) .background {
  min-height: 100vh;
}

.mobile .simplifiedMobile .slide,
.mobile .simplifiedMobile .slide.after,
.mobile .simplifiedMobile .slide.before,
.scroll .slide,
.scroll .slide.after,
.scroll .slide.before {
  visibility: visible;
  transform: none!important;
}

.mobile .simplifiedMobile .slide,
.mobile .simplifiedMobile .slide.after,
.mobile .simplifiedMobile .slide.before {
  opacity: 1!important;
}

.page-loaded.mobile.sidebarShown .simplifiedMobile .slide,
.page-loaded.sidebarShown .scroll .slide {
  transform: translate3d(0,0,0)!important;
  pointer-events: none;
  opacity: .5!important;
}

.page-loaded .scroll .slide {
  transition: transform .5s,opacity .5s!important;
}

.mobile .simplifiedMobile .navigation {
  display: none;
}

.mobile .simplifiedMobile [class*=ae-] {
  visibility: visible!important;
  opacity: 1!important;
  transform: none!important;
}

.mobile .simplifiedMobile [class*=ae-] {
  visibility: visible!important;
  opacity: 1!important;
  transform: none!important;
}

.scroll .parallax:not(.video) .background {
  transform: translate3d(0,0,0) scale(1.25);
  transition: none!important;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
}

@keyframes zoomOut {
  from {
    opacity: 0;
    transform: scale(.86);
  }
}

@keyframes riseUp {
  from {
    opacity: 0;
    transform: scale(.86) translateY(50px);
  }
}

@media (max-width:1023px) {
  .parallaxMotion .parallaxElement:not(.responsive),
  .parallaxMotion:not(.responsive) .parallaxElement {
    transform: none!important;
  }
}

html {
  font-size: 6px;
  font-weight: 400;
  color: #202020;
}

@media (max-width:550px) {
  html {
    font-size: 5px;
  }
}

@media (min-width:767px) {
  html {
    font-size: 7px;
  }
}

@media (min-width:1024px) {
  html {
    font-size: 6px;
  }
}

body {
  font-size: 15px;
}

.typography .h1,
.typography .h2,
.typography .h3,
.typography .h4,
.typography .h5,
.typography .h6,
.typography h1,
.typography h2,
.typography h3,
.typography h4,
.typography h5,
.typography h6 {
  font-style: normal;
  letter-spacing: normal;
}

.typography .h1.ultraLight,
.typography .h2.ultraLight,
.typography .h3.ultraLight,
.typography .h4.ultraLight,
.typography .h5.ultraLight,
.typography .h6.ultraLight,
.typography h1.ultraLight,
.typography h2.ultraLight,
.typography h3.ultraLight,
.typography h4.ultraLight,
.typography h5.ultraLight,
.typography h6.ultraLight {
  font-weight: 100;
}

.typography .h1.light,
.typography .h2.light,
.typography .h3.light,
.typography .h4.light,
.typography .h5.light,
.typography .h6.light,
.typography h1.light,
.typography h2.light,
.typography h3.light,
.typography h4.light,
.typography h5.light,
.typography h6.light {
  font-weight: 300;
}

.typography .h1.normal,
.typography .h2.normal,
.typography .h3.normal,
.typography .h4.normal,
.typography .h5.normal,
.typography .h6.normal,
.typography h1.normal,
.typography h2.normal,
.typography h3.normal,
.typography h4.normal,
.typography h5.normal,
.typography h6.normal {
  font-weight: 400;
}

.typography .h1.semiBold,
.typography .h2.semiBold,
.typography .h3.semiBold,
.typography .h4.semiBold,
.typography .h5.semiBold,
.typography .h6.semiBold,
.typography h1.semiBold,
.typography h2.semiBold,
.typography h3.semiBold,
.typography h4.semiBold,
.typography h5.semiBold,
.typography h6.semiBold {
  font-weight: 500;
  letter-spacing: -.05em;
}

.typography .h1.bold,
.typography .h2.bold,
.typography .h3.bold,
.typography .h4.bold,
.typography .h5.bold,
.typography .h6.bold,
.typography h1.bold,
.typography h2.bold,
.typography h3.bold,
.typography h4.bold,
.typography h5.bold,
.typography h6.bold {
  font-weight: 600;
  letter-spacing: -.04em;
}

.typography .h1.ultraBold,
.typography .h2.ultraBold,
.typography .h3.ultraBold,
.typography .h4.ultraBold,
.typography .h5.ultraBold,
.typography .h6.ultraBold,
.typography h1.ultraBold,
.typography h2.ultraBold,
.typography h3.ultraBold,
.typography h4.ultraBold,
.typography h5.ultraBold,
.typography h6.ultraBold {
  font-weight: 800;
  letter-spacing: -.03em;
}

.typography .h1,
.typography h1 {
  font-size: 8.4rem;
  line-height: 10rem;
  margin-top: 8rem;
  padding-top: .0138rem;
  padding-bottom: .9862rem;
  margin-bottom: 1rem;
}

.typography .h1.small,
.typography h1.small {
  font-size: 6.4rem;
  line-height: 6rem;
  margin-top: 3rem;
  padding-top: .7248rem;
  padding-bottom: .2752rem;
  margin-bottom: 2rem;
}

.typography .h1.large,
.typography h1.large {
  font-size: 9.6rem;
  line-height: 10rem;
  margin-top: 7rem;
  padding-top: .5872rem;
  padding-bottom: .4128rem;
  margin-bottom: 4rem;
}

.typography .h1.huge,
.typography h1.huge {
  font-size: 14.6rem;
  line-height: 15rem;
  margin-top: 10rem;
  padding-top: .3097rem;
  padding-bottom: .6903rem;
  margin-bottom: 3rem;
}

.typography .h2,
.typography h2 {
  font-size: 7.4rem;
  line-height: 8rem;
  margin-top: 6rem;
  padding-top: .3693rem;
  padding-bottom: .6307rem;
  margin-bottom: 1rem;
}

.typography .h2.small,
.typography h2.small {
  font-size: 5.6rem;
  line-height: 6rem;
  margin-top: 4rem;
  padding-top: .0092rem;
  padding-bottom: .9908rem;
  margin-bottom: -1rem;
}

.typography .h2.large,
.typography h2.large {
  font-size: 8.8rem;
  line-height: 9rem;
  margin-top: 6rem;
  padding-top: .3716rem;
  padding-bottom: .6284rem;
  margin-bottom: 1rem;
}

.typography .h2.huge,
.typography h2.huge {
  font-size: 11.2rem;
  line-height: 12rem;
  margin-top: 8rem;
  padding-top: .0184rem;
  padding-bottom: .9816rem;
  margin-bottom: 1rem;
}

.typography .h3,
.typography h3 {
  font-size: 6.4rem;
  line-height: 8rem;
  margin-top: 3rem;
  padding-top: .7248rem;
  padding-bottom: .2752rem;
  margin-bottom: 0;
}

.typography .h3.small,
.typography h3.small {
  font-size: 4.8rem;
  line-height: 6rem;
  margin-top: 2rem;
  padding-top: .2936rem;
  padding-bottom: .7064rem;
  margin-bottom: -1rem;
}

.typography .h3.large,
.typography h3.large {
  font-size: 8rem;
  line-height: 10rem;
  margin-top: 4rem;
  padding-top: .156rem;
  padding-bottom: .844rem;
  margin-bottom: 0;
}

.typography .h3.huge,
.typography h3.huge {
  font-size: 9.6rem;
  line-height: 10rem;
  margin-top: 5rem;
  padding-top: .5872rem;
  padding-bottom: .4128rem;
  margin-bottom: 2rem;
}

.typography .h4,
.typography h4 {
  font-size: 5.2rem;
  line-height: 6rem;
  margin-top: 4rem;
  padding-top: .1514rem;
  padding-bottom: .8486rem;
  margin-bottom: -1rem;
}

.typography .h5,
.typography h5 {
  font-size: 4.4rem;
  line-height: 6rem;
  margin-top: 4rem;
  padding-top: .4358rem;
  padding-bottom: .5642rem;
  margin-bottom: -1rem;
}

.typography .h6,
.typography h6 {
  font-size: 4rem;
  line-height: 4rem;
  margin-top: 3rem;
  padding-top: .578rem;
  padding-bottom: .422rem;
  margin-bottom: 0;
}

.typography .p,
.typography .p:not(.hero)+p,
.typography p,
.typography p:not(.hero)+p {
  font-size: 3.5rem;
  line-height: 5rem;
  margin-top: 0;
  padding-top: .25575rem;
  padding-bottom: .74425rem;
  margin-bottom: 1rem;
  text-rendering: optimizeLegibility;
}

.typography .p.micro,
.typography .p:not(.hero)+p.micro,
.typography p.micro,
.typography p:not(.hero)+p.micro {
  font-size: 2.6rem;
  line-height: 4rem;
  margin-top: 2rem;
  padding-top: .0757rem;
  padding-bottom: .9243rem;
  margin-bottom: -1rem;
}

.typography .p.small,
.typography .p:not(.hero)+p.small,
.typography p.small,
.typography p:not(.hero)+p.small {
  font-size: 3rem;
  line-height: 4rem;
  margin-top: 1rem;
  padding-top: .9335rem;
  padding-bottom: .0665rem;
  margin-bottom: 0;
}

.typography .p.hero,
.typography .p:not(.hero)+p.hero,
.typography p.hero,
.typography p:not(.hero)+p.hero {
  font-size: 5rem;
  line-height: 6rem;
  margin-top: 2rem;
  padding-top: .2225rem;
  padding-bottom: .7775rem;
  margin-bottom: 3rem;
  font-weight: 300;
  letter-spacing: -.16rem;
}

.typography strong {
  font-weight: 600;
}

.typography em {
  font-weight: 500;
}

.typography li {
  font-size: 3.5rem;
  line-height: 4rem;
  margin-top: -1rem;
  padding-top: .75575rem;
  padding-bottom: .24425rem;
  margin-bottom: 1rem;
  opacity: .8;
}

.typography ol,
.typography ul {
  margin: 4rem 4rem 4rem 8rem;
}

.typography ul li {
  list-style: disc;
}

.typography ol li {
  list-style: decimal;
}

.typography blockquote {
  font-size: 3.2rem;
  line-height: 4rem;
  margin-top: 5rem;
  padding-top: .8624rem;
  padding-bottom: .1376rem;
  margin-bottom: 5rem;
  padding-left: 4rem;
  padding-right: 4rem;
  margin-left: 4rem;
  margin-right: 4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  opacity: .9;
  border-left: 5px solid #eee;
}

.typography q {
  font-size: 3.2rem;
  line-height: 4rem;
  margin-top: 5rem;
  padding-top: .8624rem;
  padding-bottom: .1376rem;
  margin-bottom: 6rem;
  padding-left: 4rem;
  padding-right: 4rem;
  opacity: .9;
  display: block;
}

.typography q:after,
.typography q:before {
  font-size: 5rem;
  line-height: .1rem;
  vertical-align: -1rem;
}

.typography q:before {
  content: "“";
  margin-right: 1rem;
}

.typography q:after {
  content: "”";
  margin-left: 1rem;
}

@media (min-width:768px) {
  .article li,
  .article p {
    font-weight: 300;
  }
}

@media (max-width:550px) {
  .article .h2,
  .article .h3,
  .article h1,
  .article h4,
  .article h5,
  .article h6 {
    opacity: .8;
  }
}

.white {
  background: #fff!important;
  color: #202020!important;
}

.white svg {
  fill: #202020!important;
}

.text-white {
  color: #fff!important;
}

.text-white.button svg {
  fill: #fff!important;
}

.stroke.button.white {
  color: #fff!important;
  border-color: #fff!important;
}

.stroke.button.white svg {
  fill: #fff!important;
}

.black {
  background: #202020!important;
  color: #fff!important;
}

.black svg {
  fill: #fff!important;
}

.text-black {
  color: #202020!important;
}

.text-black.button svg {
  fill: #202020!important;
}

.stroke.button.black {
  color: #202020!important;
  border-color: #202020!important;
}

.stroke.button.black svg {
  fill: #202020!important;
}

.red {
  background: #f44336!important;
  color: #fff!important;
}

.red svg {
  fill: #fff!important;
}

.text-red {
  color: #f44336!important;
}

.text-red.button svg {
  fill: #f44336!important;
}

.stroke.button.red {
  color: #f44336!important;
  border-color: #f44336!important;
}

.stroke.button.red svg {
  fill: #f44336!important;
}

.pink {
  background: #e91e63!important;
  color: #fff!important;
}

.pink svg {
  fill: #fff!important;
}

.text-pink {
  color: #e91e63!important;
}

.text-pink.button svg {
  fill: #e91e63!important;
}

.stroke.button.pink {
  color: #e91e63!important;
  border-color: #e91e63!important;
}

.stroke.button.pink svg {
  fill: #e91e63!important;
}

.purple {
  background: #9c27b0!important;
  color: #fff!important;
}

.purple svg {
  fill: #fff!important;
}

.text-purple {
  color: #9c27b0!important;
}

.text-purple.button svg {
  fill: #9c27b0!important;
}

.stroke.button.purple {
  color: #9c27b0!important;
  border-color: #9c27b0!important;
}

.stroke.button.purple svg {
  fill: #9c27b0!important;
}

.deepPurple {
  background: #673ab7!important;
  color: #fff!important;
}

.deepPurple svg {
  fill: #fff!important;
}

.text-deepPurple {
  color: #673ab7!important;
}

.text-deepPurple.button svg {
  fill: #673ab7!important;
}

.stroke.button.deepPurple {
  color: #673ab7!important;
  border-color: #673ab7!important;
}

.stroke.button.deepPurple svg {
  fill: #673ab7!important;
}

.indigo {
  background: #3f51b5!important;
  color: #fff!important;
}

.indigo svg {
  fill: #fff!important;
}

.text-indigo {
  color: #3f51b5!important;
}

.text-indigo.button svg {
  fill: #3f51b5!important;
}

.stroke.button.indigo {
  color: #3f51b5!important;
  border-color: #3f51b5!important;
}

.stroke.button.indigo svg {
  fill: #3f51b5!important;
}

.blue {
  background: #2196f3!important;
  color: #fff!important;
}

.blue svg {
  fill: #fff!important;
}

.text-blue {
  color: #2196f3!important;
}

.text-blue.button svg {
  fill: #2196f3!important;
}

.stroke.button.blue {
  color: #2196f3!important;
  border-color: #2196f3!important;
}

.stroke.button.blue svg {
  fill: #2196f3!important;
}

.cyan {
  background: #00bcd4!important;
  color: #fff!important;
}

.cyan svg {
  fill: #fff!important;
}

.text-cyan {
  color: #00bcd4!important;
}

.text-cyan.button svg {
  fill: #00bcd4!important;
}

.stroke.button.cyan {
  color: #00bcd4!important;
  border-color: #00bcd4!important;
}

.stroke.button.cyan svg {
  fill: #00bcd4!important;
}

.teal {
  background: #009688!important;
  color: #fff!important;
}

.teal svg {
  fill: #fff!important;
}

.text-teal {
  color: #009688!important;
}

.text-teal.button svg {
  fill: #009688!important;
}

.stroke.button.teal {
  color: #009688!important;
  border-color: #009688!important;
}

.stroke.button.teal svg {
  fill: #009688!important;
}

.green {
  background: #4caf50!important;
  color: #fff!important;
}

.green svg {
  fill: #fff!important;
}

.text-green {
  color: #4caf50!important;
}

.text-green.button svg {
  fill: #4caf50!important;
}

.stroke.button.green {
  color: #4caf50!important;
  border-color: #4caf50!important;
}

.stroke.button.green svg {
  fill: #4caf50!important;
}

.lightGreen {
  background: #8bc34a!important;
  color: #fff!important;
}

.lightGreen svg {
  fill: #fff!important;
}

.text-lightGreen {
  color: #8bc34a!important;
}

.text-lightGreen.button svg {
  fill: #8bc34a!important;
}

.stroke.button.lightGreen {
  color: #8bc34a!important;
  border-color: #8bc34a!important;
}

.stroke.button.lightGreen svg {
  fill: #8bc34a!important;
}

.lime {
  background: #cddc39!important;
  color: #fff!important;
}

.lime svg {
  fill: #fff!important;
}

.text-lime {
  color: #cddc39!important;
}

.text-lime.button svg {
  fill: #cddc39!important;
}

.stroke.button.lime {
  color: #cddc39!important;
  border-color: #cddc39!important;
}

.stroke.button.lime svg {
  fill: #cddc39!important;
}

.yellow {
  background: #ffeb3b!important;
  color: #202020!important;
}

.yellow svg {
  fill: #202020!important;
}

.text-yellow {
  color: #ffeb3b!important;
}

.text-yellow.button svg {
  fill: #ffeb3b!important;
}

.stroke.button.yellow {
  color: #ffeb3b!important;
  border-color: #ffeb3b!important;
}

.stroke.button.yellow svg {
  fill: #ffeb3b!important;
}

.amber {
  background: #ffc107!important;
  color: #fff!important;
}

.amber svg {
  fill: #fff!important;
}

.text-amber {
  color: #ffc107!important;
}

.text-amber.button svg {
  fill: #ffc107!important;
}

.stroke.button.amber {
  color: #ffc107!important;
  border-color: #ffc107!important;
}

.stroke.button.amber svg {
  fill: #ffc107!important;
}

.orange {
  background: #ff9800!important;
  color: #fff!important;
}

.orange svg {
  fill: #fff!important;
}

.text-orange {
  color: #ff9800!important;
}

.text-orange.button svg {
  fill: #ff9800!important;
}

.stroke.button.orange {
  color: #ff9800!important;
  border-color: #ff9800!important;
}

.stroke.button.orange svg {
  fill: #ff9800!important;
}

.deepOrange {
  background: #ff5722!important;
  color: #fff!important;
}

.deepOrange svg {
  fill: #fff!important;
}

.text-deepOrange {
  color: #ff5722!important;
}

.text-deepOrange.button svg {
  fill: #ff5722!important;
}

.stroke.button.deepOrange {
  color: #ff5722!important;
  border-color: #ff5722!important;
}

.stroke.button.deepOrange svg {
  fill: #ff5722!important;
}

.brown {
  background: #795548!important;
  color: #fff!important;
}

.brown svg {
  fill: #fff!important;
}

.text-brown {
  color: #795548!important;
}

.text-brown.button svg {
  fill: #795548!important;
}

.stroke.button.brown {
  color: #795548!important;
  border-color: #795548!important;
}

.stroke.button.brown svg {
  fill: #795548!important;
}

.gray {
  background: #9d9d9d!important;
  color: #fff!important;
}

.gray svg {
  fill: #fff!important;
}

.text-gray {
  color: #9d9d9d!important;
}

.text-gray.button svg {
  fill: #9d9d9d!important;
}

.stroke.button.gray {
  color: #9d9d9d!important;
  border-color: #9d9d9d!important;
}

.stroke.button.gray svg {
  fill: #9d9d9d!important;
}

.blueGray {
  background: #607d8b!important;
  color: #fff!important;
}

.blueGray svg {
  fill: #fff!important;
}

.text-blueGray {
  color: #607d8b!important;
}

.text-blueGray.button svg {
  fill: #607d8b!important;
}

.stroke.button.blueGray {
  color: #607d8b!important;
  border-color: #607d8b!important;
}

.stroke.button.blueGray svg {
  fill: #607d8b!important;
}

.social-facebook {
  background: #3b5998!important;
  color: #fff!important;
}

.social-facebook svg {
  fill: #fff!important;
}

.text-social-facebook {
  color: #3b5998!important;
}

.text-social-facebook.button svg {
  fill: #3b5998!important;
}

.stroke.button.social-facebook {
  color: #3b5998!important;
  border-color: #3b5998!important;
}

.stroke.button.social-facebook svg {
  fill: #3b5998!important;
}

.social-twitter {
  background: #55acee!important;
  color: #fff!important;
}

.social-twitter svg {
  fill: #fff!important;
}

.text-social-twitter {
  color: #55acee!important;
}

.text-social-twitter.button svg {
  fill: #55acee!important;
}

.stroke.button.social-twitter {
  color: #55acee!important;
  border-color: #55acee!important;
}

.stroke.button.social-twitter svg {
  fill: #55acee!important;
}

.social-googlePlus {
  background: #dd4330!important;
  color: #fff!important;
}

.social-googlePlus svg {
  fill: #fff!important;
}

.text-social-googlePlus {
  color: #dd4330!important;
}

.text-social-googlePlus.button svg {
  fill: #dd4330!important;
}

.stroke.button.social-googlePlus {
  color: #dd4330!important;
  border-color: #dd4330!important;
}

.stroke.button.social-googlePlus svg {
  fill: #dd4330!important;
}

.social-behance {
  background: #105dfb!important;
  color: #fff!important;
}

.social-behance svg {
  fill: #fff!important;
}

.text-social-behance {
  color: #105dfb!important;
}

.text-social-behance.button svg {
  fill: #105dfb!important;
}

.stroke.button.social-behance {
  color: #105dfb!important;
  border-color: #105dfb!important;
}

.stroke.button.social-behance svg {
  fill: #105dfb!important;
}

.social-medium {
  background: #12100e!important;
  color: #fff!important;
}

.social-medium svg {
  fill: #fff!important;
}

.text-social-medium {
  color: #12100e!important;
}

.text-social-medium.button svg {
  fill: #12100e!important;
}

.stroke.button.social-medium {
  color: #12100e!important;
  border-color: #12100e!important;
}

.stroke.button.social-medium svg {
  fill: #12100e!important;
}

.social-stumbleupon {
  background: #eb4924!important;
  color: #fff!important;
}

.social-stumbleupon svg {
  fill: #fff!important;
}

.text-social-stumbleupon {
  color: #eb4924!important;
}

.text-social-stumbleupon.button svg {
  fill: #eb4924!important;
}

.stroke.button.social-stumbleupon {
  color: #eb4924!important;
  border-color: #eb4924!important;
}

.stroke.button.social-stumbleupon svg {
  fill: #eb4924!important;
}

.social-linkedin {
  background: #0077b5!important;
  color: #fff!important;
}

.social-linkedin svg {
  fill: #fff!important;
}

.text-social-linkedin {
  color: #0077b5!important;
}

.text-social-linkedin.button svg {
  fill: #0077b5!important;
}

.stroke.button.social-linkedin {
  color: #0077b5!important;
  border-color: #0077b5!important;
}

.stroke.button.social-linkedin svg {
  fill: #0077b5!important;
}

.social-pinterest {
  background: #cc2127!important;
  color: #fff!important;
}

.social-pinterest svg {
  fill: #fff!important;
}

.text-social-pinterest {
  color: #cc2127!important;
}

.text-social-pinterest.button svg {
  fill: #cc2127!important;
}

.stroke.button.social-pinterest {
  color: #cc2127!important;
  border-color: #cc2127!important;
}

.stroke.button.social-pinterest svg {
  fill: #cc2127!important;
}

.social-instagram {
  background: #e4405f!important;
  color: #fff!important;
}

.social-instagram svg {
  fill: #fff!important;
}

.text-social-instagram {
  color: #e4405f!important;
}

.text-social-instagram.button svg {
  fill: #e4405f!important;
}

.stroke.button.social-instagram {
  color: #e4405f!important;
  border-color: #e4405f!important;
}

.stroke.button.social-instagram svg {
  fill: #e4405f!important;
}

.social-tumblr {
  background: #34455d!important;
  color: #fff!important;
}

.social-tumblr svg {
  fill: #fff!important;
}

.text-social-tumblr {
  color: #34455d!important;
}

.text-social-tumblr.button svg {
  fill: #34455d!important;
}

.stroke.button.social-tumblr {
  color: #34455d!important;
  border-color: #34455d!important;
}

.stroke.button.social-tumblr svg {
  fill: #34455d!important;
}

.social-dribbble {
  background: #ea4c89!important;
  color: #fff!important;
}

.social-dribbble svg {
  fill: #fff!important;
}

.text-social-dribbble {
  color: #ea4c89!important;
}

.text-social-dribbble.button svg {
  fill: #ea4c89!important;
}

.stroke.button.social-dribbble {
  color: #ea4c89!important;
  border-color: #ea4c89!important;
}

.stroke.button.social-dribbble svg {
  fill: #ea4c89!important;
}

.social-youtube {
  background: #cd201f!important;
  color: #fff!important;
}

.social-youtube svg {
  fill: #fff!important;
}

.text-social-youtube {
  color: #cd201f!important;
}

.text-social-youtube.button svg {
  fill: #cd201f!important;
}

.stroke.button.social-youtube {
  color: #cd201f!important;
  border-color: #cd201f!important;
}

.stroke.button.social-youtube svg {
  fill: #cd201f!important;
}

.social-delicious {
  background: #39f!important;
  color: #fff!important;
}

.social-delicious svg {
  fill: #fff!important;
}

.text-social-delicious {
  color: #39f!important;
}

.text-social-delicious.button svg {
  fill: #39f!important;
}

.stroke.button.social-delicious {
  color: #39f!important;
  border-color: #39f!important;
}

.stroke.button.social-delicious svg {
  fill: #39f!important;
}

.social-digg {
  background: #000!important;
  color: #fff!important;
}

.social-digg svg {
  fill: #fff!important;
}

.text-social-digg {
  color: #000!important;
}

.text-social-digg.button svg {
  fill: #000!important;
}

.stroke.button.social-digg {
  color: #000!important;
  border-color: #000!important;
}

.stroke.button.social-digg svg {
  fill: #000!important;
}

.social-vimeo {
  background: #fff!important;
  color: #1ab7ea!important;
}

.social-vimeo svg {
  fill: #1ab7ea!important;
}

.text-social-vimeo {
  color: #fff!important;
}

.text-social-vimeo.button svg {
  fill: #fff!important;
}

.stroke.button.social-vimeo {
  color: #fff!important;
  border-color: #fff!important;
}

.stroke.button.social-vimeo svg {
  fill: #fff!important;
}

.social-whatsapp {
  background: #25d366!important;
  color: #fff!important;
}

.social-whatsapp svg {
  fill: #fff!important;
}

.text-social-whatsapp {
  color: #25d366!important;
}

.text-social-whatsapp.button svg {
  fill: #25d366!important;
}

.stroke.button.social-whatsapp {
  color: #25d366!important;
  border-color: #25d366!important;
}

.stroke.button.social-whatsapp svg {
  fill: #25d366!important;
}

.social-xing {
  background: #026466!important;
  color: #fff!important;
}

.social-xing svg {
  fill: #fff!important;
}

.text-social-xing {
  color: #026466!important;
}

.text-social-xing.button svg {
  fill: #026466!important;
}

.stroke.button.social-xing {
  color: #026466!important;
  border-color: #026466!important;
}

.stroke.button.social-xing svg {
  fill: #026466!important;
}

.social-youtube {
  background: #fc0d1c!important;
  color: #fff!important;
}

.social-youtube svg {
  fill: #fff!important;
}

.text-social-youtube {
  color: #fc0d1c!important;
}

.text-social-youtube.button svg {
  fill: #fc0d1c!important;
}

.stroke.button.social-youtube {
  color: #fc0d1c!important;
  border-color: #fc0d1c!important;
}

.stroke.button.social-youtube svg {
  fill: #fc0d1c!important;
}

.grid {
  margin-left: -2%;
  margin-right: -2%;
}

.grid [class*=col-] {
  display: block;
  width: 100%;
  padding-left: 2%;
  padding-right: 2%;
  float: left;
}

.grid.fixedSpaces {
  margin-left: -10px;
  margin-right: -10px;
}

.grid.fixedSpaces>[class*=col-] {
  padding-left: 10px;
  padding-right: 10px;
}

.grid.noSpaces {
  margin-left: 0;
  margin-right: 0;
}

.grid.noSpaces>[class*=col-] {
  padding-left: 0;
  padding-right: 0;
}

.grid .toLeft[class*=col-] {
  margin-left: 0!important;
  margin-right: auto!important;
}

.grid .toRight[class*=col-] {
  margin-right: 0!important;
  margin-left: auto!important;
  float: right;
}

.grid .toCenter[class*=col-] {
  margin-left: auto!important;
  margin-right: auto!important;
}

.grid>.col-1-12 {
  max-width: 8.3333333333%;
}

.grid>.col-2-12 {
  max-width: 16.6666666667%;
}

.grid>.col-3-12 {
  max-width: 25%;
}

.grid>.col-4-12 {
  max-width: 33.3333333333%;
}

.grid>.col-5-12 {
  max-width: 41.6666666667%;
}

.grid>.col-6-12 {
  max-width: 50%;
}

.grid>.col-7-12 {
  max-width: 58.3333333333%;
}

.grid>.col-8-12 {
  max-width: 66.6666666667%;
}

.grid>.col-9-12 {
  max-width: 75%;
}

.grid>.col-10-12 {
  max-width: 83.3333333333%;
}

.grid>.col-11-12 {
  max-width: 91.6666666667%;
}

.grid>.col-12-12 {
  max-width: 100%;
}

.grid>.col-1-10 {
  max-width: 10%;
}

.grid>.col-2-10 {
  max-width: 20%;
}

.grid>.col-3-10 {
  max-width: 30%;
}

.grid>.col-4-10 {
  max-width: 40%;
}

.grid>.col-5-10 {
  max-width: 50%;
}

.grid>.col-6-10 {
  max-width: 60%;
}

.grid>.col-7-10 {
  max-width: 70%;
}

.grid>.col-8-10 {
  max-width: 80%;
}

.grid>.col-9-10 {
  max-width: 90%;
}

.grid>.col-10-10 {
  max-width: 100%;
}

.grid+.grid {
  margin-top: 20px;
}

.grid:after {
  content: "";
  display: table;
  clear: both;
}

@media (max-width:1239px) {
  .grid>.col-desktop-1-1 {
    max-width: 100%!important;
  }

  .grid>.col-desktop-1-2 {
    max-width: 50%!important;
  }

  .grid>.col-desktop-1-3 {
    max-width: 33.33333333%!important;
  }

  .grid>.col-desktop-2-3 {
    max-width: 66.66666666%!important;
  }

  .grid>.col-desktop-1-4 {
    max-width: 25%!important;
  }

  .grid>.col-desktop-3-4 {
    max-width: 75%!important;
  }
}

@media (max-width:1023px) {
  .grid:not(.later)>[class*=col-]:not([class*=col-phablet-]):not([class*=col-phone-]) {
    max-width: 100%;
  }

  .grid>.col-tablet-1-1 {
    max-width: 100%!important;
  }

  .grid>.col-tablet-1-2 {
    max-width: 50%!important;
  }

  .grid>.col-tablet-1-3 {
    max-width: 33.33333333%!important;
  }

  .grid>.col-tablet-2-3 {
    max-width: 66.66666666%!important;
  }

  .grid>.col-tablet-1-4 {
    max-width: 25%!important;
  }

  .grid>.col-tablet-3-4 {
    max-width: 75%!important;
  }

  .grid>.col-tablet-1-5 {
    max-width: 20%!important;
  }

  .grid>.col-tablet-2-5 {
    max-width: 40%!important;
  }

  .grid>.col-tablet-3-5 {
    max-width: 60%!important;
  }

  .grid>.col-tablet-4-5 {
    max-width: 80%!important;
  }
}

@media (max-width:767px) {
  .grid.later>[class*=col-]:not([class*=col-phone-]) {
    max-width: 100%;
  }

  .grid>.col-phablet-1-1 {
    max-width: 100%!important;
  }

  .grid>.col-phablet-1-2 {
    max-width: 50%!important;
  }

  .grid>.col-phablet-1-3 {
    max-width: 33.33333333%!important;
  }

  .grid>.col-phablet-1-4 {
    max-width: 25%!important;
  }

  .grid>.col-phablet-3-4 {
    max-width: 75%!important;
  }
}

@media (max-width:435px) {
  .grid>[class*=col-] {
    max-width: 100%;
  }

  .grid>.col-phone-1-1 {
    max-width: 100%!important;
  }

  .grid>.col-phone-1-2 {
    max-width: 50%!important;
  }

  .grid>.col-phone-1-3 {
    max-width: 33.33333333%!important;
  }

  .grid>.col-phone-2-3 {
    max-width: 66.66666666%!important;
  }
}

.flex {
  display: flex;
  flex-wrap: wrap;
  margin-left: -2%;
  margin-right: -2%;
}

.flex>[class*=col-] {
  padding-left: 2%;
  padding-right: 2%;
}

.flex.fixedSpaces {
  margin-left: -14px;
  margin-right: -14px;
}

.flex.fixedSpaces>[class*=col-] {
  padding-left: 14px;
  padding-right: 14px;
}

.flex.noSpaces {
  margin-left: 0;
  margin-right: 0;
}

.flex.noSpaces>[class*=col-] {
  padding-left: 0;
  padding-right: 0;
}

.flex.verticalCenter {
  align-items: center;
}

.flex.verticalBottom {
  align-items: flex-end;
}

.flex.horizontalCenter {
  justify-content: center;
}

.flex.reverse {
  flex-wrap: wrap-reverse;
}

.flex.bottom [class*=col-],
.flex.reverse.top [class*=col-] {
  align-self: flex-end;
}

.flex.reverse.bottom [class*=col-],
.flex.top [class*=col-] {
  align-self: flex-start;
}

.flex>.col-1-12 {
  width: 8.3333333333%;
}

.flex>.col-2-12 {
  width: 16.6666666667%;
}

.flex>.col-3-12 {
  width: 25%;
}

.flex>.col-4-12 {
  width: 33.3333333333%;
}

.flex>.col-5-12 {
  width: 41.6666666667%;
}

.flex>.col-6-12 {
  width: 50%;
}

.flex>.col-7-12 {
  width: 58.3333333333%;
}

.flex>.col-8-12 {
  width: 66.6666666667%;
}

.flex>.col-9-12 {
  width: 75%;
}

.flex>.col-10-12 {
  width: 83.3333333333%;
}

.flex>.col-11-12 {
  width: 91.6666666667%;
}

.flex>.col-12-12 {
  width: 100%;
}

.flex>.col-1-10 {
  width: 10%;
}

.flex>.col-2-10 {
  width: 20%;
}

.flex>.col-3-10 {
  width: 30%;
}

.flex>.col-4-10 {
  width: 40%;
}

.flex>.col-5-10 {
  width: 50%;
}

.flex>.col-6-10 {
  width: 60%;
}

.flex>.col-7-10 {
  width: 70%;
}

.flex>.col-8-10 {
  width: 80%;
}

.flex>.col-9-10 {
  width: 90%;
}

.flex>.col-10-10 {
  width: 100%;
}

@media (max-width:1023px) {
  .flex:not(.later)>[class*=col-]:not([class*=col-phablet-]):not([class*=col-phone-]) {
    width: 100%;
  }

  .flex>.col-tablet-1-1 {
    width: 100%!important;
  }

  .flex>.col-tablet-1-2 {
    width: 50%!important;
  }

  .flex>.col-tablet-1-3 {
    width: 33.33333333%!important;
  }

  .flex>.col-tablet-2-3 {
    width: 66.66666666%!important;
  }

  .flex>.col-tablet-1-4 {
    width: 25%!important;
  }

  .flex>.col-tablet-3-4 {
    width: 75%!important;
  }

  .flex>.col-tablet-1-5 {
    width: 20%!important;
  }

  .flex>.col-tablet-2-5 {
    width: 40%!important;
  }

  .flex>.col-tablet-3-5 {
    width: 60%!important;
  }

  .flex>.col-tablet-4-5 {
    width: 80%!important;
  }
}

@media (max-width:767px) {
  .flex.later>[class*=col-]:not([class*=col-phone-]) {
    width: 100%;
  }

  .flex>.col-phablet-1-1 {
    width: 100%!important;
  }

  .flex>.col-phablet-1-2 {
    width: 50%!important;
  }

  .flex>.col-phablet-1-3 {
    width: 33.33333333%!important;
  }

  .flex>.col-phablet-2-3 {
    width: 66.66666666%!important;
  }

  .flex>.col-phablet-1-4 {
    width: 25%!important;
  }

  .flex>.col-phablet-3-4 {
    width: 75%!important;
  }
}

@media (max-width:435px) {
  .flex>[class*=col-] {
    width: 100%;
  }

  .flex>.col-phone-1-1 {
    width: 100%!important;
  }

  .flex>.col-phone-1-2 {
    width: 50%!important;
  }

  .flex>.col-phone-1-3 {
    width: 33.33333333%!important;
  }

  .flex>.col-phone-2-3 {
    width: 66.66666666%!important;
  }
}

.dialogContainer {
  pointer-events: none;
}

.dialog,
.dialogContainer {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 300;
}

.dialog {
  pointer-events: all;
  color: #303030;
  border-radius: 4px;
  max-width: 350px;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
  cursor: default;
  opacity: .98;
  line-height: 1.3;
  background: #fff;
  margin: 12px 20px;
  overflow: hidden;
  text-align: left;
  transform: translate3d(0,0,0);
  transition: all .75s,height 0s;
  transition-timing-function: cubic-bezier(.25,1.37,.44,.93);
  -webkit-tap-highlight-color: transparent;
}

.dialog.rectangular {
  border-radius: 0;
}

.dialog.rounded {
  border-radius: 6px;
}

.dialog:hover {
  opacity: 1;
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  transition: .35s;
}

.dialog .button.small {
  margin-left: 4px;
  margin-right: 4px;
}

.dialog .button {
  margin-left: 7px;
  margin-right: 7px;
}

.dialogContainer>.dialog {
  position: relative;
}

.dialog.hidden {
  display: none;
}

.dialog.hide {
  transform: scale(.5);
  opacity: 0!important;
  transition: height 0s,opacity .5s,transform .5s!important;
}

.dialog.reveal {
  transition: 0s!important;
}

.dialog .close {
  padding: 12px;
  position: absolute;
  font-size: 0;
  top: 0;
  right: 0;
  cursor: pointer;
  transition: .35s;
  opacity: 0;
  z-index: 10;
}

.dialog .close:after,
.dialog .close:before {
  content: "";
  width: 14px;
  height: 2px;
  border-radius: 2px;
  background: #202020;
  transform: rotate(45deg);
  position: absolute;
  right: 6px;
}

.dialog .close:before {
  transform: rotate(-45deg);
}

.dialog .close:active {
  opacity: 1;
}

.dialog .close.white {
  background: 0 0!important;
}

.dialog .close.white:after,
.dialog .close.white:before {
  background: #fff;
}

.dialog:hover .close {
  opacity: .2;
}

.dialog .close:hover,
.mobile .dialog .close {
  opacity: 1!important;
}

.dialog .dialogContent {
  padding: 20px;
}

.dialog .avatar {
  border-radius: 50px;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 15px;
}

.dialog .avatar+.text {
  width: calc(100% - 70px);
  margin-left: 70px;
}

.dialog .title {
  margin: 8px 0;
  font-weight: 500;
}

.dialog ul {
  display: table;
  width: 100%;
  font-size: 0;
  font-weight: 600;
  box-shadow: 0 1px 0 rgba(0,0,0,.1) inset;
}

.dialog .hiddenContent {
  overflow: hidden;
  display: block;
  max-height: 0;
  opacity: 0;
  transition: .5s;
}

html:not(.page-loaded) .dialog {
  transform: scale(.5) translateY(100%);
  opacity: 0;
}

.dialog.hover .hiddenContent,
.dialog:hover .hiddenContent {
  max-height: 90px;
  opacity: 1;
}

.dialog [data-dialog-action=close],
.dialog [data-href] {
  cursor: pointer;
}

.dialog li {
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  display: table-cell;
  width: 33.33333%;
  text-align: center;
  cursor: pointer;
  line-height: 1;
  vertical-align: middle;
  text-decoration: none;
  border-bottom: none;
  transition: .25s;
  box-shadow: inset 0 -100px 0 rgba(41,41,41,0);
}

.dialog li .material-icons {
  position: relative;
  margin-bottom: 13px;
  top: 6px;
  margin-right: 8px;
}

.dialog li .material-icons.right {
  margin-right: 0;
  margin-left: 8px;
}

.dialog li svg {
  width: 20px;
  height: 20px;
  margin-bottom: -6px;
  margin-right: 8px;
  position: relative;
  top: -2px;
}

.dialog li svg.right {
  margin-right: 0;
  margin-left: 8px;
}

.dialog li {
  border-left: 1px solid rgba(0,0,0,.1);
}

.dialog li:first-child {
  border-left: none;
}

.dialog li:hover {
  box-shadow: inset 0 -100px 0 rgba(0,0,0,.05);
}

.dialog li input {
  font-size: 16px;
  width: 250px;
  border: none;
  padding: 13px 5px 16px 15px;
  outline: 0;
  margin: 1px 0 0 0;
  color: #202020;
  height: 50px;
  box-shadow: none!important;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

@media (max-width:414px) {
  .dialog {
    margin: 10px;
    max-width: 100%;
  }
}

.dialogContainer:not(.bottom) .dialog+.dialog {
  margin-bottom: 0;
}

.dialogContainer.bottom .dialog+.dialog {
  margin-top: 0;
}

.dialog.bottom,
.dialogContainer.bottom {
  top: inherit;
  bottom: 0;
}

.dialog.left,
.dialogContainer.left {
  right: inherit;
  left: 2;
}

.svg-5 {
  padding-bottom: 27%;
}

.iphone-5.shiftImage {
  margin: 0 0 -129%;
}

.ipad-6.shiftImage {
  margin: 0 0 -70%;
}

.button.play.button-7 {
  margin: 0 30px;
}

@media (max-width:1279px) {
  .button.play.button-7 {
    display: block;
    margin: 30px auto;
  }
}

@media (min-width:768px) {
  form.slides-form .input-8 {
    max-width: 220px;
  }
}

@media (min-width:768px) {
  form.slides-form .input-9 {
    max-width: 220px;
  }
}

@media (min-width:768px) {
  form.slides-form .input-12 {
    max-width: 220px;
  }
}

form input[type=email].input-13,
form input[type=name].input-13,
form input[type=text].input-13 {
  max-width: 300px;
}

@media (max-width:1023px) {
  .cell-16 {
    padding-bottom: 35px;
  }
}

.cell-17 {
  padding-bottom: 25px;
}

.header-18 {
  font-size: 70px;
}

.video-18 {
  margin-top: 34px;
}

.icon-26 {
  margin-right: 4px;
}

.app-26 {
  width: 70px;
  position: absolute;
  left: 0;
}

.text-26 {
  margin-left: 95px;
  margin-top: 35px;
}

@media (min-width:1024px) {
  .text-26 {
    max-width: 360px;
  }
}

.cell-26 {
  margin-top: 22px;
}

@media (min-width:1024px) {
  .cell-26 {
    padding-bottom: 40px;
  }
}

.app-27 {
  width: 100px;
  padding-bottom: 20px;
}

.icon-27 {
  margin-right: 4px;
}

.cell-27 {
  margin-top: -22px;
}

@media (max-width:1023px) {
  .cell-27 {
    padding-bottom: 40px;
  }
}

.text-27 {
  margin-left: 95px;
  margin-top: 35px;
}

@media (min-width:1024px) {
  .text-27 {
    max-width: 360px;
  }
}

@media (min-width:768px) {
  .iphone-28 {
    margin-top: -228px;
    margin-bottom: -228px;
  }
}

@media (max-width:767px) {
  .cell-28 {
    padding-bottom: 35px;
  }
}

@media (min-width:768px) {
  .iphone-29 {
    margin-top: -228px;
    margin-bottom: -228px;
  }
}

@media (max-width:767px) {
  .cell-29 {
    padding-bottom: 35px;
  }
}

.quote-31 {
  padding-left: 95px;
}

.image-31 {
  padding-top: 35px;
}

.avatar-31 {
  border-radius: 50px;
  position: absolute;
  margin-left: 7px;
}

@media (min-width:1024px) {
  .ipad-31 {
    margin: -10% 0 -115%;
    max-width: none;
  }
}

@media (min-width:1024px) {
  .ipad-32 {
    margin: -10% 0 -115%;
    max-width: none;
  }
}

@media (max-width:1023px) {
  .cell-32 {
    padding-bottom: 40px;
  }
}

@media (min-width:1024px) {
  .ipad-33 {
    margin: -10% 0 -115%;
    max-width: none;
  }
}

@media (max-width:1023px) {
  .cell-33 {
    padding-bottom: 40px;
  }
}

.iphone-35 {
  margin-bottom: -45%;
}

.ipad-36 {
  margin: -10px 0 -50%;
}

.avatar-41 {
  border-radius: 50px;
  margin: 10px 5px 5px;
}

.form-42 {
  max-width: 500px;
  margin: 0 auto;
}

@media (min-width:1024px) {
  .form-42 .form-42-input-1 input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .form-42 .form-42-input-2 input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    position: relative;
    left: -1px;
  }
}

p.remind-43 {
  max-width: 350px;
  line-height: 1.29;
  margin: 13px auto;
  text-align: center;
}

.fix-45 {
  max-width: 210px;
}

@media (max-width:767px) {
  .box-46 {
    margin-bottom: 30px;
  }
}

.slide.whiteSlide .box-46 .shadow {
  box-shadow: none;
}

.grid-47 .material-icons {
  margin-bottom: 15px;
  margin-top: 15px;
  font-size: 36px;
}

.grid-48 .material-icons {
  margin-bottom: 30px;
  margin-top: 15px;
  font-size: 72px;
}

.grid-49 .material-icons {
  margin-bottom: 10px;
  margin-top: 15px;
  font-size: 72px;
}

.form-55 {
  max-width: 500px;
  margin: 0 auto;
}

@media (min-width:1024px) {
  .form-55 .form-55-input-1 input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-left: 0;
  }

  .form-55 .form-55-input-2 input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: 0;
    position: relative;
    left: -1px;
  }
}

.form-55 [data-success-class=message-sent].message-sent {
  background: #4caf50!important;
}

.pad-59 {
  border-radius: 6px;
  padding: 6%;
}

.grid-61 .material-icons {
  margin-bottom: 10px;
  margin-top: 15px;
  font-size: 36px;
}

@media (min-width:1024px) {
  img.macbook-61 {
    margin: -15% -100% -30% -135%!important;
    width: 225%;
    max-width: none;
  }
}

.grid-62 .material-icons {
  margin-bottom: 10px;
  margin-top: 15px;
  font-size: 48px;
}

@media (min-width:1024px) {
  img.macbook-62 {
    margin: -15% -100% -30% 10%!important;
    width: 225%;
    max-width: none;
  }
}

@media (max-width:1023px) {
  .image-62 {
    padding-top: 35px;
  }
}

.grid-64 {
  padding-top: 15px;
}

.grid-64 .material-icons {
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 36px;
}

.grid-64>li:not(:last-child) {
  margin-bottom: 20px;
}

.grid-64 .cell-64 {
  padding: 20px 30px;
  position: relative;
  display: block;
  transition: .25s;
  border: 1px solid rgba(255,255,255,.3);
  text: #fff;
}

.grid-64 .cell-64.rounded {
  border-radius: 6px;
}

.grid-64 .cell-64:hover {
  background: #fff;
  color: #202020;
  opacity: 1;
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  border-color: transparent!important;
}

.slide.whiteSlide .grid-64 .cell-64 {
  border: 1px solid #e5e5e5;
}

.grid.grid-65>li {
  position: relative;
  padding-left: 55px;
  padding-bottom: 30px;
}

.grid-65 .material-icons {
  position: absolute;
  left: 0;
  top: -5px;
  font-size: 36px;
}

@media (max-width:767px) {
  .grid.grid-65>li {
    padding-left: 60px;
  }

  .grid-65 .material-icons {
    left: 0;
  }
}

.box-67 {
  color: #202020;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
  display: block;
  outline: 0;
  margin-bottom: 35px;
  -webkit-backface-visibility: hidden;
}

.box-67 .thumbnail-67 {
  font-size: 0;
  overflow: hidden;
}

.box-67 .thumbnail-67 img {
  border-radius: 6px 6px 0 0;
  backface-visibility: hidden;
  transition: .35s;
}

.box-67:hover {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  opacity: .95;
}

.box-67:hover .thumbnail-67 img {
  transform: scale(1.0225);
}

.box-67 .name-67 {
  padding: 19px 15px 25px;
  background: #fff;
}

.slide.whiteSlide .tintLogos {
  filter: brightness(.2);
}

.slide:not(.whiteSlide) .tintLogos {
  filter: brightness(1.3);
}

.grid-68 a {
  display: inline-block;
  margin-top: 14px;
  margin-bottom: 14px;
  opacity: .9;
  transition: opacity .1s ease-in,transform .15s cubic-bezier(.5,0,.25,2.5);
}

.grid-68 a:hover {
  opacity: 1;
  transform: scale(1.05);
}

.grid-69 {
  margin-left: -8px;
  margin-right: -8px;
}

.grid-69 [class*=col-] {
  padding-bottom: 10px;
  padding-top: 10px;
}

.grid-69 [class*=col-].selected {
  cursor: pointer;
  pointer-events: all;
}

.grid-69 .box-69 {
  display: block;
  height: 0;
  padding-bottom: 100%;
  position: relative;
  background-size: cover;
  cursor: -webkit-zoom-in;
  color: #fff;
}

.grid-69 .box-69.rounded {
  overflow: hidden;
  border-radius: 6px;
}

.grid-69 .box-69:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #cdced2;
  opacity: 0;
  transition: .5s;
}

.grid-69 .box-69 .cell-69 {
  outline: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 20px;
  z-index: 10;
  opacity: 0;
  transition: .5s;
  color: #202020;
  transform: translateY(10px);
}

.grid-69 .box-69:hover {
  opacity: 1;
}

.grid-69 .box-69:hover .cell-69 {
  opacity: 1;
  transform: translateY(0);
}

.grid-69 .box-69:hover:after {
  opacity: .98;
}

.info-70 {
  padding: 13%;
}

.grid-71 {
  padding-top: 15px;
}

.grid-71 .material-icons {
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 36px;
}

.grid-71>li:not(:last-child) {
  margin-bottom: 20px;
}

.grid-71 .cell-71 {
  padding: 20px 30px;
  position: relative;
  display: block;
  transition: .25s;
  border: 1px solid rgba(255,255,255,.3);
  text: #fff;
}

.grid-71 .cell-71.rounded {
  border-radius: 6px;
}

.grid-71 .cell-71:hover {
  background: #fff;
  color: #202020;
  opacity: 1;
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  border-color: transparent!important;
}

.slide.whiteSlide .grid-71 .cell-71 {
  border: 1px solid #e5e5e5;
}

.grid-73 {
  padding-top: 15px;
}

.grid-73 .material-icons {
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 36px;
}

.grid-73>li:not(:last-child) {
  margin-bottom: 20px;
}

.grid-73 .cell-73 {
  padding: 20px 30px;
  position: relative;
  display: block;
  transition: .25s;
  border: 1px solid rgba(255,255,255,.3);
  text: #fff;
}

.grid-73 .cell-73.rounded {
  border-radius: 6px;
}

.grid-73 .cell-73:hover {
  background: #fff;
  color: #202020;
  opacity: 1;
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  border-color: transparent!important;
}

.slide.whiteSlide .grid-73 .cell-73 {
  border: 1px solid #e5e5e5;
}

.image-73.shiftImageVertical.shiftImage {
  margin: -13% 0 -6%;
}

.grid.grid-74 {
  margin-left: -12px;
  margin-right: -12px;
}

.grid.grid-74>[class*=col-] {
  padding-left: 12px;
  padding-right: 12px;
}

.box-74 {
  color: #202020;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
  display: block;
  outline: 0;
  margin-bottom: 25px;
  -webkit-backface-visibility: hidden;
}

.box-74:hover {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  opacity: .95;
}

.box-74 .name-74 {
  padding: 20px 20px 30px 20px;
  background: #fff;
  border-radius: 0 0 6px 0;
}

.box-74 .thumbnail-74 {
  font-size: 0;
  line-height: 0;
  overflow: hidden;
}

.box-74 .thumbnail-74 img {
  border-radius: 6px 6px 0 0;
  transition: .5s;
}

.slider[data-slider-id="75-0"].animated.fromAbove [class*=ae-]:not(.done) {
  transform: scale(1) translate3d(0,0,0);
}

.button.button-76 {
  width: 54px;
  height: 54px;
  padding: 17px 19px;
  font-size: 0;
}

.button.button-76 svg {
  width: 18px;
  height: 18px;
}

@media (min-width:1024px) {
  .iphone-76 {
    max-width: none;
    margin-top: 60px;
  }
}

.text-76 {
  line-height: 1.75;
  opacity: 1;
  margin: 0;
  margin-left: 77px;
  padding-top: 3px;
}

@media (max-width:569px) {
  .button.button-76,
  .text-76 {
    float: left;
  }

  .text-76 strong {
    display: block;
  }

  .text-76 {
    font-size: 20px;
    top: -4px;
  }
}

.grid.grid-77 {
  margin-left: -12px;
  margin-right: -12px;
}

.grid.grid-77>[class*=col-] {
  padding-left: 12px;
  padding-right: 12px;
}

@media (max-width:1278px) {
  .grid.grid-77>[class*=col-] {
    max-width: 50%;
  }
}

.box-77 {
  color: #202020;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
  display: block;
  outline: 0;
  margin: 10px 0;
  -webkit-backface-visibility: hidden;
}

.box-77:hover {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  opacity: 1;
}

.box-77 .thumbnail-77 {
  font-size: 0;
  line-height: 0;
  overflow: hidden;
  position: relative;
}

.box-77 .thumbnail-77 img {
  border-radius: 6px 6px 0 0;
  -webkit-backface-visibility: hidden;
  transition: .5s;
}

.box-77 .thumbnail-77.video:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/svg/video-icon.svg") no-repeat;
  background-size: 54px;
  background-position: center center;
  transition: .35s;
}

.box-77:hover .thumbnail-77.video:after {
  background-color: rgba(0,0,0,.1);
  transform: scale(1.1);
}

.box-77 .author-77 {
  background: #fff;
  border-top: 1px solid #ebebeb;
  padding-top: 18px;
  margin-top: 25px;
  position: relative;
  padding-left: 40px;
  padding-bottom: 2px;
}

.box-77 .avatar-77 {
  position: absolute;
  top: 15px;
  left: 0;
  border-radius: 50px;
}

.details-77 {
  padding: 20px 18px 15px;
  background: #fff;
  border-radius: 0 0 6px 0;
}

.details-77 .cell {
  text-align: left;
}

.text-78 {
  font-size: 17px;
  letter-spacing: .5px;
  margin-top: 7px;
}

.quote-79 {
  font-size: 85px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 10px;
  font-family: serif;
}

.author-79 {
  position: relative;
  margin: 0 auto;
  max-width: 300px;
  padding-left: 85px;
  padding-top: 5px;
}

.author-79 .avatar-79 {
  position: absolute;
  top: 0;
  left: 0;
}

.author-79 h3 {
  margin-bottom: 10px;
}

.grid-79>[class*=col-] {
  position: relative;
  padding: 5px 30px 0 55px;
}

.grid-79>[class*=col-] .material-icons {
  font-size: 35px;
  margin-bottom: 13px;
  position: absolute;
  left: 0;
  top: 0;
}

.grid-80>[class*=col-] {
  margin-bottom: 25px;
}

.box-80 {
  border: 1px solid rgba(255,255,255,.3);
}

.box-80.rounded {
  border-radius: 6px;
}

.slide.whiteSlide .box-80 {
  border-color: #e5e5e5;
}

.leftControl-82,
.rightControl-82 {
  position: absolute;
  top: 50%;
  margin-top: -56px;
  margin-left: -60px;
  cursor: pointer;
  transition: .35s;
}

.leftControl-82 svg,
.rightControl-82 svg {
  width: 29px;
  height: 56px;
}

.leftControl-82:active,
.leftControl-82:hover,
.rightControl-82:active,
.rightControl-82:hover {
  opacity: .3;
}

@media (max-width:768px) {
  .leftControl-82,
  .rightControl-82 {
    display: none;
  }
}

.rightControl-82 {
  right: 0;
  margin-right: -60px;
}

.grid.grid-83 {
  color: #202020;
  margin-top: 50px;
}

@media (min-width:1024px) {
  .grid.grid-83 {
    border-radius: 6px;
    overflow: hidden;
  }

  .slide.whiteSlide .grid.grid-83 {
    box-shadow: 0 0 1px rgba(48,48,48,.54);
  }
}

@media (max-width:1023px) {
  .grid.grid-83 {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
}

.grid.grid-83>[class*=col-] {
  position: relative;
  background: #fff;
  overflow: hidden;
  box-shadow: -1px 0 0 #ebebeb inset;
}

@media (max-width:1023px) {
  .grid.grid-83>[class*=col-] {
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 0 1px rgba(48,48,48,.54);
    border-radius: 6px;
  }
}

@media (min-width:1024px) {
  .grid.grid-83>[class*=col-] {
    padding: 50px;
    border-radius: 0;
  }

  .grid.grid-83>[class*=col-]:last-child {
    box-shadow: none;
  }
}

.grid.grid-84 {
  color: #202020;
  margin-top: 50px;
}

@media (min-width:1240px) {
  .grid.grid-84 {
    border-radius: 6px;
    overflow: hidden;
  }

  .slide.whiteSlide .grid.grid-84 {
    box-shadow: 0 0 1px rgba(48,48,48,.54);
  }
}

.grid.grid-84>[class*=col-] {
  position: relative;
  background: #fff;
  overflow: hidden;
  padding: 30px;
  box-shadow: -1px 0 0 #ebebeb inset;
}

@media (max-width:1239px) {
  .grid.grid-84>[class*=col-] {
    max-width: calc(50% - 20px)!important;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
    box-shadow: 0 0 1px rgba(48,48,48,.54);
    border-radius: 6px;
  }
}

@media (max-width:767px) {
  .grid.grid-84>[class*=col-] {
    max-width: 100%!important;
    margin-left: 0;
    margin-right: 0;
  }
}

@media (min-width:1240px) {
  .grid.grid-84>[class*=col-] {
    border-radius: 0;
  }

  .grid.grid-84>[class*=col-]:last-child {
    box-shadow: none;
  }
}

.grid.grid-85>[class*=col-] .pad {
  box-shadow: 0 0 1px rgba(48,48,48,.54);
}

.button.button-86 {
  width: 54px;
  height: 54px;
  padding: 17px 19px;
  font-size: 0;
}

.button.button-86 svg {
  width: 18px;
  height: 18px;
}

.text-86 {
  line-height: 1.75;
  opacity: 1;
  margin: 0;
  margin-left: 77px;
  padding-top: 3px;
}

@media (max-width:569px) {
  .button.button-86,
  .text-86 {
    float: left;
  }

  .text-86 strong {
    display: block;
  }

  .text-86 {
    font-size: 20px;
    top: -4px;
  }
}

.frame-93 {
  padding: 50px 40px;
  border: 1px solid rgba(255,255,255,.3);
  text-align: center;
  display: inline-block;
}

.frame-93.rounded {
  border-radius: 6px;
}

.slide.whiteSlide .frame-93 {
  border: 1px solid rgba(0,0,0,.1);
}

@media (max-width:1023px) {
  .frame-93 {
    text-align: center;
  }

  .button.button-93 {
    margin: 30px 0 0;
  }
}

@media (max-width:499px) {
  .slide .frame-93 {
    padding: 30px;
    border: none!important;
  }
}

.quoteBubble {
  padding: 7%;
  background: #fff;
  font-size: 26px;
  border-radius: 6px;
  color: #202020;
  position: relative;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
}

.quoteBubble:after {
  content: "";
  position: absolute;
  bottom: -12px;
  left: 6%;
  border-width: 13px 13px 0;
  border-style: solid;
  border-color: #fff transparent;
  display: block;
  width: 0;
}

.quoteBubble:before {
  content: "";
  position: absolute;
  bottom: -13px;
  left: 6%;
  border-width: 13px 13px 0;
  border-style: solid;
  border-color: rgba(0,0,0,.2) transparent;
  display: block;
  width: 0;
}

.address {
  letter-spacing: -1.5px;
  font-size: 30px;
  line-height: 1.1666;
}

.price {
  font-size: 110px;
  line-height: 1.26;
  margin-bottom: 20px;
  font-weight: 200;
}

.currency {
  font-size: 32px;
  vertical-align: super;
  font-weight: 300;
  padding-right: 10px;
  margin-left: -.8em;
  font-weight: 300;
  opacity: .6;
  position: relative;
  top: -.5em;
}

.social-circles li {
  display: inline-block;
  padding: 5px;
}

.social-circles li a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.social-circles li a svg {
  width: 16px;
  height: 16px;
  fill: #fff;
}

.social-circles li a:hover {
  opacity: 1;
  transform: scale(1.1);
}

.text-justify {
  text-align: justify;
}

.slide.whiteSlide a.button.text-white {
  color: #202020!important;
}

.slide.whiteSlide .thumbnail-98 {
  color: #fff;
}

.slide.whiteSlide .thumbnail-99 {
  color: #fff;
}

.music-96 .sc-artwork-list,
.music-96 .sc-controls .hidden,
.music-96 .sc-info,
.music-96 .sc-info-toggle,
.music-96 .sc-time-indicators,
.music-96 .sc-volume-slider {
  display: none;
}

.music-96 .sc-player:not(:last-child) {
  margin-bottom: 15px;
}

.music-96 .sc-play {
  background-image: url("../assets/svg/play.svg");
  border: 1px solid rgba(0,0,0,.5);
  font-size: 0;
  width: 28px;
  height: 28px;
  display: inline-block;
  float: left;
  margin-right: 12px;
  background-color: #fff;
  border-radius: 20px;
  background-size: 50%;
  background-position: center center;
  background-repeat: no-repeat;
}

.music-96 .sc-track-duration {
  float: right;
  font-size: 20px;
  font-weight: 300;
  opacity: .8;
}

.music-96 .sc-player:not(.playing) .sc-time-span {
  opacity: 0;
}

.music-96 .sc-time-span {
  position: relative;
  display: block;
}

.music-96 .sc-buffer,
.music-96 .sc-played {
  background: rgba(255,255,255,.4);
  position: absolute;
  z-index: 1;
  top: -1px;
}

.music-96 .sc-player .sc-waveform-container {
  position: absolute;
  top: 0;
  font-size: 0;
  background: rgba(255,255,255,.2);
  cursor: pointer;
}

.music-96 .sc-player .sc-waveform-container img {
  opacity: 0;
  width: 100%;
}

.music-96 .sc-trackslist {
  border-bottom: 1px solid rgba(255,255,255,.2);
  margin-top: 15px;
}

.music-96 .sc-trackslist a {
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 15px;
  display: inline-block;
  max-width: 78%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.music-96 .sc-buffer,
.music-96 .sc-played,
.music-96 .sc-player .sc-waveform-container,
.music-96 .sc-trackslist .sc-time-span {
  height: 2px;
}

.music-96 .sc-buffer,
.music-96 .sc-play,
.music-96 .sc-played,
.music-96 .sc-time-span {
  -webkit-transition: .35s;
  transition: .35s;
}

.music-96 .sc-player.playing .sc-play {
  background-color: rgba(255,255,255,.8);
}

.music-96 .sc-player.playing .sc-played {
  background: #fafafa;
  background: -moz-linear-gradient(left,#fafafa 0,#fff 100%);
  background: -webkit-linear-gradient(left,#fafafa 0,#fff 100%);
  background: linear-gradient(to right,#fafafa 0,#fff 100%);
}

.slide.whiteSlide .music-96 .sc-buffer,
.slide.whiteSlide .music-96 .sc-played {
  background: rgba(0,0,0,.2);
  position: absolute;
  z-index: 1;
  top: -1px;
}

.slide.whiteSlide .music-96 .sc-trackslist {
  border-bottom: 1px solid rgba(0,0,0,.2);
}

.slide.whiteSlide .music-96 .sc-player.playing .sc-play {
  background-color: rgba(0,0,0,.1);
}

.slide.whiteSlide .music-96 .sc-player.playing .sc-played {
  background: #050505;
  background: -moz-linear-gradient(left,#050505 0,#000 100%);
  background: -webkit-linear-gradient(left,#050505 0,#000 100%);
  background: linear-gradient(to right,#050505 0,#000 100%);
}

@media (max-width:480px) {
  .music-96 .sc-trackslist a {
    max-width: 67%;
    font-size: 14px;
    margin-top: 5px;
  }
}

.calendar-97 {
  width: 52px;
  height: 52px;
  padding: 8px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,.4);
  left: 0;
  cursor: default;
  pointer-events: none;
}

.calendar-97:hover {
  transform: translateY(0)!important;
}

.slide.whiteSlide .frame-97 {
  border-bottom: 1px solid rgba(0,0,0,.2);
}

.frame-97 {
  width: 100%;
  border-bottom: 1px solid rgba(255,255,255,.3);
}

.frame-97:last-child {
  border-bottom: none;
}

.frame-97 .small .thin-stroke {
  cursor: default;
}

.frame-97 .thin-stroke:hover {
  transform: translateY(0)!important;
}

.calendar-97 .month {
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1px;
  opacity: .8;
}

.calendar-97 .number {
  font-size: 22px;
  line-height: 26px;
  font-weight: 400;
}

.button-buy-97 {
  float: right;
}

.title-group {
  min-width: 49%;
  display: inline-block;
}

.dislocation {
  font-size: 20px;
  display: inline-block;
}

@media (max-width:991px) {
  .title-group {
    min-width: 37%;
    font-size: 22px;
    margin-left: 80px!important;
  }
}

@media (max-width:767px) {
  .frame-97 {
    min-height: 220px;
  }

  .frame-97 h2 {
    text-align: center!important;
  }

  .title-group {
    margin-left: 0!important;
    margin-top: 60px;
    display: block;
  }

  .frame-97 .calendar-97 {
    left: calc(50% - 5px);
    transform: translateX(-50%);
  }

  .dislocation {
    margin-top: 10px;
    display: block;
  }

  .button-buy-97 {
    float: none;
    display: inline-block;
    margin-top: 20px;
  }
}

a.box-98:active,
a.box-98:focus {
  outline: 0;
}

.thumbnail-98 {
  position: relative;
}

.thumbnail-98 img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
}

.wrap-img-100 .blackout {
  height: 100%;
}

.blackout {
  position: absolute;
  top: 0;
  width: 100%;
  height: 99.2%;
  border-radius: 6px;
  border: none;
  background-color: rgba(0,0,0,.4);
  z-index: 10;
}

.title-slide-98 {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  letter-spacing: 2.5px;
  opacity: .6;
  z-index: 15;
}

.subtitle-slide-98 {
  position: absolute;
  width: 70%;
  top: 45%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  line-height: 26px;
  z-index: 15;
}

a.box-99:active,
a.box-99:focus {
  outline: 0;
}

.thumbnail-99 {
  position: relative;
}

.thumbnail-99 img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.thumbnail-99 .date-slide-99 img {
  display: inline-block;
  margin-right: 5px;
  width: 12px;
  height: 12px;
}

.blackout-sl-4 {
  position: absolute;
  top: 0;
  width: 100%;
  height: 99.2%;
  border-radius: 4px;
  border: none;
  background: linear-gradient(to bottom,transparent,rgba(0,0,0,.4));
  z-index: 10;
}

.title-slide-99 {
  position: absolute;
  text-align: left;
  width: 80%;
  bottom: 12%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  line-height: 26px;
  z-index: 15;
}

.date-slide-99 {
  position: absolute;
  bottom: 0;
  z-index: 15;
  text-align: left;
  width: 85%;
  left: 50%;
  transform: translateX(-50%);
}

.date-slide-99 span {
  display: inline-block;
  font-size: 14px;
  opacity: .4;
}

.tiny .small-watch {
  margin-bottom: -2px;
  font-size: 14px;
}

.tiny .date-small {
  font-size: 14px;
  vertical-align: 2px;
}

.cell-100 {
  border: 1px solid rgba(255,255,255,.2);
  transition: .3s;
}

.cell-100:hover {
  transform: translateY(-2px);
}

.cell-100 .tiny {
  font-size: 0;
  line-height: 0;
  margin-bottom: 0;
}

.item-100 {
  width: 100%;
  height: 100%;
  display: block;
  padding: 30px;
}

.slide.whiteSlide .cell-100 {
  border: 1px solid rgba(0,0,0,.2);
}

.slide.whiteSlide .wrap-text-100 {
  color: #fff;
}

.wrap-img-100 {
  position: relative;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/image-100.png");
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center center;
}

.wrap-text-100 {
  position: absolute;
  z-index: 15;
  bottom: 35px;
  padding-right: 40px;
  padding-left: 40px;
}

.wrap-text-100 h3 {
  font-size: 22px;
  line-height: 36px;
  opacity: .8;
  font-weight: 300;
}

@media (max-width:767px) {
  .wrap-text-100 {
    position: relative;
    bottom: 0;
    padding-top: 30px;
    padding-bottom: 20px;
  }

  .wrap-text-100 h1 {
    font-size: 30px;
  }

  .wrap-text-100 h3 {
    font-size: 16px;
    line-height: 20px;
  }

  .flex-slide-100 {
    margin-left: 0;
    margin-right: 0;
    padding-left: 0!important;
  }
}

.slick-dots {
  bottom: -35px!important;
}

.slick-dots li {
  margin: 0!important;
}

.slick-dots li button:before {
  color: #fff!important;
}

.slick-dots li.slick-active button:before {
  color: #fff!important;
}

.whiteSlide .slick-dots li button:before {
  color: #000!important;
}

.whiteSlide .slick-dots li.slick-active button:before {
  color: #000!important;
}

.slick-next,
.slick-prev {
  width: 29px!important;
  height: 55px!important;
}

.slick-prev {
  left: -45px!important;
}

.slick-next {
  right: -45px!important;
}

span.prev-arrow svg {
  position: absolute;
  left: -45px;
  top: 50%;
  transform: translateY(-50%);
  width: 29px;
  height: 55px;
  cursor: pointer;
}

span.next-arrow svg {
  position: absolute;
  right: -45px;
  top: 50%;
  transform: translateY(-50%);
  width: 29px;
  height: 55px;
  cursor: pointer;
}

.swiper-pagination {
  position: static!important;
}

.swiper-container-horizontal>.swiper-pagination-bullets {
  margin-top: 15px;
}

.swiper-pagination-bullet,
.swiper-pagination-bullet-active {
  background-color: #fff!important;
}

.whiteSlide .swiper-pagination-bullet,
.whiteSlide .swiper-pagination-bullet-active {
  background-color: #000!important;
}

.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 8px!important;
}

.swiper-container-2,
.swiper-container-3,
.swiper-container-4 {
  overflow: hidden;
}

.table {
  display: table;
  width: 100%;
  height: 100%;
}

.cell {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.scroll-x {
  overflow-x: scroll;
}

.scroll-y {
  overflow-y: scroll;
}

.overflow-hidden,
.scroll-hidden {
  overflow: hidden;
}

.overflow-reset {
  overflow: auto!important;
}

.uppercase {
  text-transform: uppercase!important;
}

.italic {
  font-style: italic!important;
}

.thin,
.ultraLight {
  font-weight: 100!important;
}

.light {
  font-weight: 300!important;
}

.normal {
  font-weight: 400!important;
}

.semiBold {
  font-weight: 500!important;
}

.bold {
  font-weight: 600!important;
}

.ultraBold {
  font-weight: 900!important;
}

.noText {
  font-size: 0;
}

.align-top,
.top {
  vertical-align: top!important;
}

.align-left,
.left {
  text-align: left!important;
}

.align-right,
.right {
  text-align: right!important;
}

.align-center,
.center {
  text-align: center!important;
}

.middle {
  vertical-align: middle!important;
}

.bottom {
  vertical-align: bottom!important;
}

.rtl {
  direction: rtl;
  unicode-bidi: embed;
}

.position-left {
  left: 0;
}

.position-top {
  top: 0;
}

.position-bottom {
  bottom: 0;
}

.position-right {
  right: 0;
}

.float-right {
  float: right!important;
}

.float-left {
  float: left!important;
}

.float-none {
  float: none!important;
}

.slides.firstSlide .hideForFirstSlide,
.slides.lastSlide .hideForLastSlide {
  display: none;
}

.block {
  display: block!important;
}

.inlineBlock {
  display: inline-block!important;
}

.inline {
  display: inline!important;
}

.relative {
  position: relative!important;
}

.absolute {
  position: absolute!important;
}

.fixed {
  position: fixed!important;
}

.nowrap {
  white-space: nowrap;
}

.wide {
  width: 100%!important;
}

.hidden {
  display: none;
}

.nobr {
  white-space: nowrap;
}

[class*=shift-] {
  position: relative;
}

.shift-up-1 {
  top: -1px;
}

.shift-up-2 {
  top: -2px;
}

.shift-up-3 {
  top: -3px;
}

.shift-up-4 {
  top: -4px;
}

.shift-up-5 {
  top: -5px;
}

.shift-down-1 {
  top: 1px;
}

.shift-down-2 {
  top: 2px;
}

.shift-down-3 {
  top: 3px;
}

.shift-down-4 {
  top: 4px;
}

.shift-down-5 {
  top: 5px;
}

.shift-left-1 {
  left: -1px;
}

.shift-left-2 {
  left: -2px;
}

.shift-left-3 {
  left: -3px;
}

.shift-left-4 {
  left: -4px;
}

.shift-left-5 {
  left: -5px;
}

.shift-right-1 {
  left: 1px;
}

.shift-right-2 {
  left: 2px;
}

.shift-right-3 {
  left: 3px;
}

.shift-right-4 {
  left: 4px;
}

.shift-right-5 {
  left: 5px;
}

@media (max-width:1023px) {
  .wideForTablet {
    width: 100%!important;
    margin-left: 0!important;
    margin-right: 0!important;
  }
}

@media (max-width:767px) {
  .wideForPhablet {
    width: 100%!important;
    margin-left: 0!important;
    margin-right: 0!important;
  }
}

@media (max-width:435px) {
  .wideForPhone {
    width: 100%!important;
    margin-left: 0!important;
    margin-right: 0!important;
  }
}

.round {
  border-radius: 999px!important;
}

.rounded {
  border-radius: 6px!important;
}

.rectangular {
  border-radius: 0!important;
}

.opacity-0 {
  opacity: 0!important;
}

.opacity-1 {
  opacity: .1!important;
}

.opacity-2 {
  opacity: .2!important;
}

.opacity-3 {
  opacity: .3!important;
}

.opacity-4 {
  opacity: .4!important;
}

.opacity-5 {
  opacity: .5!important;
}

.opacity-6 {
  opacity: .6!important;
}

.opacity-7 {
  opacity: .7!important;
}

.opacity-8 {
  opacity: .8!important;
}

.opacity-9 {
  opacity: .9!important;
}

.opacity-10,
.opaque {
  opacity: 1!important;
}

.transparent {
  background: 0 0!important;
}

.crop {
  margin: 0!important;
}

.cropBottom {
  margin-bottom: 0!important;
}

.cropTop {
  margin-top: 0!important;
}

.cropLeft,
.cropSides {
  margin-left: 0!important;
}

.cropRight,
.cropSides {
  margin-right: 0!important;
}

.trim {
  padding: 0!important;
}

.trimBottom {
  padding-bottom: 0!important;
}

.trimTop {
  padding-top: 0!important;
}

.trimLeft,
.trimSides {
  padding-left: 0!important;
}

.trimRight,
.trimSides {
  padding-right: 0!important;
}

.padding-0 {
  padding: 0!important;
}

.padding-1 {
  padding: 10px!important;
}

.padding-2 {
  padding: 20px!important;
}

.padding-3 {
  padding: 30px!important;
}

.padding-4 {
  padding: 40px!important;
}

.padding-5 {
  padding: 50px!important;
}

.padding-6 {
  padding: 60px!important;
}

.padding-7 {
  padding: 70px!important;
}

.padding-8 {
  padding: 80px!important;
}

.padding-9 {
  padding: 90px!important;
}

.padding-10 {
  padding: 100px!important;
}

.padding-11 {
  padding: 110px!important;
}

.padding-12 {
  padding: 120px!important;
}

.padding-13 {
  padding: 130px!important;
}

.padding-14 {
  padding: 140px!important;
}

.padding-15 {
  padding: 150px!important;
}

.padding-16 {
  padding: 160px!important;
}

.padding-17 {
  padding: 170px!important;
}

.padding-18 {
  padding: 180px!important;
}

.padding-19 {
  padding: 190px!important;
}

.padding-20 {
  padding: 200px!important;
}

.padding-top-0 {
  padding-top: 0!important;
}

.padding-top-1 {
  padding-top: 10px!important;
}

.padding-top-2 {
  padding-top: 20px!important;
}

.padding-top-3 {
  padding-top: 30px!important;
}

.padding-top-4 {
  padding-top: 40px!important;
}

.padding-top-5 {
  padding-top: 50px!important;
}

.padding-top-6 {
  padding-top: 60px!important;
}

.padding-top-7 {
  padding-top: 70px!important;
}

.padding-top-8 {
  padding-top: 80px!important;
}

.padding-top-9 {
  padding-top: 90px!important;
}

.padding-top-10 {
  padding-top: 100px!important;
}

.padding-top-11 {
  padding-top: 110px!important;
}

.padding-top-12 {
  padding-top: 120px!important;
}

.padding-top-13 {
  padding-top: 130px!important;
}

.padding-top-14 {
  padding-top: 140px!important;
}

.padding-top-15 {
  padding-top: 150px!important;
}

.padding-top-16 {
  padding-top: 160px!important;
}

.padding-top-17 {
  padding-top: 170px!important;
}

.padding-top-18 {
  padding-top: 180px!important;
}

.padding-top-19 {
  padding-top: 190px!important;
}

.padding-top-20 {
  padding-top: 200px!important;
}

.padding-right-0 {
  padding-right: 0!important;
}

.padding-right-1 {
  padding-right: 10px!important;
}

.padding-right-2 {
  padding-right: 20px!important;
}

.padding-right-3 {
  padding-right: 30px!important;
}

.padding-right-4 {
  padding-right: 40px!important;
}

.padding-right-5 {
  padding-right: 50px!important;
}

.padding-right-6 {
  padding-right: 60px!important;
}

.padding-right-7 {
  padding-right: 70px!important;
}

.padding-right-8 {
  padding-right: 80px!important;
}

.padding-right-9 {
  padding-right: 90px!important;
}

.padding-right-10 {
  padding-right: 100px!important;
}

.padding-right-11 {
  padding-right: 110px!important;
}

.padding-right-12 {
  padding-right: 120px!important;
}

.padding-right-13 {
  padding-right: 130px!important;
}

.padding-right-14 {
  padding-right: 140px!important;
}

.padding-right-15 {
  padding-right: 150px!important;
}

.padding-right-16 {
  padding-right: 160px!important;
}

.padding-right-17 {
  padding-right: 170px!important;
}

.padding-right-18 {
  padding-right: 180px!important;
}

.padding-right-19 {
  padding-right: 190px!important;
}

.padding-right-20 {
  padding-right: 200px!important;
}

.padding-bottom-0 {
  padding-bottom: 0!important;
}

.padding-bottom-1 {
  padding-bottom: 10px!important;
}

.padding-bottom-2 {
  padding-bottom: 20px!important;
}

.padding-bottom-3 {
  padding-bottom: 30px!important;
}

.padding-bottom-4 {
  padding-bottom: 40px!important;
}

.padding-bottom-5 {
  padding-bottom: 50px!important;
}

.padding-bottom-6 {
  padding-bottom: 60px!important;
}

.padding-bottom-7 {
  padding-bottom: 70px!important;
}

.padding-bottom-8 {
  padding-bottom: 80px!important;
}

.padding-bottom-9 {
  padding-bottom: 90px!important;
}

.padding-bottom-10 {
  padding-bottom: 100px!important;
}

.padding-bottom-11 {
  padding-bottom: 110px!important;
}

.padding-bottom-12 {
  padding-bottom: 120px!important;
}

.padding-bottom-13 {
  padding-bottom: 130px!important;
}

.padding-bottom-14 {
  padding-bottom: 140px!important;
}

.padding-bottom-15 {
  padding-bottom: 150px!important;
}

.padding-bottom-16 {
  padding-bottom: 160px!important;
}

.padding-bottom-17 {
  padding-bottom: 170px!important;
}

.padding-bottom-18 {
  padding-bottom: 180px!important;
}

.padding-bottom-19 {
  padding-bottom: 190px!important;
}

.padding-bottom-20 {
  padding-bottom: 200px!important;
}

.padding-left-0 {
  padding-left: 0!important;
}

.padding-left-1 {
  padding-left: 10px!important;
}

.padding-left-2 {
  padding-left: 20px!important;
}

.padding-left-3 {
  padding-left: 30px!important;
}

.padding-left-4 {
  padding-left: 40px!important;
}

.padding-left-5 {
  padding-left: 50px!important;
}

.padding-left-6 {
  padding-left: 60px!important;
}

.padding-left-7 {
  padding-left: 70px!important;
}

.padding-left-8 {
  padding-left: 80px!important;
}

.padding-left-9 {
  padding-left: 90px!important;
}

.padding-left-10 {
  padding-left: 100px!important;
}

.padding-left-11 {
  padding-left: 110px!important;
}

.padding-left-12 {
  padding-left: 120px!important;
}

.padding-left-13 {
  padding-left: 130px!important;
}

.padding-left-14 {
  padding-left: 140px!important;
}

.padding-left-15 {
  padding-left: 150px!important;
}

.padding-left-16 {
  padding-left: 160px!important;
}

.padding-left-17 {
  padding-left: 170px!important;
}

.padding-left-18 {
  padding-left: 180px!important;
}

.padding-left-19 {
  padding-left: 190px!important;
}

.padding-left-20 {
  padding-left: 200px!important;
}

.margin-0 {
  margin: 0!important;
}

.margin-1 {
  margin: 10px!important;
}

.margin-2 {
  margin: 20px!important;
}

.margin-3 {
  margin: 30px!important;
}

.margin-4 {
  margin: 40px!important;
}

.margin-5 {
  margin: 50px!important;
}

.margin-6 {
  margin: 60px!important;
}

.margin-7 {
  margin: 70px!important;
}

.margin-8 {
  margin: 80px!important;
}

.margin-9 {
  margin: 90px!important;
}

.margin-10 {
  margin: 100px!important;
}

.margin-11 {
  margin: 110px!important;
}

.margin-12 {
  margin: 120px!important;
}

.margin-13 {
  margin: 130px!important;
}

.margin-14 {
  margin: 140px!important;
}

.margin-15 {
  margin: 150px!important;
}

.margin-16 {
  margin: 160px!important;
}

.margin-17 {
  margin: 170px!important;
}

.margin-18 {
  margin: 180px!important;
}

.margin-19 {
  margin: 190px!important;
}

.margin-20 {
  margin: 200px!important;
}

.margin-top-0 {
  margin-top: 0!important;
}

.margin-top-1 {
  margin-top: 10px!important;
}

.margin-top-2 {
  margin-top: 20px!important;
}

.margin-top-3 {
  margin-top: 30px!important;
}

.margin-top-4 {
  margin-top: 40px!important;
}

.margin-top-5 {
  margin-top: 50px!important;
}

.margin-top-6 {
  margin-top: 60px!important;
}

.margin-top-7 {
  margin-top: 70px!important;
}

.margin-top-8 {
  margin-top: 80px!important;
}

.margin-top-9 {
  margin-top: 90px!important;
}

.margin-top-10 {
  margin-top: 100px!important;
}

.margin-top-11 {
  margin-top: 110px!important;
}

.margin-top-12 {
  margin-top: 120px!important;
}

.margin-top-13 {
  margin-top: 130px!important;
}

.margin-top-14 {
  margin-top: 140px!important;
}

.margin-top-15 {
  margin-top: 150px!important;
}

.margin-top-16 {
  margin-top: 160px!important;
}

.margin-top-17 {
  margin-top: 170px!important;
}

.margin-top-18 {
  margin-top: 180px!important;
}

.margin-top-19 {
  margin-top: 190px!important;
}

.margin-top-20 {
  margin-top: 200px!important;
}

.margin-right-0 {
  margin-right: 0!important;
}

.margin-right-1 {
  margin-right: 10px!important;
}

.margin-right-2 {
  margin-right: 20px!important;
}

.margin-right-3 {
  margin-right: 30px!important;
}

.margin-right-4 {
  margin-right: 40px!important;
}

.margin-right-5 {
  margin-right: 50px!important;
}

.margin-right-6 {
  margin-right: 60px!important;
}

.margin-right-7 {
  margin-right: 70px!important;
}

.margin-right-8 {
  margin-right: 80px!important;
}

.margin-right-9 {
  margin-right: 90px!important;
}

.margin-right-10 {
  margin-right: 100px!important;
}

.margin-right-11 {
  margin-right: 110px!important;
}

.margin-right-12 {
  margin-right: 120px!important;
}

.margin-right-13 {
  margin-right: 130px!important;
}

.margin-right-14 {
  margin-right: 140px!important;
}

.margin-right-15 {
  margin-right: 150px!important;
}

.margin-right-16 {
  margin-right: 160px!important;
}

.margin-right-17 {
  margin-right: 170px!important;
}

.margin-right-18 {
  margin-right: 180px!important;
}

.margin-right-19 {
  margin-right: 190px!important;
}

.margin-right-20 {
  margin-right: 200px!important;
}

.margin-bottom-0 {
  margin-bottom: 0!important;
}

.margin-bottom-1 {
  margin-bottom: 10px!important;
}

.margin-bottom-2 {
  margin-bottom: 20px!important;
}

.margin-bottom-3 {
  margin-bottom: 30px!important;
}

.margin-bottom-4 {
  margin-bottom: 40px!important;
}

.margin-bottom-5 {
  margin-bottom: 50px!important;
}

.margin-bottom-6 {
  margin-bottom: 60px!important;
}

.margin-bottom-7 {
  margin-bottom: 70px!important;
}

.margin-bottom-8 {
  margin-bottom: 80px!important;
}

.margin-bottom-9 {
  margin-bottom: 90px!important;
}

.margin-bottom-10 {
  margin-bottom: 100px!important;
}

.margin-bottom-11 {
  margin-bottom: 110px!important;
}

.margin-bottom-12 {
  margin-bottom: 120px!important;
}

.margin-bottom-13 {
  margin-bottom: 130px!important;
}

.margin-bottom-14 {
  margin-bottom: 140px!important;
}

.margin-bottom-15 {
  margin-bottom: 150px!important;
}

.margin-bottom-16 {
  margin-bottom: 160px!important;
}

.margin-bottom-17 {
  margin-bottom: 170px!important;
}

.margin-bottom-18 {
  margin-bottom: 180px!important;
}

.margin-bottom-19 {
  margin-bottom: 190px!important;
}

.margin-bottom-20 {
  margin-bottom: 200px!important;
}

.margin-left-0 {
  margin-left: 0!important;
}

.margin-left-1 {
  margin-left: 10px!important;
}

.margin-left-2 {
  margin-left: 20px!important;
}

.margin-left-3 {
  margin-left: 30px!important;
}

.margin-left-4 {
  margin-left: 40px!important;
}

.margin-left-5 {
  margin-left: 50px!important;
}

.margin-left-6 {
  margin-left: 60px!important;
}

.margin-left-7 {
  margin-left: 70px!important;
}

.margin-left-8 {
  margin-left: 80px!important;
}

.margin-left-9 {
  margin-left: 90px!important;
}

.margin-left-10 {
  margin-left: 100px!important;
}

.margin-left-11 {
  margin-left: 110px!important;
}

.margin-left-12 {
  margin-left: 120px!important;
}

.margin-left-13 {
  margin-left: 130px!important;
}

.margin-left-14 {
  margin-left: 140px!important;
}

.margin-left-15 {
  margin-left: 150px!important;
}

.margin-left-16 {
  margin-left: 160px!important;
}

.margin-left-17 {
  margin-left: 170px!important;
}

.margin-left-18 {
  margin-left: 180px!important;
}

.margin-left-19 {
  margin-left: 190px!important;
}

.margin-left-20 {
  margin-left: 200px!important;
}

@media (min-width:1240px) {
  .padding-desktop-0 {
    padding: 0!important;
  }

  .padding-desktop-1 {
    padding: 10px!important;
  }

  .padding-desktop-2 {
    padding: 20px!important;
  }

  .padding-desktop-3 {
    padding: 30px!important;
  }

  .padding-desktop-4 {
    padding: 40px!important;
  }

  .padding-desktop-5 {
    padding: 50px!important;
  }

  .padding-desktop-6 {
    padding: 60px!important;
  }

  .padding-desktop-7 {
    padding: 70px!important;
  }

  .padding-desktop-8 {
    padding: 80px!important;
  }

  .padding-desktop-9 {
    padding: 90px!important;
  }

  .padding-desktop-10 {
    padding: 100px!important;
  }

  .padding-desktop-11 {
    padding: 110px!important;
  }

  .padding-desktop-12 {
    padding: 120px!important;
  }

  .padding-desktop-13 {
    padding: 130px!important;
  }

  .padding-desktop-14 {
    padding: 140px!important;
  }

  .padding-desktop-15 {
    padding: 150px!important;
  }

  .padding-desktop-16 {
    padding: 160px!important;
  }

  .padding-desktop-17 {
    padding: 170px!important;
  }

  .padding-desktop-18 {
    padding: 180px!important;
  }

  .padding-desktop-19 {
    padding: 190px!important;
  }

  .padding-desktop-20 {
    padding: 200px!important;
  }

  .padding-top-desktop-0 {
    padding-top: 0!important;
  }

  .padding-top-desktop-1 {
    padding-top: 10px!important;
  }

  .padding-top-desktop-2 {
    padding-top: 20px!important;
  }

  .padding-top-desktop-3 {
    padding-top: 30px!important;
  }

  .padding-top-desktop-4 {
    padding-top: 40px!important;
  }

  .padding-top-desktop-5 {
    padding-top: 50px!important;
  }

  .padding-top-desktop-6 {
    padding-top: 60px!important;
  }

  .padding-top-desktop-7 {
    padding-top: 70px!important;
  }

  .padding-top-desktop-8 {
    padding-top: 80px!important;
  }

  .padding-top-desktop-9 {
    padding-top: 90px!important;
  }

  .padding-top-desktop-10 {
    padding-top: 100px!important;
  }

  .padding-top-desktop-11 {
    padding-top: 110px!important;
  }

  .padding-top-desktop-12 {
    padding-top: 120px!important;
  }

  .padding-top-desktop-13 {
    padding-top: 130px!important;
  }

  .padding-top-desktop-14 {
    padding-top: 140px!important;
  }

  .padding-top-desktop-15 {
    padding-top: 150px!important;
  }

  .padding-top-desktop-16 {
    padding-top: 160px!important;
  }

  .padding-top-desktop-17 {
    padding-top: 170px!important;
  }

  .padding-top-desktop-18 {
    padding-top: 180px!important;
  }

  .padding-top-desktop-19 {
    padding-top: 190px!important;
  }

  .padding-top-desktop-20 {
    padding-top: 200px!important;
  }

  .padding-right-desktop-0 {
    padding-right: 0!important;
  }

  .padding-right-desktop-1 {
    padding-right: 10px!important;
  }

  .padding-right-desktop-2 {
    padding-right: 20px!important;
  }

  .padding-right-desktop-3 {
    padding-right: 30px!important;
  }

  .padding-right-desktop-4 {
    padding-right: 40px!important;
  }

  .padding-right-desktop-5 {
    padding-right: 50px!important;
  }

  .padding-right-desktop-6 {
    padding-right: 60px!important;
  }

  .padding-right-desktop-7 {
    padding-right: 70px!important;
  }

  .padding-right-desktop-8 {
    padding-right: 80px!important;
  }

  .padding-right-desktop-9 {
    padding-right: 90px!important;
  }

  .padding-right-desktop-10 {
    padding-right: 100px!important;
  }

  .padding-right-desktop-11 {
    padding-right: 110px!important;
  }

  .padding-right-desktop-12 {
    padding-right: 120px!important;
  }

  .padding-right-desktop-13 {
    padding-right: 130px!important;
  }

  .padding-right-desktop-14 {
    padding-right: 140px!important;
  }

  .padding-right-desktop-15 {
    padding-right: 150px!important;
  }

  .padding-right-desktop-16 {
    padding-right: 160px!important;
  }

  .padding-right-desktop-17 {
    padding-right: 170px!important;
  }

  .padding-right-desktop-18 {
    padding-right: 180px!important;
  }

  .padding-right-desktop-19 {
    padding-right: 190px!important;
  }

  .padding-right-desktop-20 {
    padding-right: 200px!important;
  }

  .padding-bottom-desktop-0 {
    padding-bottom: 0!important;
  }

  .padding-bottom-desktop-1 {
    padding-bottom: 10px!important;
  }

  .padding-bottom-desktop-2 {
    padding-bottom: 20px!important;
  }

  .padding-bottom-desktop-3 {
    padding-bottom: 30px!important;
  }

  .padding-bottom-desktop-4 {
    padding-bottom: 40px!important;
  }

  .padding-bottom-desktop-5 {
    padding-bottom: 50px!important;
  }

  .padding-bottom-desktop-6 {
    padding-bottom: 60px!important;
  }

  .padding-bottom-desktop-7 {
    padding-bottom: 70px!important;
  }

  .padding-bottom-desktop-8 {
    padding-bottom: 80px!important;
  }

  .padding-bottom-desktop-9 {
    padding-bottom: 90px!important;
  }

  .padding-bottom-desktop-10 {
    padding-bottom: 100px!important;
  }

  .padding-bottom-desktop-11 {
    padding-bottom: 110px!important;
  }

  .padding-bottom-desktop-12 {
    padding-bottom: 120px!important;
  }

  .padding-bottom-desktop-13 {
    padding-bottom: 130px!important;
  }

  .padding-bottom-desktop-14 {
    padding-bottom: 140px!important;
  }

  .padding-bottom-desktop-15 {
    padding-bottom: 150px!important;
  }

  .padding-bottom-desktop-16 {
    padding-bottom: 160px!important;
  }

  .padding-bottom-desktop-17 {
    padding-bottom: 170px!important;
  }

  .padding-bottom-desktop-18 {
    padding-bottom: 180px!important;
  }

  .padding-bottom-desktop-19 {
    padding-bottom: 190px!important;
  }

  .padding-bottom-desktop-20 {
    padding-bottom: 200px!important;
  }

  .padding-left-desktop-0 {
    padding-left: 0!important;
  }

  .padding-left-desktop-1 {
    padding-left: 10px!important;
  }

  .padding-left-desktop-2 {
    padding-left: 20px!important;
  }

  .padding-left-desktop-3 {
    padding-left: 30px!important;
  }

  .padding-left-desktop-4 {
    padding-left: 40px!important;
  }

  .padding-left-desktop-5 {
    padding-left: 50px!important;
  }

  .padding-left-desktop-6 {
    padding-left: 60px!important;
  }

  .padding-left-desktop-7 {
    padding-left: 70px!important;
  }

  .padding-left-desktop-8 {
    padding-left: 80px!important;
  }

  .padding-left-desktop-9 {
    padding-left: 90px!important;
  }

  .padding-left-desktop-10 {
    padding-left: 100px!important;
  }

  .padding-left-desktop-11 {
    padding-left: 110px!important;
  }

  .padding-left-desktop-12 {
    padding-left: 120px!important;
  }

  .padding-left-desktop-13 {
    padding-left: 130px!important;
  }

  .padding-left-desktop-14 {
    padding-left: 140px!important;
  }

  .padding-left-desktop-15 {
    padding-left: 150px!important;
  }

  .padding-left-desktop-16 {
    padding-left: 160px!important;
  }

  .padding-left-desktop-17 {
    padding-left: 170px!important;
  }

  .padding-left-desktop-18 {
    padding-left: 180px!important;
  }

  .padding-left-desktop-19 {
    padding-left: 190px!important;
  }

  .padding-left-desktop-20 {
    padding-left: 200px!important;
  }

  .margin-desktop-0 {
    margin: 0!important;
  }

  .margin-desktop-1 {
    margin: 10px!important;
  }

  .margin-desktop-2 {
    margin: 20px!important;
  }

  .margin-desktop-3 {
    margin: 30px!important;
  }

  .margin-desktop-4 {
    margin: 40px!important;
  }

  .margin-desktop-5 {
    margin: 50px!important;
  }

  .margin-desktop-6 {
    margin: 60px!important;
  }

  .margin-desktop-7 {
    margin: 70px!important;
  }

  .margin-desktop-8 {
    margin: 80px!important;
  }

  .margin-desktop-9 {
    margin: 90px!important;
  }

  .margin-desktop-10 {
    margin: 100px!important;
  }

  .margin-desktop-11 {
    margin: 110px!important;
  }

  .margin-desktop-12 {
    margin: 120px!important;
  }

  .margin-desktop-13 {
    margin: 130px!important;
  }

  .margin-desktop-14 {
    margin: 140px!important;
  }

  .margin-desktop-15 {
    margin: 150px!important;
  }

  .margin-desktop-16 {
    margin: 160px!important;
  }

  .margin-desktop-17 {
    margin: 170px!important;
  }

  .margin-desktop-18 {
    margin: 180px!important;
  }

  .margin-desktop-19 {
    margin: 190px!important;
  }

  .margin-desktop-20 {
    margin: 200px!important;
  }

  .margin-top-desktop-0 {
    margin-top: 0!important;
  }

  .margin-top-desktop-1 {
    margin-top: 10px!important;
  }

  .margin-top-desktop-2 {
    margin-top: 20px!important;
  }

  .margin-top-desktop-3 {
    margin-top: 30px!important;
  }

  .margin-top-desktop-4 {
    margin-top: 40px!important;
  }

  .margin-top-desktop-5 {
    margin-top: 50px!important;
  }

  .margin-top-desktop-6 {
    margin-top: 60px!important;
  }

  .margin-top-desktop-7 {
    margin-top: 70px!important;
  }

  .margin-top-desktop-8 {
    margin-top: 80px!important;
  }

  .margin-top-desktop-9 {
    margin-top: 90px!important;
  }

  .margin-top-desktop-10 {
    margin-top: 100px!important;
  }

  .margin-top-desktop-11 {
    margin-top: 110px!important;
  }

  .margin-top-desktop-12 {
    margin-top: 120px!important;
  }

  .margin-top-desktop-13 {
    margin-top: 130px!important;
  }

  .margin-top-desktop-14 {
    margin-top: 140px!important;
  }

  .margin-top-desktop-15 {
    margin-top: 150px!important;
  }

  .margin-top-desktop-16 {
    margin-top: 160px!important;
  }

  .margin-top-desktop-17 {
    margin-top: 170px!important;
  }

  .margin-top-desktop-18 {
    margin-top: 180px!important;
  }

  .margin-top-desktop-19 {
    margin-top: 190px!important;
  }

  .margin-top-desktop-20 {
    margin-top: 200px!important;
  }

  .margin-right-desktop-0 {
    margin-right: 0!important;
  }

  .margin-right-desktop-1 {
    margin-right: 10px!important;
  }

  .margin-right-desktop-2 {
    margin-right: 20px!important;
  }

  .margin-right-desktop-3 {
    margin-right: 30px!important;
  }

  .margin-right-desktop-4 {
    margin-right: 40px!important;
  }

  .margin-right-desktop-5 {
    margin-right: 50px!important;
  }

  .margin-right-desktop-6 {
    margin-right: 60px!important;
  }

  .margin-right-desktop-7 {
    margin-right: 70px!important;
  }

  .margin-right-desktop-8 {
    margin-right: 80px!important;
  }

  .margin-right-desktop-9 {
    margin-right: 90px!important;
  }

  .margin-right-desktop-10 {
    margin-right: 100px!important;
  }

  .margin-right-desktop-11 {
    margin-right: 110px!important;
  }

  .margin-right-desktop-12 {
    margin-right: 120px!important;
  }

  .margin-right-desktop-13 {
    margin-right: 130px!important;
  }

  .margin-right-desktop-14 {
    margin-right: 140px!important;
  }

  .margin-right-desktop-15 {
    margin-right: 150px!important;
  }

  .margin-right-desktop-16 {
    margin-right: 160px!important;
  }

  .margin-right-desktop-17 {
    margin-right: 170px!important;
  }

  .margin-right-desktop-18 {
    margin-right: 180px!important;
  }

  .margin-right-desktop-19 {
    margin-right: 190px!important;
  }

  .margin-right-desktop-20 {
    margin-right: 200px!important;
  }

  .margin-bottom-desktop-0 {
    margin-bottom: 0!important;
  }

  .margin-bottom-desktop-1 {
    margin-bottom: 10px!important;
  }

  .margin-bottom-desktop-2 {
    margin-bottom: 20px!important;
  }

  .margin-bottom-desktop-3 {
    margin-bottom: 30px!important;
  }

  .margin-bottom-desktop-4 {
    margin-bottom: 40px!important;
  }

  .margin-bottom-desktop-5 {
    margin-bottom: 50px!important;
  }

  .margin-bottom-desktop-6 {
    margin-bottom: 60px!important;
  }

  .margin-bottom-desktop-7 {
    margin-bottom: 70px!important;
  }

  .margin-bottom-desktop-8 {
    margin-bottom: 80px!important;
  }

  .margin-bottom-desktop-9 {
    margin-bottom: 90px!important;
  }

  .margin-bottom-desktop-10 {
    margin-bottom: 100px!important;
  }

  .margin-bottom-desktop-11 {
    margin-bottom: 110px!important;
  }

  .margin-bottom-desktop-12 {
    margin-bottom: 120px!important;
  }

  .margin-bottom-desktop-13 {
    margin-bottom: 130px!important;
  }

  .margin-bottom-desktop-14 {
    margin-bottom: 140px!important;
  }

  .margin-bottom-desktop-15 {
    margin-bottom: 150px!important;
  }

  .margin-bottom-desktop-16 {
    margin-bottom: 160px!important;
  }

  .margin-bottom-desktop-17 {
    margin-bottom: 170px!important;
  }

  .margin-bottom-desktop-18 {
    margin-bottom: 180px!important;
  }

  .margin-bottom-desktop-19 {
    margin-bottom: 190px!important;
  }

  .margin-bottom-desktop-20 {
    margin-bottom: 200px!important;
  }

  .margin-left-desktop-0 {
    margin-left: 0!important;
  }

  .margin-left-desktop-1 {
    margin-left: 10px!important;
  }

  .margin-left-desktop-2 {
    margin-left: 20px!important;
  }

  .margin-left-desktop-3 {
    margin-left: 30px!important;
  }

  .margin-left-desktop-4 {
    margin-left: 40px!important;
  }

  .margin-left-desktop-5 {
    margin-left: 50px!important;
  }

  .margin-left-desktop-6 {
    margin-left: 60px!important;
  }

  .margin-left-desktop-7 {
    margin-left: 70px!important;
  }

  .margin-left-desktop-8 {
    margin-left: 80px!important;
  }

  .margin-left-desktop-9 {
    margin-left: 90px!important;
  }

  .margin-left-desktop-10 {
    margin-left: 100px!important;
  }

  .margin-left-desktop-11 {
    margin-left: 110px!important;
  }

  .margin-left-desktop-12 {
    margin-left: 120px!important;
  }

  .margin-left-desktop-13 {
    margin-left: 130px!important;
  }

  .margin-left-desktop-14 {
    margin-left: 140px!important;
  }

  .margin-left-desktop-15 {
    margin-left: 150px!important;
  }

  .margin-left-desktop-16 {
    margin-left: 160px!important;
  }

  .margin-left-desktop-17 {
    margin-left: 170px!important;
  }

  .margin-left-desktop-18 {
    margin-left: 180px!important;
  }

  .margin-left-desktop-19 {
    margin-left: 190px!important;
  }

  .margin-left-desktop-20 {
    margin-left: 200px!important;
  }
}

@media (max-width:1023px) {
  .padding-tablet-0 {
    padding: 0!important;
  }

  .padding-tablet-1 {
    padding: 10px!important;
  }

  .padding-tablet-2 {
    padding: 20px!important;
  }

  .padding-tablet-3 {
    padding: 30px!important;
  }

  .padding-tablet-4 {
    padding: 40px!important;
  }

  .padding-tablet-5 {
    padding: 50px!important;
  }

  .padding-tablet-6 {
    padding: 60px!important;
  }

  .padding-tablet-7 {
    padding: 70px!important;
  }

  .padding-tablet-8 {
    padding: 80px!important;
  }

  .padding-tablet-9 {
    padding: 90px!important;
  }

  .padding-tablet-10 {
    padding: 100px!important;
  }

  .padding-tablet-11 {
    padding: 110px!important;
  }

  .padding-tablet-12 {
    padding: 120px!important;
  }

  .padding-tablet-13 {
    padding: 130px!important;
  }

  .padding-tablet-14 {
    padding: 140px!important;
  }

  .padding-tablet-15 {
    padding: 150px!important;
  }

  .padding-tablet-16 {
    padding: 160px!important;
  }

  .padding-tablet-17 {
    padding: 170px!important;
  }

  .padding-tablet-18 {
    padding: 180px!important;
  }

  .padding-tablet-19 {
    padding: 190px!important;
  }

  .padding-tablet-20 {
    padding: 200px!important;
  }

  .padding-top-tablet-0 {
    padding-top: 0!important;
  }

  .padding-top-tablet-1 {
    padding-top: 10px!important;
  }

  .padding-top-tablet-2 {
    padding-top: 20px!important;
  }

  .padding-top-tablet-3 {
    padding-top: 30px!important;
  }

  .padding-top-tablet-4 {
    padding-top: 40px!important;
  }

  .padding-top-tablet-5 {
    padding-top: 50px!important;
  }

  .padding-top-tablet-6 {
    padding-top: 60px!important;
  }

  .padding-top-tablet-7 {
    padding-top: 70px!important;
  }

  .padding-top-tablet-8 {
    padding-top: 80px!important;
  }

  .padding-top-tablet-9 {
    padding-top: 90px!important;
  }

  .padding-top-tablet-10 {
    padding-top: 100px!important;
  }

  .padding-top-tablet-11 {
    padding-top: 110px!important;
  }

  .padding-top-tablet-12 {
    padding-top: 120px!important;
  }

  .padding-top-tablet-13 {
    padding-top: 130px!important;
  }

  .padding-top-tablet-14 {
    padding-top: 140px!important;
  }

  .padding-top-tablet-15 {
    padding-top: 150px!important;
  }

  .padding-top-tablet-16 {
    padding-top: 160px!important;
  }

  .padding-top-tablet-17 {
    padding-top: 170px!important;
  }

  .padding-top-tablet-18 {
    padding-top: 180px!important;
  }

  .padding-top-tablet-19 {
    padding-top: 190px!important;
  }

  .padding-top-tablet-20 {
    padding-top: 200px!important;
  }

  .padding-right-tablet-0 {
    padding-right: 0!important;
  }

  .padding-right-tablet-1 {
    padding-right: 10px!important;
  }

  .padding-right-tablet-2 {
    padding-right: 20px!important;
  }

  .padding-right-tablet-3 {
    padding-right: 30px!important;
  }

  .padding-right-tablet-4 {
    padding-right: 40px!important;
  }

  .padding-right-tablet-5 {
    padding-right: 50px!important;
  }

  .padding-right-tablet-6 {
    padding-right: 60px!important;
  }

  .padding-right-tablet-7 {
    padding-right: 70px!important;
  }

  .padding-right-tablet-8 {
    padding-right: 80px!important;
  }

  .padding-right-tablet-9 {
    padding-right: 90px!important;
  }

  .padding-right-tablet-10 {
    padding-right: 100px!important;
  }

  .padding-right-tablet-11 {
    padding-right: 110px!important;
  }

  .padding-right-tablet-12 {
    padding-right: 120px!important;
  }

  .padding-right-tablet-13 {
    padding-right: 130px!important;
  }

  .padding-right-tablet-14 {
    padding-right: 140px!important;
  }

  .padding-right-tablet-15 {
    padding-right: 150px!important;
  }

  .padding-right-tablet-16 {
    padding-right: 160px!important;
  }

  .padding-right-tablet-17 {
    padding-right: 170px!important;
  }

  .padding-right-tablet-18 {
    padding-right: 180px!important;
  }

  .padding-right-tablet-19 {
    padding-right: 190px!important;
  }

  .padding-right-tablet-20 {
    padding-right: 200px!important;
  }

  .padding-bottom-tablet-0 {
    padding-bottom: 0!important;
  }

  .padding-bottom-tablet-1 {
    padding-bottom: 10px!important;
  }

  .padding-bottom-tablet-2 {
    padding-bottom: 20px!important;
  }

  .padding-bottom-tablet-3 {
    padding-bottom: 30px!important;
  }

  .padding-bottom-tablet-4 {
    padding-bottom: 40px!important;
  }

  .padding-bottom-tablet-5 {
    padding-bottom: 50px!important;
  }

  .padding-bottom-tablet-6 {
    padding-bottom: 60px!important;
  }

  .padding-bottom-tablet-7 {
    padding-bottom: 70px!important;
  }

  .padding-bottom-tablet-8 {
    padding-bottom: 80px!important;
  }

  .padding-bottom-tablet-9 {
    padding-bottom: 90px!important;
  }

  .padding-bottom-tablet-10 {
    padding-bottom: 100px!important;
  }

  .padding-bottom-tablet-11 {
    padding-bottom: 110px!important;
  }

  .padding-bottom-tablet-12 {
    padding-bottom: 120px!important;
  }

  .padding-bottom-tablet-13 {
    padding-bottom: 130px!important;
  }

  .padding-bottom-tablet-14 {
    padding-bottom: 140px!important;
  }

  .padding-bottom-tablet-15 {
    padding-bottom: 150px!important;
  }

  .padding-bottom-tablet-16 {
    padding-bottom: 160px!important;
  }

  .padding-bottom-tablet-17 {
    padding-bottom: 170px!important;
  }

  .padding-bottom-tablet-18 {
    padding-bottom: 180px!important;
  }

  .padding-bottom-tablet-19 {
    padding-bottom: 190px!important;
  }

  .padding-bottom-tablet-20 {
    padding-bottom: 200px!important;
  }

  .padding-left-tablet-0 {
    padding-left: 0!important;
  }

  .padding-left-tablet-1 {
    padding-left: 10px!important;
  }

  .padding-left-tablet-2 {
    padding-left: 20px!important;
  }

  .padding-left-tablet-3 {
    padding-left: 30px!important;
  }

  .padding-left-tablet-4 {
    padding-left: 40px!important;
  }

  .padding-left-tablet-5 {
    padding-left: 50px!important;
  }

  .padding-left-tablet-6 {
    padding-left: 60px!important;
  }

  .padding-left-tablet-7 {
    padding-left: 70px!important;
  }

  .padding-left-tablet-8 {
    padding-left: 80px!important;
  }

  .padding-left-tablet-9 {
    padding-left: 90px!important;
  }

  .padding-left-tablet-10 {
    padding-left: 100px!important;
  }

  .padding-left-tablet-11 {
    padding-left: 110px!important;
  }

  .padding-left-tablet-12 {
    padding-left: 120px!important;
  }

  .padding-left-tablet-13 {
    padding-left: 130px!important;
  }

  .padding-left-tablet-14 {
    padding-left: 140px!important;
  }

  .padding-left-tablet-15 {
    padding-left: 150px!important;
  }

  .padding-left-tablet-16 {
    padding-left: 160px!important;
  }

  .padding-left-tablet-17 {
    padding-left: 170px!important;
  }

  .padding-left-tablet-18 {
    padding-left: 180px!important;
  }

  .padding-left-tablet-19 {
    padding-left: 190px!important;
  }

  .padding-left-tablet-20 {
    padding-left: 200px!important;
  }

  .margin-tablet-0 {
    margin: 0!important;
  }

  .margin-tablet-1 {
    margin: 10px!important;
  }

  .margin-tablet-2 {
    margin: 20px!important;
  }

  .margin-tablet-3 {
    margin: 30px!important;
  }

  .margin-tablet-4 {
    margin: 40px!important;
  }

  .margin-tablet-5 {
    margin: 50px!important;
  }

  .margin-tablet-6 {
    margin: 60px!important;
  }

  .margin-tablet-7 {
    margin: 70px!important;
  }

  .margin-tablet-8 {
    margin: 80px!important;
  }

  .margin-tablet-9 {
    margin: 90px!important;
  }

  .margin-tablet-10 {
    margin: 100px!important;
  }

  .margin-tablet-11 {
    margin: 110px!important;
  }

  .margin-tablet-12 {
    margin: 120px!important;
  }

  .margin-tablet-13 {
    margin: 130px!important;
  }

  .margin-tablet-14 {
    margin: 140px!important;
  }

  .margin-tablet-15 {
    margin: 150px!important;
  }

  .margin-tablet-16 {
    margin: 160px!important;
  }

  .margin-tablet-17 {
    margin: 170px!important;
  }

  .margin-tablet-18 {
    margin: 180px!important;
  }

  .margin-tablet-19 {
    margin: 190px!important;
  }

  .margin-tablet-20 {
    margin: 200px!important;
  }

  .margin-top-tablet-0 {
    margin-top: 0!important;
  }

  .margin-top-tablet-1 {
    margin-top: 10px!important;
  }

  .margin-top-tablet-2 {
    margin-top: 20px!important;
  }

  .margin-top-tablet-3 {
    margin-top: 30px!important;
  }

  .margin-top-tablet-4 {
    margin-top: 40px!important;
  }

  .margin-top-tablet-5 {
    margin-top: 50px!important;
  }

  .margin-top-tablet-6 {
    margin-top: 60px!important;
  }

  .margin-top-tablet-7 {
    margin-top: 70px!important;
  }

  .margin-top-tablet-8 {
    margin-top: 80px!important;
  }

  .margin-top-tablet-9 {
    margin-top: 90px!important;
  }

  .margin-top-tablet-10 {
    margin-top: 100px!important;
  }

  .margin-top-tablet-11 {
    margin-top: 110px!important;
  }

  .margin-top-tablet-12 {
    margin-top: 120px!important;
  }

  .margin-top-tablet-13 {
    margin-top: 130px!important;
  }

  .margin-top-tablet-14 {
    margin-top: 140px!important;
  }

  .margin-top-tablet-15 {
    margin-top: 150px!important;
  }

  .margin-top-tablet-16 {
    margin-top: 160px!important;
  }

  .margin-top-tablet-17 {
    margin-top: 170px!important;
  }

  .margin-top-tablet-18 {
    margin-top: 180px!important;
  }

  .margin-top-tablet-19 {
    margin-top: 190px!important;
  }

  .margin-top-tablet-20 {
    margin-top: 200px!important;
  }

  .margin-right-tablet-0 {
    margin-right: 0!important;
  }

  .margin-right-tablet-1 {
    margin-right: 10px!important;
  }

  .margin-right-tablet-2 {
    margin-right: 20px!important;
  }

  .margin-right-tablet-3 {
    margin-right: 30px!important;
  }

  .margin-right-tablet-4 {
    margin-right: 40px!important;
  }

  .margin-right-tablet-5 {
    margin-right: 50px!important;
  }

  .margin-right-tablet-6 {
    margin-right: 60px!important;
  }

  .margin-right-tablet-7 {
    margin-right: 70px!important;
  }

  .margin-right-tablet-8 {
    margin-right: 80px!important;
  }

  .margin-right-tablet-9 {
    margin-right: 90px!important;
  }

  .margin-right-tablet-10 {
    margin-right: 100px!important;
  }

  .margin-right-tablet-11 {
    margin-right: 110px!important;
  }

  .margin-right-tablet-12 {
    margin-right: 120px!important;
  }

  .margin-right-tablet-13 {
    margin-right: 130px!important;
  }

  .margin-right-tablet-14 {
    margin-right: 140px!important;
  }

  .margin-right-tablet-15 {
    margin-right: 150px!important;
  }

  .margin-right-tablet-16 {
    margin-right: 160px!important;
  }

  .margin-right-tablet-17 {
    margin-right: 170px!important;
  }

  .margin-right-tablet-18 {
    margin-right: 180px!important;
  }

  .margin-right-tablet-19 {
    margin-right: 190px!important;
  }

  .margin-right-tablet-20 {
    margin-right: 200px!important;
  }

  .margin-bottom-tablet-0 {
    margin-bottom: 0!important;
  }

  .margin-bottom-tablet-1 {
    margin-bottom: 10px!important;
  }

  .margin-bottom-tablet-2 {
    margin-bottom: 20px!important;
  }

  .margin-bottom-tablet-3 {
    margin-bottom: 30px!important;
  }

  .margin-bottom-tablet-4 {
    margin-bottom: 40px!important;
  }

  .margin-bottom-tablet-5 {
    margin-bottom: 50px!important;
  }

  .margin-bottom-tablet-6 {
    margin-bottom: 60px!important;
  }

  .margin-bottom-tablet-7 {
    margin-bottom: 70px!important;
  }

  .margin-bottom-tablet-8 {
    margin-bottom: 80px!important;
  }

  .margin-bottom-tablet-9 {
    margin-bottom: 90px!important;
  }

  .margin-bottom-tablet-10 {
    margin-bottom: 100px!important;
  }

  .margin-bottom-tablet-11 {
    margin-bottom: 110px!important;
  }

  .margin-bottom-tablet-12 {
    margin-bottom: 120px!important;
  }

  .margin-bottom-tablet-13 {
    margin-bottom: 130px!important;
  }

  .margin-bottom-tablet-14 {
    margin-bottom: 140px!important;
  }

  .margin-bottom-tablet-15 {
    margin-bottom: 150px!important;
  }

  .margin-bottom-tablet-16 {
    margin-bottom: 160px!important;
  }

  .margin-bottom-tablet-17 {
    margin-bottom: 170px!important;
  }

  .margin-bottom-tablet-18 {
    margin-bottom: 180px!important;
  }

  .margin-bottom-tablet-19 {
    margin-bottom: 190px!important;
  }

  .margin-bottom-tablet-20 {
    margin-bottom: 200px!important;
  }

  .margin-left-tablet-0 {
    margin-left: 0!important;
  }

  .margin-left-tablet-1 {
    margin-left: 10px!important;
  }

  .margin-left-tablet-2 {
    margin-left: 20px!important;
  }

  .margin-left-tablet-3 {
    margin-left: 30px!important;
  }

  .margin-left-tablet-4 {
    margin-left: 40px!important;
  }

  .margin-left-tablet-5 {
    margin-left: 50px!important;
  }

  .margin-left-tablet-6 {
    margin-left: 60px!important;
  }

  .margin-left-tablet-7 {
    margin-left: 70px!important;
  }

  .margin-left-tablet-8 {
    margin-left: 80px!important;
  }

  .margin-left-tablet-9 {
    margin-left: 90px!important;
  }

  .margin-left-tablet-10 {
    margin-left: 100px!important;
  }

  .margin-left-tablet-11 {
    margin-left: 110px!important;
  }

  .margin-left-tablet-12 {
    margin-left: 120px!important;
  }

  .margin-left-tablet-13 {
    margin-left: 130px!important;
  }

  .margin-left-tablet-14 {
    margin-left: 140px!important;
  }

  .margin-left-tablet-15 {
    margin-left: 150px!important;
  }

  .margin-left-tablet-16 {
    margin-left: 160px!important;
  }

  .margin-left-tablet-17 {
    margin-left: 170px!important;
  }

  .margin-left-tablet-18 {
    margin-left: 180px!important;
  }

  .margin-left-tablet-19 {
    margin-left: 190px!important;
  }

  .margin-left-tablet-20 {
    margin-left: 200px!important;
  }
}

@media (max-width:767px) {
  .padding-phablet-0 {
    padding: 0!important;
  }

  .padding-phablet-1 {
    padding: 10px!important;
  }

  .padding-phablet-2 {
    padding: 20px!important;
  }

  .padding-phablet-3 {
    padding: 30px!important;
  }

  .padding-phablet-4 {
    padding: 40px!important;
  }

  .padding-phablet-5 {
    padding: 50px!important;
  }

  .padding-phablet-6 {
    padding: 60px!important;
  }

  .padding-phablet-7 {
    padding: 70px!important;
  }

  .padding-phablet-8 {
    padding: 80px!important;
  }

  .padding-phablet-9 {
    padding: 90px!important;
  }

  .padding-phablet-10 {
    padding: 100px!important;
  }

  .padding-phablet-11 {
    padding: 110px!important;
  }

  .padding-phablet-12 {
    padding: 120px!important;
  }

  .padding-phablet-13 {
    padding: 130px!important;
  }

  .padding-phablet-14 {
    padding: 140px!important;
  }

  .padding-phablet-15 {
    padding: 150px!important;
  }

  .padding-phablet-16 {
    padding: 160px!important;
  }

  .padding-phablet-17 {
    padding: 170px!important;
  }

  .padding-phablet-18 {
    padding: 180px!important;
  }

  .padding-phablet-19 {
    padding: 190px!important;
  }

  .padding-phablet-20 {
    padding: 200px!important;
  }

  .padding-top-phablet-0 {
    padding-top: 0!important;
  }

  .padding-top-phablet-1 {
    padding-top: 10px!important;
  }

  .padding-top-phablet-2 {
    padding-top: 20px!important;
  }

  .padding-top-phablet-3 {
    padding-top: 30px!important;
  }

  .padding-top-phablet-4 {
    padding-top: 40px!important;
  }

  .padding-top-phablet-5 {
    padding-top: 50px!important;
  }

  .padding-top-phablet-6 {
    padding-top: 60px!important;
  }

  .padding-top-phablet-7 {
    padding-top: 70px!important;
  }

  .padding-top-phablet-8 {
    padding-top: 80px!important;
  }

  .padding-top-phablet-9 {
    padding-top: 90px!important;
  }

  .padding-top-phablet-10 {
    padding-top: 100px!important;
  }

  .padding-top-phablet-11 {
    padding-top: 110px!important;
  }

  .padding-top-phablet-12 {
    padding-top: 120px!important;
  }

  .padding-top-phablet-13 {
    padding-top: 130px!important;
  }

  .padding-top-phablet-14 {
    padding-top: 140px!important;
  }

  .padding-top-phablet-15 {
    padding-top: 150px!important;
  }

  .padding-top-phablet-16 {
    padding-top: 160px!important;
  }

  .padding-top-phablet-17 {
    padding-top: 170px!important;
  }

  .padding-top-phablet-18 {
    padding-top: 180px!important;
  }

  .padding-top-phablet-19 {
    padding-top: 190px!important;
  }

  .padding-top-phablet-20 {
    padding-top: 200px!important;
  }

  .padding-right-phablet-0 {
    padding-right: 0!important;
  }

  .padding-right-phablet-1 {
    padding-right: 10px!important;
  }

  .padding-right-phablet-2 {
    padding-right: 20px!important;
  }

  .padding-right-phablet-3 {
    padding-right: 30px!important;
  }

  .padding-right-phablet-4 {
    padding-right: 40px!important;
  }

  .padding-right-phablet-5 {
    padding-right: 50px!important;
  }

  .padding-right-phablet-6 {
    padding-right: 60px!important;
  }

  .padding-right-phablet-7 {
    padding-right: 70px!important;
  }

  .padding-right-phablet-8 {
    padding-right: 80px!important;
  }

  .padding-right-phablet-9 {
    padding-right: 90px!important;
  }

  .padding-right-phablet-10 {
    padding-right: 100px!important;
  }

  .padding-right-phablet-11 {
    padding-right: 110px!important;
  }

  .padding-right-phablet-12 {
    padding-right: 120px!important;
  }

  .padding-right-phablet-13 {
    padding-right: 130px!important;
  }

  .padding-right-phablet-14 {
    padding-right: 140px!important;
  }

  .padding-right-phablet-15 {
    padding-right: 150px!important;
  }

  .padding-right-phablet-16 {
    padding-right: 160px!important;
  }

  .padding-right-phablet-17 {
    padding-right: 170px!important;
  }

  .padding-right-phablet-18 {
    padding-right: 180px!important;
  }

  .padding-right-phablet-19 {
    padding-right: 190px!important;
  }

  .padding-right-phablet-20 {
    padding-right: 200px!important;
  }

  .padding-bottom-phablet-0 {
    padding-bottom: 0!important;
  }

  .padding-bottom-phablet-1 {
    padding-bottom: 10px!important;
  }

  .padding-bottom-phablet-2 {
    padding-bottom: 20px!important;
  }

  .padding-bottom-phablet-3 {
    padding-bottom: 30px!important;
  }

  .padding-bottom-phablet-4 {
    padding-bottom: 40px!important;
  }

  .padding-bottom-phablet-5 {
    padding-bottom: 50px!important;
  }

  .padding-bottom-phablet-6 {
    padding-bottom: 60px!important;
  }

  .padding-bottom-phablet-7 {
    padding-bottom: 70px!important;
  }

  .padding-bottom-phablet-8 {
    padding-bottom: 80px!important;
  }

  .padding-bottom-phablet-9 {
    padding-bottom: 90px!important;
  }

  .padding-bottom-phablet-10 {
    padding-bottom: 100px!important;
  }

  .padding-bottom-phablet-11 {
    padding-bottom: 110px!important;
  }

  .padding-bottom-phablet-12 {
    padding-bottom: 120px!important;
  }

  .padding-bottom-phablet-13 {
    padding-bottom: 130px!important;
  }

  .padding-bottom-phablet-14 {
    padding-bottom: 140px!important;
  }

  .padding-bottom-phablet-15 {
    padding-bottom: 150px!important;
  }

  .padding-bottom-phablet-16 {
    padding-bottom: 160px!important;
  }

  .padding-bottom-phablet-17 {
    padding-bottom: 170px!important;
  }

  .padding-bottom-phablet-18 {
    padding-bottom: 180px!important;
  }

  .padding-bottom-phablet-19 {
    padding-bottom: 190px!important;
  }

  .padding-bottom-phablet-20 {
    padding-bottom: 200px!important;
  }

  .padding-left-phablet-0 {
    padding-left: 0!important;
  }

  .padding-left-phablet-1 {
    padding-left: 10px!important;
  }

  .padding-left-phablet-2 {
    padding-left: 20px!important;
  }

  .padding-left-phablet-3 {
    padding-left: 30px!important;
  }

  .padding-left-phablet-4 {
    padding-left: 40px!important;
  }

  .padding-left-phablet-5 {
    padding-left: 50px!important;
  }

  .padding-left-phablet-6 {
    padding-left: 60px!important;
  }

  .padding-left-phablet-7 {
    padding-left: 70px!important;
  }

  .padding-left-phablet-8 {
    padding-left: 80px!important;
  }

  .padding-left-phablet-9 {
    padding-left: 90px!important;
  }

  .padding-left-phablet-10 {
    padding-left: 100px!important;
  }

  .padding-left-phablet-11 {
    padding-left: 110px!important;
  }

  .padding-left-phablet-12 {
    padding-left: 120px!important;
  }

  .padding-left-phablet-13 {
    padding-left: 130px!important;
  }

  .padding-left-phablet-14 {
    padding-left: 140px!important;
  }

  .padding-left-phablet-15 {
    padding-left: 150px!important;
  }

  .padding-left-phablet-16 {
    padding-left: 160px!important;
  }

  .padding-left-phablet-17 {
    padding-left: 170px!important;
  }

  .padding-left-phablet-18 {
    padding-left: 180px!important;
  }

  .padding-left-phablet-19 {
    padding-left: 190px!important;
  }

  .padding-left-phablet-20 {
    padding-left: 200px!important;
  }

  .margin-phablet-0 {
    margin: 0!important;
  }

  .margin-phablet-1 {
    margin: 10px!important;
  }

  .margin-phablet-2 {
    margin: 20px!important;
  }

  .margin-phablet-3 {
    margin: 30px!important;
  }

  .margin-phablet-4 {
    margin: 40px!important;
  }

  .margin-phablet-5 {
    margin: 50px!important;
  }

  .margin-phablet-6 {
    margin: 60px!important;
  }

  .margin-phablet-7 {
    margin: 70px!important;
  }

  .margin-phablet-8 {
    margin: 80px!important;
  }

  .margin-phablet-9 {
    margin: 90px!important;
  }

  .margin-phablet-10 {
    margin: 100px!important;
  }

  .margin-phablet-11 {
    margin: 110px!important;
  }

  .margin-phablet-12 {
    margin: 120px!important;
  }

  .margin-phablet-13 {
    margin: 130px!important;
  }

  .margin-phablet-14 {
    margin: 140px!important;
  }

  .margin-phablet-15 {
    margin: 150px!important;
  }

  .margin-phablet-16 {
    margin: 160px!important;
  }

  .margin-phablet-17 {
    margin: 170px!important;
  }

  .margin-phablet-18 {
    margin: 180px!important;
  }

  .margin-phablet-19 {
    margin: 190px!important;
  }

  .margin-phablet-20 {
    margin: 200px!important;
  }

  .margin-top-phablet-0 {
    margin-top: 0!important;
  }

  .margin-top-phablet-1 {
    margin-top: 10px!important;
  }

  .margin-top-phablet-2 {
    margin-top: 20px!important;
  }

  .margin-top-phablet-3 {
    margin-top: 30px!important;
  }

  .margin-top-phablet-4 {
    margin-top: 40px!important;
  }

  .margin-top-phablet-5 {
    margin-top: 50px!important;
  }

  .margin-top-phablet-6 {
    margin-top: 60px!important;
  }

  .margin-top-phablet-7 {
    margin-top: 70px!important;
  }

  .margin-top-phablet-8 {
    margin-top: 80px!important;
  }

  .margin-top-phablet-9 {
    margin-top: 90px!important;
  }

  .margin-top-phablet-10 {
    margin-top: 100px!important;
  }

  .margin-top-phablet-11 {
    margin-top: 110px!important;
  }

  .margin-top-phablet-12 {
    margin-top: 120px!important;
  }

  .margin-top-phablet-13 {
    margin-top: 130px!important;
  }

  .margin-top-phablet-14 {
    margin-top: 140px!important;
  }

  .margin-top-phablet-15 {
    margin-top: 150px!important;
  }

  .margin-top-phablet-16 {
    margin-top: 160px!important;
  }

  .margin-top-phablet-17 {
    margin-top: 170px!important;
  }

  .margin-top-phablet-18 {
    margin-top: 180px!important;
  }

  .margin-top-phablet-19 {
    margin-top: 190px!important;
  }

  .margin-top-phablet-20 {
    margin-top: 200px!important;
  }

  .margin-right-phablet-0 {
    margin-right: 0!important;
  }

  .margin-right-phablet-1 {
    margin-right: 10px!important;
  }

  .margin-right-phablet-2 {
    margin-right: 20px!important;
  }

  .margin-right-phablet-3 {
    margin-right: 30px!important;
  }

  .margin-right-phablet-4 {
    margin-right: 40px!important;
  }

  .margin-right-phablet-5 {
    margin-right: 50px!important;
  }

  .margin-right-phablet-6 {
    margin-right: 60px!important;
  }

  .margin-right-phablet-7 {
    margin-right: 70px!important;
  }

  .margin-right-phablet-8 {
    margin-right: 80px!important;
  }

  .margin-right-phablet-9 {
    margin-right: 90px!important;
  }

  .margin-right-phablet-10 {
    margin-right: 100px!important;
  }

  .margin-right-phablet-11 {
    margin-right: 110px!important;
  }

  .margin-right-phablet-12 {
    margin-right: 120px!important;
  }

  .margin-right-phablet-13 {
    margin-right: 130px!important;
  }

  .margin-right-phablet-14 {
    margin-right: 140px!important;
  }

  .margin-right-phablet-15 {
    margin-right: 150px!important;
  }

  .margin-right-phablet-16 {
    margin-right: 160px!important;
  }

  .margin-right-phablet-17 {
    margin-right: 170px!important;
  }

  .margin-right-phablet-18 {
    margin-right: 180px!important;
  }

  .margin-right-phablet-19 {
    margin-right: 190px!important;
  }

  .margin-right-phablet-20 {
    margin-right: 200px!important;
  }

  .margin-bottom-phablet-0 {
    margin-bottom: 0!important;
  }

  .margin-bottom-phablet-1 {
    margin-bottom: 10px!important;
  }

  .margin-bottom-phablet-2 {
    margin-bottom: 20px!important;
  }

  .margin-bottom-phablet-3 {
    margin-bottom: 30px!important;
  }

  .margin-bottom-phablet-4 {
    margin-bottom: 40px!important;
  }

  .margin-bottom-phablet-5 {
    margin-bottom: 50px!important;
  }

  .margin-bottom-phablet-6 {
    margin-bottom: 60px!important;
  }

  .margin-bottom-phablet-7 {
    margin-bottom: 70px!important;
  }

  .margin-bottom-phablet-8 {
    margin-bottom: 80px!important;
  }

  .margin-bottom-phablet-9 {
    margin-bottom: 90px!important;
  }

  .margin-bottom-phablet-10 {
    margin-bottom: 100px!important;
  }

  .margin-bottom-phablet-11 {
    margin-bottom: 110px!important;
  }

  .margin-bottom-phablet-12 {
    margin-bottom: 120px!important;
  }

  .margin-bottom-phablet-13 {
    margin-bottom: 130px!important;
  }

  .margin-bottom-phablet-14 {
    margin-bottom: 140px!important;
  }

  .margin-bottom-phablet-15 {
    margin-bottom: 150px!important;
  }

  .margin-bottom-phablet-16 {
    margin-bottom: 160px!important;
  }

  .margin-bottom-phablet-17 {
    margin-bottom: 170px!important;
  }

  .margin-bottom-phablet-18 {
    margin-bottom: 180px!important;
  }

  .margin-bottom-phablet-19 {
    margin-bottom: 190px!important;
  }

  .margin-bottom-phablet-20 {
    margin-bottom: 200px!important;
  }

  .margin-left-phablet-0 {
    margin-left: 0!important;
  }

  .margin-left-phablet-1 {
    margin-left: 10px!important;
  }

  .margin-left-phablet-2 {
    margin-left: 20px!important;
  }

  .margin-left-phablet-3 {
    margin-left: 30px!important;
  }

  .margin-left-phablet-4 {
    margin-left: 40px!important;
  }

  .margin-left-phablet-5 {
    margin-left: 50px!important;
  }

  .margin-left-phablet-6 {
    margin-left: 60px!important;
  }

  .margin-left-phablet-7 {
    margin-left: 70px!important;
  }

  .margin-left-phablet-8 {
    margin-left: 80px!important;
  }

  .margin-left-phablet-9 {
    margin-left: 90px!important;
  }

  .margin-left-phablet-10 {
    margin-left: 100px!important;
  }

  .margin-left-phablet-11 {
    margin-left: 110px!important;
  }

  .margin-left-phablet-12 {
    margin-left: 120px!important;
  }

  .margin-left-phablet-13 {
    margin-left: 130px!important;
  }

  .margin-left-phablet-14 {
    margin-left: 140px!important;
  }

  .margin-left-phablet-15 {
    margin-left: 150px!important;
  }

  .margin-left-phablet-16 {
    margin-left: 160px!important;
  }

  .margin-left-phablet-17 {
    margin-left: 170px!important;
  }

  .margin-left-phablet-18 {
    margin-left: 180px!important;
  }

  .margin-left-phablet-19 {
    margin-left: 190px!important;
  }

  .margin-left-phablet-20 {
    margin-left: 200px!important;
  }
}

@media (max-width:435px) {
  .padding-phone-0 {
    padding: 0!important;
  }

  .padding-phone-1 {
    padding: 10px!important;
  }

  .padding-phone-2 {
    padding: 20px!important;
  }

  .padding-phone-3 {
    padding: 30px!important;
  }

  .padding-phone-4 {
    padding: 40px!important;
  }

  .padding-phone-5 {
    padding: 50px!important;
  }

  .padding-phone-6 {
    padding: 60px!important;
  }

  .padding-phone-7 {
    padding: 70px!important;
  }

  .padding-phone-8 {
    padding: 80px!important;
  }

  .padding-phone-9 {
    padding: 90px!important;
  }

  .padding-phone-10 {
    padding: 100px!important;
  }

  .padding-phone-11 {
    padding: 110px!important;
  }

  .padding-phone-12 {
    padding: 120px!important;
  }

  .padding-phone-13 {
    padding: 130px!important;
  }

  .padding-phone-14 {
    padding: 140px!important;
  }

  .padding-phone-15 {
    padding: 150px!important;
  }

  .padding-phone-16 {
    padding: 160px!important;
  }

  .padding-phone-17 {
    padding: 170px!important;
  }

  .padding-phone-18 {
    padding: 180px!important;
  }

  .padding-phone-19 {
    padding: 190px!important;
  }

  .padding-phone-20 {
    padding: 200px!important;
  }

  .padding-top-phone-0 {
    padding-top: 0!important;
  }

  .padding-top-phone-1 {
    padding-top: 10px!important;
  }

  .padding-top-phone-2 {
    padding-top: 20px!important;
  }

  .padding-top-phone-3 {
    padding-top: 30px!important;
  }

  .padding-top-phone-4 {
    padding-top: 40px!important;
  }

  .padding-top-phone-5 {
    padding-top: 50px!important;
  }

  .padding-top-phone-6 {
    padding-top: 60px!important;
  }

  .padding-top-phone-7 {
    padding-top: 70px!important;
  }

  .padding-top-phone-8 {
    padding-top: 80px!important;
  }

  .padding-top-phone-9 {
    padding-top: 90px!important;
  }

  .padding-top-phone-10 {
    padding-top: 100px!important;
  }

  .padding-top-phone-11 {
    padding-top: 110px!important;
  }

  .padding-top-phone-12 {
    padding-top: 120px!important;
  }

  .padding-top-phone-13 {
    padding-top: 130px!important;
  }

  .padding-top-phone-14 {
    padding-top: 140px!important;
  }

  .padding-top-phone-15 {
    padding-top: 150px!important;
  }

  .padding-top-phone-16 {
    padding-top: 160px!important;
  }

  .padding-top-phone-17 {
    padding-top: 170px!important;
  }

  .padding-top-phone-18 {
    padding-top: 180px!important;
  }

  .padding-top-phone-19 {
    padding-top: 190px!important;
  }

  .padding-top-phone-20 {
    padding-top: 200px!important;
  }

  .padding-right-phone-0 {
    padding-right: 0!important;
  }

  .padding-right-phone-1 {
    padding-right: 10px!important;
  }

  .padding-right-phone-2 {
    padding-right: 20px!important;
  }

  .padding-right-phone-3 {
    padding-right: 30px!important;
  }

  .padding-right-phone-4 {
    padding-right: 40px!important;
  }

  .padding-right-phone-5 {
    padding-right: 50px!important;
  }

  .padding-right-phone-6 {
    padding-right: 60px!important;
  }

  .padding-right-phone-7 {
    padding-right: 70px!important;
  }

  .padding-right-phone-8 {
    padding-right: 80px!important;
  }

  .padding-right-phone-9 {
    padding-right: 90px!important;
  }

  .padding-right-phone-10 {
    padding-right: 100px!important;
  }

  .padding-right-phone-11 {
    padding-right: 110px!important;
  }

  .padding-right-phone-12 {
    padding-right: 120px!important;
  }

  .padding-right-phone-13 {
    padding-right: 130px!important;
  }

  .padding-right-phone-14 {
    padding-right: 140px!important;
  }

  .padding-right-phone-15 {
    padding-right: 150px!important;
  }

  .padding-right-phone-16 {
    padding-right: 160px!important;
  }

  .padding-right-phone-17 {
    padding-right: 170px!important;
  }

  .padding-right-phone-18 {
    padding-right: 180px!important;
  }

  .padding-right-phone-19 {
    padding-right: 190px!important;
  }

  .padding-right-phone-20 {
    padding-right: 200px!important;
  }

  .padding-bottom-phone-0 {
    padding-bottom: 0!important;
  }

  .padding-bottom-phone-1 {
    padding-bottom: 10px!important;
  }

  .padding-bottom-phone-2 {
    padding-bottom: 20px!important;
  }

  .padding-bottom-phone-3 {
    padding-bottom: 30px!important;
  }

  .padding-bottom-phone-4 {
    padding-bottom: 40px!important;
  }

  .padding-bottom-phone-5 {
    padding-bottom: 50px!important;
  }

  .padding-bottom-phone-6 {
    padding-bottom: 60px!important;
  }

  .padding-bottom-phone-7 {
    padding-bottom: 70px!important;
  }

  .padding-bottom-phone-8 {
    padding-bottom: 80px!important;
  }

  .padding-bottom-phone-9 {
    padding-bottom: 90px!important;
  }

  .padding-bottom-phone-10 {
    padding-bottom: 100px!important;
  }

  .padding-bottom-phone-11 {
    padding-bottom: 110px!important;
  }

  .padding-bottom-phone-12 {
    padding-bottom: 120px!important;
  }

  .padding-bottom-phone-13 {
    padding-bottom: 130px!important;
  }

  .padding-bottom-phone-14 {
    padding-bottom: 140px!important;
  }

  .padding-bottom-phone-15 {
    padding-bottom: 150px!important;
  }

  .padding-bottom-phone-16 {
    padding-bottom: 160px!important;
  }

  .padding-bottom-phone-17 {
    padding-bottom: 170px!important;
  }

  .padding-bottom-phone-18 {
    padding-bottom: 180px!important;
  }

  .padding-bottom-phone-19 {
    padding-bottom: 190px!important;
  }

  .padding-bottom-phone-20 {
    padding-bottom: 200px!important;
  }

  .padding-left-phone-0 {
    padding-left: 0!important;
  }

  .padding-left-phone-1 {
    padding-left: 10px!important;
  }

  .padding-left-phone-2 {
    padding-left: 20px!important;
  }

  .padding-left-phone-3 {
    padding-left: 30px!important;
  }

  .padding-left-phone-4 {
    padding-left: 40px!important;
  }

  .padding-left-phone-5 {
    padding-left: 50px!important;
  }

  .padding-left-phone-6 {
    padding-left: 60px!important;
  }

  .padding-left-phone-7 {
    padding-left: 70px!important;
  }

  .padding-left-phone-8 {
    padding-left: 80px!important;
  }

  .padding-left-phone-9 {
    padding-left: 90px!important;
  }

  .padding-left-phone-10 {
    padding-left: 100px!important;
  }

  .padding-left-phone-11 {
    padding-left: 110px!important;
  }

  .padding-left-phone-12 {
    padding-left: 120px!important;
  }

  .padding-left-phone-13 {
    padding-left: 130px!important;
  }

  .padding-left-phone-14 {
    padding-left: 140px!important;
  }

  .padding-left-phone-15 {
    padding-left: 150px!important;
  }

  .padding-left-phone-16 {
    padding-left: 160px!important;
  }

  .padding-left-phone-17 {
    padding-left: 170px!important;
  }

  .padding-left-phone-18 {
    padding-left: 180px!important;
  }

  .padding-left-phone-19 {
    padding-left: 190px!important;
  }

  .padding-left-phone-20 {
    padding-left: 200px!important;
  }

  .margin-phone-0 {
    margin: 0!important;
  }

  .margin-phone-1 {
    margin: 10px!important;
  }

  .margin-phone-2 {
    margin: 20px!important;
  }

  .margin-phone-3 {
    margin: 30px!important;
  }

  .margin-phone-4 {
    margin: 40px!important;
  }

  .margin-phone-5 {
    margin: 50px!important;
  }

  .margin-phone-6 {
    margin: 60px!important;
  }

  .margin-phone-7 {
    margin: 70px!important;
  }

  .margin-phone-8 {
    margin: 80px!important;
  }

  .margin-phone-9 {
    margin: 90px!important;
  }

  .margin-phone-10 {
    margin: 100px!important;
  }

  .margin-phone-11 {
    margin: 110px!important;
  }

  .margin-phone-12 {
    margin: 120px!important;
  }

  .margin-phone-13 {
    margin: 130px!important;
  }

  .margin-phone-14 {
    margin: 140px!important;
  }

  .margin-phone-15 {
    margin: 150px!important;
  }

  .margin-phone-16 {
    margin: 160px!important;
  }

  .margin-phone-17 {
    margin: 170px!important;
  }

  .margin-phone-18 {
    margin: 180px!important;
  }

  .margin-phone-19 {
    margin: 190px!important;
  }

  .margin-phone-20 {
    margin: 200px!important;
  }

  .margin-top-phone-0 {
    margin-top: 0!important;
  }

  .margin-top-phone-1 {
    margin-top: 10px!important;
  }

  .margin-top-phone-2 {
    margin-top: 20px!important;
  }

  .margin-top-phone-3 {
    margin-top: 30px!important;
  }

  .margin-top-phone-4 {
    margin-top: 40px!important;
  }

  .margin-top-phone-5 {
    margin-top: 50px!important;
  }

  .margin-top-phone-6 {
    margin-top: 60px!important;
  }

  .margin-top-phone-7 {
    margin-top: 70px!important;
  }

  .margin-top-phone-8 {
    margin-top: 80px!important;
  }

  .margin-top-phone-9 {
    margin-top: 90px!important;
  }

  .margin-top-phone-10 {
    margin-top: 100px!important;
  }

  .margin-top-phone-11 {
    margin-top: 110px!important;
  }

  .margin-top-phone-12 {
    margin-top: 120px!important;
  }

  .margin-top-phone-13 {
    margin-top: 130px!important;
  }

  .margin-top-phone-14 {
    margin-top: 140px!important;
  }

  .margin-top-phone-15 {
    margin-top: 150px!important;
  }

  .margin-top-phone-16 {
    margin-top: 160px!important;
  }

  .margin-top-phone-17 {
    margin-top: 170px!important;
  }

  .margin-top-phone-18 {
    margin-top: 180px!important;
  }

  .margin-top-phone-19 {
    margin-top: 190px!important;
  }

  .margin-top-phone-20 {
    margin-top: 200px!important;
  }

  .margin-right-phone-0 {
    margin-right: 0!important;
  }

  .margin-right-phone-1 {
    margin-right: 10px!important;
  }

  .margin-right-phone-2 {
    margin-right: 20px!important;
  }

  .margin-right-phone-3 {
    margin-right: 30px!important;
  }

  .margin-right-phone-4 {
    margin-right: 40px!important;
  }

  .margin-right-phone-5 {
    margin-right: 50px!important;
  }

  .margin-right-phone-6 {
    margin-right: 60px!important;
  }

  .margin-right-phone-7 {
    margin-right: 70px!important;
  }

  .margin-right-phone-8 {
    margin-right: 80px!important;
  }

  .margin-right-phone-9 {
    margin-right: 90px!important;
  }

  .margin-right-phone-10 {
    margin-right: 100px!important;
  }

  .margin-right-phone-11 {
    margin-right: 110px!important;
  }

  .margin-right-phone-12 {
    margin-right: 120px!important;
  }

  .margin-right-phone-13 {
    margin-right: 130px!important;
  }

  .margin-right-phone-14 {
    margin-right: 140px!important;
  }

  .margin-right-phone-15 {
    margin-right: 150px!important;
  }

  .margin-right-phone-16 {
    margin-right: 160px!important;
  }

  .margin-right-phone-17 {
    margin-right: 170px!important;
  }

  .margin-right-phone-18 {
    margin-right: 180px!important;
  }

  .margin-right-phone-19 {
    margin-right: 190px!important;
  }

  .margin-right-phone-20 {
    margin-right: 200px!important;
  }

  .margin-bottom-phone-0 {
    margin-bottom: 0!important;
  }

  .margin-bottom-phone-1 {
    margin-bottom: 10px!important;
  }

  .margin-bottom-phone-2 {
    margin-bottom: 20px!important;
  }

  .margin-bottom-phone-3 {
    margin-bottom: 30px!important;
  }

  .margin-bottom-phone-4 {
    margin-bottom: 40px!important;
  }

  .margin-bottom-phone-5 {
    margin-bottom: 50px!important;
  }

  .margin-bottom-phone-6 {
    margin-bottom: 60px!important;
  }

  .margin-bottom-phone-7 {
    margin-bottom: 70px!important;
  }

  .margin-bottom-phone-8 {
    margin-bottom: 80px!important;
  }

  .margin-bottom-phone-9 {
    margin-bottom: 90px!important;
  }

  .margin-bottom-phone-10 {
    margin-bottom: 100px!important;
  }

  .margin-bottom-phone-11 {
    margin-bottom: 110px!important;
  }

  .margin-bottom-phone-12 {
    margin-bottom: 120px!important;
  }

  .margin-bottom-phone-13 {
    margin-bottom: 130px!important;
  }

  .margin-bottom-phone-14 {
    margin-bottom: 140px!important;
  }

  .margin-bottom-phone-15 {
    margin-bottom: 150px!important;
  }

  .margin-bottom-phone-16 {
    margin-bottom: 160px!important;
  }

  .margin-bottom-phone-17 {
    margin-bottom: 170px!important;
  }

  .margin-bottom-phone-18 {
    margin-bottom: 180px!important;
  }

  .margin-bottom-phone-19 {
    margin-bottom: 190px!important;
  }

  .margin-bottom-phone-20 {
    margin-bottom: 200px!important;
  }

  .margin-left-phone-0 {
    margin-left: 0!important;
  }

  .margin-left-phone-1 {
    margin-left: 10px!important;
  }

  .margin-left-phone-2 {
    margin-left: 20px!important;
  }

  .margin-left-phone-3 {
    margin-left: 30px!important;
  }

  .margin-left-phone-4 {
    margin-left: 40px!important;
  }

  .margin-left-phone-5 {
    margin-left: 50px!important;
  }

  .margin-left-phone-6 {
    margin-left: 60px!important;
  }

  .margin-left-phone-7 {
    margin-left: 70px!important;
  }

  .margin-left-phone-8 {
    margin-left: 80px!important;
  }

  .margin-left-phone-9 {
    margin-left: 90px!important;
  }

  .margin-left-phone-10 {
    margin-left: 100px!important;
  }

  .margin-left-phone-11 {
    margin-left: 110px!important;
  }

  .margin-left-phone-12 {
    margin-left: 120px!important;
  }

  .margin-left-phone-13 {
    margin-left: 130px!important;
  }

  .margin-left-phone-14 {
    margin-left: 140px!important;
  }

  .margin-left-phone-15 {
    margin-left: 150px!important;
  }

  .margin-left-phone-16 {
    margin-left: 160px!important;
  }

  .margin-left-phone-17 {
    margin-left: 170px!important;
  }

  .margin-left-phone-18 {
    margin-left: 180px!important;
  }

  .margin-left-phone-19 {
    margin-left: 190px!important;
  }

  .margin-left-phone-20 {
    margin-left: 200px!important;
  }
}

.pointer-events {
  pointer-events: all!important;
}

.disable-pointer-events {
  pointer-events: none!important;
}

.space {
  padding: 0 20px;
}

.cursorPointer,
.pointer {
  cursor: pointer;
}

.cursorZoomIn,
[data-action=zoom] {
  cursor: pointer;
  cursor: -moz-zoom-in!important;
  cursor: -webkit-zoom-in!important;
}

.cursorZoomOut,
.zoom-img img.zoom-img,
.zoom-img-wrap img.zoom-img {
  cursor: pointer;
  cursor: -moz-zoom-out!important;
  cursor: -webkit-zoom-out!important;
}

.cursorGrab {
  cursor: move;
  cursor: grab!important;
  cursor: -moz-grab!important;
  cursor: -webkit-grab!important;
}

.cursorGrab:active {
  cursor: grabbing!important;
  cursor: -moz-grabbing!important;
  cursor: -webkit-grabbing!important;
}

.pattern .background {
  background-repeat: repeat;
  background-size: auto;
}

.attachment-fixed {
  background-attachment: fixed!important;
  background-size: cover!important;
}

.disableClick {
  pointer-events: none;
}

.cover {
  background-size: cover!important;
}

.disableSelect,
.disableSelect *,
.noSelect,
.noSelect * {
  -webkit-touch-callout: none!important;
  user-select: none!important;
}

.enableSelect,
.enableSelect *,
.selectable,
.selectable * {
  -webkit-touch-callout: auto!important;
  user-select: auto!important;
}

.clearBoth:after {
  content: "";
  clear: both;
  display: table;
}

@charset "UTF-8";

.dialog,
body,
html {
  -webkit-tap-highlight-color: transparent;
}

body,
html,
img {
  max-width: 100%;
}

.button.actionButton svg,
.button.play svg,
.button:not(.stroke) svg,
.slide.whiteSlide .button.actionButton svg,
.slides {
  fill: #fff;
}

.button svg,
.button svg * {
  pointer-events: none!important;
}

.material-icons,
.slides {
  -webkit-font-smoothing: antialiased;
}

.button,
.container .wrap,
.slides-form.center input,
.slides-form.center textarea {
  text-align: center;
}

.button,
.material-icons,
.music-96 .sc-trackslist a,
.navigation li[data-title]:before,
.nobr,
.nowrap,
.panel .sections .menu,
.panel .sections>div {
  white-space: nowrap;
}

a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
hr,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  border: 0;
  vertical-align: baseline;
  margin: 0;
  padding: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

.button,
.button.actionButton,
.dot,
.dot:after,
.material-icons,
img {
  display: inline-block;
}

li,
ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:after,
blockquote:before,
q:after,
q:before {
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

b,
strong {
  font-weight: 600;
}

html {
  position: static!important;
  top: 0!important;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

*,
:after,
:before {
  box-sizing: inherit;
}

body {
  position: absolute;
  width: 100%;
  height: 100%;
}

body,
html {
  overflow-x: hidden;
}

html.scrollable,
html.scrollable body {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.button,
.content,
.slide {
  overflow: hidden;
}

img.round {
  border-radius: 999px;
}

img.rounded {
  border-radius: 6px;
}

.slides {
  color: #fff;
  font-family: Roboto,sans-serif;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  background: #111;
}

.slides.bodyWhite {
  background: #fff;
}

.slides.desktopSwipe {
  cursor: -webkit-grab;
}

.slides.desktopSwipe:active {
  cursor: -webkit-grabbing;
}

.slides.desktopSwipe .slide .container .wrap {
  cursor: inherit;
}

.button,
.dropdownTrigger,
.helpBubble,
.popupTrigger,
.sidebarTrigger,
.videoThumbnail,
a {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
  transition: .35s;
}

a.underline {
  text-decoration: underline;
}

.button,
.dialog li {
  text-decoration: none;
}

a:hover {
  transition: .15s;
  opacity: .8;
}

.h1,
h1 {
  font-size: 42px;
  line-height: 1.285;
  font-weight: 300;
  margin-bottom: 20px;
  letter-spacing: -.036em;
}

.h1.big,
h1.big {
  font-size: 58px;
  line-height: 1;
  font-weight: 100;
}

.h1.huge,
h1.huge {
  font-size: 64px;
  line-height: 1.218751;
  letter-spacing: -.04em;
  margin-bottom: 40px;
  font-weight: 100;
}

.h2,
.h3,
h2,
h3 {
  font-weight: 400;
}

.h1.small,
h1.small {
  font-size: 46px;
}

.h1.micro,
h1.micro {
  font-size: 34px;
}

.h2,
h2 {
  font-size: 35px;
  line-height: 1.17;
  margin-bottom: 15px;
}

.h2.small,
h2.small {
  font-size: 28px;
}

.h2.micro,
h2.micro {
  font-size: 19px;
}

.h2.huge,
h2.huge {
  font-size: 42px;
}

.h3,
h3 {
  font-size: 20px;
  margin-bottom: 12px;
}

.h3.large,
h3.large {
  font-size: 32px;
}

.h3.big,
h3.big {
  font-size: 24px;
}

.h3.small,
h3.small {
  font-size: 20px;
}

.h3.micro,
h3.micro {
  font-size: 16px;
}

.h3+.h1,
.h3+h1,
h3+.h1,
h3+h1 {
  margin-top: 30px;
}

.h4,
h4 {
  font-size: 18px;
  margin-bottom: 10px;
}

.h5,
h5 {
  font-size: 16px;
}

.h6,
h6 {
  font-size: 14px;
}

.p,
blockquote,
p {
  font-size: 22px;
  line-height: 1.6363636364;
  margin-bottom: 30px;
  font-weight: 300;
}

.p.hero,
blockquote.hero,
p.hero {
  font-size: 28px;
  line-height: 1.5;
  margin-bottom: 25px;
}

.p.large,
blockquote.large,
p.large {
  font-size: 32px;
  line-height: 1.4;
}

.p.small,
blockquote.small,
p.small {
  font-size: 18px;
  line-height: 1.36;
  margin-bottom: 20px;
}

.p.tiny,
blockquote.tiny,
p.tiny {
  font-size: 16px;
  line-height: 1.625;
  margin-bottom: 12px;
  font-weight: 400;
}

.p.micro,
blockquote.micro,
p.micro {
  font-size: 14px;
  line-height: 1.5714;
  margin-bottom: 20px;
  margin-top: 2px;
}

blockquote {
  padding-left: 2em;
  border-left: 2px solid;
}

small {
  font-size: 17px;
  line-height: 1.3;
}

small .small {
  font-size: 14px;
  line-height: 1.28;
}

.list.circle li {
  list-style-type: circle;
}

.list.disc li {
  list-style-type: disc;
}

.list.square li {
  list-style-type: square;
}

@media (max-width:1023px) {
  .h1,
  .h1.big,
  .h1.huge,
  h1,
  h1.big,
  h1.huge {
    font-size: 40px;
    margin-bottom: 20px;
  }

  p.hero {
    font-size: 22px;
  }

  .h1.small,
  h1.small {
    font-size: 32px;
  }

  .mobileCrop {
    margin: 0!important;
  }

  .mobileCropBottom {
    margin-bottom: 0!important;
  }

  .mobileCropTop {
    margin-top: 0!important;
  }

  .mobileCropLeft {
    margin-left: 0!important;
  }

  .mobileCropRight {
    margin-right: 0!important;
  }
}

@media (max-width:319px) {
  .h1.big,
  .h1.huge,
  h1.big,
  h1.huge {
    font-size: 32px;
  }
}

.button {
  border-radius: 4px;
  padding: 16px 24px 17px;
  color: #fff;
  border: none;
  outline: 0;
  background: #202020;
  font-size: 16px;
  font-weight: 500;
  vertical-align: top;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  letter-spacing: normal!important;
  position: relative;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
  -webkit-appearance: none;
  margin-bottom: 10px;
  transition: .3s;
  -webkit-user-select: none!important;
  -moz-user-select: none!important;
  -ms-user-select: none!important;
  user-select: none!important;
}

.content,
.slide.active {
  -webkit-backface-visibility: hidden;
}

.popup .button,
.slide .button {
  margin-left: 5px;
  margin-right: 5px;
}

.popup .button.small,
.slide .button.small {
  margin-left: 4px;
  margin-right: 4px;
}

.button.wide {
  margin-left: 0!important;
  margin-right: 0!important;
}

.button .material-icons {
  vertical-align: bottom;
  margin-top: -5px;
  margin-bottom: -2px;
  margin-right: 8px;
  -webkit-user-select: none!important;
  -moz-user-select: none!important;
  -ms-user-select: none!important;
  user-select: none!important;
}

.button .material-icons.small {
  font-size: 18px;
  margin: 0 6px 0 0;
}

.button .material-icons.right {
  margin-left: 11px;
  margin-right: 0;
}

.button svg {
  width: 22px;
  height: 22px;
  margin-top: -3px;
  top: 2px;
  vertical-align: bottom;
  margin-right: 14px;
  position: relative;
}

.button svg.right {
  margin-right: 0;
  margin-left: 14px;
}

.button.actionButton {
  height: 42px;
  width: 42px;
  padding: 12px;
  border-radius: 25px;
  z-index: 999;
  background: rgba(0,0,0,.3);
  line-height: 1;
  box-shadow: 0 0 0 1px rgba(255,255,255,.05);
  cursor: pointer;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  vertical-align: top;
}

.button.actionButton svg {
  width: 18px;
  height: 18px;
}

.button.actionButton .material-icons {
  margin: 0;
  position: relative;
  left: -3px;
  top: -3px;
  font-size: 24px;
}

.button.actionButton.big {
  width: 50px;
  height: 50px;
  padding: 16px;
}

.button.actionButton.big .material-icons {
  font-size: 24px;
}

.button.actionButton.big svg {
  width: 22px;
  height: 22px;
  left: -2px;
  top: 0;
}

.button.actionButton.stroke {
  box-shadow: none;
  padding: 10px;
}

.button.actionButton:hover:not(:active) {
  -webkit-transform: translateY(0)!important;
  transform: translateY(0)!important;
}

.button.actionButton.rounded {
  border-radius: 6px;
}

.button.actionButton.sound [class*=sound-] {
  position: absolute;
  opacity: 0;
  transition: .5s;
  left: 13px;
  top: 16px;
}

.button.actionButton.sound.stroke [class*=sound-] {
  left: 11px;
  top: 14px;
}

.button.actionButton.sound.playing .sound-on,
.button.actionButton.sound:not(.playing) .sound-off {
  opacity: 1;
}

.button.actionButton.transparent {
  background-color: transparent;
}

.button:hover {
  box-shadow: 0 6px 7px 0 rgba(0,0,0,.15),0 0 5px 0 rgba(0,0,0,.1);
  opacity: 1;
  -webkit-transform: translateY(-2px)!important;
  transform: translateY(-2px)!important;
  transition: .35s!important;
}

.button:hover:after {
  opacity: .5;
}

.button:active {
  box-shadow: 0 3px 6px 0 rgba(0,0,0,.1),0 0 10px 0 rgba(0,0,0,.1),0 1px 4px -1px rgba(0,0,0,.1);
  -webkit-transform: translateY(0)!important;
  transform: translateY(0)!important;
  transition: .35s!important;
}

.button.shade:after,
.dot:after {
  transition: .25s;
  content: "";
}

.button:active:after {
  opacity: 1;
}

.button.uppercase {
  font-size: 15px;
  padding-top: 17px;
  padding-bottom: 17px;
}

.button.lowercase {
  text-transform: lowercase;
  letter-spacing: 0;
  font-weight: 300;
}

.button.round {
  border-radius: 99px;
  padding-left: 28px;
  padding-right: 28px;
}

.button.stroke,
.button.thin-stroke {
  background-color: transparent!important;
  padding: 14px 22px 15px;
  color: #202020;
}

.button.rounded {
  border-radius: 6px;
}

.button.rectangular {
  border-radius: 1px;
}

.button.square {
  border-radius: 0;
}

.button.thin-stroke {
  font-weight: 300;
  border: 1px solid;
}

.slide.whiteSlide .button.thin-stroke {
  color: #202020;
}

.button.stroke {
  border: 2px solid;
}

.slide.whiteSlide .button.stroke {
  color: #202020;
}

.button.stroke.round {
  padding-left: 26px;
  padding-right: 26px;
}

.button.stroke.uppercase {
  padding-top: 15px;
  padding-bottom: 15px;
}

.button.stroke.uppercase svg {
  margin-bottom: -2px;
}

.button.stroke.uppercase.small {
  padding: 11px 15px;
}

.button.stroke.small {
  border: 1px solid;
  padding-top: 9px;
  padding-bottom: 9px;
}

@media (min-width:768px) {
  .button.stroke.big {
    padding: 19px 30px;
  }

  .button.stroke.big.uppercase {
    padding-top: 21px;
    padding-bottom: 21px;
  }
}

.button.stroke:not(.flat):hover {
  box-shadow: inset 0 -100px 0 rgba(41,41,41,.05),0 4px 6px 0 rgba(0,0,0,.1),0 1px 10px 0 rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.1);
}

.button.empty,
.button.flat:not(:hover) {
  box-shadow: none;
}

.button.small {
  font-size: 15px;
  font-weight: 500;
  padding: 10px 16px;
}

.button.small .material-icons {
  vertical-align: bottom;
  position: relative;
  font-size: 20px;
  margin-right: 8px;
  bottom: 1px;
}

.button.small .material-icons.right {
  margin-left: 8px;
  margin-right: 0;
}

.button.small svg {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  top: 0;
}

.button.small svg.right {
  margin-right: 0;
  margin-left: 10px;
}

.button.small.round {
  padding-left: 18px;
  padding-right: 18px;
}

.button.small.rounded {
  border-radius: 6px;
}

.button.small.uppercase {
  font-size: 12px;
  padding: 12px 16px;
  letter-spacing: .125em;
}

.button.small.uppercase.round {
  padding-left: 19px;
  padding-right: 19px;
}

@media (min-width:768px) {
  .button.big {
    font-size: 20px;
    padding: 21px 32px;
  }

  .button.big.round {
    padding-left: 36px;
    padding-right: 36px;
  }

  .button.big.rounded {
    border-radius: 7px;
  }

  .button.big.uppercase {
    font-size: 17px;
    padding: 23px 32px;
  }

  .button.big.uppercase.round {
    padding-left: 36px;
    padding-right: 36px;
  }

  .button.big .material-icons {
    vertical-align: bottom;
    margin-right: 16px;
    font-size: 30px;
  }

  .button.big .material-icons.right {
    margin-left: 16px;
    margin-right: 0;
  }

  .button.big svg {
    width: 27px;
    height: 27px;
    margin-right: 16px;
    top: 1px;
  }

  .button.big svg.right {
    margin-right: 0;
    margin-left: 16px;
  }
}

.button.empty,
.button.hollow {
  padding: 0!important;
  background-color: transparent!important;
  font-size: 0!important;
}

.button.play,
.panel .sections>div.right ul.crop li:last-child {
  margin-right: 0;
}

.button.empty {
  margin: 0;
}

.button.hollow {
  box-shadow: none!important;
}

.button.hollow svg {
  margin: 0;
}

.button.shade {
  position: relative;
}

.button.shade:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #292929;
  opacity: 0;
}

.button.shade:hover:after {
  opacity: .15;
}

.button.shade:active:after {
  opacity: .2;
}

.button.play {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  padding: 27px;
  margin-left: 0;
}

.button.play svg {
  width: 35px;
  height: 36px;
  margin: 0;
}

.button.play.small {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 20px 19px;
}

.button.play.small svg {
  fill: #fff;
  width: 23px;
  height: 23px;
}

.button.play:hover {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}

.button.gradient {
  position: relative;
}

.button.gradient:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom,#fff 0,#000 100%);
  z-index: -1;
  opacity: .1;
}

.slide.whiteSlide .button.white:hover {
  box-shadow: 0 4px 6px 0 rgba(0,0,0,.1),0 1px 10px 0 rgba(0,0,0,.1);
}

.slide.whiteSlide .button.white:hover:after {
  opacity: .3;
}

.roundButton {
  border-radius: 50px;
  height: 50px;
  width: 50px;
  padding: 14px;
  margin: 5px;
}

.roundButton svg {
  bottom: 2px;
}

@media (max-width:319px) {
  .button.uppercase,
  .uppercase {
    letter-spacing: .07em;
  }
}

.button.uppercase,
.h1.uppercase,
.h2.uppercase,
.h3.uppercase,
.h4.uppercase,
.p.uppercase,
h1.uppercase,
h2.uppercase,
h3.uppercase,
h4.uppercase,
h5.uppercase,
p.uppercase {
  letter-spacing: .125em!important;
  text-indent: -.1em!important;
  font-weight: 700!important;
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  direction: ltr;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-feature-settings: 'liga';
  font-feature-settings: 'liga';
}

.slides-form,
.slides-form button {
  font-family: inherit;
}

.material-icons.md-18 {
  font-size: 18px;
}

.material-icons.md-24 {
  font-size: 24px;
}

.material-icons.md-36 {
  font-size: 36px;
}

.material-icons.md-48 {
  font-size: 48px;
}

.slide.whiteSlide svg {
  fill: #202020;
}

.embedContainer,
.svgContainer {
  position: relative;
  width: 100%;
  height: 0;
  padding: 0;
}

.embedContainer .scale,
.svgContainer svg.scale {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.dots {
  font-size: 0;
}

.dot {
  padding: 7px;
}

.dot:after {
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  opacity: .5;
}

.dot.big .dot:after {
  width: 14px;
  height: 14px;
}

.slide.whiteSlide .dot:after {
  background: #202020;
}

.dot:hover:after {
  -webkit-transform: scale(1.33333);
  transform: scale(1.33333);
  opacity: 1;
}

.dot.selected:after,
.dot:active:after {
  opacity: 1;
  -webkit-transform: scale(1.675);
  transform: scale(1.675);
}

.tabs {
  color: #fff;
  max-width: 260px;
  border-radius: 5px;
}

.tabs li {
  padding: 16px 20px;
  letter-spacing: 2.5px;
  font-size: 12px;
  transition: .15s;
  margin-top: -1px;
  border: 1px solid rgba(255,255,255,.3);
}

.tabs li:not(:last-child) {
  border-bottom: 0;
}

.tabs li:first-child {
  border-radius: 4px 4px 0 0;
}

.tabs li:last-child {
  border-radius: 0 0 4px 4px;
}

.tabs li.selected {
  background: #fff;
  color: #202020;
}

.slide.whiteSlide .tabs li {
  border-color: #e5e5e5;
  color: #202020;
}

.slide.whiteSlide .tabs li.selected {
  background: #202020;
  border-color: #202020;
  color: #fff;
}

.links li {
  font-size: 17px;
  letter-spacing: 0;
  padding: 4px 0;
}

.slides-form {
  font-size: 0;
  margin-top: -5px;
}

.slides-form textarea {
  max-height: 200px;
  max-width: 100%;
  min-height: 130px;
  font-weight: 400;
}

.slides-form textarea.d {
  border-radius: 15px!important;
}

.slides-form .label,
.slides-form label {
  display: block;
  font-size: 14px;
  margin-top: 12px;
  margin-bottom: 2px;
}

.slides-form .label.uppercase,
.slides-form label.uppercase {
  font-size: 14px;
}

.slides-form input[type=email],
.slides-form input[type=name],
.slides-form input[type=number],
.slides-form input[type=password],
.slides-form input[type=tel],
.slides-form input[type=text],
.slides-form select,
.slides-form textarea {
  font-family: inherit;
  position: relative;
  background: #fff;
  padding: 15px 16px 16px;
  border: none;
  font-size: 16px;
  color: #242424;
  outline: 0;
  border-radius: 4px;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid rgba(0,0,0,.1);
  transition: .15s;
}

.slides-form input[type=email].flat,
.slides-form input[type=email]:focus,
.slides-form input[type=email]:hover,
.slides-form input[type=name].flat,
.slides-form input[type=name]:focus,
.slides-form input[type=name]:hover,
.slides-form input[type=number].flat,
.slides-form input[type=number]:focus,
.slides-form input[type=number]:hover,
.slides-form input[type=password].flat,
.slides-form input[type=password]:focus,
.slides-form input[type=password]:hover,
.slides-form input[type=tel].flat,
.slides-form input[type=tel]:focus,
.slides-form input[type=tel]:hover,
.slides-form input[type=text].flat,
.slides-form input[type=text]:focus,
.slides-form input[type=text]:hover,
.slides-form select.flat,
.slides-form select:focus,
.slides-form select:hover,
.slides-form textarea.flat,
.slides-form textarea:focus,
.slides-form textarea:hover {
  border-color: rgba(0,0,0,.2);
}

.slides-form input[type=email]:focus,
.slides-form input[type=name]:focus,
.slides-form input[type=number]:focus,
.slides-form input[type=password]:focus,
.slides-form input[type=tel]:focus,
.slides-form input[type=text]:focus,
.slides-form select:focus,
.slides-form textarea:focus {
  border-color: #2196f3;
  z-index: 10;
}

.slides-form input[type=email]:focus::-webkit-input-placeholder,
.slides-form input[type=name]:focus::-webkit-input-placeholder,
.slides-form input[type=number]:focus::-webkit-input-placeholder,
.slides-form input[type=password]:focus::-webkit-input-placeholder,
.slides-form input[type=tel]:focus::-webkit-input-placeholder,
.slides-form input[type=text]:focus::-webkit-input-placeholder,
.slides-form select:focus::-webkit-input-placeholder,
.slides-form textarea:focus::-webkit-input-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: 0;
}

.slides-form input[type=email]:focus:-moz-placeholder,
.slides-form input[type=name]:focus:-moz-placeholder,
.slides-form input[type=number]:focus:-moz-placeholder,
.slides-form input[type=password]:focus:-moz-placeholder,
.slides-form input[type=tel]:focus:-moz-placeholder,
.slides-form input[type=text]:focus:-moz-placeholder,
.slides-form select:focus:-moz-placeholder,
.slides-form textarea:focus:-moz-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: 0;
}

.slides-form input[type=email]:focus::-moz-placeholder,
.slides-form input[type=name]:focus::-moz-placeholder,
.slides-form input[type=number]:focus::-moz-placeholder,
.slides-form input[type=password]:focus::-moz-placeholder,
.slides-form input[type=tel]:focus::-moz-placeholder,
.slides-form input[type=text]:focus::-moz-placeholder,
.slides-form select:focus::-moz-placeholder,
.slides-form textarea:focus::-moz-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: 0;
}

.slides-form input[type=email]:focus:-ms-input-placeholder,
.slides-form input[type=name]:focus:-ms-input-placeholder,
.slides-form input[type=number]:focus:-ms-input-placeholder,
.slides-form input[type=password]:focus:-ms-input-placeholder,
.slides-form input[type=tel]:focus:-ms-input-placeholder,
.slides-form input[type=text]:focus:-ms-input-placeholder,
.slides-form select:focus:-ms-input-placeholder,
.slides-form textarea:focus:-ms-input-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: 0;
}

.slides-form input[type=email].round,
.slides-form input[type=name].round,
.slides-form input[type=number].round,
.slides-form input[type=password].round,
.slides-form input[type=tel].round,
.slides-form input[type=text].round,
.slides-form select.round,
.slides-form textarea.round {
  border-radius: 50px;
  padding-left: 22px;
  padding-right: 22px;
}

.slides-form input[type=email].rounded,
.slides-form input[type=name].rounded,
.slides-form input[type=number].rounded,
.slides-form input[type=password].rounded,
.slides-form input[type=tel].rounded,
.slides-form input[type=text].rounded,
.slides-form select.rounded,
.slides-form textarea.rounded {
  border-radius: 6px;
}

.slides-form input[type=email]:after,
.slides-form input[type=name]:after,
.slides-form input[type=number]:after,
.slides-form input[type=password]:after,
.slides-form input[type=tel]:after,
.slides-form input[type=text]:after,
.slides-form select:after,
.slides-form textarea:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
}

@media (min-width:768px) {
  .slides-form input[type=email],
  .slides-form input[type=name],
  .slides-form input[type=number],
  .slides-form input[type=password],
  .slides-form input[type=tel],
  .slides-form input[type=text],
  .slides-form select,
  .slides-form textarea {
    max-width: 300px;
  }
}

.slides-form input[type=email]::-webkit-input-placeholder,
.slides-form input[type=name]::-webkit-input-placeholder,
.slides-form input[type=number]::-webkit-input-placeholder,
.slides-form input[type=password]::-webkit-input-placeholder,
.slides-form input[type=tel]::-webkit-input-placeholder,
.slides-form input[type=text]::-webkit-input-placeholder,
.slides-form select::-webkit-input-placeholder,
.slides-form textarea::-webkit-input-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: .5;
}

.slides-form input[type=email]:-moz-placeholder,
.slides-form input[type=name]:-moz-placeholder,
.slides-form input[type=number]:-moz-placeholder,
.slides-form input[type=password]:-moz-placeholder,
.slides-form input[type=tel]:-moz-placeholder,
.slides-form input[type=text]:-moz-placeholder,
.slides-form select:-moz-placeholder,
.slides-form textarea:-moz-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: .5;
}

.slides-form input[type=email]::-moz-placeholder,
.slides-form input[type=name]::-moz-placeholder,
.slides-form input[type=number]::-moz-placeholder,
.slides-form input[type=password]::-moz-placeholder,
.slides-form input[type=tel]::-moz-placeholder,
.slides-form input[type=text]::-moz-placeholder,
.slides-form select::-moz-placeholder,
.slides-form textarea::-moz-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: .5;
}

.slides-form input[type=email]:-ms-input-placeholder,
.slides-form input[type=name]:-ms-input-placeholder,
.slides-form input[type=number]:-ms-input-placeholder,
.slides-form input[type=password]:-ms-input-placeholder,
.slides-form input[type=tel]:-ms-input-placeholder,
.slides-form input[type=text]:-ms-input-placeholder,
.slides-form select:-ms-input-placeholder,
.slides-form textarea:-ms-input-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: .5;
}

.slides-form textarea.round {
  border-radius: 25px;
}

.slides-form select {
  background-image: url("data:image/svg+xml;charset=UTF-8,<svg xmlns=http://www.w3.org/2000/svg width=37 height=7><path fill=#303030 d=M14.022 0l5.978 6 6-6z /></svg>");
  background-repeat: no-repeat;
  background-position: right;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.slides-form button[type=submit],
.slides-form input[type=email],
.slides-form input[type=name],
.slides-form input[type=number],
.slides-form input[type=password],
.slides-form input[type=submit],
.slides-form input[type=tel],
.slides-form input[type=text],
.slides-form select,
.slides-form textarea {
  margin: 5px;
}

@media (max-width:768px) {
  .slides-form button[type=submit],
  .slides-form input[type=email],
  .slides-form input[type=name],
  .slides-form input[type=number],
  .slides-form input[type=password],
  .slides-form input[type=submit],
  .slides-form input[type=tel],
  .slides-form input[type=text],
  .slides-form select,
  .slides-form textarea {
    margin-left: auto!important;
    margin-right: auto!important;
    width: 100%;
    display: block!important;
  }
}

.slides-form button[type=submit].wide,
.slides-form input[type=email].wide,
.slides-form input[type=name].wide,
.slides-form input[type=number].wide,
.slides-form input[type=password].wide,
.slides-form input[type=submit].wide,
.slides-form input[type=tel].wide,
.slides-form input[type=text].wide,
.slides-form label.wide,
.slides-form select.wide,
.slides-form textarea.wide {
  max-width: 100%;
  width: 100%;
  margin-left: 0!important;
  margin-right: 0!important;
}

@media (min-width:769px) {
  .slides-form input.pair {
    width: 50%!important;
    max-width: 50%!important;
    border-top-right-radius: 0!important;
    border-bottom-right-radius: 0!important;
    margin-left: 0;
    margin-right: 0;
  }

  .slides-form input.pair+.pair {
    width: calc(50% + 1px)!important;
    max-width: calc(50% + 1px)!important;
    margin-left: -1px;
    border-radius: 0 4px 4px 0!important;
  }
}

.container,
.content,
.popup:not(.youtube) .background iframe,
.slide,
.slide:not(.youtube) .background iframe {
  width: 100%;
  height: 100%;
}

.slide {
  position: fixed;
  background: #202020;
  color: #fff;
  z-index: 10;
}

.slide.active {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.mobile .slide {
  visibility: hidden;
}

.mobile .slide.active {
  visibility: visible;
}

.slide.whiteSlide {
  color: #202020;
  background: #fff;
}

.content {
  position: absolute;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  z-index: 100;
  -webkit-overflow-scrolling: touch;
}

.content.scrollBar {
  overflow-y: auto;
}

.windows .defaultScroll .content {
  overflow: auto;
  overflow-x: hidden;
}

.mobile .content {
  overflow: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

.container .wrap .overflowHidden,
.pad,
.slide.video .background,
.videoThumbnail {
  overflow: hidden;
}

.fade .content {
  background: rgba(0,0,0,.6);
}

.dropdown.share li:after,
.fade-1 .content {
  background: rgba(0,0,0,.1);
}

.fade-2 .content {
  background: rgba(0,0,0,.2);
}

.fade-3 .content {
  background: rgba(0,0,0,.3);
}

.fade-4 .content {
  background: rgba(0,0,0,.4);
}

.fade-5 .content {
  background: rgba(0,0,0,.5);
}

.fade-6 .content {
  background: rgba(0,0,0,.6);
}

.fade-7 .content {
  background: rgba(0,0,0,.7);
}

.fade-8 .content {
  background: rgba(0,0,0,.8);
}

.fade-9 .content {
  background: rgba(0,0,0,.9);
}

.whiteSlide[class*=fade] .content {
  background: rgba(255,255,255,.85);
}

.container {
  display: table;
  table-layout: fixed;
  position: relative;
}

.container .wrap {
  display: table-cell;
  vertical-align: middle;
  overflow: hidden;
}

.container .wrap .spaceWrap,
.container .wrap.spaceWrap,
.container .wrap:not(.noSpaces) {
  padding: 120px calc(8% + 15px);
}

.container .wrap * {
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
}

.popup .background,
.slide .background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.popup .background iframe,
.slide .background iframe {
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
}

.pad,
.videoThumbnail.rounded {
  border-radius: 6px;
}

.fix-1-12 {
  max-width: 93px!important;
}

.fix-2-12 {
  max-width: 186px!important;
}

.fix-3-12 {
  max-width: 279px!important;
}

.fix-4-12 {
  max-width: 371px!important;
}

.fix-5-12 {
  max-width: 464px!important;
}

.fix-6-12 {
  max-width: 557px!important;
}

.fix-7-12 {
  max-width: 650px!important;
}

.fix-8-12 {
  max-width: 743px!important;
}

.fix-9-12 {
  max-width: 836px!important;
}

.fix-10-12 {
  max-width: 928px!important;
}

.fix-11-12 {
  max-width: 1021px!important;
}

.fix-12-12 {
  max-width: 1114px!important;
}

[class*=fix-] {
  width: 100%!important;
  margin-left: auto!important;
  margin-right: auto!important;
  float: none;
}

.toLeft,
.toLeft[class*=fix-] {
  margin-left: 0!important;
  margin-right: auto!important;
}

.toRight,
.toRight[class*=fix-] {
  margin-right: 0!important;
  margin-left: auto!important;
  float: right;
}

.toCenter {
  margin-left: auto!important;
  margin-right: auto!important;
}

.shiftImage {
  margin-top: -15%;
  margin-bottom: -100%;
}

.shiftImageVertical {
  margin-right: -100%;
  max-width: none;
}

.slide.video .background video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  background-size: cover;
}

.slide.video .background video::-webkit-media-controls {
  display: none!important;
}

.slide.video .background video::-webkit-media-controls-panel {
  display: none!important;
  -webkit-appearance: none;
}

.slide.video .background video::-webkit-media-controls-start-playback-button {
  display: none!important;
  -webkit-appearance: none;
}

html:not(.mobile) .slide.video .background[style] {
  background: 0 0!important;
}

.mobile .slide.video .background[style] video {
  display: none;
}

.videoThumbnail {
  position: relative;
  font-size: 0;
  line-height: 0;
}

.videoThumbnail:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url("../assets/svg/video-icon.svg") center center no-repeat;
  transition: .5s;
}

.videoThumbnail:not(.noTint):hover:after {
  background-color: rgba(0,0,0,.15);
}

.videoThumbnail:hover:before {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  transition: .25s;
}

.videoThumbnail:active:before {
  opacity: .8;
}

.videoThumbnail.small {
  max-width: 200px;
  display: block;
}

.videoThumbnail.small:before {
  background-size: 44px;
}

.button.empty.shadow:hover,
.shadow {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
}

.pad {
  padding: 10%;
  color: #202020;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
}

.pad.shadow,
.pad.shadowHover:hover {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
}

.pad.shadow.stroke {
  background: 0 0;
  transition: .15s;
  color: #fff;
}

.pad.shadow.stroke:hover {
  background: #fff;
  color: #202020;
  transition: .15s;
}

.pad.shadowHover {
  transition: .5s;
}

.pad small {
  font-size: 15px;
  line-height: 1.45;
  margin: 15px 0;
}

.resizing .equalElement {
  transition: 0s!important;
}

.hr {
  position: relative;
  height: 1px;
  width: 100%;
}

@media (max-width:1023px) {
  .shiftImage {
    margin-top: 0!important;
    margin-bottom: 0!important;
  }

  .shiftImageVertical {
    margin-right: 0!important;
    max-width: 100%!important;
  }
}

@media (min-width:1024px) {
  .hideForDesktop {
    display: none!important;
  }

  .showForDesktop {
    display: block!important;
  }
}

@media (max-width:1024px) {
  .hideForTablet {
    display: none!important;
  }

  .showForTablet {
    display: block!important;
  }

  .showForTabletInline {
    display: inline!important;
  }
}

@media (max-width:767px) {
  .pad.collapse,
  .pad.shadow {
    box-shadow: none;
  }

  .pad.collapse {
    background: inherit;
    color: inherit;
    border: none;
    padding: 0!important;
    overflow: inherit;
    border-radius: 0;
    transition: 0s!important;
  }

  .hideForPhablet {
    display: none!important;
  }
}

@media (max-width:768px) {
  .showForPhablet {
    display: block!important;
  }

  .showForPhabletInline {
    display: inline!important;
  }
}

@media (max-width:435px) {
  .hideForPhone {
    display: none!important;
  }

  .showForPhone {
    display: block!important;
  }

  .showForPhoneInline {
    display: inline!important;
  }
}

html.mobile .hideForMobile {
  display: none!important;
}

html.mobile .showForMobile {
  display: block!important;
}

html.mobile .showForMobileInline {
  display: inline!important;
}

.helpBubble:after {
  content: "?";
  font-size: 14px;
  width: 17px;
  height: 17px;
  line-height: 1.2;
  background: #202020;
  opacity: .3;
  color: #fff;
  border-radius: 50%;
  display: inline-block;
  margin-left: 4px;
  font-weight: 700;
  transition: .25s;
}

.helpBubble .helpMessage {
  background: rgba(255,255,255,.98);
  color: #202020;
  font-size: 16px;
  line-height: 1.625;
  position: absolute;
  z-index: 10;
  box-shadow: 0 1px 8px rgba(0,0,0,.07),0 6px 8px rgba(0,0,0,.05);
  padding: 17px;
  text-align: left;
  bottom: 50%;
  margin-bottom: 5px;
  -webkit-transform: translateY(10px) scale(.95);
  transform: translateY(10px) scale(.95);
  transition: .25s;
  opacity: 0;
  pointer-events: none;
  color: rgba(48,48,48,.7);
}

.mobile .simplifiedMobile .panel.hideOnScroll,
.panel,
.scroll .panel.hideOnScroll {
  position: fixed;
}

.panel.black,
.panel.white {
  box-shadow: 0 1px 1px rgba(0,0,0,.07);
}

.panel.bottom,
.side {
  bottom: 0;
}

.helpBubble .helpMessage strong {
  color: #303030;
}

.helpBubble:hover .helpMessage {
  pointer-events: all;
  -webkit-transform: translateY(0) scale(1);
  transform: translateY(0) scale(1);
  opacity: 1;
}

.helpBubble:hover:after {
  opacity: 1;
}

.panel {
  left: 0;
  width: 100%;
  padding: 10px 30px;
  z-index: 200;
  text-align: center;
  font-size: 16px;
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

.panel.top {
  top: 0;
}

.panel.white {
  background: rgba(255,255,255,.975)!important;
}

.panel.black {
  background-color: rgba(0,0,0,.8)!important;
}

.animateOnEvent .panel.top,
.animated .panel.top,
.hidePanel-top .panel.top.hideOnScroll,
.slides.firstSlide .panel.top.exceptFirstSlide,
.slides.lastSlide .panel.top.exceptLastSlide,
.slides:not(.firstSlide) .panel.top.firstSlideOnly,
.slides:not(.firstSlide):not(.lastSlide) .panel.top.firstAndLastSlidesOnly,
.slides:not(.lastSlide) .panel.top.lastSlideOnly {
  -webkit-transform: translate3d(0,-100%,0);
  transform: translate3d(0,-100%,0);
  opacity: 0;
}

.animateOnEvent .panel.bottom,
.animated .panel.bottom,
.hidePanel-bottom .panel.bottom.hideOnScroll,
.slides.firstSlide .panel.bottom.exceptFirstSlide,
.slides.lastSlide .panel.bottom.exceptLastSlide,
.slides:not(.firstSlide) .panel.bottom.firstSlideOnly,
.slides:not(.firstSlide):not(.lastSlide) .panel.bottom.firstAndLastSlidesOnly,
.slides:not(.lastSlide) .panel.bottom.lastSlideOnly {
  -webkit-transform: translate3d(0,100%,0);
  transform: translate3d(0,100%,0);
  opacity: 0;
}

.page-loaded .animateOnEvent .panel,
.page-loaded .animated .panel {
  transition: opacity .5s,padding .5s,-webkit-transform .5s;
  transition: transform .5s,opacity .5s,padding .5s;
  transition: transform .5s,opacity .5s,padding .5s,-webkit-transform .5s;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  opacity: 1;
}

.slides.whiteSlide .panel {
  color: #202020;
}

.mobile .simplifiedMobile .panel.hideOnScroll.top.hide,
.scroll .panel.hideOnScroll.top.hide {
  -webkit-transform: translateY(-100%)!important;
  transform: translateY(-100%)!important;
  opacity: 0;
}

.mobile .simplifiedMobile .panel.hideOnScroll.bottom.hide,
.scroll .panel.hideOnScroll.bottom.hide {
  -webkit-transform: translateY(100%)!important;
  transform: translateY(100%)!important;
  opacity: 0;
}

.panel .sections {
  display: table;
  width: 100%;
  font-size: 0;
}

.panel .sections>div {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 33.33333%;
  font-size: 16px;
  height: 50px;
}

.panel .sections>div.auto {
  width: .1%;
}

.panel .sections>div * {
  pointer-events: all;
}

.panel .sections>div.left {
  text-align: left;
}

.panel .sections>div.left ul.crop {
  padding-left: 0;
}

.panel .sections>div.left ul.crop li:first-child {
  margin-left: 0;
}

.panel .sections>div.left.space {
  padding-right: 20px;
}

.panel .sections>div.right {
  text-align: right;
}

.panel .sections>div.right ul.crop {
  padding-right: 0;
}

.panel .sections>div.right.space {
  padding-left: 20px;
}

.panel .sections>div.center.space {
  padding: 0 20px;
}

.panel .sections.hidden {
  display: none;
}

.panel .sections .menu {
  display: inline-block;
  padding: 0 12px;
  font-size: 0;
}

.panel .sections .menu svg {
  width: 20px;
  height: 20px;
  vertical-align: bottom;
}

.panel .sections .menu li {
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
  margin: 0 10px;
}

.panel .hidden,
.panel .hidden *,
.side.compact .navigation li:after {
  display: none;
}

.panel .sections .menu li a {
  padding: 0 7px;
  opacity: .8;
}

.panel .sections .menu li a:hover {
  opacity: 1;
}

.panel .sections .menu.uppercase li {
  font-size: 12px;
  margin: 0 10px;
  letter-spacing: .125em;
  font-weight: 600!important;
}

.panel .sections .menu.uppercase li svg {
  position: relative;
  top: 2px;
}

.panel svg {
  fill: #fff;
  width: 18px;
  height: 18px;
  vertical-align: bottom;
}

.slides.whiteSlide .panel svg {
  fill: #202020;
}

.panel a:not(.button):hover {
  opacity: .75;
  transition: .15s;
}

.panel .button {
  margin: 0;
}

.panel .button+.button {
  margin-left: 10px;
}

.panel .button:not(.actionButton) {
  font-size: 15px;
  vertical-align: middle;
  padding: 12px 17px;
}

.panel .button:not(.actionButton):hover:not(:active) {
  -webkit-transform: translateY(0)!important;
  transform: translateY(0)!important;
  box-shadow: 0 0 0 1px rgba(255,255,255,.05),0 4px 6px 0 rgba(0,0,0,.1),0 1px 10px 0 rgba(0,0,0,.1);
}

.panel .nextSlide,
.panel .prevSlide {
  width: 24px;
  height: 24px;
  position: relative;
  top: 5px;
  transition: .25s;
}

.slides.whiteSlide .panel .actionButton svg {
  fill: #fff;
}

.firstSlide .panel .prevSlide,
.lastSlide .panel .nextSlide {
  opacity: 0;
  pointer-events: none;
  cursor: default;
}

.navigation li,
.nextSlide,
.prevSlide {
  cursor: pointer;
}

.firstSlide .panel.bottom .nextSlide svg {
  -webkit-animation: animateArrow 4s infinite;
  animation: animateArrow 4s infinite;
}

.panel .panelIcon {
  position: relative;
  top: 5px;
}

.progress-bar,
.side {
  position: fixed;
  top: 0;
}

@-webkit-keyframes animateArrow {
  100%, 80% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  90% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
}

@keyframes animateArrow {
  100%, 80% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  90% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
}

.popup,
.side {
  -webkit-transform: translate3d(0,0,0);
}

.nextSlide:hover,
.prevSlide:hover {
  transition: .15s;
}

.nextSlide:active,
.prevSlide:active {
  opacity: .75;
}

.firstSlide.lastSlide .nextSlide,
.firstSlide.lastSlide .prevSlide {
  opacity: 0;
}

.progress-bar {
  left: 0;
  height: 4px;
  width: 0%;
  transition: width 1s,opacity 1s;
  z-index: 1000;
  opacity: 1;
}

.progress-bar.loaded {
  width: 100%;
  opacity: 0;
  transition: width 0s,opacity .25s 1s;
}

.side {
  right: 0;
  height: 100%;
  z-index: 100;
  padding: 70px 4%;
  pointer-events: none;
  opacity: 0;
  transition: opacity .5s;
  transform: translate3d(0,0,0);
}

@media (min-width:1380px) {
  .side {
    padding-left: 55px;
    padding-right: 55px;
  }
}

.page-loaded .side {
  opacity: 1;
}

.side.large {
  padding: calc(5.56% + 50px) 5%;
}

.side.left {
  left: 0;
  right: inherit;
}

.side.right {
  right: 0;
  left: inherit;
}

.side.compact {
  padding: 30px 4%;
}

.side.compact .navigation li {
  width: 15px;
  height: 7px;
  margin: 0;
  box-shadow: none;
  border-radius: 0;
  background: #fff;
  opacity: .2;
  padding: 1px;
  cursor: pointer;
}

.side.compact .navigation li.selected,
.side.compact .navigation li:hover {
  opacity: 1;
}

.side.compact .navigation li:before {
  margin: 0 8px!important;
  top: -10px;
}

.whiteSlide .side.compact .navigation li {
  background: #202020;
}

.side.compact:not(.square) .navigation li:first-child {
  border-radius: 10px 10px 0 0;
}

.side.compact:not(.square) .navigation li:last-child {
  border-radius: 0 0 10px 10px;
}

.panel .side {
  position: relative;
  display: inline;
  height: auto;
  padding: 0;
}

.slides.whiteSlide .side svg:not([fill]) {
  fill: #202020;
}

.navigation {
  display: table;
  height: 100%;
}

.navigation ul {
  display: table-cell;
  vertical-align: middle;
}

.navigation * {
  pointer-events: all;
}

.navigation li {
  fill: #fff;
  display: block;
  background: 0 0;
  padding: 9px;
  margin: 0 -9px;
  position: relative;
}

.navigation li:after {
  content: "";
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 7px;
  opacity: .5;
  background: #fff;
  box-shadow: 0 0 1px #303030;
  transition: .25s;
}

.navigation li.selected:after,
.navigation li:hover:after {
  opacity: 1;
}

.medium .navigation li:after {
  width: 10px;
  height: 10px;
  border-radius: 5px;
}

.small .navigation li:after {
  width: 6px;
  height: 6px;
  border-radius: 4px;
}

.navigation li[data-title]:before {
  content: attr(data-title);
  position: absolute;
  right: 100%;
  top: 1px;
  background: rgba(0,0,0,.7);
  color: #fff;
  font-size: 14px;
  min-width: 50px;
  border-radius: 6px;
  padding: 7px 12px;
  font-weight: 500;
  display: inline-block;
  text-align: center;
  box-shadow: 0 0 0 1px rgba(255,255,255,.1);
  pointer-events: none;
  visibility: hidden;
}

.dropdown.show,
.navigation li:hover:before {
  visibility: visible;
}

.left .navigation li:before {
  left: 100%;
  right: auto;
}

.panel.bottom .navigation li:before {
  -webkit-transform: translateY(-100%) translateX(-50%);
  transform: translateY(-100%) translateX(-50%);
  left: 14px;
  top: -2px;
}

.stroke .navigation li:after {
  border-color: #fff;
  border-style: solid;
  border-width: 2px;
  background-color: transparent;
}

.stroke.small .navigation li:after {
  border-width: 1px;
}

.stroke .navigation li.selected:after,
.stroke .navigation li:hover:after {
  background: #fff;
}

.square .navigation li:after,
.square.small .navigation li:after {
  border-radius: 0;
}

.diamond .navigation li:after {
  border-radius: 0;
  -webkit-transform: rotate(45deg) scale(.72);
  transform: rotate(45deg) scale(.72);
}

.diamond.medium .navigation li:after {
  -webkit-transform: rotate(45deg) scale(.88);
  transform: rotate(45deg) scale(.88);
}

.diamond.small .navigation li:after {
  -webkit-transform: rotate(45deg) scale(1);
  transform: rotate(45deg) scale(1);
}

.line .navigation li {
  margin: 0 -9px;
  padding: 5px 9px;
  text-align: right;
  font-size: 0;
}

.line .navigation li:after {
  height: 3px;
  display: inline-block;
  text-align: right;
  background: #fff;
  border: none;
}

.line .navigation li:before {
  margin-top: -10px;
}

.line .navigation li.selected:after {
  width: 25px;
}

.line.left .navigation li {
  text-align: left;
}

.line.medium .navigation li {
  margin: 0 -5px;
  padding: 4px 8px;
}

.line.medium .navigation li.selected:after {
  width: 19px;
}

.line.small .navigation li {
  margin: 0;
  padding: 4px 6px;
}

.line.small .navigation li.selected:after {
  width: 13px;
}

.pole .navigation li {
  margin: 0 1px 0 2px;
  padding: 2px 9px;
  text-align: right;
  font-size: 0;
}

.pole .navigation li:after {
  height: 20px;
  width: 4px;
  display: inline-block;
  transition: .5s;
  text-align: right;
  background: #fff;
  border-radius: 1px;
  border: none;
}

.pole .navigation li:before {
  margin-top: -3px;
}

.pole .navigation li.selected:after {
  height: 60px;
}

.pole .navigation li.selected:before {
  margin-top: 19px;
}

.pole.medium .navigation li {
  margin: 0 2px;
}

.pole.medium .navigation li:after {
  height: 15px;
  width: 3px;
}

.pole.medium .navigation li:before {
  margin-top: -5px;
}

.pole.medium .navigation li.selected:after {
  height: 45px;
}

.pole.medium .navigation li.selected:before {
  margin-top: 10px;
}

.pole.small .navigation li {
  margin: 0 2px;
}

.pole.small .navigation li:after {
  height: 10px;
  width: 3px;
}

.pole.small .navigation li:before {
  margin-top: -7px;
}

.pole.small .navigation li.selected:after {
  height: 30px;
}

.pole.small .navigation li.selected:before {
  margin-top: 2px;
}

.slides.whiteSlide .navigation li:after {
  background: #202020;
  box-shadow: 0 0 1px #fff;
}

.slides.whiteSlide .stroke .navigation li:after {
  border-color: #202020;
  background: 0 0;
}

.slides.whiteSlide .stroke .navigation li:hover:after {
  background: #303030;
}

.slides.whiteSlide .stroke .navigation li.selected:after {
  border-color: #303030;
  background: #202020;
}

.panel .navigation,
.panel .navigation ul {
  display: inline;
}

.panel .navigation li {
  display: inline-block;
  margin: -9px 0;
}

.panel .side.small .navigation li {
  margin: 0;
}

.navigation .sideArrow {
  width: 31px;
  height: 72px;
  margin: 0 -9px;
}

@media (max-width:766px) {
  .navigation .sideArrow {
    width: 17px;
    height: 40px;
  }
}

.dropdown {
  position: fixed;
  z-index: 300;
  color: #202020;
  width: 160px;
  background: #fff;
  box-shadow: 0 6px 11px 0 rgba(0,0,0,.15),0 14px 28px rgba(0,0,0,.1),0 0 0 1px rgba(0,0,0,.05);
  margin-bottom: 50px;
  border-radius: 6px;
  text-align: center;
  cursor: default;
  -webkit-transform: translateY(0) scale(.9);
  transform: translateY(0) scale(.9);
  -webkit-transform-origin: top;
  transform-origin: top;
  transition: opacity .35s,box-shadow .35s,-webkit-transform .35s;
  transition: transform .35s,opacity .35s,box-shadow .35s;
  transition: transform .35s,opacity .35s,box-shadow .35s,-webkit-transform .35s;
}

.dropdown:not(.show) {
  pointer-events: none;
  opacity: 0;
}

.dropdown.rectangular {
  border-radius: 0;
}

.dropdown .title {
  font-size: 17px;
  font-weight: 500;
  margin: 0;
  text-align: center;
  opacity: .8;
}

.dropdown a {
  font-size: 15px;
  opacity: .6;
}

.dropdown a:hover {
  opacity: .8;
}

.dropdown:not(.noArrow):after,
.dropdown:not(.noArrow):before {
  content: "";
  bottom: 100%;
  left: 22px;
  border: solid transparent;
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(255,255,255,0);
  border-bottom-color: #fff;
  border-width: 7px;
  margin-left: -7px;
}

.dropdown:not(.noArrow):before {
  border-bottom-color: rgba(0,0,0,.1);
  border-width: 8px;
  margin-left: -8px;
}

.dropdown.show {
  opacity: 1;
  -webkit-transform: translateY(20px);
  transform: translateY(20px);
}

.dropdown .hideDropdown,
.dropdown.show.hide {
  opacity: 0;
  pointer-events: none;
}

.dropdown.show.hide {
  -webkit-transform: translateY(40px);
  transform: translateY(40px);
  box-shadow: 0 0 0 0 rgba(0,0,0,.15),0 0 0 rgba(0,0,0,.1),0 0 0 1px rgba(0,0,0,.05);
}

.dropdown.bottom {
  -webkit-transform-origin: bottom;
  transform-origin: bottom;
}

.dropdown.bottom.show {
  -webkit-transform: translateY(-20px);
  transform: translateY(-20px);
}

.dropdown.bottom.show.hide {
  -webkit-transform: translateY(-40px);
  transform: translateY(-40px);
}

.dropdown.bottom:after,
.dropdown.bottom:before {
  top: 100%;
  bottom: initial;
  border-bottom-color: rgba(255,255,255,0);
  border-top-color: #fff;
}

.dropdown.bottom:before {
  border-top-color: rgba(0,0,0,.06);
}

.dropdown.right:after,
.dropdown.right:before {
  right: 18px;
  left: auto;
}

.dropdown.right:before {
  right: 17px;
}

.dropdown.center:after,
.dropdown.center:before {
  left: 50%;
}

.dropdown.share li {
  float: left;
  text-align: center;
  display: block;
  width: 80px;
  height: 50px;
  padding: 14px 0;
  color: #fff;
  position: relative;
  cursor: pointer;
  opacity: .9;
  transition: .15s;
}

.dropdown.share li:hover {
  opacity: 1;
}

.dropdown.share li:after {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: .25s;
}

.dropdown.share li:active:after {
  opacity: 1;
  transition: .1s;
}

.dropdown.share li svg {
  width: 20px;
  height: 20px;
  fill: #fff;
}

.dropdown.share li.mail {
  width: 100%;
  height: auto;
  color: #202020;
  opacity: .6;
  font-size: 15px;
  padding: 20px 0;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.dropdown.share li.mail:hover {
  opacity: .8;
}

.scroll .dropdown {
  position: absolute;
  top: 0;
}

.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  max-width: 90%;
  height: 100%;
  color: #fff;
  z-index: 500;
  background: #0e0e0e;
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.sidebar.bottom,
.sidebar.top {
  width: 100%;
  height: auto;
  max-width: 100%;
}

.sidebarShown .sidebar.visible {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
}

.sidebar .content {
  padding: 40px;
  overflow-y: auto;
  position: relative;
}

.sidebar.small .content {
  padding: 30px;
}

.sidebar .wrap {
  padding: 0;
}

.sidebar.left {
  right: inherit;
  left: 0;
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}

.sidebar.top {
  top: 0;
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
}

.sidebar.bottom {
  bottom: 0;
  top: inherit;
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
}

.sidebar .logo {
  padding: 0;
  font-size: 0;
  margin-bottom: 35px;
}

.sidebar .close {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 14px;
  font-size: 0;
  opacity: .5;
  z-index: 101;
  transition: .25s;
}

.sidebar .close:hover {
  opacity: 1;
}

.sidebar .close svg {
  width: 24px;
  height: 24px;
  fill: #fff;
}

.sidebar .close:active svg {
  -webkit-transform: scale(.92);
  transform: scale(.92);
}

.sidebar ul.mainMenu,
.sidebar ul.social,
.sidebar ul.subMenu {
  line-height: 1.9;
  margin-bottom: 30px;
  display: block;
}

.sidebar .mainMenu li {
  font-size: 20px;
  line-height: 48px;
}

.sidebar .mainMenu.small li {
  font-size: 18px;
  line-height: 46px;
}

.sidebar .subMenu li {
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
  font-size: 18px;
  line-height: 36px;
}

.sidebar .subMenu.small li {
  font-size: 16px;
  line-height: 34px;
}

.sidebar .social {
  margin-top: 40px;
}

.sidebar .social li {
  display: inline-block;
  margin-right: 20px;
}

.sidebar .social li:last-child {
  margin-right: 0;
}

.sidebar .social.big li,
.sidebar .social.small li {
  margin-right: 12px;
}

.sidebar .social li a {
  font-size: 0;
  padding: 0;
}

.sidebar .social li a svg {
  width: 20px;
  height: 20px;
}

.sidebar .social.small li a svg {
  width: 15px;
  height: 15px;
}

.sidebar .social.big li a svg {
  width: 22px;
  height: 22px;
}

.sidebar.small .social {
  margin-top: 30px;
}

.sidebar .big li {
  font-size: 32px;
  line-height: 64px;
}

.sidebar .social.medium li a svg {
  width: 18px;
  height: 18px;
}

.sidebar .social.medium li {
  margin-right: 14px;
}

.sidebarShown .slide.selected .content {
  overflow: hidden;
}

.popup,
.popup .content {
  overflow-y: auto;
}

.page-loaded.sidebarShown .slide.selected {
  -webkit-transform: scale(.95)!important;
  transform: scale(.95)!important;
  pointer-events: none;
  opacity: .5!important;
}

.sidebarShown .panel.top {
  opacity: 0;
}

.sidebarShown .panel.bottom {
  opacity: .5;
  -webkit-transform: scale(.95) translateY(-10%);
  transform: scale(.95) translateY(-10%);
}

.page-loaded.sidebarShown .panel,
.page-loaded.sidebarShown .slide.selected,
.page-loaded.sidebarShown .slide.selected:after,
.sidebar {
  transition: opacity .5s,-webkit-transform .5s!important;
  transition: transform .5s,opacity .5s!important;
  transition: transform .5s,opacity .5s,-webkit-transform .5s!important;
}

.popup {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  z-index: 1000;
  transition: opacity .5s,-webkit-transform .5s;
  transition: transform .5s,opacity .5s;
  transition: transform .5s,opacity .5s,-webkit-transform .5s;
  display: none;
  transform: translate3d(0,0,0);
}

.popup:not([class*=fade]) {
  background: rgba(17,17,17,.9);
}

.popupShown .popup.visible {
  display: block;
  -webkit-animation: popupFadeIn .75s;
  animation: popupFadeIn .75s;
}

.popup.hidePopup {
  opacity: 0;
  pointer-events: none;
}

.popup .close:not(.button) {
  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 14px;
  font-size: 0;
  opacity: .5;
  z-index: 200;
  transition: .25s;
  margin: 0;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

.popup .close:not(.button).left {
  right: inherit;
  left: 0;
}

.popup .close:not(.button):hover {
  opacity: 1;
}

.popup .close:not(.button) svg {
  width: 30px;
  height: 30px;
  fill: #fff;
}

.popup .close.button {
  position: fixed;
  z-index: 200;
  margin: 15px;
}

.popup.white .close svg {
  fill: #202020;
}

.popup .wrap {
  padding: 18px 58px;
}

.popup .wrap.spaces {
  padding: 58px;
}

.popup.fullscreen .wrap {
  padding: 0;
}

.popup.fullscreen .embedVideo {
  height: 100vh;
  padding-bottom: 0;
}

@-webkit-keyframes popupFadeIn {
  from {
    opacity: 0;
  }
}

@keyframes popupFadeIn {
  from {
    opacity: 0;
  }
}

.popupShown,
.popupShown body,
.sidebarShown,
.sidebarShown body {
  overflow-y: hidden!important;
}

.embedVideo {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}

.embedVideo embed,
.embedVideo iframe,
.embedVideo object,
.embedVideo video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.embedVideo.size-16x10 {
  padding-bottom: 62.5%;
}

.embedVideo.size-4x3 {
  padding-bottom: 75%;
}

.embedVideo.size-1x1,
.embedVideo.size-square {
  padding-bottom: 100%;
}

.zoom-img,
.zoom-img-wrap {
  position: relative;
  transition: all .5s;
  transition-timing-function: cubic-bezier(.2,0,.3,1)!important;
  z-index: 100;
}

.zoom-img img.zoom-img,
.zoom-img-wrap img.zoom-img {
  margin: 0!important;
}

.zoom-overlay {
  background: #111;
  position: fixed;
  top: -9999px;
  left: -9999px;
  right: -9999px;
  bottom: -9999px;
  pointer-events: none;
  opacity: 0;
  transition: opacity .5s;
  z-index: 99;
}

.slider,
.zoom-img-parent {
  position: relative;
}

.zoom-overlay-open .zoom-overlay {
  opacity: .9;
}

.zoom-overlay-open .panel,
.zoom-overlay-open .side {
  opacity: 0;
  transition: .25s;
}

.zoom-overlay-open,
.zoom-overlay-transitioning {
  cursor: default;
}

.controller li,
.slider.clickable {
  cursor: pointer;
}

.zoom-img-parent {
  z-index: 1000;
}

.slider>li {
  display: none;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity .5s;
  pointer-events: none;
}

.slider>li.selected {
  display: block;
  opacity: 1;
  transition: opacity .5s;
  pointer-events: all;
}

.slider.rounded>li>img {
  border-radius: 6px;
  overflow: hidden;
}

.slider.autoHeight {
  transition: .5s;
}

.slider.autoHeight>li {
  display: block;
  position: absolute;
}

.controller li.selected {
  cursor: default;
  pointer-events: none;
}

.tooltip[data-tooltip-title] {
  position: relative;
}

.tooltip[data-tooltip-title]:before {
  content: attr(data-tooltip-title);
  position: absolute;
  background: rgba(40,40,40,.6);
  color: #fff;
  font-size: 12px;
  border-radius: 50px;
  padding: 6px 15px;
  visibility: hidden;
  white-space: nowrap;
  letter-spacing: .04em;
  box-shadow: 0 0 0 1px rgba(255,255,255,.07);
  -webkit-transform: translateY(100%) translateX(-50%);
  transform: translateY(100%) translateX(-50%);
  left: 50%;
  top: 0;
}

.tooltip[data-tooltip-title]:hover:before {
  visibility: visible;
  -webkit-animation: fadeIn .35s backwards;
  animation: fadeIn .35s backwards;
}

.tooltip[data-tooltip-title].top:before {
  bottom: 0;
  top: auto;
  -webkit-transform: translateY(-100%) translateX(-50%);
  transform: translateY(-100%) translateX(-50%);
}

.slide.before {
  -webkit-transform: translate3d(0,-50%,0);
  transform: translate3d(0,-50%,0);
}

.slide.after,
.slide:first-child {
  -webkit-transform: translate3d(0,50%,0);
  transform: translate3d(0,50%,0);
  will-change: transform;
}

.slide.after,
.slide.before {
  opacity: 0;
}

.slide.selected {
  -webkit-transform: translate3d(0,0,0)!important;
  transform: translate3d(0,0,0)!important;
  z-index: 11;
}

.scroll .slide.selected {
  z-index: 10;
}

.page-loaded .slide.selected {
  opacity: 1!important;
}

.horizontal .slide,
.horizontal .slide.before {
  -webkit-transform: translate3D(-50%,0,0);
  transform: translate3D(-50%,0,0);
}

.horizontal .slide.after {
  -webkit-transform: translate3D(50%,0,0);
  transform: translate3D(50%,0,0);
}

.film .slide.before {
  -webkit-transform: translate3D(0,-100%,0);
  transform: translate3D(0,-100%,0);
}

.film .slide.after {
  -webkit-transform: translate3D(0,100%,0);
  transform: translate3D(0,100%,0);
}

.film.horizontal .slide.before {
  -webkit-transform: translate3D(-100%,0,0);
  transform: translate3D(-100%,0,0);
}

.film.horizontal .slide,
.film.horizontal .slide.after {
  -webkit-transform: translate3D(100%,0,0);
  transform: translate3D(100%,0,0);
}

.chain .slide.before {
  -webkit-transform: translate3D(0,-100%,0);
  transform: translate3D(0,-100%,0);
  opacity: 1;
}

.chain .slide.after {
  -webkit-transform: translate3D(0,100%,0);
  transform: translate3D(0,100%,0);
  opacity: 1;
}

.chain.horizontal .slide.before {
  -webkit-transform: translate3D(-100%,0,0);
  transform: translate3D(-100%,0,0);
  opacity: 1;
}

.chain.horizontal .slide,
.chain.horizontal .slide.after {
  -webkit-transform: translate3D(100%,0,0);
  transform: translate3D(100%,0,0);
  opacity: 1;
}

.zen .slide.before {
  -webkit-transform: translateY(-100%) scale(.8);
  transform: translateY(-100%) scale(.8);
}

.zen .slide,
.zen .slide.after {
  -webkit-transform: translateY(100%) scale(.8);
  transform: translateY(100%) scale(.8);
}

.zen.horizontal .slide.before {
  -webkit-transform: translateX(-100%) scale(.8);
  transform: translateX(-100%) scale(.8);
}

.zen.horizontal .slide,
.zen.horizontal .slide.after {
  -webkit-transform: translateX(100%) scale(.8);
  transform: translateX(100%) scale(.8);
}

.stack .slide,
.stack .slide.after {
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
}

.stack .slide.after {
  opacity: initial;
}

.stack .slide.after.active,
.stack .slide.selected {
  z-index: 11!important;
}

.stack .slide.before {
  -webkit-transform: scale(.9);
  transform: scale(.9);
}

.stack.horizontal .slide,
.stack.horizontal .slide.after {
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}

.stack.horizontal .slide.before {
  -webkit-transform: scale(.9);
  transform: scale(.9);
}

.cards .slide,
.cards .slide.after {
  -webkit-transform: translateY(10%);
  transform: translateY(10%);
  opacity: initial;
}

.cards .slide.after {
  z-index: 8!important;
  opacity: 0;
}

.cards .slide.selected {
  z-index: 9!important;
}

.cards .slide.before {
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
  z-index: 7;
}

.cards .slide.active.before {
  z-index: 10!important;
}

.cards.horizontal .slide,
.cards.horizontal .slide.after {
  -webkit-transform: translateX(10%);
  transform: translateX(10%);
}

.cards.horizontal .slide.before {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}

.zoom .slide.before {
  -webkit-transform: scale(1.4);
  transform: scale(1.4);
}

.zoom .slide,
.zoom .slide.after {
  -webkit-transform: scale(.8);
  transform: scale(.8);
  opacity: 0;
}

.vertigo .slide.before {
  -webkit-transform: scale(1.4) rotate(-2deg);
  transform: scale(1.4) rotate(-2deg);
}

.vertigo .slide,
.vertigo .slide.after {
  -webkit-transform: scale(.8) rotate(2deg);
  transform: scale(.8) rotate(2deg);
  opacity: 0;
}

.plain .slide,
.plain .slide.after,
.plain .slide.before {
  -webkit-transform: scale(1);
  transform: scale(1);
}

.plain .slide.after:after,
.plain .slide.before:after {
  opacity: 1;
  background: #111;
}

.page-loaded .fast .slide.active,
.page-loaded .fast .slide.selected {
  transition: opacity .7s,-webkit-transform .7s;
  transition: transform .7s,opacity .7s;
  transition: transform .7s,opacity .7s,-webkit-transform .7s;
}

.page-loaded .slide.active,
.page-loaded .slide.selected {
  transition: opacity 1s,-webkit-transform 1s;
  transition: transform 1s,opacity 1s;
  transition: transform 1s,opacity 1s,-webkit-transform 1s;
}

.page-loaded .slow .slide.active,
.page-loaded .slow .slide.selected {
  transition: opacity 1.4s,-webkit-transform 1.4s;
  transition: transform 1.4s,opacity 1.4s;
  transition: transform 1.4s,opacity 1.4s,-webkit-transform 1.4s;
}

.page-loaded .slide.active.entry,
.page-loaded .slide.selected.entry {
  transition: opacity 1s,-webkit-transform 0s;
  transition: transform 0s,opacity 1s;
  transition: transform 0s,opacity 1s,-webkit-transform 0s;
}

.slides.animateOnEvent .panel,
.slides.animated .panel {
  transition: opacity,-webkit-transform;
  transition: transform,opacity;
  transition: transform,opacity,-webkit-transform;
  transition-duration: .8s;
}

.slides.animateOnEvent.fast .panel,
.slides.animated.fast .panel {
  transition-duration: .6s;
}

.slides.animateOnEvent .panel,
.slides.animated.slow .panel {
  transition-duration: 1s;
}

.smooth .active,
.smooth .panel,
.smooth .rolling-element,
.smooth .selected,
.smooth .sidebar {
  transition-timing-function: cubic-bezier(.55,.05,.35,.95)!important;
}

.bounce .active,
.bounce .panel,
.bounce .rolling-element,
.bounce .selected,
.bounce .sidebar {
  transition-timing-function: cubic-bezier(.45,1.15,.5,1)!important;
}

.animated [class*=ae-] {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  transition-timing-function: cubic-bezier(.25,.1,.2,1);
}

.animated.animate .fast [class*=ae-]:not(.done),
.animated.animate [class*=ae-].fast:not(.done),
.animated.fast .animate [class*=ae-]:not(.done),
.animated.fast.animate [class*=ae-]:not(.done) {
  transition-duration: .7s;
}

.animated .animate [class*=ae-]:not(.done),
.animated.animate [class*=ae-]:not(.done) {
  transition-duration: .8s;
}

.animated.animate .slow [class*=ae-]:not(.done),
.animated.animate [class*=ae-].slow:not(.done),
.animated.slow .animate [class*=ae-]:not(.done),
.animated.slow.animate [class*=ae-]:not(.done) {
  transition-duration: 1s;
}

.animated .animate .ae-1:not(.done),
.animated.animate .ae-1:not(.done) {
  transition-delay: 10ms;
}

.animated .animate .ae-2:not(.done),
.animated.animate .ae-2:not(.done) {
  transition-delay: 160ms;
}

.animated .animate .ae-3:not(.done),
.animated.animate .ae-3:not(.done) {
  transition-delay: 310ms;
}

.animated .animate .ae-4:not(.done),
.animated.animate .ae-4:not(.done) {
  transition-delay: 460ms;
}

.animated .animate .ae-5:not(.done),
.animated.animate .ae-5:not(.done) {
  transition-delay: 610ms;
}

.animated .animate .ae-6:not(.done),
.animated.animate .ae-6:not(.done) {
  transition-delay: 760ms;
}

.animated .animate .ae-7:not(.done),
.animated.animate .ae-7:not(.done) {
  transition-delay: 910ms;
}

.animated .animate .ae-8:not(.done),
.animated.animate .ae-8:not(.done) {
  transition-delay: 1.06s;
}

.animated .animate .ae-9:not(.done),
.animated.animate .ae-9:not(.done) {
  transition-delay: 1.21s;
}

.animated .animate .ae-10:not(.done),
.animated.animate .ae-10:not(.done) {
  transition-delay: 1.36s;
}

.animated.animate .ae-1.fast:not(.done),
.animated.animate .fast .ae-1:not(.done),
.animated.fast .animate .ae-1:not(.done),
.animated.fast.animate .ae-1:not(.done) {
  transition-delay: 10ms;
}

.animated.animate .ae-2.fast:not(.done),
.animated.animate .fast .ae-2:not(.done),
.animated.fast .animate .ae-2:not(.done),
.animated.fast.animate .ae-2:not(.done) {
  transition-delay: 110ms;
}

.animated.animate .ae-3.fast:not(.done),
.animated.animate .fast .ae-3:not(.done),
.animated.fast .animate .ae-3:not(.done),
.animated.fast.animate .ae-3:not(.done) {
  transition-delay: 210ms;
}

.animated.animate .ae-4.fast:not(.done),
.animated.animate .fast .ae-4:not(.done),
.animated.fast .animate .ae-4:not(.done),
.animated.fast.animate .ae-4:not(.done) {
  transition-delay: 310ms;
}

.animated.animate .ae-5.fast:not(.done),
.animated.animate .fast .ae-5:not(.done),
.animated.fast .animate .ae-5:not(.done),
.animated.fast.animate .ae-5:not(.done) {
  transition-delay: 410ms;
}

.animated.animate .ae-6.fast:not(.done),
.animated.animate .fast .ae-6:not(.done),
.animated.fast .animate .ae-6:not(.done),
.animated.fast.animate .ae-6:not(.done) {
  transition-delay: 510ms;
}

.animated.animate .ae-7.fast:not(.done),
.animated.animate .fast .ae-7:not(.done),
.animated.fast .animate .ae-7:not(.done),
.animated.fast.animate .ae-7:not(.done) {
  transition-delay: 610ms;
}

.animated.animate .ae-8.fast:not(.done),
.animated.animate .fast .ae-8:not(.done),
.animated.fast .animate .ae-8:not(.done),
.animated.fast.animate .ae-8:not(.done) {
  transition-delay: 710ms;
}

.animated.animate .ae-9.fast:not(.done),
.animated.animate .fast .ae-9:not(.done),
.animated.fast .animate .ae-9:not(.done),
.animated.fast.animate .ae-9:not(.done) {
  transition-delay: 810ms;
}

.animated.animate .ae-10.fast:not(.done),
.animated.animate .fast .ae-10:not(.done),
.animated.fast .animate .ae-10:not(.done),
.animated.fast.animate .ae-10:not(.done) {
  transition-delay: 910ms;
}

.animated.animate .ae-1.slow:not(.done),
.animated.animate .slow .ae-1:not(.done),
.animated.slow .animate .ae-1:not(.done),
.animated.slow.animate .ae-1:not(.done) {
  transition-delay: 10ms;
}

.animated.animate .ae-2.slow:not(.done),
.animated.animate .slow .ae-2:not(.done),
.animated.slow .animate .ae-2:not(.done),
.animated.slow.animate .ae-2:not(.done) {
  transition-delay: 210ms;
}

.animated.animate .ae-3.slow:not(.done),
.animated.animate .slow .ae-3:not(.done),
.animated.slow .animate .ae-3:not(.done),
.animated.slow.animate .ae-3:not(.done) {
  transition-delay: 410ms;
}

.animated.animate .ae-4.slow:not(.done),
.animated.animate .slow .ae-4:not(.done),
.animated.slow .animate .ae-4:not(.done),
.animated.slow.animate .ae-4:not(.done) {
  transition-delay: 610ms;
}

.animated.animate .ae-5.slow:not(.done),
.animated.animate .slow .ae-5:not(.done),
.animated.slow .animate .ae-5:not(.done),
.animated.slow.animate .ae-5:not(.done) {
  transition-delay: 810ms;
}

.animated.animate .ae-6.slow:not(.done),
.animated.animate .slow .ae-6:not(.done),
.animated.slow .animate .ae-6:not(.done),
.animated.slow.animate .ae-6:not(.done) {
  transition-delay: 1.01s;
}

.animated.animate .ae-7.slow:not(.done),
.animated.animate .slow .ae-7:not(.done),
.animated.slow .animate .ae-7:not(.done),
.animated.slow.animate .ae-7:not(.done) {
  transition-delay: 1.21s;
}

.animated.animate .ae-8.slow:not(.done),
.animated.animate .slow .ae-8:not(.done),
.animated.slow .animate .ae-8:not(.done),
.animated.slow.animate .ae-8:not(.done) {
  transition-delay: 1.41s;
}

.animated.animate .ae-9.slow:not(.done),
.animated.animate .slow .ae-9:not(.done),
.animated.slow .animate .ae-9:not(.done),
.animated.slow.animate .ae-9:not(.done) {
  transition-delay: 1.61s;
}

.animated.animate .ae-10.slow:not(.done),
.animated.animate .slow .ae-10:not(.done),
.animated.slow .animate .ae-10:not(.done),
.animated.slow.animate .ae-10:not(.done) {
  transition-delay: 1.81s;
}

.animated .fromBottom [class*=ae-]:not(.done),
.animated [class*=ae-]:not(.done),
.animated.fromBottom [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromBottom:not(.done) {
  visibility: hidden;
  -webkit-transform: translate3d(0,50px,0);
  transform: translate3d(0,50px,0);
  opacity: 0;
}

.animated .fromTop [class*=ae-]:not(.done),
.animated.fromTop [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromTop:not(.done) {
  -webkit-transform: translate3d(0,-50px,0);
  transform: translate3d(0,-50px,0);
}

.animated .fromLeft [class*=ae-]:not(.done),
.animated.fromLeft [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromLeft:not(.done) {
  -webkit-transform: translate3d(-50px,0,0);
  transform: translate3d(-50px,0,0);
}

.animated .fromRight [class*=ae-]:not(.done),
.animated.fromRight [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromRight:not(.done) {
  -webkit-transform: translate3d(50px,0,0);
  transform: translate3d(50px,0,0);
}

.animated .fromCenter [class*=ae-]:not(.done),
.animated.fromCenter [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromCenter:not(.done) {
  -webkit-transform: scale(.9) translate3d(0,0,0);
  transform: scale(.9) translate3d(0,0,0);
}

.animated .fromAbove [class*=ae-]:not(.done),
.animated.fromAbove [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromAbove:not(.done) {
  -webkit-transform: scale(1.1) translate3d(0,0,0);
  transform: scale(1.1) translate3d(0,0,0);
}

.animated .fromBottomLeft [class*=ae-]:not(.done),
.animated.fromBottomLeft [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromBottomLeft:not(.done) {
  -webkit-transform: translate3d(-50px,50px,0);
  transform: translate3d(-50px,50px,0);
}

.animated .fromTopLeft [class*=ae-]:not(.done),
.animated.fromTopLeft [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromTopLeft:not(.done) {
  -webkit-transform: translate3d(-50px,-50px,0);
  transform: translate3d(-50px,-50px,0);
}

.animated .fromBottomRight [class*=ae-]:not(.done),
.animated.fromBottomRight [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromBottomRight:not(.done) {
  -webkit-transform: translate3d(50px,50px,0);
  transform: translate3d(50px,50px,0);
}

.animated .fromTopRight [class*=ae-]:not(.done),
.animated.fromTopRight [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromTopRight:not(.done) {
  -webkit-transform: translate3d(50px,-50px,0);
  transform: translate3d(50px,-50px,0);
}

.animated .fadeIn [class*=ae-]:not(.done),
.animated.fadeIn [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fadeIn:not(.done) {
  -webkit-transform: scale(1) translate3d(0,0,0);
  transform: scale(1) translate3d(0,0,0);
}

.animated .fromBlur [class*=ae-]:not(.done),
.animated.fromBlur [class*=ae-]:not(.done),
.slides.animated [class*=ae-].fromBlur:not(.done) {
  -webkit-transform: scale(1) translate3d(0,0,0);
  transform: scale(1) translate3d(0,0,0);
  -webkit-filter: blur(10px);
  filter: blur(10px);
}

.slides .animated.animate.active [class*=ae-]:not(.done),
.slides.animated .animate.active [class*=ae-]:not(.done) {
  opacity: 1;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  visibility: visible;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  -webkit-filter: none;
  filter: none;
}

.animateOnEvent,
.box-67,
.box-67 .thumbnail-67 img {
  -webkit-backface-visibility: hidden;
}

.animateOnEvent {
  backface-visibility: hidden;
}

.animateOnEvent [class*=ae-]:not(.done):not(.do) {
  opacity: 0;
  visibility: hidden;
}

.animateOnEvent [class*=ae-].do {
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  -webkit-animation-duration: .8s;
  animation-duration: .8s;
  visibility: visible;
}

.animateOnEvent .fast [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fast,
.animateOnEvent.fast [class*=ae-].do {
  -webkit-animation-duration: .7s;
  animation-duration: .7s;
}

.animateOnEvent .slow [class*=ae-].do,
.animateOnEvent [class*=ae-].do.slow,
.animateOnEvent.slow [class*=ae-].do {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
}

.animateOnEvent .fromBottom [class*=ae-].do,
.animateOnEvent [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromBottom,
.animateOnEvent.fromBottom [class*=ae-].do {
  -webkit-animation-name: fromBottom;
  animation-name: fromBottom;
}

.animateOnEvent .fromTop [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromTop,
.animateOnEvent.fromTop [class*=ae-].do {
  -webkit-animation-name: fromTop;
  animation-name: fromTop;
}

.animateOnEvent .fromLeft [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromLeft,
.animateOnEvent.fromLeft [class*=ae-].do {
  -webkit-animation-name: fromLeft;
  animation-name: fromLeft;
}

.animateOnEvent .fromRight [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromRight,
.animateOnEvent.fromRight [class*=ae-].do {
  -webkit-animation-name: fromRight;
  animation-name: fromRight;
}

.animateOnEvent .fromCenter [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromCenter,
.animateOnEvent.fromCenter [class*=ae-].do {
  -webkit-animation-name: fromCenter;
  animation-name: fromCenter;
}

.animateOnEvent .fromAbove [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromAbove,
.animateOnEvent.fromAbove [class*=ae-].do {
  -webkit-animation-name: fromAbove;
  animation-name: fromAbove;
}

.animateOnEvent .fromBottomLeft [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromBottomLeft,
.animateOnEvent.fromBottomLeft [class*=ae-].do {
  -webkit-animation-name: fromBottomLeft;
  animation-name: fromBottomLeft;
}

.animateOnEvent .fromTopLeft [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromTopLeft,
.animateOnEvent.fromTopLeft [class*=ae-].do {
  -webkit-animation-name: fromTopLeft;
  animation-name: fromTopLeft;
}

.animateOnEvent .fromBottomRight [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromBottomRight,
.animateOnEvent.fromBottomRight [class*=ae-].do {
  -webkit-animation-name: fromBottomRight;
  animation-name: fromBottomRight;
}

.animateOnEvent .fromTopRight [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromTopRight,
.animateOnEvent.fromTopRight [class*=ae-].do {
  -webkit-animation-name: fromTopRight;
  animation-name: fromTopRight;
}

.animateOnEvent .fadeIn [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fadeIn,
.animateOnEvent.fadeIn [class*=ae-].do {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.animateOnEvent .fromBlur [class*=ae-].do,
.animateOnEvent [class*=ae-].do.fromBlur,
.animateOnEvent.fromBlur [class*=ae-].do {
  -webkit-animation-name: fromBlur;
  animation-name: fromBlur;
}

@-webkit-keyframes fromBottom {
  from {
    -webkit-transform: translate3d(0,50px,0);
    transform: translate3d(0,50px,0);
    opacity: 0;
  }
}

@keyframes fromBottom {
  from {
    -webkit-transform: translate3d(0,50px,0);
    transform: translate3d(0,50px,0);
    opacity: 0;
  }
}

@-webkit-keyframes fromTop {
  from {
    -webkit-transform: translate3d(0,-50px,0);
    transform: translate3d(0,-50px,0);
    opacity: 0;
  }
}

@keyframes fromTop {
  from {
    -webkit-transform: translate3d(0,-50px,0);
    transform: translate3d(0,-50px,0);
    opacity: 0;
  }
}

@-webkit-keyframes fromLeft {
  from {
    -webkit-transform: translate3d(-25px,0,0);
    transform: translate3d(-25px,0,0);
    opacity: 0;
  }
}

@keyframes fromLeft {
  from {
    -webkit-transform: translate3d(-25px,0,0);
    transform: translate3d(-25px,0,0);
    opacity: 0;
  }
}

@-webkit-keyframes fromRight {
  from {
    -webkit-transform: translate3d(25px,0,0);
    transform: translate3d(25px,0,0);
    opacity: 0;
  }
}

@keyframes fromRight {
  from {
    -webkit-transform: translate3d(25px,0,0);
    transform: translate3d(25px,0,0);
    opacity: 0;
  }
}

@-webkit-keyframes fromCenter {
  from {
    -webkit-transform: scale(.9) translate3d(0,0,0);
    transform: scale(.9) translate3d(0,0,0);
    opacity: 0;
  }
}

@keyframes fromCenter {
  from {
    -webkit-transform: scale(.9) translate3d(0,0,0);
    transform: scale(.9) translate3d(0,0,0);
    opacity: 0;
  }
}

@-webkit-keyframes fromAbove {
  from {
    -webkit-transform: scale(1.1) translate3d(0,0,0);
    transform: scale(1.1) translate3d(0,0,0);
    opacity: 0;
  }
}

@keyframes fromAbove {
  from {
    -webkit-transform: scale(1.1) translate3d(0,0,0);
    transform: scale(1.1) translate3d(0,0,0);
    opacity: 0;
  }
}

@-webkit-keyframes fromBottomLeft {
  from {
    -webkit-transform: translate3d(-50px,50px,0);
    transform: translate3d(-50px,50px,0);
    opacity: 0;
  }
}

@keyframes fromBottomLeft {
  from {
    -webkit-transform: translate3d(-50px,50px,0);
    transform: translate3d(-50px,50px,0);
    opacity: 0;
  }
}

@-webkit-keyframes fromTopLeft {
  from {
    -webkit-transform: translate3d(-50px,-50px,0);
    transform: translate3d(-50px,-50px,0);
    opacity: 0;
  }
}

@keyframes fromTopLeft {
  from {
    -webkit-transform: translate3d(-50px,-50px,0);
    transform: translate3d(-50px,-50px,0);
    opacity: 0;
  }
}

@-webkit-keyframes fromBottomRight {
  from {
    -webkit-transform: translate3d(50px,50px,0);
    transform: translate3d(50px,50px,0);
    opacity: 0;
  }
}

@keyframes fromBottomRight {
  from {
    -webkit-transform: translate3d(50px,50px,0);
    transform: translate3d(50px,50px,0);
    opacity: 0;
  }
}

@-webkit-keyframes fromTopRight {
  from {
    -webkit-transform: translate3d(50px,-50px,0);
    transform: translate3d(50px,-50px,0);
    opacity: 0;
  }
}

@keyframes fromTopRight {
  from {
    -webkit-transform: translate3d(50px,-50px,0);
    transform: translate3d(50px,-50px,0);
    opacity: 0;
  }
}

@-webkit-keyframes fadeIn {
  from {
    -webkit-transform: scale(1) translate3d(0,0,0);
    transform: scale(1) translate3d(0,0,0);
    opacity: 0;
  }
}

@keyframes fadeIn {
  from {
    -webkit-transform: scale(1) translate3d(0,0,0);
    transform: scale(1) translate3d(0,0,0);
    opacity: 0;
  }
}

@-webkit-keyframes fromBlur {
  from {
    -webkit-transform: scale(1) translate3d(0,0,0);
    transform: scale(1) translate3d(0,0,0);
    -webkit-filter: blur(10px);
    filter: blur(10px);
    opacity: 0;
  }
}

@keyframes fromBlur {
  from {
    -webkit-transform: scale(1) translate3d(0,0,0);
    transform: scale(1) translate3d(0,0,0);
    -webkit-filter: blur(10px);
    filter: blur(10px);
    opacity: 0;
  }
}

.animateOnEvent .ae-1,
.animateOnEvent .ae-1.fast,
.animateOnEvent .fast .ae-1.fast,
.animateOnEvent.fast .ae-1 {
  -webkit-animation-delay: 10ms;
  animation-delay: 10ms;
}

.animateOnEvent .ae-2,
.animateOnEvent .ae-2.fast,
.animateOnEvent .fast .ae-2.fast,
.animateOnEvent.fast .ae-2 {
  -webkit-animation-delay: 110ms;
  animation-delay: 110ms;
}

.animateOnEvent .ae-3,
.animateOnEvent .ae-3.fast,
.animateOnEvent .fast .ae-3.fast,
.animateOnEvent.fast .ae-3 {
  -webkit-animation-delay: 210ms;
  animation-delay: 210ms;
}

.animateOnEvent .ae-4,
.animateOnEvent .ae-4.fast,
.animateOnEvent .fast .ae-4.fast,
.animateOnEvent.fast .ae-4 {
  -webkit-animation-delay: 310ms;
  animation-delay: 310ms;
}

.animateOnEvent .ae-5,
.animateOnEvent .ae-5.fast,
.animateOnEvent .fast .ae-5.fast,
.animateOnEvent.fast .ae-5 {
  -webkit-animation-delay: 410ms;
  animation-delay: 410ms;
}

.animateOnEvent .ae-6,
.animateOnEvent .ae-6.fast,
.animateOnEvent .fast .ae-6.fast,
.animateOnEvent.fast .ae-6 {
  -webkit-animation-delay: 510ms;
  animation-delay: 510ms;
}

.animateOnEvent .ae-7,
.animateOnEvent .ae-7.fast,
.animateOnEvent .fast .ae-7.fast,
.animateOnEvent.fast .ae-7 {
  -webkit-animation-delay: 610ms;
  animation-delay: 610ms;
}

.animateOnEvent .ae-8,
.animateOnEvent .ae-8.fast,
.animateOnEvent .fast .ae-8.fast,
.animateOnEvent.fast .ae-8 {
  -webkit-animation-delay: 710ms;
  animation-delay: 710ms;
}

.animateOnEvent .ae-9,
.animateOnEvent .ae-9.fast,
.animateOnEvent .fast .ae-9.fast,
.animateOnEvent.fast .ae-9 {
  -webkit-animation-delay: 810ms;
  animation-delay: 810ms;
}

.animateOnEvent .ae-10,
.animateOnEvent .ae-10.fast,
.animateOnEvent .fast .ae-10.fast,
.animateOnEvent.fast .ae-10 {
  -webkit-animation-delay: 910ms;
  animation-delay: 910ms;
}

.animateOnEvent .ae-1.slow,
.animateOnEvent .slow .ae-1,
.animateOnEvent.slow .ae-1 {
  -webkit-animation-delay: 10ms;
  animation-delay: 10ms;
}

.animateOnEvent .ae-2.slow,
.animateOnEvent .slow .ae-2,
.animateOnEvent.slow .ae-2 {
  -webkit-animation-delay: 210ms;
  animation-delay: 210ms;
}

.animateOnEvent .ae-3.slow,
.animateOnEvent .slow .ae-3,
.animateOnEvent.slow .ae-3 {
  -webkit-animation-delay: 410ms;
  animation-delay: 410ms;
}

.animateOnEvent .ae-4.slow,
.animateOnEvent .slow .ae-4,
.animateOnEvent.slow .ae-4 {
  -webkit-animation-delay: 610ms;
  animation-delay: 610ms;
}

.animateOnEvent .ae-5.slow,
.animateOnEvent .slow .ae-5,
.animateOnEvent.slow .ae-5 {
  -webkit-animation-delay: 810ms;
  animation-delay: 810ms;
}

.animateOnEvent .ae-6.slow,
.animateOnEvent .slow .ae-6,
.animateOnEvent.slow .ae-6 {
  -webkit-animation-delay: 1.01s;
  animation-delay: 1.01s;
}

.animateOnEvent .ae-7.slow,
.animateOnEvent .slow .ae-7,
.animateOnEvent.slow .ae-7 {
  -webkit-animation-delay: 1.21s;
  animation-delay: 1.21s;
}

.animateOnEvent .ae-8.slow,
.animateOnEvent .slow .ae-8,
.animateOnEvent.slow .ae-8 {
  -webkit-animation-delay: 1.41s;
  animation-delay: 1.41s;
}

.animateOnEvent .ae-9.slow,
.animateOnEvent .slow .ae-9,
.animateOnEvent.slow .ae-9 {
  -webkit-animation-delay: 1.61s;
  animation-delay: 1.61s;
}

.animateOnEvent .ae-10.slow,
.animateOnEvent .slow .ae-10,
.animateOnEvent.slow .ae-10 {
  -webkit-animation-delay: 1.81s;
  animation-delay: 1.81s;
}

.slides:not(.scroll) .rolling-element {
  transition: 1s;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  will-change: transform;
}

.slides:not(.scroll).fast .rolling-element {
  transition-duration: .7s;
}

.slides:not(.scroll).slow .rolling-element {
  transition-duration: 1.4s;
}

.slides:not(.scroll) .slide.before .rolling-element {
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-10 {
  -webkit-transform: translateY(10%);
  transform: translateY(10%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-20 {
  -webkit-transform: translateY(20%);
  transform: translateY(20%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-30 {
  -webkit-transform: translateY(30%);
  transform: translateY(30%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-40 {
  -webkit-transform: translateY(40%);
  transform: translateY(40%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-50 {
  -webkit-transform: translateY(50%);
  transform: translateY(50%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-60 {
  -webkit-transform: translateY(60%);
  transform: translateY(60%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-70 {
  -webkit-transform: translateY(70%);
  transform: translateY(70%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-80 {
  -webkit-transform: translateY(80%);
  transform: translateY(80%);
}

.slides:not(.scroll) .slide.before .rolling-element.pct-90 {
  -webkit-transform: translateY(90%);
  transform: translateY(90%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse {
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-10 {
  -webkit-transform: translateY(-10%);
  transform: translateY(-10%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-20 {
  -webkit-transform: translateY(-20%);
  transform: translateY(-20%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-30 {
  -webkit-transform: translateY(-30%);
  transform: translateY(-30%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-40 {
  -webkit-transform: translateY(-40%);
  transform: translateY(-40%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-50 {
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-60 {
  -webkit-transform: translateY(-60%);
  transform: translateY(-60%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-70 {
  -webkit-transform: translateY(-70%);
  transform: translateY(-70%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-80 {
  -webkit-transform: translateY(-80%);
  transform: translateY(-80%);
}

.slides:not(.scroll) .slide.before .rolling-element.inverse.pct-90 {
  -webkit-transform: translateY(-90%);
  transform: translateY(-90%);
}

.slides:not(.scroll) .slide.after .rolling-element {
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-10 {
  -webkit-transform: translateY(-10%);
  transform: translateY(-10%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-20 {
  -webkit-transform: translateY(-20%);
  transform: translateY(-20%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-30 {
  -webkit-transform: translateY(-30%);
  transform: translateY(-30%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-40 {
  -webkit-transform: translateY(-40%);
  transform: translateY(-40%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-50 {
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-60 {
  -webkit-transform: translateY(-60%);
  transform: translateY(-60%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-70 {
  -webkit-transform: translateY(-70%);
  transform: translateY(-70%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-80 {
  -webkit-transform: translateY(-80%);
  transform: translateY(-80%);
}

.slides:not(.scroll) .slide.after .rolling-element.pct-90 {
  -webkit-transform: translateY(-90%);
  transform: translateY(-90%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse {
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-10 {
  -webkit-transform: translateY(10%);
  transform: translateY(10%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-20 {
  -webkit-transform: translateY(20%);
  transform: translateY(20%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-30 {
  -webkit-transform: translateY(30%);
  transform: translateY(30%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-40 {
  -webkit-transform: translateY(40%);
  transform: translateY(40%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-50 {
  -webkit-transform: translateY(50%);
  transform: translateY(50%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-60 {
  -webkit-transform: translateY(60%);
  transform: translateY(60%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-70 {
  -webkit-transform: translateY(70%);
  transform: translateY(70%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-80 {
  -webkit-transform: translateY(80%);
  transform: translateY(80%);
}

.slides:not(.scroll) .slide.after .rolling-element.inverse.pct-90 {
  -webkit-transform: translateY(90%);
  transform: translateY(90%);
}

.slides.animateOnEvent .kenBurns .background,
.slides.animateOnEvent .kenBurns.zoomin .background,
.slides.animated .kenBurns .background,
.slides.animated .kenBurns.zoomin .background {
  -webkit-transform: scale(1.08) rotate(-.02deg);
  transform: scale(1.08) rotate(-.02deg);
  opacity: .2;
  z-index: 1;
}

.slides.animateOnEvent .kenBurns.zoomin:not(.video) .background,
.slides.animateOnEvent .kenBurns:not(.video) .background,
.slides.animated .kenBurns.zoomin:not(.video) .background,
.slides.animated .kenBurns:not(.video) .background {
  transition: opacity 1s ease,-webkit-transform 5s cubic-bezier(.3,0,.7,1);
  transition: transform 5s cubic-bezier(.3,0,.7,1),opacity 1s ease;
  transition: transform 5s cubic-bezier(.3,0,.7,1),opacity 1s ease,-webkit-transform 5s cubic-bezier(.3,0,.7,1);
}

.animateOnEvent .active .kenBurns.zoomin:not(.video) .background,
.animateOnEvent .active.kenBurns.zoomin:not(.video) .background,
.animateOnEvent .active.kenBurns:not(.video) .background,
.animated .active .kenBurns.zoomin:not(.video) .background,
.animated .active.kenBurns.zoomin:not(.video) .background,
.animated .active.kenBurns:not(.video) .background {
  opacity: 1;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

.slides.animateOnEvent .kenBurns.zoomin:not(.video) .background,
.slides.animated .kenBurns.zoomin:not(.video) .background {
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

.animateOnEvent .active.kenBurns.zoomin:not(.video) .background,
.animated .active.kenBurns.zoomin:not(.video) .background,
.windows .slides.animateOnEvent .active.kenBurns.zoomin:not(.video) .background,
.windows .slides.animated .active.kenBurns.zoomin:not(.video) .background {
  -webkit-transform: scale(1.08) rotate(-.02deg);
  transform: scale(1.08) rotate(-.02deg);
}

.mobile .kenBurns .background,
.mobile .kenBurns.zoomin .background {
  transition: 0s;
  -webkit-transform: none;
  transform: none;
}

.slides.animateOnEvent .parallax:not(.video) .background,
.slides.animated .parallax:not(.video) .background {
  -webkit-transform: translate3d(0,0,0) scale(1.25);
  transform: translate3d(0,0,0) scale(1.25);
  transition: -webkit-transform-origin 1s,-webkit-transform 1s;
  transition: transform-origin 1s,transform 1s;
  transition: transform-origin 1s,transform 1s,-webkit-transform-origin 1s,-webkit-transform 1s;
}

.slides.animateOnEvent.fast .parallax:not(.video) .background,
.slides.animated.fast .parallax:not(.video) .background {
  transition: -webkit-transform-origin .6s,-webkit-transform .6s;
  transition: transform-origin .6s,transform .6s;
  transition: transform-origin .6s,transform .6s,-webkit-transform-origin .6s,-webkit-transform .6s;
}

.slides.animateOnEvent.slow .parallax:not(.video) .background,
.slides.animated.slow .parallax:not(.video) .background {
  transition: -webkit-transform-origin 1.4s,-webkit-transform 1.4s;
  transition: transform-origin 1.4s,transform 1.4s;
  transition: transform-origin 1.4s,transform 1.4s,-webkit-transform-origin 1.4s,-webkit-transform 1.4s;
}

.slides.animateOnEvent .parallax.animate:not(.video) .background,
.slides.animated .parallax.animate:not(.video) .background {
  -webkit-transform-origin: center;
  transform-origin: center;
}

.slides.animateOnEvent .slide.after.parallax:not(.video) .background,
.slides.animated .slide.after.parallax:not(.video) .background {
  -webkit-transform-origin: top center;
  transform-origin: top center;
}

.slides.animateOnEvent .slide.before.parallax:not(.video) .background,
.slides.animated .slide.before.parallax:not(.video) .background {
  -webkit-transform-origin: bottom center;
  transform-origin: bottom center;
}

.slides.animateOnEvent.horizontal .slide.after.parallax:not(.video) .background,
.slides.animated.horizontal .slide.after.parallax:not(.video) .background {
  -webkit-transform-origin: left center;
  transform-origin: left center;
}

.slides.animateOnEvent.horizontal .slide.before.parallax:not(.video) .background,
.slides.animated.horizontal .slide.before.parallax:not(.video) .background {
  -webkit-transform-origin: right center;
  transform-origin: right center;
}

.slides.animateOnEvent.zoom .slide.after.parallax:not(.video) .background,
.slides.animated.zoom .slide.after.parallax:not(.video) .background {
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: translate3d(0,0,0) scale(1);
  transform: translate3d(0,0,0) scale(1);
}

.slides.animateOnEvent.zoom .slide.animate.parallax:not(.video) .background,
.slides.animated.zoom .slide.animate.parallax:not(.video) .background {
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: translate3d(0,0,0) scale(1.1);
  transform: translate3d(0,0,0) scale(1.1);
}

.slides.animateOnEvent.plain .slide.after.parallax:not(.video) .background,
.slides.animateOnEvent.plain .slide.animate.parallax:not(.video) .background,
.slides.animateOnEvent.plain .slide.before.parallax:not(.video) .background,
.slides.animateOnEvent.zoom .slide.before.parallax:not(.video) .background,
.slides.animated.plain .slide.after.parallax:not(.video) .background,
.slides.animated.plain .slide.animate.parallax:not(.video) .background,
.slides.animated.plain .slide.before.parallax:not(.video) .background,
.slides.animated.zoom .slide.before.parallax:not(.video) .background {
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: translate3d(0,0,0) scale(1);
  transform: translate3d(0,0,0) scale(1);
}

.slides.animateOnEvent .scenic:not(.video) .background,
.slides.animated .scenic:not(.video) .background {
  -webkit-animation: scenic 140s cubic-bezier(.2,0,.8,1) infinite;
  animation: scenic 140s cubic-bezier(.2,0,.8,1) infinite;
}

@-webkit-keyframes scenic {
  50% {
    -webkit-transform: scale(1.5) rotate(-.02deg);
    transform: scale(1.5) rotate(-.02deg);
  }
}

@keyframes scenic {
  50% {
    -webkit-transform: scale(1.5) rotate(-.02deg);
    transform: scale(1.5) rotate(-.02deg);
  }
}

.mobile .simplifiedMobile,
.scroll {
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.scroll .content .mobile .simplifiedMobile .content {
  -webkit-overflow-scrolling: initial;
  overflow: hidden;
}

.scroll .wrap {
  overflow: hidden;
}

.mobile .simplifiedMobile .container,
.mobile .simplifiedMobile .content,
.mobile .simplifiedMobile .slide,
.scroll .container,
.scroll .slide,
.scroll .slide .content {
  position: relative!important;
  height: auto;
  opacity: 1;
}

.mobile .simplifiedMobile .popup .container,
.mobile .simplifiedMobile .popup .content {
  position: absolute!important;
  height: 100%;
}

.mobile .simplifiedMobile .container,
.scroll .container {
  height: 100vh;
}

.mobile .slide.autoHeight .simplifiedMobile .container,
.scroll .slide.autoHeight .container {
  height: auto;
}

.mobile .simplifiedMobile .slide .background,
.scroll .slide .background {
  position: absolute!important;
}

.mobile .simplifiedMobile .slide:not(.autoHeight) .background,
.scroll .slide:not(.autoHeight) .background {
  min-height: 100vh;
}

.mobile .simplifiedMobile .slide,
.mobile .simplifiedMobile .slide.after,
.mobile .simplifiedMobile .slide.before,
.scroll .slide,
.scroll .slide.after,
.scroll .slide.before {
  visibility: visible;
  -webkit-transform: none!important;
  transform: none!important;
}

.mobile .simplifiedMobile .slide,
.mobile .simplifiedMobile .slide.after,
.mobile .simplifiedMobile .slide.before {
  opacity: 1!important;
}

.page-loaded.mobile.sidebarShown .simplifiedMobile .slide,
.page-loaded.sidebarShown .scroll .slide {
  -webkit-transform: translate3d(0,0,0)!important;
  transform: translate3d(0,0,0)!important;
  pointer-events: none;
  opacity: .5!important;
}

.page-loaded .scroll .slide {
  transition: opacity .5s,-webkit-transform .5s!important;
  transition: transform .5s,opacity .5s!important;
  transition: transform .5s,opacity .5s,-webkit-transform .5s!important;
}

.mobile .simplifiedMobile .navigation {
  display: none;
}

.mobile .simplifiedMobile [class*=ae-] {
  visibility: visible!important;
  opacity: 1!important;
  -webkit-transform: none!important;
  transform: none!important;
}

.scroll .parallax:not(.video) .background {
  -webkit-transform: translate3d(0,0,0) scale(1.25);
  transform: translate3d(0,0,0) scale(1.25);
  transition: none!important;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
}

@-webkit-keyframes zoomOut {
  from {
    opacity: 0;
    -webkit-transform: scale(.86);
    transform: scale(.86);
  }
}

@keyframes zoomOut {
  from {
    opacity: 0;
    -webkit-transform: scale(.86);
    transform: scale(.86);
  }
}

@-webkit-keyframes riseUp {
  from {
    opacity: 0;
    -webkit-transform: scale(.86) translateY(50px);
    transform: scale(.86) translateY(50px);
  }
}

@keyframes riseUp {
  from {
    opacity: 0;
    -webkit-transform: scale(.86) translateY(50px);
    transform: scale(.86) translateY(50px);
  }
}

html {
  font-size: 6px;
  font-weight: 400;
  color: #202020;
}

@media (max-width:550px) {
  html {
    font-size: 5px;
  }
}

@media (min-width:767px) {
  html {
    font-size: 7px;
  }
}

@media (min-width:1024px) {
  html {
    font-size: 6px;
  }
}

body {
  font-size: 15px;
}

.typography .h1,
.typography .h2,
.typography .h3,
.typography .h4,
.typography .h5,
.typography .h6,
.typography h1,
.typography h2,
.typography h3,
.typography h4,
.typography h5,
.typography h6 {
  font-style: normal;
  letter-spacing: normal;
}

.typography .h1.ultraLight,
.typography .h2.ultraLight,
.typography .h3.ultraLight,
.typography .h4.ultraLight,
.typography .h5.ultraLight,
.typography .h6.ultraLight,
.typography h1.ultraLight,
.typography h2.ultraLight,
.typography h3.ultraLight,
.typography h4.ultraLight,
.typography h5.ultraLight,
.typography h6.ultraLight {
  font-weight: 100;
}

.typography .h1.light,
.typography .h2.light,
.typography .h3.light,
.typography .h4.light,
.typography .h5.light,
.typography .h6.light,
.typography h1.light,
.typography h2.light,
.typography h3.light,
.typography h4.light,
.typography h5.light,
.typography h6.light {
  font-weight: 300;
}

.typography .h1.normal,
.typography .h2.normal,
.typography .h3.normal,
.typography .h4.normal,
.typography .h5.normal,
.typography .h6.normal,
.typography h1.normal,
.typography h2.normal,
.typography h3.normal,
.typography h4.normal,
.typography h5.normal,
.typography h6.normal {
  font-weight: 400;
}

.typography .h1.semiBold,
.typography .h2.semiBold,
.typography .h3.semiBold,
.typography .h4.semiBold,
.typography .h5.semiBold,
.typography .h6.semiBold,
.typography h1.semiBold,
.typography h2.semiBold,
.typography h3.semiBold,
.typography h4.semiBold,
.typography h5.semiBold,
.typography h6.semiBold {
  font-weight: 500;
  letter-spacing: -.05em;
}

.typography .h1.bold,
.typography .h2.bold,
.typography .h3.bold,
.typography .h4.bold,
.typography .h5.bold,
.typography .h6.bold,
.typography h1.bold,
.typography h2.bold,
.typography h3.bold,
.typography h4.bold,
.typography h5.bold,
.typography h6.bold {
  font-weight: 600;
  letter-spacing: -.04em;
}

.typography .h1.ultraBold,
.typography .h2.ultraBold,
.typography .h3.ultraBold,
.typography .h4.ultraBold,
.typography .h5.ultraBold,
.typography .h6.ultraBold,
.typography h1.ultraBold,
.typography h2.ultraBold,
.typography h3.ultraBold,
.typography h4.ultraBold,
.typography h5.ultraBold,
.typography h6.ultraBold {
  font-weight: 800;
  letter-spacing: -.03em;
}

.typography .h1,
.typography h1 {
  font-size: 8.4rem;
  line-height: 10rem;
  margin-top: 8rem;
  padding-top: .0138rem;
  padding-bottom: .9862rem;
  margin-bottom: 1rem;
}

.typography .h1.small,
.typography h1.small {
  font-size: 6.4rem;
  line-height: 6rem;
  margin-top: 3rem;
  padding-top: .7248rem;
  padding-bottom: .2752rem;
  margin-bottom: 2rem;
}

.typography .h1.large,
.typography h1.large {
  font-size: 9.6rem;
  line-height: 10rem;
  margin-top: 7rem;
  padding-top: .5872rem;
  padding-bottom: .4128rem;
  margin-bottom: 4rem;
}

.typography .h1.huge,
.typography h1.huge {
  font-size: 14.6rem;
  line-height: 15rem;
  margin-top: 10rem;
  padding-top: .3097rem;
  padding-bottom: .6903rem;
  margin-bottom: 3rem;
}

.typography .h2,
.typography h2 {
  font-size: 7.4rem;
  line-height: 8rem;
  margin-top: 6rem;
  padding-top: .3693rem;
  padding-bottom: .6307rem;
  margin-bottom: 1rem;
}

.typography .h2.small,
.typography h2.small {
  font-size: 5.6rem;
  line-height: 6rem;
  margin-top: 4rem;
  padding-top: .0092rem;
  padding-bottom: .9908rem;
  margin-bottom: -1rem;
}

.typography .h2.large,
.typography h2.large {
  font-size: 8.8rem;
  line-height: 9rem;
  margin-top: 6rem;
  padding-top: .3716rem;
  padding-bottom: .6284rem;
  margin-bottom: 1rem;
}

.typography .h2.huge,
.typography h2.huge {
  font-size: 11.2rem;
  line-height: 12rem;
  margin-top: 8rem;
  padding-top: .0184rem;
  padding-bottom: .9816rem;
  margin-bottom: 1rem;
}

.typography .h3,
.typography h3 {
  font-size: 6.4rem;
  line-height: 8rem;
  margin-top: 3rem;
  padding-top: .7248rem;
  padding-bottom: .2752rem;
  margin-bottom: 0;
}

.typography .h3.small,
.typography h3.small {
  font-size: 4.8rem;
  line-height: 6rem;
  margin-top: 2rem;
  padding-top: .2936rem;
  padding-bottom: .7064rem;
  margin-bottom: -1rem;
}

.typography .h3.large,
.typography h3.large {
  font-size: 8rem;
  line-height: 10rem;
  margin-top: 4rem;
  padding-top: .156rem;
  padding-bottom: .844rem;
  margin-bottom: 0;
}

.typography .h3.huge,
.typography h3.huge {
  font-size: 9.6rem;
  line-height: 10rem;
  margin-top: 5rem;
  padding-top: .5872rem;
  padding-bottom: .4128rem;
  margin-bottom: 2rem;
}

.typography .h4,
.typography h4 {
  font-size: 5.2rem;
  line-height: 6rem;
  margin-top: 4rem;
  padding-top: .1514rem;
  padding-bottom: .8486rem;
  margin-bottom: -1rem;
}

.typography .h5,
.typography h5 {
  font-size: 4.4rem;
  line-height: 6rem;
  margin-top: 4rem;
  padding-top: .4358rem;
  padding-bottom: .5642rem;
  margin-bottom: -1rem;
}

.typography .h6,
.typography h6 {
  font-size: 4rem;
  line-height: 4rem;
  margin-top: 3rem;
  padding-top: .578rem;
  padding-bottom: .422rem;
  margin-bottom: 0;
}

.typography .p,
.typography .p:not(.hero)+p,
.typography p,
.typography p:not(.hero)+p {
  font-size: 3.5rem;
  line-height: 5rem;
  margin-top: 0;
  padding-top: .25575rem;
  padding-bottom: .74425rem;
  margin-bottom: 1rem;
  text-rendering: optimizeLegibility;
}

.typography .p.micro,
.typography .p:not(.hero)+p.micro,
.typography p.micro,
.typography p:not(.hero)+p.micro {
  font-size: 2.6rem;
  line-height: 4rem;
  margin-top: 2rem;
  padding-top: .0757rem;
  padding-bottom: .9243rem;
  margin-bottom: -1rem;
}

.typography .p.small,
.typography .p:not(.hero)+p.small,
.typography p.small,
.typography p:not(.hero)+p.small {
  font-size: 3rem;
  line-height: 4rem;
  margin-top: 1rem;
  padding-top: .9335rem;
  padding-bottom: .0665rem;
  margin-bottom: 0;
}

.typography .p.hero,
.typography .p:not(.hero)+p.hero,
.typography p.hero,
.typography p:not(.hero)+p.hero {
  font-size: 5rem;
  line-height: 6rem;
  margin-top: 2rem;
  padding-top: .2225rem;
  padding-bottom: .7775rem;
  margin-bottom: 3rem;
  font-weight: 300;
  letter-spacing: -.16rem;
}

.typography strong {
  font-weight: 600;
}

.typography em {
  font-weight: 500;
}

.typography li {
  font-size: 3.5rem;
  line-height: 4rem;
  margin-top: -1rem;
  padding-top: .75575rem;
  padding-bottom: .24425rem;
  margin-bottom: 1rem;
  opacity: .8;
}

.typography blockquote,
.typography q {
  font-size: 3.2rem;
  line-height: 4rem;
  opacity: .9;
}

.typography ol,
.typography ul {
  margin: 4rem 4rem 4rem 8rem;
}

.typography ul li {
  list-style: disc;
}

.typography ol li {
  list-style: decimal;
}

.typography blockquote {
  border-left: 5px solid #eee;
  margin: 5rem 4rem;
  padding: 1rem 4rem;
}

.typography q {
  margin-top: 5rem;
  margin-bottom: 6rem;
  display: block;
  padding: .8624rem 4rem .1376rem;
}

.typography q:after,
.typography q:before {
  font-size: 5rem;
  line-height: .1rem;
  vertical-align: -1rem;
}

.typography q:before {
  content: "“";
  margin-right: 1rem;
}

.typography q:after {
  content: "”";
  margin-left: 1rem;
}

.box-77 .thumbnail-77.video:after,
.grid-69 .box-69:after,
.grid:after {
  content: "";
}

@media (min-width:768px) {
  .article li,
  .article p {
    font-weight: 300;
  }
}

@media (max-width:550px) {
  .article .h2,
  .article .h3,
  .article h1,
  .article h4,
  .article h5,
  .article h6 {
    opacity: .8;
  }
}

.white {
  background: #fff!important;
  color: #202020!important;
}

.black,
.stroke.button.white,
.text-white {
  color: #fff!important;
}

.white svg {
  fill: #202020!important;
}

.black svg,
.stroke.button.white svg,
.text-white.button svg {
  fill: #fff!important;
}

.stroke.button.white {
  border-color: #fff!important;
}

.black {
  background: #202020!important;
}

.stroke.button.black,
.text-black {
  color: #202020!important;
}

.stroke.button.black svg,
.text-black.button svg {
  fill: #202020!important;
}

.stroke.button.black {
  border-color: #202020!important;
}

.red {
  background: #f44336!important;
  color: #fff!important;
}

.stroke.button.red,
.text-red {
  color: #f44336!important;
}

.red svg {
  fill: #fff!important;
}

.stroke.button.red svg,
.text-red.button svg {
  fill: #f44336!important;
}

.stroke.button.red {
  border-color: #f44336!important;
}

.pink {
  background: #e91e63!important;
  color: #fff!important;
}

.stroke.button.pink,
.text-pink {
  color: #e91e63!important;
}

.pink svg {
  fill: #fff!important;
}

.stroke.button.pink svg,
.text-pink.button svg {
  fill: #e91e63!important;
}

.stroke.button.pink {
  border-color: #e91e63!important;
}

.purple {
  background: #9c27b0!important;
  color: #fff!important;
}

.stroke.button.purple,
.text-purple {
  color: #9c27b0!important;
}

.purple svg {
  fill: #fff!important;
}

.stroke.button.purple svg,
.text-purple.button svg {
  fill: #9c27b0!important;
}

.stroke.button.purple {
  border-color: #9c27b0!important;
}

.deepPurple {
  background: #673ab7!important;
  color: #fff!important;
}

.deepPurple svg {
  fill: #fff!important;
}

.stroke.button.deepPurple svg,
.text-deepPurple.button svg {
  fill: #673ab7!important;
}

.text-deepPurple {
  color: #673ab7!important;
}

.stroke.button.deepPurple {
  color: #673ab7!important;
  border-color: #673ab7!important;
}

.indigo {
  background: #3f51b5!important;
  color: #fff!important;
}

.stroke.button.indigo,
.text-indigo {
  color: #3f51b5!important;
}

.indigo svg {
  fill: #fff!important;
}

.stroke.button.indigo svg,
.text-indigo.button svg {
  fill: #3f51b5!important;
}

.stroke.button.indigo {
  border-color: #3f51b5!important;
}

.blue {
  background: #2196f3!important;
  color: #fff!important;
}

.stroke.button.blue,
.text-blue {
  color: #2196f3!important;
}

.blue svg {
  fill: #fff!important;
}

.stroke.button.blue svg,
.text-blue.button svg {
  fill: #2196f3!important;
}

.stroke.button.blue {
  border-color: #2196f3!important;
}

.cyan {
  background: #00bcd4!important;
  color: #fff!important;
}

.stroke.button.cyan,
.text-cyan {
  color: #00bcd4!important;
}

.cyan svg {
  fill: #fff!important;
}

.stroke.button.cyan svg,
.text-cyan.button svg {
  fill: #00bcd4!important;
}

.stroke.button.cyan {
  border-color: #00bcd4!important;
}

.teal {
  background: #009688!important;
  color: #fff!important;
}

.stroke.button.teal,
.text-teal {
  color: #009688!important;
}

.teal svg {
  fill: #fff!important;
}

.stroke.button.teal svg,
.text-teal.button svg {
  fill: #009688!important;
}

.stroke.button.teal {
  border-color: #009688!important;
}

.green {
  background: #4caf50!important;
  color: #fff!important;
}

.stroke.button.green,
.text-green {
  color: #4caf50!important;
}

.green svg {
  fill: #fff!important;
}

.stroke.button.green svg,
.text-green.button svg {
  fill: #4caf50!important;
}

.stroke.button.green {
  border-color: #4caf50!important;
}

.lightGreen {
  background: #8bc34a!important;
  color: #fff!important;
}

.lightGreen svg {
  fill: #fff!important;
}

.stroke.button.lightGreen svg,
.text-lightGreen.button svg {
  fill: #8bc34a!important;
}

.text-lightGreen {
  color: #8bc34a!important;
}

.stroke.button.lightGreen {
  color: #8bc34a!important;
  border-color: #8bc34a!important;
}

.lime {
  background: #cddc39!important;
  color: #fff!important;
}

.stroke.button.lime,
.text-lime {
  color: #cddc39!important;
}

.lime svg {
  fill: #fff!important;
}

.stroke.button.lime svg,
.text-lime.button svg {
  fill: #cddc39!important;
}

.stroke.button.lime {
  border-color: #cddc39!important;
}

.yellow {
  background: #ffeb3b!important;
  color: #202020!important;
}

.stroke.button.yellow,
.text-yellow {
  color: #ffeb3b!important;
}

.yellow svg {
  fill: #202020!important;
}

.stroke.button.yellow svg,
.text-yellow.button svg {
  fill: #ffeb3b!important;
}

.stroke.button.yellow {
  border-color: #ffeb3b!important;
}

.amber {
  background: #ffc107!important;
  color: #fff!important;
}

.stroke.button.amber,
.text-amber {
  color: #ffc107!important;
}

.amber svg {
  fill: #fff!important;
}

.stroke.button.amber svg,
.text-amber.button svg {
  fill: #ffc107!important;
}

.stroke.button.amber {
  border-color: #ffc107!important;
}

.orange {
  background: #ff9800!important;
  color: #fff!important;
}

.stroke.button.orange,
.text-orange {
  color: #ff9800!important;
}

.orange svg {
  fill: #fff!important;
}

.stroke.button.orange svg,
.text-orange.button svg {
  fill: #ff9800!important;
}

.stroke.button.orange {
  border-color: #ff9800!important;
}

.deepOrange {
  background: #ff5722!important;
  color: #fff!important;
}

.deepOrange svg {
  fill: #fff!important;
}

.stroke.button.deepOrange svg,
.text-deepOrange.button svg {
  fill: #ff5722!important;
}

.text-deepOrange {
  color: #ff5722!important;
}

.stroke.button.deepOrange {
  color: #ff5722!important;
  border-color: #ff5722!important;
}

.brown {
  background: #795548!important;
  color: #fff!important;
}

.stroke.button.brown,
.text-brown {
  color: #795548!important;
}

.brown svg {
  fill: #fff!important;
}

.stroke.button.brown svg,
.text-brown.button svg {
  fill: #795548!important;
}

.stroke.button.brown {
  border-color: #795548!important;
}

.gray {
  background: #9d9d9d!important;
  color: #fff!important;
}

.stroke.button.gray,
.text-gray {
  color: #9d9d9d!important;
}

.gray svg {
  fill: #fff!important;
}

.stroke.button.gray svg,
.text-gray.button svg {
  fill: #9d9d9d!important;
}

.stroke.button.gray {
  border-color: #9d9d9d!important;
}

.blueGray {
  background: #607d8b!important;
  color: #fff!important;
}

.stroke.button.blueGray,
.text-blueGray {
  color: #607d8b!important;
}

.blueGray svg {
  fill: #fff!important;
}

.stroke.button.blueGray svg,
.text-blueGray.button svg {
  fill: #607d8b!important;
}

.stroke.button.blueGray {
  border-color: #607d8b!important;
}

.social-facebook {
  background: #3b5998!important;
  color: #fff!important;
}

.social-facebook svg {
  fill: #fff!important;
}

.stroke.button.social-facebook svg,
.text-social-facebook.button svg {
  fill: #3b5998!important;
}

.text-social-facebook {
  color: #3b5998!important;
}

.stroke.button.social-facebook {
  color: #3b5998!important;
  border-color: #3b5998!important;
}

.social-twitter {
  background: #55acee!important;
  color: #fff!important;
}

.social-twitter svg {
  fill: #fff!important;
}

.stroke.button.social-twitter svg,
.text-social-twitter.button svg {
  fill: #55acee!important;
}

.text-social-twitter {
  color: #55acee!important;
}

.stroke.button.social-twitter {
  color: #55acee!important;
  border-color: #55acee!important;
}

.social-googlePlus {
  background: #dd4330!important;
  color: #fff!important;
}

.social-googlePlus svg {
  fill: #fff!important;
}

.stroke.button.social-googlePlus svg,
.text-social-googlePlus.button svg {
  fill: #dd4330!important;
}

.text-social-googlePlus {
  color: #dd4330!important;
}

.stroke.button.social-googlePlus {
  color: #dd4330!important;
  border-color: #dd4330!important;
}

.social-behance {
  background: #105dfb!important;
  color: #fff!important;
}

.social-behance svg {
  fill: #fff!important;
}

.stroke.button.social-behance svg,
.text-social-behance.button svg {
  fill: #105dfb!important;
}

.text-social-behance {
  color: #105dfb!important;
}

.stroke.button.social-behance {
  color: #105dfb!important;
  border-color: #105dfb!important;
}

.social-medium {
  background: #12100e!important;
  color: #fff!important;
}

.social-medium svg {
  fill: #fff!important;
}

.stroke.button.social-medium svg,
.text-social-medium.button svg {
  fill: #12100e!important;
}

.text-social-medium {
  color: #12100e!important;
}

.stroke.button.social-medium {
  color: #12100e!important;
  border-color: #12100e!important;
}

.social-stumbleupon {
  background: #eb4924!important;
  color: #fff!important;
}

.social-stumbleupon svg {
  fill: #fff!important;
}

.stroke.button.social-stumbleupon svg,
.text-social-stumbleupon.button svg {
  fill: #eb4924!important;
}

.text-social-stumbleupon {
  color: #eb4924!important;
}

.stroke.button.social-stumbleupon {
  color: #eb4924!important;
  border-color: #eb4924!important;
}

.social-linkedin {
  background: #0077b5!important;
  color: #fff!important;
}

.social-linkedin svg {
  fill: #fff!important;
}

.stroke.button.social-linkedin svg,
.text-social-linkedin.button svg {
  fill: #0077b5!important;
}

.text-social-linkedin {
  color: #0077b5!important;
}

.stroke.button.social-linkedin {
  color: #0077b5!important;
  border-color: #0077b5!important;
}

.social-pinterest {
  background: #cc2127!important;
  color: #fff!important;
}

.social-pinterest svg {
  fill: #fff!important;
}

.stroke.button.social-pinterest svg,
.text-social-pinterest.button svg {
  fill: #cc2127!important;
}

.text-social-pinterest {
  color: #cc2127!important;
}

.stroke.button.social-pinterest {
  color: #cc2127!important;
  border-color: #cc2127!important;
}

.social-instagram {
  background: #e4405f!important;
  color: #fff!important;
}

.social-instagram svg {
  fill: #fff!important;
}

.stroke.button.social-instagram svg,
.text-social-instagram.button svg {
  fill: #e4405f!important;
}

.text-social-instagram {
  color: #e4405f!important;
}

.stroke.button.social-instagram {
  color: #e4405f!important;
  border-color: #e4405f!important;
}

.social-tumblr {
  background: #34455d!important;
  color: #fff!important;
}

.social-tumblr svg {
  fill: #fff!important;
}

.stroke.button.social-tumblr svg,
.text-social-tumblr.button svg {
  fill: #34455d!important;
}

.text-social-tumblr {
  color: #34455d!important;
}

.stroke.button.social-tumblr {
  color: #34455d!important;
  border-color: #34455d!important;
}

.social-dribbble {
  background: #ea4c89!important;
  color: #fff!important;
}

.social-dribbble svg {
  fill: #fff!important;
}

.stroke.button.social-dribbble svg,
.text-social-dribbble.button svg {
  fill: #ea4c89!important;
}

.text-social-dribbble {
  color: #ea4c89!important;
}

.stroke.button.social-dribbble {
  color: #ea4c89!important;
  border-color: #ea4c89!important;
}

.social-delicious {
  background: #39f!important;
  color: #fff!important;
}

.social-delicious svg {
  fill: #fff!important;
}

.stroke.button.social-delicious svg,
.text-social-delicious.button svg {
  fill: #39f!important;
}

.text-social-delicious {
  color: #39f!important;
}

.stroke.button.social-delicious {
  color: #39f!important;
  border-color: #39f!important;
}

.social-digg {
  background: #000!important;
  color: #fff!important;
}

.social-digg svg {
  fill: #fff!important;
}

.stroke.button.social-digg svg,
.text-social-digg.button svg {
  fill: #000!important;
}

.text-social-digg {
  color: #000!important;
}

.stroke.button.social-digg {
  color: #000!important;
  border-color: #000!important;
}

.social-vimeo {
  background: #fff!important;
  color: #1ab7ea!important;
}

.social-whatsapp,
.text-social-vimeo {
  color: #fff!important;
}

.social-vimeo svg {
  fill: #1ab7ea!important;
}

.social-whatsapp svg,
.stroke.button.social-vimeo svg,
.text-social-vimeo.button svg {
  fill: #fff!important;
}

.stroke.button.social-vimeo {
  color: #fff!important;
  border-color: #fff!important;
}

.social-whatsapp {
  background: #25d366!important;
}

.stroke.button.social-whatsapp svg,
.text-social-whatsapp.button svg {
  fill: #25d366!important;
}

.text-social-whatsapp {
  color: #25d366!important;
}

.stroke.button.social-whatsapp {
  color: #25d366!important;
  border-color: #25d366!important;
}

.social-xing {
  background: #026466!important;
  color: #fff!important;
}

.social-xing svg {
  fill: #fff!important;
}

.stroke.button.social-xing svg,
.text-social-xing.button svg {
  fill: #026466!important;
}

.text-social-xing {
  color: #026466!important;
}

.stroke.button.social-xing {
  color: #026466!important;
  border-color: #026466!important;
}

.social-youtube {
  background: #fc0d1c!important;
  color: #fff!important;
}

.social-youtube svg {
  fill: #fff!important;
}

.stroke.button.social-youtube svg,
.text-social-youtube.button svg {
  fill: #fc0d1c!important;
}

.text-social-youtube {
  color: #fc0d1c!important;
}

.stroke.button.social-youtube {
  color: #fc0d1c!important;
  border-color: #fc0d1c!important;
}

.grid {
  margin-left: -2%;
  margin-right: -2%;
}

.grid [class*=col-] {
  display: block;
  width: 100%;
  padding-left: 2%;
  padding-right: 2%;
  float: left;
}

.grid.fixedSpaces {
  margin-left: -10px;
  margin-right: -10px;
}

.grid.fixedSpaces>[class*=col-] {
  padding-left: 10px;
  padding-right: 10px;
}

.grid.noSpaces {
  margin-left: 0;
  margin-right: 0;
}

.grid.noSpaces>[class*=col-] {
  padding-left: 0;
  padding-right: 0;
}

.grid .toLeft[class*=col-] {
  margin-left: 0!important;
  margin-right: auto!important;
}

.grid .toRight[class*=col-] {
  margin-right: 0!important;
  margin-left: auto!important;
  float: right;
}

.grid .toCenter[class*=col-] {
  margin-left: auto!important;
  margin-right: auto!important;
}

.grid>.col-1-12 {
  max-width: 8.33333%;
}

.grid>.col-2-12 {
  max-width: 16.66667%;
}

.grid>.col-3-12 {
  max-width: 25%;
}

.grid>.col-4-12 {
  max-width: 33.33333%;
}

.grid>.col-5-12 {
  max-width: 41.66667%;
}

.grid>.col-6-12 {
  max-width: 50%;
}

.grid>.col-7-12 {
  max-width: 58.33333%;
}

.grid>.col-8-12 {
  max-width: 66.66667%;
}

.grid>.col-9-12 {
  max-width: 75%;
}

.grid>.col-10-12 {
  max-width: 83.33333%;
}

.grid>.col-11-12 {
  max-width: 91.66667%;
}

.grid>.col-12-12 {
  max-width: 100%;
}

.grid>.col-1-10 {
  max-width: 10%;
}

.grid>.col-2-10 {
  max-width: 20%;
}

.grid>.col-3-10 {
  max-width: 30%;
}

.grid>.col-4-10 {
  max-width: 40%;
}

.grid>.col-5-10 {
  max-width: 50%;
}

.grid>.col-6-10 {
  max-width: 60%;
}

.grid>.col-7-10 {
  max-width: 70%;
}

.grid>.col-8-10 {
  max-width: 80%;
}

.grid>.col-9-10 {
  max-width: 90%;
}

.grid>.col-10-10 {
  max-width: 100%;
}

.grid+.grid {
  margin-top: 20px;
}

.grid:after {
  display: table;
  clear: both;
}

@media (max-width:1239px) {
  .grid>.col-desktop-1-1 {
    max-width: 100%!important;
  }

  .grid>.col-desktop-1-2 {
    max-width: 50%!important;
  }

  .grid>.col-desktop-1-3 {
    max-width: 33.33333333%!important;
  }

  .grid>.col-desktop-2-3 {
    max-width: 66.66666666%!important;
  }

  .grid>.col-desktop-1-4 {
    max-width: 25%!important;
  }

  .grid>.col-desktop-3-4 {
    max-width: 75%!important;
  }
}

.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-left: -2%;
  margin-right: -2%;
}

.flex>[class*=col-] {
  padding-left: 2%;
  padding-right: 2%;
}

.flex.fixedSpaces {
  margin-left: -14px;
  margin-right: -14px;
}

.flex.fixedSpaces>[class*=col-] {
  padding-left: 14px;
  padding-right: 14px;
}

.flex.noSpaces {
  margin-left: 0;
  margin-right: 0;
}

.flex.noSpaces>[class*=col-] {
  padding-left: 0;
  padding-right: 0;
}

.flex.verticalCenter {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.flex.verticalBottom {
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
}

.flex.horizontalCenter {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.flex.reverse {
  -ms-flex-wrap: wrap-reverse;
  flex-wrap: wrap-reverse;
}

.flex.bottom [class*=col-],
.flex.reverse.top [class*=col-] {
  -ms-flex-item-align: end;
  align-self: flex-end;
}

.flex.reverse.bottom [class*=col-],
.flex.top [class*=col-] {
  -ms-flex-item-align: start;
  align-self: flex-start;
}

.flex>.col-1-12 {
  width: 8.33333%;
}

.flex>.col-2-12 {
  width: 16.66667%;
}

.flex>.col-3-12 {
  width: 25%;
}

.flex>.col-4-12 {
  width: 33.33333%;
}

.flex>.col-5-12 {
  width: 41.66667%;
}

.flex>.col-6-12 {
  width: 50%;
}

.flex>.col-7-12 {
  width: 58.33333%;
}

.flex>.col-8-12 {
  width: 66.66667%;
}

.flex>.col-9-12 {
  width: 75%;
}

.flex>.col-10-12 {
  width: 83.33333%;
}

.flex>.col-11-12 {
  width: 91.66667%;
}

.flex>.col-12-12 {
  width: 100%;
}

.flex>.col-1-10 {
  width: 10%;
}

.flex>.col-2-10 {
  width: 20%;
}

.flex>.col-3-10 {
  width: 30%;
}

.flex>.col-4-10 {
  width: 40%;
}

.flex>.col-5-10 {
  width: 50%;
}

.flex>.col-6-10 {
  width: 60%;
}

.flex>.col-7-10 {
  width: 70%;
}

.flex>.col-8-10 {
  width: 80%;
}

.flex>.col-9-10 {
  width: 90%;
}

.flex>.col-10-10 {
  width: 100%;
}

@media (max-width:1023px) {
  .parallaxMotion .parallaxElement:not(.responsive),
  .parallaxMotion:not(.responsive) .parallaxElement {
    -webkit-transform: none!important;
    transform: none!important;
  }

  .grid:not(.later)>[class*=col-]:not([class*=col-phablet-]):not([class*=col-phone-]) {
    max-width: 100%;
  }

  .grid>.col-tablet-1-1 {
    max-width: 100%!important;
  }

  .grid>.col-tablet-1-2 {
    max-width: 50%!important;
  }

  .grid>.col-tablet-1-3 {
    max-width: 33.33333333%!important;
  }

  .grid>.col-tablet-2-3 {
    max-width: 66.66666666%!important;
  }

  .grid>.col-tablet-1-4 {
    max-width: 25%!important;
  }

  .grid>.col-tablet-3-4 {
    max-width: 75%!important;
  }

  .grid>.col-tablet-1-5 {
    max-width: 20%!important;
  }

  .grid>.col-tablet-2-5 {
    max-width: 40%!important;
  }

  .grid>.col-tablet-3-5 {
    max-width: 60%!important;
  }

  .grid>.col-tablet-4-5 {
    max-width: 80%!important;
  }

  .flex:not(.later)>[class*=col-]:not([class*=col-phablet-]):not([class*=col-phone-]) {
    width: 100%;
  }

  .flex>.col-tablet-1-1 {
    width: 100%!important;
  }

  .flex>.col-tablet-1-2 {
    width: 50%!important;
  }

  .flex>.col-tablet-1-3 {
    width: 33.33333333%!important;
  }

  .flex>.col-tablet-2-3 {
    width: 66.66666666%!important;
  }

  .flex>.col-tablet-1-4 {
    width: 25%!important;
  }

  .flex>.col-tablet-3-4 {
    width: 75%!important;
  }

  .flex>.col-tablet-1-5 {
    width: 20%!important;
  }

  .flex>.col-tablet-2-5 {
    width: 40%!important;
  }

  .flex>.col-tablet-3-5 {
    width: 60%!important;
  }

  .flex>.col-tablet-4-5 {
    width: 80%!important;
  }
}

@media (max-width:767px) {
  .grid.later>[class*=col-]:not([class*=col-phone-]) {
    max-width: 100%;
  }

  .grid>.col-phablet-1-1 {
    max-width: 100%!important;
  }

  .grid>.col-phablet-1-2 {
    max-width: 50%!important;
  }

  .grid>.col-phablet-1-3 {
    max-width: 33.33333333%!important;
  }

  .grid>.col-phablet-1-4 {
    max-width: 25%!important;
  }

  .grid>.col-phablet-3-4 {
    max-width: 75%!important;
  }

  .flex.later>[class*=col-]:not([class*=col-phone-]) {
    width: 100%;
  }

  .flex>.col-phablet-1-1 {
    width: 100%!important;
  }

  .flex>.col-phablet-1-2 {
    width: 50%!important;
  }

  .flex>.col-phablet-1-3 {
    width: 33.33333333%!important;
  }

  .flex>.col-phablet-2-3 {
    width: 66.66666666%!important;
  }

  .flex>.col-phablet-1-4 {
    width: 25%!important;
  }

  .flex>.col-phablet-3-4 {
    width: 75%!important;
  }
}

@media (max-width:435px) {
  .grid>[class*=col-] {
    max-width: 100%;
  }

  .grid>.col-phone-1-1 {
    max-width: 100%!important;
  }

  .grid>.col-phone-1-2 {
    max-width: 50%!important;
  }

  .grid>.col-phone-1-3 {
    max-width: 33.33333333%!important;
  }

  .grid>.col-phone-2-3 {
    max-width: 66.66666666%!important;
  }

  .flex>[class*=col-] {
    width: 100%;
  }

  .flex>.col-phone-1-1 {
    width: 100%!important;
  }

  .flex>.col-phone-1-2 {
    width: 50%!important;
  }

  .flex>.col-phone-1-3 {
    width: 33.33333333%!important;
  }

  .flex>.col-phone-2-3 {
    width: 66.66666666%!important;
  }
}

.dialogContainer {
  pointer-events: none;
}

.dialog,
.dialogContainer {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 300;
}

.dialog {
  pointer-events: all;
  color: #303030;
  border-radius: 4px;
  max-width: 350px;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
  cursor: default;
  opacity: .98;
  line-height: 1.3;
  background: #fff;
  margin: 12px 20px;
  overflow: hidden;
  text-align: left;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  transition: all .75s,height 0s;
  transition-timing-function: cubic-bezier(.25,1.37,.44,.93);
}

.dialog .close,
.dialog [data-dialog-action=close],
.dialog [data-href],
.dialog li {
  cursor: pointer;
}

.dialog.rectangular {
  border-radius: 0;
}

.dialog.rounded {
  border-radius: 6px;
}

.dialog:hover {
  opacity: 1;
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  transition: .35s;
}

.dialog .button.small {
  margin-left: 4px;
  margin-right: 4px;
}

.dialog .button {
  margin-left: 7px;
  margin-right: 7px;
}

.dialogContainer>.dialog {
  position: relative;
}

.dialog.hidden {
  display: none;
}

.dialog.hide {
  -webkit-transform: scale(.5);
  transform: scale(.5);
  opacity: 0!important;
  transition: height 0s,opacity .5s,-webkit-transform .5s!important;
  transition: height 0s,opacity .5s,transform .5s!important;
  transition: height 0s,opacity .5s,transform .5s,-webkit-transform .5s!important;
}

.dialog.reveal {
  transition: 0s!important;
}

.dialog .close {
  padding: 12px;
  position: absolute;
  font-size: 0;
  top: 0;
  right: 0;
  transition: .35s;
  opacity: 0;
  z-index: 10;
}

.dialog .close:after,
.dialog .close:before {
  content: "";
  width: 14px;
  height: 2px;
  border-radius: 2px;
  background: #202020;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  right: 6px;
}

.dialog .close:before {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.dialog .close:active {
  opacity: 1;
}

.dialog .close.white {
  background: 0 0!important;
}

.dialog .close.white:after,
.dialog .close.white:before {
  background: #fff;
}

.dialog:hover .close {
  opacity: .2;
}

.dialog .close:hover,
.mobile .dialog .close {
  opacity: 1!important;
}

.dialog .dialogContent {
  padding: 20px;
}

.dialog .avatar {
  border-radius: 50px;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 15px;
}

.dialog .avatar+.text {
  width: calc(100% - 70px);
  margin-left: 70px;
}

.dialog .title {
  margin: 8px 0;
  font-weight: 500;
}

.dialog ul {
  display: table;
  width: 100%;
  font-size: 0;
  font-weight: 600;
  box-shadow: 0 1px 0 rgba(0,0,0,.1) inset;
}

.dialog .hiddenContent {
  overflow: hidden;
  display: block;
  max-height: 0;
  opacity: 0;
  transition: .5s;
}

html:not(.page-loaded) .dialog {
  -webkit-transform: scale(.5) translateY(100%);
  transform: scale(.5) translateY(100%);
  opacity: 0;
}

.dialog.hover .hiddenContent,
.dialog:hover .hiddenContent {
  max-height: 90px;
  opacity: 1;
}

.dialog li {
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  display: table-cell;
  width: 33.33333%;
  text-align: center;
  line-height: 1;
  vertical-align: middle;
  border-bottom: none;
  transition: .25s;
  box-shadow: inset 0 -100px 0 rgba(41,41,41,0);
  border-left: 1px solid rgba(0,0,0,.1);
}

.dialog li .material-icons {
  position: relative;
  margin-bottom: 13px;
  top: 6px;
  margin-right: 8px;
}

.dialog li .material-icons.right {
  margin-right: 0;
  margin-left: 8px;
}

.dialog li svg {
  width: 20px;
  height: 20px;
  margin-bottom: -6px;
  margin-right: 8px;
  position: relative;
  top: -2px;
}

.dialog li svg.right {
  margin-right: 0;
  margin-left: 8px;
}

.dialog li:first-child {
  border-left: none;
}

.dialog li:hover {
  box-shadow: inset 0 -100px 0 rgba(0,0,0,.05);
}

.dialog li input {
  font-size: 16px;
  width: 250px;
  border: none;
  padding: 13px 5px 16px 15px;
  outline: 0;
  margin: 1px 0 0;
  color: #202020;
  height: 50px;
  box-shadow: none!important;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

@media (max-width:414px) {
  .dialog {
    margin: 10px;
    max-width: 100%;
  }
}

.dialogContainer:not(.bottom) .dialog+.dialog {
  margin-bottom: 0;
}

.dialogContainer.bottom .dialog+.dialog {
  margin-top: 0;
}

.dialog.bottom,
.dialogContainer.bottom {
  top: inherit;
  bottom: 0;
}

.dialog.left,
.dialogContainer.left {
  right: inherit;
  left: 0;
}

.svg-5 {
  padding-bottom: 27%;
}

.iphone-5.shiftImage {
  margin: 0 0 -129%;
}

.ipad-6.shiftImage {
  margin: 0 0 -70%;
}

.button.play.button-7 {
  margin: 0 30px;
}

@media (max-width:1279px) {
  .button.play.button-7 {
    display: block;
    margin: 30px auto;
  }
}

.icon-26,
.icon-27 {
  margin-right: 4px;
}

@media (min-width:768px) {
  form.slides-form .input-12,
  form.slides-form .input-8,
  form.slides-form .input-9 {
    max-width: 220px;
  }
}

form input[type=email].input-13,
form input[type=name].input-13,
form input[type=text].input-13 {
  max-width: 300px;
}

@media (max-width:1023px) {
  .cell-16 {
    padding-bottom: 35px;
  }
}

.cell-17 {
  padding-bottom: 25px;
}

.header-18 {
  font-size: 70px;
}

.video-18 {
  margin-top: 34px;
}

.app-26 {
  width: 70px;
  position: absolute;
  left: 0;
}

.text-26 {
  margin-left: 95px;
  margin-top: 35px;
}

.cell-26 {
  margin-top: 22px;
}

@media (min-width:1024px) {
  .text-26 {
    max-width: 360px;
  }

  .cell-26 {
    padding-bottom: 40px;
  }

  .text-27 {
    max-width: 360px;
  }
}

.app-27 {
  width: 100px;
  padding-bottom: 20px;
}

.cell-27 {
  margin-top: -22px;
}

@media (max-width:1023px) {
  .cell-27 {
    padding-bottom: 40px;
  }
}

.text-27 {
  margin-left: 95px;
  margin-top: 35px;
}

@media (min-width:768px) {
  .iphone-28,
  .iphone-29 {
    margin-top: -228px;
    margin-bottom: -228px;
  }
}

@media (max-width:767px) {
  .cell-28,
  .cell-29 {
    padding-bottom: 35px;
  }
}

.quote-31 {
  padding-left: 95px;
}

.image-31 {
  padding-top: 35px;
}

.avatar-31 {
  border-radius: 50px;
  position: absolute;
  margin-left: 7px;
}

@media (min-width:1024px) {
  .ipad-31,
  .ipad-32,
  .ipad-33 {
    margin: -10% 0 -115%;
    max-width: none;
  }
}

@media (max-width:1023px) {
  .cell-32,
  .cell-33 {
    padding-bottom: 40px;
  }
}

.iphone-35 {
  margin-bottom: -45%;
}

.ipad-36 {
  margin: -10px 0 -50%;
}

.avatar-41 {
  border-radius: 50px;
  margin: 10px 5px 5px;
}

.form-42 {
  max-width: 500px;
  margin: 0 auto;
}

p.remind-43 {
  max-width: 350px;
  line-height: 1.29;
  margin: 13px auto;
  text-align: center;
}

.fix-45 {
  max-width: 210px;
}

@media (max-width:767px) {
  .box-46 {
    margin-bottom: 30px;
  }
}

.slide.whiteSlide .box-46 .shadow {
  box-shadow: none;
}

.grid-47 .material-icons {
  margin-bottom: 15px;
  margin-top: 15px;
  font-size: 36px;
}

.grid-48 .material-icons {
  margin-bottom: 30px;
  margin-top: 15px;
  font-size: 72px;
}

.grid-49 .material-icons {
  margin-bottom: 10px;
  margin-top: 15px;
  font-size: 72px;
}

.form-55 {
  max-width: 500px;
  margin: 0 auto;
}

@media (min-width:1024px) {
  .form-42 .form-42-input-1 input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .form-42 .form-42-input-2 input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    position: relative;
    left: -1px;
  }

  .form-55 .form-55-input-1 input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-left: 0;
  }

  .form-55 .form-55-input-2 input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: 0;
    position: relative;
    left: -1px;
  }
}

.form-55 [data-success-class=message-sent].message-sent {
  background: #4caf50!important;
}

.pad-59 {
  border-radius: 6px;
  padding: 6%;
}

.grid-61 .material-icons {
  margin-bottom: 10px;
  margin-top: 15px;
  font-size: 36px;
}

@media (min-width:1024px) {
  img.macbook-61 {
    margin: -15% -100% -30% -135%!important;
    width: 225%;
    max-width: none;
  }
}

.grid-62 .material-icons {
  margin-bottom: 10px;
  margin-top: 15px;
  font-size: 48px;
}

@media (min-width:1024px) {
  img.macbook-62 {
    margin: -15% -100% -30% 10%!important;
    width: 225%;
    max-width: none;
  }
}

@media (max-width:1023px) {
  .image-62 {
    padding-top: 35px;
  }
}

.grid-64 {
  padding-top: 15px;
}

.grid-64 .material-icons {
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 36px;
}

.grid-64>li:not(:last-child) {
  margin-bottom: 20px;
}

.grid-64 .cell-64 {
  padding: 20px 30px;
  position: relative;
  display: block;
  transition: .25s;
  border: 1px solid rgba(255,255,255,.3);
  text: #fff;
}

.grid-64 .cell-64.rounded {
  border-radius: 6px;
}

.grid-64 .cell-64:hover {
  background: #fff;
  color: #202020;
  opacity: 1;
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  border-color: transparent!important;
}

.slide.whiteSlide .grid-64 .cell-64 {
  border: 1px solid #e5e5e5;
}

.grid.grid-65>li {
  position: relative;
  padding-left: 55px;
  padding-bottom: 30px;
}

.grid-65 .material-icons {
  position: absolute;
  left: 0;
  top: -5px;
  font-size: 36px;
}

@media (max-width:767px) {
  .grid.grid-65>li {
    padding-left: 60px;
  }

  .grid-65 .material-icons {
    left: 0;
  }
}

.box-67 {
  color: #202020;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
  display: block;
  outline: 0;
  margin-bottom: 35px;
}

.box-67 .thumbnail-67 {
  font-size: 0;
  overflow: hidden;
}

.box-67 .thumbnail-67 img {
  border-radius: 6px 6px 0 0;
  backface-visibility: hidden;
  transition: .35s;
}

.box-74,
.box-77,
.box-77 .thumbnail-77 img {
  -webkit-backface-visibility: hidden;
}

.box-67:hover {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  opacity: .95;
}

.box-67:hover .thumbnail-67 img {
  -webkit-transform: scale(1.0225);
  transform: scale(1.0225);
}

.box-67 .name-67 {
  padding: 19px 15px 25px;
  background: #fff;
}

.slide.whiteSlide .tintLogos {
  -webkit-filter: brightness(.2);
  filter: brightness(.2);
}

.slide:not(.whiteSlide) .tintLogos {
  -webkit-filter: brightness(1.3);
  filter: brightness(1.3);
}

.grid-68 a {
  display: inline-block;
  margin-top: 14px;
  margin-bottom: 14px;
  opacity: .9;
  transition: opacity .1s ease-in,-webkit-transform .15s cubic-bezier(.5,0,.25,2.5);
  transition: opacity .1s ease-in,transform .15s cubic-bezier(.5,0,.25,2.5);
  transition: opacity .1s ease-in,transform .15s cubic-bezier(.5,0,.25,2.5),-webkit-transform .15s cubic-bezier(.5,0,.25,2.5);
}

.grid-68 a:hover {
  opacity: 1;
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}

.grid-69 {
  margin-left: -8px;
  margin-right: -8px;
}

.grid-69 [class*=col-] {
  padding-bottom: 10px;
  padding-top: 10px;
}

.grid-69 [class*=col-].selected {
  cursor: pointer;
  pointer-events: all;
}

.grid-69 .box-69 {
  display: block;
  height: 0;
  padding-bottom: 100%;
  position: relative;
  background-size: cover;
  cursor: -webkit-zoom-in;
  color: #fff;
}

.grid-69 .box-69 .cell-69,
.grid-69 .box-69:after {
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s;
}

.grid-69 .box-69.rounded {
  overflow: hidden;
  border-radius: 6px;
}

.grid-69 .box-69:after {
  top: 0;
  left: 0;
  background: #cdced2;
}

.grid-69 .box-69 .cell-69 {
  outline: 0;
  padding: 20px;
  z-index: 10;
  color: #202020;
  -webkit-transform: translateY(10px);
  transform: translateY(10px);
}

.grid-71 .cell-71,
.grid-73 .cell-73 {
  transition: .25s;
  text: #fff;
  display: block;
  position: relative;
}

.grid-69 .box-69:hover {
  opacity: 1;
}

.grid-69 .box-69:hover .cell-69 {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.grid-69 .box-69:hover:after {
  opacity: .98;
}

.grid-71 .cell-71:hover,
.grid-73 .cell-73:hover {
  background: #fff;
  opacity: 1;
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  color: #202020;
}

.info-70 {
  padding: 13%;
}

.grid-71 {
  padding-top: 15px;
}

.grid-71 .material-icons {
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 36px;
}

.grid-71>li:not(:last-child) {
  margin-bottom: 20px;
}

.grid-71 .cell-71 {
  padding: 20px 30px;
  border: 1px solid rgba(255,255,255,.3);
}

.grid-71 .cell-71.rounded {
  border-radius: 6px;
}

.grid-71 .cell-71:hover {
  border-color: transparent!important;
}

.slide.whiteSlide .grid-71 .cell-71 {
  border: 1px solid #e5e5e5;
}

.grid-73 {
  padding-top: 15px;
}

.grid-73 .material-icons {
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 36px;
}

.grid-73>li:not(:last-child) {
  margin-bottom: 20px;
}

.grid-73 .cell-73 {
  padding: 20px 30px;
  border: 1px solid rgba(255,255,255,.3);
}

.grid-73 .cell-73.rounded {
  border-radius: 6px;
}

.grid-73 .cell-73:hover {
  border-color: transparent!important;
}

.slide.whiteSlide .grid-73 .cell-73 {
  border: 1px solid #e5e5e5;
}

.image-73.shiftImageVertical.shiftImage {
  margin: -13% 0 -6%;
}

.grid.grid-74 {
  margin-left: -12px;
  margin-right: -12px;
}

.grid.grid-74>[class*=col-] {
  padding-left: 12px;
  padding-right: 12px;
}

.box-74 {
  color: #202020;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
  display: block;
  outline: 0;
  margin-bottom: 25px;
}

.box-74:hover {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  opacity: .95;
}

.box-74 .name-74 {
  padding: 20px 20px 30px;
  background: #fff;
  border-radius: 0 0 6px;
}

.box-74 .thumbnail-74 {
  font-size: 0;
  line-height: 0;
  overflow: hidden;
}

.box-74 .thumbnail-74 img {
  border-radius: 6px 6px 0 0;
  transition: .5s;
}

.slider[data-slider-id="75-0"].animated.fromAbove [class*=ae-]:not(.done) {
  -webkit-transform: scale(1) translate3d(0,0,0);
  transform: scale(1) translate3d(0,0,0);
}

.button.button-76 {
  width: 54px;
  height: 54px;
  padding: 17px 19px;
  font-size: 0;
}

.button.button-76 svg {
  width: 18px;
  height: 18px;
}

@media (min-width:1024px) {
  .iphone-76 {
    max-width: none;
    margin-top: 60px;
  }
}

.text-76 {
  line-height: 1.75;
  opacity: 1;
  margin: 0 0 0 77px;
  padding-top: 3px;
}

@media (max-width:569px) {
  .button.button-76,
  .text-76 {
    float: left;
  }

  .text-76 strong {
    display: block;
  }

  .text-76 {
    font-size: 20px;
    top: -4px;
  }
}

.grid.grid-77 {
  margin-left: -12px;
  margin-right: -12px;
}

.grid.grid-77>[class*=col-] {
  padding-left: 12px;
  padding-right: 12px;
}

@media (max-width:1278px) {
  .grid.grid-77>[class*=col-] {
    max-width: 50%;
  }
}

.box-77 {
  color: #202020;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
  display: block;
  outline: 0;
  margin: 10px 0;
}

.box-77:hover {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
  opacity: 1;
}

.box-77 .thumbnail-77 {
  font-size: 0;
  line-height: 0;
  overflow: hidden;
  position: relative;
}

.box-77 .thumbnail-77 img {
  border-radius: 6px 6px 0 0;
  transition: .5s;
}

.box-77 .thumbnail-77.video:after {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/svg/video-icon.svg") center center no-repeat;
  background-size: 54px;
  transition: .35s;
}

.box-77:hover .thumbnail-77.video:after {
  background-color: rgba(0,0,0,.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.box-77 .author-77 {
  background: #fff;
  border-top: 1px solid #ebebeb;
  padding-top: 18px;
  margin-top: 25px;
  position: relative;
  padding-left: 40px;
  padding-bottom: 2px;
}

.box-77 .avatar-77 {
  position: absolute;
  top: 15px;
  left: 0;
  border-radius: 50px;
}

.details-77 {
  padding: 20px 18px 15px;
  background: #fff;
  border-radius: 0 0 6px;
}

.details-77 .cell {
  text-align: left;
}

.text-78 {
  font-size: 17px;
  letter-spacing: .5px;
  margin-top: 7px;
}

.quote-79 {
  font-size: 85px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 10px;
  font-family: serif;
}

.author-79 {
  position: relative;
  margin: 0 auto;
  max-width: 300px;
  padding-left: 85px;
  padding-top: 5px;
}

.author-79 .avatar-79 {
  position: absolute;
  top: 0;
  left: 0;
}

.author-79 h3 {
  margin-bottom: 10px;
}

.grid-79>[class*=col-] {
  position: relative;
  padding: 5px 30px 0 55px;
}

.grid-79>[class*=col-] .material-icons {
  font-size: 35px;
  margin-bottom: 13px;
  position: absolute;
  left: 0;
  top: 0;
}

.grid-80>[class*=col-] {
  margin-bottom: 25px;
}

.box-80 {
  border: 1px solid rgba(255,255,255,.3);
}

.box-80.rounded {
  border-radius: 6px;
}

.slide.whiteSlide .box-80 {
  border-color: #e5e5e5;
}

.leftControl-82,
.rightControl-82 {
  position: absolute;
  top: 50%;
  margin-top: -56px;
  margin-left: -60px;
  cursor: pointer;
  transition: .35s;
}

.grid.grid-83,
.grid.grid-84 {
  margin-top: 50px;
  color: #202020;
}

.leftControl-82 svg,
.rightControl-82 svg {
  width: 29px;
  height: 56px;
}

.leftControl-82:active,
.leftControl-82:hover,
.rightControl-82:active,
.rightControl-82:hover {
  opacity: .3;
}

@media (max-width:768px) {
  .leftControl-82,
  .rightControl-82 {
    display: none;
  }
}

.rightControl-82 {
  right: 0;
  margin-right: -60px;
}

@media (min-width:1024px) {
  .grid.grid-83 {
    border-radius: 6px;
    overflow: hidden;
  }

  .slide.whiteSlide .grid.grid-83 {
    box-shadow: 0 0 1px rgba(48,48,48,.54);
  }
}

.grid.grid-83>[class*=col-] {
  position: relative;
  background: #fff;
  overflow: hidden;
  box-shadow: -1px 0 0 #ebebeb inset;
}

@media (max-width:1023px) {
  .grid.grid-83 {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .grid.grid-83>[class*=col-] {
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 0 1px rgba(48,48,48,.54);
    border-radius: 6px;
  }
}

@media (min-width:1024px) {
  .grid.grid-83>[class*=col-] {
    padding: 50px;
    border-radius: 0;
  }

  .grid.grid-83>[class*=col-]:last-child {
    box-shadow: none;
  }
}

@media (min-width:1240px) {
  .grid.grid-84 {
    border-radius: 6px;
    overflow: hidden;
  }

  .slide.whiteSlide .grid.grid-84 {
    box-shadow: 0 0 1px rgba(48,48,48,.54);
  }
}

.grid.grid-84>[class*=col-] {
  position: relative;
  background: #fff;
  overflow: hidden;
  padding: 30px;
  box-shadow: -1px 0 0 #ebebeb inset;
}

@media (max-width:1239px) {
  .grid.grid-84>[class*=col-] {
    max-width: calc(50% - 20px)!important;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
    box-shadow: 0 0 1px rgba(48,48,48,.54);
    border-radius: 6px;
  }
}

@media (max-width:767px) {
  .grid.grid-84>[class*=col-] {
    max-width: 100%!important;
    margin-left: 0;
    margin-right: 0;
  }
}

@media (min-width:1240px) {
  .grid.grid-84>[class*=col-] {
    border-radius: 0;
  }

  .grid.grid-84>[class*=col-]:last-child {
    box-shadow: none;
  }
}

.grid.grid-85>[class*=col-] .pad {
  box-shadow: 0 0 1px rgba(48,48,48,.54);
}

.button.button-86 {
  width: 54px;
  height: 54px;
  padding: 17px 19px;
  font-size: 0;
}

.button.button-86 svg {
  width: 18px;
  height: 18px;
}

.text-86 {
  line-height: 1.75;
  opacity: 1;
  margin: 0 0 0 77px;
  padding-top: 3px;
}

@media (max-width:569px) {
  .button.button-86,
  .text-86 {
    float: left;
  }

  .text-86 strong {
    display: block;
  }

  .text-86 {
    font-size: 20px;
    top: -4px;
  }
}

.frame-93 {
  padding: 50px 40px;
  border: 1px solid rgba(255,255,255,.3);
  text-align: center;
  display: inline-block;
}

.frame-93.rounded {
  border-radius: 6px;
}

.slide.whiteSlide .frame-93 {
  border: 1px solid rgba(0,0,0,.1);
}

@media (max-width:1023px) {
  .frame-93 {
    text-align: center;
  }

  .button.button-93 {
    margin: 30px 0 0;
  }
}

@media (max-width:499px) {
  .slide .frame-93 {
    padding: 30px;
    border: none!important;
  }
}

.quoteBubble {
  padding: 7%;
  background: #fff;
  font-size: 26px;
  border-radius: 6px;
  color: #202020;
  position: relative;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
}

.quoteBubble:after,
.quoteBubble:before {
  position: absolute;
  left: 6%;
  border-width: 13px 13px 0;
  border-style: solid;
  display: block;
  width: 0;
  content: "";
}

.quoteBubble:after {
  bottom: -12px;
  border-color: #fff transparent;
}

.quoteBubble:before {
  bottom: -13px;
  border-color: rgba(0,0,0,.2) transparent;
}

.address {
  letter-spacing: -1.5px;
  font-size: 30px;
  line-height: 1.1666;
}

.price {
  font-size: 110px;
  line-height: 1.26;
  margin-bottom: 20px;
  font-weight: 200;
}

.currency {
  font-size: 32px;
  vertical-align: super;
  padding-right: 10px;
  margin-left: -.8em;
  font-weight: 300;
  opacity: .6;
  position: relative;
  top: -.5em;
}

.social-circles li {
  display: inline-block;
  padding: 5px;
}

.social-circles li a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.social-circles li a svg {
  width: 16px;
  height: 16px;
  fill: #fff;
}

.social-circles li a:hover {
  opacity: 1;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.text-justify {
  text-align: justify;
}

.slide.whiteSlide a.button.text-white {
  color: #202020!important;
}

.slide.whiteSlide .thumbnail-98,
.slide.whiteSlide .thumbnail-99,
.slide.whiteSlide .wrap-text-100 {
  color: #fff;
}

.music-96 .sc-artwork-list,
.music-96 .sc-controls .hidden,
.music-96 .sc-info,
.music-96 .sc-info-toggle,
.music-96 .sc-time-indicators,
.music-96 .sc-volume-slider {
  display: none;
}

.music-96 .sc-player:not(:last-child) {
  margin-bottom: 15px;
}

.music-96 .sc-play {
  background-image: url("../assets/svg/play.svg");
  border: 1px solid rgba(0,0,0,.5);
  font-size: 0;
  width: 28px;
  height: 28px;
  display: inline-block;
  float: left;
  margin-right: 12px;
  background-color: #fff;
  border-radius: 20px;
  background-size: 50%;
  background-position: center center;
  background-repeat: no-repeat;
}

.music-96 .sc-track-duration {
  float: right;
  font-size: 20px;
  font-weight: 300;
  opacity: .8;
}

.music-96 .sc-player:not(.playing) .sc-time-span {
  opacity: 0;
}

.music-96 .sc-time-span {
  position: relative;
  display: block;
}

.music-96 .sc-buffer,
.music-96 .sc-played {
  background: rgba(255,255,255,.4);
  position: absolute;
  z-index: 1;
  top: -1px;
}

.music-96 .sc-player .sc-waveform-container {
  position: absolute;
  top: 0;
  font-size: 0;
  background: rgba(255,255,255,.2);
  cursor: pointer;
}

.calendar-97,
.frame-97 .small .thin-stroke {
  cursor: default;
}

.music-96 .sc-player .sc-waveform-container img {
  opacity: 0;
  width: 100%;
}

.music-96 .sc-trackslist {
  border-bottom: 1px solid rgba(255,255,255,.2);
  margin-top: 15px;
}

.music-96 .sc-trackslist a {
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 15px;
  display: inline-block;
  max-width: 78%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.music-96 .sc-buffer,
.music-96 .sc-played,
.music-96 .sc-player .sc-waveform-container,
.music-96 .sc-trackslist .sc-time-span {
  height: 2px;
}

.music-96 .sc-buffer,
.music-96 .sc-play,
.music-96 .sc-played,
.music-96 .sc-time-span {
  transition: .35s;
}

.music-96 .sc-player.playing .sc-play {
  background-color: rgba(255,255,255,.8);
}

.music-96 .sc-player.playing .sc-played {
  background: #fafafa;
  background: linear-gradient(to right,#fafafa 0,#fff 100%);
}

.slide.whiteSlide .music-96 .sc-buffer,
.slide.whiteSlide .music-96 .sc-played {
  background: rgba(0,0,0,.2);
  position: absolute;
  z-index: 1;
  top: -1px;
}

.slide.whiteSlide .music-96 .sc-trackslist {
  border-bottom: 1px solid rgba(0,0,0,.2);
}

.slide.whiteSlide .music-96 .sc-player.playing .sc-play {
  background-color: rgba(0,0,0,.1);
}

.slide.whiteSlide .music-96 .sc-player.playing .sc-played {
  background: #050505;
  background: linear-gradient(to right,#050505 0,#000 100%);
}

@media (max-width:480px) {
  .music-96 .sc-trackslist a {
    max-width: 67%;
    font-size: 14px;
    margin-top: 5px;
  }
}

.calendar-97 {
  width: 52px;
  height: 52px;
  padding: 8px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,.4);
  left: 0;
  pointer-events: none;
}

.thumbnail-98 img,
.wrap-img-100 .blackout {
  height: 100%;
}

.blackout,
.thumbnail-98 img {
  width: 100%;
  border-radius: 6px;
}

.calendar-97:hover {
  -webkit-transform: translateY(0)!important;
  transform: translateY(0)!important;
}

.slide.whiteSlide .frame-97 {
  border-bottom: 1px solid rgba(0,0,0,.2);
}

.frame-97 {
  width: 100%;
  border-bottom: 1px solid rgba(255,255,255,.3);
}

.frame-97:last-child {
  border-bottom: none;
}

.frame-97 .thin-stroke:hover {
  -webkit-transform: translateY(0)!important;
  transform: translateY(0)!important;
}

.calendar-97 .month {
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1px;
  opacity: .8;
}

.calendar-97 .number {
  font-size: 22px;
  line-height: 26px;
  font-weight: 400;
}

.button-buy-97 {
  float: right;
}

.title-group {
  min-width: 49%;
  display: inline-block;
}

.dislocation {
  font-size: 20px;
  display: inline-block;
}

@media (max-width:991px) {
  .title-group {
    min-width: 37%;
    font-size: 22px;
    margin-left: 80px!important;
  }
}

@media (max-width:767px) {
  .frame-97 {
    min-height: 220px;
  }

  .frame-97 h2 {
    text-align: center!important;
  }

  .title-group {
    margin-left: 0!important;
    margin-top: 60px;
    display: block;
  }

  .frame-97 .calendar-97 {
    left: calc(50% - 5px);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .dislocation {
    margin-top: 10px;
    display: block;
  }

  .button-buy-97 {
    float: none;
    display: inline-block;
    margin-top: 20px;
  }
}

.date-slide-99,
.title-slide-99 {
  text-align: left;
  position: absolute;
  z-index: 15;
}

a.box-98:active,
a.box-98:focus {
  outline: 0;
}

.thumbnail-98 {
  position: relative;
}

.blackout {
  position: absolute;
  top: 0;
  height: 99.2%;
  border: none;
  background-color: rgba(0,0,0,.4);
  z-index: 10;
}

.title-slide-98 {
  position: absolute;
  top: 40%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  font-size: 12px;
  letter-spacing: 2.5px;
  opacity: .6;
  z-index: 15;
}

.subtitle-slide-98,
.title-slide-99 {
  -webkit-transform: translateX(-50%);
  font-size: 20px;
  line-height: 26px;
  left: 50%;
}

.subtitle-slide-98 {
  position: absolute;
  width: 70%;
  top: 45%;
  transform: translateX(-50%);
  z-index: 15;
}

a.box-99:active,
a.box-99:focus {
  outline: 0;
}

.thumbnail-99 {
  position: relative;
}

.thumbnail-99 img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.thumbnail-99 .date-slide-99 img {
  display: inline-block;
  margin-right: 5px;
  width: 12px;
  height: 12px;
}

.blackout-sl-4 {
  position: absolute;
  top: 0;
  width: 100%;
  height: 99.2%;
  border-radius: 4px;
  border: none;
  background: linear-gradient(to bottom,transparent,rgba(0,0,0,.4));
  z-index: 10;
}

.title-slide-99 {
  width: 80%;
  bottom: 12%;
  transform: translateX(-50%);
}

.date-slide-99 {
  bottom: 0;
  width: 85%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.date-slide-99 span {
  display: inline-block;
  font-size: 14px;
  opacity: .4;
}

.tiny .small-watch {
  margin-bottom: -2px;
  font-size: 14px;
}

.tiny .date-small {
  font-size: 14px;
  vertical-align: 2px;
}

.cell-100 {
  border: 1px solid rgba(255,255,255,.2);
  transition: .3s;
}

.cell-100:hover {
  -webkit-transform: translateY(-2px);
  transform: translateY(-2px);
}

.cell-100 .tiny {
  font-size: 0;
  line-height: 0;
  margin-bottom: 0;
}

.item-100 {
  width: 100%;
  height: 100%;
  display: block;
  padding: 30px;
}

.slide.whiteSlide .cell-100 {
  border: 1px solid rgba(0,0,0,.2);
}

.wrap-img-100 {
  position: relative;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/image-100.png");
  background-size: cover;
  background-position: center center;
}

.wrap-text-100 {
  position: absolute;
  z-index: 15;
  bottom: 35px;
  padding-right: 40px;
  padding-left: 40px;
}

.wrap-text-100 h3 {
  font-size: 22px;
  line-height: 36px;
  opacity: .8;
  font-weight: 300;
}

@media (max-width:767px) {
  .wrap-text-100 {
    position: relative;
    bottom: 0;
    padding-top: 30px;
    padding-bottom: 20px;
  }

  .wrap-text-100 h1 {
    font-size: 30px;
  }

  .wrap-text-100 h3 {
    font-size: 16px;
    line-height: 20px;
  }

  .flex-slide-100 {
    margin-left: 0;
    margin-right: 0;
    padding-left: 0!important;
  }
}

.padding-0,
.trim {
  padding: 0!important;
}

.slick-dots {
  bottom: -35px!important;
}

.slick-dots li {
  margin: 0!important;
}

.slick-dots li button:before,
.slick-dots li.slick-active button:before {
  color: #fff!important;
}

.whiteSlide .slick-dots li button:before,
.whiteSlide .slick-dots li.slick-active button:before {
  color: #000!important;
}

.slick-next,
.slick-prev {
  width: 29px!important;
  height: 55px!important;
}

span.next-arrow svg,
span.prev-arrow svg {
  position: absolute;
  top: 50%;
  width: 29px;
  height: 55px;
  cursor: pointer;
}

.slick-prev {
  left: -45px!important;
}

.slick-next {
  right: -45px!important;
}

span.prev-arrow svg {
  left: -45px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

span.next-arrow svg {
  right: -45px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.swiper-pagination {
  position: static!important;
}

.swiper-container-horizontal>.swiper-pagination-bullets {
  margin-top: 15px;
}

.swiper-pagination-bullet,
.swiper-pagination-bullet-active {
  background-color: #fff!important;
}

.whiteSlide .swiper-pagination-bullet,
.whiteSlide .swiper-pagination-bullet-active {
  background-color: #000!important;
}

.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 8px!important;
}

.crop,
.margin-0 {
  margin: 0!important;
}

.swiper-container-2,
.swiper-container-3,
.swiper-container-4 {
  overflow: hidden;
}

.table {
  display: table;
  width: 100%;
  height: 100%;
}

.cell {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.scroll-x {
  overflow-x: scroll;
}

.scroll-y {
  overflow-y: scroll;
}

.overflow-hidden,
.scroll-hidden {
  overflow: hidden;
}

.overflow-reset {
  overflow: auto!important;
}

.uppercase {
  text-transform: uppercase!important;
}

.italic {
  font-style: italic!important;
}

.thin,
.ultraLight {
  font-weight: 100!important;
}

.light {
  font-weight: 300!important;
}

.normal {
  font-weight: 400!important;
}

.semiBold {
  font-weight: 500!important;
}

.bold {
  font-weight: 600!important;
}

.ultraBold {
  font-weight: 900!important;
}

.noText {
  font-size: 0;
}

.align-top,
.top {
  vertical-align: top!important;
}

.align-left,
.left {
  text-align: left!important;
}

.align-right,
.right {
  text-align: right!important;
}

.align-center,
.center {
  text-align: center!important;
}

.middle {
  vertical-align: middle!important;
}

.bottom {
  vertical-align: bottom!important;
}

.rtl {
  direction: rtl;
  unicode-bidi: embed;
}

.position-left {
  left: 0;
}

.position-top {
  top: 0;
}

.position-bottom {
  bottom: 0;
}

.position-right {
  right: 0;
}

.float-right {
  float: right!important;
}

.float-left {
  float: left!important;
}

.float-none {
  float: none!important;
}

.slides.firstSlide .hideForFirstSlide,
.slides.lastSlide .hideForLastSlide {
  display: none;
}

.block {
  display: block!important;
}

.inlineBlock {
  display: inline-block!important;
}

.inline {
  display: inline!important;
}

.relative {
  position: relative!important;
}

.absolute {
  position: absolute!important;
}

.fixed {
  position: fixed!important;
}

.wide {
  width: 100%!important;
}

.hidden {
  display: none;
}

[class*=shift-] {
  position: relative;
}

.shift-up-1 {
  top: -1px;
}

.shift-up-2 {
  top: -2px;
}

.shift-up-3 {
  top: -3px;
}

.shift-up-4 {
  top: -4px;
}

.shift-up-5 {
  top: -5px;
}

.shift-down-1 {
  top: 1px;
}

.shift-down-2 {
  top: 2px;
}

.shift-down-3 {
  top: 3px;
}

.shift-down-4 {
  top: 4px;
}

.shift-down-5 {
  top: 5px;
}

.shift-left-1 {
  left: -1px;
}

.shift-left-2 {
  left: -2px;
}

.shift-left-3 {
  left: -3px;
}

.shift-left-4 {
  left: -4px;
}

.shift-left-5 {
  left: -5px;
}

.shift-right-1 {
  left: 1px;
}

.shift-right-2 {
  left: 2px;
}

.shift-right-3 {
  left: 3px;
}

.shift-right-4 {
  left: 4px;
}

.shift-right-5 {
  left: 5px;
}

@media (max-width:1023px) {
  .wideForTablet {
    width: 100%!important;
    margin-left: 0!important;
    margin-right: 0!important;
  }
}

@media (max-width:767px) {
  .wideForPhablet {
    width: 100%!important;
    margin-left: 0!important;
    margin-right: 0!important;
  }
}

@media (max-width:435px) {
  .wideForPhone {
    width: 100%!important;
    margin-left: 0!important;
    margin-right: 0!important;
  }
}

.round {
  border-radius: 999px!important;
}

.rounded {
  border-radius: 6px!important;
}

.rectangular {
  border-radius: 0!important;
}

.opacity-0 {
  opacity: 0!important;
}

.opacity-1 {
  opacity: .1!important;
}

.opacity-2 {
  opacity: .2!important;
}

.opacity-3 {
  opacity: .3!important;
}

.opacity-4 {
  opacity: .4!important;
}

.opacity-5 {
  opacity: .5!important;
}

.opacity-6 {
  opacity: .6!important;
}

.opacity-7 {
  opacity: .7!important;
}

.opacity-8 {
  opacity: .8!important;
}

.opacity-9 {
  opacity: .9!important;
}

.opacity-10,
.opaque {
  opacity: 1!important;
}

.transparent {
  background: 0 0!important;
}

.cropBottom {
  margin-bottom: 0!important;
}

.cropTop {
  margin-top: 0!important;
}

.cropLeft,
.cropSides {
  margin-left: 0!important;
}

.cropRight,
.cropSides {
  margin-right: 0!important;
}

.trimBottom {
  padding-bottom: 0!important;
}

.trimTop {
  padding-top: 0!important;
}

.trimLeft,
.trimSides {
  padding-left: 0!important;
}

.trimRight,
.trimSides {
  padding-right: 0!important;
}

.padding-1 {
  padding: 10px!important;
}

.padding-2 {
  padding: 20px!important;
}

.padding-3 {
  padding: 30px!important;
}

.padding-4 {
  padding: 40px!important;
}

.padding-5 {
  padding: 50px!important;
}

.padding-6 {
  padding: 60px!important;
}

.padding-7 {
  padding: 70px!important;
}

.padding-8 {
  padding: 80px!important;
}

.padding-9 {
  padding: 90px!important;
}

.padding-10 {
  padding: 100px!important;
}

.padding-11 {
  padding: 110px!important;
}

.padding-12 {
  padding: 120px!important;
}

.padding-13 {
  padding: 130px!important;
}

.padding-14 {
  padding: 140px!important;
}

.padding-15 {
  padding: 150px!important;
}

.padding-16 {
  padding: 160px!important;
}

.padding-17 {
  padding: 170px!important;
}

.padding-18 {
  padding: 180px!important;
}

.padding-19 {
  padding: 190px!important;
}

.padding-20 {
  padding: 200px!important;
}

.padding-top-0 {
  padding-top: 0!important;
}

.padding-top-1 {
  padding-top: 10px!important;
}

.padding-top-2 {
  padding-top: 20px!important;
}

.padding-top-3 {
  padding-top: 30px!important;
}

.padding-top-4 {
  padding-top: 40px!important;
}

.padding-top-5 {
  padding-top: 50px!important;
}

.padding-top-6 {
  padding-top: 60px!important;
}

.padding-top-7 {
  padding-top: 70px!important;
}

.padding-top-8 {
  padding-top: 80px!important;
}

.padding-top-9 {
  padding-top: 90px!important;
}

.padding-top-10 {
  padding-top: 100px!important;
}

.padding-top-11 {
  padding-top: 110px!important;
}

.padding-top-12 {
  padding-top: 120px!important;
}

.padding-top-13 {
  padding-top: 130px!important;
}

.padding-top-14 {
  padding-top: 140px!important;
}

.padding-top-15 {
  padding-top: 150px!important;
}

.padding-top-16 {
  padding-top: 160px!important;
}

.padding-top-17 {
  padding-top: 170px!important;
}

.padding-top-18 {
  padding-top: 180px!important;
}

.padding-top-19 {
  padding-top: 190px!important;
}

.padding-top-20 {
  padding-top: 200px!important;
}

.padding-right-0 {
  padding-right: 0!important;
}

.padding-right-1 {
  padding-right: 10px!important;
}

.padding-right-2 {
  padding-right: 20px!important;
}

.padding-right-3 {
  padding-right: 30px!important;
}

.padding-right-4 {
  padding-right: 40px!important;
}

.padding-right-5 {
  padding-right: 50px!important;
}

.padding-right-6 {
  padding-right: 60px!important;
}

.padding-right-7 {
  padding-right: 70px!important;
}

.padding-right-8 {
  padding-right: 80px!important;
}

.padding-right-9 {
  padding-right: 90px!important;
}

.padding-right-10 {
  padding-right: 100px!important;
}

.padding-right-11 {
  padding-right: 110px!important;
}

.padding-right-12 {
  padding-right: 120px!important;
}

.padding-right-13 {
  padding-right: 130px!important;
}

.padding-right-14 {
  padding-right: 140px!important;
}

.padding-right-15 {
  padding-right: 150px!important;
}

.padding-right-16 {
  padding-right: 160px!important;
}

.padding-right-17 {
  padding-right: 170px!important;
}

.padding-right-18 {
  padding-right: 180px!important;
}

.padding-right-19 {
  padding-right: 190px!important;
}

.padding-right-20 {
  padding-right: 200px!important;
}

.padding-bottom-0 {
  padding-bottom: 0!important;
}

.padding-bottom-1 {
  padding-bottom: 10px!important;
}

.padding-bottom-2 {
  padding-bottom: 20px!important;
}

.padding-bottom-3 {
  padding-bottom: 30px!important;
}

.padding-bottom-4 {
  padding-bottom: 40px!important;
}

.padding-bottom-5 {
  padding-bottom: 50px!important;
}

.padding-bottom-6 {
  padding-bottom: 60px!important;
}

.padding-bottom-7 {
  padding-bottom: 70px!important;
}

.padding-bottom-8 {
  padding-bottom: 80px!important;
}

.padding-bottom-9 {
  padding-bottom: 90px!important;
}

.padding-bottom-10 {
  padding-bottom: 100px!important;
}

.padding-bottom-11 {
  padding-bottom: 110px!important;
}

.padding-bottom-12 {
  padding-bottom: 120px!important;
}

.padding-bottom-13 {
  padding-bottom: 130px!important;
}

.padding-bottom-14 {
  padding-bottom: 140px!important;
}

.padding-bottom-15 {
  padding-bottom: 150px!important;
}

.padding-bottom-16 {
  padding-bottom: 160px!important;
}

.padding-bottom-17 {
  padding-bottom: 170px!important;
}

.padding-bottom-18 {
  padding-bottom: 180px!important;
}

.padding-bottom-19 {
  padding-bottom: 190px!important;
}

.padding-bottom-20 {
  padding-bottom: 200px!important;
}

.padding-left-0 {
  padding-left: 0!important;
}

.padding-left-1 {
  padding-left: 10px!important;
}

.padding-left-2 {
  padding-left: 20px!important;
}

.padding-left-3 {
  padding-left: 30px!important;
}

.padding-left-4 {
  padding-left: 40px!important;
}

.padding-left-5 {
  padding-left: 50px!important;
}

.padding-left-6 {
  padding-left: 60px!important;
}

.padding-left-7 {
  padding-left: 70px!important;
}

.padding-left-8 {
  padding-left: 80px!important;
}

.padding-left-9 {
  padding-left: 90px!important;
}

.padding-left-10 {
  padding-left: 100px!important;
}

.padding-left-11 {
  padding-left: 110px!important;
}

.padding-left-12 {
  padding-left: 120px!important;
}

.padding-left-13 {
  padding-left: 130px!important;
}

.padding-left-14 {
  padding-left: 140px!important;
}

.padding-left-15 {
  padding-left: 150px!important;
}

.padding-left-16 {
  padding-left: 160px!important;
}

.padding-left-17 {
  padding-left: 170px!important;
}

.padding-left-18 {
  padding-left: 180px!important;
}

.padding-left-19 {
  padding-left: 190px!important;
}

.padding-left-20 {
  padding-left: 200px!important;
}

.margin-1 {
  margin: 10px!important;
}

.margin-2 {
  margin: 20px!important;
}

.margin-3 {
  margin: 30px!important;
}

.margin-4 {
  margin: 40px!important;
}

.margin-5 {
  margin: 50px!important;
}

.margin-6 {
  margin: 60px!important;
}

.margin-7 {
  margin: 70px!important;
}

.margin-8 {
  margin: 80px!important;
}

.margin-9 {
  margin: 90px!important;
}

.margin-10 {
  margin: 100px!important;
}

.margin-11 {
  margin: 110px!important;
}

.margin-12 {
  margin: 120px!important;
}

.margin-13 {
  margin: 130px!important;
}

.margin-14 {
  margin: 140px!important;
}

.margin-15 {
  margin: 150px!important;
}

.margin-16 {
  margin: 160px!important;
}

.margin-17 {
  margin: 170px!important;
}

.margin-18 {
  margin: 180px!important;
}

.margin-19 {
  margin: 190px!important;
}

.margin-20 {
  margin: 200px!important;
}

.margin-top-0 {
  margin-top: 0!important;
}

.margin-top-1 {
  margin-top: 10px!important;
}

.margin-top-2 {
  margin-top: 20px!important;
}

.margin-top-3 {
  margin-top: 30px!important;
}

.margin-top-4 {
  margin-top: 40px!important;
}

.margin-top-5 {
  margin-top: 50px!important;
}

.margin-top-6 {
  margin-top: 60px!important;
}

.margin-top-7 {
  margin-top: 70px!important;
}

.margin-top-8 {
  margin-top: 80px!important;
}

.margin-top-9 {
  margin-top: 90px!important;
}

.margin-top-10 {
  margin-top: 100px!important;
}

.margin-top-11 {
  margin-top: 110px!important;
}

.margin-top-12 {
  margin-top: 120px!important;
}

.margin-top-13 {
  margin-top: 130px!important;
}

.margin-top-14 {
  margin-top: 140px!important;
}

.margin-top-15 {
  margin-top: 150px!important;
}

.margin-top-16 {
  margin-top: 160px!important;
}

.margin-top-17 {
  margin-top: 170px!important;
}

.margin-top-18 {
  margin-top: 180px!important;
}

.margin-top-19 {
  margin-top: 190px!important;
}

.margin-top-20 {
  margin-top: 200px!important;
}

.margin-right-0 {
  margin-right: 0!important;
}

.margin-right-1 {
  margin-right: 10px!important;
}

.margin-right-2 {
  margin-right: 20px!important;
}

.margin-right-3 {
  margin-right: 30px!important;
}

.margin-right-4 {
  margin-right: 40px!important;
}

.margin-right-5 {
  margin-right: 50px!important;
}

.margin-right-6 {
  margin-right: 60px!important;
}

.margin-right-7 {
  margin-right: 70px!important;
}

.margin-right-8 {
  margin-right: 80px!important;
}

.margin-right-9 {
  margin-right: 90px!important;
}

.margin-right-10 {
  margin-right: 100px!important;
}

.margin-right-11 {
  margin-right: 110px!important;
}

.margin-right-12 {
  margin-right: 120px!important;
}

.margin-right-13 {
  margin-right: 130px!important;
}

.margin-right-14 {
  margin-right: 140px!important;
}

.margin-right-15 {
  margin-right: 150px!important;
}

.margin-right-16 {
  margin-right: 160px!important;
}

.margin-right-17 {
  margin-right: 170px!important;
}

.margin-right-18 {
  margin-right: 180px!important;
}

.margin-right-19 {
  margin-right: 190px!important;
}

.margin-right-20 {
  margin-right: 200px!important;
}

.margin-bottom-0 {
  margin-bottom: 0!important;
}

.margin-bottom-1 {
  margin-bottom: 10px!important;
}

.margin-bottom-2 {
  margin-bottom: 20px!important;
}

.margin-bottom-3 {
  margin-bottom: 30px!important;
}

.margin-bottom-4 {
  margin-bottom: 40px!important;
}

.margin-bottom-5 {
  margin-bottom: 50px!important;
}

.margin-bottom-6 {
  margin-bottom: 60px!important;
}

.margin-bottom-7 {
  margin-bottom: 70px!important;
}

.margin-bottom-8 {
  margin-bottom: 80px!important;
}

.margin-bottom-9 {
  margin-bottom: 90px!important;
}

.margin-bottom-10 {
  margin-bottom: 100px!important;
}

.margin-bottom-11 {
  margin-bottom: 110px!important;
}

.margin-bottom-12 {
  margin-bottom: 120px!important;
}

.margin-bottom-13 {
  margin-bottom: 130px!important;
}

.margin-bottom-14 {
  margin-bottom: 140px!important;
}

.margin-bottom-15 {
  margin-bottom: 150px!important;
}

.margin-bottom-16 {
  margin-bottom: 160px!important;
}

.margin-bottom-17 {
  margin-bottom: 170px!important;
}

.margin-bottom-18 {
  margin-bottom: 180px!important;
}

.margin-bottom-19 {
  margin-bottom: 190px!important;
}

.margin-bottom-20 {
  margin-bottom: 200px!important;
}

.margin-left-0 {
  margin-left: 0!important;
}

.margin-left-1 {
  margin-left: 10px!important;
}

.margin-left-2 {
  margin-left: 20px!important;
}

.margin-left-3 {
  margin-left: 30px!important;
}

.margin-left-4 {
  margin-left: 40px!important;
}

.margin-left-5 {
  margin-left: 50px!important;
}

.margin-left-6 {
  margin-left: 60px!important;
}

.margin-left-7 {
  margin-left: 70px!important;
}

.margin-left-8 {
  margin-left: 80px!important;
}

.margin-left-9 {
  margin-left: 90px!important;
}

.margin-left-10 {
  margin-left: 100px!important;
}

.margin-left-11 {
  margin-left: 110px!important;
}

.margin-left-12 {
  margin-left: 120px!important;
}

.margin-left-13 {
  margin-left: 130px!important;
}

.margin-left-14 {
  margin-left: 140px!important;
}

.margin-left-15 {
  margin-left: 150px!important;
}

.margin-left-16 {
  margin-left: 160px!important;
}

.margin-left-17 {
  margin-left: 170px!important;
}

.margin-left-18 {
  margin-left: 180px!important;
}

.margin-left-19 {
  margin-left: 190px!important;
}

.margin-left-20 {
  margin-left: 200px!important;
}

@media (min-width:1240px) {
  .padding-desktop-0 {
    padding: 0!important;
  }

  .padding-desktop-1 {
    padding: 10px!important;
  }

  .padding-desktop-2 {
    padding: 20px!important;
  }

  .padding-desktop-3 {
    padding: 30px!important;
  }

  .padding-desktop-4 {
    padding: 40px!important;
  }

  .padding-desktop-5 {
    padding: 50px!important;
  }

  .padding-desktop-6 {
    padding: 60px!important;
  }

  .padding-desktop-7 {
    padding: 70px!important;
  }

  .padding-desktop-8 {
    padding: 80px!important;
  }

  .padding-desktop-9 {
    padding: 90px!important;
  }

  .padding-desktop-10 {
    padding: 100px!important;
  }

  .padding-desktop-11 {
    padding: 110px!important;
  }

  .padding-desktop-12 {
    padding: 120px!important;
  }

  .padding-desktop-13 {
    padding: 130px!important;
  }

  .padding-desktop-14 {
    padding: 140px!important;
  }

  .padding-desktop-15 {
    padding: 150px!important;
  }

  .padding-desktop-16 {
    padding: 160px!important;
  }

  .padding-desktop-17 {
    padding: 170px!important;
  }

  .padding-desktop-18 {
    padding: 180px!important;
  }

  .padding-desktop-19 {
    padding: 190px!important;
  }

  .padding-desktop-20 {
    padding: 200px!important;
  }

  .padding-top-desktop-0 {
    padding-top: 0!important;
  }

  .padding-top-desktop-1 {
    padding-top: 10px!important;
  }

  .padding-top-desktop-2 {
    padding-top: 20px!important;
  }

  .padding-top-desktop-3 {
    padding-top: 30px!important;
  }

  .padding-top-desktop-4 {
    padding-top: 40px!important;
  }

  .padding-top-desktop-5 {
    padding-top: 50px!important;
  }

  .padding-top-desktop-6 {
    padding-top: 60px!important;
  }

  .padding-top-desktop-7 {
    padding-top: 70px!important;
  }

  .padding-top-desktop-8 {
    padding-top: 80px!important;
  }

  .padding-top-desktop-9 {
    padding-top: 90px!important;
  }

  .padding-top-desktop-10 {
    padding-top: 100px!important;
  }

  .padding-top-desktop-11 {
    padding-top: 110px!important;
  }

  .padding-top-desktop-12 {
    padding-top: 120px!important;
  }

  .padding-top-desktop-13 {
    padding-top: 130px!important;
  }

  .padding-top-desktop-14 {
    padding-top: 140px!important;
  }

  .padding-top-desktop-15 {
    padding-top: 150px!important;
  }

  .padding-top-desktop-16 {
    padding-top: 160px!important;
  }

  .padding-top-desktop-17 {
    padding-top: 170px!important;
  }

  .padding-top-desktop-18 {
    padding-top: 180px!important;
  }

  .padding-top-desktop-19 {
    padding-top: 190px!important;
  }

  .padding-top-desktop-20 {
    padding-top: 200px!important;
  }

  .padding-right-desktop-0 {
    padding-right: 0!important;
  }

  .padding-right-desktop-1 {
    padding-right: 10px!important;
  }

  .padding-right-desktop-2 {
    padding-right: 20px!important;
  }

  .padding-right-desktop-3 {
    padding-right: 30px!important;
  }

  .padding-right-desktop-4 {
    padding-right: 40px!important;
  }

  .padding-right-desktop-5 {
    padding-right: 50px!important;
  }

  .padding-right-desktop-6 {
    padding-right: 60px!important;
  }

  .padding-right-desktop-7 {
    padding-right: 70px!important;
  }

  .padding-right-desktop-8 {
    padding-right: 80px!important;
  }

  .padding-right-desktop-9 {
    padding-right: 90px!important;
  }

  .padding-right-desktop-10 {
    padding-right: 100px!important;
  }

  .padding-right-desktop-11 {
    padding-right: 110px!important;
  }

  .padding-right-desktop-12 {
    padding-right: 120px!important;
  }

  .padding-right-desktop-13 {
    padding-right: 130px!important;
  }

  .padding-right-desktop-14 {
    padding-right: 140px!important;
  }

  .padding-right-desktop-15 {
    padding-right: 150px!important;
  }

  .padding-right-desktop-16 {
    padding-right: 160px!important;
  }

  .padding-right-desktop-17 {
    padding-right: 170px!important;
  }

  .padding-right-desktop-18 {
    padding-right: 180px!important;
  }

  .padding-right-desktop-19 {
    padding-right: 190px!important;
  }

  .padding-right-desktop-20 {
    padding-right: 200px!important;
  }

  .padding-bottom-desktop-0 {
    padding-bottom: 0!important;
  }

  .padding-bottom-desktop-1 {
    padding-bottom: 10px!important;
  }

  .padding-bottom-desktop-2 {
    padding-bottom: 20px!important;
  }

  .padding-bottom-desktop-3 {
    padding-bottom: 30px!important;
  }

  .padding-bottom-desktop-4 {
    padding-bottom: 40px!important;
  }

  .padding-bottom-desktop-5 {
    padding-bottom: 50px!important;
  }

  .padding-bottom-desktop-6 {
    padding-bottom: 60px!important;
  }

  .padding-bottom-desktop-7 {
    padding-bottom: 70px!important;
  }

  .padding-bottom-desktop-8 {
    padding-bottom: 80px!important;
  }

  .padding-bottom-desktop-9 {
    padding-bottom: 90px!important;
  }

  .padding-bottom-desktop-10 {
    padding-bottom: 100px!important;
  }

  .padding-bottom-desktop-11 {
    padding-bottom: 110px!important;
  }

  .padding-bottom-desktop-12 {
    padding-bottom: 120px!important;
  }

  .padding-bottom-desktop-13 {
    padding-bottom: 130px!important;
  }

  .padding-bottom-desktop-14 {
    padding-bottom: 140px!important;
  }

  .padding-bottom-desktop-15 {
    padding-bottom: 150px!important;
  }

  .padding-bottom-desktop-16 {
    padding-bottom: 160px!important;
  }

  .padding-bottom-desktop-17 {
    padding-bottom: 170px!important;
  }

  .padding-bottom-desktop-18 {
    padding-bottom: 180px!important;
  }

  .padding-bottom-desktop-19 {
    padding-bottom: 190px!important;
  }

  .padding-bottom-desktop-20 {
    padding-bottom: 200px!important;
  }

  .padding-left-desktop-0 {
    padding-left: 0!important;
  }

  .padding-left-desktop-1 {
    padding-left: 10px!important;
  }

  .padding-left-desktop-2 {
    padding-left: 20px!important;
  }

  .padding-left-desktop-3 {
    padding-left: 30px!important;
  }

  .padding-left-desktop-4 {
    padding-left: 40px!important;
  }

  .padding-left-desktop-5 {
    padding-left: 50px!important;
  }

  .padding-left-desktop-6 {
    padding-left: 60px!important;
  }

  .padding-left-desktop-7 {
    padding-left: 70px!important;
  }

  .padding-left-desktop-8 {
    padding-left: 80px!important;
  }

  .padding-left-desktop-9 {
    padding-left: 90px!important;
  }

  .padding-left-desktop-10 {
    padding-left: 100px!important;
  }

  .padding-left-desktop-11 {
    padding-left: 110px!important;
  }

  .padding-left-desktop-12 {
    padding-left: 120px!important;
  }

  .padding-left-desktop-13 {
    padding-left: 130px!important;
  }

  .padding-left-desktop-14 {
    padding-left: 140px!important;
  }

  .padding-left-desktop-15 {
    padding-left: 150px!important;
  }

  .padding-left-desktop-16 {
    padding-left: 160px!important;
  }

  .padding-left-desktop-17 {
    padding-left: 170px!important;
  }

  .padding-left-desktop-18 {
    padding-left: 180px!important;
  }

  .padding-left-desktop-19 {
    padding-left: 190px!important;
  }

  .padding-left-desktop-20 {
    padding-left: 200px!important;
  }

  .margin-desktop-0 {
    margin: 0!important;
  }

  .margin-desktop-1 {
    margin: 10px!important;
  }

  .margin-desktop-2 {
    margin: 20px!important;
  }

  .margin-desktop-3 {
    margin: 30px!important;
  }

  .margin-desktop-4 {
    margin: 40px!important;
  }

  .margin-desktop-5 {
    margin: 50px!important;
  }

  .margin-desktop-6 {
    margin: 60px!important;
  }

  .margin-desktop-7 {
    margin: 70px!important;
  }

  .margin-desktop-8 {
    margin: 80px!important;
  }

  .margin-desktop-9 {
    margin: 90px!important;
  }

  .margin-desktop-10 {
    margin: 100px!important;
  }

  .margin-desktop-11 {
    margin: 110px!important;
  }

  .margin-desktop-12 {
    margin: 120px!important;
  }

  .margin-desktop-13 {
    margin: 130px!important;
  }

  .margin-desktop-14 {
    margin: 140px!important;
  }

  .margin-desktop-15 {
    margin: 150px!important;
  }

  .margin-desktop-16 {
    margin: 160px!important;
  }

  .margin-desktop-17 {
    margin: 170px!important;
  }

  .margin-desktop-18 {
    margin: 180px!important;
  }

  .margin-desktop-19 {
    margin: 190px!important;
  }

  .margin-desktop-20 {
    margin: 200px!important;
  }

  .margin-top-desktop-0 {
    margin-top: 0!important;
  }

  .margin-top-desktop-1 {
    margin-top: 10px!important;
  }

  .margin-top-desktop-2 {
    margin-top: 20px!important;
  }

  .margin-top-desktop-3 {
    margin-top: 30px!important;
  }

  .margin-top-desktop-4 {
    margin-top: 40px!important;
  }

  .margin-top-desktop-5 {
    margin-top: 50px!important;
  }

  .margin-top-desktop-6 {
    margin-top: 60px!important;
  }

  .margin-top-desktop-7 {
    margin-top: 70px!important;
  }

  .margin-top-desktop-8 {
    margin-top: 80px!important;
  }

  .margin-top-desktop-9 {
    margin-top: 90px!important;
  }

  .margin-top-desktop-10 {
    margin-top: 100px!important;
  }

  .margin-top-desktop-11 {
    margin-top: 110px!important;
  }

  .margin-top-desktop-12 {
    margin-top: 120px!important;
  }

  .margin-top-desktop-13 {
    margin-top: 130px!important;
  }

  .margin-top-desktop-14 {
    margin-top: 140px!important;
  }

  .margin-top-desktop-15 {
    margin-top: 150px!important;
  }

  .margin-top-desktop-16 {
    margin-top: 160px!important;
  }

  .margin-top-desktop-17 {
    margin-top: 170px!important;
  }

  .margin-top-desktop-18 {
    margin-top: 180px!important;
  }

  .margin-top-desktop-19 {
    margin-top: 190px!important;
  }

  .margin-top-desktop-20 {
    margin-top: 200px!important;
  }

  .margin-right-desktop-0 {
    margin-right: 0!important;
  }

  .margin-right-desktop-1 {
    margin-right: 10px!important;
  }

  .margin-right-desktop-2 {
    margin-right: 20px!important;
  }

  .margin-right-desktop-3 {
    margin-right: 30px!important;
  }

  .margin-right-desktop-4 {
    margin-right: 40px!important;
  }

  .margin-right-desktop-5 {
    margin-right: 50px!important;
  }

  .margin-right-desktop-6 {
    margin-right: 60px!important;
  }

  .margin-right-desktop-7 {
    margin-right: 70px!important;
  }

  .margin-right-desktop-8 {
    margin-right: 80px!important;
  }

  .margin-right-desktop-9 {
    margin-right: 90px!important;
  }

  .margin-right-desktop-10 {
    margin-right: 100px!important;
  }

  .margin-right-desktop-11 {
    margin-right: 110px!important;
  }

  .margin-right-desktop-12 {
    margin-right: 120px!important;
  }

  .margin-right-desktop-13 {
    margin-right: 130px!important;
  }

  .margin-right-desktop-14 {
    margin-right: 140px!important;
  }

  .margin-right-desktop-15 {
    margin-right: 150px!important;
  }

  .margin-right-desktop-16 {
    margin-right: 160px!important;
  }

  .margin-right-desktop-17 {
    margin-right: 170px!important;
  }

  .margin-right-desktop-18 {
    margin-right: 180px!important;
  }

  .margin-right-desktop-19 {
    margin-right: 190px!important;
  }

  .margin-right-desktop-20 {
    margin-right: 200px!important;
  }

  .margin-bottom-desktop-0 {
    margin-bottom: 0!important;
  }

  .margin-bottom-desktop-1 {
    margin-bottom: 10px!important;
  }

  .margin-bottom-desktop-2 {
    margin-bottom: 20px!important;
  }

  .margin-bottom-desktop-3 {
    margin-bottom: 30px!important;
  }

  .margin-bottom-desktop-4 {
    margin-bottom: 40px!important;
  }

  .margin-bottom-desktop-5 {
    margin-bottom: 50px!important;
  }

  .margin-bottom-desktop-6 {
    margin-bottom: 60px!important;
  }

  .margin-bottom-desktop-7 {
    margin-bottom: 70px!important;
  }

  .margin-bottom-desktop-8 {
    margin-bottom: 80px!important;
  }

  .margin-bottom-desktop-9 {
    margin-bottom: 90px!important;
  }

  .margin-bottom-desktop-10 {
    margin-bottom: 100px!important;
  }

  .margin-bottom-desktop-11 {
    margin-bottom: 110px!important;
  }

  .margin-bottom-desktop-12 {
    margin-bottom: 120px!important;
  }

  .margin-bottom-desktop-13 {
    margin-bottom: 130px!important;
  }

  .margin-bottom-desktop-14 {
    margin-bottom: 140px!important;
  }

  .margin-bottom-desktop-15 {
    margin-bottom: 150px!important;
  }

  .margin-bottom-desktop-16 {
    margin-bottom: 160px!important;
  }

  .margin-bottom-desktop-17 {
    margin-bottom: 170px!important;
  }

  .margin-bottom-desktop-18 {
    margin-bottom: 180px!important;
  }

  .margin-bottom-desktop-19 {
    margin-bottom: 190px!important;
  }

  .margin-bottom-desktop-20 {
    margin-bottom: 200px!important;
  }

  .margin-left-desktop-0 {
    margin-left: 0!important;
  }

  .margin-left-desktop-1 {
    margin-left: 10px!important;
  }

  .margin-left-desktop-2 {
    margin-left: 20px!important;
  }

  .margin-left-desktop-3 {
    margin-left: 30px!important;
  }

  .margin-left-desktop-4 {
    margin-left: 40px!important;
  }

  .margin-left-desktop-5 {
    margin-left: 50px!important;
  }

  .margin-left-desktop-6 {
    margin-left: 60px!important;
  }

  .margin-left-desktop-7 {
    margin-left: 70px!important;
  }

  .margin-left-desktop-8 {
    margin-left: 80px!important;
  }

  .margin-left-desktop-9 {
    margin-left: 90px!important;
  }

  .margin-left-desktop-10 {
    margin-left: 100px!important;
  }

  .margin-left-desktop-11 {
    margin-left: 110px!important;
  }

  .margin-left-desktop-12 {
    margin-left: 120px!important;
  }

  .margin-left-desktop-13 {
    margin-left: 130px!important;
  }

  .margin-left-desktop-14 {
    margin-left: 140px!important;
  }

  .margin-left-desktop-15 {
    margin-left: 150px!important;
  }

  .margin-left-desktop-16 {
    margin-left: 160px!important;
  }

  .margin-left-desktop-17 {
    margin-left: 170px!important;
  }

  .margin-left-desktop-18 {
    margin-left: 180px!important;
  }

  .margin-left-desktop-19 {
    margin-left: 190px!important;
  }

  .margin-left-desktop-20 {
    margin-left: 200px!important;
  }
}

@media (max-width:1023px) {
  .padding-tablet-0 {
    padding: 0!important;
  }

  .padding-tablet-1 {
    padding: 10px!important;
  }

  .padding-tablet-2 {
    padding: 20px!important;
  }

  .padding-tablet-3 {
    padding: 30px!important;
  }

  .padding-tablet-4 {
    padding: 40px!important;
  }

  .padding-tablet-5 {
    padding: 50px!important;
  }

  .padding-tablet-6 {
    padding: 60px!important;
  }

  .padding-tablet-7 {
    padding: 70px!important;
  }

  .padding-tablet-8 {
    padding: 80px!important;
  }

  .padding-tablet-9 {
    padding: 90px!important;
  }

  .padding-tablet-10 {
    padding: 100px!important;
  }

  .padding-tablet-11 {
    padding: 110px!important;
  }

  .padding-tablet-12 {
    padding: 120px!important;
  }

  .padding-tablet-13 {
    padding: 130px!important;
  }

  .padding-tablet-14 {
    padding: 140px!important;
  }

  .padding-tablet-15 {
    padding: 150px!important;
  }

  .padding-tablet-16 {
    padding: 160px!important;
  }

  .padding-tablet-17 {
    padding: 170px!important;
  }

  .padding-tablet-18 {
    padding: 180px!important;
  }

  .padding-tablet-19 {
    padding: 190px!important;
  }

  .padding-tablet-20 {
    padding: 200px!important;
  }

  .padding-top-tablet-0 {
    padding-top: 0!important;
  }

  .padding-top-tablet-1 {
    padding-top: 10px!important;
  }

  .padding-top-tablet-2 {
    padding-top: 20px!important;
  }

  .padding-top-tablet-3 {
    padding-top: 30px!important;
  }

  .padding-top-tablet-4 {
    padding-top: 40px!important;
  }

  .padding-top-tablet-5 {
    padding-top: 50px!important;
  }

  .padding-top-tablet-6 {
    padding-top: 60px!important;
  }

  .padding-top-tablet-7 {
    padding-top: 70px!important;
  }

  .padding-top-tablet-8 {
    padding-top: 80px!important;
  }

  .padding-top-tablet-9 {
    padding-top: 90px!important;
  }

  .padding-top-tablet-10 {
    padding-top: 100px!important;
  }

  .padding-top-tablet-11 {
    padding-top: 110px!important;
  }

  .padding-top-tablet-12 {
    padding-top: 120px!important;
  }

  .padding-top-tablet-13 {
    padding-top: 130px!important;
  }

  .padding-top-tablet-14 {
    padding-top: 140px!important;
  }

  .padding-top-tablet-15 {
    padding-top: 150px!important;
  }

  .padding-top-tablet-16 {
    padding-top: 160px!important;
  }

  .padding-top-tablet-17 {
    padding-top: 170px!important;
  }

  .padding-top-tablet-18 {
    padding-top: 180px!important;
  }

  .padding-top-tablet-19 {
    padding-top: 190px!important;
  }

  .padding-top-tablet-20 {
    padding-top: 200px!important;
  }

  .padding-right-tablet-0 {
    padding-right: 0!important;
  }

  .padding-right-tablet-1 {
    padding-right: 10px!important;
  }

  .padding-right-tablet-2 {
    padding-right: 20px!important;
  }

  .padding-right-tablet-3 {
    padding-right: 30px!important;
  }

  .padding-right-tablet-4 {
    padding-right: 40px!important;
  }

  .padding-right-tablet-5 {
    padding-right: 50px!important;
  }

  .padding-right-tablet-6 {
    padding-right: 60px!important;
  }

  .padding-right-tablet-7 {
    padding-right: 70px!important;
  }

  .padding-right-tablet-8 {
    padding-right: 80px!important;
  }

  .padding-right-tablet-9 {
    padding-right: 90px!important;
  }

  .padding-right-tablet-10 {
    padding-right: 100px!important;
  }

  .padding-right-tablet-11 {
    padding-right: 110px!important;
  }

  .padding-right-tablet-12 {
    padding-right: 120px!important;
  }

  .padding-right-tablet-13 {
    padding-right: 130px!important;
  }

  .padding-right-tablet-14 {
    padding-right: 140px!important;
  }

  .padding-right-tablet-15 {
    padding-right: 150px!important;
  }

  .padding-right-tablet-16 {
    padding-right: 160px!important;
  }

  .padding-right-tablet-17 {
    padding-right: 170px!important;
  }

  .padding-right-tablet-18 {
    padding-right: 180px!important;
  }

  .padding-right-tablet-19 {
    padding-right: 190px!important;
  }

  .padding-right-tablet-20 {
    padding-right: 200px!important;
  }

  .padding-bottom-tablet-0 {
    padding-bottom: 0!important;
  }

  .padding-bottom-tablet-1 {
    padding-bottom: 10px!important;
  }

  .padding-bottom-tablet-2 {
    padding-bottom: 20px!important;
  }

  .padding-bottom-tablet-3 {
    padding-bottom: 30px!important;
  }

  .padding-bottom-tablet-4 {
    padding-bottom: 40px!important;
  }

  .padding-bottom-tablet-5 {
    padding-bottom: 50px!important;
  }

  .padding-bottom-tablet-6 {
    padding-bottom: 60px!important;
  }

  .padding-bottom-tablet-7 {
    padding-bottom: 70px!important;
  }

  .padding-bottom-tablet-8 {
    padding-bottom: 80px!important;
  }

  .padding-bottom-tablet-9 {
    padding-bottom: 90px!important;
  }

  .padding-bottom-tablet-10 {
    padding-bottom: 100px!important;
  }

  .padding-bottom-tablet-11 {
    padding-bottom: 110px!important;
  }

  .padding-bottom-tablet-12 {
    padding-bottom: 120px!important;
  }

  .padding-bottom-tablet-13 {
    padding-bottom: 130px!important;
  }

  .padding-bottom-tablet-14 {
    padding-bottom: 140px!important;
  }

  .padding-bottom-tablet-15 {
    padding-bottom: 150px!important;
  }

  .padding-bottom-tablet-16 {
    padding-bottom: 160px!important;
  }

  .padding-bottom-tablet-17 {
    padding-bottom: 170px!important;
  }

  .padding-bottom-tablet-18 {
    padding-bottom: 180px!important;
  }

  .padding-bottom-tablet-19 {
    padding-bottom: 190px!important;
  }

  .padding-bottom-tablet-20 {
    padding-bottom: 200px!important;
  }

  .padding-left-tablet-0 {
    padding-left: 0!important;
  }

  .padding-left-tablet-1 {
    padding-left: 10px!important;
  }

  .padding-left-tablet-2 {
    padding-left: 20px!important;
  }

  .padding-left-tablet-3 {
    padding-left: 30px!important;
  }

  .padding-left-tablet-4 {
    padding-left: 40px!important;
  }

  .padding-left-tablet-5 {
    padding-left: 50px!important;
  }

  .padding-left-tablet-6 {
    padding-left: 60px!important;
  }

  .padding-left-tablet-7 {
    padding-left: 70px!important;
  }

  .padding-left-tablet-8 {
    padding-left: 80px!important;
  }

  .padding-left-tablet-9 {
    padding-left: 90px!important;
  }

  .padding-left-tablet-10 {
    padding-left: 100px!important;
  }

  .padding-left-tablet-11 {
    padding-left: 110px!important;
  }

  .padding-left-tablet-12 {
    padding-left: 120px!important;
  }

  .padding-left-tablet-13 {
    padding-left: 130px!important;
  }

  .padding-left-tablet-14 {
    padding-left: 140px!important;
  }

  .padding-left-tablet-15 {
    padding-left: 150px!important;
  }

  .padding-left-tablet-16 {
    padding-left: 160px!important;
  }

  .padding-left-tablet-17 {
    padding-left: 170px!important;
  }

  .padding-left-tablet-18 {
    padding-left: 180px!important;
  }

  .padding-left-tablet-19 {
    padding-left: 190px!important;
  }

  .padding-left-tablet-20 {
    padding-left: 200px!important;
  }

  .margin-tablet-0 {
    margin: 0!important;
  }

  .margin-tablet-1 {
    margin: 10px!important;
  }

  .margin-tablet-2 {
    margin: 20px!important;
  }

  .margin-tablet-3 {
    margin: 30px!important;
  }

  .margin-tablet-4 {
    margin: 40px!important;
  }

  .margin-tablet-5 {
    margin: 50px!important;
  }

  .margin-tablet-6 {
    margin: 60px!important;
  }

  .margin-tablet-7 {
    margin: 70px!important;
  }

  .margin-tablet-8 {
    margin: 80px!important;
  }

  .margin-tablet-9 {
    margin: 90px!important;
  }

  .margin-tablet-10 {
    margin: 100px!important;
  }

  .margin-tablet-11 {
    margin: 110px!important;
  }

  .margin-tablet-12 {
    margin: 120px!important;
  }

  .margin-tablet-13 {
    margin: 130px!important;
  }

  .margin-tablet-14 {
    margin: 140px!important;
  }

  .margin-tablet-15 {
    margin: 150px!important;
  }

  .margin-tablet-16 {
    margin: 160px!important;
  }

  .margin-tablet-17 {
    margin: 170px!important;
  }

  .margin-tablet-18 {
    margin: 180px!important;
  }

  .margin-tablet-19 {
    margin: 190px!important;
  }

  .margin-tablet-20 {
    margin: 200px!important;
  }

  .margin-top-tablet-0 {
    margin-top: 0!important;
  }

  .margin-top-tablet-1 {
    margin-top: 10px!important;
  }

  .margin-top-tablet-2 {
    margin-top: 20px!important;
  }

  .margin-top-tablet-3 {
    margin-top: 30px!important;
  }

  .margin-top-tablet-4 {
    margin-top: 40px!important;
  }

  .margin-top-tablet-5 {
    margin-top: 50px!important;
  }

  .margin-top-tablet-6 {
    margin-top: 60px!important;
  }

  .margin-top-tablet-7 {
    margin-top: 70px!important;
  }

  .margin-top-tablet-8 {
    margin-top: 80px!important;
  }

  .margin-top-tablet-9 {
    margin-top: 90px!important;
  }

  .margin-top-tablet-10 {
    margin-top: 100px!important;
  }

  .margin-top-tablet-11 {
    margin-top: 110px!important;
  }

  .margin-top-tablet-12 {
    margin-top: 120px!important;
  }

  .margin-top-tablet-13 {
    margin-top: 130px!important;
  }

  .margin-top-tablet-14 {
    margin-top: 140px!important;
  }

  .margin-top-tablet-15 {
    margin-top: 150px!important;
  }

  .margin-top-tablet-16 {
    margin-top: 160px!important;
  }

  .margin-top-tablet-17 {
    margin-top: 170px!important;
  }

  .margin-top-tablet-18 {
    margin-top: 180px!important;
  }

  .margin-top-tablet-19 {
    margin-top: 190px!important;
  }

  .margin-top-tablet-20 {
    margin-top: 200px!important;
  }

  .margin-right-tablet-0 {
    margin-right: 0!important;
  }

  .margin-right-tablet-1 {
    margin-right: 10px!important;
  }

  .margin-right-tablet-2 {
    margin-right: 20px!important;
  }

  .margin-right-tablet-3 {
    margin-right: 30px!important;
  }

  .margin-right-tablet-4 {
    margin-right: 40px!important;
  }

  .margin-right-tablet-5 {
    margin-right: 50px!important;
  }

  .margin-right-tablet-6 {
    margin-right: 60px!important;
  }

  .margin-right-tablet-7 {
    margin-right: 70px!important;
  }

  .margin-right-tablet-8 {
    margin-right: 80px!important;
  }

  .margin-right-tablet-9 {
    margin-right: 90px!important;
  }

  .margin-right-tablet-10 {
    margin-right: 100px!important;
  }

  .margin-right-tablet-11 {
    margin-right: 110px!important;
  }

  .margin-right-tablet-12 {
    margin-right: 120px!important;
  }

  .margin-right-tablet-13 {
    margin-right: 130px!important;
  }

  .margin-right-tablet-14 {
    margin-right: 140px!important;
  }

  .margin-right-tablet-15 {
    margin-right: 150px!important;
  }

  .margin-right-tablet-16 {
    margin-right: 160px!important;
  }

  .margin-right-tablet-17 {
    margin-right: 170px!important;
  }

  .margin-right-tablet-18 {
    margin-right: 180px!important;
  }

  .margin-right-tablet-19 {
    margin-right: 190px!important;
  }

  .margin-right-tablet-20 {
    margin-right: 200px!important;
  }

  .margin-bottom-tablet-0 {
    margin-bottom: 0!important;
  }

  .margin-bottom-tablet-1 {
    margin-bottom: 10px!important;
  }

  .margin-bottom-tablet-2 {
    margin-bottom: 20px!important;
  }

  .margin-bottom-tablet-3 {
    margin-bottom: 30px!important;
  }

  .margin-bottom-tablet-4 {
    margin-bottom: 40px!important;
  }

  .margin-bottom-tablet-5 {
    margin-bottom: 50px!important;
  }

  .margin-bottom-tablet-6 {
    margin-bottom: 60px!important;
  }

  .margin-bottom-tablet-7 {
    margin-bottom: 70px!important;
  }

  .margin-bottom-tablet-8 {
    margin-bottom: 80px!important;
  }

  .margin-bottom-tablet-9 {
    margin-bottom: 90px!important;
  }

  .margin-bottom-tablet-10 {
    margin-bottom: 100px!important;
  }

  .margin-bottom-tablet-11 {
    margin-bottom: 110px!important;
  }

  .margin-bottom-tablet-12 {
    margin-bottom: 120px!important;
  }

  .margin-bottom-tablet-13 {
    margin-bottom: 130px!important;
  }

  .margin-bottom-tablet-14 {
    margin-bottom: 140px!important;
  }

  .margin-bottom-tablet-15 {
    margin-bottom: 150px!important;
  }

  .margin-bottom-tablet-16 {
    margin-bottom: 160px!important;
  }

  .margin-bottom-tablet-17 {
    margin-bottom: 170px!important;
  }

  .margin-bottom-tablet-18 {
    margin-bottom: 180px!important;
  }

  .margin-bottom-tablet-19 {
    margin-bottom: 190px!important;
  }

  .margin-bottom-tablet-20 {
    margin-bottom: 200px!important;
  }

  .margin-left-tablet-0 {
    margin-left: 0!important;
  }

  .margin-left-tablet-1 {
    margin-left: 10px!important;
  }

  .margin-left-tablet-2 {
    margin-left: 20px!important;
  }

  .margin-left-tablet-3 {
    margin-left: 30px!important;
  }

  .margin-left-tablet-4 {
    margin-left: 40px!important;
  }

  .margin-left-tablet-5 {
    margin-left: 50px!important;
  }

  .margin-left-tablet-6 {
    margin-left: 60px!important;
  }

  .margin-left-tablet-7 {
    margin-left: 70px!important;
  }

  .margin-left-tablet-8 {
    margin-left: 80px!important;
  }

  .margin-left-tablet-9 {
    margin-left: 90px!important;
  }

  .margin-left-tablet-10 {
    margin-left: 100px!important;
  }

  .margin-left-tablet-11 {
    margin-left: 110px!important;
  }

  .margin-left-tablet-12 {
    margin-left: 120px!important;
  }

  .margin-left-tablet-13 {
    margin-left: 130px!important;
  }

  .margin-left-tablet-14 {
    margin-left: 140px!important;
  }

  .margin-left-tablet-15 {
    margin-left: 150px!important;
  }

  .margin-left-tablet-16 {
    margin-left: 160px!important;
  }

  .margin-left-tablet-17 {
    margin-left: 170px!important;
  }

  .margin-left-tablet-18 {
    margin-left: 180px!important;
  }

  .margin-left-tablet-19 {
    margin-left: 190px!important;
  }

  .margin-left-tablet-20 {
    margin-left: 200px!important;
  }
}

@media (max-width:767px) {
  .padding-phablet-0 {
    padding: 0!important;
  }

  .padding-phablet-1 {
    padding: 10px!important;
  }

  .padding-phablet-2 {
    padding: 20px!important;
  }

  .padding-phablet-3 {
    padding: 30px!important;
  }

  .padding-phablet-4 {
    padding: 40px!important;
  }

  .padding-phablet-5 {
    padding: 50px!important;
  }

  .padding-phablet-6 {
    padding: 60px!important;
  }

  .padding-phablet-7 {
    padding: 70px!important;
  }

  .padding-phablet-8 {
    padding: 80px!important;
  }

  .padding-phablet-9 {
    padding: 90px!important;
  }

  .padding-phablet-10 {
    padding: 100px!important;
  }

  .padding-phablet-11 {
    padding: 110px!important;
  }

  .padding-phablet-12 {
    padding: 120px!important;
  }

  .padding-phablet-13 {
    padding: 130px!important;
  }

  .padding-phablet-14 {
    padding: 140px!important;
  }

  .padding-phablet-15 {
    padding: 150px!important;
  }

  .padding-phablet-16 {
    padding: 160px!important;
  }

  .padding-phablet-17 {
    padding: 170px!important;
  }

  .padding-phablet-18 {
    padding: 180px!important;
  }

  .padding-phablet-19 {
    padding: 190px!important;
  }

  .padding-phablet-20 {
    padding: 200px!important;
  }

  .padding-top-phablet-0 {
    padding-top: 0!important;
  }

  .padding-top-phablet-1 {
    padding-top: 10px!important;
  }

  .padding-top-phablet-2 {
    padding-top: 20px!important;
  }

  .padding-top-phablet-3 {
    padding-top: 30px!important;
  }

  .padding-top-phablet-4 {
    padding-top: 40px!important;
  }

  .padding-top-phablet-5 {
    padding-top: 50px!important;
  }

  .padding-top-phablet-6 {
    padding-top: 60px!important;
  }

  .padding-top-phablet-7 {
    padding-top: 70px!important;
  }

  .padding-top-phablet-8 {
    padding-top: 80px!important;
  }

  .padding-top-phablet-9 {
    padding-top: 90px!important;
  }

  .padding-top-phablet-10 {
    padding-top: 100px!important;
  }

  .padding-top-phablet-11 {
    padding-top: 110px!important;
  }

  .padding-top-phablet-12 {
    padding-top: 120px!important;
  }

  .padding-top-phablet-13 {
    padding-top: 130px!important;
  }

  .padding-top-phablet-14 {
    padding-top: 140px!important;
  }

  .padding-top-phablet-15 {
    padding-top: 150px!important;
  }

  .padding-top-phablet-16 {
    padding-top: 160px!important;
  }

  .padding-top-phablet-17 {
    padding-top: 170px!important;
  }

  .padding-top-phablet-18 {
    padding-top: 180px!important;
  }

  .padding-top-phablet-19 {
    padding-top: 190px!important;
  }

  .padding-top-phablet-20 {
    padding-top: 200px!important;
  }

  .padding-right-phablet-0 {
    padding-right: 0!important;
  }

  .padding-right-phablet-1 {
    padding-right: 10px!important;
  }

  .padding-right-phablet-2 {
    padding-right: 20px!important;
  }

  .padding-right-phablet-3 {
    padding-right: 30px!important;
  }

  .padding-right-phablet-4 {
    padding-right: 40px!important;
  }

  .padding-right-phablet-5 {
    padding-right: 50px!important;
  }

  .padding-right-phablet-6 {
    padding-right: 60px!important;
  }

  .padding-right-phablet-7 {
    padding-right: 70px!important;
  }

  .padding-right-phablet-8 {
    padding-right: 80px!important;
  }

  .padding-right-phablet-9 {
    padding-right: 90px!important;
  }

  .padding-right-phablet-10 {
    padding-right: 100px!important;
  }

  .padding-right-phablet-11 {
    padding-right: 110px!important;
  }

  .padding-right-phablet-12 {
    padding-right: 120px!important;
  }

  .padding-right-phablet-13 {
    padding-right: 130px!important;
  }

  .padding-right-phablet-14 {
    padding-right: 140px!important;
  }

  .padding-right-phablet-15 {
    padding-right: 150px!important;
  }

  .padding-right-phablet-16 {
    padding-right: 160px!important;
  }

  .padding-right-phablet-17 {
    padding-right: 170px!important;
  }

  .padding-right-phablet-18 {
    padding-right: 180px!important;
  }

  .padding-right-phablet-19 {
    padding-right: 190px!important;
  }

  .padding-right-phablet-20 {
    padding-right: 200px!important;
  }

  .padding-bottom-phablet-0 {
    padding-bottom: 0!important;
  }

  .padding-bottom-phablet-1 {
    padding-bottom: 10px!important;
  }

  .padding-bottom-phablet-2 {
    padding-bottom: 20px!important;
  }

  .padding-bottom-phablet-3 {
    padding-bottom: 30px!important;
  }

  .padding-bottom-phablet-4 {
    padding-bottom: 40px!important;
  }

  .padding-bottom-phablet-5 {
    padding-bottom: 50px!important;
  }

  .padding-bottom-phablet-6 {
    padding-bottom: 60px!important;
  }

  .padding-bottom-phablet-7 {
    padding-bottom: 70px!important;
  }

  .padding-bottom-phablet-8 {
    padding-bottom: 80px!important;
  }

  .padding-bottom-phablet-9 {
    padding-bottom: 90px!important;
  }

  .padding-bottom-phablet-10 {
    padding-bottom: 100px!important;
  }

  .padding-bottom-phablet-11 {
    padding-bottom: 110px!important;
  }

  .padding-bottom-phablet-12 {
    padding-bottom: 120px!important;
  }

  .padding-bottom-phablet-13 {
    padding-bottom: 130px!important;
  }

  .padding-bottom-phablet-14 {
    padding-bottom: 140px!important;
  }

  .padding-bottom-phablet-15 {
    padding-bottom: 150px!important;
  }

  .padding-bottom-phablet-16 {
    padding-bottom: 160px!important;
  }

  .padding-bottom-phablet-17 {
    padding-bottom: 170px!important;
  }

  .padding-bottom-phablet-18 {
    padding-bottom: 180px!important;
  }

  .padding-bottom-phablet-19 {
    padding-bottom: 190px!important;
  }

  .padding-bottom-phablet-20 {
    padding-bottom: 200px!important;
  }

  .padding-left-phablet-0 {
    padding-left: 0!important;
  }

  .padding-left-phablet-1 {
    padding-left: 10px!important;
  }

  .padding-left-phablet-2 {
    padding-left: 20px!important;
  }

  .padding-left-phablet-3 {
    padding-left: 30px!important;
  }

  .padding-left-phablet-4 {
    padding-left: 40px!important;
  }

  .padding-left-phablet-5 {
    padding-left: 50px!important;
  }

  .padding-left-phablet-6 {
    padding-left: 60px!important;
  }

  .padding-left-phablet-7 {
    padding-left: 70px!important;
  }

  .padding-left-phablet-8 {
    padding-left: 80px!important;
  }

  .padding-left-phablet-9 {
    padding-left: 90px!important;
  }

  .padding-left-phablet-10 {
    padding-left: 100px!important;
  }

  .padding-left-phablet-11 {
    padding-left: 110px!important;
  }

  .padding-left-phablet-12 {
    padding-left: 120px!important;
  }

  .padding-left-phablet-13 {
    padding-left: 130px!important;
  }

  .padding-left-phablet-14 {
    padding-left: 140px!important;
  }

  .padding-left-phablet-15 {
    padding-left: 150px!important;
  }

  .padding-left-phablet-16 {
    padding-left: 160px!important;
  }

  .padding-left-phablet-17 {
    padding-left: 170px!important;
  }

  .padding-left-phablet-18 {
    padding-left: 180px!important;
  }

  .padding-left-phablet-19 {
    padding-left: 190px!important;
  }

  .padding-left-phablet-20 {
    padding-left: 200px!important;
  }

  .margin-phablet-0 {
    margin: 0!important;
  }

  .margin-phablet-1 {
    margin: 10px!important;
  }

  .margin-phablet-2 {
    margin: 20px!important;
  }

  .margin-phablet-3 {
    margin: 30px!important;
  }

  .margin-phablet-4 {
    margin: 40px!important;
  }

  .margin-phablet-5 {
    margin: 50px!important;
  }

  .margin-phablet-6 {
    margin: 60px!important;
  }

  .margin-phablet-7 {
    margin: 70px!important;
  }

  .margin-phablet-8 {
    margin: 80px!important;
  }

  .margin-phablet-9 {
    margin: 90px!important;
  }

  .margin-phablet-10 {
    margin: 100px!important;
  }

  .margin-phablet-11 {
    margin: 110px!important;
  }

  .margin-phablet-12 {
    margin: 120px!important;
  }

  .margin-phablet-13 {
    margin: 130px!important;
  }

  .margin-phablet-14 {
    margin: 140px!important;
  }

  .margin-phablet-15 {
    margin: 150px!important;
  }

  .margin-phablet-16 {
    margin: 160px!important;
  }

  .margin-phablet-17 {
    margin: 170px!important;
  }

  .margin-phablet-18 {
    margin: 180px!important;
  }

  .margin-phablet-19 {
    margin: 190px!important;
  }

  .margin-phablet-20 {
    margin: 200px!important;
  }

  .margin-top-phablet-0 {
    margin-top: 0!important;
  }

  .margin-top-phablet-1 {
    margin-top: 10px!important;
  }

  .margin-top-phablet-2 {
    margin-top: 20px!important;
  }

  .margin-top-phablet-3 {
    margin-top: 30px!important;
  }

  .margin-top-phablet-4 {
    margin-top: 40px!important;
  }

  .margin-top-phablet-5 {
    margin-top: 50px!important;
  }

  .margin-top-phablet-6 {
    margin-top: 60px!important;
  }

  .margin-top-phablet-7 {
    margin-top: 70px!important;
  }

  .margin-top-phablet-8 {
    margin-top: 80px!important;
  }

  .margin-top-phablet-9 {
    margin-top: 90px!important;
  }

  .margin-top-phablet-10 {
    margin-top: 100px!important;
  }

  .margin-top-phablet-11 {
    margin-top: 110px!important;
  }

  .margin-top-phablet-12 {
    margin-top: 120px!important;
  }

  .margin-top-phablet-13 {
    margin-top: 130px!important;
  }

  .margin-top-phablet-14 {
    margin-top: 140px!important;
  }

  .margin-top-phablet-15 {
    margin-top: 150px!important;
  }

  .margin-top-phablet-16 {
    margin-top: 160px!important;
  }

  .margin-top-phablet-17 {
    margin-top: 170px!important;
  }

  .margin-top-phablet-18 {
    margin-top: 180px!important;
  }

  .margin-top-phablet-19 {
    margin-top: 190px!important;
  }

  .margin-top-phablet-20 {
    margin-top: 200px!important;
  }

  .margin-right-phablet-0 {
    margin-right: 0!important;
  }

  .margin-right-phablet-1 {
    margin-right: 10px!important;
  }

  .margin-right-phablet-2 {
    margin-right: 20px!important;
  }

  .margin-right-phablet-3 {
    margin-right: 30px!important;
  }

  .margin-right-phablet-4 {
    margin-right: 40px!important;
  }

  .margin-right-phablet-5 {
    margin-right: 50px!important;
  }

  .margin-right-phablet-6 {
    margin-right: 60px!important;
  }

  .margin-right-phablet-7 {
    margin-right: 70px!important;
  }

  .margin-right-phablet-8 {
    margin-right: 80px!important;
  }

  .margin-right-phablet-9 {
    margin-right: 90px!important;
  }

  .margin-right-phablet-10 {
    margin-right: 100px!important;
  }

  .margin-right-phablet-11 {
    margin-right: 110px!important;
  }

  .margin-right-phablet-12 {
    margin-right: 120px!important;
  }

  .margin-right-phablet-13 {
    margin-right: 130px!important;
  }

  .margin-right-phablet-14 {
    margin-right: 140px!important;
  }

  .margin-right-phablet-15 {
    margin-right: 150px!important;
  }

  .margin-right-phablet-16 {
    margin-right: 160px!important;
  }

  .margin-right-phablet-17 {
    margin-right: 170px!important;
  }

  .margin-right-phablet-18 {
    margin-right: 180px!important;
  }

  .margin-right-phablet-19 {
    margin-right: 190px!important;
  }

  .margin-right-phablet-20 {
    margin-right: 200px!important;
  }

  .margin-bottom-phablet-0 {
    margin-bottom: 0!important;
  }

  .margin-bottom-phablet-1 {
    margin-bottom: 10px!important;
  }

  .margin-bottom-phablet-2 {
    margin-bottom: 20px!important;
  }

  .margin-bottom-phablet-3 {
    margin-bottom: 30px!important;
  }

  .margin-bottom-phablet-4 {
    margin-bottom: 40px!important;
  }

  .margin-bottom-phablet-5 {
    margin-bottom: 50px!important;
  }

  .margin-bottom-phablet-6 {
    margin-bottom: 60px!important;
  }

  .margin-bottom-phablet-7 {
    margin-bottom: 70px!important;
  }

  .margin-bottom-phablet-8 {
    margin-bottom: 80px!important;
  }

  .margin-bottom-phablet-9 {
    margin-bottom: 90px!important;
  }

  .margin-bottom-phablet-10 {
    margin-bottom: 100px!important;
  }

  .margin-bottom-phablet-11 {
    margin-bottom: 110px!important;
  }

  .margin-bottom-phablet-12 {
    margin-bottom: 120px!important;
  }

  .margin-bottom-phablet-13 {
    margin-bottom: 130px!important;
  }

  .margin-bottom-phablet-14 {
    margin-bottom: 140px!important;
  }

  .margin-bottom-phablet-15 {
    margin-bottom: 150px!important;
  }

  .margin-bottom-phablet-16 {
    margin-bottom: 160px!important;
  }

  .margin-bottom-phablet-17 {
    margin-bottom: 170px!important;
  }

  .margin-bottom-phablet-18 {
    margin-bottom: 180px!important;
  }

  .margin-bottom-phablet-19 {
    margin-bottom: 190px!important;
  }

  .margin-bottom-phablet-20 {
    margin-bottom: 200px!important;
  }

  .margin-left-phablet-0 {
    margin-left: 0!important;
  }

  .margin-left-phablet-1 {
    margin-left: 10px!important;
  }

  .margin-left-phablet-2 {
    margin-left: 20px!important;
  }

  .margin-left-phablet-3 {
    margin-left: 30px!important;
  }

  .margin-left-phablet-4 {
    margin-left: 40px!important;
  }

  .margin-left-phablet-5 {
    margin-left: 50px!important;
  }

  .margin-left-phablet-6 {
    margin-left: 60px!important;
  }

  .margin-left-phablet-7 {
    margin-left: 70px!important;
  }

  .margin-left-phablet-8 {
    margin-left: 80px!important;
  }

  .margin-left-phablet-9 {
    margin-left: 90px!important;
  }

  .margin-left-phablet-10 {
    margin-left: 100px!important;
  }

  .margin-left-phablet-11 {
    margin-left: 110px!important;
  }

  .margin-left-phablet-12 {
    margin-left: 120px!important;
  }

  .margin-left-phablet-13 {
    margin-left: 130px!important;
  }

  .margin-left-phablet-14 {
    margin-left: 140px!important;
  }

  .margin-left-phablet-15 {
    margin-left: 150px!important;
  }

  .margin-left-phablet-16 {
    margin-left: 160px!important;
  }

  .margin-left-phablet-17 {
    margin-left: 170px!important;
  }

  .margin-left-phablet-18 {
    margin-left: 180px!important;
  }

  .margin-left-phablet-19 {
    margin-left: 190px!important;
  }

  .margin-left-phablet-20 {
    margin-left: 200px!important;
  }
}

@media (max-width:435px) {
  .padding-phone-0 {
    padding: 0!important;
  }

  .padding-phone-1 {
    padding: 10px!important;
  }

  .padding-phone-2 {
    padding: 20px!important;
  }

  .padding-phone-3 {
    padding: 30px!important;
  }

  .padding-phone-4 {
    padding: 40px!important;
  }

  .padding-phone-5 {
    padding: 50px!important;
  }

  .padding-phone-6 {
    padding: 60px!important;
  }

  .padding-phone-7 {
    padding: 70px!important;
  }

  .padding-phone-8 {
    padding: 80px!important;
  }

  .padding-phone-9 {
    padding: 90px!important;
  }

  .padding-phone-10 {
    padding: 100px!important;
  }

  .padding-phone-11 {
    padding: 110px!important;
  }

  .padding-phone-12 {
    padding: 120px!important;
  }

  .padding-phone-13 {
    padding: 130px!important;
  }

  .padding-phone-14 {
    padding: 140px!important;
  }

  .padding-phone-15 {
    padding: 150px!important;
  }

  .padding-phone-16 {
    padding: 160px!important;
  }

  .padding-phone-17 {
    padding: 170px!important;
  }

  .padding-phone-18 {
    padding: 180px!important;
  }

  .padding-phone-19 {
    padding: 190px!important;
  }

  .padding-phone-20 {
    padding: 200px!important;
  }

  .padding-top-phone-0 {
    padding-top: 0!important;
  }

  .padding-top-phone-1 {
    padding-top: 10px!important;
  }

  .padding-top-phone-2 {
    padding-top: 20px!important;
  }

  .padding-top-phone-3 {
    padding-top: 30px!important;
  }

  .padding-top-phone-4 {
    padding-top: 40px!important;
  }

  .padding-top-phone-5 {
    padding-top: 50px!important;
  }

  .padding-top-phone-6 {
    padding-top: 60px!important;
  }

  .padding-top-phone-7 {
    padding-top: 70px!important;
  }

  .padding-top-phone-8 {
    padding-top: 80px!important;
  }

  .padding-top-phone-9 {
    padding-top: 90px!important;
  }

  .padding-top-phone-10 {
    padding-top: 100px!important;
  }

  .padding-top-phone-11 {
    padding-top: 110px!important;
  }

  .padding-top-phone-12 {
    padding-top: 120px!important;
  }

  .padding-top-phone-13 {
    padding-top: 130px!important;
  }

  .padding-top-phone-14 {
    padding-top: 140px!important;
  }

  .padding-top-phone-15 {
    padding-top: 150px!important;
  }

  .padding-top-phone-16 {
    padding-top: 160px!important;
  }

  .padding-top-phone-17 {
    padding-top: 170px!important;
  }

  .padding-top-phone-18 {
    padding-top: 180px!important;
  }

  .padding-top-phone-19 {
    padding-top: 190px!important;
  }

  .padding-top-phone-20 {
    padding-top: 200px!important;
  }

  .padding-right-phone-0 {
    padding-right: 0!important;
  }

  .padding-right-phone-1 {
    padding-right: 10px!important;
  }

  .padding-right-phone-2 {
    padding-right: 20px!important;
  }

  .padding-right-phone-3 {
    padding-right: 30px!important;
  }

  .padding-right-phone-4 {
    padding-right: 40px!important;
  }

  .padding-right-phone-5 {
    padding-right: 50px!important;
  }

  .padding-right-phone-6 {
    padding-right: 60px!important;
  }

  .padding-right-phone-7 {
    padding-right: 70px!important;
  }

  .padding-right-phone-8 {
    padding-right: 80px!important;
  }

  .padding-right-phone-9 {
    padding-right: 90px!important;
  }

  .padding-right-phone-10 {
    padding-right: 100px!important;
  }

  .padding-right-phone-11 {
    padding-right: 110px!important;
  }

  .padding-right-phone-12 {
    padding-right: 120px!important;
  }

  .padding-right-phone-13 {
    padding-right: 130px!important;
  }

  .padding-right-phone-14 {
    padding-right: 140px!important;
  }

  .padding-right-phone-15 {
    padding-right: 150px!important;
  }

  .padding-right-phone-16 {
    padding-right: 160px!important;
  }

  .padding-right-phone-17 {
    padding-right: 170px!important;
  }

  .padding-right-phone-18 {
    padding-right: 180px!important;
  }

  .padding-right-phone-19 {
    padding-right: 190px!important;
  }

  .padding-right-phone-20 {
    padding-right: 200px!important;
  }

  .padding-bottom-phone-0 {
    padding-bottom: 0!important;
  }

  .padding-bottom-phone-1 {
    padding-bottom: 10px!important;
  }

  .padding-bottom-phone-2 {
    padding-bottom: 20px!important;
  }

  .padding-bottom-phone-3 {
    padding-bottom: 30px!important;
  }

  .padding-bottom-phone-4 {
    padding-bottom: 40px!important;
  }

  .padding-bottom-phone-5 {
    padding-bottom: 50px!important;
  }

  .padding-bottom-phone-6 {
    padding-bottom: 60px!important;
  }

  .padding-bottom-phone-7 {
    padding-bottom: 70px!important;
  }

  .padding-bottom-phone-8 {
    padding-bottom: 80px!important;
  }

  .padding-bottom-phone-9 {
    padding-bottom: 90px!important;
  }

  .padding-bottom-phone-10 {
    padding-bottom: 100px!important;
  }

  .padding-bottom-phone-11 {
    padding-bottom: 110px!important;
  }

  .padding-bottom-phone-12 {
    padding-bottom: 120px!important;
  }

  .padding-bottom-phone-13 {
    padding-bottom: 130px!important;
  }

  .padding-bottom-phone-14 {
    padding-bottom: 140px!important;
  }

  .padding-bottom-phone-15 {
    padding-bottom: 150px!important;
  }

  .padding-bottom-phone-16 {
    padding-bottom: 160px!important;
  }

  .padding-bottom-phone-17 {
    padding-bottom: 170px!important;
  }

  .padding-bottom-phone-18 {
    padding-bottom: 180px!important;
  }

  .padding-bottom-phone-19 {
    padding-bottom: 190px!important;
  }

  .padding-bottom-phone-20 {
    padding-bottom: 200px!important;
  }

  .padding-left-phone-0 {
    padding-left: 0!important;
  }

  .padding-left-phone-1 {
    padding-left: 10px!important;
  }

  .padding-left-phone-2 {
    padding-left: 20px!important;
  }

  .padding-left-phone-3 {
    padding-left: 30px!important;
  }

  .padding-left-phone-4 {
    padding-left: 40px!important;
  }

  .padding-left-phone-5 {
    padding-left: 50px!important;
  }

  .padding-left-phone-6 {
    padding-left: 60px!important;
  }

  .padding-left-phone-7 {
    padding-left: 70px!important;
  }

  .padding-left-phone-8 {
    padding-left: 80px!important;
  }

  .padding-left-phone-9 {
    padding-left: 90px!important;
  }

  .padding-left-phone-10 {
    padding-left: 100px!important;
  }

  .padding-left-phone-11 {
    padding-left: 110px!important;
  }

  .padding-left-phone-12 {
    padding-left: 120px!important;
  }

  .padding-left-phone-13 {
    padding-left: 130px!important;
  }

  .padding-left-phone-14 {
    padding-left: 140px!important;
  }

  .padding-left-phone-15 {
    padding-left: 150px!important;
  }

  .padding-left-phone-16 {
    padding-left: 160px!important;
  }

  .padding-left-phone-17 {
    padding-left: 170px!important;
  }

  .padding-left-phone-18 {
    padding-left: 180px!important;
  }

  .padding-left-phone-19 {
    padding-left: 190px!important;
  }

  .padding-left-phone-20 {
    padding-left: 200px!important;
  }

  .margin-phone-0 {
    margin: 0!important;
  }

  .margin-phone-1 {
    margin: 10px!important;
  }

  .margin-phone-2 {
    margin: 20px!important;
  }

  .margin-phone-3 {
    margin: 30px!important;
  }

  .margin-phone-4 {
    margin: 40px!important;
  }

  .margin-phone-5 {
    margin: 50px!important;
  }

  .margin-phone-6 {
    margin: 60px!important;
  }

  .margin-phone-7 {
    margin: 70px!important;
  }

  .margin-phone-8 {
    margin: 80px!important;
  }

  .margin-phone-9 {
    margin: 90px!important;
  }

  .margin-phone-10 {
    margin: 100px!important;
  }

  .margin-phone-11 {
    margin: 110px!important;
  }

  .margin-phone-12 {
    margin: 120px!important;
  }

  .margin-phone-13 {
    margin: 130px!important;
  }

  .margin-phone-14 {
    margin: 140px!important;
  }

  .margin-phone-15 {
    margin: 150px!important;
  }

  .margin-phone-16 {
    margin: 160px!important;
  }

  .margin-phone-17 {
    margin: 170px!important;
  }

  .margin-phone-18 {
    margin: 180px!important;
  }

  .margin-phone-19 {
    margin: 190px!important;
  }

  .margin-phone-20 {
    margin: 200px!important;
  }

  .margin-top-phone-0 {
    margin-top: 0!important;
  }

  .margin-top-phone-1 {
    margin-top: 10px!important;
  }

  .margin-top-phone-2 {
    margin-top: 20px!important;
  }

  .margin-top-phone-3 {
    margin-top: 30px!important;
  }

  .margin-top-phone-4 {
    margin-top: 40px!important;
  }

  .margin-top-phone-5 {
    margin-top: 50px!important;
  }

  .margin-top-phone-6 {
    margin-top: 60px!important;
  }

  .margin-top-phone-7 {
    margin-top: 70px!important;
  }

  .margin-top-phone-8 {
    margin-top: 80px!important;
  }

  .margin-top-phone-9 {
    margin-top: 90px!important;
  }

  .margin-top-phone-10 {
    margin-top: 100px!important;
  }

  .margin-top-phone-11 {
    margin-top: 110px!important;
  }

  .margin-top-phone-12 {
    margin-top: 120px!important;
  }

  .margin-top-phone-13 {
    margin-top: 130px!important;
  }

  .margin-top-phone-14 {
    margin-top: 140px!important;
  }

  .margin-top-phone-15 {
    margin-top: 150px!important;
  }

  .margin-top-phone-16 {
    margin-top: 160px!important;
  }

  .margin-top-phone-17 {
    margin-top: 170px!important;
  }

  .margin-top-phone-18 {
    margin-top: 180px!important;
  }

  .margin-top-phone-19 {
    margin-top: 190px!important;
  }

  .margin-top-phone-20 {
    margin-top: 200px!important;
  }

  .margin-right-phone-0 {
    margin-right: 0!important;
  }

  .margin-right-phone-1 {
    margin-right: 10px!important;
  }

  .margin-right-phone-2 {
    margin-right: 20px!important;
  }

  .margin-right-phone-3 {
    margin-right: 30px!important;
  }

  .margin-right-phone-4 {
    margin-right: 40px!important;
  }

  .margin-right-phone-5 {
    margin-right: 50px!important;
  }

  .margin-right-phone-6 {
    margin-right: 60px!important;
  }

  .margin-right-phone-7 {
    margin-right: 70px!important;
  }

  .margin-right-phone-8 {
    margin-right: 80px!important;
  }

  .margin-right-phone-9 {
    margin-right: 90px!important;
  }

  .margin-right-phone-10 {
    margin-right: 100px!important;
  }

  .margin-right-phone-11 {
    margin-right: 110px!important;
  }

  .margin-right-phone-12 {
    margin-right: 120px!important;
  }

  .margin-right-phone-13 {
    margin-right: 130px!important;
  }

  .margin-right-phone-14 {
    margin-right: 140px!important;
  }

  .margin-right-phone-15 {
    margin-right: 150px!important;
  }

  .margin-right-phone-16 {
    margin-right: 160px!important;
  }

  .margin-right-phone-17 {
    margin-right: 170px!important;
  }

  .margin-right-phone-18 {
    margin-right: 180px!important;
  }

  .margin-right-phone-19 {
    margin-right: 190px!important;
  }

  .margin-right-phone-20 {
    margin-right: 200px!important;
  }

  .margin-bottom-phone-0 {
    margin-bottom: 0!important;
  }

  .margin-bottom-phone-1 {
    margin-bottom: 10px!important;
  }

  .margin-bottom-phone-2 {
    margin-bottom: 20px!important;
  }

  .margin-bottom-phone-3 {
    margin-bottom: 30px!important;
  }

  .margin-bottom-phone-4 {
    margin-bottom: 40px!important;
  }

  .margin-bottom-phone-5 {
    margin-bottom: 50px!important;
  }

  .margin-bottom-phone-6 {
    margin-bottom: 60px!important;
  }

  .margin-bottom-phone-7 {
    margin-bottom: 70px!important;
  }

  .margin-bottom-phone-8 {
    margin-bottom: 80px!important;
  }

  .margin-bottom-phone-9 {
    margin-bottom: 90px!important;
  }

  .margin-bottom-phone-10 {
    margin-bottom: 100px!important;
  }

  .margin-bottom-phone-11 {
    margin-bottom: 110px!important;
  }

  .margin-bottom-phone-12 {
    margin-bottom: 120px!important;
  }

  .margin-bottom-phone-13 {
    margin-bottom: 130px!important;
  }

  .margin-bottom-phone-14 {
    margin-bottom: 140px!important;
  }

  .margin-bottom-phone-15 {
    margin-bottom: 150px!important;
  }

  .margin-bottom-phone-16 {
    margin-bottom: 160px!important;
  }

  .margin-bottom-phone-17 {
    margin-bottom: 170px!important;
  }

  .margin-bottom-phone-18 {
    margin-bottom: 180px!important;
  }

  .margin-bottom-phone-19 {
    margin-bottom: 190px!important;
  }

  .margin-bottom-phone-20 {
    margin-bottom: 200px!important;
  }

  .margin-left-phone-0 {
    margin-left: 0!important;
  }

  .margin-left-phone-1 {
    margin-left: 10px!important;
  }

  .margin-left-phone-2 {
    margin-left: 20px!important;
  }

  .margin-left-phone-3 {
    margin-left: 30px!important;
  }

  .margin-left-phone-4 {
    margin-left: 40px!important;
  }

  .margin-left-phone-5 {
    margin-left: 50px!important;
  }

  .margin-left-phone-6 {
    margin-left: 60px!important;
  }

  .margin-left-phone-7 {
    margin-left: 70px!important;
  }

  .margin-left-phone-8 {
    margin-left: 80px!important;
  }

  .margin-left-phone-9 {
    margin-left: 90px!important;
  }

  .margin-left-phone-10 {
    margin-left: 100px!important;
  }

  .margin-left-phone-11 {
    margin-left: 110px!important;
  }

  .margin-left-phone-12 {
    margin-left: 120px!important;
  }

  .margin-left-phone-13 {
    margin-left: 130px!important;
  }

  .margin-left-phone-14 {
    margin-left: 140px!important;
  }

  .margin-left-phone-15 {
    margin-left: 150px!important;
  }

  .margin-left-phone-16 {
    margin-left: 160px!important;
  }

  .margin-left-phone-17 {
    margin-left: 170px!important;
  }

  .margin-left-phone-18 {
    margin-left: 180px!important;
  }

  .margin-left-phone-19 {
    margin-left: 190px!important;
  }

  .margin-left-phone-20 {
    margin-left: 200px!important;
  }
}

.pointer-events {
  pointer-events: all!important;
}

.disable-pointer-events {
  pointer-events: none!important;
}

.space {
  padding: 0 20px;
}

.cursorPointer,
.pointer {
  cursor: pointer;
}

.cursorZoomIn,
[data-action=zoom] {
  cursor: pointer;
  cursor: -webkit-zoom-in!important;
}

.cursorZoomOut,
.zoom-img img.zoom-img,
.zoom-img-wrap img.zoom-img {
  cursor: pointer;
  cursor: -webkit-zoom-out!important;
}

.cursorGrab {
  cursor: move;
  cursor: grab!important;
  cursor: -webkit-grab!important;
}

.cursorGrab:active {
  cursor: grabbing!important;
  cursor: -webkit-grabbing!important;
}

.pattern .background {
  background-repeat: repeat;
  background-size: auto;
}

.attachment-fixed,
.cover {
  background-size: cover!important;
}

.attachment-fixed {
  background-attachment: fixed!important;
}

.disableClick {
  pointer-events: none;
}

.disableSelect,
.disableSelect *,
.noSelect,
.noSelect * {
  -webkit-touch-callout: none!important;
  -webkit-user-select: none!important;
  -moz-user-select: none!important;
  -ms-user-select: none!important;
  user-select: none!important;
}

.enableSelect,
.enableSelect *,
.selectable,
.selectable * {
  -webkit-touch-callout: auto!important;
  -webkit-user-select: auto!important;
  -moz-user-select: auto!important;
  -ms-user-select: auto!important;
  user-select: auto!important;
}

.clearBoth:after {
  content: "";
  clear: both;
  display: table;
}

.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}

.swiper-container-no-flexbox .swiper-slide {
  float: left;
}

.swiper-container-vertical>.swiper-wrapper {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property: transform,-webkit-transform;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

.swiper-container-android .swiper-slide,
.swiper-wrapper {
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

.swiper-container-multirow>.swiper-wrapper {
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.swiper-container-free-mode>.swiper-wrapper {
  -webkit-transition-timing-function: ease-out;
  -o-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  margin: 0 auto;
}

.swiper-slide {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property: transform,-webkit-transform;
}

.swiper-slide-invisible-blank {
  visibility: hidden;
}

.swiper-container-autoheight,
.swiper-container-autoheight .swiper-slide {
  height: auto;
}

.swiper-container-autoheight .swiper-wrapper {
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-transition-property: height,-webkit-transform;
  transition-property: height,-webkit-transform;
  -o-transition-property: transform,height;
  transition-property: transform,height;
  transition-property: transform,height,-webkit-transform;
}

.swiper-container-3d {
  -webkit-perspective: 1200px;
  perspective: 1200px;
}

.swiper-container-3d .swiper-cube-shadow,
.swiper-container-3d .swiper-slide,
.swiper-container-3d .swiper-slide-shadow-bottom,
.swiper-container-3d .swiper-slide-shadow-left,
.swiper-container-3d .swiper-slide-shadow-right,
.swiper-container-3d .swiper-slide-shadow-top,
.swiper-container-3d .swiper-wrapper {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.swiper-container-3d .swiper-slide-shadow-bottom,
.swiper-container-3d .swiper-slide-shadow-left,
.swiper-container-3d .swiper-slide-shadow-right,
.swiper-container-3d .swiper-slide-shadow-top {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}

.swiper-container-3d .swiper-slide-shadow-left {
  background-image: -webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));
  background-image: -webkit-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));
  background-image: -o-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));
  background-image: linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0));
}

.swiper-container-3d .swiper-slide-shadow-right {
  background-image: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));
  background-image: -webkit-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));
  background-image: -o-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));
  background-image: linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0));
}

.swiper-container-3d .swiper-slide-shadow-top {
  background-image: -webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));
  background-image: -webkit-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));
  background-image: -o-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));
  background-image: linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0));
}

.swiper-container-3d .swiper-slide-shadow-bottom {
  background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));
  background-image: -webkit-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));
  background-image: -o-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));
  background-image: linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0));
}

.swiper-container-wp8-horizontal,
.swiper-container-wp8-horizontal>.swiper-wrapper {
  -ms-touch-action: pan-y;
  touch-action: pan-y;
}

.swiper-container-wp8-vertical,
.swiper-container-wp8-vertical>.swiper-wrapper {
  -ms-touch-action: pan-x;
  touch-action: pan-x;
}

.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: 50%;
  width: 27px;
  height: 44px;
  margin-top: -22px;
  z-index: 10;
  cursor: pointer;
  background-size: 27px 44px;
  background-position: center;
  background-repeat: no-repeat;
}

.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
  opacity: .35;
  cursor: auto;
  pointer-events: none;
}

.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3Dhttp%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%20viewBox%3D0%200%2027%2044%3E%3Cpath%20d%3DM0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z%20fill%3D%23007aff%2F%3E%3C%2Fsvg%3E");
  left: 10px;
  right: auto;
}

.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3Dhttp%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%20viewBox%3D0%200%2027%2044%3E%3Cpath%20d%3DM27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z%20fill%3D%23007aff%2F%3E%3C%2Fsvg%3E");
  right: 10px;
  left: auto;
}

.swiper-button-prev.swiper-button-white,
.swiper-container-rtl .swiper-button-next.swiper-button-white {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3Dhttp%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%20viewBox%3D0%200%2027%2044%3E%3Cpath%20d%3DM0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z%20fill%3D%23ffffff%2F%3E%3C%2Fsvg%3E");
}

.swiper-button-next.swiper-button-white,
.swiper-container-rtl .swiper-button-prev.swiper-button-white {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3Dhttp%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%20viewBox%3D0%200%2027%2044%3E%3Cpath%20d%3DM27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z%20fill%3D%23ffffff%2F%3E%3C%2Fsvg%3E");
}

.swiper-button-prev.swiper-button-black,
.swiper-container-rtl .swiper-button-next.swiper-button-black {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3Dhttp%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%20viewBox%3D0%200%2027%2044%3E%3Cpath%20d%3DM0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z%20fill%3D%23000000%2F%3E%3C%2Fsvg%3E");
}

.swiper-button-next.swiper-button-black,
.swiper-container-rtl .swiper-button-prev.swiper-button-black {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3Dhttp%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%20viewBox%3D0%200%2027%2044%3E%3Cpath%20d%3DM27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z%20fill%3D%23000000%2F%3E%3C%2Fsvg%3E");
}

.swiper-button-lock {
  display: none;
}

.swiper-pagination {
  position: absolute;
  text-align: center;
  -webkit-transition: .3s opacity;
  -o-transition: .3s opacity;
  transition: .3s opacity;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  z-index: 10;
}

.swiper-pagination.swiper-pagination-hidden {
  opacity: 0;
}

.swiper-container-horizontal>.swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 10px;
  left: 0;
  width: 100%;
}

.swiper-pagination-bullets-dynamic {
  overflow: hidden;
  font-size: 0;
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  -webkit-transform: scale(.33);
  -ms-transform: scale(.33);
  transform: scale(.33);
  position: relative;
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
  -webkit-transform: scale(.66);
  -ms-transform: scale(.66);
  transform: scale(.66);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
  -webkit-transform: scale(.33);
  -ms-transform: scale(.33);
  transform: scale(.33);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
  -webkit-transform: scale(.66);
  -ms-transform: scale(.66);
  transform: scale(.66);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
  -webkit-transform: scale(.33);
  -ms-transform: scale(.33);
  transform: scale(.33);
}

.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background: #000;
  opacity: .2;
}

button.swiper-pagination-bullet {
  border: none;
  margin: 0;
  padding: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer;
}

.swiper-pagination-bullet-active {
  opacity: 1;
  background: #007aff;
}

.swiper-container-vertical>.swiper-pagination-bullets {
  right: 10px;
  top: 50%;
  -webkit-transform: translate3d(0,-50%,0);
  transform: translate3d(0,-50%,0);
}

.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 6px 0;
  display: block;
}

.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 8px;
}

.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  display: inline-block;
  -webkit-transition: .2s top,.2s -webkit-transform;
  transition: .2s top,.2s -webkit-transform;
  -o-transition: .2s transform,.2s top;
  transition: .2s transform,.2s top;
  transition: .2s transform,.2s top,.2s -webkit-transform;
}

.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 4px;
}

.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  white-space: nowrap;
}

.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  -webkit-transition: .2s left,.2s -webkit-transform;
  transition: .2s left,.2s -webkit-transform;
  -o-transition: .2s transform,.2s left;
  transition: .2s transform,.2s left;
  transition: .2s transform,.2s left,.2s -webkit-transform;
}

.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  -webkit-transition: .2s right,.2s -webkit-transform;
  transition: .2s right,.2s -webkit-transform;
  -o-transition: .2s transform,.2s right;
  transition: .2s transform,.2s right;
  transition: .2s transform,.2s right,.2s -webkit-transform;
}

.swiper-pagination-progressbar {
  background: rgba(0,0,0,.25);
  position: absolute;
}

.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background: #007aff;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  -webkit-transform-origin: left top;
  -ms-transform-origin: left top;
  transform-origin: left top;
}

.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  -webkit-transform-origin: right top;
  -ms-transform-origin: right top;
  transform-origin: right top;
}

.swiper-container-horizontal>.swiper-pagination-progressbar,
.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
  width: 100%;
  height: 4px;
  left: 0;
  top: 0;
}

.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
.swiper-container-vertical>.swiper-pagination-progressbar {
  width: 4px;
  height: 100%;
  left: 0;
  top: 0;
}

.swiper-pagination-white .swiper-pagination-bullet-active {
  background: #fff;
}

.swiper-pagination-progressbar.swiper-pagination-white {
  background: rgba(255,255,255,.25);
}

.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill {
  background: #fff;
}

.swiper-pagination-black .swiper-pagination-bullet-active {
  background: #000;
}

.swiper-pagination-progressbar.swiper-pagination-black {
  background: rgba(0,0,0,.25);
}

.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill {
  background: #000;
}

.swiper-pagination-lock {
  display: none;
}

.swiper-scrollbar {
  border-radius: 10px;
  position: relative;
  touch-action: none;
  background: rgba(0,0,0,.1);
}

.swiper-container-horizontal>.swiper-scrollbar {
  position: absolute;
  left: 1%;
  bottom: 3px;
  z-index: 50;
  height: 5px;
  width: 98%;
}

.swiper-container-vertical>.swiper-scrollbar {
  position: absolute;
  right: 3px;
  top: 1%;
  z-index: 50;
  width: 5px;
  height: 98%;
}

.swiper-scrollbar-drag {
  height: 100%;
  width: 100%;
  position: relative;
  background: rgba(0,0,0,.5);
  border-radius: 10px;
  left: 0;
  top: 0;
}

.swiper-scrollbar-cursor-drag {
  cursor: move;
}

.swiper-scrollbar-lock {
  display: none;
}

.swiper-zoom-container {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
}

.swiper-zoom-container>canvas,
.swiper-zoom-container>img,
.swiper-zoom-container>svg {
  max-width: 100%;
  max-height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
}

.swiper-slide-zoomed {
  cursor: move;
}

.swiper-lazy-preloader {
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -21px;
  margin-top: -21px;
  z-index: 10;
  -webkit-transform-origin: 50%;
  -ms-transform-origin: 50%;
  transform-origin: 50%;
  -webkit-animation: swiper-preloader-spin 1s steps(12,end) infinite;
  animation: swiper-preloader-spin 1s steps(12,end) infinite;
}

.swiper-lazy-preloader:after {
  display: block;
  content: "";
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}

@-webkit-keyframes swiper-preloader-spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes swiper-preloader-spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.swiper-container .swiper-notification {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  opacity: 0;
  z-index: -1000;
}

.swiper-container-fade.swiper-container-free-mode .swiper-slide {
  -webkit-transition-timing-function: ease-out;
  -o-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.swiper-container-fade .swiper-slide {
  pointer-events: none;
  -webkit-transition-property: opacity;
  -o-transition-property: opacity;
  transition-property: opacity;
}

.swiper-container-fade .swiper-slide .swiper-slide {
  pointer-events: none;
}

.swiper-container-fade .swiper-slide-active,
.swiper-container-fade .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}

.swiper-container-cube {
  overflow: visible;
}

.swiper-container-cube .swiper-slide {
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 1;
  visibility: hidden;
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
  width: 100%;
  height: 100%;
}

.swiper-container-cube .swiper-slide .swiper-slide {
  pointer-events: none;
}

.swiper-container-cube.swiper-container-rtl .swiper-slide {
  -webkit-transform-origin: 100% 0;
  -ms-transform-origin: 100% 0;
  transform-origin: 100% 0;
}

.swiper-container-cube .swiper-slide-active,
.swiper-container-cube .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}

.swiper-container-cube .swiper-slide-active,
.swiper-container-cube .swiper-slide-next,
.swiper-container-cube .swiper-slide-next+.swiper-slide,
.swiper-container-cube .swiper-slide-prev {
  pointer-events: auto;
  visibility: visible;
}

.swiper-container-cube .swiper-slide-shadow-bottom,
.swiper-container-cube .swiper-slide-shadow-left,
.swiper-container-cube .swiper-slide-shadow-right,
.swiper-container-cube .swiper-slide-shadow-top {
  z-index: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.swiper-container-cube .swiper-cube-shadow {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: .6;
  -webkit-filter: blur(50px);
  filter: blur(50px);
  z-index: 0;
}

.swiper-container-flip {
  overflow: visible;
}

.swiper-container-flip .swiper-slide {
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 1;
}

.swiper-container-flip .swiper-slide .swiper-slide {
  pointer-events: none;
}

.swiper-container-flip .swiper-slide-active,
.swiper-container-flip .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}

.swiper-container-flip .swiper-slide-shadow-bottom,
.swiper-container-flip .swiper-slide-shadow-left,
.swiper-container-flip .swiper-slide-shadow-right,
.swiper-container-flip .swiper-slide-shadow-top {
  z-index: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.swiper-container-coverflow .swiper-wrapper {
  perspective: 1200px;
}

@charset "UTF-8";

a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
hr,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  border: 0;
  vertical-align: baseline;
  margin: 0;
  padding: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

li,
ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:after,
blockquote:before,
q:after,
q:before {
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

b,
strong {
  font-weight: 600;
}

html {
  position: static!important;
  top: 0!important;
  box-sizing: border-box;
}

*,
:after,
:before {
  box-sizing: inherit;
}

html {
  margin: 0;
  padding: 0;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

body {
  position: absolute;
  width: 100%;
  height: 100%;
}

body,
html {
  max-width: 100%;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
}

html.scrollable,
html.scrollable body {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

img {
  max-width: 100%;
  display: inline-block;
}

img.round {
  border-radius: 999px;
}

img.rounded {
  border-radius: 6px;
}

.slides {
  color: #fff;
  fill: #fff;
  font-family: Roboto,sans-serif;
  hyphens: none;
  background: #111;
  -webkit-font-smoothing: antialiased;
}

.slides.bodyWhite {
  background: #fff;
}

.slides.desktopSwipe {
  cursor: -webkit-grab;
}

.slides.desktopSwipe:active {
  cursor: -webkit-grabbing;
}

.slides.desktopSwipe .slide .container .wrap {
  cursor: inherit;
}

a {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  transition: .35s;
}

a.underline {
  text-decoration: underline;
}

a:hover {
  transition: .15s;
  opacity: .8;
}

.h1,
h1 {
  font-size: 70px;
  line-height: 1.285;
  font-weight: 300;
  margin-bottom: 20px;
  letter-spacing: -.036em;
}

.h1.big,
h1.big {
  font-size: 58px;
  line-height: 1;
  font-weight: 100;
}

.h1.huge,
h1.huge {
  font-size: 64px;
  line-height: 1.218751;
  letter-spacing: -.04em;
  margin-bottom: 40px;
  font-weight: 100;
}

.h1.small,
h1.small {
  font-size: 46px;
}

.h1.micro,
h1.micro {
  font-size: 34px;
}

.h2,
h2 {
  font-size: 35px;
  line-height: 1.17;
  margin-bottom: 15px;
  font-weight: 400;
}

.h2.uppercase,
h2.uppercase {
  letter-spacing: .2em!important;
}

.h2.small,
h2.small {
  font-size: 28px;
}

.h2.micro,
h2.micro {
  font-size: 19px;
}

.h2.huge,
h2.huge {
  font-size: 42px;
}

.h3,
h3 {
  font-size: 20px;
  margin-bottom: 12px;
  font-weight: 400;
}

.h3.large,
h3.large {
  font-size: 32px;
}

.h3.big,
h3.big {
  font-size: 24px;
}

.h3.small,
h3.small {
  font-size: 20px;
}

.h3.micro,
h3.micro {
  font-size: 16px;
}

.h3+.h1,
.h3+h1,
h3+.h1,
h3+h1 {
  margin-top: 30px;
}

.h4,
h4 {
  font-size: 18px;
  margin-bottom: 10px;
}

.h5,
h5 {
  font-size: 16px;
}

.h6,
h6 {
  font-size: 14px;
}

.p,
blockquote,
p {
  font-size: 22px;
  line-height: 1.6363636364;
  margin-bottom: 30px;
  font-weight: 300;
}

.p.hero,
blockquote.hero,
p.hero {
  font-size: 28px;
  line-height: 1.5;
  margin-bottom: 25px;
}

.p.large,
blockquote.large,
p.large {
  font-size: 32px;
  line-height: 1.4;
}

.p.small,
blockquote.small,
p.small {
  font-size: 18px;
  line-height: 1.36;
  margin-bottom: 20px;
}

.p.tiny,
blockquote.tiny,
p.tiny {
  font-size: 16px;
  line-height: 1.625;
  margin-bottom: 12px;
  font-weight: 400;
}

.p.micro,
blockquote.micro,
p.micro {
  font-size: 14px;
  line-height: 1.5714;
  margin-bottom: 20px;
  margin-top: 2px;
}

blockquote {
  padding-left: 2em;
  border-left: 2px solid;
}

small {
  font-size: 17px;
  line-height: 1.3;
}

small .small {
  font-size: 14px;
  line-height: 1.28;
}

.list.circle li {
  list-style-type: circle;
}

.list.disc li {
  list-style-type: disc;
}

.list.square li {
  list-style-type: square;
}

@media (max-width:1023px) {
  .h1,
  .h1.big,
  .h1.huge,
  h1,
  h1.big,
  h1.huge {
    font-size: 40px;
    margin-bottom: 20px;
  }

  p.hero {
    font-size: 22px;
  }

  .h1.small,
  h1.small {
    font-size: 32px;
  }

  .mobileCrop {
    margin: 0!important;
  }

  .mobileCropBottom {
    margin-bottom: 0!important;
  }

  .mobileCropTop {
    margin-top: 0!important;
  }

  .mobileCropLeft {
    margin-left: 0!important;
  }

  .mobileCropRight {
    margin-right: 0!important;
  }
}

@media (max-width:319px) {
  .h1.big,
  .h1.huge,
  h1.big,
  h1.huge {
    font-size: 32px;
  }
}

.button {
  display: inline-block;
  border-radius: 4px;
  padding: 16px 24px 17px;
  color: #fff;
  border: none;
  outline: 0;
  text-decoration: none;
  background: #202020;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  vertical-align: top;
  cursor: pointer;
  overflow: hidden;
  backface-visibility: hidden;
  letter-spacing: normal!important;
  position: relative;
  white-space: nowrap;
  transform: translate3d(0,0,0);
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
  -webkit-appearance: none;
  margin-bottom: 10px;
  transition: .3s;
  user-select: none!important;
}

.popup .button,
.slide .button {
  margin-left: 5px;
  margin-right: 5px;
}

.popup .button.small,
.slide .button.small {
  margin-left: 4px;
  margin-right: 4px;
}

.button.wide {
  margin-left: 0!important;
  margin-right: 0!important;
}

.button .material-icons {
  vertical-align: bottom;
  margin-top: -5px;
  margin-bottom: -2px;
  margin-right: 8px;
  user-select: none!important;
}

.button .material-icons.small {
  font-size: 18px;
  margin: 0 6px 0 0;
}

.button .material-icons.right {
  margin-left: 11px;
  margin-right: 0;
}

.button svg {
  width: 22px;
  height: 22px;
  margin-top: -3px;
  top: 2px;
  vertical-align: bottom;
  margin-right: 14px;
  pointer-events: none!important;
  position: relative;
}

.button svg * {
  pointer-events: none!important;
}

.button svg.right {
  margin-right: 0;
  margin-left: 14px;
}

.button.actionButton {
  display: inline-block;
  height: 42px;
  width: 42px;
  padding: 12px;
  border-radius: 25px;
  z-index: 999;
  background: rgba(0,0,0,.3);
  line-height: 1;
  box-shadow: 0 0 0 1px rgba(255,255,255,.05);
  cursor: pointer;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  vertical-align: top;
}

.button.actionButton svg {
  width: 18px;
  height: 18px;
}

.button.actionButton .material-icons {
  margin: 0;
  position: relative;
  left: -3px;
  top: -3px;
  font-size: 24px;
}

.button.actionButton.big {
  width: 50px;
  height: 50px;
  padding: 16px;
}

.button.actionButton.big .material-icons {
  font-size: 24px;
}

.button.actionButton.big svg {
  width: 22px;
  height: 22px;
  left: -2px;
  top: 0;
}

.button.actionButton.stroke {
  box-shadow: none;
  padding: 10px;
}

.button.actionButton:hover:not(:active) {
  transform: translateY(0)!important;
}

.button.actionButton.rounded {
  border-radius: 6px;
}

.button.actionButton svg,
.slide.whiteSlide .button.actionButton svg {
  fill: #fff;
}

.button.actionButton.sound [class*=sound-] {
  position: absolute;
  opacity: 0;
  transition: .5s;
  left: 13px;
  top: 16px;
}

.button.actionButton.sound.stroke [class*=sound-] {
  left: 11px;
  top: 14px;
}

.button.actionButton.sound.playing .sound-on,
.button.actionButton.sound:not(.playing) .sound-off {
  opacity: 1;
}

.button.actionButton.transparent {
  background-color: transparent;
}

.button:hover {
  box-shadow: 0 6px 7px 0 rgba(0,0,0,.15),0 0 5px 0 rgba(0,0,0,.1);
  opacity: 1;
  transform: translateY(-2px)!important;
  transition: .35s!important;
}

.button:hover:after {
  opacity: .5;
}

.button:active {
  box-shadow: 0 3px 6px 0 rgba(0,0,0,.1),0 0 10px 0 rgba(0,0,0,.1),0 1px 4px -1px rgba(0,0,0,.1);
  transform: translateY(0)!important;
  transition: .35s!important;
}

.button:active:after {
  opacity: 1;
}

.button.uppercase {
  font-size: 15px;
  font-weight: 700;
  padding-top: 17px;
  padding-bottom: 17px;
}

.button.lowercase {
  text-transform: lowercase;
  letter-spacing: 0;
  font-weight: 300;
}

.button.round {
  border-radius: 99px;
  padding-left: 28px;
  padding-right: 28px;
}

.button.rounded {
  border-radius: 6px;
}

.button.rectangular {
  border-radius: 1px;
}

.button.square {
  border-radius: 0;
}

.button.thin-stroke {
  color: #202020;
  font-weight: 300;
  border: 1px solid;
  background-color: transparent!important;
  padding: 14px 22px 15px;
}

.slide.whiteSlide .button.thin-stroke {
  color: #202020;
}

.button.stroke {
  color: #202020;
  border: 2px solid;
  background-color: transparent!important;
  padding: 14px 22px 15px;
}

.slide.whiteSlide .button.stroke {
  color: #202020;
}

.button.stroke.round {
  padding-left: 26px;
  padding-right: 26px;
}

.button.stroke.uppercase {
  padding-top: 15px;
  padding-bottom: 15px;
}

.button.stroke.uppercase svg {
  margin-bottom: -2px;
}

.button.stroke.uppercase.small {
  padding: 11px 15px;
}

.button.stroke.small {
  border: 1px solid;
  padding-top: 9px;
  padding-bottom: 9px;
}

@media (min-width:768px) {
  .button.stroke.big {
    padding: 19px 30px;
  }

  .button.stroke.big.uppercase {
    padding-top: 21px;
    padding-bottom: 21px;
  }
}

.button.stroke:not(.flat):hover {
  box-shadow: inset 0 -100px 0 rgba(41,41,41,.05),0 4px 6px 0 rgba(0,0,0,.1),0 1px 10px 0 rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.1);
}

.button.flat:not(:hover) {
  box-shadow: none;
}

.button:not(.stroke) svg {
  fill: #fff;
}

.button.small {
  font-size: 15px;
  font-weight: 500;
  padding: 10px 16px 10px;
}

.button.small .material-icons {
  vertical-align: bottom;
  position: relative;
  font-size: 20px;
  margin-right: 8px;
  bottom: 1px;
}

.button.small .material-icons.right {
  margin-left: 8px;
  margin-right: 0;
}

.button.small svg {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  top: 0;
}

.button.small svg.right {
  margin-right: 0;
  margin-left: 10px;
}

.button.small.round {
  padding-left: 18px;
  padding-right: 18px;
}

.button.small.rounded {
  border-radius: 6px;
}

.button.small.uppercase {
  font-size: 12px;
  padding: 12px 16px;
  letter-spacing: .125em;
}

.button.small.uppercase.round {
  padding-left: 19px;
  padding-right: 19px;
}

@media (min-width:768px) {
  .button.big {
    font-size: 20px;
    padding: 21px 32px 21px;
  }

  .button.big.round {
    padding-left: 36px;
    padding-right: 36px;
  }

  .button.big.rounded {
    border-radius: 7px;
  }

  .button.big.uppercase {
    font-size: 17px;
    padding: 23px 32px;
  }

  .button.big.uppercase.round {
    padding-left: 36px;
    padding-right: 36px;
  }

  .button.big .material-icons {
    vertical-align: bottom;
    margin-right: 16px;
    font-size: 30px;
  }

  .button.big .material-icons.right {
    margin-left: 16px;
    margin-right: 0;
  }

  .button.big svg {
    width: 27px;
    height: 27px;
    margin-right: 16px;
    top: 1px;
  }

  .button.big svg.right {
    margin-right: 0;
    margin-left: 16px;
  }
}

.button.empty {
  padding: 0!important;
  background-color: transparent!important;
  font-size: 0!important;
  margin: 0;
  box-shadow: none;
}

.button.hollow {
  padding: 0!important;
  background-color: transparent!important;
  font-size: 0!important;
  box-shadow: none!important;
}

.button.hollow svg {
  margin: 0;
}

.button.shade {
  position: relative;
}

.button.shade:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #292929;
  opacity: 0;
  transition: .25s;
}

.button.shade:hover:after {
  opacity: .15;
}

.button.shade:active:after {
  opacity: .2;
}

.button.play {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  padding: 27px;
  margin-left: 0;
  margin-right: 0;
}

.button.play svg {
  fill: #fff;
  width: 35px;
  height: 36px;
  margin: 0;
}

.button.play.small {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 20px 19px;
}

.button.play.small svg {
  fill: #fff;
  width: 23px;
  height: 23px;
}

.button.play:hover {
  transform: scale(1.05);
}

.button.gradient {
  position: relative;
}

.button.gradient:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: -webkit-gradient(linear,left top,left bottom,from(#fff),to(#000));
  background: linear-gradient(to bottom,#fff 0,#000 100%);
  z-index: -1;
  opacity: .1;
}

.slide.whiteSlide .button.white:hover {
  box-shadow: 0 4px 6px 0 rgba(0,0,0,.1),0 1px 10px 0 rgba(0,0,0,.1);
}

.slide.whiteSlide .button.white:hover:after {
  opacity: .3;
}

.roundButton {
  border-radius: 50px;
  height: 50px;
  width: 50px;
  padding: 14px;
  margin: 5px;
}

.roundButton svg {
  bottom: 2px;
}

@media (max-width:319px) {
  .button.uppercase,
  .uppercase {
    letter-spacing: .07em;
  }
}

.button.uppercase,
.h1.uppercase,
.h2.uppercase,
.h3.uppercase,
.h4.uppercase,
.p.uppercase,
h1.uppercase,
h2.uppercase,
h3.uppercase,
h4.uppercase,
h5.uppercase,
p.uppercase {
  letter-spacing: .125em!important;
  text-indent: -.1em!important;
  font-weight: 700!important;
}

.material-icons {
  font-family: "Material Icons";
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: "liga";
}

.material-icons.md-18 {
  font-size: 18px;
}

.material-icons.md-24 {
  font-size: 24px;
}

.material-icons.md-36 {
  font-size: 36px;
}

.material-icons.md-48 {
  font-size: 48px;
}

.slide.whiteSlide svg {
  fill: #202020;
}

.embedContainer,
.svgContainer {
  position: relative;
  width: 100%;
  height: 0;
  padding: 0;
}

.embedContainer .scale,
.svgContainer svg.scale {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.dots {
  font-size: 0;
}

.dot {
  padding: 7px;
  display: inline-block;
}

.dot:after {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  opacity: .5;
  transition: .25s;
}

.dot.big .dot:after {
  width: 14px;
  height: 14px;
}

.slide.whiteSlide .dot:after {
  background: #202020;
}

.dot:hover:after {
  transform: scale(1.333333);
  opacity: 1;
}

.dot.selected:after,
.dot:active:after {
  opacity: 1;
  transform: scale(1.675);
}

.tabs {
  color: #fff;
  max-width: 260px;
  border-radius: 5px;
}

.tabs li {
  padding: 16px 20px;
  letter-spacing: 2.5px;
  font-size: 12px;
  transition: .15s;
  margin-top: -1px;
  border: 1px solid rgba(255,255,255,.3);
}

.tabs li:not(:last-child) {
  border-bottom: 0;
}

.tabs li:first-child {
  border-radius: 4px 4px 0 0;
}

.tabs li:last-child {
  border-radius: 0 0 4px 4px;
}

.tabs li.selected {
  background: #fff;
  color: #202020;
}

.slide.whiteSlide .tabs li {
  border-color: #e5e5e5;
  color: #202020;
}

.slide.whiteSlide .tabs li.selected {
  background: #202020;
  border-color: #202020;
  color: #fff;
}

.links li {
  font-size: 17px;
  letter-spacing: 0;
  padding: 4px 0;
}

.slides-form {
  font-size: 0;
  margin-top: -5px;
  font-family: inherit;
}

.slides-form button {
  font-family: inherit;
}

.slides-form textarea {
  max-height: 200px;
  max-width: 100%;
  min-height: 130px;
}

.slides-form textarea.d {
  border-radius: 15px!important;
}

.slides-form .label,
.slides-form label {
  display: block;
  font-size: 14px;
  margin-top: 12px;
  margin-bottom: 2px;
}

.slides-form .label.uppercase,
.slides-form label.uppercase {
  font-size: 14px;
}

.slides-form input[type=email],
.slides-form input[type=name],
.slides-form input[type=number],
.slides-form input[type=password],
.slides-form input[type=tel],
.slides-form input[type=text],
.slides-form select,
.slides-form textarea {
  font-family: inherit;
  background-color: #fff;
  position: relative;
  background: #fff;
  padding: 15px 16px 16px;
  border: none;
  font-size: 16px;
  color: #242424;
  outline: 0;
  border-radius: 4px;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid rgba(0,0,0,.1);
  transition: .15s;
}

.slides-form input[type=email].flat,
.slides-form input[type=email]:focus,
.slides-form input[type=name].flat,
.slides-form input[type=name]:focus,
.slides-form input[type=number].flat,
.slides-form input[type=number]:focus,
.slides-form input[type=password].flat,
.slides-form input[type=password]:focus,
.slides-form input[type=tel].flat,
.slides-form input[type=tel]:focus,
.slides-form input[type=text].flat,
.slides-form input[type=text]:focus,
.slides-form select.flat,
.slides-form select:focus,
.slides-form textarea.flat,
.slides-form textarea:focus {
  border-color: rgba(0,0,0,.2);
}

.slides-form input[type=email]:hover,
.slides-form input[type=name]:hover,
.slides-form input[type=number]:hover,
.slides-form input[type=password]:hover,
.slides-form input[type=tel]:hover,
.slides-form input[type=text]:hover,
.slides-form select:hover,
.slides-form textarea:hover {
  border-color: rgba(0,0,0,.2);
}

.slides-form input[type=email]:focus,
.slides-form input[type=name]:focus,
.slides-form input[type=number]:focus,
.slides-form input[type=password]:focus,
.slides-form input[type=tel]:focus,
.slides-form input[type=text]:focus,
.slides-form select:focus,
.slides-form textarea:focus {
  border-color: #2196f3;
  z-index: 10;
}

.slides-form input[type=email]:focus::-webkit-input-placeholder,
.slides-form input[type=name]:focus::-webkit-input-placeholder,
.slides-form input[type=number]:focus::-webkit-input-placeholder,
.slides-form input[type=password]:focus::-webkit-input-placeholder,
.slides-form input[type=tel]:focus::-webkit-input-placeholder,
.slides-form input[type=text]:focus::-webkit-input-placeholder,
.slides-form select:focus::-webkit-input-placeholder,
.slides-form textarea:focus::-webkit-input-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: 0;
}

.slides-form input[type=email]:focus:-moz-placeholder,
.slides-form input[type=name]:focus:-moz-placeholder,
.slides-form input[type=number]:focus:-moz-placeholder,
.slides-form input[type=password]:focus:-moz-placeholder,
.slides-form input[type=tel]:focus:-moz-placeholder,
.slides-form input[type=text]:focus:-moz-placeholder,
.slides-form select:focus:-moz-placeholder,
.slides-form textarea:focus:-moz-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: 0;
}

.slides-form input[type=email]:focus::-moz-placeholder,
.slides-form input[type=name]:focus::-moz-placeholder,
.slides-form input[type=number]:focus::-moz-placeholder,
.slides-form input[type=password]:focus::-moz-placeholder,
.slides-form input[type=tel]:focus::-moz-placeholder,
.slides-form input[type=text]:focus::-moz-placeholder,
.slides-form select:focus::-moz-placeholder,
.slides-form textarea:focus::-moz-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: 0;
}

.slides-form input[type=email]:focus:-ms-input-placeholder,
.slides-form input[type=name]:focus:-ms-input-placeholder,
.slides-form input[type=number]:focus:-ms-input-placeholder,
.slides-form input[type=password]:focus:-ms-input-placeholder,
.slides-form input[type=tel]:focus:-ms-input-placeholder,
.slides-form input[type=text]:focus:-ms-input-placeholder,
.slides-form select:focus:-ms-input-placeholder,
.slides-form textarea:focus:-ms-input-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: 0;
}

.slides-form input[type=email].round,
.slides-form input[type=name].round,
.slides-form input[type=number].round,
.slides-form input[type=password].round,
.slides-form input[type=tel].round,
.slides-form input[type=text].round,
.slides-form select.round,
.slides-form textarea.round {
  border-radius: 50px;
  padding-left: 22px;
  padding-right: 22px;
}

.slides-form input[type=email].rounded,
.slides-form input[type=name].rounded,
.slides-form input[type=number].rounded,
.slides-form input[type=password].rounded,
.slides-form input[type=tel].rounded,
.slides-form input[type=text].rounded,
.slides-form select.rounded,
.slides-form textarea.rounded {
  border-radius: 6px;
}

.slides-form input[type=email]:after,
.slides-form input[type=name]:after,
.slides-form input[type=number]:after,
.slides-form input[type=password]:after,
.slides-form input[type=tel]:after,
.slides-form input[type=text]:after,
.slides-form select:after,
.slides-form textarea:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
}

@media (min-width:768px) {
  .slides-form input[type=email],
  .slides-form input[type=name],
  .slides-form input[type=number],
  .slides-form input[type=password],
  .slides-form input[type=tel],
  .slides-form input[type=text],
  .slides-form select,
  .slides-form textarea {
    max-width: 300px;
  }
}

.slides-form input[type=email]::-webkit-input-placeholder,
.slides-form input[type=name]::-webkit-input-placeholder,
.slides-form input[type=number]::-webkit-input-placeholder,
.slides-form input[type=password]::-webkit-input-placeholder,
.slides-form input[type=tel]::-webkit-input-placeholder,
.slides-form input[type=text]::-webkit-input-placeholder,
.slides-form select::-webkit-input-placeholder,
.slides-form textarea::-webkit-input-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: .5;
}

.slides-form input[type=email]:-moz-placeholder,
.slides-form input[type=name]:-moz-placeholder,
.slides-form input[type=number]:-moz-placeholder,
.slides-form input[type=password]:-moz-placeholder,
.slides-form input[type=tel]:-moz-placeholder,
.slides-form input[type=text]:-moz-placeholder,
.slides-form select:-moz-placeholder,
.slides-form textarea:-moz-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: .5;
}

.slides-form input[type=email]::-moz-placeholder,
.slides-form input[type=name]::-moz-placeholder,
.slides-form input[type=number]::-moz-placeholder,
.slides-form input[type=password]::-moz-placeholder,
.slides-form input[type=tel]::-moz-placeholder,
.slides-form input[type=text]::-moz-placeholder,
.slides-form select::-moz-placeholder,
.slides-form textarea::-moz-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: .5;
}

.slides-form input[type=email]:-ms-input-placeholder,
.slides-form input[type=name]:-ms-input-placeholder,
.slides-form input[type=number]:-ms-input-placeholder,
.slides-form input[type=password]:-ms-input-placeholder,
.slides-form input[type=tel]:-ms-input-placeholder,
.slides-form input[type=text]:-ms-input-placeholder,
.slides-form select:-ms-input-placeholder,
.slides-form textarea:-ms-input-placeholder {
  color: #242424;
  font-weight: 400;
  opacity: .5;
}

.slides-form textarea {
  font-weight: 400;
}

.slides-form textarea.round {
  border-radius: 25px;
}

.slides-form select {
  background-image: url("data:image/svg+xml;charset=UTF-8,<svg xmlns=http://www.w3.org/2000/svg width=37 height=7><path fill=#303030 d=M14.022 0l5.978 6 6-6z	/></svg>");
  background-repeat: no-repeat;
  background-position: right;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.slides-form button[type=submit],
.slides-form input[type=email],
.slides-form input[type=name],
.slides-form input[type=number],
.slides-form input[type=password],
.slides-form input[type=submit],
.slides-form input[type=tel],
.slides-form input[type=text],
.slides-form select,
.slides-form textarea {
  margin: 5px;
}

@media (max-width:768px) {
  .slides-form button[type=submit],
  .slides-form input[type=email],
  .slides-form input[type=name],
  .slides-form input[type=number],
  .slides-form input[type=password],
  .slides-form input[type=submit],
  .slides-form input[type=tel],
  .slides-form input[type=text],
  .slides-form select,
  .slides-form textarea {
    margin-left: auto!important;
    margin-right: auto!important;
    width: 100%;
    display: block!important;
  }
}

.slides-form button[type=submit].wide,
.slides-form input[type=email].wide,
.slides-form input[type=name].wide,
.slides-form input[type=number].wide,
.slides-form input[type=password].wide,
.slides-form input[type=submit].wide,
.slides-form input[type=tel].wide,
.slides-form input[type=text].wide,
.slides-form label.wide,
.slides-form select.wide,
.slides-form textarea.wide {
  max-width: 100%;
  width: 100%;
  margin-left: 0!important;
  margin-right: 0!important;
}

@media (min-width:769px) {
  .slides-form input.pair {
    width: 50%!important;
    max-width: 50%!important;
    border-top-right-radius: 0!important;
    border-bottom-right-radius: 0!important;
    margin-left: 0;
    margin-right: 0;
  }

  .slides-form input.pair+.pair {
    border-top-left-radius: 0!important;
    border-bottom-left-radius: 0!important;
    border-top-right-radius: 4px!important;
    border-bottom-right-radius: 4px!important;
    width: calc(50% + 1px)!important;
    max-width: calc(50% + 1px)!important;
    margin-left: -1px;
  }
}

.slides-form.center input,
.slides-form.center textarea {
  text-align: center;
}

.slide {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #202020;
  color: #fff;
  z-index: 10;
  overflow: hidden;
}

.slide.active {
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.mobile .slide {
  visibility: hidden;
}

.mobile .slide.active {
  visibility: visible;
}

.slide.whiteSlide {
  color: #202020;
  background: #fff;
}

.content {
  overflow: hidden;
  position: absolute;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  -webkit-overflow-scrolling: touch;
}

.content.scrollBar {
  overflow-y: auto;
}

.windows .defaultScroll .content {
  overflow: auto;
  overflow-x: hidden;
}

.mobile .content {
  overflow: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

.fade .content {
  background: rgba(0,0,0,.6);
}

.fade-1 .content {
  background: rgba(0,0,0,.1);
}

.fade-2 .content {
  background: rgba(0,0,0,.2);
}

.fade-3 .content {
  background: rgba(0,0,0,.3);
}

.fade-4 .content {
  background: rgba(0,0,0,.4);
}

.fade-5 .content {
  background: rgba(0,0,0,.5);
}

.fade-6 .content {
  background: rgba(0,0,0,.6);
}

.fade-7 .content {
  background: rgba(0,0,0,.7);
}

.fade-8 .content {
  background: rgba(0,0,0,.8);
}

.fade-9 .content {
  background: rgba(0,0,0,.9);
}

.whiteSlide[class*=fade] .content {
  background: rgba(255,255,255,.85);
}

.container {
  display: table;
  table-layout: fixed;
  position: relative;
  width: 100%;
  height: 100%;
}

.container .wrap {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
}

.container .wrap .spaceWrap,
.container .wrap.spaceWrap,
.container .wrap:not(.noSpaces) {
  padding: 120px calc(8% + 15px);
}

.container .wrap .overflowHidden {
  overflow: hidden;
}

.container .wrap * {
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
}

.popup .background,
.slide .background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.popup .background iframe,
.slide .background iframe {
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
}

.popup:not(.youtube) .background iframe,
.slide:not(.youtube) .background iframe {
  width: 100%;
  height: 100%;
}

.fix-1-12 {
  max-width: 93px!important;
}

.fix-2-12 {
  max-width: 186px!important;
}

.fix-3-12 {
  max-width: 279px!important;
}

.fix-4-12 {
  max-width: 371px!important;
}

.fix-5-12 {
  max-width: 464px!important;
}

.fix-6-12 {
  max-width: 557px!important;
}

.fix-7-12 {
  max-width: 650px!important;
}

.fix-8-12 {
  max-width: 743px!important;
}

.fix-9-12 {
  max-width: 836px!important;
}

.fix-10-12 {
  max-width: 928px!important;
}

.fix-11-12 {
  max-width: 1021px!important;
}

.fix-12-12 {
  max-width: 1114px!important;
}

[class*=fix-] {
  width: 100%!important;
  margin-left: auto!important;
  margin-right: auto!important;
  float: none;
}

.toLeft,
.toLeft[class*=fix-] {
  margin-left: 0!important;
  margin-right: auto!important;
}

.toRight,
.toRight[class*=fix-] {
  margin-right: 0!important;
  margin-left: auto!important;
  float: right;
}

.toCenter {
  margin-left: auto!important;
  margin-right: auto!important;
}

.dropdownTrigger,
.popupTrigger,
.sidebarTrigger {
  cursor: pointer;
}

.shiftImage {
  margin-top: -15%;
  margin-bottom: -100%;
}

.shiftImageVertical {
  margin-right: -100%;
  max-width: none;
}

.slide.video .background {
  overflow: hidden;
}

.slide.video .background video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  transform: translateX(-50%) translateY(-50%);
  background-size: cover;
}

.slide.video .background video::-webkit-media-controls {
  display: none!important;
}

.slide.video .background video::-webkit-media-controls-panel {
  display: none!important;
  -webkit-appearance: none;
}

.slide.video .background video::-webkit-media-controls-start-playback-button {
  display: none!important;
  -webkit-appearance: none;
}

html:not(.mobile) .slide.video .background[style] {
  background: 0 0!important;
}

.mobile .slide.video .background[style] video {
  display: none;
}

.videoThumbnail {
  cursor: pointer;
  position: relative;
  font-size: 0;
  overflow: hidden;
  line-height: 0;
}

.videoThumbnail.rounded {
  border-radius: 6px;
}

.videoThumbnail:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url("../assets/svg/video-icon.svg") no-repeat;
  background-position: center center;
  transition: .5s;
}

.videoThumbnail:not(.noTint):hover:after {
  background-color: rgba(0,0,0,.15);
}

.videoThumbnail:hover:before {
  transform: scale(1.1);
  transition: .25s;
}

.videoThumbnail:active:before {
  opacity: .8;
}

.videoThumbnail.small {
  max-width: 200px;
  display: block;
}

.videoThumbnail.small:before {
  background-size: 44px;
}

.button.empty.shadow:hover,
.shadow {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
}

.pad {
  border-radius: 6px;
  padding: 10%;
  color: #202020;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.1);
}

.pad.shadow {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
}

.pad.shadow.stroke {
  background: 0 0;
  transition: .15s;
  color: #fff;
}

.pad.shadow.stroke:hover {
  background: #fff;
  color: #202020;
  transition: .15s;
}

.pad.shadowHover {
  transition: .5s;
}

.pad.shadowHover:hover {
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
}

.pad small {
  font-size: 15px;
  line-height: 1.45;
  margin: 15px 0;
}

@media (max-width:767px) {
  .pad.collapse {
    background: inherit;
    color: inherit;
    border: none;
    padding: 0!important;
    overflow: inherit;
    border-radius: 0;
    box-shadow: none;
    transition: 0s!important;
  }

  .pad.shadow {
    box-shadow: none;
  }
}

.resizing .equalElement {
  transition: 0s!important;
}

.hr {
  position: relative;
  height: 1px;
  width: 100%;
}

@media (max-width:1023px) {
  .shiftImage {
    margin-top: 0!important;
    margin-bottom: 0!important;
  }

  .shiftImageVertical {
    margin-right: 0!important;
    max-width: 100%!important;
  }
}

@media (min-width:1024px) {
  .hideForDesktop {
    display: none!important;
  }
}

@media (min-width:1024px) {
  .showForDesktop {
    display: block!important;
  }
}

@media (max-width:1024px) {
  .hideForTablet {
    display: none!important;
  }
}

@media (max-width:1024px) {
  .showForTablet {
    display: block!important;
  }

  .showForTabletInline {
    display: inline!important;
  }
}

@media (max-width:767px) {
  .hideForPhablet {
    display: none!important;
  }
}

@media (max-width:768px) {
  .showForPhablet {
    display: block!important;
  }

  .showForPhabletInline {
    display: inline!important;
  }
}

@media (max-width:435px) {
  .hideForPhone {
    display: none!important;
  }
}

@media (max-width:435px) {
  .showForPhone {
    display: block!important;
  }

  .showForPhoneInline {
    display: inline!important;
  }
}

html.mobile .hideForMobile {
  display: none!important;
}

html.mobile .showForMobile {
  display: block!important;
}

html.mobile .showForMobileInline {
  display: inline!important;
}

.helpBubble {
  cursor: pointer;
}

.helpBubble:after {
  content: "?";
  font-size: 14px;
  width: 17px;
  height: 17px;
  line-height: 1.2;
  background: #202020;
  opacity: .3;
  color: #fff;
  border-radius: 50%;
  display: inline-block;
  margin-left: 4px;
  font-weight: 700;
  transition: .25s;
}

.helpBubble .helpMessage {
  background: rgba(255,255,255,.98);
  color: #202020;
  font-size: 16px;
  line-height: 1.625;
  position: absolute;
  z-index: 10;
  box-shadow: 0 1px 8px rgba(0,0,0,.07),0 6px 8px rgba(0,0,0,.05);
  padding: 17px;
  text-align: left;
  bottom: 50%;
  margin-bottom: 5px;
  transform: translateY(10px) scale(.95);
  transition: .25s;
  opacity: 0;
  pointer-events: none;
  color: rgba(48,48,48,.7);
}

.helpBubble .helpMessage strong {
  color: #303030;
}

.helpBubble:hover .helpMessage {
  pointer-events: all;
  transform: translateY(0) scale(1);
  opacity: 1;
}

.helpBubble:hover:after {
  opacity: 1;
}

.panel {
  position: fixed;
  left: 0;
  width: 100%;
  padding: 10px 30px;
  z-index: 200;
  text-align: center;
  font-size: 16px;
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  user-select: none;
  transform: translate3d(0,0,0);
}

.panel.top {
  top: 0;
}

.panel.bottom {
  bottom: 0;
}

.panel.white {
  background: rgba(255,255,255,.975)!important;
  box-shadow: 0 1px 1px rgba(0,0,0,.07);
}

.panel.black {
  background-color: rgba(0,0,0,.8)!important;
  box-shadow: 0 1px 1px rgba(0,0,0,.07);
}

.animateOnEvent .panel.top,
.animated .panel.top,
.hidePanel-top .panel.top.hideOnScroll,
.slides.firstSlide .panel.top.exceptFirstSlide,
.slides.lastSlide .panel.top.exceptLastSlide,
.slides:not(.firstSlide) .panel.top.firstSlideOnly,
.slides:not(.firstSlide):not(.lastSlide) .panel.top.firstAndLastSlidesOnly,
.slides:not(.lastSlide) .panel.top.lastSlideOnly {
  transform: translate3d(0,-100%,0);
  opacity: 0;
}

.animateOnEvent .panel.bottom,
.animated .panel.bottom,
.hidePanel-bottom .panel.bottom.hideOnScroll,
.slides.firstSlide .panel.bottom.exceptFirstSlide,
.slides.lastSlide .panel.bottom.exceptLastSlide,
.slides:not(.firstSlide) .panel.bottom.firstSlideOnly,
.slides:not(.firstSlide):not(.lastSlide) .panel.bottom.firstAndLastSlidesOnly,
.slides:not(.lastSlide) .panel.bottom.lastSlideOnly {
  transform: translate3d(0,100%,0);
  opacity: 0;
}

.page-loaded .animateOnEvent .panel,
.page-loaded .animated .panel {
  transition: transform .5s,opacity .5s,padding .5s;
  transform: translate3d(0,0,0);
  opacity: 1;
}

.slides.whiteSlide .panel {
  color: #202020;
}

.mobile .simplifiedMobile .panel.hideOnScroll,
.scroll .panel.hideOnScroll {
  position: fixed;
}

.mobile .simplifiedMobile .panel.hideOnScroll.top.hide,
.scroll .panel.hideOnScroll.top.hide {
  transform: translateY(-100%)!important;
  opacity: 0;
}

.mobile .simplifiedMobile .panel.hideOnScroll.bottom.hide,
.scroll .panel.hideOnScroll.bottom.hide {
  transform: translateY(100%)!important;
  opacity: 0;
}

.panel .sections {
  display: table;
  width: 100%;
  font-size: 0;
}

.panel .sections>div {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 33.33333%;
  white-space: nowrap;
  font-size: 16px;
  height: 50px;
}

.panel .sections>div.auto {
  width: .1%;
}

.panel .sections>div * {
  pointer-events: all;
}

.panel .sections>div.left {
  text-align: left;
}

.panel .sections>div.left ul.crop {
  padding-left: 0;
}

.panel .sections>div.left ul.crop li:first-child {
  margin-left: 0;
}

.panel .sections>div.left.space {
  padding-right: 20px;
}

.panel .sections>div.right {
  text-align: right;
}

.panel .sections>div.right ul.crop {
  padding-right: 0;
}

.panel .sections>div.right ul.crop li:last-child {
  margin-right: 0;
}

.panel .sections>div.right.space {
  padding-left: 20px;
}

.panel .sections>div.center.space {
  padding: 0 20px;
}

.panel .sections.hidden {
  display: none;
}

.panel .sections .menu {
  white-space: nowrap;
  display: inline-block;
  padding: 0 12px;
  font-size: 0;
}

.panel .sections .menu svg {
  width: 20px;
  height: 20px;
  vertical-align: bottom;
}

.panel .sections .menu li {
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
  margin: 0 10px;
}

.panel .sections .menu li a {
  padding: 0 7px;
  opacity: .8;
}

.panel .sections .menu li a:hover {
  opacity: 1;
}

.panel .sections .menu.uppercase li {
  font-size: 12px;
  margin: 0 10px;
  letter-spacing: .125em;
  font-weight: 600!important;
}

.panel .sections .menu.uppercase li svg {
  position: relative;
  top: 2px;
}

.panel .hidden,
.panel .hidden * {
  display: none;
}

.panel svg {
  fill: #fff;
  width: 18px;
  height: 18px;
  vertical-align: bottom;
}

.slides.whiteSlide .panel svg {
  fill: #202020;
}

.panel a:not(.button):hover {
  opacity: .75;
  -webkit-transition: .15s;
  transition: .15s;
}

.panel .button {
  margin: 0;
}

.panel .button+.button {
  margin-left: 10px;
}

.panel .button:not(.actionButton) {
  font-size: 15px;
  vertical-align: middle;
  padding: 12px 17px;
}

.panel .button:not(.actionButton):hover:not(:active) {
  transform: translateY(0)!important;
  box-shadow: 0 0 0 1px rgba(255,255,255,.05),0 4px 6px 0 rgba(0,0,0,.1),0 1px 10px 0 rgba(0,0,0,.1);
}

.panel .nextSlide,
.panel .prevSlide {
  width: 24px;
  height: 24px;
  position: relative;
  top: 5px;
}

.slides.whiteSlide .panel .actionButton svg {
  fill: #fff;
}

.panel .nextSlide,
.panel .prevSlide {
  transition: .25s;
}

.firstSlide .panel .prevSlide,
.lastSlide .panel .nextSlide {
  opacity: 0;
  pointer-events: none;
  cursor: default;
}

.firstSlide .panel.bottom .nextSlide svg {
  animation: animateArrow 4s infinite;
}

.panel .panelIcon {
  position: relative;
  top: 5px;
}

@keyframes animateArrow {
  100%, 80% {
    transform: translateY(0);
  }

  90% {
    transform: translateY(10px);
  }
}

.nextSlide,
.prevSlide {
  cursor: pointer;
}

.nextSlide:hover,
.prevSlide:hover {
  transition: .15s;
}

.nextSlide:active,
.prevSlide:active {
  opacity: .75;
}

.firstSlide.lastSlide .nextSlide,
.firstSlide.lastSlide .prevSlide {
  opacity: 0;
}

.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  width: 0%;
  transition: width 1s,opacity 1s;
  z-index: 1000;
  opacity: 1;
}

.progress-bar.loaded {
  width: 100%;
  opacity: 0;
  transition: width 0s,opacity .25s 1s;
}

.side {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  z-index: 100;
  padding: 70px 4%;
  pointer-events: none;
  opacity: 0;
  transition: opacity .5s;
  transform: translate3d(0,0,0);
}

@media (min-width:1380px) {
  .side {
    padding-left: 55px;
    padding-right: 55px;
  }
}

.page-loaded .side {
  opacity: 1;
}

.side.large {
  padding: calc(5.56% + 50px) 5%;
}

.side.left {
  left: 0;
  right: inherit;
}

.side.right {
  right: 0;
  left: inherit;
}

.side.compact {
  padding: 30px 4%;
}

.side.compact .navigation li {
  width: 15px;
  height: 7px;
  margin: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 0;
  background: #fff;
  opacity: .2;
  padding: 1px;
  cursor: pointer;
}

.side.compact .navigation li.selected,
.side.compact .navigation li:hover {
  opacity: 1;
}

.side.compact .navigation li:after {
  display: none;
}

.side.compact .navigation li:before {
  margin: 0 8px!important;
  top: -10px;
}

.whiteSlide .side.compact .navigation li {
  background: #202020;
}

.side.compact:not(.square) .navigation li:first-child {
  border-radius: 10px 10px 0 0;
}

.side.compact:not(.square) .navigation li:last-child {
  border-radius: 0 0 10px 10px;
}

.panel .side {
  position: relative;
  display: inline;
  height: auto;
  padding: 0;
}

.slides.whiteSlide .side svg:not([fill]) {
  fill: #202020;
}

.navigation {
  display: table;
  height: 100%;
}

.navigation ul {
  display: table-cell;
  vertical-align: middle;
}

.navigation * {
  pointer-events: all;
}

.navigation li {
  fill: #fff;
  display: block;
  background: 0 0;
  padding: 9px;
  margin: 0 -9px;
  cursor: pointer;
  position: relative;
}

.navigation li:after {
  content: "";
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 7px;
  opacity: .5;
  background: #fff;
  box-shadow: 0 0 1px #303030;
  transition: .25s;
}

.navigation li.selected:after {
  opacity: 1;
}

.navigation li:hover:after {
  opacity: 1;
}

.medium .navigation li:after {
  width: 10px;
  height: 10px;
  border-radius: 5px;
}

.small .navigation li:after {
  width: 6px;
  height: 6px;
  border-radius: 4px;
}

.navigation li[data-title]:before {
  content: attr(data-title);
  position: absolute;
  right: 100%;
  top: 1px;
  background: rgba(0,0,0,.7);
  color: #fff;
  font-size: 14px;
  min-width: 50px;
  border-radius: 6px;
  padding: 7px 12px;
  font-weight: 500;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  box-shadow: 0 0 0 1px rgba(255,255,255,.1);
  pointer-events: none;
  visibility: hidden;
}

.navigation li:hover:before {
  visibility: visible;
}

.left .navigation li:before {
  left: 100%;
  right: auto;
}

.panel.bottom .navigation li:before {
  transform: translateY(-100%) translateX(-50%);
  left: 14px;
  top: -2px;
}

.stroke .navigation li:after {
  border-color: #fff;
  border-style: solid;
  border-width: 2px;
  background-color: transparent;
}

.stroke.small .navigation li:after {
  border-width: 1px;
}

.stroke .navigation li.selected:after {
  background: #fff;
}

.stroke .navigation li:hover:after {
  background: #fff;
}

.square .navigation li:after {
  border-radius: 0;
}

.square.small .navigation li:after {
  border-radius: 0;
}

.diamond .navigation li:after {
  border-radius: 0;
  transform: rotate(45deg) scale(.72);
}

.diamond.medium .navigation li:after {
  transform: rotate(45deg) scale(.88);
}

.diamond.small .navigation li:after {
  transform: rotate(45deg) scale(1);
}

.line .navigation li {
  margin: 0 -9px;
  padding: 5px 9px;
  text-align: right;
  font-size: 0;
}

.line .navigation li:after {
  height: 3px;
  display: inline-block;
  text-align: right;
  background: #fff;
  border: none;
}

.line .navigation li:before {
  margin-top: -10px;
}

.line .navigation li.selected:after {
  width: 25px;
}

.line.left .navigation li {
  text-align: left;
}

.line.medium .navigation li {
  margin: 0 -5px;
  padding: 4px 8px;
}

.line.medium .navigation li.selected:after {
  width: 19px;
}

.line.small .navigation li {
  margin: 0;
  padding: 4px 6px;
}

.line.small .navigation li.selected:after {
  width: 13px;
}

.pole .navigation li {
  margin: 0 1px 0 2px;
  padding: 2px 9px;
  text-align: right;
  font-size: 0;
}

.pole .navigation li:after {
  height: 20px;
  width: 4px;
  display: inline-block;
  transition: .5s;
  text-align: right;
  background: #fff;
  border-radius: 1px;
  border: none;
}

.pole .navigation li:before {
  margin-top: -3px;
}

.pole .navigation li.selected:after {
  height: 60px;
}

.pole .navigation li.selected:before {
  margin-top: 19px;
}

.pole.medium .navigation li {
  margin: 0 2px;
}

.pole.medium .navigation li:after {
  height: 15px;
  width: 3px;
}

.pole.medium .navigation li:before {
  margin-top: -5px;
}

.pole.medium .navigation li.selected:after {
  height: 45px;
}

.pole.medium .navigation li.selected:before {
  margin-top: 10px;
}

.pole.small .navigation li {
  margin: 0 2px;
}

.pole.small .navigation li:after {
  height: 10px;
  width: 3px;
}

.pole.small .navigation li:before {
  margin-top: -7px;
}

.pole.small .navigation li.selected:after {
  height: 30px;
}

.pole.small .navigation li.selected:before {
  margin-top: 2px;
}

.slides.whiteSlide .navigation li:after {
  background: #202020;
  box-shadow: 0 0 1px #fff;
}

.slides.whiteSlide .stroke .navigation li:after {
  border-color: #202020;
  background: 0 0;
}

.slides.whiteSlide .stroke .navigation li:hover:after {
  background: #303030;
}

.slides.whiteSlide .stroke .navigation li.selected:after {
  border-color: #303030;
  background: #202020;
}

.panel .navigation,
.panel .navigation ul {
  display: inline;
}

.panel .navigation li {
  display: inline-block;
  margin: -9px 0;
}

.panel .side.small .navigation li {
  margin: 0;
}

.navigation .sideArrow {
  width: 31px;
  height: 72px;
  margin: 0 -9px;
}

@media (max-width:766px) {
  .navigation .sideArrow {
    width: 17px;
    height: 40px;
  }
}

.dropdown {
  position: fixed;
  z-index: 300;
  color: #202020;
  width: 160px;
  background: #fff;
  box-shadow: 0 6px 11px 0 rgba(0,0,0,.15),0 14px 28px rgba(0,0,0,.1),0 0 0 1px rgba(0,0,0,.05);
  margin-bottom: 50px;
  border-radius: 6px;
  text-align: center;
  cursor: default;
  transform: translateY(0) scale(.9);
  transform-origin: top;
  transition: transform .35s,opacity .35s,box-shadow .35s;
}

.dropdown:not(.show) {
  pointer-events: none;
  opacity: 0;
}

.dropdown.rectangular {
  border-radius: 0;
}

.dropdown .title {
  font-size: 17px;
  font-weight: 500;
  margin: 0;
  text-align: center;
  opacity: .8;
}

.dropdown a {
  font-size: 15px;
  opacity: .6;
}

.dropdown a:hover {
  opacity: .8;
}

.dropdown:not(.noArrow):after,
.dropdown:not(.noArrow):before {
  content: "";
  bottom: 100%;
  left: 22px;
  border: solid transparent;
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(255,255,255,0);
  border-bottom-color: #fff;
  border-width: 7px;
  margin-left: -7px;
}

.dropdown:not(.noArrow):before {
  border-bottom-color: rgba(0,0,0,.1);
  border-width: 8px;
  margin-left: -8px;
}

.dropdown.show {
  visibility: visible;
  opacity: 1;
  transform: translateY(20px);
}

.dropdown.show.hide {
  opacity: 0;
  transform: translateY(40px);
  box-shadow: 0 0 0 0 rgba(0,0,0,.15),0 0 0 rgba(0,0,0,.1),0 0 0 1px rgba(0,0,0,.05);
  pointer-events: none;
}

.dropdown .hideDropdown {
  opacity: 0;
  pointer-events: none;
}

.dropdown.bottom {
  transform-origin: bottom;
}

.dropdown.bottom.show {
  transform: translateY(-20px);
}

.dropdown.bottom.show.hide {
  transform: translateY(-40px);
}

.dropdown.bottom:after,
.dropdown.bottom:before {
  top: 100%;
  bottom: initial;
  border-bottom-color: rgba(255,255,255,0);
  border-top-color: #fff;
}

.dropdown.bottom:before {
  border-top-color: rgba(0,0,0,.06);
}

.dropdown.right:after,
.dropdown.right:before {
  right: 18px;
  left: auto;
}

.dropdown.right:before {
  right: 17px;
}

.dropdown.center:after,
.dropdown.center:before {
  left: 50%;
}

.dropdown.share li {
  float: left;
  text-align: center;
  display: block;
  width: 80px;
  height: 50px;
  padding: 14px 0;
  color: #fff;
  position: relative;
  cursor: pointer;
  opacity: .9;
  transition: .15s;
}

.dropdown.share li:hover {
  opacity: 1;
}

.dropdown.share li:after {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  background: rgba(0,0,0,.1);
  transition: .25s;
}

.dropdown.share li:active:after {
  opacity: 1;
  transition: .1s;
}

.dropdown.share li svg {
  width: 20px;
  height: 20px;
  fill: #fff;
}

.dropdown.share li.mail {
  width: 100%;
  height: auto;
  color: #202020;
  opacity: .6;
  font-size: 15px;
  padding: 20px 0;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.dropdown.share li.mail:hover {
  opacity: .8;
}

.scroll .dropdown {
  position: absolute;
  top: 0;
}

.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  max-width: 90%;
  height: 100%;
  color: #fff;
  z-index: 500;
  background: #0e0e0e;
  transition: transform .5s,visibility 0s;
  transform: translateX(100%);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.sidebarShown .sidebar.visible {
  transform: translateX(0);
  opacity: 1;
}

.sidebar .content {
  padding: 40px;
  overflow-y: auto;
  position: relative;
}

.sidebar.small .content {
  padding: 30px;
}

.sidebar .wrap {
  padding: 0;
}

.sidebar.left {
  right: inherit;
  left: 0;
  transform: translateX(-100%);
}

.sidebar.top {
  top: 0;
  width: 100%;
  max-width: 100%;
  height: auto;
  transform: translateY(-100%);
}

.sidebar.bottom {
  bottom: 0;
  top: inherit;
  width: 100%;
  max-width: 100%;
  height: auto;
  transform: translateY(100%);
}

.sidebar .logo {
  padding: 0;
  font-size: 0;
  margin-bottom: 35px;
}

.sidebar .close {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 14px;
  font-size: 0;
  opacity: .5;
  z-index: 101;
  transition: .25s;
}

.sidebar .close:hover {
  opacity: 1;
}

.sidebar .close svg {
  width: 24px;
  height: 24px;
  fill: #fff;
}

.sidebar .close:active svg {
  transform: scale(.92);
}

.sidebar ul.mainMenu,
.sidebar ul.social,
.sidebar ul.subMenu {
  line-height: 1.9;
  margin-bottom: 30px;
  display: block;
}

.sidebar .mainMenu li {
  font-size: 20px;
  line-height: 48px;
}

.sidebar .mainMenu.small li {
  font-size: 18px;
  line-height: 46px;
}

.sidebar .subMenu li {
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
  font-size: 18px;
  line-height: 36px;
}

.sidebar .subMenu.small li {
  font-size: 16px;
  line-height: 34px;
}

.sidebar .social {
  margin-top: 40px;
}

.sidebar .social li {
  display: inline-block;
  margin-right: 20px;
}

.sidebar .social li:last-child {
  margin-right: 0;
}

.sidebar .social li a {
  font-size: 0;
  padding: 0;
}

.sidebar .social li a svg {
  width: 20px;
  height: 20px;
}

.sidebar .social.small li {
  margin-right: 12px;
}

.sidebar .social.small li a svg {
  width: 15px;
  height: 15px;
}

.sidebar .social.big li {
  margin-right: 12px;
}

.sidebar .social.big li a svg {
  width: 22px;
  height: 22px;
}

.sidebar.small .social {
  margin-top: 30px;
}

.sidebar .big li {
  font-size: 32px;
  line-height: 64px;
}

.sidebar .social.medium li a svg {
  width: 18px;
  height: 18px;
}

.sidebar .social.medium li {
  margin-right: 14px;
}

.sidebarShown .slide.selected .content {
  overflow: hidden;
}

.page-loaded.sidebarShown .slide.selected {
  transform: scale(.95)!important;
  pointer-events: none;
  opacity: .5!important;
}

.sidebarShown .panel.top {
  opacity: 0;
}

.sidebarShown .panel.bottom {
  opacity: .5;
  transform: scale(.95) translateY(-10%);
}

.page-loaded.sidebarShown .panel,
.page-loaded.sidebarShown .slide.selected,
.page-loaded.sidebarShown .slide.selected:after,
.sidebar {
  transition: transform .5s,opacity .5s!important;
}

.popup {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  z-index: 1000;
  transition: transform .5s,opacity .5s;
  overflow-y: auto;
  display: none;
  transform: translate3d(0,0,0);
}

.popup:not([class*=fade]) {
  background: rgba(17,17,17,.9);
}

.popupShown .popup.visible {
  display: block;
  animation: popupFadeIn .75s;
}

.popup.hidePopup {
  opacity: 0;
  pointer-events: none;
}

.popup .content {
  overflow-y: auto;
}

.popup .close:not(.button) {
  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 14px;
  font-size: 0;
  opacity: .5;
  z-index: 200;
  transition: .25s;
  margin: 0;
  transform: translate3d(0,0,0);
}

.popup .close:not(.button).left {
  right: inherit;
  left: 0;
}

.popup .close:not(.button):hover {
  opacity: 1;
}

.popup .close:not(.button) svg {
  width: 30px;
  height: 30px;
  fill: #fff;
}

.popup .close.button {
  position: fixed;
  z-index: 200;
  margin: 15px;
}

.popup.white .close svg {
  fill: #202020;
}

.popup .wrap {
  padding: 18px 58px;
}

.popup .wrap.spaces {
  padding: 58px;
}

.popup.fullscreen .wrap {
  padding: 0;
}

.popup.fullscreen .embedVideo {
  height: 100vh;
  padding-bottom: 0;
}

@keyframes popupFadeIn {
  from {
    opacity: 0;
  }
}

.popupShown,
.popupShown body,
.sidebarShown,
.sidebarShown body {
  overflow-y: hidden!important;
}

.embedVideo {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}

.embedVideo embed,
.embedVideo iframe,
.embedVideo object,
.embedVideo video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.embedVideo.size-16x10 {
  padding-bottom: 62.5%;
}

.embedVideo.size-4x3 {
  padding-bottom: 75%;
}

.embedVideo.size-1x1,
.embedVideo.size-square {
  padding-bottom: 100%;
}

.zoom-img,
.zoom-img-wrap {
  position: relative;
  transition: all .5s;
  transition-timing-function: cubic-bezier(.2,0,.3,1)!important;
  z-index: 100;
}

.zoom-img img.zoom-img,
.zoom-img-wrap img.zoom-img {
  margin: 0!important;
}

.zoom-overlay {
  background: #111;
  position: fixed;
  top: -9999px;
  left: -9999px;
  right: -9999px;
  bottom: -9999px;
  pointer-events: none;
  opacity: 0;
  transition: opacity .5s;
  z-index: 99;
}

.zoom-overlay-open .zoom-overlay {
  opacity: .9;
}

.zoom-overlay-open .panel,
.zoom-overlay-open .side {
  opacity: 0;
  transition-delay: 0s;
  transition: .25s;
}

.zoom-overlay-open,
.zoom-overlay-transitioning {
  cursor: default;
}

.zoom-img-parent {
  position: relative;
  z-index: 1000;
}

.slider {
  position: relative;
}

.slider.clickable {
  cursor: pointer;
}

.slider>li {
  display: none;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity .5s;
  pointer-events: none;
}

.slider>li.selected {
  display: block;
  opacity: 1;
  transition: opacity .5s;
  pointer-events: all;
}

.slider.rounded>li>img {
  border-radius: 6px;
  overflow: hidden;
}

.slider.autoHeight {
  transition: .5s;
}

.slider.autoHeight>li {
  display: block;
  position: absolute;
}

.controller li {
  cursor: pointer;
}

.controller li.selected {
  cursor: default;
  pointer-events: none;
}

.tooltip[data-tooltip-title] {
  position: relative;
}

.tooltip[data-tooltip-title]:before {
  content: attr(data-tooltip-title);
  position: absolute;
  background: rgba(40,40,40,.6);
  color: #fff;
  font-size: 12px;
  border-radius: 50px;
  padding: 6px 15px;
  visibility: hidden;
  white-space: nowrap;
  letter-spacing: .04em;
  box-shadow: 0 0 0 1px rgba(255,255,255,.07);
  transform: translateY(100%) translateX(-50%);
  left: 50%;
  top: 0;
}

.tooltip[data-tooltip-title]:hover:before {
  visibility: visible;
  animation: fadeIn .35s backwards;
}

.tooltip[data-tooltip-title].top:before {
  bottom: 0;
  top: auto;
  transform: translateY(-100%) translateX(-50%);
}

.slide.before {
  transform: translate3d(0,-50%,0);
}

.slide.after,
.slide:first-child {
  transform: translate3d(0,50%,0);
  will-change: transform;
}

.slide.after,
.slide.before {
  opacity: 0;
}

.slide.selected {
  -webkit-transform: translate3d(0,0,0)!important;
  -moz-transform: translate3d(0,0,0)!important;
  -ms-transform: translate3d(0,0,0)!important;
  -o-transform: translate3d(0,0,0)!important;
  transform: translate3d(0,0,0)!important;
  z-index: 11;
}

.scroll .slide.selected {
  z-index: 10;
}

.page-loaded .slide.selected {
  opacity: 1!important;
}

.horizontal .slide,
.horizontal .slide.before {
  -ms-transform: translate3D(-50%,0,0);
  transform: translate3D(-50%,0,0);
}

.horizontal .slide.after {
  -ms-transform: translate3D(50%,0,0);
  transform: translate3D(50%,0,0);
}

.film .slide.before {
  -ms-transform: translate3D(-100%,0,0);
  transform: translate3D(0,-100%,0);
}

.film .slide.after {
  -ms-transform: translate3D(0,100%,0);
  transform: translate3D(0,100%,0);
}

.film.horizontal .slide.before {
  -ms-transform: translate3D(-100%,0,0);
  transform: translate3D(-100%,0,0);
}

.film.horizontal .slide,
.film.horizontal .slide.after {
  -ms-transform: translate3D(100%,0,0);
  transform: translate3D(100%,0,0);
}

.chain .slide.before {
  -ms-transform: translate3D(-100%,0,0);
  transform: translate3D(0,-100%,0);
  opacity: 1;
}

.chain .slide.after {
  -ms-transform: translate3D(0,100%,0);
  transform: translate3D(0,100%,0);
  opacity: 1;
}

.chain.horizontal .slide.before {
  -ms-transform: translate3D(-100%,0,0);
  transform: translate3D(-100%,0,0);
  opacity: 1;
}

.chain.horizontal .slide,
.chain.horizontal .slide.after {
  -ms-transform: translate3D(100%,0,0);
  transform: translate3D(100%,0,0);
  opacity: 1;
}

.zen .slide.before {
  -ms-transform: translateY(-100%) scale(.8);
  transform: translateY(-100%) scale(.8);
}

.zen .slide,
.zen .slide.after {
  -ms-transform: translateY(100%) scale(.8);
  transform: translateY(100%) scale(.8);
}

.zen.horizontal .slide.before {
  -ms-transform: translateX(-100%) scale(.8);
  transform: translateX(-100%) scale(.8);
}

.zen.horizontal .slide,
.zen.horizontal .slide.after {
  -ms-transform: translateX(100%) scale(.8);
  transform: translateX(100%) scale(.8);
}

.stack .slide,
.stack .slide.after {
  -ms-transform: translateY(100%);
  transform: translateY(100%);
}

.stack .slide.after {
  opacity: initial;
}

.stack .slide.after.active,
.stack .slide.selected {
  z-index: 11!important;
}

.stack .slide.before {
  -ms-transform: scale(.9);
  transform: scale(.9);
}

.stack.horizontal .slide,
.stack.horizontal .slide.after {
  -ms-transform: translateX(100%);
  transform: translateX(100%);
}

.stack.horizontal .slide.before {
  transform: scale(.9);
}

.cards .slide,
.cards .slide.after {
  -ms-transform: translateY(10%);
  transform: translateY(10%);
  opacity: initial;
}

.cards .slide.after {
  z-index: 8!important;
  opacity: 0;
}

.cards .slide.selected {
  z-index: 9!important;
}

.cards .slide.before {
  -ms-transform: translateY(-100%);
  transform: translateY(-100%);
  z-index: 7;
}

.cards .slide.active.before {
  z-index: 10!important;
}

.cards.horizontal .slide,
.cards.horizontal .slide.after {
  -ms-transform: translateX(10%);
  transform: translateX(10%);
}

.cards.horizontal .slide.before {
  -ms-transform: translateX(-100%);
  transform: translateX(-100%);
}

.zoom .slide.before {
  -ms-transform: scale(1.4);
  transform: scale(1.4);
}

.zoom .slide,
.zoom .slide.after {
  -ms-transform: scale(.8);
  transform: scale(.8);
  opacity: 0;
}

.vertigo .slide.before {
  -ms-transform: scale(1.4) rotate(-2deg);
  transform: scale(1.4) rotate(-2deg);
}

.vertigo .slide,
.vertigo .slide.after {
  -ms-transform: scale(.8) rotate(2deg);
  transform: scale(.8) rotate(2deg);
  opacity: 0;
}

.plain .slide.before {
  -ms-transform: scale(1);
  transform: scale(1);
}

.plain .slide,
.plain .slide.after {
  -ms-transform: scale(1);
  transform: scale(1);
}

.plain .slide.after:after,
.plain .slide.before:after {
  opacity: 1;
  background: #111;
}

.page-loaded .fast .slide.active,
.page-loaded .fast .slide.selected {
  transition: transform .7s,opacity .7s;
}

.page-loaded .slide.active,
.page-loaded .slide.selected {
  transition: transform 1s,opacity 1s;
}

.page-loaded .slow .slide.active,
.page-loaded .slow .slide.selected {
  transition: transform 1.4s,opacity 1.4s;
}

.page-loaded .slide.active.entry,
.page-loaded .slide.selected.entry {
  transition: transform 0s,opacity 1s;
}

.slides.animateOnEvent .panel,
.slides.animated .panel {
  transition: transform,opacity;
  transition-duration: .8s;
}

.slides.animateOnEvent.fast .panel,
.slides.animated.fast .panel {
  transition-duration: .6s;
}

.slides.animateOnEvent .panel,
.slides.animated.slow .panel {
  transition-duration: 1s;
}

.smooth .active,
.smooth .panel,
.smooth .rolling-element,
.smooth .selected,
.smooth .sidebar {
  transition-timing-function: cubic-bezier(.55,.05,.35,.95)!important;
}

.bounce .active,
.bounce .panel,
.bounce .rolling-element,
.bounce .selected,
.bounce .sidebar {
  transition-timing-function: cubic-bezier(.45,1.15,.5,1)!important;
}

.animated [class*=ae-] {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translate3d(0,0,0);
  transition-timing-function: cubic-bezier(.25,.1,.2,1);
}

.animated.animate .fast [class*=ae-]:not(.done),
.animated.animate [class*=ae-].fast:not(.done),
.animated.fast .animate [class*=ae-]:not(.done),
.animated.fast.animate [class*=ae-]:not(.done) {
  transition-duration: .7s;
}

}

}

}

}

