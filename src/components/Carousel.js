import React, { Component } from 'react';
import '../App.css';
import createApiHoc from '../helpers/createApiHoc'
import loadData from '../helpers/apiCall'
import Card from './Card'
// items = words
class Carousel extends Component {
  componentDidMount() {
    this.props.load();
  }
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.items.map(item => <Card item={item.word} />)}
      </div>
    );
  }
}

const ApiHoc = createApiHoc(loadData, 'load', 'items');

export default ApiHoc(Carousel);
