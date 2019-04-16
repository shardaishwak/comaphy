import React from 'react';
import styled, { css } from 'styled-components';

import '@fortawesome/fontawesome-free/css/all.css';

const Type = {
	icon: {
		primary: 'fas fa-star-of-life',
		success: 'fas fa-check-double',
		warning: 'fas fa-exclamation',
		danger: 'fas fa-times'
	},
	color: {
		primary: '0, 128, 255',
		danger: '237, 41, 57',
		success: '60, 186, 84',
		dark: '8, 5, 1',
		egyptian: '16, 52, 166',
		warning: '247, 214, 36'
	}
};

const Container = styled.div`
	padding: .65em 1.5em;
	border-radius: 5px;
	color: #000;
	font-weight: 200;
	background: rgba(238, 238, 238, .85);
	margin: .75em 0;
	border: 2px solid rgb(238, 238, 238);
	border-left-width: 5px;
	display: flex;
	flex-direction: row;
	align-items: center;

	${(props) =>
		props.primary &&
		css`
			background: rgba(${Type.color.primary}, .90);
			border: 2px solid rgb(${Type.color.primary});
			border-left-width: 5px;
			color: #fff;
		`};
	${(props) =>
		props.danger &&
		css`
			background: rgba(${Type.color.danger}, .85);
			border: 2px solid rgb(${Type.color.danger});
			border-left-width: 5px;
			color: #fff;
		`};
	${(props) =>
		props.success &&
		css`
			background: rgba(${Type.color.success}, .85);
			border: 2px solid rgb(${Type.color.success});
			border-left-width: 5px;
			color: #fff;
		`};
	${(props) =>
		props.warning &&
		css`
			background: rgba(${Type.color.warning}, .85);
			border: 2px solid rgb(${Type.color.warning});
			color: #fff;
		`};
`;

const NotationText = styled.h4`
	margin-left: 1em;
	font-weight: 500;
`;

const Notation = (props) => {
	let icon;
	if (props.primary) icon = Type.icon.primary;
	else if (props.danger) icon = Type.icon.danger;
	else if (props.success) icon = Type.icon.success;
	else if (props.warning) icon = Type.icon.warning;

	return (
		<Container {...props}>
			<i className={icon} style={{ fontSize: '20px' }} />
			<NotationText>{props.children}</NotationText>
		</Container>
	);
};

export default Notation;
