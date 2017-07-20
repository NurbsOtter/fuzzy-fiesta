import React from 'react'
import {Row,Col} from 'react-bootstrap';
import TwoColumnBullets from './TwoColumnBullets.jsx';
export default class Job extends React.Component{
	render(){
		return(
			<Row>
				<Col sm={8}>
					<Row>
						<Col sm={8}>
							<div className="subHeader">{this.props.job.company}</div>
						</Col>
					</Row>
					<Row>
						<Col sm={8}>
							<div>{this.props.job.position}</div>
						</Col>
					</Row>
					<Row>
						<Col sm={12}>
							<TwoColumnBullets items = {this.props.job.highlights}/>
						</Col>
					</Row>
				</Col>
			</Row>
		)
		
	}
}