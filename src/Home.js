import React from 'react';
import Paper from 'material-ui/Paper';
import MdIconDoneAll from 'material-ui/svg-icons/action/done-all';
import MdIconCenterFocusWeak from 'material-ui/svg-icons/image/center-focus-weak';
import MdIconEqualizer from 'material-ui/svg-icons/av/equalizer';
import MdIconArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Subheader from 'material-ui/Subheader'
import Me1 from './assets/Me1.png';
import Me2 from './assets/Me2.png';
import Baby from './assets/Baby.png';
import { Tabs, Tab } from 'material-ui/Tabs';
import ProblemListView from './ProblemListView';
import ProblemData from './assets/problem_data.json';


import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { List, ListItem } from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Card } from 'material-ui';


class Home extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			open: false,
			dialog: false,
			me: 1,
		};
	}


	handleAddProblem = (event) => {
		this.setState({
			me: 2,
		});
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


	handleDialogOpen = () => {
		this.setState({ dialog: true });
		this.handlePopRequestClose();
	};

	handleDialogClose = () => {
		this.setState({ dialog: false });
		this.handleAddProblem();
	};


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
											<MenuItem primaryText="脱发" onClick={this.handleDialogOpen} />
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

							<Dialog
								title="食补基本情况问卷"
								actions={[
									<FlatButton
										label="取消"
										primary={true}
										onClick={this.handleDialogClose}
									/>,
									<FlatButton
										label="确认"
										primary={true}
										keyboardFocused={true}
										onClick={this.handleDialogClose}
									/>,
								]}
								modal={false}
								open={this.state.dialog}
								onRequestClose={this.handleDialogClose}
							>
								<TextField
									floatingLabelText="症状持续时间"
								/><br />
								<br />
								<TextField
									floatingLabelText="家族病史"
								/><br />
								<br />
								<TextField
									floatingLabelText="作息情况"
								/><br />
								<br />
							</Dialog>
						</div>
					</div>
					<List>
						<Subheader>一周食补方案</Subheader>
						<ListItem
							primaryText="周一"
							secondaryText="早饭：燕麦牛奶 蓝莓
							中饭：鸡胸肉沙拉 糙米饭
							晚饭：烤三文鱼 蒸西兰花胡萝卜 红薯泥 "
						/>
						<ListItem
							primaryText="周二"
							secondaryText="早饭：黑芝麻糊 蓝莓
							中饭：首乌猪脑汤 芝麻饼 
							晚饭：冬瓜汤 杏仁"
						/>
						<ListItem
							primaryText="周三"
							secondaryText="早饭：小米粥 
							中饭：凉拌莲藕 糙米饭  
							晚饭：桑椹枣仁汤 "
						/>
						<ListItem
							primaryText="周四"
							secondaryText="早饭：燕麦牛奶 蓝莓
							中饭：鸡胸肉沙拉 糙米饭
							晚饭：烤三文鱼 蒸西兰花胡萝卜 红薯泥"
						/>
						<ListItem
							primaryText="周五"
							secondaryText="早饭：燕麦牛奶 蓝莓
							中饭：鸡胸肉沙拉 糙米饭
							晚饭：烤三文鱼 蒸西兰花胡萝卜 红薯泥"
						/>
					</List>
				</Tab>
				<Tab
					label='小宝'
					onActive={() => { this.select(1) }}
				>

					<div style={{ display: 'flex', margin: 40, marginTop: 60 }}>
						{/* Image on the left */}
						<img src={Baby} alt='Baby' style={{ width: '70%' }} />


						{/* Buttons on the right */}
						<div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column' }}>

							<List style={{ width: '120%' }}>
								<ListItem primaryText="长高" rightIcon={<MdIconArrow />}
									style={{ marginBottom: 15, backgroundColor: 'black', color: 'white' }} />
								<ListItem primaryText="智力" rightIcon={<MdIconArrow />}
									style={{ marginBottom: 15, backgroundColor: 'black', color: 'white' }} />
								{this.state.me == 2 ? (<ListItem primaryText="脱发" rightIcon={<MdIconArrow />}
									style={{ marginBottom: 15, backgroundColor: 'black', color: 'white' }} />
								) : null}

								<ListItem primaryText="+ 添加"
									onClick={this.handlePopClick}
									style={{ marginBottom: 15 }} >

								</ListItem>
							</List>
						</div>
					</div>
				</Tab>

				<Tab
					label='老爸'
					onActive={() => { this.select(2) }}
				>

					<div style={{ display: 'flex', margin: 40, marginTop: 60 }}>
						{/* Image on the left */}
						<div>
							<img src={Me1} alt='Me1' style={{ width: '70%' }} />
						</div>

						{/* Buttons on the right */}
						<div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column' }}>

							<List style={{ width: '120%' }}>
								<ListItem primaryText="口臭" rightIcon={<MdIconArrow />}
									style={{ marginBottom: 15, backgroundColor: 'black', color: 'white' }} />
								<ListItem primaryText="糖尿病" rightIcon={<MdIconArrow />}
									style={{ marginBottom: 15, backgroundColor: 'black', color: 'white' }} />
								{this.state.me == 2 ? (<ListItem primaryText="脱发" rightIcon={<MdIconArrow />}
									style={{ marginBottom: 15, backgroundColor: 'black', color: 'white' }} />
								) : null}

								<ListItem primaryText="+ 添加"
									onClick={this.handlePopClick}
									style={{ marginBottom: 15 }} >

								</ListItem>
							</List>
						</div>
					</div>
				</Tab>
			</Tabs>

		);
	}
}

export default Home;
