import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function TodoListItem({
  item,
  toggleComplete,
  deleteTodo,
  updateStatus,
  deleteStatus,
}) {
  return (
    <div key={item.id} className="flex items-center m-4">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => toggleComplete(item)}
        disabled={updateStatus?.action === 'REQUEST'}
        className="disabled:accent-slate-400 disabled:cursor-wait"
      />
      <p
        className={clsx('flex-1 px-4', {
          'line-through': item.isDone,
        })}
      >
        {item.text}
      </p>
      <button
        type="button"
        className="btn"
        onClick={() => deleteTodo(item)}
        disabled={deleteStatus?.action === 'REQUEST'}
      >
        Delete
      </button>
    </div>
  );
}

TodoListItem.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.number,
    text: PropTypes.string,
    isDone: PropTypes.bool,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateStatus: PropTypes.shape({
    type: PropTypes.string,
    action: PropTypes.oneOf(['REQUEST', 'ERROR']),
    errorMessage: PropTypes.string,
    id: PropTypes.number,
  }),
  deleteStatus: PropTypes.shape({
    type: PropTypes.string,
    action: PropTypes.oneOf(['REQUEST', 'ERROR']),
    errorMessage: PropTypes.string,
    id: PropTypes.number,
  }),
};

TodoListItem.defaultProps = {
  updateStatus: undefined,
  deleteStatus: undefined,
};

export default memo(TodoListItem);
