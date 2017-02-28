import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapPoint from './MapPoint.jsx';
// convert address to lat lng
var data = require('./bigdatanew.json');
var apiKey = require('./../../../GoogleMaps_Api').apiKey;

var GoogleMaps = React.createClass({
	getInitialState: function(){
		return {
			center: {lat: 37.0902, lng: -95.7129},
			zoom: 5,
			dataPoints: data.map(function(aPerson, id){
				return (
					<MapPoint key={id} lat={aPerson.lat} lng={aPerson.lng}/>
				);
			})
		}
	},
	render: function(){
		return (
			<div style={{width: '100%', height: '400px'}}>
				<GoogleMapReact
					bootstrapURLKeys={{key: apiKey}}
					defaultCenter={this.state.center}
	        		defaultZoom={this.state.zoom}>
	        		{this.state.dataPoints}
				</GoogleMapReact>
			</div>
		);
	}
});
export default GoogleMaps;
