import clsx from 'clsx';
import React from 'react';

function Input({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid
  meta,
  className,
  ...props
}) {
  // const { field, form, meta, className, props } = this.props;
  /*
  console.log('field:', field);
  try {
    console.log('form:', form);
  } catch (e) {
    console.log(e);
  }
  console.log('meta:', meta);
  console.log('className:', className);
  console.log('props:', props);
  */

  return (
    <div>
      <label htmlFor={props.id} className="sr-only">
        {props.label}
      </label>
      <input
        className={clsx(
          'relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
          { [className || '']: !!className },
        )}
        id={props.id}
        type="text"
        autoComplete={props.autoComplete}
        placeholder={props.label}
        {...field}
        {...props}
      />
      {touched[field.name] && errors[field.name] && (
        <p className="text-red-400 text-sm font-medium">{errors[field.name]}</p>
      )}
    </div>
  );
}

export default Input;
