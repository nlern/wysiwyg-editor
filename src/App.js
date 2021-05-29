import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Editor from './components/Editor';
import ExampleDocument from './utils/ExampleDocument';

function App() {
  const [document, updateDocument] = useState(ExampleDocument);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">WYSIWYG Editor</Navbar.Brand>
      </Navbar>
      <div className="App">
        <Editor document={document} onChange={updateDocument}></Editor>
      </div>
    </>
  );
}

export default App;
