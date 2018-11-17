console.log('App.js is running.');

var template = (
<div>
  <h1>Indecision</h1>
  <p>This is some info</p>
  <ul>
    <li>Item one</li>
    <li>Item two</li>
  </ul>
</div>
);

var newtemp = (
  <div>
    <h1>Maciek</h1>
    <p>Age: 29</p>
    <p>Location: Warsaw</p>
  </div>
);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(newtemp, appRoot);
