import React, {Component} from 'react';
/*
const SearchBar = ()=>{
    return <input/>; //React.createElement. If we don't import React it will throw an error
}*/

class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state={term:'dfhdfh'};
    }

    //onChange the method is called
    render(){
        return  (
            <div>
               <input
                   value={this.state.term}
                   onChange={(event) => this.setState({term: event.target.value})}/>
                Value of the input: {this.state.term}
            </div>
    );
    }

    onInputChange(event) {
       console.log(event.target.value);
    }
}
export default SearchBar;