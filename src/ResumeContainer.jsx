import React from 'react';
import Header from './header.jsx';
import Skills from './Skills.jsx';
import Resume from './resume.json';
import References from './References.jsx';
import Experience from './Experience.jsx';
import Education from './Education.jsx';
import {Row,Grid} from 'react-bootstrap';
export default class ResumeContainer extends React.Component{
	constructor(props){
		super(props);
		console.log(Resume);
		
	}
	render(){
		return (
			<Grid>
				<Header basics={Resume.basics}/>
				<Experience work={Resume.work}/>
				<Skills skills={Resume.skills}/>
				<Education education={Resume.education}/>
				<References refs={Resume.references}/>
			</Grid>
		)
	}
}