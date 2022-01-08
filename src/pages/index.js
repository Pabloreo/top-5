import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import CardSofa from '../components/cardSofa';

import '../styles/index.css';

const IndexPage = () => {
  const data = [
    {
      title: 'SOFÁ WORCESTER',
      rating: 5,
      position: 1,
      description: [
        'Elegancia y confort.',
        'Asiento amplio y respaldo firme.',
        'Maderas certificadas.'
      ],
      link: 'https://sofamatch.com/collections/sofas/products/sofa-worcester-quantum-ash'
    },
    {
      title: 'SOFÁ ROSEN',
      rating: 4.7,
      position: 2,
      description: [
        'Elegancia y confort.',
        'Asiento amplio y respaldo firme.',
        'Maderas certificadas.'
      ],
      link: 'https://sofamatch.com/collections/sofas/products/sofa-rosen-sofamatch-tela-quantum-patas-natural'
    },
    {
      title: 'Sofa Cama Aqua',
      rating: 4.3,
      position: 3,
      description: [
        'Elegancia y confort.',
        'Asiento amplio y respaldo firme.',
        'Maderas certificadas.'
      ],
      link: 'https://www.amazon.com.mx/dp/B085T9KB7F?tag=mjmrcs-20&linkCode=osi&th=1&psc=1&keywords=sofas%20Moblecasa'
    },
    {
      title: 'Usuma Sillón ',
      rating: 3.8,
      position: 4,
      description: [
        'Elegancia y confort.',
        'Asiento amplio y respaldo firme.',
        'Maderas certificadas.'
      ],
      link: 'https://www.alameda.mx/collections/sillones-y-sofas-3-plazas/products/usum-sillon-2-o-3-plazas-de-madera-de-pino-varios-colores'
    },
    {
      title: 'SOFÁ 5',
      rating: 3.5,
      position: 5,
      description: [
        'Elegancia y confort.',
        'Asiento amplio y respaldo firme.',
        'Maderas certificadas.'
      ],
      link: 'https://sofamatch.com/collections/sofas/products/sofa-worcester-quantum-ash'
    }
  ];

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

      {/* <CardSofa
        title="SOFÁ WORCESTER"
        rating={5}
        image="https://cdn.shopify.com/s/files/1/0598/0438/5441/products/d095d081-348a-4b72-806b-727ffcf75d25_1100x.png"
        description={[
          'Elegancia y confort.',
          'Asiento amplio y respaldo firme.',
          'Maderas certificadas.'
        ]}
        link="https://sofamatch.com/collections/sofas/products/sofa-worcester-quantum-ash"
      /> */}

      {data.map((item, i) => {
        return (
          <CardSofa
            key={i}
            title={item.title}
            rating={item.rating}
            description={item.description}
            link={item.link}
            position={item.position}
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
