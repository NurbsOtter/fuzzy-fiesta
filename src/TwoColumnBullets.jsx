import React from 'react';
import {Col} from 'react-bootstrap';
export default class TwoColumnBullets extends React.Component{	
	render(){
		return(
			<div>
				<Col sm={6}>
					<ul>
					{this.props.items.filter((item,index)=>{
						return !(index %2);
					}).map((item,index)=>{
						return <li key={index}>{item}</li>;
					})}
					</ul>
				</Col>
				<Col sm={6}>
					<ul>
						{this.props.items.filter((item,index)=>{
							return (index %2);
						}).map((item,index)=>{
							return <li key={index}>{item}</li>;
						})}
					</ul>
				</Col>
			</div>
		)
	}
}