import React from "react";
import "./styles.css";

import CKEditor from "@ckeditor/ckeditor5-react";
import Editor from "@juniyadi/ckeditor5-custom-build";

export default function App() {
  return (
    <div className="App">
      <CKEditor editor={Editor} data="<p>Hello from CKEditor 5!</p>" />
    </div>
  );
}
