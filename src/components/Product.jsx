import React from 'react';
import PropTypes from 'prop-types';

function Product(props){
  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Product;