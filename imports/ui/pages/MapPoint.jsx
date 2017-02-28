import React from 'react';
import Geosuggest from 'react-geosuggest';

var MapPoint = React.createClass({
	defaultProps: {
      	lat:59.955413, 
	    lng:30.337844 
	},
	render: function(){
		return (
			<div style={{
			    position: 'relative', color: 'white', background: 'red',
			    height: 5, width: 5    
			  }}>
			  	{this.props.text}
			</div>
		);
	}
});
export default MapPoint;
