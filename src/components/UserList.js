import React from "react";
import "./UserList.css";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const UserList = () => {
  return (
    <ListGroup className="mt-4">
      <ListGroupItem className="li-item d-flex">
        <strong>User One</strong>
        <div className="ml-auto">
          <Link className="btn btn-warning" to="/edit/1">
            Edit
          </Link>
          <Button className="btn btn-danger ms-2">Delete</Button>
        </div>
      </ListGroupItem>
      <ListGroupItem className="li-item d-flex">
        <strong>User One</strong>
        <div className="ml-auto">
          <Link className="btn btn-warning" to="/edit/1">
            Edit
          </Link>
          <Button className="btn btn-danger ms-2">Delete</Button>
        </div>
      </ListGroupItem>
    </ListGroup>
  );
};
