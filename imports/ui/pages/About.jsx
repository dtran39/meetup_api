import React from 'react';
import GoogleMapReact from 'google-map-react';
var data = require('./example.json');
var apiKey = require('./../../../GoogleMaps_Api').apiKey;
var About = React.createClass({
	getInitialState: function(){
		return {
			center: {lat: 59.95, lng: 30.33},
			zoom: 11
		}
	},
	render: function(){
		return (
			<div style={{width: '100%', height: '400px'}}>
				<GoogleMapReact 
					bootstrapURLKeys={{key: apiKey}}
					defaultCenter={this.state.center}
	        		defaultZoom={this.state.zoom}>
	             	<AnyReactComponent 
			          lat={59.955413} 
			          lng={30.337844} 
			          text={'Kreyser Avrora'}         			
	        		/>
				</GoogleMapReact>
			</div>
		);
	}
});

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,    
  }}>
    {text}
  </div>
);
export default About;