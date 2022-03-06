import React from "react";
import PropTypes from "prop-types";
import "./Description.css";

function Description ({ name, binomialName, price, wateringsPerWeek, fertilizerType, heightInCm }) {
    return (
        <div>
            <h2>{name}</h2>
            <p><i>{binomialName}</i></p>
            <p>Price: {price}</p>
            <p>Waterings per week: {wateringsPerWeek}</p>
            <p>Fertilizer type: {fertilizerType} </p>
            <p>Height: {heightInCm} cm</p>
        </div>
    );
}

Description.propTypes = {
    name: PropTypes.string,
    binomialName: PropTypes.string,
    price: PropTypes.number,
    wateringsPerWeek: PropTypes.number,
    fertilizerType: PropTypes.oneOf(["nitrogen", "phosphorus"]),
    heightInCm: PropTypes.number
};

export default Description;
