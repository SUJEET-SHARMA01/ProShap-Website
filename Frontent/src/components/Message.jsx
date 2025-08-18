// src/components/Message.js
import { Alert } from "react-bootstrap";

function Message({ variant = "info", children }) {
  return <Alert variant={variant}>{children}</Alert>;
}

export default Message;
