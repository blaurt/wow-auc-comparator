import React from 'react';
import cl from 'classnames';

import { useField } from 'formik';
import { Input } from 'semantic-ui-react';

interface Props {
  label?: string;
  wrapperClassName?: string;
  placeholder?: string;
  name: string;
  id?: string;
  className: string;
  [key: string]: boolean | number | string | undefined;
}

export function AppInput({
  label,
  className = '',
  wrapperClassName,
  ...props
}: Props) {
  const [field, meta] = useField(props);
  return (
    <div className={wrapperClassName}>
      {label && <label htmlFor={props.id || props.name}>{label}</label>}
      <Input className={cl('text-input', className)} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}
