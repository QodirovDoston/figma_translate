import FooterD from "./FooterD/FooterD";
import NavD from "./NavD/NavD";
import HeaderD from "./HeaderD/HeaderD";
import NavbarpageD from "./NavbarPageD/NavbarpageD";
import React from 'react'

function App() {
  return (
    <>
      <div className="fixed-content">
        <NavbarpageD id="sidebar"/>
        <HeaderD/>
        <NavD />
        <FooterD />
      </div>
    </>
  );
}

export default App;
