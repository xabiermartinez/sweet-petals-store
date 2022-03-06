import React, { useEffect } from "react";
import "./Product.css";
import { Col, Container, Row } from "react-grid-system";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct, getProductAsync } from "../features/product/productSlice";
import { useNavigate, useParams } from "react-router-dom";
import Description from "../components/Description";
import Image from "../components/Image";

function Product () {
    const { productId } = useParams();
    const product = useSelector(selectProduct);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductAsync(productId));
    }, []);

    const goBack = () => {
        navigate(-1);
    };

    return (
        <Container fluid className="product">
            <Row>
                <Col sm={6} offset={{ sm: 6 }} className="back">
                    <button type="button" onClick={goBack}>
                        Go back
                    </button>
                </Col>
            </Row>
            {product &&
                <Row className="detail">
                    <Col sm={6}>
                        <Image
                            src={product.imgUrl}
                            alt={product.name}
                        />
                    </Col>
                    <Col sm={6}>
                        <Description
                            name={product.name}
                            binomialName={product.binomialName}
                            price={product.price}
                            wateringsPerWeek={product.wateringsPerWeek}
                            fertilizerType={product.fertilizerType}
                            heightInCm={product.heightInCm}
                        />
                    </Col>
                </Row>
            }
        </Container>
    );
}

export default Product;
