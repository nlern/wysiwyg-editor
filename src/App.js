import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Editor from './components/Editor';
import Toolbar from './components/Toolbar';
import ExampleDocument from './utils/ExampleDocument';

function App() {
  const [document, updateDocument] = useState(ExampleDocument);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">WYSIWYG Editor</Navbar.Brand>
      </Navbar>
      <div className="editor h-100 container d-flex flex-column">
        <Toolbar />
        <Editor document={document} onChange={updateDocument}></Editor>
      </div>
    </>
  );
}

export default App;
