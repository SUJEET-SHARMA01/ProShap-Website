import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function Product({ product }) {
  return (
    <Card className="my-3 p-3 ">
      <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
        <Card.Img
          variant="top"
          src={product.image}
          className="img-fluid"
          style={{ objectFit: "cover" }}
        />
      </Link>

      <Card.Body className="d-flex flex-column">
        <Link
          to={`/product/${product._id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Card.Title className="product-title">{product.name}</Card.Title>
        </Link>

        <Card.Text as="div" className="mt-2">
          <Rating
            value={product.rating}
            text={`${product.numReviews} Reviews`}
          />
        </Card.Text>

        <Card.Text as="h5" className="mt-auto">
          ₹{product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
