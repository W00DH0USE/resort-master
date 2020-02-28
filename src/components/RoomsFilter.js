import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';

const getUniqueValues = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({rooms}) {
  const context = useContext(RoomContext);
  const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;
  
  // Get unique types
  let types = getUniqueValues(rooms, 'type');
  // Get all types
  types = ['all',...types];
  // Map to JSX
  types = types.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  });

  // Get unique Capacities
  let people = getUniqueValues(rooms, 'capacity');
  // Map to JSX
  people = people.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  });

  return (
    <section className="filter-container">
      <Title title="search rooms"/>
      <form className="filter-form">
        {/* Select Type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
            {types}
          </select>
        </div>
        {/* Select Guests */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
            {people}
          </select>
        </div>
        {/* Price Range */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input className="form-control" type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange}/>
        </div>
        {/* Room Size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input className="size-input" type="number" name="minSize" id="minSize" value={minSize} onChange={handleChange}/>
            <input className="size-input" type="number" name="maxSize" id="maxSize" value={maxSize} onChange={handleChange}/>
          </div>
        </div>
        {/* Extras */}
        <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    </section>
  )
}
