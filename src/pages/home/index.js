import React,{ PureComponent } from 'react';
import List from './components/List';
import Recommend from './components/Recommend';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import  {HomeWraper,HomeLeft,HomeRight,BackTop } from './style';
class Home extends PureComponent{
	// scrollTo把窗口滚动到指定位置
	handleScollTop(){
		window.scrollTo(0,0);
	}
	render(){
		return (
			<HomeWraper>
				<HomeLeft>
					<img className='banner-img' alt='123' src='//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
				</HomeRight>
				{ this.props.showScroll?<BackTop onClick = { this.handleScollTop}>^</BackTop>:null}		
			</HomeWraper>
			
		)
	}
	componentWillMount(){
		window.removeEventListener('scroll',this.props.changeScroll)
	}
	componentDidMount(){
		this.props.changHomeData();
		this.bindEvent();
	}
	// 监听scroll事件
	bindEvent(){
		window.addEventListener('scroll',this.props.changeScroll)
	}
}

	const mapState = (state) => ({
		showScroll:state.getIn(['home','showScroll'])
	})

const mapDispatch = (dispatch) => ({
	changHomeData(){
		const action  = actionCreators.getHomeInfo();
		dispatch(action);
	},
	changeScroll(){
		if(window.document.documentElement.scrollTop>300){
			dispatch(actionCreators.getScrollTop(true))
		}else{
			dispatch(actionCreators.getScrollTop(false))
		}
	}
})

export default connect(mapState,mapDispatch)(Home);