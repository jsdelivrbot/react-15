import React, {Component} from 'react';
/*
const SearchBar = ()=>{
    return <input/>; //React.createElement. If we don't import React it will throw an error
}*/

class SearchBar extends Component{

    render(){
        return <input onChange={(event) => {console.log(event)}}/>;
    }

    onInputChange(event) {
       console.log(event.target.value);
    }
}
export default SearchBar;