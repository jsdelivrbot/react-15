import React, {Component} from "react";
import ReactDom from "react-dom";
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
/*Create a new component. This component should produce some html*/
//some HTML

const API_KEY = 'AIzaSyDsi4Awmq3IcBHiLTALHZcGk4d-7hVRq5U';


//const is doing the same thing as var
//const means that is not gonna change
//we return JSX a subset of html
/*const App = () => {
 return (
 <div>
 <SearchBar/>
 </div>);
 }*/

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {videos: []};
        YTSearch({key: API_KEY, term: 'other people'}, videos => {
            this.setState({videos});
            //this.setState({videos:videos});
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoDetails video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos}/>
            </div>);
    }
}

//Take this component's generated html and put it on the page
ReactDom.render(<App/>, document.querySelector('.container'));