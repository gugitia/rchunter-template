import "./styles.css";
import "../../global.css";

import Header from "../../components/header/header";
import frontimage from "../../assets/image-backg.jpeg";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <img src={frontimage} alt="decoration" className="front-image" />
        <div className="texto">
          <h1 className="titulo">Desenhando e construindo o futuro !</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            recusandae nisi voluptates. Alias pariatur obcaecati, quis omnis
            laboriosam ea asperiores! Rem sint sequi ipsum modi sapiente.
            Doloribus asperiores adipisci quasi?
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
