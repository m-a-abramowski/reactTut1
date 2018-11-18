console.log('App.js is running.');

//Conditional rendering methods:
//if statements
//ternary operators
//logical and operator

const app = {
  title: 'Indecision',
  subtitle: 'subtitle',
  options: ['One', 'Two']
}

const template = (
<div>
  <h1>{app.title}</h1>
  {app.subtitle && <p>{app.subtitle}</p>}
  <p>{(app.options.length > 0) ? 'Here are your options' : "No options"}</p>
  <ul>
    <li>Item one</li>
    <li>Item two</li>
  </ul>
</div>
);

//--------------------------



const user = {
  name: 'Maciek',
  age: 29,
  location: 'Warsaw'
}

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}



const newtemp = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}

  </div>
);

const appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(newtemp, appRoot);
