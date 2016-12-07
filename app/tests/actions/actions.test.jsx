var expect = require ('expect');
var actions = require('actions');


describe ('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some Search text'
    };
    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });
  it ('should toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res= actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });


  it ('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'thing to do'
    };

    var res = actions.addTodo(action.text);
    expect(res).toEqual(action);
  });
  it ('should generate add todos action boject', () => {
    var todos = [{
      id:'111',
      test: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 33000

    }];
    var action = {
      type: 'ADD_TODOS',
      todos
    };

    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });


  it ('should toggle todo', () => {
    var action = {
      type:'TOGGLE_TODO',
      id: 213
    }
    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });

});
