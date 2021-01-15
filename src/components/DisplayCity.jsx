import React, {Component} from 'react';

import DisplayCityview from './css/DisplayCityview.css'

class DisplayCity extends Component{
    constructor(props){
        super(props);

        
    }

    render(){
        return(
          <div key={this.props.index}>
            <ul class = "zip">
            <li>
            {this.props.zipcode}
            </li>
            </ul>
            </div>
        );
    }
}

export default DisplayCity;