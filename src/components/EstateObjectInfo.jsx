import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { getItem } from '../store/getItem.js';
import GalleryImages from '../components/GalleryImages.jsx';
import '../styles/estateObjectInfoStyle.css';

const EstateObjectInfo = ({ itemData, getItem, id }) => {
  useEffect(() => {
    getItem({ id });
  }, []);

  return (
    <div className='info-content'>
      {itemData.map(({ id, address, title, price, description, sellerName, images }) => (
        <li className="info-item" key={ id }>
          <p className="info-title">{ title }</p>
          <p className="info-price">{ price }</p>
          <p className="info-address">{ address }</p>
          <GalleryImages images={ images } />
          <p className="info-description">{ description }</p>
          <p className="info-sellerName">{ sellerName }</p>
          
        </li>
      ))}
    </div>
  );
};

EstateObjectInfo.propTypes = {
  itemData: PropTypes.array,
  getItem: PropTypes.func,
  id: PropTypes.string,
}

export default connect(
  ({ backEndMock }) => ({
      itemData: backEndMock.itemData
  }),
  { getItem })(EstateObjectInfo);
