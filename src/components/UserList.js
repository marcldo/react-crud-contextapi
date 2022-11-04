import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./UserList.css";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const UserList = () => {
  const { users } = useContext(GlobalContext);
  return (
    <ListGroup className="mt-4">
      {users.map((user) => (
        <ListGroupItem className="li-item d-flex">
          <strong>{user.name}</strong>
          <div className="ml-auto">
            <Link className="btn btn-warning" to={`/edit/${user.id}`}>
              Edit
            </Link>
            <Button className="btn btn-danger ms-2">Delete</Button>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
