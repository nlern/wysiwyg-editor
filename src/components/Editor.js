import React, { useMemo } from 'react';
import { createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';

export default function Editor({ document, onChange }) {
  const editor = useMemo(() => withReact(createEditor()), []);
  return (
    <Slate editor={editor} value={document} onChange={onChange}>
      <Editable />
    </Slate>
  );
}
