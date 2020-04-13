import React, { Component } from 'react';

const API_ORDERS = 'http://localhost:3012/fetch';

class Orders extends Component {
  state = { orders: [] };

  searchOrder = orderQuery => {
    fetch(`${API_ORDERS}`)
      .then(response => response.json())
      .then(json => this.setState({ orders: json }))
      .catch(error => alert(error.message));
  }

  componentDidMount() {
    this.searchOrder();
  }

  render() {

    return (
      <div onLoad={this.searchOrder}>
      <table width="100%" > 
       <tr>
          <td><b>تعداد سفارش</b></td>
          <td><b>ادرس مشتری</b></td>
          <td><b>ایمیل مشتری</b></td>
          <td><b>نام محصول</b></td>
          <td><b>نام مشتری</b></td>
          <td><b>وضعیت سفارش</b></td>
          <td><b>تاریخ سفارش</b></td>
          <td><b>شماره سفارش</b></td>
      </tr>

        {
          this.state.orders.map(order => {
            const { id, orderDate, orderStatus, customerName, product, customerEmail, customerAddress, orderCount } = order;
            return (             
              <tr>
                <td>{orderCount}</td>
                <td>{customerAddress}</td>
                <td>{customerEmail}</td>
                <td>{product}</td>
                <td>{customerName}</td>
                <td>{orderStatus}</td>
                <td>{orderDate}</td>
                <td>{id}</td>
              </tr>
            )
          })
        }
      </table>
      </div>
    )
  }
}

export default Orders;
