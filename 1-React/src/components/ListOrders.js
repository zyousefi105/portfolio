import React, { Component } from 'react';
import Orders from './Orders';
import AddOrder from './AddOrder';
import Header from './Header';


class ListOrders extends Component {
  state = { displayBio: false, orders: [] };

  updateOrderNumber = event => {
    this.setState({ orderNumber: event.target.value });
  }

  updateProduct = event => {
    this.setState({ product: event.target.value });
  }

  updateCustomerName = event => {
    this.setState({ customerName: event.target.value });
  }

  updateCustomerEmail = event => {
    this.setState({ customerEmail: event.target.value });
  }

  updateCustomerAddress = event => {
    this.setState({ customerAddress: event.target.value });
  }

  updateOrderCount = event => {
    this.setState({ orderCount: event.target.value });
  }

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  fetchLastestOrder = () => {
    this.render();
    this.toggleDisplayBio();
  }

  render() {
    return (
      <div class='test'>
        <Header />
        {
          this.state.displayBio ? (
            <div>
              <AddOrder />
              <div>
                <button onClick={this.fetchLastestOrder}>بازگشت</button>
              </div>
            </div>
          ) : (
              <div>
                <button onClick={this.toggleDisplayBio}>ثبت سفارش</button>
              </div>
            )
        }
        <Orders  /> 
      </div>
    )
  }
}

export default ListOrders;
