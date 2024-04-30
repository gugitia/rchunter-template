import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import "./styles.css";

import img1 from "./src/imgs/wpp-icon.png";
import img2 from "./src/imgs/play-icon.png";
import img3 from "./src/imgs/face-icon.png";
import img4 from "./src/imgs/palha-icon.png";
import img5 from "./src/imgs/coke-icon.png";
import img6 from "./src/imgs/friboi-icon.png";
import img7 from "./src/imgs/guarana-icon.png";

const Carousel = () => {
  // Definindo estado para a imagem atual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlayInterval, setAutoPlayInterval] = useState(null);

  // Matriz de objetos de imagens
  const images = [
    { url: img1, title: "Imagem 1" },
    { url: img2, title: "Imagem 2" },
    { url: img3, title: "Imagem 3" },
    { url: img4, title: "Imagem 4" },
    { url: img5, title: "Imagem 5" },
    { url: img6, title: "Imagem 6" },
    { url: img7, title: "Imagem 7" },
    // Adicione mais imagens conforme necessário
  ];

  // Função para avançar para a próxima imagem
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Função para retroceder para a imagem anterior
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="side-images">
        <img
          src={images[(currentImageIndex + 1) % images.length].url}
          alt={images[(currentImageIndex + 1) % images.length].title}
        />
        <img
          src={images[(currentImageIndex + 2) % images.length].url}
          alt={images[(currentImageIndex + 2) % images.length].title}
        />
        <img
          src={images[(currentImageIndex + 3) % images.length].url}
          alt={images[(currentImageIndex + 3) % images.length].title}
        />
        <img
          src={images[(currentImageIndex + 4) % images.length].url}
          alt={images[(currentImageIndex + 4) % images.length].title}
        />
        <img
          src={images[(currentImageIndex + 5) % images.length].url}
          alt={images[(currentImageIndex + 5) % images.length].title}
        />
      </div>
      <button onClick={prevImage} className="btn1">
        <FiArrowLeft size={16} />
      </button>
      <button onClick={nextImage} className="btn2">
        <FiArrowRight size={16} />
      </button>
    </div>
  );
};

export default Carousel;
