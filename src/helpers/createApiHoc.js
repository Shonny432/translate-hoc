import React, { Component } from 'react';


const createApiHoc = (apiCall, funcName, resultName) => {
  return function(MyComponent) {
    return class Hoc extends Component {
      constructor(props) {
        super(props);
        this.state = {
          items: [],
        };
      }
      onApiCall = () => {
        apiCall().then(res => this.setState({items: res}))
      }

      render() {
        const nextProps = {
          [funcName]: this.onApiCall,
          [resultName]: this.state.items
        }
        return <MyComponent {...nextProps} />
      }
    }
  }
}

export default createApiHoc;
