import React from 'react';
import Panel from './panel';

class Infosection extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props.title);
    return(
      <div className="section">
        <h3>{this.props.title}</h3>
        <div className="section-panels">
          <Panel article={this.props.section[0]}/>
          <Panel article={this.props.section[1]}/>
          <Panel article={this.props.section[2]}/>
        </div>
      </div>
    );
  }
};

export default Infosection;