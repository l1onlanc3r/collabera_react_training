import React, { Component, createRef } from 'react';
import './todo.css';
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoFilter from './todoFilter';
import ErrorBoundary from './errorBoundary';

export default class Todo extends Component {
  state = {
    todoList: [],
    filterType: 'all',
    appStatus: [],
  };

  todoText = createRef();

  async componentDidMount() {
    this.loadTodo('all');
  }

  loadStatus = ({ type, id = -1 }) => {
    this.setState(({ appStatus }) => ({
      appStatus: [...appStatus, { type, action: 'REQUEST', id }],
    }));
  };

  successStatus = ({ type, id = -1 }) => {
    this.setState(({ appStatus }) => ({
      appStatus: appStatus.filter((x) => !(x.type === type && x.id === id)),
    }));
  };

  errorStatus = ({ type, error, id = -1 }) => {
    this.setState(({ appStatus }) => ({
      appStatus: appStatus.map((x) => {
        if (x.type === type && x.id === id) {
          return { ...x, action: 'ERROR', errorMessage: error.message };
        }
        return x;
      }),
    }));
  };

  loadTodo = async (filterType) => {
    const type = 'LOAD_TODO';
    try {
      this.loadStatus({ type });

      let url = 'http://localhost:3000/todoList';

      if (filterType !== 'all') {
        url += `?isDone=${filterType === 'completed'}`;
      }

      const res = await fetch(url);
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json);
      }

      this.setState({ todoList: json, filterType });
      this.successStatus({ type });
    } catch (error) {
      // this.setState({ error });
      this.errorStatus({ type, error });
    }
  };

  addTodo = async (event) => {
    const type = 'ADD_TODO';
    try {
      event.preventDefault();

      const todoText = this.todoText.current.value;

      if (!todoText.trim()) {
        alert('Please enter a task.');
        return;
      }

      this.loadStatus({ type });
      const res = await fetch('http://localhost:3000/todoList', {
        method: 'POST',
        body: JSON.stringify({
          text: todoText,
          isDone: false,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json);
      }

      this.setState(
        ({ todoList }) => ({
          todoList: [...todoList, json],
        }),
        () => {
          // callback
          this.todoText.current.value = '';
        },
      );

      this.successStatus({ type });
    } catch (error) {
      console.log('erorr: ', error.message);
      // this.setState({ error }, () => {
      //   console.log('state: ', this.state);
      // });

      this.errorStatus({ type, error });
    }
  };

  toggleComplete = async (item) => {
    const type = 'UPDATE_TODO';
    try {
      console.log('dtoggle');

      this.loadStatus({ type });
      const res = await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...item, isDone: !item.isDone }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json);
      }

      this.setState(({ todoList }) => {
        const index = todoList.findIndex((x) => x.id === item.id);

        return {
          todoList: [
            ...todoList.slice(0, index),
            json,
            ...todoList.slice(index + 1),
          ],
        };
      });

      this.successStatus({ type, id: item.id });
    } catch (error) {
      // this.setState({ error });
      this.errorStatus({ type, error, id: item.id });
    }
  };

  deleteTodo = async (item) => {
    const type = 'DELETE_TODO';
    try {
      this.loadStatus({ type });
      const res = await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: 'DELETE',
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json);
      }

      console.log('delerted');
      this.setState(({ todoList }) => {
        const index = todoList.findIndex((x) => x.id === item.id);

        return {
          todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
        };
      });

      this.successStatus({ type, id: item.id });
    } catch (error) {
      // this.setState({ error });
      this.errorStatus({ type, error, id: item.id });
    }
  };

  render() {
    // const { todoList, filterType } = this.state;

    const { filterType, todoList, appStatus } = this.state;
    const loadTodoStatus = appStatus.find((x) => x.type === 'LOAD_TODO');
    const addTodoStatus = appStatus.find((x) => x.type === 'ADD_TODO');
    const updateTodoStatus = appStatus.filter((x) => x.type === 'UPDATE_TODO');
    const deleteTodoStatus = appStatus.filter((x) => x.type === 'DELETE_TODO');

    return (
      <div className="todo">
        <h1 className="todo__title">Todo App</h1>
        <TodoForm
          addTodo={this.addTodo}
          ref={this.todoText}
          status={addTodoStatus}
        />
        <ErrorBoundary>
          <div className="w-full flex-1 overflow-y-auto">
            {loadTodoStatus?.action === 'REQUEST' && <h1>Loading...</h1>}
            {loadTodoStatus?.action === 'ERROR' && (
              <h1>{loadTodoStatus.errorMessage}</h1>
            )}
            {todoList.length > 0 && (
              <TodoList
                {...this.state}
                toggleComplete={this.toggleComplete}
                deleteTodo={this.deleteTodo}
                updateStatus={updateTodoStatus}
                deleteStatus={deleteTodoStatus}
              />
            )}
          </div>
        </ErrorBoundary>
        <ErrorBoundary>
          <TodoFilter setFilterType={this.loadTodo} filterType={filterType} />
        </ErrorBoundary>
      </div>
    );
  }
}
