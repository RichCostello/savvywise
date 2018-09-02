import React from 'react';
import { LinesImage } from './Lines_Img';

class LinesHex extends React.Component {
  
    render() {
      let {trigrams, name, number, description} = this.props.hexagram;
  
      return (
   
          <div className="lines-hex-card">
  
           <LinesImage below={trigrams.below} above={trigrams.above}/>

          </div>
      );
    }
  }

export default LinesHex; 
  