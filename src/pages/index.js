import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import CardSofa from '../components/cardSofa';

import '../styles/index.css';

const IndexPage = () => {
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    fetch('https://api.sofas.mx/api/sofas')
      .then((response) => response.json())
      .then((data) => setDataApi(data.data));
  }, []);

  return (
    <Layout>
      <Seo title="Home" />
      <div style={{ backgroundImage: `url('../../sofa.png')` }} className="hero-container">
        <div className="hero-container-txt">
          <h1>¿Cual es el mejor sofá?</h1>
          <p>
            Elegir un sofá nuevo es una de las decisiones más importantes que vas a tomar para los
            próximos 10 años. Para eso, nuestro equipo de expertos creó esta página con la finalidad
            de ofrecerte toda la información que necesitas saber sobre los mejores sofás en México.
          </p>
        </div>
      </div>

      {dataApi
        .sort((a, b) => b.attributes.Rating - a.attributes.Rating)
        .map((item, i) => {
          return (
            <CardSofa
              key={i}
              title={item.attributes.Title}
              rating={item.attributes.Rating}
              description={item.attributes.Description}
              link={item.attributes.link}
              position={item.attributes.position}
              image={item.attributes.ImageLink}
            />
          );
        })}

      <div className="index-description">
        <p>
          El mercado de sofás te ofrece un número casi infinito de opciones. Pero no te preocupes,
          con los consejos de TOP 5 ya no te perderás.
        </p>
        <h2>Vive mejor con un buen sofá</h2>
        <p>
          El sofá es seguramente el mueble más importante de la sala de estar. Y es que es ahí donde
          vivimos bonitos momentos con nuestra pareja, reunimos a toda la familia para ver una
          película y descansamos tras un largo día. Por eso, cuando llega el momento de comprar un
          sofá, nos lo pensamos mucho para que nuestra elección sea la mejor.
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
