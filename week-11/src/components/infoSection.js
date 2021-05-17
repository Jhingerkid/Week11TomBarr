import React from 'react';
import Panel from './panel';

const Infosection = props => {
  return(
    <div className="section">
      <h3 id={props.title}>{props.title}</h3>
      <div className="section-panels">
        <Panel article={props.section[0]}/>
        <Panel article={props.section[1]}/>
        <Panel article={props.section[2]}/>
      </div>
    </div>
  );
};

export default Infosection;