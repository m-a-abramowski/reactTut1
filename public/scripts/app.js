'use strict';

console.log('App.js is running.');

//Conditional rendering methods:
//if statements
//ternary operators
//logical and operator

var app = {
  title: 'Indecision',
  subtitle: 'subtitle',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : "No options"
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
    user.name ? user.name : "Anonymous"
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(template, appRoot);
