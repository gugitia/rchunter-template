import "./styles.css";
import { Helmet } from 'react-helmet';

import rpfp from "../../assets/rafa-pfp.jpeg";
import Header from "../../components/header/header";
import Carousel from "../../components/carrosel/carrosel";

function App() {
  return (
    <div className="app">

      <Helmet>
        <title>Nossos serviços</title>
        <meta name="description" content="Conheça mais sobre nosso trabalho" />
      </Helmet>

      <Header />
      <div className="main2">
        <h1>Serviços</h1>
        <div className="texto-servico1">
          <div className="txt1">
            <h2>Servico 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              deserunt rerum nihil tempora, id fugit saepe dolorem vel nemo
              necessitatibus dignissimos in illo quod iste sequi esse quos iure
              asperiores.
            </p>
          </div>
          <img src={rpfp} alt="diretor" className="spic1" />
        </div>

        <div className="texto-servico2">
          <div className="txt2">
            <h2>Servico 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              deserunt rerum nihil tempora, id fugit saepe dolorem vel nemo
              necessitatibus dignissimos in illo quod iste sequi esse quos iure
              asperiores. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Illum deserunt rerum nihil tempora, id fugit saepe dolorem
              vel nemo necessitatibus dignissimos in illo quod iste sequi esse
              quos iure asperiores.
            </p>
          </div>
          <img src={rpfp} alt="diretor" className="spic2" />
        </div>
        <div className="clientes">
          <h1>Clientes</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            beatae ad architecto accusantium blanditiis totam corrupti minima
            nihil unde inventore, perspiciatis, molestiae iure, officia aut
            illum animi nisi? Deserunt, possimus?
          </p>
          <div className="carrosel">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
