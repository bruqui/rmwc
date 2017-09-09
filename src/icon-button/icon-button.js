import React from 'react';
import Button from '../button/button';
import classNames from 'classnames';

export const IconButton = props => {
  // styles ripped from Angular Material https://material.angularjs.org/latest/demo/button
  const buttonStyle = {
    marginLeft: '6px',
    marginRight: '6px',
    height: '40px',
    minWidth: '0',
    lineHeight: '24px',
    padding: '8px',
    width: '40px',
    borderRadius: '50%'
  };
  const { className, style = {}, ...rest } = props;
  const mergedStyle = {
    ...buttonStyle,
    ...style
  };
  return (
    <Button
      className={classNames('rmwc-icon-button', className)}
      style={mergedStyle}
      {...rest}
    />
  );
};

export default IconButton;
