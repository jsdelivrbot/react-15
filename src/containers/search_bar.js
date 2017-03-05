/**
 * Created by IrianLaptop on 3/5/2017.
 */
import React, {Component} from 'react';

export default class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! (bind to the context)
    }

    onInputChange(event){
        this.setState({term:event.target.value});
        console.log(event.target.value);
    }

    onFormSubmit(event){
        event.preventDefault(); // this prevents the refreshing of the page

        //TODO
       // Fetch weather data
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input placeholder="Get a five day forecast in your favourite cities"
                        className="form-control"
                        value={this.state.term}
                        onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}