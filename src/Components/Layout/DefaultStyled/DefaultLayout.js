import styled from 'styled-components';

export const Title = styled.h1`
	@import url('https://fonts.googleapis.com/css?family=Open+Sans');

	font-family: 'Open Sans', sans-serif;
	text-align: left;
	margin: 1em 0;
	text-align: center;
`;

export const SectionContainer = styled.div`width: auto;`;

export const SectionTitle = styled(Title)`
	font-size: 35px;
	margin-bottom: .25em;
	text-align: left;
	font-weight: 200;
`;

export const SectionSubtitle = styled.p`
	font-size: 18px;
	margin-bottom: 1em;
	color: #00000095;
	font-weight: 600;
	text-align: left;
`;

export const Text = styled.p`
	color: #000;
	font-size: 18px;
	margin: 1em 0;
`;

export const Courses = styled.div`
	@import url('https://fonts.googleapis.com/css?family=Open+Sans');

	font-family: Open Sans, sans-serif;
	width: 100%;
	font-weight: 400;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
	grid-gap: 2em;
	margin: 2em 0;
`;

export const Course = styled.div`
	color: #000;
	padding: .5em .75em;
	display: grid;
	grid-template-columns: 2fr 1fr;
	align-items: center;
	cursor: pointer;
	transition: .15s ease-in-out;

	&:hover {
		box-shadow: 0 0 10px rgba(0, 0, 0, .1);
		border-radius: 2px;
	}
`;

export const CourseImage = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 2px;
	box-shadow: 0 0 10px rgb(16, 14, 23, .1);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 19px;
	color: #fff;

	background: ${(props) => props.color || 'rgb(199, 0, 57)'};
`;

export const CourseTitle = styled.h3`
	color: #000;
	margin-left: 1em;
	font-weight: 500;
`;

export const Progress = styled.h4`
	color: #000;
	font-weight: 500;
	font-size: 15px;
`;
