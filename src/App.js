import "./App.scss";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import { Component } from "react";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
  };

  getProducts = categoryId => {

    let url="http://localhost:3000/products";
    if(categoryId)
    {
      url+="?categoryId="+categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  render() {
    let categoryInfo = { name1: "Category Info" };
    let productInfo = { name: "Product Info" };
    return (
      <div>
        <Container className="pt-4">
          <Row>
            <Col xs="3">
              <CategoryList 
                currentCategory={this.state.currentCategory}
                changeCategoryFunc={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <ProductList
                products={this.state.products}
                info={productInfo}
                currentState={this.state.currentState}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
