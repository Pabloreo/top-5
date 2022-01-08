import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Rating from '@mui/material/Rating';
import '../styles/cardSofa.css';

const CardSofa = (props) => {
  return (
    <div className="card">
      <div className="card-item">
        <div className="card-ratings">
          <h2>{props.rating}</h2>
          <Rating
            name="read-only"
            value={props.rating}
            precision={0.1}
            readOnly
            style={{ fontSize: `2em` }}
          />
          <h3>
            {props.rating >= 4.5
              ? 'Excelente'
              : props.rating >= 4 && props.rating < 4.5
              ? 'Muy bueno'
              : props.rating >= 3 && props.rating < 4
              ? 'Bueno'
              : props.rating >= 2 && props.rating < 3
              ? 'Regular'
              : props.rating >= 1 && props.rating < 2
              ? 'Malo'
              : 'Muy malo'}
          </h3>
        </div>
        <div className="card-image">
          {props.position === 1 ? (
            <StaticImage src="../images/worcester.png" width={400} quality={95} alt={props.title} />
          ) : props.position === 2 ? (
            <StaticImage src="../images/2.jpeg" width={400} quality={95} alt={props.title} />
          ) : props.position === 3 ? (
            <StaticImage src="../images/3.jpg" width={400} quality={95} alt={props.title} />
          ) : props.position === 4 ? (
            <StaticImage src="../images/4.png" width={400} quality={95} alt={props.title} />
          ) : props.position === 5 ? (
            <StaticImage src="../images/5.jpeg" width={400} quality={95} alt={props.title} />
          ) : (
            <p>NO HAY IMAGEN</p>
          )}
        </div>

        <div className="card-attributes">
          <h4>{props.title}</h4>
          <ul style={{ listStyleImage: `url('../../cheque.png')` }}>
            {props.description.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="card-url">
          <a href={props.link} target="_blank">
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardSofa;
