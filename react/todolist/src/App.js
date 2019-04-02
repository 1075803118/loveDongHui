import React, { Component,Fragment } from 'react';
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import './App.css'
class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			list:[]
		}
		this.addItem = this.addItem.bind(this)
	}
	render(){
		return(
			<Fragment>
				<TransitionGroup>
					{ 
						this.state.list.map((item,index)=>{
							return (
								<CSSTransition
									key={ index }
									in={this.state.show}
									timeout = { 1000 }
									classNames = 'fade'
									unmountOnExit
									onEntered = { (el) => {el.style.color = 'red'}}
								>
								<div>{ item }</div>
								</CSSTransition>
							)
						})
					}
					</TransitionGroup>
				<button onClick = {this.addItem}>隐藏与显示</button>
			</Fragment>
		)
	}

	// 往数组增加数据
	addItem(){
		this.setState( (prevState) => {
			return {
				list:[...prevState.list,'item']
			}	
		})
	}
	showHide(){
		this.setState({
			show:this.state.show?false:true
		})
	}
}

export default App;
