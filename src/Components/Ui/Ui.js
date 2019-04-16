import styled, { css } from 'styled-components';

export const Theme = {
	maths: 'rgb(44, 83, 140);',
	physics: 'rgb(253, 97, 2)',
	chemsitry: 'rgb(22, 122, 83)',
	coding: 'rgb(199, 0, 57)'
};

export const LoadingText = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30px;
	text-align: center;
	transition: .5s ease-in-out;
	opacity: .3;
	animation: loading .9s linear infinite;

	${(props) => props.math && css`color: ${Theme.maths};`} ${(props) =>
			props.physics && css`color: ${Theme.physics};`} ${(props) =>
			props.chemistry && css`color: ${Theme.chemistry};`} ${(props) =>
			props.coding && css`color: ${Theme.coding};`};

	@keyframes loading {
		0% {
			opacity: 0.6;
		}
		50% {
			opacity: 0.3;
		}
		100% {
			opacity: 0.6;
		}
	}
`;

export const SidebarLayout = styled.nav`
	width: 275px;
	height: 100vh;
	padding: 0.5em;
	font-family: Arial;
	border-right: 0.5px solid #eee;
`;

export const Illustration = styled.img`
	width: 82%;
	margin: 1em;
	color: #0080ff;
`;

export const Title = styled.h1`
	@import url('https://fonts.googleapis.com/css?family=Open+Sans');

	font-family: 'Open Sans', sans-serif;
	text-align: left;
	margin: 1em 0;
	text-align: center;
`;

export const SidebarTitle = styled(Title)`
	margin: .25em 0;
	font-weight: 200;
`;

export const Links = styled.ul`
	padding: .25em;
	display: flex;
	flex-direction: column;
	margin-top: 1em;
`;

export const Ad = styled.img`
	width: 100%;
	margin: .25em;
	margin-top: 2em;
	background: #ddd;
`;

export const Cards = styled.div`
	@import url('https://fonts.googleapis.com/css?family=Open+Sans');

	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	margin-top: 2.5em;
	grid-gap: 2.5em;
	justify-items: center;
	align-self: center;
`;

export const Card = styled.div`
	min-width: 275px;
	max-width: 300px;
	border-radius: 5px;
	display: grid;
	grid-template-rows: 1fr 1fr;
	transition: .25s ease-in-out;
	cursor: pointer;

	&:hover {
		box-shadow: 0 0 50px #00000030;
	}

	${(props) =>
		props.orange &&
		css`
			background: rgb(253, 97, 2);
			color: white;
			box-shadow: 0 0 20px rgba(253, 97, 2, .3);

			&:hover {
				box-shadow: 0 0 40px rgba(253, 97, 2, .3);
			}
		`};

	${(props) =>
		props.aquaBlue &&
		css`
			background: rgb(9, 141, 201);
			color: white;
			box-shadow: 0 0 20px rgba(9, 141, 201, .3);

			&:hover {
				box-shadow: 0 0 40px rgba(9, 141, 201, .3);
			}
		`};

	${(props) =>
		props.sand &&
		css`
			background: rgb(223, 141, 64);
			color: white;
			box-shadow: 0 0 20px rgba(223, 141, 64, .3);

			&:hover {
				box-shadow: 0 0 40px rgba(223, 141, 64, .3);
			}
		`};

	${(props) =>
		props.green &&
		css`
			background: rgb(22, 122, 83);
			color: white;
			box-shadow: 0 0 20px rgba(22, 122, 83, .3);

			&:hover {
				box-shadow: 0 0 40px rgba(22, 122, 83, .3);
			}
		`};

	${(props) =>
		props.red &&
		css`
			background: rgb(199, 0, 57);
			color: white;
			box-shadow: 0 0 20px rgba(199, 0, 57, .3);

			&:hover {
				box-shadow: 0 0 40px rgba(199, 0, 57, .3);
			}
		`};

	${(props) =>
		props.nightBlue &&
		css`
			background: rgb(44, 83, 140);
			color: white;
			box-shadow: 0 0 20px rgba(44, 83, 140, .3);

			&:hover {
				box-shadow: 0 0 40px rgba(44, 83, 140, .3);
			}
		`};
`;

export const CardInfo = styled.div`
	color: #fff;
	padding: 0;
`;

export const CardImage = styled.img`
	width: 100%;
	border-radius: 5px;
`;

export const CardTitle = styled.h2`
	font-size: 22px;
	font-family: 'Open Sans', sans-serif;
	font-weight: 300;
	margin-left: .75em;
	margin-top: 1.5em;
	text-transform: uppercase;
`;

export const CardSubtitle = styled.p`
	font-size: 15px;
	font-family: 'Open Sans', sans-serif;
	font-weight: 300;
	opacity: 0.5;
	margin: .5em 1em;
	text-transform: uppercase;
`;

export const CardParagraph = styled.p`
	font-size: 14px;
	font-family: 'Open Sans', sans-serif;
	font-weight: 400;
	margin: 1em 1.1em;
`;

export const Hoverer = styled.div`
	width: 2px;
	height: 100%;
	position: fixed;
	background-color: rgb(44, 83, 140);
	transition: .15s ease-in;
	z-index: 999;
	cursor: pointer;

	&:hover {
		width: 3px;
	}
`;
