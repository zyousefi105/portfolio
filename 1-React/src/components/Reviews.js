import React, { Component } from 'react';
import Header from './Header'
import REVIEWS from '../data/reviews';

const Review = ({ review: { customer, review } }) => (
  <p style={{ margin: 20 }}>{customer} : <em>{review}</em></p>
)

class Reviews extends Component {
  state = { review: {}, reviews: [] };

  componentDidMount() {
      this.setState({ review: REVIEWS[0] })
  }

  fetchReviews = () => {
      this.setState({ reviews: REVIEWS })
  }

  render() {
    return (
      <div class='test'>
        <Header />
        <h2>نظرات شما</h2>
        <Review key={this.state.review.id} review={this.state.review} />
        <button onClick={this.fetchReviews}>بیشتر بدانید!</button>
        {this.state.reviews.map(review => (<Review key={review.id} review={review} />))}
      </div>
    )
  }
}

export default Reviews;
