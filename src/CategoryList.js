import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: []
  };

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  componentDidMount() {
    this.getCategories();
  }

  render() {
    return (
      <div>
        <h3 className="pb-3">{this.props.info.name1}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              active={this.props.currentCategory===category.categoryName?true:false}
              onClick={() => this.props.changeCategoryFunc(category)}
              key={category.id}
            >
              {category.id}. {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
