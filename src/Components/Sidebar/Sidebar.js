import React, { PureComponent } from 'react';
import StickyBox from 'react-sticky-box';

import { Links, Hoverer } from '../Ui/Ui';
import { SidebarLayout, Illustration, SidebarTitle, StyledLink } from './SidebarLayout';

import '@fortawesome/fontawesome-free/js/all';

import 'animate.css';

import IllustrationImage from '../Images/Illustrations/study3.svg';

class Sidebar extends PureComponent {
	state = {
		links: [
			{
				page: 'Dashboard',
				linkTo: '/',
				pageKey: 1
			},
			{
				page: 'Coding',
				linkTo: '/coding',
				pageKey: 2
			},
			{
				page: 'Physics',
				linkTo: '/physics',
				pageKey: 3
			},
			{
				page: 'Chemistry',
				linkTo: '/chemistry',
				pageKey: 4
			},
			{
				page: 'Maths',
				linkTo: '/maths',
				pageKey: 5
			},
			{
				page: 'Layout',
				linkTo: '/layout',
				pageKey: 6
			}
		],
		isShowing: false,
		widthHoverer: false
	};

	toggleSidebar = (e) => {
		this.setState({ isShowing: !this.state.isShowing });
	};
	render() {
		const configSidebar = {
			display: this.state.isShowing ? 'block' : 'none'
		};
		return (
			<div>
				<div onClick={this.toggleSidebar}>
					<Hoverer />
				</div>

				<StickyBox offsetTop={1} offsetBottom={1} style={configSidebar}>
					<SidebarLayout>
						<SidebarTitle>FANTASIA</SidebarTitle>
						<Illustration src={IllustrationImage} />
						<Links>
							{this.state.links.map((link) => {
								return (
									<StyledLink key={link.pageKey} exact activeClassName="active" to={link.linkTo}>
										{link.page}
									</StyledLink>
								);
							})}
						</Links>
					</SidebarLayout>
				</StickyBox>
			</div>
		);
	}
}

export default Sidebar;
