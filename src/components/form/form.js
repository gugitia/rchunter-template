import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./styles.css";

export default function App() {
  const emailRef = useRef(HTMLInputElement);
  const nameRef = useRef(HTMLInputElement);
  const emailtextRef = useRef(HTMLTextAreaElement);
  const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init("QgCdaM8z-M9UmuTqG"), []);
  // Add these
  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_y9h5hak";
    const templateId = "template_qcxhj3t";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        recipient: emailRef.current.value,
        email_text: emailtextRef.current.value,
      });

      alert("email enviado com sucesso!");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="formulario">
      <h3>Solicitar orçamento</h3>
      <form className="for" onSubmit={handleSubmit}>
        <div className="form_group">
          <input ref={nameRef} placeholder="Seu nome" />
        </div>
        <div className="form_group">
          <input ref={emailRef} type="email" placeholder="Seu email" />
        </div>
        <div className="form_group">
          <textarea
            ref={emailtextRef}
            type="text"
            placeholder="Digite a mensagem"
            className="email-text-block"
          />
        </div>
        <button className="enviar" disabled={loading}>
          Enviar
        </button>
      </form>
    </div>
  );
}
