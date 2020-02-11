import React from 'react';
import PropTypes from 'prop-types';

function Product(props){
  return (
    <div className="product" >
      <style jsx> {`
            .product {
                font-variant: none;
                margin: 0px 10px
            }
        `}
      </style>
      <h3>{props.name}</h3>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Product;