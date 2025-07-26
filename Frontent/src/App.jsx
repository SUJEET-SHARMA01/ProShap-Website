import React from "react";
import OffcanvasExample from "./components/Navbar";
import Container from "react-bootstrap/esm/Container";
import Footer from "./components/Footer";

function App() {
  return (
    <header>
      <OffcanvasExample />
      <main>
        <Container>
          <h1>Welcome </h1>
        </Container>
      </main>
      <Footer/>
    </header>
  );
}

export default App;
