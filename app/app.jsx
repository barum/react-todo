var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


var TodoApp = require('TodoApp');

var action = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('new state ', store.getState());
});

// store.dispatch(action.addTodo('Clean the yard'));
// store.dispatch(action.setSearchText ('yard'));
// store.dispatch(action.toggleShowCompleted());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(

      <Provider store={store}>
        <TodoApp/>
      </Provider>,
      document.getElementById('app')
);
