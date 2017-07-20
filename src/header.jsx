import React from 'react';
import {Col,Row,Grid} from 'react-bootstrap';

export default class Header extends React.Component{
	render(){
		return (
			<Grid>
				<Row>					
					<Col sm={8}><div className="header">{this.props.basics.name}</div></Col>
					<Col sm={2}>
						<Row>
							{this.props.basics.location.address}
						</Row>						
						<Row>	
							{this.props.basics.location.city},{this.props.basics.location.region}
						</Row>
						<Row>
							{this.props.basics.phone}
						</Row>
						<Row>
							{this.props.basics.email}
						</Row>
					</Col>
				</Row>
				<Row>
					<Col sm={2}>
						<div className="subHeader">{this.props.basics.label}</div>
					</Col>
				</Row>
				<Row>
				</Row>
				<hr id="headerRule"/>
			</Grid>

		)
	}
}