import React from 'react';
import {Row,Col,Grid} from 'react-bootstrap';
import TwoColumnBullets from './TwoColumnBullets.jsx';
export default class Skills extends React.Component{
	render(){
		return (	
			<Grid>		
				<Row>
					<Col sm={2}>
						<div className="header experience">Skills</div>
					</Col>
					<Col sm={10}>
						{this.props.skills.map((skill,index)=>{
							return ( //There's like, less stuff in the skills, so I'mma just do it here.
								<div key={index}>
									<Row>
										<Col sm={4}>
											<div className="subHeader">{skill.name}</div>
										</Col>
									</Row>
									<Row>
										<TwoColumnBullets items={skill.keywords}/>
									</Row>
								</div>								
							)
						})}
					</Col>
				</Row>				
				
			</Grid>
		)
	}
}