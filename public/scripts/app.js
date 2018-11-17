'use strict';

console.log('App.js is running.');

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  React.createElement(
    'ul',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var newtemp = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Maciek'
  ),
  React.createElement(
    'p',
    null,
    'Age: 29'
  ),
  React.createElement(
    'p',
    null,
    'Location: Warsaw'
  )
);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(newtemp, appRoot);
