import React from 'react';
import * as IchingTable from '../../constants/lookup.js';
import TwitterPortal from   "./TwitterPortal";
import * as _ from 'lodash';


const TwitterPageContainer = ({match}) => {
    

    let hexNumber = _.toNumber( match.params.number );
      let hex      = IchingTable.getHexagram( hexNumber );
      if ( ! hex ) {
        console.error(`Something is wrong on DetailPage. Hex shouldn't be = ${hex}`);
        console.log('props = ', this.props);
        return (<div/>);
      }

      return (
        <div>
        <TwitterPortal  hexagram={hex} trigrams/>
        </div>
  
      );
};

export default TwitterPageContainer;
