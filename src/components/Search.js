import React from "react";
import "./Search.css";
import { useDispatch } from "react-redux";
import { filterProducts } from "../features/product/productSlice";

function Search () {
    const dispatch = useDispatch();

    const filterProductsByNames = (event) => {
        dispatch(filterProducts(event.target.value));
    };

    return (
        <input
            type="text"
            placeholder="search products"
            className="search"
            onKeyUp={filterProductsByNames}
        />
    );
}

export default Search;
