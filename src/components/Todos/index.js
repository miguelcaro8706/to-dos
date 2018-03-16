import React, { Fragment } from "react";
import { ListGroup, ListGroupItem, Input, FormGroup, Label } from "reactstrap";

const isCompleted = {
  opacity: "0.7",
  textDecoration: "line-through"
};

const Todos = ({ todos, toggleTodo }) => {
  return (
    <Fragment>
      <h2>Todo list</h2>
      <ListGroup>
        {todos.map(function(todo, index) {
          return (
            <ListGroupItem key={index}>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    id={todo.id}
                    checked={todo.completed}
                    onChange={() => {
                      toggleTodo(todo.id);
                    }}
                  />{" "}
                  <span style={todo.completed ? isCompleted : {}}>
                    {todo.title}
                  </span>
                </Label>
              </FormGroup>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </Fragment>
  );
};

export default Todos;
