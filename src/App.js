import React, { Component } from 'react';
import { GlobalStyle } from './style';
import { Iconfont } from './statics/iconfont/iconfont';
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login'
// 通过引入provider获取store中的数据，使得所有的组件都可以连接store中的数据
import { Provider } from 'react-redux'
import Header from './common/header/index'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
	  	<div>
			
			<BrowserRouter>
				<Header />
				<Route path='/' exact component = {Home}></Route>
				<Route path='/login' exact component = {Login}></Route>
				<Route path='/detail/:id' exact component = {Detail}></Route>
			</BrowserRouter>
			<GlobalStyle />
			<Iconfont />
		</div>
      </Provider>	
    );
  }
}

export default App;
