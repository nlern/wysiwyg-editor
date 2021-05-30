import React, { useMemo } from 'react';
import { createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';
import useEditorConfig from '../hooks/editor-config';

export default function Editor({ document, onChange }) {
  const editor = useMemo(() => withReact(createEditor()), []);
  const { renderElement, renderLeaf } = useEditorConfig(editor);

  return (
    <div className="p-4 h-100">
      <Slate editor={editor} value={document} onChange={onChange}>
        <Editable renderElement={renderElement} renderLeaf={renderLeaf} />
      </Slate>
    </div>
  );
}
