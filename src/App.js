import React, { Component } from 'react';
import './App.css';
import Slider from './Slider/Slider';

const IMAGE_DATA = [
    {
        src: require('./img/demo1.jpeg'),
        alt: 'images-1',
    },
    {
        src: require('./img/demo2.jpeg'),
        alt: 'images-2',
    },
    {
        src: require('./img/demo3.jpeg'),
        alt: 'images-3',
    },
];
class App extends Component {

  render() {
    return (
      <div className="App">
          <Slider
              imgData={IMAGE_DATA}
              dirdection={'left'}
              delay={2}
              speed={4}
              pause={true}
              autoPlay={true}
          />
      </div>
    );
  }
}

export default App;
