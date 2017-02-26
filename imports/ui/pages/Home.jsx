var React = require('react');
var data = require('./example.json');
var Home = React.createClass({
	getInitialState: function(){
		return {
			peopleData: data,
			peopleAddress: data.map(function(aPerson){
				return (<tr>
					<td>{aPerson.first_name} {aPerson.last_name}</td>
					<td>{aPerson.address}, {aPerson.city}, {aPerson.state}, {aPerson.zip}</td>
					<td>{aPerson.company_name}</td>
					<td>{aPerson.phone1}</td>					
					<td>{aPerson.email}</td>					
					<td>{aPerson.web}</td>					
				</tr>);
			})
		}
	},
	render: function(){
		return (
			<table>{this.state.peopleAddress}</table>
		);
	}
});

export default Home;
