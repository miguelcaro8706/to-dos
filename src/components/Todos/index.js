import React, { Fragment } from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

const Todos = ({ todos }) => {
  return (
    <Fragment>
      <h2>Todo list</h2>
      <ListGroup>
        {todos.map(function(todo, index) {
          return (
            <ListGroupItem key={index}>
              {todo.title} {todo.completed && <Badge pill>completed</Badge>}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </Fragment>
  );
};

export default Todos;
