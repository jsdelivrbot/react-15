import * as React from "react";
import ReactDom from "react-dom";
import SearchBar from './components/search_bar';

/*Create a new component. This component should produce some html*/
//some HTML

const API_KEY = 'AIzaSyDsi4Awmq3IcBHiLTALHZcGk4d-7hVRq5U';
//const is doing the same thing as var
//const means that is not gonna change
//we return JSX a subset of html
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>);
}

//Take this component's generated html and put it on the page
ReactDom.render(<App/>, document.querySelector('.container'));