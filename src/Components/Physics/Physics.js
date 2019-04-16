import React from 'react';
import * as firebase from 'firebase';

import { LoadingText } from '../Ui/Ui';

import { SectionTitle, SectionContainer, SectionSubtitle } from '../Layout/DefaultStyled/DefaultLayout';
import '../Layout/DefaultStyled/DefaultStyled.css';

class Physics extends React.PureComponent {
	state = {
		data: undefined,
		config: undefined,
		Loading: true,
		isOffline: false
	};
	componentDidMount() {
		const db = firebase.firestore();
		const docRef = db.collection('physics').doc('gettingstarted');

		const configRef = db.collection('mathematics').doc('config');

		docRef
			.get()
			.then((doc) => {
				if (doc.exists) {
					console.log('Found!');
					const data = doc.data();
					this.setState({
						data: data,
						Loading: false,
						loaded: '50%'
					});
				} else {
					console.log('Not file Found!');
				}
			})
			.catch((err) => {
				if (err.code === 'unavailable') this.setState({ isOffline: true });
			});
	}
	render() {
		const data = this.state.data;
		return (
			<div className="Section">
				{this.state.Loading ? (
					<LoadingText math>
						{this.state.isOffline ? 'Please check the internet connection & refresh' : 'Loading...'}
					</LoadingText>
				) : (
					<SectionContainer>
						<SectionTitle>{data.Title}</SectionTitle>
						<SectionSubtitle>{data.Subtitle}</SectionSubtitle>
					</SectionContainer>
				)}
			</div>
		);
	}
}

export default Physics;
