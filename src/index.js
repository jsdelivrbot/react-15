import * as React from "react";
import ReactDom from "react-dom";
/*Create a new component. This component should produce some html*/
//some HTML

//const is doing the same thing as var
//const means that is not gonna change
//we return JSX a subset of html
const App = () => {
    return <div>Hi,dude!</div>;
}

//Take this component's generated html and put it on the page
ReactDom.render(<App/>, document.querySelector('.container'));