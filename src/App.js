import React, { Component } from 'react';
import './index.css';
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
              dirdection={'left'} // 方向
              delay={3} //动画时间
              speed={4} // 动画数独
              pause={true} //是否包含暂停
              autoPlay={true} //自动播放
              fadein={true} // 是否淡入淡出， 只有在无缝播放时有效
              seamless={false} // 是否无缝播放
          />
      </div>
    );
  }
}

export default App;
