import React from "react";
import PropTypes from "prop-types";
import "./Image.css";

function Image ({ src, alt }) {
    return (
        <img src={src} alt={alt} className="image" />
    );
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
};

export default Image;
