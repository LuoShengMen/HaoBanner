import React, {Component} from 'react';
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
              width={700} //宽度
              height={400} //高度
              imgData={IMAGE_DATA} //数据
              dirdection={'vertical'} // 动画方向垂直vertical，水平horizontal待完成
              delay={3} //动画时间  默认3秒
              speed={1} // 动画速度 默认1秒
              pause={true} //是否包含暂停
              autoPlay={true} //自动播放 默认自动播放
              fadein={true} // 是否淡入淡出， 只有在无缝播放时有效 默认切换播放
              seamless={true} // 是否无缝播放 默认无缝播放
              arrows={true} // 是否包含箭头 默认显示
              dots={true} // 是否包含dot 默认现实
          />
        </div>
    );
  }
}

export default App;
