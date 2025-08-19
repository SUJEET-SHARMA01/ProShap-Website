import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import Message from "../components/Message";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";

// ✅ import both addToCart & removeFromCart
import { addToCart, removeFromCart } from "../slices/cartSlice";
export default function CartScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems = [] } = useSelector((state) => state.cart || {});

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const qtyChangeHandler = (item, newQty) => {
    const qty = Math.max(
      1,
      Math.min(Number(newQty) || 1, item.countInStock || 1)
    );
    dispatch(addToCart({ ...item, qty }));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };

  const itemsCount = cartItems.reduce((acc, item) => acc + (item.qty || 0), 0);
  const itemsTotal = cartItems
    .reduce((acc, item) => acc + (item.price || 0) * (item.qty || 0), 0)
    .toFixed(2);

  return (
    <Row className="mt-3">
      <Col md={8}>
        <h1 className="mb-3">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your Cart is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item._id} className="py-3">
                <Row className="align-items-center g-3">
                  <Col xs={3} md={2} className="text-center">
                    <Link to={`/product/${item._id}`}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fluid
                        rounded
                        style={{ maxHeight: 64, objectFit: "contain" }}
                      />
                    </Link>
                  </Col>

                  <Col xs={9} md={4}>
                    <Link
                      to={`/product/${item._id}`}
                      className="text-decoration-none"
                    >
                      <div className="fw-semibold text-dark">{item.name}</div>
                    </Link>
                    <div className="small text-muted">
                      ₹ {Number(item.price).toFixed(2)}
                    </div>
                  </Col>

                  <Col xs={6} md={3} className="mt-2 mt-md-0">
                    <Form.Select
                      aria-label={`Qty for ${item.name}`}
                      value={item.qty}
                      onChange={(e) => qtyChangeHandler(item, e.target.value)}
                      disabled={!item.countInStock}
                    >
                      {[...Array(item.countInStock || 0).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>

                  <Col xs={6} md={3} className="text-end">
                    <Button
                      type="button"
                      variant="light"
                      size="sm"
                      onClick={() => removeFromCartHandler(item._id)}
                      title="Remove item"
                    >
                      <MdDelete />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>

      {/* ✅ Summary Section */}
      <Col md={4}>
        <Card className="p-3 ">
          <h4>Subtotal ({itemsCount}) items</h4>
          <h5>₹ {itemsTotal}</h5>
          <hr />
          <Button
            type="button"
            className="btn-block mt-3"
            disabled={cartItems.length === 0}
            onClick={checkoutHandler}
          >
            Proceed To Checkout
          </Button>
        </Card>
      </Col>
    </Row>
  );
}
