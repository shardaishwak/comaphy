import React from 'react';
import Notation from './Notation';

import { SectionTitle, SectionSubtitle, Text } from './DefaultStyled/DefaultLayout';
import '../Layout/DefaultStyled/DefaultStyled.css';
import { KeyWord } from './DefaultStyled/KeyWord';

const Stylment = {
	marginTop: '1em'
};

class Layout extends React.PureComponent {
	render() {
		return (
			<div className="Section" style={Stylment}>
				<SectionTitle>Getting Started</SectionTitle>
				<SectionSubtitle>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. At, tempore repellat doloremque ea officia
					natus id maxime maiores velit repudiandae?
				</SectionSubtitle>
				<hr />
				<div style={Stylment}>
					<Text>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa libero quos qui quod
						omnis, optio voluptatem, porro <KeyWord>quibusdam</KeyWord>, fuga deleniti nam voluptatibus odio
						officiis possimus explicabo magnam accusantium enim temporibus recusandae. Necessitatibus beatae
						corrupti aliquam rerum quasi sit illum?
					</Text>
				</div>
				<div style={Stylment}>
					<Notation success>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, provident.
					</Notation>
				</div>
			</div>
		);
	}
}

export default Layout;
