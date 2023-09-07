import React from 'react';
import {List, ListItem} from 'material-ui/List';
import MdIconMailOutline from 'material-ui/svg-icons/communication/mail-outline';


class NotificationListView extends React.Component {
	select() {
		this.props.mainApp.enterNotification();
	}

	render() {
		return (
			<List>
				{/* <ListItem onClick={() => {this.select()}} primaryText={<b>今日学习汇报</b>} leftIcon={<MdIconMailOutline />} /> */}
				<ListItem primaryText="小王，早睡早起更有助于配合食补功效哦！头发正在慢慢生长！" leftIcon={<MdIconMailOutline />} />
			</List>
		);
	}
}

export default NotificationListView;