import React, { Component } from 'react';
import * as _ from 'lodash';
import { getTrigramByName } from '../constants/lookup.js';

//Single Line
export class YinLine extends Component {
    render() {
        return (
            <div className="yin">
                <span></span>
            </div>
        );
    }
}

//Double line
export class YangLine extends Component {
    render() {
        return (
            <div className="yang">
                <span></span>
                <span></span>
            </div>
        );
    }
}

export class LinesImage extends Component {

    /*
   * Draw a hexagram image.
   * Given `below` and `above`, as an array of kuas.
   * Or `below` and `above`, as it trigram name
   */
  componentDidMount() {
      document.getElementsByClassName('posline')[0].style.top="44px";
      document.getElementsByClassName('posline')[1].style.top="37px";
      document.getElementsByClassName('posline')[2].style.top="30px";
      document.getElementsByClassName('posline')[3].style.top="22px";
      document.getElementsByClassName('posline')[4].style.top="14px";
      document.getElementsByClassName('posline')[5].style.top="7px";
  }

   render() {
       let { below, above } = this.props;
       if ( _.isString(below.title) ||
            _.isString(above.title) ) {
            below = getTrigramByName( below.title );
            above = getTrigramByName( above.title );
        }

        let below_image = _.chain( this.trigramImage( below ) ).reverse().value();
        let above_image = _.chain( this.trigramImage( above ) ).reverse().value();
       
        return (
            <div className="hex-img">
            <div className="posline"></div>
              { above_image }
              { below_image }
            </div>
          );
   }
   // Generate a single trigram
   trigramImage( trigram ) {
    let image = _.chain(trigram.trigrams).map( this.kuaTag ).value();
    return image;
  }

  // Generate a single Yin or Yang line
  kuaTag( kua , index) {
    //let klass = (kua && 'yiang' || 'yin');
    let lines = ( kua  && <YangLine key={index} /> || <YinLine key={index}/> );

    return lines;
  }

}

/*
 * Single trigram image
 */
export class TrigramImage extends LinesImage {
    render() {
      let { tri } = this.props;
      if ( _.isString(tri.title) ) {
        tri = getTrigramByName( tri.title );
      }
  
      let tri_image = _.chain( this.trigramImage( tri ) ).reverse().value()
  
      return (
        <div className="tri-img">
          { tri_image }
        </div>
      )
    }
  }