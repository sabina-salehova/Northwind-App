import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {
  addToCart=(product)=>{
    alert(product.productName);
  }
  render() {
    return (
      <div>
        <h3 className="pb-3">{this.props.info.name}</h3>
        <Table striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Quantity per Unit</th>
              <th>Unit Price</th>
              <th>Units in Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button onClick={()=>this.addToCart(product)} color="success">add</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
