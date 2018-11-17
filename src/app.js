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
    return <p>Location: {location}</p>;
  }
}



var newtemp = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}

  </div>
);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(newtemp, appRoot);
