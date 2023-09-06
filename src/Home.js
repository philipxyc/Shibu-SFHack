import React from 'react';
import Paper from 'material-ui/Paper';
import MdIconDoneAll from 'material-ui/svg-icons/action/done-all';
import MdIconCenterFocusWeak from 'material-ui/svg-icons/image/center-focus-weak';
import MdIconEqualizer from 'material-ui/svg-icons/av/equalizer';
import MdIconArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Subheader from 'material-ui/Subheader'
import Me1 from './assets/Me1.png';
import { Tabs, Tab } from 'material-ui/Tabs';
import ProblemListView from './ProblemListView';
import ProblemData from './assets/problem_data.json';


import { List, ListItem } from 'material-ui/List';

class Home extends React.Component {

	select(i) {
		this.props.mainApp.setState({ contentParams: { selectedIndex: i } });
	}

	render() {
		return (
			<Tabs initialSelectedIndex={this.props.mainApp.state.contentParams.selectedIndex}>
				<Tab
					label='我'
					onActive={() => { this.select(0) }}
				>
					<div style={{ display: 'flex', margin: 30, marginTop: 60 }}>
						{/* Image on the left */}
						<div>
							<img src={Me1} alt='Me1' style={{ width: '60%' }} />
						</div>

						{/* Buttons on the right */}
						<div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column' }}>

							<List>
								<ListItem primaryText="口臭" rightIcon={<MdIconArrow />}
									style={{ marginBottom: 15, backgroundColor: 'black', color: 'white' }} />
								<ListItem primaryText="肥胖" rightIcon={<MdIconArrow />}
									style={{ marginBottom: 15, backgroundColor: 'black', color: 'white' }} />
								<ListItem primaryText="失眠" rightIcon={<MdIconArrow />}
									style={{ marginBottom: 15, backgroundColor: 'black', color: 'white' }} />


								<ListItem primaryText="+ 添加"
									style={{ marginBottom: 15}} />
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
