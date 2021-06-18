import React from 'react';
import classNames from 'classnames';

export interface SpinnerProps {
  size?: 'big' | 'default' | 'small';
  className?: string;
}

export const Spinner: React.VFC<SpinnerProps> = ({
  size = 'default',
  className,
}: SpinnerProps) => {
  return <div className={classNames('spinner', `spinner--${size}`, className)} />;
};

export default Spinner;
