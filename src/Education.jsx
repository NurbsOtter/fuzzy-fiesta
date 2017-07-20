import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
export default class Education extends React.Component{
	render(){
		return(			
				<Grid>
					<Row>
						<Col sm={2}>
							<div className="header experience">Education</div>
						</Col>
						<Col sm={10}>							
									{this.props.education.map((edu,index)=>{
										return (
											<div key={index}>
												<Col sm={8} key={index}>
													<Row>
														<div className="subHeader">{edu.institution}</div>
													</Row>
													<Row>
														<div>{edu.area + ' ' + edu.startDate.slice(0,4) + '-' + edu.endDate.slice(0,4)} </div>

													</Row>													
												</Col>
											</div>
											)
									})}								
						</Col>
					</Row>
				</Grid>
		)
	}
}