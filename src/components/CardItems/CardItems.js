/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{Fragment} from 'react';
import { Link } from "react-router-dom";
const CartItems = (props) => {
  return (
    <Fragment>
      <div className="col-lg-3 col-md-4 col-sm-6 col-12 cards__item">
        <Link className="cards__item__link" to={props.path} >
          <figure className="cards__item__pic-wrap">]
            <img
              className="cards__item__img"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.title}</h5>
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

export default CartItems;
