import "./styles.css";
import { Helmet } from 'react-helmet';

import rpfp from "../../assets/rafa-pfp.jpeg";

import Header from "../../components/header/header";

function App() {
  return (
    <div className="app">

       <Helmet>
        <title>Sobre nós</title>
        <meta name="description" content="Conheça mais sobre nós" />
      </Helmet>

      <Header />
      <div className="main1">
        <h1>Sobre nós</h1>
        <div className="texto1">
          <h2>A Empresa</h2>
          <p id="primeiro-p">
            No mercado desde 2016, a RC Hunter em TI nasceu com o propósito de
            ser uma das melhores empresas de TI do país. Oferecemos: Consultoria
            em redes e segurança da informação, contratos de gestão e suporte de
            TI, projetos para redes cabeadas e sem fios para empresas de todos
            os portes e áreas de atuação.
          </p>
          <h2>Nosso Compromisso</h2>
          <p>
            Suprir as necessidades dos nossos clientes com soluções inovadoras e
            eficientes, desde a elaboração conjunta dos projetos, até a sua
            viabilização com a implantação dessas soluções, sempre com o
            assessoramento de profissionais de alta capacitação técnica e sob a
            orientação de normas e procedimentos de garantia e qualidade. É
            desta forma que a RC Hunter mantém seus compromissos de produtos e
            serviços de qualidade superior, otimizando os investimentos de
            nossos clientes, com projeções concretas de resultados rápidos e
            trazendo retornos excepcionais.
          </p>
          <h2>Nossos Valores</h2>
          <p>
            Inovação Sustentável: Buscamos constantemente soluções criativas e
            sustentáveis que atendam às necessidades presentes sem comprometer
            as gerações futuras. Integridade e Ética: Agimos com honestidade,
            transparência e ética em todas as nossas interações, mantendo nossa
            palavra e cumprindo nossos compromissos. Colaboração: Acreditamos
            que grandes realizações são fruto do trabalho em equipe, valorizando
            a diversidade de perspectivas e incentivando a colaboração entre
            nossos colaboradores, parceiros e clientes. Excelência: Buscamos a
            excelência em tudo o que fazemos, desde a qualidade de nossos
            serviços até a experiência do cliente e o desenvolvimento
            profissional de nossos colaboradores. Responsabilidade
            Social: Comprometemo-nos a causar um impacto positivo na sociedade,
            contribuindo para comunidades mais fortes e sustentáveis por meio de
            iniciativas sociais e ambientais. Aprendizado Contínuo: Estamos
            comprometidos com o crescimento e desenvolvimento constantes,
            incentivando a aprendizagem contínua, a adaptação às mudanças e a
            busca por novos conhecimentos. Paixão pelo Cliente: Colocamos nossos
            clientes no centro de tudo o que fazemos, ouvindo atentamente suas
            necessidades e superando suas expectativas para construir
            relacionamentos duradouros.
          </p>
        </div>
        <img src={rpfp} alt="diretor" className="pfp" />
      </div>
    </div>
  );
}

export default App;
