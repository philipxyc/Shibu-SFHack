import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import ProblemListView from './ProblemListView';
import ProblemData from './assets/problem_data.json';
import Page from './assets/Search.png'

class ProblemPanel extends React.Component {
	select(i) {
		this.props.mainApp.setState({contentParams: {selectedIndex: i}});
	}

	render() {
		return (
			<img  src={Page} alt='Page' style={{ margin:20, width: '90%' }} />
		);
	}
}

export default ProblemPanel;
