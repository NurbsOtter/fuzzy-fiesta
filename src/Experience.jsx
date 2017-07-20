import React from 'react';
import {Row,Col,Grid} from 'react-bootstrap';
import Job from './Job.jsx';
export default class Experience extends React.Component{
	render(){
		return(
			<Grid>
			<Row>
				<Col sm={2}>
					<div className="header experience">Experience</div>
				</Col>
				<Col sm={10}>
					{this.props.work.map((job,index)=>{
						return <Job job={job} key={index}/>;
					})}
				</Col>		
			</Row>						
			</Grid>			
		)
	}
}