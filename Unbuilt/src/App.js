import React from "react";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="container-fluid">
      <div className="row my-5 d-inline">
        <h1 className="text-center">Resim Galerisi</h1>
        <Gallery />
      </div>
    </div>
  );
}
export default App;
