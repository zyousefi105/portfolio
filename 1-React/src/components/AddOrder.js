import React, { Component } from 'react';
import axios from 'axios';

const API_ORDERS_ADD = 'http://localhost:3012/insert';

class AddOrder extends Component {
  state = {displayRegisterSuccess: false, orderNumber: 0, customerName: "", customerAddress: "", customerEmail: "", product: "", orderCount: 0 };

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

  displayRegisterSuccess = () => {
    this.setState({ displayRegisterSuccess: !this.state.displayRegisterSuccess });
  }

  saveOrder = orderData => {
    console.log("about to call rest..");

    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.post['Access-Control-Allow-Headers'] = '*';
    axios.defaults.headers.post["Access-Control-Allow-Methods"] = '*';

    axios.post(`${API_ORDERS_ADD}`, {
      "orderId": this.state.orderNumber,
      orderDate: '1398/10/10',
      orderStatus: 'ثبت شده',
      customerName: this.state.customerName,
      product: this.state.product,
      customerEmail: this.state.customerEmail,
      customerAddress: this.state.customerAddress,
      orderCount: this.state.orderCount
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      this.displayRegisterSuccess();

    // fetch(`${API_ORDERS_ADD}`, {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Headers': '*',
    //     'Access-Control-Allow-Methods': '*'
    //   },
    //   body: JSON.stringify({"orderId":"4", 
    //       orderDate:'1398/10/10',
    //       orderStatus:'ordered',
    //       customerName:this.state.customerName,
    //       product:this.state.product,
    //       customerEmail:this.state.customerEmail,
    //       customerAddress:this.state.customerAddress,
    //       orderCount: this.state.orderCount
    //  })
    // })
  
  }

  render() {
    return (
      <div>
      <div class="divalign">

        <table width="40%" >
          <tr>
            <td><input
              onChange={this.updateOrderNumber}
              onKeyPress={this.handleKeyPress}
              placeholder='شماره سفارش'
              class= "inputstyle"
            /></td>
            <td><b>شماره سفارش</b></td>
          </tr><tr>
            <td><input
              onChange={this.updateProduct}
              onKeyPress={this.handleKeyPress}
              placeholder='نام محصول'
              class= "inputstyle"
            /></td>
            <td><b>نام محصول</b></td>
          </tr><tr>
            <td><input
              onChange={this.updateCustomerName}
              onKeyPress={this.handleKeyPress}
              placeholder='نام مشتری'
              class= "inputstyle"
            /></td>
            <td><b>نام مشتری</b></td>
          </tr><tr>
            <td><input
              onChange={this.updateCustomerEmail}
              onKeyPress={this.handleKeyPress}
              placeholder='ایمیل مشتری'
              class= "inputstyle"
            /></td>
            <td><b>ایمیل مشتری</b></td>
          </tr><tr>
            <td><input
              onChange={this.updateCustomerAddress}
              onKeyPress={this.handleKeyPress}
              placeholder='ادرس مشتری'
              class= "inputstyle"
            /></td>
            <td><b>ادرس مشتری</b></td>
          </tr><tr>
            <td><input
              onChange={this.updateOrderCount}
              onKeyPress={this.handleKeyPress}
              placeholder='تعداد سفارش'
              class= "inputstyle"
            /></td>
            <td><b>تعداد سفارش</b></td>
          </tr>
        </table>
      </div>

       <div>
        <button onClick={this.saveOrder}>ثبت</button>
        <p></p>

          {
            this.state.displayRegisterSuccess ? (
              <div>
                <p>ثبت سفارش با موفقیت انجام شد</p>
              </div>
            ) : (
                <div>
                </div>
              )
          }

      </div>

    </div>
    )
  }
}

export default AddOrder;
