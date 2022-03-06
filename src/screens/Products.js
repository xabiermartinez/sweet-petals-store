import React, { useEffect } from "react";
import "./Products.css";
import { Col, Container, Row } from "react-grid-system";
import Item from "../components/Item";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredProducts, getProductsAsync } from "../features/product/productSlice";
import Search from "../components/Search";

function Products () {
    const filteredProducts = useSelector(selectFilteredProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsAsync());
    }, []);

    return (
        <Container fluid className="products">
            <Row>
                <Col xs={12} sm={4} offset={{ xs: 0, sm: 8 }}>
                    <Search />
                </Col>
            </Row>
            {filteredProducts && filteredProducts.length > 0 &&
                <Row className="list">
                    {filteredProducts.map(product =>
                        <Col sm={3} key={product.id}>
                            <Item
                                id={product.id}
                                imgUrl={product.imgUrl}
                                name={product.name}
                                binomialName={product.binomialName}
                                price={product.price}
                            />
                        </Col>
                    )}
                </Row>
            }
        </Container>
    );
}

export default Products;
