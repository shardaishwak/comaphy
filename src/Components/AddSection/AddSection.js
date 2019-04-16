import React, { PureComponent } from 'react';
import * as firebase from 'firebase';

import phtot from '../Images/Illustrations/Chemistry.jpg';

class AddSection extends PureComponent {
	state = {
		counter: 0,
		isDataLoading: true,
		id: null,
		gotData: null,
		dataid: null,
		file: null
	};
	/*componentDidMount() {
		let rootRef = firebase.database().ref().child('matematics');

		console.log('Got data =>', this.state.isDataLoading);

		rootRef.on('value', (snap) => {
			this.setState({
				counter: snap.val(),
				isDataLoading: false
			});
			console.log('Got data =>', this.state.isDataLoading);
		});
	}*/
	handleChange = (e) => {
		this.setState({ file: URL.createObjectURL(e.target.files[0]) });
		console.log(this.state.value);
	};
	handleId = (e) => {
		this.setState({ id: e.target.value });
		console.log(this.state.id);
	};
	getdataid = (e) => {
		this.setState({ dataid: e.target.value });
		console.log(this.state.dataid);
	};
	addData = (e) => {
		e.preventDefault();
		let db = firebase.firestore();

		db
			.collection('Testings')
			.doc(this.state.id)
			.set({
				content: this.state.value
			})
			.then(() => {
				console.log('Added Successfully');
			})
			.catch((error) => console.log(error));
	};
	getData = (e) => {
		e.preventDefault();
		let db = firebase.firestore();
		var docRef = db.collection('Testings').doc(this.state.dataid);

		docRef
			.get()
			.then((doc) => {
				if (doc.exists) {
					const { content } = doc.data();
					const file = atob(content);
					console.log('Document data:', content);
					console.log(file);
					this.setState({
						gotData: file
					});
				} else {
					// doc.data() will be undefined in this case
					console.log('No such document!');
				}
			})
			.catch(function(error) {
				console.log('Error getting document:', error);
			});
	};
	render() {
		return (
			<div>
				<form onSubmit={this.addData} style={{ display: 'grid', marginBottom: '2em' }}>
					<input type="text" name="id" onChange={this.handleId} />
					<input type="file" name="input" onChange={this.handleChange} />
					<button style={{ background: '#0080ff', color: '#fff', padding: '0.5em 1em', border: 'none' }}>
						Add Data
					</button>
					<hr />
				</form>
				<form onSubmit={this.getData}>
					<input type="text" onChange={this.getdataid} />
					<button style={{ background: 'red', color: '#fff', padding: '0.5em 1em', border: 'none' }}>
						get Data
					</button>
				</form>
				<div>{this.state.gotData}</div>
				<img src={this.state.gotData} alt="" />
			</div>
		);
	}
}

export default AddSection;
