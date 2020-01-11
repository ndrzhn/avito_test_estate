import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/estateObjectStyle.css';
import { getData } from '../store/getData.js';

const EstateObject = ({ data, getData }) => {
  useEffect(() => {
    getData();
  }, []);

  return (
    <ul className="content">
      {data.map(({id,address,title,previewImage,price}) => (
        <li className="item" key={id}>
          <img src={ previewImage } alt={ title }></img>
          <p className="title"><Link to={`/item/${id}`}>{ title }</Link></p>
          <p className="address">{address}</p>
          <p className="price">{price}</p>
        </li>
      ))}
    </ul>
  );
};

export default connect(
  ({ backEndMock }) => ({
      data: backEndMock.data
  }),
  { getData })(EstateObject);
