import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Title } from '../Ui/Ui';

export const Illustration = styled.img`
	width: 82%;
	margin: 1em;
	color: #0080ff;
`;

export const TitleLayout = styled.div`
	width: 100%;
	padding: .25em;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const SidebarTitle = styled(Title)`
	margin: .25em 0;
    font-weight: 200;
    margin-left: .5em;
`;

export const SidebarLayout = styled.nav`
	width: 275px;
	height: 100vh;
	padding: 0.5em;
	font-family: Arial;
	border-right: 0.5px solid #eee;
`;

export const StyledLink = styled(NavLink)`
    color: rgb(134, 136, 138);
    font-family: Arial;
    border: none;
    outline: none;
    margin: .25em;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: .30em;
    padding: .45em 1em;
    text-decoration: none;
    border-radius: 3px;
    transition: .15s cubic-bezier(0.165, 0.84, 0.44, 1);

    &.active {
        color: #fff;
		background: rgb(44, 83, 140);
	}
`;
