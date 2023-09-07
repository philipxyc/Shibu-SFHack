import React from 'react';
import Paper from 'material-ui/Paper';
import MdIconDoneAll from 'material-ui/svg-icons/action/done-all';
import MdIconCenterFocusWeak from 'material-ui/svg-icons/image/center-focus-weak';
import MdIconEqualizer from 'material-ui/svg-icons/av/equalizer';
import MdIconArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Subheader from 'material-ui/Subheader'
import Me1 from './assets/Me1.png';
import Me2 from './assets/Me2.png';
import { Tabs, Tab } from 'material-ui/Tabs';
import ProblemListView from './ProblemListView';
import ProblemData from './assets/problem_data.json';


import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { List, ListItem } from 'material-ui/List';

class Home extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			open: false,
			me: 1,
		};
	}


	handleAddProblem = (event) => {

		this.setState({
			me: 2,
		});
		this.handlePopRequestClose();
	};


	handlePopClick = (event) => {
		// This prevents ghost click.
		event.preventDefault();

		this.setState({
			open: true,
			anchorEl: event.currentTarget,
		});
	};


	handlePopRequestClose = () => {
		this.setState({
			open: false,
		});
	};


	select(i) {
		this.props.mainApp.setState({ contentParams: { selectedIndex: i } });
	}

	render() {

		// const isMe1 = ;
		return (
			<Tabs initialSelectedIndex={this.props.mainApp.state.contentParams.selectedIndex}>
				<Tab
					label='我'
					onActive={() => { this.select(0) }}
				>
					<div style={{ display: 'flex', margin: 40, marginTop: 60 }}>
						{/* Image on the left */}
						{this.state.me == 1 ? (<div>
							<img src={Me1} alt='Me1' style={{ width: '70%' }} />
						</div>) : <div>
							<img src={Me2} alt='Me2' style={{ width: '70%' }} />
						</div>}

						{/* Buttons on the right */}
						<div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column' }}>

							<List style={{ width: '120%' }}>
								<ListItem primaryText="口臭" rightIcon={<MdIconArrow />}
									style={{ marginBottom: 15, backgroundColor: 'black', color: 'white' }} />
								<ListItem primaryText="肥胖" rightIcon={<MdIconArrow />}
									style={{ marginBottom: 15, backgroundColor: 'black', color: 'white' }} />
								<ListItem primaryText="失眠" rightIcon={<MdIconArrow />}
									style={{ marginBottom: 15, backgroundColor: 'black', color: 'white' }} />
								{this.state.me == 2 ? (<ListItem primaryText="脱发" rightIcon={<MdIconArrow />}
									style={{ marginBottom: 15, backgroundColor: 'black', color: 'white' }} />
								) : null}

								<ListItem primaryText="+ 添加"
									onClick={this.handlePopClick}
									style={{ marginBottom: 15 }} >

									<Popover
										open={this.state.open}
										anchorEl={this.state.anchorEl}
										anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
										targetOrigin={{ horizontal: 'left', vertical: 'top' }}
										onRequestClose={this.handlePopRequestClose}
									>
										<Menu>
											<MenuItem primaryText="脱发" onClick={this.handleAddProblem} />
											<MenuItem primaryText="便秘" />
											<MenuItem primaryText="长痘" />
											<MenuItem primaryText="抑郁" />
											<MenuItem primaryText="积食" />
											<MenuItem primaryText="痛风" />
											<MenuItem primaryText="阳虚" />
											<MenuItem primaryText="贫血" />
										</Menu>
									</Popover>
								</ListItem>
							</List>
						</div>
					</div>
				</Tab>
				<Tab
					label='小宝'
					onActive={() => { this.select(1) }}
				>
					<ProblemListView
						problemList={ProblemData['outclass']}
						mainApp={this.props.mainApp}
					/>
				</Tab>

				<Tab
					label='老爸'
					onActive={() => { this.select(2) }}
				>
				</Tab>
			</Tabs>

		);
	}
}

export default Home;
