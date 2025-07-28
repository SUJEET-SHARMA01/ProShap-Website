import React from "react";
import OffcanvasExample from "./components/Navbar";
import Container from "react-bootstrap/esm/Container";
import Footer from "./components/Footer";
import {Outlet} from "react-router-dom"


function App() {
  return (
    <header>
      <OffcanvasExample />
      <main>
        <Container>
          <Outlet/>
        </Container>
      </main>
      <Footer />
    </header>
  );
}

export default App;
