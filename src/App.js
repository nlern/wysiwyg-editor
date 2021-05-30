import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Editor from './components/Editor';
import ExampleDocument from './utils/ExampleDocument';

function App() {
  const [document, updateDocument] = useState(ExampleDocument);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">
          <img
            src="./app-icon.png"
            height="30"
            width="30"
            alt="logo"
            className="d-inline-block align-top"
          />{' '}
          WYSIWYG Editor
        </Navbar.Brand>
      </Navbar>
      <div className="editor h-100 container d-flex flex-column">
        <Editor document={document} onChange={updateDocument}></Editor>
      </div>
    </>
  );
}

export default App;
