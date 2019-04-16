import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import { Card, Cards, CardImage, CardTitle, CardSubtitle, CardParagraph, CardInfo } from '../Ui/Ui';

import { SectionTitle, SectionSubtitle } from '../Layout/DefaultStyled/DefaultLayout';

import '../../Default.css';

import MathsIllustration from '../Images/Illustrations/Maths.png';
import PhysicsIllustration from '../Images/Illustrations/Physics.png';
import ChemistryIllustration from '../Images/Illustrations/Chemistry.jpg';
import CodingIllustration from '../Images/Illustrations/Coding.jpg';

const defaultStyling = {
	padding: '0em 3em',
	paddingBottom: '2em',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyItems: 'center'
};

class Dashboard extends PureComponent {
	state = {
		isLoading: true
	};
	componentDidMount() {
		this.setState({ isLoading: false });
	}
	render() {
		console.log(this.state.isLoading);
		return (
			<div style={defaultStyling}>
				<SectionTitle>{this.state.isLoading ? 'Loading' : 'Dashboard'}</SectionTitle>
				<SectionSubtitle>
					Here are all the courses you have access to. Just pick one and start learning!
				</SectionSubtitle>
				<Cards>
					<Link to="/coding">
						<Card red>
							<CardImage src={CodingIllustration} />
							<CardInfo>
								<CardTitle>CODING</CardTitle>
								<CardSubtitle>ALGORITHMS | AI</CardSubtitle>
								<CardParagraph>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi aut numquam
									ullam modi vitae facere fugit quia et dignissimos.
								</CardParagraph>
							</CardInfo>
						</Card>
					</Link>
					<Link to="/maths">
						<Card nightBlue>
							<CardImage src={MathsIllustration} />
							<CardInfo>
								<CardTitle>mathematics</CardTitle>
								<CardSubtitle>fundamental | Theory</CardSubtitle>
								<CardParagraph>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi aut numquam
									ullam modi vitae facere fugit quia et dignissimos.
								</CardParagraph>
							</CardInfo>
						</Card>
					</Link>
					<Link to="/physics">
						<Card orange>
							<CardImage src={PhysicsIllustration} />
							<CardInfo>
								<CardTitle>PHYSICS</CardTitle>
								<CardSubtitle>PROBLEM-SOLVING | QUANTUM</CardSubtitle>
								<CardParagraph>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi aut numquam
									ullam modi vitae facere fugit quia et dignissimos.
								</CardParagraph>
							</CardInfo>
						</Card>
					</Link>
					<Link to="/chemistry">
						<Card green>
							<CardImage src={ChemistryIllustration} />
							<CardInfo>
								<CardTitle>CHEMISTRY</CardTitle>
								<CardSubtitle>EXPERIMENTS | OCULUS</CardSubtitle>
								<CardParagraph>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi aut numquam
									ullam modi vitae facere fugit quia et dignissimos.
								</CardParagraph>
							</CardInfo>
						</Card>
					</Link>
				</Cards>
			</div>
		);
	}
}

export default Dashboard;
