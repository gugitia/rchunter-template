import "./styles.css";
import { Helmet } from 'react-helmet';

import rpfp from "../../assets/rafa-pfp.jpeg";
import Header from "../../components/header/header";
import Form from "../../components/form/form";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    emailText: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="app">

      <Helmet>
        <title>Fale conosco</title>
        <meta name="description" content="entrar em contato" />
      </Helmet>

      <Header />
      <div className="main3">
        <h1>Contato</h1>
        <h3>Fale conosco!</h3>
        <div className="texto1">
          <ul>
            <li>11 11111-1111</li>
            <li>email@email.com</li>
            <li>
              <a href="#">linkedin.com/blblabla</a>
            </li>
          </ul>
        </div>
        <Form />
        <img src={rpfp} alt="diretor" className="pfp12" />
      </div>
    </div>
  );
}

export default App;
