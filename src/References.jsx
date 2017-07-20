import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
export default class References extends React.Component{
	render(){
		return(			
			<Grid>	
				<Row>			
					<Col sm={2}>
						<div className="header experience">References</div>
					</Col>
					{this.props.refs.map((ref,index)=>{
					return(						
							<Col sm={10} key={index}>
								<Row>
									<Col sm={5}>
										<div className="subHeader">{ref.name}</div>
									</Col>
								</Row>
								<Row>
									<Col sm={5}>
										{ref.title}
									</Col>
								</Row>
								<Row>
									<Col sm={5}>
										{ref.number}
									</Col>
								</Row>
							</Col>						
					)
				})}
				</Row>
			</Grid>
			
		)
	}
}