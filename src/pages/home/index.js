import React,{ Component } from 'react';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import  {HomeWraper,HomeLeft,HomeRight } from './style'

class Home extends Component{
	render(){
		return (
			<HomeWraper>
				<HomeLeft>
					<img className='banner-img' alt='123' src='//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
			</HomeWraper>
		)
	}
}

export default Home;