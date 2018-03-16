import React, { Component, Fragment } from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import Todos from "./Todos";
import { getTodos } from "../libs/http";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  componentDidMount() {
    getTodos().then(response => {
      return this.setState({
        todos: response.data
      });
    });
  }
  render() {
    const { todos } = this.state;
    return (
      <Fragment>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">To-dos App</NavbarBrand>
        </Navbar>
        <Container fluid={true}>
          <Todos todos={todos} />
        </Container>
      </Fragment>
    );
  }
}

export default App;
