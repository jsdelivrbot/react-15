/**
 * Created by IrianLaptop on 3/16/2017.
 */
import React, {Component} from 'react';
class GoogleMap extends Component{
    //lifecycle method called after this component was rendered
    componentDidMount(){
        new google.maps.Map(this.refs.map, {
            zoom:12,
            center:{
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    render(){
        return <div ref="map"></div>
    }
}

export default GoogleMap;