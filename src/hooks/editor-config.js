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

const useEditorConfig = (editor) => {
  return { renderElement };
};

export default useEditorConfig;
