import React from 'react';
import PropTypes from 'prop-types';
import EstateObjectInfo from '../components/EstateObjectInfo.jsx';

const SecondPage = ({ match }) => {
    return (
        <div className="app">
            <EstateObjectInfo id={ match.params.id }/>
        </div>
    );
};

SecondPage.propTypes = {
    match: PropTypes.object,
  }

export default SecondPage;