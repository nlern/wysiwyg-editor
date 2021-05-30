import React from 'react';
import { DefaultElement } from 'slate-react';

const renderElement = (props) => {
  const { element, children, attributes } = props;

  switch (element.type) {
    case 'paragraph':
      return <p {...attributes}>{children}</p>;

    case 'h1':
      return <h1 {...attributes}>{children}</h1>;

    case 'h2':
      return <h2 {...attributes}>{children}</h2>;

    case 'h3':
      return <h3 {...attributes}>{children}</h3>;

    case 'h4':
      return <h4 {...attributes}>{children}</h4>;

    default:
      // for default case we delegate to slate's default rendering
      return <DefaultElement {...props} />;
  }
};

const renderLeaf = ({ attributes, children, leaf }) => {
  let el = <>{children}</>;

  if (leaf.bold) {
    el = <strong>{el}</strong>;
  }

  if (leaf.italic) {
    el = <em>{el}</em>;
  }

  if (leaf.code) {
    el = <code>{el}</code>;
  }

  if (leaf.underline) {
    el = <u>{el}</u>;
  }

  return <span {...attributes}>{el}</span>;
};

const useEditorConfig = (editor) => {
  return { renderElement, renderLeaf };
};

export default useEditorConfig;
