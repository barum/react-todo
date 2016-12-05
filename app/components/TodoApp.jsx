var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass ({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id:1,
          text:'Walk the dog'
        }, {
          id:2,
          text:'Clean the dog'
        }, {
          id:3,
          text:'Feed dog'
        }, {
          id:4,
          text:'Do laundry'
        }

      ]
    };
  },
  handleAddTodo: function () {
    alert('new todo:' + text);
  },

  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });

  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <div>
          <TodoSearch onSearch={this.handleSearch}/>
        </div>
        <div>
          <TodoList todos={todos}/>
        </div>
        <div>
          <AddTodo onAddTodo = {this.handleAddTodo}/>
        </div>
      </div>
    );

  }

});

module.exports = TodoApp;
