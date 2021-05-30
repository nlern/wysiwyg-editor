import React from 'react';
import Button from 'react-bootstrap/Button';

import ToolbarStyles from './Toolbar.module.css';

export default function ToolbarButton({ icon, isActive, ...otherProps }) {
  return (
    <Button
      variant="outline-primary"
      active={isActive}
      className={ToolbarStyles.toolbarBtn}
      {...otherProps}
    >
      {icon}
    </Button>
  );
}
