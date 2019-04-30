import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWraper,LoginBox,Input,Button } from './style';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';

class Login extends PureComponent{
	render(){
		const { loginState } = this.props;
		if(!loginState){
			return(
				<LoginWraper>
					<LoginBox>
						<Input placeholder="账号" ref={(input)=>{this.acount = input}}/>
						<Input placeholder="密码" type='password' ref={(password)=>{this.password = password}} />
						<Button onClick = { () => this.props.login(this.acount,this.password) }>登录</Button>
					</LoginBox>
				</LoginWraper>
			)
		}else{
			return <Redirect to='/'></Redirect>
		}
		
	}
}

const mapState = (state) => ({
	loginState:state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
	login(acountElement,passwordElement){
		dispatch(actionCreators.login(acountElement.value,passwordElement.value))
	}
})

export default connect(mapState,mapDispatch)(Login);