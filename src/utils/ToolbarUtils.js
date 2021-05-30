export const getLabelForBlockStyle = (style) => {
  switch (style) {
    case 'h1':
      return 'Heading 1';
    case 'h2':
      return 'Heading 2';
    case 'h3':
      return 'Heading 3';
    case 'h4':
      return 'Heading 4';
    case 'paragraph':
      return 'Paragraph';
    case 'multiple':
      return 'Multiple';
    default:
      throw new Error(`Unhandled style in getLabelForBlockStyle: ${style}`);
  }
};

export const getIconForButtonStyle = (style) => {
  switch (style) {
    case 'bold':
      return 'bi-type-bold';
    case 'italic':
      return 'bi-type-italic';
    case 'underline':
      return 'bi-type-underline';
    case 'code':
      return 'bi-code-slash';
    default:
      throw new Error(`Unhandled style in getIconFOrButtonStyle: ${style}`);
  }
};
