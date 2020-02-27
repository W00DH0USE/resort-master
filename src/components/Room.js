import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Room({room}) {
  const { name, images, price, slug } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt="room-img"/>
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  )
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
  })
}