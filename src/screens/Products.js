import React, { useEffect } from "react";
import "./Products.css";
import { Col, Container, Row } from "react-grid-system";
import Item from "../components/Item";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, getProductsAsync } from "../features/product/productSlice";

function Products () {
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsAsync());
    }, []);

    return (
        <Container fluid className="products">
            <Row>
                <Col xs={12} sm={4} offset={{ xs: 0, sm: 8 }} className="search">
                    <input type="text" placeholder="search products" />
                </Col>
            </Row>
            {products && products.length > 0 &&
                <Row className="list">
                    {products.map(product =>
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
