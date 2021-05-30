import { useState, useCallback } from 'react';
import areEqual from 'deep-equal';

const useEditorSelection = (editor) => {
  const [selection, setSelection] = useState(editor.selection);

  const setSelectionOptimized = useCallback(
    (newSelection) => {
      if (areEqual(selection, newSelection)) {
        return;
      }
      setSelection(newSelection);
    },
    [setSelection, selection]
  );

  return [selection, setSelectionOptimized];
};

export default useEditorSelection;
