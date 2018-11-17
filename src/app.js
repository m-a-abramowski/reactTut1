console.log('App.js is running.');

var app = {
  title: 'Indecision',
  subtitle: 'subtitle'
}

var template = (
<div>
  <h1>{app.title}</h1>
  <p>{app.subtitle}</p>
  <ul>
    <li>Item one</li>
    <li>Item two</li>
  </ul>
</div>
);

//--------------------------



var user = {
  name: 'Maciek',
  age: 29,
  location: 'Warsaw'
}

function getLocation(location) {
  if (location) {
    return location;
  } else {
    return 'Unknown';
  }
}



var newtemp = (
  <div>
    <h1>{user.name.toUpperCase() + '!'}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user.location)}</p>

  </div>
);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(newtemp, appRoot);
