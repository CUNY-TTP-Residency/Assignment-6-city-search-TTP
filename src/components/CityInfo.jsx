import React, { Component } from 'react';
import axios from 'axios';

import DisplayCity from './DisplayCity';
import CityInfoview from './css/CityInfoview.css'

class CityInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            hits: []
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        
    }


    async componentDidMount(event) {
        try {    
            let cityname = event.target.value.toUpperCase();
            let hits = await axios.get(`https://ctp-zip-api.herokuapp.com/city/${cityname}`);
            this.setState({ hits: hits.data });
            console.log(this.state.hits)
        } catch (error){
            console.error(error);
        }
    }


  

    render(){
        return(
            <div class = "container">
            <div class = "user_input">
                <form>
                <label>
                City: 
                <input type= "text" placeholder = "Find all zip codes" onChange = {this.componentDidMount}/>
                </label>
                </form>
                </div>
                {this.state.hits.map((cityData, index) => {
                     return(
                        <DisplayCity
                         zipcode = {cityData}
                        />
                    )
                })}
                </div>
            )
        }
    }



export default CityInfo;