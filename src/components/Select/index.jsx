import React from 'react';
import clsx from 'clsx';

function Select({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid
  meta,
  className,
  ...props
}) {
  console.log(props);
  return (
    <div>
      <label htmlFor={props.id} className="sr-only">
        {props.label}
      </label>
      <select
        className={clsx(
          'relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm invalid:text-gray-500',
          { [className || '']: !!className },
        )}
        id={props.id}
        {...field}
        {...props}
        required
      >
        <option value="">{props.label}</option>
        {props.options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {touched[field.name] && errors[field.name] && (
        <p className="text-red-400 text-sm font-medium">{errors[field.name]}</p>
      )}
    </div>
  );
}

export default Select;
