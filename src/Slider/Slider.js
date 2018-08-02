import React, { Component } from 'react';import SliderItem from './SliderItem';import './index.css';let timer = null;export default class Slider extends Component{    constructor(props){        super(props);        this.status = true;        this.state={            nowLocal: 0,            imgData: props.imgData,        }    }    componentDidMount(){        const { nowLocal } = this.state;        const { autoPlay, seamless } = this.props;        if(autoPlay && seamless) {            this.seamlessAutoPlay(nowLocal);        } else if(autoPlay){            this.autoPlay(nowLocal);        }    }    autoPlay = (nowLocal) => {        const { delay, imgData } = this.props;        timer = setTimeout(() => {            nowLocal++;            if(nowLocal >= imgData.length ){                nowLocal = nowLocal - imgData.length;            }            this.setState({nowLocal});            this.autoPlay(nowLocal);        }, delay*1000)    };    seamlessAutoPlay = (nowLocal) => {        const { delay, imgData } = this.props;        timer = setTimeout(() => {            if(this.status){                nowLocal++;                if(nowLocal >= imgData.length ){                    nowLocal = nowLocal-2 ;                    this.status = false                }            } else {                nowLocal--;                if(nowLocal < 0 ){                    nowLocal = nowLocal+2;                    this.status = true;                }            }            this.setState({nowLocal});            this.seamlessAutoPlay(nowLocal);        }, delay*1000)    };    render(){        const { speed, fadein, seamless } = this.props;        const { nowLocal, imgData } = this.state;        return (            <div                className='slider'                style={{                    height: 400,                }}>                {                    seamless ? (                            <ul style={{                                height: 400,                                left: -100 * nowLocal + "%",                                transitionDuration: speed + "s",                                width: imgData.length * 100 + "%"                            }}>                                {imgData.map((item, index) =>                                    <SliderItem                                        key={index}                                        item={item}                                        count={imgData.length}                                        nowLocal={nowLocal}                                        index={index}                                        fadein={fadein}                                        seamless={seamless}                                    />)}                            </ul>                    ) : (                        imgData.map((item, index) =>                            <SliderItem                                key={index}                                item={item}                                count={imgData.length}                                nowLocal={nowLocal}                                index={index}                                fadein={fadein}                                seamless={seamless}                            />)                    )                }            </div>        )    }}