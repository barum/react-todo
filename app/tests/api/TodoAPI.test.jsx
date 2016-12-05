var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localstorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todo if valid array in localstorage', () => {
      var todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });

  });

  describe ('filteredTodos', () => {
    var todos = [{
      id: 1,
      text: 'some text here',
      completed: true
    }, {
      id: 2,
      text: 'Other text here',
      completed: false
    }, {
      id: 3,
      text: 'some text here',
      completed: true
    }];

    it ('shold return all items if showCOmpleted is true', () => {
      var filteredTodos = TodoAPI.filteredTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it ('shold return non completed todos when showCOmpleted is false', () => {
      var filteredTodos = TodoAPI.filteredTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it ('shold sort by COmpleted status', () => {
      var filteredTodos = TodoAPI.filteredTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });
    it ('shold filter todos by search text', () => {
      var filteredTodos = TodoAPI.filteredTodos(todos, true, 'some');
      expect(filteredTodos.length).toBe(2);
    });
    it ('shold return all todos if search text is empty', () => {
      var filteredTodos = TodoAPI.filteredTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
  });
});
