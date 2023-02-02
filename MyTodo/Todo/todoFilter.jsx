import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function TodoFilter({ setFilterType, filterType }) {
  const btns = [
    {
      text: 'All',
      value: 'all',
    },
    {
      text: 'Pending',
      value: 'pending',
    },
    {
      text: 'Completed',
      value: 'completed',
    },
  ];

  return (
    <div className="w-full flex">
      {btns.map((x) => (
        <button
          key={x.value}
          type="button"
          className={clsx('btn flex-1', {
            ' btn--active': filterType === x.value,
          })}
          onClick={() => setFilterType(x.value)}
        >
          {x.text}
        </button>
      ))}
    </div>
  );
}

TodoFilter.propTypes = {
  setFilterType: PropTypes.func.isRequired,
  filterType: PropTypes.oneOf(['all', 'pending', 'completed']).isRequired,
};

export default memo(TodoFilter);
