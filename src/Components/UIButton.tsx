import React from 'react';
import classNames from 'classnames';
import { ReactSVG } from 'react-svg';

export interface UIButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: string;
}

const UIButton: React.FC<UIButtonProps> = ({
  type = 'button',
  className,
  children,
  text,
  icon,
  ...props
}: UIButtonProps) => {
  return (
    <button {...props} type={type} className={classNames('button', className)}>
      {icon && <ReactSVG src={icon} className="button__icon" />}
      {children || text}
    </button>
  );
};

export default UIButton;
