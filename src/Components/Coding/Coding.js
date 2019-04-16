import React, { PureComponent } from 'react';
import {
	SectionContainer,
	SectionTitle,
	SectionSubtitle,
	Text,
	Course,
	Courses,
	CourseImage,
	CourseTitle
} from '../Layout/DefaultStyled/DefaultLayout';

import '../Layout/DefaultStyled/DefaultStyled.css';
import '../Coding/Coding.css';

import Progress from '../Progress/Progress';

import image from '../Images/Illustrations/Chemistry.jpg';

class Coding extends PureComponent {
	render() {
		return (
			<div className="Section">
				<SectionContainer>
					<SectionTitle>
						Welcome to <span style={{ color: 'rgb(199, 0, 57)', fontWeight: '600' }}>Coding</span>
					</SectionTitle>
					<SectionSubtitle>
						Hello World! Welcome to this course. You'll be amazing of how coding is cool and really fun.
					</SectionSubtitle>
				</SectionContainer>
				<hr />
				<Text>
					There are a lot of things to learn. Here is the list of all the sections and languages available. If
					your are new-bie, we recommend you to start from the Getting Started Section. Happy learning!
				</Text>
				<Courses>
					<Course>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<CourseImage>1</CourseImage>
							<CourseTitle>Getting Started</CourseTitle>
						</div>
						<div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyItems: 'center' }}>
							<Progress sqSize="40" strokeWidth="3" percentage="80" color="rgb(199, 0, 57)" />
							<div>ello</div>
						</div>
					</Course>
				</Courses>
			</div>
		);
	}
}

export default Coding;
