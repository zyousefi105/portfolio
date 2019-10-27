import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/zahra.jpg';
import Title from './Title';

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return (
      <div>
        <img src={profile} alt='profile' className='profile' />
        <h1>Hello!</h1>
        <p>My name is Zahra.</p>
        <Title />
        <p>I'm always looking forward to working on meaningful projects.</p>
        {
          this.state.displayBio ? (
            <div>
              <p>I live in San Francisco, and code every day.</p>
              <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
              <p>Besides coding, I also love music and painting!</p>
              <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          )
        }

        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    )
  }
}

export default App;
