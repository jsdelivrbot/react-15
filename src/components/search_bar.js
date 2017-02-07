import React, {Component} from 'react';
/*
const SearchBar = ()=>{
    return <input/>; //React.createElement. If we don't import React it will throw an error
}*/

class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state={term:''};
    }

    //onChange the method is called
    render(){
        return  (
            <div className="search-bar">
               <input value={this.state.term}
                   onChange={(event) => this.onInputChange(event.target.value)}/>
            </div>
    );
    }

    onInputChange(term) {
       this.setState({term});
       this.props.onSearchTermChange(term);
    }
}
export default SearchBar;