'use strict';

console.log('App.js is running.');

var app = {
  title: 'Indecision',
  subtitle: 'subtitle'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
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

//--------------------------


var user = {
  name: 'Maciek',
  age: 29,
  location: 'Warsaw'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}

var newtemp = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name.toUpperCase() + '!'
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(newtemp, appRoot);
