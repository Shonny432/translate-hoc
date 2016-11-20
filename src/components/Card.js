import React, { Component } from 'react';
import createApiHoc from '../helpers/createApiHoc'
import {translate} from '../helpers/apiCall'


class Card extends Component {
  render() {
    return (
      <div>
        {this.props.item}
        <button>translate</button>
      </div>
    )
  }
}

const ApiHoc = createApiHoc(translate, 'translateWord', 'word');

//export default ApiHoc(Carousel);

export default Card;
