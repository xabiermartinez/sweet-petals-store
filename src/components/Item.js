import React from "react";
import PropTypes from "prop-types";
import "./Item.css";
import { Link } from "react-router-dom";

function Item ({ id, imgUrl, name, binomialName, price }) {
    return (
        <Link to={`/products/${id}`} className="item">
            <div className="image">
                <img src={imgUrl} />
            </div>
            <p>{name}</p>
            <p><i>{binomialName}</i></p>
            <p>Price: {price}</p>
        </Link>
    );
}

Item.propTypes = {
    id: PropTypes.string,
    imgUrl: PropTypes.string,
    name: PropTypes.string,
    binomialName: PropTypes.string,
    price: PropTypes.number
};

export default Item;
