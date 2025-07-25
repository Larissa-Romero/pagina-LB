import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1>Cafetería Aroma</h1>
        <nav>
          <ul className="nav">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Menú</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <h2>Bienvenido</h2>
        <p>Disfruta del mejor café artesanal.</p>
        <img src="/cafe-bienvenida.jpg" alt="Bienvenida" className="img" />
      </main>
      <footer className="footer">
        <p>© 2025 Cafetería Aroma</p>
        <p>Dirección: Calle Principal #127</p>
        <p>Tel: 9835-0985- | larissaromero2002@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;