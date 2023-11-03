import { createGlobalStyle } from 'styled-components';

const nullStyle = `
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  width: 100%;
  height: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}`;
const scrollStyle = `
* {
  scrollbar-width: thin;
  scrollbar-color: #80808080 #6a6a6a;
}
*::-webkit-scrollbar {
  height: 4px;
  width: 4px;
}
*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #6a6a6a;
}
*::-webkit-scrollbar-track:hover {
  background-color: #6a6a6a;
}
*::-webkit-scrollbar-track:active {
  background-color: #6a6a6a;
}
*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #80808080;
}
*::-webkit-scrollbar-thumb:hover {
  background-color: #80808080;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #80808080;
}`;

const GlobalStyle = createGlobalStyle`
  ${scrollStyle};
  ${nullStyle}    
 `;

export default GlobalStyle;
