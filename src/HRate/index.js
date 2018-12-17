import React from 'react';

export default class HRate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 根据页面当中的星星的数量来设置默认值
      value: 0,
      arr: [1, 2, 3, 4, 5]
    };
  }

  componentWillReceiveProps(nextProps){
    if(this.props.value !== nextProps.value){
      this.setState({
        value: nextProps.value
      })
    }
  }

  // 返回数值
  changeRate = (data) => {
    const {disabled} = this.props;
    const {value} = this.state;
    if (!disabled && this.props.onChange) {
      this.props.onChange(value !== data ? data : 0);
    }
    this.setState({
      value: value !== data ? data : 0
    })
  };

  render() {
    const {arr, value} = this.state;
    const {size = 20, item = '☆'} = this.props;
    return (
        <span>
          {
            arr.map((ele, index) => (
                <span key={index}>
                {value >= ele
                    ? <span  style={{color:"#FFAC2D",fontSize:`${size}px`}} onClick={() => this.changeRate(ele)}>{item}</span>
                    : <span  style={{color:"#999999",fontSize:`${size}px`}} onClick={() => this.changeRate(ele)}>{item}</span>
                }
              </span>
            ))
          }
        </span>
    );
  }
}
