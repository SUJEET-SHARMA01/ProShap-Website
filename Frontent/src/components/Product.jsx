import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function Product({ product }) {
  return (
    <Card style={{ width: "18rem" }} className="my-3 p-4">
      <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
        <Card.Img variant="top" src={product.image} />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`} style={{ textDecoration: "none", color: "inherit" }}>
          <Card.Title className="product-title">{product.name}</Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} Reviews`}
          />
        </Card.Text>

        <Card.Text as="h5">₹{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
