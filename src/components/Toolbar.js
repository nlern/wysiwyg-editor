import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import {
  getIconForButtonStyle,
  getLabelForBlockStyle,
} from '../utils/ToolbarUtils';

import ToolbarButton from './ToolbarButton';

import ToolbarStyles from './Toolbar.module.css';

const PARAGRAPH_STYLES = ['h1', 'h2', 'h3', 'h4', 'paragraph', 'multiple'];
const CHARACTER_STYLES = ['bold', 'italic', 'code', 'underline'];

export default function Toolbar({ selection, previousSelection }) {
  return (
    <div className={ToolbarStyles.toolbar}>
      {/* Dropdown for paragraph styles */}
      <DropdownButton
        className={ToolbarStyles.blockStyleDropdown}
        disabled={false}
        id="block-style"
        title={getLabelForBlockStyle('paragraph')}
      >
        {PARAGRAPH_STYLES.map((blockType) => {
          return (
            <Dropdown.Item eventKey={blockType} key={blockType}>
              {getLabelForBlockStyle(blockType)}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
      {/* Button for character styles */}
      {CHARACTER_STYLES.map((style) => {
        return (
          <ToolbarButton
            key={style}
            icon={<i className={`bi ${getIconForButtonStyle(style)}`} />}
            isActive={false}
          />
        );
      })}
    </div>
  );
}
