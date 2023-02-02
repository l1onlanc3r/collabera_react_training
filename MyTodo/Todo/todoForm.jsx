import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const TodoForm = forwardRef(({ addTodo, status }, ref) => {
  console.log('todoForm render');

  return (
    <form className="todo__form todo_form" onSubmit={addTodo}>
      <input type="text" className="todo_form__input" ref={ref} />
      <button
        type="submit"
        className="todo_form__btn"
        disabled={status?.action === 'REQUEST'}
      >
        Add Todo
      </button>
    </form>
  );
});

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  status: PropTypes.shape({
    type: PropTypes.string,
    action: PropTypes.oneOf(['REQUEST', 'ERROR']),
    errorMessage: PropTypes.string,
  }),
};

TodoForm.defaultProps = {
  status: undefined,
};

export default memo(TodoForm);
